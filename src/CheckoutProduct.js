import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <li className="checkoutProduct">
      <div className="checkoutProduct__left">
        <img
          className="checkoutProduct__image"
          src={image}
          alt="Basket item image"
        />
      </div>
      <div className="checkoutProduct__right">
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <small>$</small>
          <span>
            <strong>{price}</strong>
          </span>
        </p>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </p>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </li>
  );
}

export default CheckoutProduct;
