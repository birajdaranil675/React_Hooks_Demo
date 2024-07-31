import React, { useReducer } from 'react'

function UseReducerDemo() {
    const reducerFun = (state, action)=>{
        switch(action)
        {
            case 'increment':
                return state += 1;
            case 'decrement':
                return state -= 1;
        }
    }

    const [count, dispatch] = useReducer(reducerFun, 0);
  return (
    <div>
          <h1>{count}</h1>
          <button onClick={()=> dispatch('increment')}>Increment</button>
          <button onClick={()=> dispatch('decrement')}>Decrement</button>
      </div>
  )
}

export default UseReducerDemo