import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Federation = lazy(() => import("../views/federations.js"));
const RegisterCourse = lazy(() => import("../views/RegisterCourse.js"));
const EditFederation = lazy(() => import("../views/EditFederation"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/courses" /> },
      {
        path: "/courses",
        exact: true,
        element: <Federation />,
      },
      {
        path: "/federations/registerFederation",
        element: <RegisterCourse />,
      },
      {
        path: "/editCourse/:id",
        element: <EditFederation />,
      },
    ],
  },
];

export default ThemeRoutes;
