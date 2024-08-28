import { useEffect, useState } from "react";
import axios from "axios";
import "./CoffeeShops.scss";
import { Link } from "react-router-dom";

const CoffeeShops = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [visibleCoffeeShops, setVisibleCoffeeShops] = useState(5);

  const getCoffeeShops = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/coffee-shop");
      setCoffeeShops(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    getCoffeeShops();
  }, []);

  const loadMoreCoffeeShops = () => {
    setVisibleCoffeeShops((prevVisible) => prevVisible + 5);
  };

  return (
    <section className="coffee-shops">
      <div className="coffee-shops__header">
        <h2 className="coffee-shops__heading">Go-to Coffee Shops</h2>
      </div>

      <div className="coffee-shop__container">
        {coffeeShops.slice(0, visibleCoffeeShops).map((coffeeShop) => (
          <Link to={`/coffee-shops/${coffeeShop.id}`} key={coffeeShop.id}>
            <div className="coffee-shop__card">
              <img
                className="coffee-shop__img"
                src={`http://localhost:8080/public${coffeeShop.image}`}
                alt="test"
              />
              <p className="coffee-shop__name">{coffeeShop.name}</p>
            </div>
          </Link>
        ))}
      </div>
      {visibleCoffeeShops < coffeeShops.length && (
        <button className="coffee-shops__btn" onClick={loadMoreCoffeeShops}>
          Load More
        </button>
      )}
    </section>
  );
};

export default CoffeeShops;
