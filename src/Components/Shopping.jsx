import "./style.css"
import boot from "../images/boots.png"
import shirt from "../images/shirt.png"
import bag from "../images/bag.png"
// import shoppingBag from "../images/shoppingBag.png"

const cartData = {
    boots :{
        class : 'c-cart',
        image : boot,
        brand : 'Nike',
        text : 'Superstar',
        size : '8.5',
        price : '$239.55',
    },
    Shirt :{
        class : 'c-shirt',
        image : shirt ,
        brand : 'H&M',
        text : 'T-Shirt',
        size : 'S',
        price : '$14.99',
    },
    bag :{
        class : 'c-bag',
        image : bag ,
        brand : 'Gucci',
        text : 'CG Marmont',
        price : '$1850.00',
    }
}



export default function Carts(props){
    const item = cartData[props.type];
    return(
      <div className="cartWrapper">
        <img src={item.image} alt="" />
        <div className="divForText">
            <h4>{item.brand}</h4>
            <p>{item.text}</p>
            <h4>{item.size}</h4>
        </div>
        <div>
            <h4 className="price">{item.price}</h4>
            <button className="button">Add to cart</button>
        </div>
        
      </div>  
    )
}