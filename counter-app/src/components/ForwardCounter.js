import React from 'react';
import useCounter from '../hooks/use-counter.js';
import Card from "./Card.js";

const ForwardCounter = () => {
  const count = useCounter(true);

  return (
    <Card>
      {count}
    </Card>
  )
};

export default ForwardCounter;

