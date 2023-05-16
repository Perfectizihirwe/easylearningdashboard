import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      instructor: "Maximilian Schwarzmüller",
      image: "https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    },
    {
      id: 2,
      title: "Modern React with Redux [2020 Update]",
      instructor: "Stephen Grider",
      image: "https://img-a.udemycdn.com/course/240x135/705264_caa9_11.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/react-redux/",
      description:
        "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
    },
    {
      id: 3,
      title: "React Native - The Practical Guide [2020 Edition]",
      instructor: "Maximilian Schwarzmüller",
      image: "https://img-a.udemycdn.com/course/240x135/959700_8bd2_11.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/react-native-the-practical-guide/",
      description:
        "Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps",
    },
    {
      id: 4,
      title: "The Complete React Developer Course (w/ Hooks and Redux)",
      instructor: "Andrew Mead",
      image: "https://img-a.udemycdn.com/course/240x135/1286908_1773_6.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/react-2nd-edition/",
      description:
        "Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
    },
    {
      id: 5,
      title: "React Front To Back",
      instructor: "Brad Traversy",
      image: "https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/modern-react-front-to-back/",
      description:
        "Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects",
    },
    {
      id: 6,
      title: "The Complete React & Redux Course - Build Modern Web Apps",
      instructor: "Shaun Pelling",
      image: "https://img-a.udemycdn.com/course/240x135/705264_caa9_11.jpg",
      price: 10.99,
      url: "https://www.udemy.com/course/react-redux/",
      description:
        "Go from Beginner to React Js Expert by building an Instagram Like Web App with React 16, React Router, Redux & Firebase!",
    },
  ],
};

export const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    deleteCourse: (state, action) => {
      const idTobeDeleted = action.payload;
      console.log(idTobeDeleted, "ID");
      var newArray = [];
      state.courses.map((item) => {
        if (item.id !== idTobeDeleted) {
          newArray.push(item);
        }
      });
      state.courses = newArray;
      console.log(state.courses, "new array");
      alert("Course deleted successfully");
      window.location.reload();
    },
    addCourse: (state, action) => {
      const newCourse = action.payload;
      state.courses.push(newCourse);
      alert("Course added successfully");
      window.location.href = "/";
    },
    editCourse: (state, action) => {
      const editedCourse = action.payload;
      console.log(editedCourse, "edited course");
      var newArray = [];
      state.courses.map((item) => {
        if (item.id !== editedCourse.id) {
          newArray.push(item);
        } else {
          newArray.push(editedCourse);
        }
      });
      state.courses = newArray;
      console.log(state.courses, "new array");
      alert("Course edited successfully");
      window.location.href = "/";
    },
  },
});

export const { deleteCourse, addCourse, editCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
