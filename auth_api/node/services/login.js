import { getUserByUsername } from "../db";
import sha512 from "salted-sha512";
import jwt from "jsonwebtoken";
import Config from "config";

const isValidPassword = (user, password) => {
  return sha512(password, user.salt) === user.password;
};

export const loginFunction = async (username, password) => {
  const user = await getUserByUsername(username);

  if (isValidPassword(user, password)) {
    const token = jwt.sign({ role: user.role }, Config.jwtSecret, {
      algorithm: "HS256",
      noTimestamp: true,
    });

    return token;
  }
  return { data: "password or email are invalid" };
};
