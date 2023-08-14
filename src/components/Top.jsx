import { Container,Row,Col,Card,Table } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';

function Top() {
    const [mydata,setData] = useState([]);

    const apiget = () => {
      fetch('https://inshorts.me/news/top?offset=0&limit=21')
      .then((response)=>response.json())
      .then((json)=>{
        console.log(json);
        setData(json.data.articles)
      }
      );
    };
    useEffect(()=>{
      apiget();
      const interval = setInterval(()=>{apiget();},500000);
      return ()=> clearInterval(interval);
    },[]);
  
    return (
      <Container fluid className="py-4">
        <Row xs={1} md={3} className="g-4">
          {
            mydata.map(
              (value)=>{
                return(
                  <>
                      <Col className="container-fluid mt-4">
          <Card>
              <Card.Img variant="top" src={value.imageUrl}  height="275px"/>
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>
                  {value.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> 
                  </>
                )
              }
          )
          }
        </Row>
      </Container>
    );
}

export default Top