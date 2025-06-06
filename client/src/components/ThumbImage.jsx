import "./ThumbImage.css";

export default function ThumbImage({ id, src, title, alt, set }) {
  const keyUp = (e) => {
    if (e.key === "Enter") {
      set(id);
    }
  };
  return (
    <li tabIndex={0} onKeyUp={keyUp}>
      <img
        id={id}
        src={src}
        title={title}
        alt={alt}
        onClick={() => {
          set(id);
        }}
        className="thumb-image"
        draggable={false}
      />
    </li>
  );
}
