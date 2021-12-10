// React v17 does not need import react

// Import from Bootstrap 5
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Import from images
import todo from "../images/todo.jpg";

// Import Link from react-router-dom
import { Link } from "react-router-dom";

export const MenuBar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <img src={todo} alt="todo" width="40px" />
            &nbsp;To Do App
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
