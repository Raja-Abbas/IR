import React, { useState } from 'react';

const DragAndDrop = () => {
  const [items, setItems] = useState([
    'Data Brokers',
    'Social Media',
    'Info',
    'Information',
    'SocMedia',
    'Info',
    'Brokers',
    'Dashboard',
    'IOT',
    'Data',
    'Media',
    'fo',
    'formation',
    'Social',
    'Info',
    'Darokers',
    'Dahboard',
    'IT',
    'Data Brakers',
    'all Media',
    'Information Technology',
    'Information IT',
    'Social Media Device',
    'InfoO',
    'DataBrokers',
    'Dashbord',
    'OT',
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const maxItemsPerBox = 4;

  const handleDragStart = (index) => {
    const draggedItem = items[index];
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    localStorage.setItem('draggedItem', JSON.stringify({ item: draggedItem }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (boxIndex) => {
  const draggedItem = JSON.parse(localStorage.getItem('draggedItem'));

  if (draggedItem && droppedItems.length < maxItemsPerBox * 4) {
    const itemsInBox = droppedItems.filter((item) => item.boxIndex === boxIndex);

    if (itemsInBox.length < maxItemsPerBox) {
      setDroppedItems((prevDroppedItems) => [
        ...prevDroppedItems,
        { ...draggedItem, boxIndex },
      ]);
    } else {
      setItems((prevItems) => [...prevItems, draggedItem.item]);
    }
  }
};
const handleCancel = (boxIndex, itemIndex) => {
    setDroppedItems((prevDroppedItems) =>
      prevDroppedItems.filter(
        (item) => !(item.boxIndex === boxIndex && itemIndex === prevDroppedItems.indexOf(item))
      )
    );
  };

  return (
    <div className='flex max-lg:flex-col max-lg:gap-4 lg:justify-center lg:gap-2 xl:justify-around'>
      <div>
        <div className="lg:w-[100%] lg:ml-auto xl:w-[100%] opacity-60 text-neutral-900 text-[20px] font-normal font-Poppins leading-relaxed">
          Enter a list of company’s hashtags. We will use those hashtags (keywords) to search 24/7 for relevant journalists for your business, based on every new relevant article streaming in the news. Bellow a list of suggested keywords relevant to [company name]
        </div>
        <div
          className='lg:w-[100%] lg:ml-auto xl:w-[100%] mt-10 flex justify-start flex-wrap gap-1'
        >
          {items.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              className="h-[30px] px-3 pt-2 pb-[9px] rounded-[18px] border border-indigo-600 justify-center items-center gap-2 inline-flex"
            >
              <div className="text-indigo-600 text-xs font-medium font-Poppins leading-3">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        {[0, 1, 2, 3].map((boxIndex) => (
          <div
            key={boxIndex}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(boxIndex)}
            className="lg:w-[400px] xl:w-[600px] h-[74px] bg-neutral-300 rounded-[20px] flex justify-around items-center"
          >
            {droppedItems
              .filter((item) => item.boxIndex === boxIndex)
              .map((droppedItem, index) => (
                <div key={index} className='h-[40px] px-3 rounded-[18px] bg-white border justify-center items-center gap-2 inline-flex text-black text-[14px] font-medium font-Poppins leading-3'>
                  {droppedItem.item}
                  <button className='text-[grey] font-bold text-[9px] p-[2px] flex items-center justify-center border border-[grey] rounded-[18px]' onClick={() => handleCancel(boxIndex, index)}>&#10005;</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default DragAndDrop;
