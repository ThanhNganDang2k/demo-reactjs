import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentPaypal, setPaymentPaypal] = useState("PayPal");
  const [paymentMomo, setPaymentMomo]     = useState("Momo");
  const [paymentCod, setPaymentCod]       = useState("Thanh toán khi nhận hàng");


  const dispatch = useDispatch();

const hanldepaymentPayPal = (e) => {
    e.preventDefault();
    setPaymentPaypal(e.target.value);
    dispatch(savePaymentMethod(paymentPaypal));
  }
const handlepaymentMono = (e) => {
  e.preventDefault();
  setPaymentMomo(e.target.value);
  dispatch(savePaymentMethod(paymentMomo));
}
const handlepaymentCod = (e) => {
  e.preventDefault();
  setPaymentCod(e.target.value);
  dispatch(savePaymentMethod(paymentCod));
}


  const submitHandler = (e) => {
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentPaypal}
                onChange={hanldepaymentPayPal}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMomo}
                // onChange={(e) => setPaymentMomo(e.target.value)}
                onChange={handlepaymentMono}
              />
              <label className="form-check-label">MoMo</label>
            </div>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentCod}
                // onChange={(e) => setPaymentCod(e.target.value)}
                onChange={handlepaymentCod}
              />
              <label className="form-check-label">Thanh toán khi nhận hàng</label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
