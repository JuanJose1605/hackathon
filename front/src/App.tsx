import React from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './theme/variables.css';
import Home_visitors from './pages/Home_visitors';
import Register from './pages/Register';
import ListProductsVisitors from './pages/List_products_visitors';
import Home from './pages/Home';
import login from './pages/login';
import HomeEmpresa from './pages/inicio';
import Profile_entrepreneur from './pages/Profile_entrepreneur';

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home_visitors" component={Home_visitors} />
          <Route path="/inicio" component={HomeEmpresa} />
          <Route path="/login" component={login} />
          <Route exact path="/register_entrepreneurs" component={Register} />
          <Route exact path="/list_products" component={ListProductsVisitors} />
          <Route exact path="/profile_entrepreneurs" component={Profile_entrepreneur} />
          <Route exact path="/">
            <Redirect to="/enter" />
          </Route>
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;