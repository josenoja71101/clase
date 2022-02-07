import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
class Carrusel extends React.Component {
  constructor(props) {
    super(props);
    this.elementos = props.elementos;
  }

  render() {
    return (
      <Container>
        <Row>
          <Carousel>
            {this.elementos.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.thumbnail}
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
    );
  }
}
export default Carrusel;
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
