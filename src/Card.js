import React,{useState} from 'react';
import "./Card.css";
import { useStateValue } from './StateProvider';
import { store } from 'react-notifications-component';
import Axios from "axios";
import npmDate from 'date-and-time';
const Card = ({name, id, imageUrl, price}) => {
  const [{basket},dispatch] = useStateValue();
  const [date,setDate] = useState();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price
            }
    });
  }; 
 
  // setProductId(id);
  console.log(id);

  var now = new Date();
  var date1 = (npmDate.format(now, 'YYYY-MM-DD'));
   console.log(date1);
  
  
  return (
    <div className="card" key={id}>
    <div className="card_img">
        <img src={imageUrl} alt="" />
    </div>
    <div className="card_header">
        <h2>{name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
        <p className="price">{price}<span>$</span></p>
        <>
      
        <button className="btn1" 
          onClick={() => {
            store.addNotification({
              title: 'Added to the cart',
              message: `${name}`,
              type: 'success',                         // 'default', 'success', 'info', 'warning'
              container: 'bottom-right',                // where to position the notifications
              animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
              animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
              dismiss: {
                duration: 3000
              }
            });
            addToBasket();

            Axios.post("http://localhost:8090/cart",
         {
           productId: id
        });
        setDate(date1);
        Axios.post("http://localhost:8090/sales",
        {
          productId: id,
          date:date1
       });
          }}
        >
           <span> Add to basket </span>
        </button>
      </>
    </div>
</div>
   
    )
}

export default Card



 