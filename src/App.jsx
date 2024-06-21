import React from 'react';
import { useRef } from 'react';

const App = () => {

  let APIData = useRef(null);

  const fetchData = async () => {
    
    const response = await fetch("https://dummyjson.com/products")
    
  }

  const showData = () => {

  }

  return (
    <div>
      <button onClick={fetchData}>Call Api</button>
      <button onClick={}>Show Data</button>
    </div>
  );
};

export default App;