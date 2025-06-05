import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${import.meta.env.VITE_API_ROOT}/getImages`
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Items from API</h2>
      {items.map((item) => (
        <img src={item.src} key={item.id} />
      ))}
    </div>
  );
}
