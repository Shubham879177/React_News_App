import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15
  apiKey = process.env.REACT_APP_NEWSAPP_API

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        <Navbar country="in"/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
          <Route exact  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} />}/>
          <Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={this.pageSize} category="Business" />}/>
          <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} category="Entertainment" />}/>
          <Route exact  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={this.pageSize} category="Health" />}/>
          <Route exact  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={this.pageSize} category="Science" />}/>
          <Route exact  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={this.pageSize} category="Sports" />}/>
          <Route exact  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} category="Technology" />}/>
        </Routes>
      </div>

    )
  }
}
