
import Contact from "./Contact";
import Text from "./text";
import './wholesale.css';

export default function WholesalePage() {
    return (
        <div className="wholesale">
            <div className="textleft">
                <Text />
            </div>
            <div className="textright">
                <Contact />
            </div>
        </div>
    )
}