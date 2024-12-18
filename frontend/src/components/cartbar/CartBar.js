import "./CartBar.css";
import CartCard from "../cartcard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
function closeWin() {
  document.getElementById("sidecart").style.width = "0%";
  document.getElementById('smallleft').classList.toggle('unshown');
}
function Hide() {
  document.getElementsByClassName.push('unshown');
}
function Show() {
  document.getElementsByClassName.pop('unshown');
}

export default function CartBar() {
  //==============================================================
  const currency_chars = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];
  const cartProducts =
    useSelector((state) => state.cart.items);

  const currency = useSelector((state) =>
    state.currency.currency);

  // useEffect(() => {
  //   let subtotal =
  //     cartProducts.reduce((total, product) => {
  //       total += Number(product.price) * Number(product.quantity);
  //       console.log("gdsfgs", total);
  //       return total;
  //     });
  //   return Number(subtotal) * Number(currency.currency_rate);
  // }, [cartProducts]);

  const sumPrice = (cartProducts) => {
    // console.log(cartProducts);
    let subtotal =
      cartProducts.reduce((total, product) => {
        total += Number(product.price) * Number(product.quantity);
        console.log("gdsfgs", product);
        return total;
      });
    return Number(subtotal);
  }

  return (
    <div className="outwin">
      <div id="smallleft" className="unshown" onClick={closeWin}>

      </div>

      <div id="sidecart">
        <div className="carttop">
          <div className="nexticon" onClick={closeWin}>
            &gt;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="carttitle">Cart</div>
          <div className="cartmark">
            <img id="nopad" src="/images/products/1.png" alt="mark"></img>
          </div>
        </div>
        <div className="cartbox">
          {cartProducts.map((product, index) => {
            return (< CartCard product={product} key={index} />)
          })}
        </div>
        {/* -------- ----fixed-------------------*/}
        {cartProducts.length &&
          (<>
            <div className="subtotal bold" >
              <strong>Subtotal</strong>
            </div>
            <div className="totalPrice">
              {currency_chars[currency.currency_id - 1]}&nbsp;
              {sumPrice(cartProducts)}
            </div>
          </>)
        }
        {/* -------- -----------------------*/}
        <div className="viewcart" onClick={closeWin}>
          View Cart
        </div>
      </div>
    </div>
  );
}
