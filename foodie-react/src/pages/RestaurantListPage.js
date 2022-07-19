import React, { useState, useEffect } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantListPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    /**
     * Fetch the list of restaurants from RestaurantService and updates the component state.
     * Sets the state to display loading indicator during data fetch from service.
     */
    const fetchRestaurantList = async () => {
      setLoading(true);
      let restaurantsList = await RestaurantService.getRestaurantsList();
      if (restaurantsList.length > 0) {
        setData(restaurantsList);
        setLoading(false);
        setError(null);
      } else {
        setData(restaurantsList);
        setLoading(false);
        setError("No Data Present!");
      }
    };
    fetchRestaurantList();
  }, []);

  return (
    <div className="restaurant-list-container">
      <HeaderBar />
      <div className="restaurant-list-wrapper child">
        {data.map((res) => {
          return (
            <div key={res.id + res.name}>
              <RestaurantCard key={res.id} restaurant={res} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantListPage;