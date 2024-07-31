import React, { useEffect, useState } from 'react'

function UseEffectDemo() {
    const [name, setName] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=>{
      console.log('I called...');
      const data = fetchData();
      setName(data);
    },[count]);

    const fetchData = ()=>{
      const num = Math.random(1,10);
      return num;
    };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffectDemo