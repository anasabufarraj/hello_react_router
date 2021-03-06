import { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.history.replace('/products');
  }

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
        <button className="btn btn-dark mx-2" onClick={this.props.history.goBack}>
          Back
        </button>
      </div>
    );
  }
}

export default ProductDetails;
