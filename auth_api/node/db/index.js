import { knex } from "knex";

let db;

export const init = (dbConfig) => {
  db = knex({
    client: "mysql2",
    connection: {
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password || undefined,
      database: dbConfig.database,
    },
  });
};

export const getUserByUsername = (username) => {
  return db.select().from("users").where("username", username).first();
};
