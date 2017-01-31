import React from 'react';
import { SelectInput } from '../../shared';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: null,
      quantity: 0,
    };
  }

  handleFood = (v) => {
    this.state.food = v;
  }

  handleQuantity = (v) => {
    this.state.quantity = v.target.value;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const options = [
      { label: 'Hamburguer', value: 1 },
      { label: 'Chicken', value: 2 },
      { label: 'Sushi', value: 3 },
      { label: 'Lasagna', value: 4 },
    ];
    return (
      <form className="container" onSubmit={this.handleSubmit} >
        <h3>New order</h3>
        <div className="form-group">
          <SelectInput placeholder="Select a food" onChange={this.handleFood} options={options} />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Enter quantity" onChange={this.handleQuantity} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default OrderForm;
