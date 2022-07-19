import React from "react";
import PropTypes from "prop-types";
import "../styles/restaurantCardStyles.css";
import restPlaceHolder from "../resources/images/restPlaceholder.jpg";

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={props.restaurant.img ? props.restaurant.img : restPlaceHolder}
        alt="restaurant pic"
      />
      <div className="restaurant-name wrap-text">{props.restaurant.name}</div>
      <div className="restaurant-desc wrap-text">
        {props.restaurant.cuisines}
      </div>
      <div className="restaurant-location">
        <i className="fas fa-map-marker-alt"></i>
        <span className="distance">{props.restaurant.rating}</span>
      </div>
      <div className="restaurant-review">{`${props.restaurant.reviews} reviews`}</div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object,
  onClick: PropTypes.func,
};

export default RestaurantCard;
