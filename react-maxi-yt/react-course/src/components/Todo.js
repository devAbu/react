import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // value OR variable, function that allows to change the value
  function deleteHandler() {
    /* console.log("deleteHandler called");
    console.log(props.title); */
    setModalIsOpen(true); // change the state from false to true
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModal} onConfirm={closeModal} />
      ) : null}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Todo;
