import React, { useState } from "react";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";
import OrdersForm from "../components/Orders/OrdersForm";
import { orderAdd } from "../api/order";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";

const Orders = () => {
  const [orderNotes, setOrderNotes] = useState("");
  const { user, setUser } = useUser();

  const handleOrderClicked = async () => {
    if (!orderNotes || orderNotes.trim() === "") {
      alert("Please enter order notes");
      return;
    }
  
    const [error, updateUser] = await orderAdd(user, orderNotes);
    if (error !== null) {
      return;
    }
  
    storageSave(STORAGE_KEY_USER, updateUser);
    setUser(updateUser);
  };  

  return (
    <>
      <h1>Orders</h1>
      <section id="order-notes">
        <OrdersForm
          orderNotes={orderNotes}
          onOrder={() => handleOrderClicked()}
          onOrderNotesChange={(value) => setOrderNotes(value)}
        />
      </section>
    </>
  );
};

export default withAuth(Orders);
