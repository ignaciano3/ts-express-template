import app from "./app";
import chalk from "chalk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    chalk.cyan(`[server] Server listening on: http://localhost:${PORT}`)
  );
});