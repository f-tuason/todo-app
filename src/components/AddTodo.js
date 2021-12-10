// Import from react
import { useState } from "react";

// Import from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import uuid v4
import { v4 as uuidv4 } from "uuid";

// Import from Bootstrap 5
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddTodo = () => {
  // Define Info Msg (msg), visible state and todo
  const [msg, setMsg] = useState("");
  const [msgVisible, setMsgVisible] = useState(false);
  const [todo, setTodo] = useState("");

  // Define todos from store
  let todos = useSelector((state) => state.todos);

  // Declare dispatch
  const dispatch = useDispatch();

  const AddTodo = () => {
    let found = false;

    // check if todo is already duplicated in todos
    todos.map((todo_single) => {
      if (todo_single.name.toLowerCase().trim() === todo.toLowerCase().trim()) {
        setMsg(`There is already a "${todo}" in todos...(duplicate)!`);
        setMsgVisible(true);
        found = true;
      }
      return todo_single;
    });

    if (found) {
      return;
    }

    let newTodo = {
      id: uuidv4(),
      name: todo,
      status: "pending",
    };

    // Call reducer to add
    dispatch({ type: "ADD_TODO", payload: newTodo });

    // Display informational message
    setMsg(`"${todo}" has been added to todos!`);
    setMsgVisible(true);
  };

  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // AddTodo
    AddTodo();

    // Set todo variable to blank (clear form)
    setTodo("");
  };

  return (
    <Container className="pt-4">
      <Row>
        <Col className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <h3 className="mb-3">Add Todo</h3>
              <Form.Control
                placeholder="Enter Todo"
                className="mb-3"
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                  setMsg("");
                  setMsgVisible(false);
                }}
                required
                autoFocus
              />
              <Button
                variant="primary"
                type="submit"
                style={{ marginRight: "10px" }}
              >
                Add Todo
              </Button>
              {msgVisible && <p style={{ margin: "10px" }}>{msg}</p>}
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
