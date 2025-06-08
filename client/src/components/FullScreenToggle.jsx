import "./FullScreenToggle.css";

export default function FullScreenToggle({ fullScreen, set }) {
  return (
    <>
      <button
        className="full-screen-toggle"
        onClick={() => {
          set(!fullScreen);
        }}
      >
        {fullScreen ? "Full Image" : "Full Screen"}
      </button>
    </>
  );
}
