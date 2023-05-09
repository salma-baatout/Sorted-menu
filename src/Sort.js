import { useState } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";

const DessertsList = (props) => {
  const [sortOrder, setSortOrder] = useState("calories");

  const sortedDesserts = props.data
    .sort((a, b) => {
      if (sortOrder === "calories") {
        return a.calories - b.calories;
      } else if (sortOrder === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.price - b.price;
      }
    })
    .map((dessert) => {
      return (
        <tr>
          <td>{dessert.name}</td>
          <td>{dessert.calories}</td>
          <td>${dessert.price}</td>
        </tr>
      );
    });

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="sort-order">
            <Form.Label>Sort by:</Form.Label>
            <Form.Control
              as="select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="calories">Calories</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Calories</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{sortedDesserts}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DessertsList;