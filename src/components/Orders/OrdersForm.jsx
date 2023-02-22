import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ASLTranslation from "./ASLTranslation";

const OrdersForm = ({ orderNotes, onOrder, onOrderNotesChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = ({ orderNotes }) => {
    onOrder(orderNotes);
    setSubmitted(true);
  };

  const handleOrder = () => {
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="order-notes">Order notes:</label>
        <input
          type="text"
          {...register("orderNotes")}
          placeholder="No sugar, extra milk"
          value={orderNotes}
          onChange={(e) => onOrderNotesChange(e.target.value)}
        />
      </fieldset>

      <button type="submit">Order</button>

      {submitted && <ASLTranslation orderNotes={orderNotes} />}
    </form>
  );
};

export default OrdersForm;
