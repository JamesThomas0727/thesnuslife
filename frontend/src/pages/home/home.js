
// import Slideimage from "../../components/crousel/Slideimage"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Mainwin from "../../components/main/Mainwin"
import Middlewin from "../../components/main/Products"
import Sendemail from "./Sendemail"

export default function HomePage() {
    return (
        <div className="App">
            {/* <Header /> */}
            <Mainwin />
            <Middlewin />
            {/* <Slideimage /> */}
            <Sendemail />
            {/* <Footer /> */}
        </div>
    )
} 
