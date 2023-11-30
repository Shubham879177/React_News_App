import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"



export default class App extends Component {
  pageSize = 15
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<News key="General" pageSize={this.pageSize} />}/>
          <Route exact  path="/business" element={<News key="Business" pageSize={this.pageSize} category="Business" />}/>
          <Route exact  path="/entertainment" element={<News key="Entertainment" pageSize={this.pageSize} category="Entertainment" />}/>
          <Route exact  path="/health" element={<News key="Health" pageSize={this.pageSize} category="Health" />}/>
          <Route exact  path="/science" element={<News key="Science" pageSize={this.pageSize} category="Science" />}/>
          <Route exact  path="/sports" element={<News key="Sports" pageSize={this.pageSize} category="Sports" />}/>
          <Route exact  path="/technology" element={<News key="Technology" pageSize={this.pageSize} category="Technology" />}/>
        </Routes>
      </div>

    )
  }
}
