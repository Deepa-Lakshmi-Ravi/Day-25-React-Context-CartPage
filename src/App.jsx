import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping Cart</h1>
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
