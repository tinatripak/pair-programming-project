import "dotenv/config";
import express from "express";
import cors from "cors";
import coffeeShop from "./routes/coffeeShopRoute.js";
import path from "path";
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/coffee-shop", coffeeShop);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
