import "./Button.css";

export default function Button({ show, set }) {
  return (
    <>
      <button
        className={show ? "thumb-toggle" : "thumb-toggle-flipped"}
        onClick={() => {
          set(!show);
        }}
      >
        ^
      </button>
    </>
  );
}
