import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      {/* <Pizza
        name="Beef Pepperoni"
        description="Pepperoni, mushrooms and cheese"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Chicken Pepperoni"
        description="Pepperoni, mushrooms and cheese"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Cheese lover"
        description="Mozerella, cheddar and  paramesian cheese"
        image={"/public/pizzas/four_cheese.webp"}
      />
      <Pizza
        name="Dancing Fajita"
        description="Fajita, mushrooms, onions, tomatoes, capsicum and cheese"
        image={"/public/pizzas/mexicana.webp"}
      /> */}
      <Order/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
