import React, { useState, useContext } from "react";
import { cartContext } from "../store/cartContext";
import { insertDB } from "../services/ordersCollection";
import { Wobble } from "@uiball/loaders";

function CheckoutForm() {
  const [customerData, setCustomerData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const { cart, clear, setOrderNumber } = useContext(cartContext);

  let total = cart.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );

  const order = {
    customer: { ...customerData },
    items: [...cart],
    total: total.toFixed(2),
    date: new Date(),
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    setSubmitting(true);

    const createdOrder = await insertDB(order);
    setOrderNumber(createdOrder.id);
    clear();
  }

  function handleReset(evt) {
    setCustomerData({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  }

  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyCustomerData = { ...customerData };
    copyCustomerData[inputName] = value;
    setCustomerData(copyCustomerData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="border border-gray-400 text-center py-12"
    >
      <h1 className="text-lg">Place you order</h1>

      <br></br>
      <label>
        Full name:
        <br></br>
        <input
          type="text"
          name="fullName"
          value={customerData.fullName}
          onChange={inputChangeHandler}
          placeholder="Full name"
          required
          className="mb-6 mt-2"
        />
      </label>
      <br></br>
      <label>
        Phone number:
        <br></br>
        <input
          type="text"
          name="phoneNumber"
          value={customerData.phoneNumber}
          onChange={inputChangeHandler}
          placeholder="Phone number"
          required
          className="mb-6 mt-2"
        />
      </label>
      <br></br>
      <label>
        Email:
        <br></br>
        <input
          type="text"
          name="email"
          value={customerData.email}
          onChange={inputChangeHandler}
          placeholder="Email"
          required
          className="mb-6 mt-2"
        />
      </label>
      <br></br>
      {submitting ? (
        <div className="m-auto w-fit">
            <Wobble size={45} speed={0.9} color="black" />
          </div>
      ) : (
        <div>
          <input
            type="reset"
            value="Reset"
            className="border border-gray-400 w-32 h-12 rounded-lg cursor-pointer text-sm hover:text-white hover:bg-red-900 font-bold mt-3"
          />
          <input
            type="submit"
            value="Submit"
            className="border border-gray-400 w-32 h-12 rounded-lg cursor-pointer text-sm hover:text-white hover:bg-highlight font-bold ml-2 md:ml-5 mt-3"
          />
        </div>
      )}
    </form>
  );
}

export default CheckoutForm;
