import "./App.css";
import MainImage from "./components/MainImage";
import Thumbnails from "./components/Thumbnails";
import Button from "./components/Button";
import HoldIt from "./components/HoldIt";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(true);

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
      <div className="main-image-container">
        {show ? <Thumbnails arr={items} set={setSelected} /> : null}
        <Button show={show} set={setShow} />
        {items[0] ? <MainImage arr={items} sel={selected} /> : <HoldIt />}
      </div>
    </main>
  );
}
