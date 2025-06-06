import "./MainImage.css";

export default function MainImage({ arr, sel }) {
  return (
    <div className="main-image">
      <img src={arr[sel].src} alt={""} />
      <h2>{arr[sel].title}</h2>
    </div>
  );
}
