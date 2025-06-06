import "./MainImage.css";

export default function MainImage({ arr, sel }) {
  return (
    // <div className="main-image">
    <>
      <img
        src={arr[sel].src}
        alt={arr[sel].alt}
        className="img-large"
        draggable={false}
      />
      <span className="title-container">
        <h2>{arr[sel].title}</h2>
      </span>
    </>
  );
}
