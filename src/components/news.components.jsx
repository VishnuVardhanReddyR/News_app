import React from "react";
import "./news.css";
import "bootstrap/dist/css/bootstrap.min.css";
const News = ({title,image,description,url,content,author,time}) => {
    let newText = time.split('T');
    return(
        <div className="polaroid">
            <div className="container">
                <h3><b>{title}</b></h3>
                <div className="row">
                    <div className="column">
                    {author? <h6><b>Author: {author}</b><br/> </h6> : null}<br/>
                    {time? <h6><small><b>Date: </b>{newText[0]}, <b>Time: </b>{newText[1]}</small></h6> : null}
                    </div>
                    <div className="column">
                            
                    </div>
                </div>
            </div>
                <img src={image} class="img-fluid" alt="Responsive image" />
            <div className="container">
            <a href={url} class="button button2">
            <p><b>{description}</b></p> 
            </a>
                {content? <p name="content" alt="Sorry, no content">{content}</p> : null}
            </div>
        </div>
    );
}
 
export default News;