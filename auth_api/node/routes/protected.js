import { protectFunction } from "../services/protected";

export const protect = async (req, res) => {
  try {
    let authorization = req.headers.authorization;
    let response = {
      data: await protectFunction(authorization),
    };
    res.send(response);
  } catch (err) {
    res.status(err.statusCode || 500).send({
      message: err.message || "Uknown error",
    });
  }
};
