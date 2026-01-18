import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true, select: false },
        refreshToken: { type: String, select: false },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.setRefreshToken = async function (token) {
    this.refreshToken = await bcrypt.hash(token, 12);
};

userSchema.methods.compareRefreshToken = function (token) {
    return bcrypt.compare(token, this.refreshToken);
};

export default mongoose.model("User", userSchema);
