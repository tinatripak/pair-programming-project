import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const readJsonFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

router
  .route("/")
  .get((_req, res) => {
    try {
      const coffeeShops = readJsonFile("./data/coffee-shop.json");
      if (!coffeeShops) {
        return res.sendStatus(404);
      }
      const shorterCoffeeShop = coffeeShops.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));
      res.json(shorterCoffeeShop);
    } catch (err) {
      res.status(500).send("Could not retrieve data from json");
    }
  })
  .post((req, res) => {
    try {
      const coffeeShops = readJsonFile("./data/coffee-shop.json");
      const newCoffeeShop = {
        id: uuidv4(),
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        features: req.body.features || [],
        description: req.body.description,
        rank: req.body.rank,
        pastries: req.body.pastries || [],
        coffees: req.body.coffees || [],
        instagram: req.body.instagram,
      };

      coffeeShops.push(newCoffeeShop);
      writeJsonFile("./data/coffee-shop.json", coffeeShops);
      res.status(201).json(newCoffeeShop);
    } catch (err) {
      res.status(500).send(`Couldn't add a coffee shop: ${err}`);
    }
  });

router.route("/:id").get((req, res) => {
  const coffeeShops = readJsonFile("./data/coffee-shop.json");
  const coffeeShop = coffeeShops.find((x) => x.id === req.params.id);
  if (!coffeeShop) {
    return res.sendStatus(404);
  }
  res.json(coffeeShop);
});

router.route("/:id").delete((req, res) => {
  try {
    const coffeeShops = readJsonFile("./data/coffee-shop.json");
    const coffeeShopIndex = coffeeShops.findIndex(
      (coffeeShop) => coffeeShop.id === req.params.id
    );

    if (coffeeShopIndex === -1) return res.sendStatus(404);
    console.log(coffeeShopIndex);
    const [deletedCoffeeShop] = coffeeShops.splice(coffeeShopIndex, 1);
    console.log(deletedCoffeeShop);

    writeJsonFile("./data/coffee-shop.json", coffeeShops);

    res.status(200).json(deletedCoffeeShop);
  } catch (err) {
    res.status(500).send(`Couldn't delete the coffee shop: ${err.message}`);
  }
});

export default router;
