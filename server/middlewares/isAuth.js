import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    // const token = req.cookies.token;
    // console.log("token in isAuth", token);
    //   if (!token)
    //     return res.status(401).json({ error: "No token found plz Login first" });
    //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) return res.status(403).json({ error: "Invalid token" });
    //   });
  } catch (error) {
    return res.status(400).json("Error in isAuth", error);
  }
  next();
};
