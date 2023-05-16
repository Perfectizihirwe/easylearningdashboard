import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { courses } from "../utils/data";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EditFederation = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(courses[id - 1]);

  console.log(course);

  const handleEdit = (e) => {
    e.preventDefault();
    alert("Course edited successfully");
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Edit course
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="federationName">Course title</Label>
                <Input
                  id="federationName"
                  name="federationName"
                  placeholder="Name of the course"
                  type="text"
                  defaultValue={course.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="federationLeaderFirstName">Instructor</Label>
                <Input
                  id="federationLeaderFirstName"
                  name="federationLeaderFirstName"
                  placeholder="Instructor's name"
                  type="text"
                  defaultValue={course.instructor}
                />
              </FormGroup>
              <FormGroup>
                <Label for="numberOfUnions">Price</Label>
                <Input
                  id="numberOfUnions"
                  name="numberOfUnions"
                  placeholder="Price of the course"
                  type="number"
                  defaultValue={course.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter description of the federation"
                  type="textarea"
                  defaultValue={course.description}
                />
              </FormGroup>
              <Button onClick={handleEdit}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditFederation;
