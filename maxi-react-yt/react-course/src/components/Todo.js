import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
export default function Todo(props) {
  const [show, setShow] = useState(false);

  function deleteHandler() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {show ? <Modal onCancel={hideModal} /> : null}
      {show && <Backdrop onCancel={hideModal} />}
    </div>
  );
}
