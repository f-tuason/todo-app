// Import from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Import Link from react-router-dom
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Link to="/add">
            <Button variant="success" style={{ margin: "10px" }}>
              Add Todo
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <Link to="/">
                <Button variant="primary" style={{ margin: "5px" }}>
                  All Todos
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/pending">
                <Button variant="warning" style={{ margin: "5px" }}>
                  Pending
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/done">
                <Button variant="info" style={{ margin: "5px" }}>
                  Done
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
