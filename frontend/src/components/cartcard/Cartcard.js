import Cartcardimg from '../../assets/images/products/16.png'
import './Cartcard.css'

export default function Cartcard(){
    let poundprice = 4.99;
    let thingname = "Snowman Fresh Mint - 12mg";
    let i = 1;

    function Addcount(n){
        if(n===2){
            i++;
        }
        else{
            if(i<0){
                alert('You cannot below it anymore.');
            }
            else i--;
        }
        

    }
    return(
        <>
        <div className="cartcard">
            <div className="cardmarks">
                <img src={Cartcardimg} alt='Cartcardimg' className='imgboxs'></img>
            </div>
            <div className="textsbox">
                <div className="colls">
                    <div className="thingname">{thingname}</div>
                    <div className="closebtn bold">x</div>
                </div>
                <div className="poundprice">{ poundprice}</div>
                <div className="addbox">
                    <div className="minus" onClick={Addcount(2)}>-</div>
                    <div id="val" >{i}</div>
                    <div className="add" onClick={Addcount(1)}>+</div>
                </div>

            </div>
        </div>
        
        </>
    )
}