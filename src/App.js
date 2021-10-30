import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/SignUp";
import PassReset from "./Pages/PassReset/PassReset";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import MyBookings from "./Pages/MyBookings/MyBookings";
import ManageBookings from "./Pages/ManageBookings/ManageBookings";
import ManageTourPackages from "./Pages/ManageTourPackages/ManageTourPackages";
import Contact from "./Pages/Contact/Contact";
import Booking from "./Pages/Booking/Booking";
import PackupdateForm from "./components/PackageForm/PackupdateForm";
import PackageForm from "./components/PackageForm/PackageForm";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/recovery" component={PassReset} />
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/mybookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings />
            </PrivateRoute>
            <PrivateRoute path="/managetourpackages">
              <ManageTourPackages />
            </PrivateRoute>
            <PrivateRoute path="/update">
              <PackupdateForm />
            </PrivateRoute>
            <PrivateRoute path="/create">
              <PackageForm />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
