import Head from 'next/head'
import { products } from 'data/data.js';
import { useCart } from "react-use-cart";
import { Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const { addItem } = useCart();

  return (
    <div className='row g-3'>
      <Head>
        <title>Grocerilaza</title>
        <meta name="description" content="Next-js Shopping App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row md={2} xs={1} lg={3} className="g-4 mx-auto">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 cardOnHover">
              <Card.Img variant="top" src={product.imgUrl} height='250px' style={{ objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-4">{product.name}</span>
                  <span className=" ms-2 text-muted">${product.price}</span>
                </Card.Title>
                <Card.Subtitle>
                  <p className="fs-6 text-muted mt-2">{product.about}</p>
                </Card.Subtitle>
                <div className="mt-auto">
                  <Button className="w-100" size='lg' variant='dark' onClick={() => addItem(product)}>
                   Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home;
