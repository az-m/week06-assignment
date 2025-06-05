export default function MainImage({ arr, sel }) {
  return (
    <>
      <img src={arr[sel].src} alt={""} />
      <h2>{arr[sel].title}</h2>
    </>
  );
}
