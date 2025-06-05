import ThumbImage from "./ThumbImage";

export default function Thumbnails({ arr, set }) {
  return (
    <>
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
    </>
  );
}
