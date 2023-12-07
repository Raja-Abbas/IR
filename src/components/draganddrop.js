import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DragAndDrop = ({ onBoxesFilled }) => {
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
    localStorage.setItem('draggedItemIndex', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (boxIndex) => {
    const draggedItemIndex = parseInt(localStorage.getItem('draggedItemIndex'));

    if (!isNaN(draggedItemIndex) && droppedItems.length < maxItemsPerBox * 4) {
      const draggedItem = items[draggedItemIndex];

      const itemsInBox = droppedItems.filter((item) => item.boxIndex === boxIndex);

      if (itemsInBox.length < maxItemsPerBox) {
        setDroppedItems((prevDroppedItems) => [
          ...prevDroppedItems,
          { item: draggedItem, boxIndex },
        ]);

        // Remove the dropped item from the items array
        setItems((prevItems) => prevItems.filter((_, index) => index !== draggedItemIndex));
      } else {
        toast.error('Cannot add more than 4 items to a box!');
      }
    }

    // Reset the draggedItemIndex in localStorage
    localStorage.removeItem('draggedItemIndex');
  };

  const handleCancel = (boxIndex, itemIndex) => {
    const canceledItem = droppedItems.find(
      (item) => item.boxIndex === boxIndex && itemIndex === droppedItems.indexOf(item)
    );

    if (canceledItem) {
      setDroppedItems((prevDroppedItems) =>
        prevDroppedItems.filter(
          (item) => !(item.boxIndex === boxIndex && itemIndex === prevDroppedItems.indexOf(item))
        )
      );

      // Add the canceled item back to the items array
      setItems((prevItems) => [...prevItems, canceledItem.item]);
    }
  };

  // Check if all boxes are filled
  const allBoxesFilled = [0, 1, 2, 3].every((boxIndex) =>
    droppedItems.some((item) => item.boxIndex === boxIndex)
  );

  // Inform the parent component
  onBoxesFilled(allBoxesFilled);

  return (
    <div className='flex max-lg:flex-col   max-lg:gap-4 lg:justify-center lg:gap-2 xl:justify-around'>
       <div>
        <ToastContainer />
      </div>
      <div>
        <div className="lg:w-[100%] lg:ml-auto xl:w-[100%] opacity-60 text-neutral-900 text-[20px] font-normal font-Poppins leading-relaxed">
          Enter a list of company’s hashtags. We will use those hashtags (keywords) to search 24/7 for relevant journalists for your business, based on every new relevant article streaming in the news. Bellow a list of suggested keywords relevant to [company name]
        </div>
        <div className="mt-10 text-neutral-900 text-[16px] font-medium font-Poppins uppercase">Drag and drop In order or importance</div>
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
            className="lg:w-[350px] xl:w-[500px] min-[1100px]:w-[400px] 2xl:w-[600px] h-[74px] bg-neutral-300 rounded-[20px] flex justify-start gap-5 px-4 items-center"
          >
            {droppedItems
              .filter((item) => item.boxIndex === boxIndex)
              .map((droppedItem, index) => (
                <div key={index} className='h-[40px] px-3 rounded-[18px] bg-white border justify-center items-center gap-2 inline-flex text-black text-[14px] font-medium font-Poppins leading-3'>
                  {droppedItem.item}
                  <button className='text-[grey] font-bold text-[9px] h-5 w-5 flex items-center justify-center border border-[grey] rounded-full' onClick={() => handleCancel(boxIndex, index)}>&#10005;</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;