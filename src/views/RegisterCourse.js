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

import axios from "axios";
import React, { useState, useEffect } from "react";
import { addCourse } from "../features/courses/courseSlice";
import { useDispatch } from "react-redux";

const RegisterCourse = () => {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState("");

  const handleRegisterCourse = () => {
    setLoading(true);
    setModules([courseDescription]);
    dispatch(
      addCourse({
        id: 40,
        title: courseName,
        instructor: courseInstructor,
        image: "https://img-a.udemycdn.com/course/240x135/1286908_1773_6.jpg",
        price: 10.99,
        url: "https://www.udemy.com/course/react-2nd-edition/",
        description: courseDescription,
      })
    );
    axios({
      method: "post",
      url: "35.222.255.39:8080/api/v1/courses",
      data: JSON.stringify({
        title: "biology",
        length: "4 month",
        instructor: "Taru",
        modules: ["modules"],
      }),
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        alert("Course registered successfully");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a course
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="courseName">Course name</Label>
                <Input
                  onChange={(e) => setCourseName(e.target.value)}
                  id="courseName"
                  name="courseName"
                  placeholder="Name of the course"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseLength">Course length</Label>
                <Input
                  onChange={(e) => setCourseLength(e.target.value)}
                  id="courseLength"
                  name="courseLength"
                  placeholder="The length of the course"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseInstructor">Course Instructor</Label>
                <Input
                  onChange={(e) => setCourseInstructor(e.target.value)}
                  id="courseInstructor"
                  name="courseInstructor"
                  placeholder="Name of the course instructor"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseDescription">Course Description</Label>
                <Input
                  onChange={(e) => setCourseDescription(e.target.value)}
                  id="courseDescription"
                  name="courseDescription"
                  placeholder="Enter description of the course"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>
                  Upload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup>
              <Button onClick={handleRegisterCourse}>
                {loading ? "Loading..." : "Submit"}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterCourse;
