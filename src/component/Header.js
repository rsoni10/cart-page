import React from 'react'
import { connect } from 'react-redux';
function Header(props) {
    console.log("header",props.data)
  return (
    <div className='container'>
     
      <div className='row'>
        <div className='offset-sm-10 col-sm-2 text-right'>
          Cart<span>0</span>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps= (state) =>({
    data:state.cardItems
  })
  const mapDispatchToProps= (dispatch) =>({

  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Header);