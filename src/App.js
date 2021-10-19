import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import TryUsForFree from './Pages/TryUsForFree/TryUsForFree';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Auth/Login/Login';
import Registration from './Pages/Auth/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import Services from './Pages/Home/Services';
import PrivateRoute from './Pages/Auth/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/ServiceDetails';

function App ()
{
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/service-details/:id">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path="/try-us-for-free">
              <TryUsForFree />
            </PrivateRoute>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
