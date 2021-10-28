import { Route, Switch } from "react-router-dom";
import Stock from "./pages/stock";
import Main from "./pages/main";
import Stocks from "./pages/dashboard";
import About from "./pages/about";
import Nav from "./components/header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/istocks">
        <Stocks />
      </Route>
      <Route path="/stock/:symbol" render={(routerProps) => <Stock {...routerProps}/>}/>
      <Route path="/about">
        <About />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
