import React from "react";
import Popup from "../popup";

export default function NewTask({ updateTasks }) {
  const [open, setOpen] = React.useState(false);

  const closePopup = () => {
    setOpen(false);
  };

  function openPopup() {
    //open popup
    setOpen(true);
  }

  return (
    <>
      <Popup open={open} closePopup={closePopup} updateTasks={updateTasks} />
      <div>
        <button
          onClick={openPopup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button"
        >
          Criar Tarefa
        </button>
      </div>
    </>
  );
}
