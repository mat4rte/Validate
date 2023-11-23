import React from "react";
import CreateTaskPopup from "../CreateTaskPopup";

export default function NewTask({ insertTask }) {
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
      <CreateTaskPopup
        open={open}
        closePopup={closePopup}
        insertTask={insertTask}
      />
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
