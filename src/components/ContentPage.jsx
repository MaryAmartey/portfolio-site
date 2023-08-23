import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectsPage from './ProjectsPage';
import Navigation from './Navigation';
import Testimonials from './Testimonials';
import '../styles/App.css';

function ContentPage() {
  //const { section } = useParams(); 
  const { section } = useParams();

  return (
    <>
    <Navigation color="bg-gray-950"/>
  
    <AboutPage />
    <ResumePage />
    <ProjectsPage />
    <Testimonials />
    </>
  );
}

export default ContentPage;
