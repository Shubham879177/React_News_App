import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
// here we are fetching the data from news api 
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=1ec3d1cb866e4c38b45c33bb7b6eab8d`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults })
  }


  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=1ec3d1cb866e4c38b45c33bb7b6eab8d&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}
  
  handelPrevClick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=1ec3d1cb866e4c38b45c33bb7b6eab8d&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
    this.setState({
      page:this.state.page-1
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsDekho - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 24) : " "} newsUrl={element.url} description={element.description ? element.description : ""} imageUrl={element.urlToImage} />
            </div>)
          })}

        </div>
        <div className="d-flex justify-content-between my-3">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handelPrevClick} >&laquo; Previous</button>
        <button type="button"  className="btn btn-dark" onClick={this.handleNextClick} >Next  &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News