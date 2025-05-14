import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000') // backend route
      .then(res => res.text())
      .then(setMessage);
  }, []);

  return (
    <div className="p-4 text-xl font-bold text-blue-600">
      {message || "Loading..."}
    </div>
  );
}

export default App;
