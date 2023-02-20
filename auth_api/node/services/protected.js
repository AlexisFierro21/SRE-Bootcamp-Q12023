import jwt from "jsonwebtoken";
import Config from "config";

const verifyAuth = (authorization) => {
  const extractedToken = authorization.split("Bearer ")[1];
  return new Promise((resolve, reject) => {
    jwt.verify(extractedToken, Config.jwtSecret, (err, decode) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(decode);
    });
  });
};

export const protectFunction = async (authorization) => {
  const data = await verifyAuth(authorization);
  return {
    data: "You are under protected data",
  };
};
