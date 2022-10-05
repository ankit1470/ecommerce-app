import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
      </Card>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹{prod.price.split(".")[0]}</span>
          <Rating rating={prod.ratings} />
        </Card.Subtitle>
        {cart.some((p) => p.id === prod.id) ? (
          <Button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
            variant="danger"
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }}
            disabled={!prod.inStock}
          >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
      </Card.Body>
    </div>
  );
};

export default SingleProduct;
