import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch {
    res.sendStatus(403);
  }
};
