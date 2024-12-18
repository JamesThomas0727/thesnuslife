import Input from '../input/Input';
import Textbox from '../textbox/Textbox';
import Button from './Button';
import '../footer/Footer.css'

export default function Box3(){
    return(
        <div className='box3'>
        <Textbox text = "Subsicibe Here*" />
        <div className='inemail'>
            <Input   text = "Your email" />
        </div>
        <div className='smallt'>
        <Textbox text = "subscribe to our mail list for monthly discounts and offers" />
        </div>
        <div id = "subscribe">
            <Button text ="SUBSCRIBE" />
        </div>
    </div>
    )
}