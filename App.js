import { Route , Switch, Redirect} from "react-router-dom/cjs/react-router-dom.min";
import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to='welcome/'/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        </Switch>
       
      </main>
    </div>
  );
}

export default App;
