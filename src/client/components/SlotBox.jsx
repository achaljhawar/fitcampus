function SlotBox({ disabled, num, clicked, booked, cancel }) {

  return (
    <div className={"aspect-square max-w-12 flex-1 flex flex-col items-center justify-center rounded-lg " + (disabled ? "bg-[rgb(69,69,69)] color-[rgb(170,170,170)]" : "bg-[rgb(30,30,30)] cursor-pointer hover:bg-[rgb(50,50,50)] transition-colors") + (booked ? " cursor-pointer border-2 border-green-300" : "")} onClick={disabled ? (booked ? cancel : () => {}) : clicked}>
      <p className="text3xl font-semibold">{num}</p>
    </div>
  );
}

export default SlotBox;