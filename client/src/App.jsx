import "./App.css";
import MainImage from "./components/MainImage";
import Thumbnails from "./components/Thumbnails";
import Button from "./components/Button";
import HoldIt from "./components/HoldIt";
import { useState, useEffect } from "react";
import FullScreenToggle from "./components/FullScreenToggle";

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

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
      <div
        className={
          fullScreen ? "main-image-container-full" : "main-image-container"
        }
      >
        {show ? <Thumbnails arr={items} set={setSelected} /> : null}
        <Button show={show} set={setShow} />
        {items[0] ? <MainImage arr={items} sel={selected} /> : <HoldIt />}
        <FullScreenToggle fullScreen={fullScreen} set={setFullScreen} />
      </div>
    </main>
  );
}
