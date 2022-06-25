import React from "react";

class CartItem extends React.Component{



// decreaseqty = () =>{

//     this.setState((prevState)=>{

//         return{
//             quantity: prevState.quantity-1
//         }
//     }


//     );
// }





//  increaseqty = () =>{
// this.setState((prevState)=>{

//     return{
//         quantity: prevState.quantity +1
//     }
// });
//  }



 
    render(){
        
 const {title,price,quantity }= this.props.product;

 console.log(this.props);

        return(
<div className="cart-item">
<div className="left-block">
    <img style={styles.image}/>
</div>
<div className="right-block">
<div style={{fontSize:25} }> {title}</div>
<div style = {{color: '#777'}}>RS:{price}</div>
<div style = {{color: '#777'}}>Qty:{quantity}</div>
<div className="cart-item-actions">
{/* {buttons} */}
<img alt="increase"  onClick ={()=>{this.props.onIncreaseQuantity(this.props.product)}} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
<img alt="decrease" onClick = {()=> { this.props.onDecreaseQuantity(this.props.product)}} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/>
<img alt="delete"  onClick = {()=>{this.props.onDelete(this.props.product.id)}} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6679/6679528.png"/>

</div>
</div>



</div>
            
        );
    }
}

const styles = {
image:{
    height:110,
    width:100,
    borderRadius:4,
    background: '#ccc'
}
}

export default CartItem;