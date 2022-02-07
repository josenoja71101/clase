import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.etnassoft.com/api/v1/get/?category=programacion&lang=spanish&num_items=5'
    );
    const data = await response.json();
    this.setState({ bookData: data });
  }

  render() {
    return (
      <div id="ej5">
        <h2>Ejercicio 5</h2>
        Utiliza la API REST de{' '}
        <a href="https://openlibra.com/es/page/public-api">OpenLibra</a> para
        obtener datos acerca de libros. La petición tendrá que incluir
        <Container>
          <Row>
            <Carousel>
              {this.state.bookData.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.cover}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.author}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Perfil;
/*<ul>
              <li></li>
              <li></li>
              <li>{item.publisher_date}</li>
              <li>{item.pages}</li>
              <li>
                <a href={item.url_download}> descarga</a>
              </li>
              <li>
                <img src={item.cover} />
              </li>
            </ul> */
