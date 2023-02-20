import Config from "config";
import app from "./server";
import { init as dbInit } from "./db";

let config = Config;

dbInit(config.database);
app.listen(config.port, function () {
  console.log("listening at", config.port);
});
