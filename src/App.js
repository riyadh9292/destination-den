import { Spinner } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddNewService from "./components/AddNewService/AddNewService";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import CovidTerms from "./components/Shared/CovidTerms/CovidTerms";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import SingleService from "./components/SingleService/SingleService";
import InitializeFirebase from "./Firebase/Firebase.init";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

InitializeFirebase();

function App() {
  return (
    <div className="App">
      <Spinner />
      <BrowserRouter>
        <CovidTerms />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/services/:id">
            <SingleService />
          </PrivateRoute>
          <PrivateRoute path="/my-orders/:name">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manage-all-orders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddNewService />
          </PrivateRoute>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
