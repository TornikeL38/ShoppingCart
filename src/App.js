import Carts from "./Components/Shopping"
import Header from "./Components/header"
import Footer from "./Components/footer"
import "./Components/style.css"

function App() {
  return (
    <div className="fullConteiner">
      <Header />
      <Carts type="boots"/>
      <Carts type="Shirt"/>
      <Carts type="bag"/>
      <Footer />
    </div>
  );
}

export default App;
