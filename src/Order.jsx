import Pizza from "./Pizza";
import { useState } from "react";

export default function Order() {
  // const pizzaType = "Pepporani";
  // const pizzaSize = "M";
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");


  return (
    <div className="Order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              <option value="beef pepperoni">Beef Pepperoni</option>
              <option value="chicken pepperoni">Chicken Pepperoni</option>
              <option value="cheese lover">Cheese lover</option>
              <option value="dancing fajita">Dancing Fajita</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="Submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Beef Pepperoni"
              description="Pepperoni, mushrooms and cheese"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>Rs. 1500</p>
          </div>
        </div>
      </form>
    </div>
  );
}
