import express from "express";
import { routes } from "./routes";
import { AppErrors } from "./errors/appErrors";
import { sqliteConnection } from "./databases";
import { runMigrations } from "./databases/migrations";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.use(AppErrors);

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}...`);
});

sqliteConnection()
  .then(() => {
    console.log("Database is conected!");
  })
  .catch((error) => {
    console.log("Database ERROR - ", error);
  });
runMigrations();