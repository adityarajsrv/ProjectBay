import mongoose from "mongoose"

const projectMemberSchema = new mongoose.Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role:{
            type: String,
            enum: ["OWNER", "ADMIN", "MEMBER", "VIEWER"],
            default: "MEMBER"
        },
        joinedAt:{
            type: Date,
            default: Date.now
        },
    },
    {_id: false}
);

const projectSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 20
        },
        description:{
            type: String,
            trim: true,
            maxLength: 1000
        },
        members:{
            type: [projectMemberSchema],
            default: []
        },
        status:{
            type: String,
            enum: ["ACTIVE", "COMPLETED", "BLOCKED", "ARCHIVED"],
            default: "ACTIVE",
            index: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            immutable: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

projectSchema.index(
    {_id: 1, "members.user": 1},
    {unique: true, sparse: true}
)

export default mongoose.model("Project", projectSchema);