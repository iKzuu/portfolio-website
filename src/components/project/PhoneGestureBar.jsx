const PhoneGestureBar = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        z-40
        flex
        h-8.5
        items-center
        justify-center
        bg-white
      "
    >
      <div
        className="
          h-1.25
          w-30
          rounded-full
          bg-black
        "
      />
    </div>
  );
};

export default PhoneGestureBar;