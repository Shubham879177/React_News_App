import React, { Component } from 'react'

export class NewsItem extends Component {
   

    render() {
        let {title, description,imageUrl,newsUrl} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{width: 18+"rem"}}>
                    <img src={!imageUrl?"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/mall-of-new-hampshire-0124-65610b721a1db.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default NewsItem