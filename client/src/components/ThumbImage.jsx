import "./ThumbImage.css";

export default function ThumbImage({ id, src, title, alt, set }) {
  return (
    <>
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
    </>
  );
}
