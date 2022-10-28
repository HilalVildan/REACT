import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Teacher = () => {
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);
  console.log(insanlar);

  return (
    <Container className="text-center">
      <Row>
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <Col sm={12} md={6} lg={4} key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
                style={{ cursor: "pointer" }}
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Teacher;
