import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<News key="General" pageSize={5} />}/>
          <Route exact  path="/business" element={<News key="Business" pageSize={5} category="Business" />}/>
          <Route exact  path="/entertainment" element={<News key="Entertainment" pageSize={5} category="Entertainment" />}/>
          <Route exact  path="/health" element={<News key="Health" pageSize={5} category="Health" />}/>
          <Route exact  path="/science" element={<News key="Science" pageSize={5} category="Science" />}/>
          <Route exact  path="/sports" element={<News key="Sports" pageSize={5} category="Sports" />}/>
          <Route exact  path="/technology" element={<News key="Technology" pageSize={5} category="Technology" />}/>
        </Routes>
      </div>

    )
  }
}
