import {
  Card,
  CardBody,
  CardTitle,
  Table,
  ButtonGroup,
  Button,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCourse } from "../../features/courses/courseSlice";
import { useDispatch } from "react-redux";

const CustomTable = ({
  tableData,
  action = "federations" || "unions",
  tableHeaders,
}) => {
  const dispatch = useDispatch();
  // make states for multiple dropdown menus that are being mapped with dynamic data
  const [dropdownOpen, setDropdownOpen] = useState([]);
  const [courses, setCourses] = useState(tableData);

  // toggle function for dropdown
  const toggle = (index) => {
    const newArray = dropdownOpen.map((element, dropdownIndex) => {
      if (index === dropdownIndex) {
        return !element;
      }
      return element;
    });
    setDropdownOpen(newArray);
  };

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">EasyLearning Courses</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                {tableHeaders.map((item, index) => {
                  return <th key={index}>{item.header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {courses &&
                courses.map((tdata, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <h6>{tdata.title}</h6>
                        </div>
                      </td>
                      <td>RWF {tdata.price}</td>
                      <td>{tdata.instructor}</td>
                      <td>
                        <ButtonGroup>
                          <Link to={`/editCourse/${tdata.id}`}>
                            <Button color="success" size="sm">
                              <i className="bi bi-pencil-fill"></i>
                            </Button>
                          </Link>
                          <Button
                            onClick={() => handleDelete(tdata.id)}
                            color="danger"
                            size="sm"
                          >
                            <i className="bi bi-trash-fill"></i>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomTable;
