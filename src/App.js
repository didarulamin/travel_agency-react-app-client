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
            <Route path="/recovery" component={PassReset} />
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

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
