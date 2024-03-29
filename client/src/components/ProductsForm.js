import React from "react";
import { Form, Header } from "semantic-ui-react";
import axios from "axios";
import { addProduct } from "../reducers/products";
import { connect } from "react-redux";

class ProductsForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", department: "" };
  state = { ...this.defaultValues };

  handleSubmit = (e) => {
    e.preventDefault();
    const productFormData = { ...this.state };

    // axios.post("/api/products", product).then((res) => {
    //   this.props.history.push("/products");
    // });
    // this.setState({ ...this.defaultValues });

    this.props.addProduct(productFormData);
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { name, price, description, department } = this.state;

    return (
      <div>
        <Header as="h1">New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Department"
              name="department"
              placeholder="Department"
              value={department}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(null, mapDispatchToProps)(ProductsForm);
