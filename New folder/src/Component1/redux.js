import React from 'react';
import {createStore} from 'redux';

class ReduxDemo extends React.Component{
               render(){
                    // step 2 :- create a Reducer : state and action
                    const reducer = function(state , action){
                        if(action.type ==="ATTACK"){
                            return action.payload
                        }
                        if(action.type === "GREENATTACK"){
                            return action.payload
                        }
                        return state;
                 }


                    // step 1:- create a store : Reducer and state
                    const store = createStore(reducer , "peace");
                   
                    // step 3:- subscribe 
                    store.subscribe(()=>{
                        console.log("store is now",store.getState());
                    })
                    // step 4:- Dispatch an action
                    store.dispatch({type: "ATTACK",payload: "anu"})
                    store.dispatch({type:"GREENATTACK",payload:"ashwad"})
                    
                   return(
                       <div>
                           test 
                       </div>
                   )
               }
}
export default ReduxDemo;