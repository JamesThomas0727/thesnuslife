import "./Cart.css";
import mark from "../../assets/images/products/15.png";
import Cartcard from "../cartcard/Cartcard";
 
function closeWin() {
  document.getElementById("sidecart").style.width = "0%";
  document.getElementById('smallleft').classList.toggle('unshown');
}
function Hide(){
    document.getElementsByClassName.push('unshown');
}
function Show(){
    document.getElementsByClassName.pop('unshown');
}

export default function Cartbar() {
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
            <img id="nopad" src={mark} alt="mark"></img>
          </div>
        </div>
        <div className="cartbox">
            <Cartcard />
        </div>
        <div className="viewcart" onClick={closeWin}>
          View Cart
        </div>
      </div>
    </div>
  );
}
