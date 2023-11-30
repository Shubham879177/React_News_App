import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, author, source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1}}>{source}</span>
                    <img src={!imageUrl ? "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/mall-of-new-hampshire-0124-65610b721a1db.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p><small style={{color:"red"}} >By {author ? author : "unknown"} at {new Date(publishedAt).toDateString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default NewsItem