import "./Header.css";
import MarkImg from "../../assets/images/products/14.png";
import { useNavigate } from "react-router-dom";

function openNav() {
    console.log(document.getElementById("myNav").style);
    document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function Head1() {
    return (
        <div id="flow1" className="text-center headtext">
            Free UK Delivery on ALL Orders
        </div>
    );
}
function Head2() {
    return (
        <div id="flow2" className="text-center headtext">
            Order before 1pm for same day dispatch
        </div>
    );
}
function Head3() {
    return (
        <div id="flow3" className="text-center  headtext">
            5 Pot Pick 'n' Mix for Just £19.95
        </div>
    );
}
function Contactbar(props) {
    const navigate = useNavigate();
    let temp = "contact gap-4 px-2"
    if (props.val) {
        temp = props.val;
    }

    return (
        <div className={temp}>
            <div
                className=" nav-fs font-semibold"
                onClick={() => navigate("/home")}
            >
                Home
            </div>
            <div
                className="nav-fs font-semibold"
                onClick={() => navigate("/shop")}
            >
                Shop
            </div>
            <div
                className="nav-fs font-semibold"
                onClick={() => navigate("/apparel")}
            >
                Apparel
            </div>
            <div
                className="nav-fs font-semibold"
                onClick={() => navigate("/accessories")}
            >
                Accessories
            </div>
            <div
                className="nav-fs font-semibold"
                onClick={() => navigate("/wholesale")}
            >
                Wholesale
            </div>
            <div
                className="nav-fs font-semibold"
                onClick={() => navigate("/aboutus")}
            >
                About Us
            </div>
            <div className="nav-fs font-semibold"
                onClick={() => navigate("/faqs")}>
                

                FAQs
            </div>
        </div>
    );
}
function Selection(props) {
    let temp = 'dropdowns';
    if (props.val) {
        temp = props.val;
    }
    return (
        <select className={temp}>
            <option className="bg-white " disabled>
                Currency
            </option>
            <option className="bg-white" value="AUD">
                AUD
            </option>
            <option className="bg-white" value="CAD">
                CAD
            </option>
            <option className="bg-white" value="EUR">
                EUR
            </option>
            <option className="bg-white" value="GBP">
                GBP
            </option>
            <option className="bg-white" value="USD">
                USD
            </option>
        </select>
    );
}

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div>
                <div className="heads avenir py-2 w-full bg-white gap-4 justify-center items-center px-12 inline">
                    <Head1 />
                    <div className="headtext1">|</div>
                    <Head2 />
                    <div className="headtext1">|</div>
                    <Head3 />
                </div>
            </div>

            <div>
                <div className=" bg-prime">
                    <div className="con px-12 h-24">
                        <div className="nav">
                            <div
                                className="imgbox no-underline"
                                onClick={() => navigate("/home")}
                            >
                                <img
                                    src={MarkImg}
                                    alt="logo-theSunuslife"
                                    className="markImg "
                                ></img>
                            </div>
                            <Contactbar />

                            <div className="toolbox">
                                <Selection />

                                <div
                                    class="flex justify-center items-center cursor-pointer px-1 lens"
                                    onClick={() => alert("Sorry, we are not out of service!")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            cx="10"
                                            cy="10"
                                            r="8"
                                            stroke="black"
                                            stroke-width="2"
                                            fill="none"
                                        />
                                        <line
                                            x1="15"
                                            y1="15"
                                            x2="20"
                                            y2="20"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="busket"
                                    onClick={() => alert("sorry, we are not out of service!")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="16"
                                            height="10"
                                            rx="2"
                                            ry="2"
                                            fill="rgba(0, 110, 255, 0)"
                                            stroke="black"
                                            stroke-width="1"
                                        />
                                        <line
                                            x1="3"
                                            y1="5"
                                            x2="1"
                                            y2="3"
                                            stroke="black"
                                            stroke-width="1"
                                        />
                                        <circle cx="6" cy="18" r="2" fill="black" />
                                        <circle cx="16" cy="18" r="2" fill="black" />
                                    </svg>
                                </div>
                                <div
                                    className="account"
                                    onClick={() => alert("sorry, we are not out of service!")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 100 100"
                                    >
                                        <circle cx="50" cy="30" r="15" fill="black" />
                                        <ellipse cx="50" cy="70" rx="25" ry="15" fill="#black" />
                                        <rect x="0" y="0" width="100" height="100" fill="none" />
                                    </svg>
                                </div>

                                <div>
                                    <span class="menu" onClick={openNav}>
                                        &#9776;
                                    </span>
                                </div>

                                <div id="myNav">
                                    <div className="sidecon">
                                        <div class="closebtn menu" onClick={closeNav}> &times;</div>
                                        <div className="aaa"><Selection val="navs" /></div>
                                        <div className="bartitle">Menu</div>
                                        <div class="overlay">
                                            <div class="overlay-content">
                                                <Contactbar val=" blocks" />
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
