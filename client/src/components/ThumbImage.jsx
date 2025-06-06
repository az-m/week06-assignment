import "./ThumbImage.css";

export default function ThumbImage({ id, src, title, alt, set }) {
  return (
    <li>
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
