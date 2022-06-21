function Todo(props) {
  function deleteHandler() {
    console.log("deleteHandler called");
    console.log(props.title);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Todo;