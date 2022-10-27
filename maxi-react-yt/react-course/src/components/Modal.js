export default function Modal(props) {
  function cancelModal() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>Are you sure you?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={cancelModal}>
        Confirm
      </button>
    </div>
  );
}
