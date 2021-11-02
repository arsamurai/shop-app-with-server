import React from "react";
import { Link } from "react-router-dom";

function PizzaBlock({
  id,
  name,
  imageUrl,
  price,
  description,
  discount,
  handleActiveModal,
  pizzasCountInCart,
}) {

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        onClick={() => handleActiveModal(process.env.REACT_APP_API_URL + imageUrl)}
        src={process.env.REACT_APP_API_URL + imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <p className="pizza-block__text">{description}</p>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          <p className={discount && "price-throw"}>{price} грн.</p>
          {discount && (
            <p className="price-main">{Math.floor(price - (price * discount) / 100)} грн.</p>
          )}
        </div>
        <Link
          to={{pathname: `/pizza/${id}`}}
          className="button button--add button--outline"
        >
          <span>Заказать</span>
          {pizzasCountInCart && <i>{pizzasCountInCart}</i>}
        </Link>
      </div>
    </div>
  );
}

export default PizzaBlock;
