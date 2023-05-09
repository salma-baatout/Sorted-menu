
import { Container, Row, Col, Table } from "react-bootstrap";

const Chart = (props) => {
    const totalPrice = props.selectedItems.reduce((acc, item) => acc + item.price, 0);
  
    const items = props.selectedItems.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>${item.price}</td>
        </tr>
      );
    });
  
    return (
      <Container>
        <Row>
          <Col>
            <h2>Chart</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
              <tfoot>
                <tr>
                  <td>Total:</td>
                  <td>${totalPrice}</td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  };
  export default Chart;