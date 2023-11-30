import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps={
      country:"in",
      pageSize:8,
      category:"General"
    }

    static propTypes={
      country: PropTypes.string,
      pageSize:PropTypes.number,
      catrgory:PropTypes.string
    }
  
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ec3d1cb866e4c38b45c33bb7b6eab8d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults, loading:false })
  }


  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ec3d1cb866e4c38b45c33bb7b6eab8d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({loading:false})
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}
  
  handelPrevClick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ec3d1cb866e4c38b45c33bb7b6eab8d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
    this.setState({
      page:this.state.page-1,
      loading:false
    })
  }

  
  render() {

    return (
      <div className="container my-3">
        <h2 className='text-center'>NewsDekho - {this.props.category} Top Headlines.</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 30) : " "} newsUrl={element.url} description={element.description ? element.description : ""} imageUrl={element.urlToImage} publishedAt = {element.publishedAt} author={element.author} source={element.source.name} />
            </div>)
          })}

        </div>
        <div className="d-flex justify-content-between my-3">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handelPrevClick} >&laquo; Previous</button>
        <button type="button" disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick} >Next  &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News