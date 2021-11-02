import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./scss/app.scss";
import { Header, Footer, ScrollToTop } from "./Сomponents";
import { Home, Cart, Pizza } from "./Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" render={() => <Home />} exact />
          <Route path="/cart" render={() => <Cart />} exact />
          <Route path="/pizza/:id" render={(props) => <Pizza id={props.match.params.id} />} exact></Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
