import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SelectInput } from '../../../shared';
import addOrder from '../orderActions';


class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: null,
      quantity: 0,
    };
  }

  handleFood = (v) => {
    this.setState({
      food: v,
    });
  }

  handleQuantity = (v) => {
    this.setState({
      quantity: v.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      food: this.state.food,
      quantity: this.state.quantity,
    };
    this.props.addOrder(order);
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

OrderForm.propTypes = {
  addOrder: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addOrder }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
