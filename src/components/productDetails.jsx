import { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    return (
      <div>
        <h1>Product {this.props.match.params.id} Details</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
          dolor excepturi explicabo modi mollitia natus obcaecati quia quo, sunt
          temporibus ullam? Cumque doloremque et id magnam mollitia nisi voluptatibus!
        </p>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
        <Link className="btn btn-dark mx-2" to="/products">
          Back
        </Link>
      </div>
    );
  }
}

export default ProductDetails;
