import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl,author,date} = this.props;
        return (
            <>
            <div className="my-3">
                <div className="card" style={{width:"20rem"}}>
                    <img src={!imageUrl?"https://cdn.kalingatv.com/wp-content/uploads/2021/09/gold-price-today.jpg" :imageUrl}/>
                      <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}.....</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a href ={newsUrl} className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
                
                </>
        )
    }
}

export default NewsItem