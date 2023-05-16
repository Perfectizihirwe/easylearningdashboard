import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";

const TeamMember = ({ image, text, id, position }) => {
  return (
    <Card
      style={{
        width: "14rem",
      }}
    >
      <img height={200} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardText className="mt-3">{text}</CardText>
        <CardText className="mt-3">Position: {position}</CardText>
        <Button color={"primary"}>View</Button>{" "}
        <Button color={"info"}>Edit</Button>{" "}
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default TeamMember;
