import axios from "axios";
import React, { useState,useEffect,Component } from "react"

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

      componentDidMount(){
      }

       fectData(params) {
        console.log('te')

        return axios.get(API_URL + "/api/news/headlines").then((res) =>{
            console.log(res.data.articles)
            this.setState({news:res.data.articles})
        });

          
      }


      renderNews = () =>{

        return this.state.news.map(article =>(
            <p>{article}</p>
        ))

      }
    
    
    
    
    
    
      render() {
        return (
         
            <><h1>hej</h1>
        {this.state.news.map(article =>(
            <p>{article.title}</p>
        ))}
            </>
        );
      
    

    
    }

      
          
      


}