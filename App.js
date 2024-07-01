import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
