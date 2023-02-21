import React, { useState } from "react";
import withAuth from "../hoc/withAuth";
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton";
import { useUser } from "../context/UserContext";
import OrdersForm from "../components/Orders/OrdersForm";
import { orderAdd } from "../api/order";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import OrdersSummary from "../components/Orders/OrdersSummary";

const COFFEES = [
  {
    id: 1,
    name: "Coffee1",
    image: "img/coffee1.png",
    alt: "coffee",
  },
  {
    id: 2,
    name: "Coffee2",
    image: "img/coffee2.png",
    alt: "coffee",
  },
  {
    id: 3,
    name: "Coffee3",
    image: "img/coffee3.png",
    alt: "coffee",
  },
  {
    id: 4,
    name: "Coffee4",
    image: "img/coffee4.png",
    alt: "coffee",
  },
];

const Orders = () => {

  const [coffee, setCoffee] = useState(null)
  const { user, setUser } = useUser()

  const handleCoffeeClicked = (coffeeId) => {
    const selectedCoffee = COFFEES.find(coffee => coffee.id === coffeeId )
    setCoffee(selectedCoffee)   
  };

  const handleOrderClicked = async (notes) => {
    if (!coffee) {
      alert('Please select a coffee first')
      return
    }

    //Combine the coffee with the notes
    const order = (coffee.name + ' ' + notes).trim();

    //Send an HTTP Request
    const [error, updateUser] = await orderAdd(user, order)
    if (error !== null) {
      return
    }

    // keep UI state and Server state in sync
    storageSave(STORAGE_KEY_USER, updateUser)
    //update context state
    setUser(updateUser)

  }

  const availableCoffees = COFFEES.map((coffee) => {
    return (
      <OrdersCoffeeButton
        key={coffee.id}
        coffee={coffee}
        onSelect = {handleCoffeeClicked} 
        //onSelect={handleCoffeeClicked}
      />
    );
  });

  return (
    <>
      <h1>Orders</h1>
      <section id="coffee-options">
        {availableCoffees}
        </section>
        <section id="order-notes"> 
          <OrdersForm onOrder = { handleOrderClicked } />
        </section>
      {coffee && <OrdersSummary coffee={coffee} /> }
    </>
  );
};

export default withAuth(Orders);
