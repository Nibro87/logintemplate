import { Button,Card } from 'react-bootstrap';
import axios from "axios";
import React, { useState,useEffect,Component } from "react"
import './headline.css'

const API_URL = "http://localhost:8080/devops_starter_war_exploded";

export default class Headlines extends Component{


    constructor(props) {
        super(props);
        this.fectData()

        //this.renderNews = this.renderNews.bind(this);
        this.state ={
            news:[]
        }
      };

     

       fectData(params) {
        return axios.get(API_URL + "/api/news/headlines")
            .then((res) =>{
                console.log(res)
            this.setState({news:res.data.articles})
        });

          
      }
      
      
    //  {this.state.news.map(article =>(
  //      <p>{article.title}</p>
  //  ))}

      renderNews = () =>{

        return this.state.news.map(article =>(
            <p>{article}</p>
        ))

      }
    
    
    
    
    
    
      render() {
        return (
         
            <>


  {this.state.news.map(article =>(
   
<Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src={article.urlToImage} />
  <Card.Body>
    <Card.Title><a target="_blank" href= {article.url}>{article.title}</a></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{article.publishedAt}</Card.Subtitle>
    <Card.Text>
      {article.description}
     
    </Card.Text>
   
  </Card.Body>
</Card>

))}     

        
            </>
        );
      
    

    
    }

      
          
      


}