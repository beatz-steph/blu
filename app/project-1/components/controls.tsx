const Controls = ({
  onStart,
  onReset,
  start,
}: {
  onStart: () => void;
  onReset: () => void;
  start: boolean;
}) => {
  return (
    <div className="z-20 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex gap-[40px]">
      {!start ? (
        <button
          className="bg-gray-900 text-white text-lg px-8 py-2 rounded-sm"
          onClick={onStart}
        >
          Start
        </button>
      ) : null}
      <button
        className="bg-gray-900 text-white text-lg px-8 py-2 rounded-sm"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
