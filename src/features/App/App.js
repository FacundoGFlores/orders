import React from 'react';
import { Link } from 'react-router';
import '../../../node_modules/spectre.css/dist/spectre.min.css';

const App = props => (
  <div>
    <header className="navbar">
      <section className="navbar-section">
        <Link to="#" className="btn">Home</Link>
        <Link to="orderslist" className="btn">Orders List</Link>
        <Link to="randomroute" className="btn">New Order</Link>
      </section>
    </header>
    <div className="container">
      <div className="columns">
        <div className="col-md-9 centered">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
