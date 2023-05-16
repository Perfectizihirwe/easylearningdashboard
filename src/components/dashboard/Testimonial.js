import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";

const Testimonial = ({ image, text, id, status }) => {
  return (
    <Card
      style={{
        width: "14rem",
      }}
    >
      <img height={200} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardText className="mt-3">{text}</CardText>
        <CardText className="mt-3">Status: {status}</CardText>
        <Button color={"info"}>Approve</Button>{" "}
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default Testimonial;
