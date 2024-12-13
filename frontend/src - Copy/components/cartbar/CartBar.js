import "./CartBar.css";
import CartCard from "../cartcard/CartCard";

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
  return (
    <div className="outwin">
      <div id="smallleft" className="unshown" onClick={closeWin}>

      </div>

      <div id="sidecart">
        <div className="carttop">
          <div className="nexticon" onClick={closeWin}>
            {" "}
            &gt;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="carttitle">Cart</div>
          <div className="cartmark">
            <img id="nopad" src="/images/1.png" alt="mark"></img>
          </div>
        </div>
        <div className="cartbox">
          <CartCard />
        </div>
        {/* -------- ----fixed-------------------*/}
        <div className="subtotal bold" >{"Put down your objects in this tag."}</div>
        <div className="totalPrice">{"here get the parameter."}</div>
        {/* -------- -----------------------*/}
        <div className="viewcart" onClick={closeWin}>
          View Cart
        </div>
      </div>
    </div>
  );
}
