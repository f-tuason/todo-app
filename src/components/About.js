// In React 17, you do not need import react

// Import from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Todos</h2>
          <p>
            To Dos are tasks that need to be done once or not on a regular
            schedule.
          </p>
          <p>
            Examples may include "Complete assignment about nutrition" or "Wash
            mom's car".
          </p>
          <p>
            You can start your Todos by clicking the button "Add Todo" to add a
            Todo.
          </p>
          <p>
            You can view all your Todos by clicking on the button "All Todos".
          </p>
          <p>
            You can click on the green arrow on your Todo to signal that you
            have done that Todo. This will move your todo to the Done column.
          </p>
          <p>You can view all your Done todos on the Done column.</p>
          <p>You can remove a Todo by clicking on the "X" button.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
