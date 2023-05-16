import { Col, Row, Button } from "reactstrap";
import CustomTable from "../components/dashboard/CustomTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const tableHeaders = [
  {
    key: 1,
    header: "Course title",
  },
  {
    key: 2,
    header: "Course price",
  },
  {
    key: 3,
    header: "Instructor",
  },
  {
    key: 4,
    header: "Actions",
  },
];

const Federations = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { courses } = state;

  console.log(state);

  return (
    <div>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <CustomTable
            tableData={courses}
            action="courses"
            tableHeaders={tableHeaders}
          />
        </Col>
        <Col lg="12">
          <Button color="primary" className="mt-3">
            <Link
              className="text-decoration-none text-light"
              to="/federations/registerFederation"
            >
              Add course
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Federations;
