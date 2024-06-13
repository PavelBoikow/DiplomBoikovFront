import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";

import './App.css';

import { Header } from "./components";
import {Сontacts ,Sellows, Home, FullPost, Registration, AddPost, Login, AddStud, FullStud, AddInfo, Documentation } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Header_bottom_html from './components/Header_bottom/header_bottom_html';
import {Home_start} from './pages/homeStart';
import {Student_associations} from './pages/student_associations/student_associations.js';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])

  return (
    <>
      <Header />
      <Header_bottom_html/>
      <Container maxWidth="lg">
        <Routes>
        <Route path="/Contacts" element={<Сontacts />}/>
        <Route path="/Documentation" element={<Documentation />}/>
          <Route path="/info/:id/edit" element={<AddInfo />}/>
          <Route path="/Sellows" element={<Sellows/>}/>
          <Route path='/tags/:id' element={<Home tag={'tag'}/>}/> 
          <Route path="/" element={<Home_start/>}/>
          <Route path="/events" element={<Home/>}/>
          <Route path="/events/popularity" element={<Home status = 'popularity' stat = {1}/>}/>
          <Route path="/posts/:id" element={<FullPost />}/>
          <Route path="/posts/:id/edit" element={<AddPost />}/>
          <Route path="/add-post" element={<AddPost />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/Student_associations" element={<Student_associations/>}/>
          <Route path="/Student_associations/:id/edit" element={<AddStud />}/>
          <Route path="/add-stud" element={<AddStud />}/>
          <Route path='/Student_associations/:id' element={<FullStud/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
