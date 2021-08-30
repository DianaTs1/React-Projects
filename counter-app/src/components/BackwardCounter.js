// import { useState, useEffect } from 'react';

// import Card from './Card';

// const BackwardCounter = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <Card>{counter}</Card>;
// };

// export default BackwardCounter;


import React from 'react';
import useCounter from '../hooks/use-counter.js';
import Card from "./Card.js";

const BackwardCounter = () => {
  const count = useCounter(false)

  return (
    <Card>
      {count}
    </Card>
  )
}

export default BackwardCounter

