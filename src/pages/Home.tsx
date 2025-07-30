import React, { useEffect, useState } from 'react';

const Home = () => {
  const [backend, setBackend] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Data from backend:', data); 
        setBackend(data);
      })
      .catch((err) => console.error('Error fetching backend:', err));
  }, []);

  return (
    <div>
      <h1>Backend connection</h1>
      <h3>message:{backend}</h3>
    </div>
  );
};

export default Home;
