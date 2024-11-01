import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Ensure these are being used correctly
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Define your routes here */}
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;