import React, { useState } from "react";

function TalkingPoints() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [isInspirationClicked, setIsInspirationClicked] = useState(false);

  const handleDragStart = (e, text) => {
    e.dataTransfer.setData("text", text);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    const itemText = window.localStorage.getItem("draggedItemText");
    if (droppedItems.length < 3) {
      setDroppedItems((prevItems) => [...prevItems, itemText]);
    }

    // Clear the local storage to allow multiple drops
    window.localStorage.removeItem("draggedItemText");
  };

  const handleInspirationClick = () => {
    setIsInspirationClicked(true);
  };

  return (
    <div className={`max-lg:flex-col flex gap-5 w-[100%] 2xl:flex ${isInspirationClicked ? 'lg:flex-col' : '2xl:justify-center'}`}>
      <div className="w-[50%]">
        <div
          className="w-[100%] opacity-60 text-neutral-900 text-[140%] font-normal font-Poppins leading-normal"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {
            "What should these journalists know about your industry that’s not actively being written about?"
          }
        </div>
        <div>
          {!isInspirationClicked &&
            [1, 2, 3].map((number) => (
              <div
                key={number}
                className="w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex justify-start px-5 items-center mt-6"
                draggable
                onDragStart={(e) => {
                  const text = `What most people don’t understand... ${number}`;
                  handleDragStart(e, text);
                  window.localStorage.setItem("draggedItemText", text);
                }}
              >
                <div className="text-neutral-800 text-[120%] font-normal font-Poppins leading-[30.70px]">
                  What most people don’t understand... {number}
                </div>
              </div>
            ))}
        </div>
        <div
          className="w-[100%] h-[56px] bg-indigo-600 hover:bg-black transition-all cursor-pointer rounded-[10px] flex justify-center items-center mt-6"
          onClick={handleInspirationClick}
        >
          <div className="text-center text-white text-sm font-semibold font-Poppins leading-[30.70px]">
            GET INSPIRATION
          </div>
        </div>
        <div className="w-[100%] mt-6 opacity-60 text-neutral-900 text-xs font-normal font-Poppins leading-[18.60px]">
          After creating your pitch, you will select your plan, connect your
          email account and start pitching to the journalists selected
        </div>
      </div>
      <div
        className="lg:w-[400px] xl:w-[577px] 2xl:w-[650px] h-[444px] max-md:h-[222px] opacity-50 bg-neutral-100 rounded-lg border-2 border-stone-300 flex flex-col justify-center items-center gap-5 px-5"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {droppedItems.map((item, index) => (
          <div
            key={index}
            className="w-[100%] h-[65px] bg-[grey] rounded-[20px] flex justify-start px-5 items-center mt-4"
          >
            {item}
          </div>
        ))}
        {!droppedItems.length && (
          <div className="opacity-20 text-center text-black text-[40px] font-semibold font-Poppins leading-[46.08px]">
            Preview AI
          </div>
        )}
      </div>
    </div>
  );
}

export default TalkingPoints;
