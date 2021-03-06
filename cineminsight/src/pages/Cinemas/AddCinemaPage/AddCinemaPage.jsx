import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const genreList = [
  "Select Genre",
  "Sci-Fi",
  "Drama",
  "Action",
  "Comedy",
  "Western",
  "Anime",
  "Historical",
  "Documentary",
  "Educational",
  "RomCom",
  "Mystery",
  "Thriller",
  "Fantasy",
  "Crime",
  "Horror",
  "Stupid",
];

export default function AddCinemaPage({ handleAddCinema }) {
  const [invalidForm, setValidForm] = useState(true);
  const [newCinema, setNewCinema] = useState({
    title: "",
    genre: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [newCinema]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCinema(newCinema);
    setNewCinema(newCinema);
  };

  const handleChange = (e) => {
    setNewCinema({
      ...newCinema,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container fluid style={{ marginTop: 50 }}>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <h1>Add Cinema</h1>
            <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Cinema Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newCinema.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Select
                  name="genre"
                  value={newCinema.genre}
                  onChange={handleChange}
                  required
                >
                  {genreList.map((genre) => {
                    return <option value={genre}>{genre}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Button size='lg' type="submit" disabled={invalidForm}>
                Add Cinema
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
