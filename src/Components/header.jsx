import shoppingBag from "../images/shopping-bag.png"
import "./style.css"


export default function Header(){
    return(
        <div className="footerConteiner">
           <div className="headerWrapper">
                <h1>Shopping cart</h1>
                <img src={shoppingBag} alt="shopping Bag" />
            </div>
            <div className="hederConteiner"><p>3 item</p></div>
        </div>    
    )
}