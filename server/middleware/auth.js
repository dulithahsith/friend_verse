import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "No Token provided." });
    }
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    if (!isCustomAuth) {
      return res.status(401).json({ message: "Unsupported Token." });
    }

    let decodedData;
    decodedData = jwt.verify(token, process.env.ACCESS_SECRET);
    if (decodedData.type !== "access") {
      return res.status(401).json({ message: "Invalid access token" });
    }
    req.userId = decodedData?.id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token Expired" });
    } else {
      return res.status(401).json({ message: "Invalid Token" });
    }
  }
};

export default auth;
