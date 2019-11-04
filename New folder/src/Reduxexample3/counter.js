import React from 'react';
import {connect} from 'react-redux';

function Counterrr(props){
    return(
        <div>
            <h1>REDUX EXAMPLE COUNTER 3</h1>
             <p>Count:{props.count}</p>
             <button>INCREMENT3</button>
        
        </div>
    )
}
 
function mapStateToProps(state){
  return{
      count:state.count
  }

}
export default connect(mapStateToProps) (Counterrr);
