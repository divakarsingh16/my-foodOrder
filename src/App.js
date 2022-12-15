import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isShoppingCartOn, setShoppingCartOn] = useState(false);
  const showCartHandeler = () => {
    setShoppingCartOn(true);
  };
  const hideCartHandeler = () => {
    setShoppingCartOn(false);
  };
  return (
    <CartProvider>
      {isShoppingCartOn && <Cart onHideCart={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
