import "./App.css";
import MainImage from "./components/MainImage";
import Thumbnails from "./components/Thumbnails";
import HoldIt from "./components/HoldIt";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(0);
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
    <main>
      <div className="main-image">
        <Thumbnails arr={items} set={setSelected} />
        {items[0] ? <MainImage arr={items} sel={selected} /> : <HoldIt />}
      </div>
    </main>
  );
}
