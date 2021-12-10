// Import from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import images check and remove
import check from "../images/check.png";
import remove from "../images/remove.png";
import undo from "../images/undo.jpg";

// Import css
import "./DisplayTodos.css";

const DisplayTodos = ({ filter }) => {
  // Get variables from Store
  let todos = useSelector((state) => state.todos);

  // Declare dispatch
  let dispatch = useDispatch();

  const removeTask = (id) => {
    // Call dispatch to remove todo
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const markTaskAsDone = (id) => {
    // Call dispatch to mark as done
    dispatch({ type: "DONE_TODO", payload: id });
  };

  const undoTask = (id) => {
    // Call dispatch to mark as done
    dispatch({ type: "UNDO_TODO", payload: id });
  };

  const filterTodos = () => {
    // Filter todos depending on props
    let filteredTodos = todos.filter((todo) => {
      if (filter === "") return todo;
      if (todo.status === filter) return todo;
      return null;
    });

    // Depending on filteredTodos, display No Todos or map through todos
    if (filteredTodos.length > 0) {
      return filteredTodos.map((todo) => {
        return (
          <div key={todo.id} className="todos">
            <div style={{ width: "50%" }}>
              {todo.name} (<i>{todo.status}</i>)
            </div>
            <div
              style={{
                cursor: "pointer",
                width: "50%",
                textAlign: "right",
                verticalAlign: "middle",
              }}
            >
              <img
                src={check}
                alt="check"
                width="30"
                onClick={() => markTaskAsDone(todo.id)}
                style={{
                  cursor: "pointer",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  display: todo.status === "done" ? "none" : null,
                }}
              />
              <img
                src={undo}
                alt="Undo"
                width="30"
                onClick={() => undoTask(todo.id)}
                style={{
                  cursor: "pointer",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  display: todo.status === "pending" ? "none" : null,
                }}
              />
              <img
                src={remove}
                alt="Remove"
                width="30"
                onClick={() => removeTask(todo.id)}
                style={{
                  cursor: "pointer",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                }}
              />
            </div>
          </div>
        );
      });
    } else {
      if (filter === "") {
        return <p>No todos</p>;
      } else {
        return <p>No {filter} todos</p>;
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>{filterTodos()}</Col>
      </Row>
    </Container>
  );
};

export default DisplayTodos;
