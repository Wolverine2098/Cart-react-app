
import React from "react";
import Total from "./total";
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component
 {
  
  constructor(){
    super();
    this.state = {

    products: [
        {title: 'Mobile Phone',
        price : 999,
        quantity:1,
        img : '',
    id :1},

        {title: 'Watch',
        price : 99,
        quantity:1,
        img : '',
        id :2},

        {title: 'Laptop',
        price : 999,
        quantity:1,
        img : '',
        id :3
    }


    
]
}
}

increaseQuantity =(product) =>{
    

    const {products} = this.state;
    console.log(product);
    var inde = products.indexOf(product);
    products[inde].quantity+=1;

    this.setState({
   products:products

    })

}




decreaseQuantity =(product) =>{
    

    const {products} = this.state;
    console.log(product);
    var inde = products.indexOf(product);
    if(products[inde].quantity<=0)
    return 
    products[inde].quantity-=1;

    this.setState({
   products:products

    })

}

deleteitem = (id)=>{

const {products} = this.state;

const item = products.filter((items)=>items.id!==id);
this.setState(
    {
        products:item
    }
)
}
getCartCount=()=> {

  const {products}= this.state;
  let count = 0 ;
  products.forEach((product)=>{
    count += product.quantity;
  })
return count;
}

getTotalPrice = ()=>{
  const {products}=this.state;
  let totalsum=0;
  products.forEach((product)=>{
    totalsum+= product.price*product.quantity;
  })
  return totalsum;
}


render(){
  const{products}= this.state;
  return (

    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.increaseQuantity } 
      onDecreaseQuantity={this.decreaseQuantity} 
      onDelete = {this.deleteitem}
      />

      <Total amount = {this.getTotalPrice()}/>
      
      
    
    </div>
  );


}
 }

export default App;
