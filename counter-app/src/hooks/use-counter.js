import React, {useState, useEffect} from 'react';

const useCounter = (forward = true) => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      if (forward) {
          setCount(prev => prev + 1)
      } else {
        setCount(prev => prev - 1)
      }
    }, 500);
    return () => {
      clearInterval(interval)
    }
  }, []);

  return count
}

export default useCounter;
