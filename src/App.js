import "./App.css";
import Header from "./components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Cherity from "./components/Cherity/Cherity.js";
import Pages from "./components/Pages/Pages.js";
import Shop from "./components/Shop/Shop.js";
import Blog from "./components/Blog/Blog.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cherity">
            <Cherity></Cherity>
          </Route>
          <Route path="/pages">
            <Pages />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
