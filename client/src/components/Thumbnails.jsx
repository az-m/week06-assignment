import ThumbImage from "./ThumbImage";
import "./Thumbnails.css";

export default function Thumbnails({ arr, set }) {
  return (
    <div className="thumbnail-container">
      {arr.map((arrItem) => (
        <ThumbImage
          key={arrItem.id}
          id={arrItem.id}
          src={arrItem.src}
          title={arrItem.src}
          alt={arrItem.alt}
          set={set}
        />
      ))}
    </div>
  );
}
