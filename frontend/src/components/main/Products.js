import './Mainwin.css'
import { useNavigate } from 'react-router-dom'
export default function Middlewin() {

    const navigate = useNavigate();
    return (
        <div className="Middlewin">
            <div className='products'>Featured Products</div>
            <div carcel>

            </div>
            <div className='bbb'>
                <div className="shownowntn"
                    onClick={() => navigate('/shop')}>Shop All </div>
            </div>

        </div>
    )
}