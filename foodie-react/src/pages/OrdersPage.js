import React, { useEffect, useState } from "react";
import "../styles/ordersPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import OrdersView from "../components/OrdersView";
import CartView from "../components/CartView";
import { useParams } from "react-router";

const OrdersPage = (props) => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState({
    items: [],
    subTotal: 0,
    deliveryCharges: 45,
    coupon: 90,
    grandTotal: 0,
  });


  useEffect(() => {
    /**
     * Fetch the restaurant details from RestaurantService and updates the component state.
     * Sets the state to display loading indicator during data fetch from service.
     */
    const fetchRestaurantDetails = async (id) => {
      let restaurantDetails = await RestaurantService.getRestaurantDetail(id);
      if (restaurantDetails) {
        setRestaurant(restaurantDetails);
      } else {
        setRestaurant(null);
      }
    };

    fetchRestaurantDetails(id);
  }, [id]);

  const handleAddToCart = (item) => {
    console.log(item);
    let cartt = { ...cart };

    // If an element is already present increment otherwise add to cart
    let itemPresent = cartt.items.findIndex(
      (element) => element.id === item.id
    );
    if (itemPresent >= 0) {
      handleIncrement(item);
    } else {
      const newItem = { ...item, quantity: 1 };
      cartt.items.push(newItem);
      calculateTotal(cartt);
    }
  };

  const calculateTotal = (cart) => {
    //Calculate Totals and update
    cart.subTotal = 0;
    for (let item of cart.items) {
      cart.subTotal = cart.subTotal + item.price * item.quantity;
    }
    cart.grandTotal = cart.subTotal + cart.deliveryCharges - cart.coupon;
    cart.grandTotal = cart.grandTotal > 0 ? cart.grandTotal : 0;
    setCart(cart);
  };

  const handleIncrement = (item) => {
    let cartt = { ...cart };
    let newItems = [...cart.items];

    //Update the item in cart
    newItems[newItems.findIndex((element) => element.id === item.id)]
      .quantity++;
    cartt.items = newItems;
    calculateTotal(cartt);
  };

  const handleDecrement = (item) => {
    let cartt = { ...cart };
    let newItems = [...cart.items];

    //Update the item in cart
    if (item.quantity !== 1) {
      newItems[newItems.findIndex((element) => element.id === item.id)]
        .quantity--;
    } else {
      newItems.splice(
        newItems.findIndex((element) => element.id === item.id),
        1
      );
    }
    cartt.items = newItems;
    calculateTotal(cartt);
  };

  return (
    <div className="main-container order-page">
      <HeaderBar />
      <div className="order">
        <OrdersView restaurant={restaurant} onAddToCart={handleAddToCart} />
        <CartView
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
