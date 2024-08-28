import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GiCoffeeMug } from "react-icons/gi";

import "./CoffeeShop.scss";

const CoffeeShop = () => {
  const { id } = useParams();

  const [coffeeShop, setCoffeeShop] = useState({});
  const getCoffeeShop = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/coffee-shop/${id}`
      );
      setCoffeeShop(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    getCoffeeShop();
  }, []);

  return (
    <section className="coffee-shop">
      <h1 className="coffee-shop__name">{coffeeShop.name}</h1>
      <div className="coffee-shop__details">
        <img
          className="coffee-shop__logo"
          src={`http://localhost:8080/public${coffeeShop.image}`}
          alt={coffeeShop.name}
        />

        <div className="coffee-shop__content">
          <p className="coffee-shop__description">
            Description: {coffeeShop.description}
          </p>

          <div className="coffee-shop__features">
            Features:
            {coffeeShop?.features?.map((feature, index) => (
              <div className="coffee-shop__feature" key={index}>
                <p className="coffee-shop__text"> - {feature}</p>
              </div>
            ))}
          </div>

          <p className="coffee-shop__phone">Phone: {coffeeShop.phone}</p>

          <p className="coffee-shop__address">Address: {coffeeShop.address}</p>
        </div>

        <p className="coffee-shop__rating">
          {coffeeShop.rank} <GiCoffeeMug size={25} />
        </p>
      </div>

      <div className="coffee-shop__products">
        <h2 className="coffee-shop__products-heading">Best Products</h2>
        <div className="coffee-shop__coffees">
          <h3 className="coffee-shop__coffees-heading">Coffee</h3>
          <div className="coffee-shop__coffees-content">
            {coffeeShop?.coffees?.map((coffee) => (
              <div key={coffee.id} className="coffee-shop__coffee">
                <img
                  src={`http://localhost:8080/public${coffee.image}`}
                  alt={coffee.name}
                  className="coffee-shop__coffee-image"
                />
                <p className="coffee-shop__coffee-name">{coffee.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="coffee-shop__pastries">
          <h3 className="coffee-shop__pastries-heading">Pastry</h3>
          <div className="coffee-shop__pastries-content">
            {coffeeShop?.pastries?.map((pastry) => (
              <div key={pastry.id} className="coffee-shop__pastry">
                <img
                  src={`http://localhost:8080/public${pastry.image}`}
                  alt={pastry.name}
                  className="coffee-shop__pastry-image"
                />
                <p className="coffee-shop__pastry-name">{pastry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeShop;
