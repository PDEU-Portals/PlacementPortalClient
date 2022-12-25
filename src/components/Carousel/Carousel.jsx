import Carousel from 'react-bootstrap/Carousel';

function CarouselExample() {
  return (
    <>
    <h1>UPDATES</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block m-auto "
          style={{width:"clamp(350px,90vw,1500px",maxHeight:"70vh"}}
          src={"images/cl1.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </> );
}

export default CarouselExample;