import React from 'react';
import {connect} from 'react-redux';

function Counter(Props){
       console.log('render',Props)

        return(
            <div>
                <h1>Im a Counter</h1>
                <p>Count:{Props.count}</p>
                <button onClick = {Props.onIncrementClick}>Increment</button>
            </div>
        )
    }

    function mapStateToProps(state){
        console.log('mapStateToProps',state);
        return{
            count:state.count
        }
    }

    function mapDispatchToProps(dispatch){
        return{
            onIncrementClick:()=>{
                    console.log('clickin');
                    const action = {type:'INCREMENT'};
                    dispatch(action);
            }
        }
    }

export default connect(mapStateToProps , mapDispatchToProps) (Counter);