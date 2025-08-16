import { createRoot } from "react-dom/client";
import Pizza from "./pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza 
        name="Pepperoni" 
        description="pep, cheese, sauce" 
        image = {"/public/pizzas/pepperoni.webp"}
      />
      <Pizza 
      name="Cheese" 
      description="cheese, sauce" 
      image = {"/public/pizzas/four_cheese.webp"}
      />
      <Pizza 
      name="Meat Lovers" 
      description="pep, cheese, sauce, sausage, bacon"
      image = {"/public/pizzas/big_meat.webp"}
      />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);

  