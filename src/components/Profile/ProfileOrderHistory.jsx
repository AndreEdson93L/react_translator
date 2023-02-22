import React from "react";
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

function ProfileOrderHistory({ orders }) {
  const lastTenOrders = orders.slice(-10);
  const orderList = lastTenOrders.map((order, index) => (
    <ProfileOrderHistoryItem key={index} order={order} />
  ));

  return (
    <section>
      <h4>Your order history</h4>

      { orderList.length === 0 && <p>You have no orders yet.</p> }

      <ul>
        {orderList}
        </ul>
    </section>
  );
}

export default ProfileOrderHistory;
