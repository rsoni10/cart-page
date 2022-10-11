import React from 'react'
import homeimg from '../assets/HomeIcon.svg';
import { connect } from 'react-redux';
import { addToCart } from '../action/action';

function Home(props) {
  console.log("Home",props.data)
  return (
    <div className='container'>
      <h1>Home Component</h1>  
      
      <div className='row mt-5 border-1'>
          <div className='col-md-1'><img src={homeimg} /></div>
          <div className='col-md-3'>
            <p>Iphone</p>
            <p> Price : $8787:00</p>
          </div>
          <div className='col-md-3'>
          <button className='btn btn-primary' 
          onClick={()=>props.addToCartHandler({Price : '$8787',name:"Iphone"})}>
            add to cart</button>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps= (state) =>({
  data:state.cardItems
})
const mapDispatchToProps= (dispatch) =>({
 addToCartHandler : data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);