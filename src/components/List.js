import React, { Component } from "react";
import Card from "./Card";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.data.products,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {products.map((item) => (
            <li key={item._id}>
              <Card
                name={item.fulhausProductName}
                price={item.retailPrice}
                imgUrl={item.imageURLs[0]}
              />
            </li>
          ))}
        </ul>
      );
    }
  }
}
