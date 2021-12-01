import React, { useState,useEffect,Component } from "react"
import { Button,Card,Form,FormControl } from 'react-bootstrap';
import axios from "axios";
import ResultListCom from "../../ResultList";

const API_URL = "http://localhost:8080/CA2_war_exploded";

 class Searchbar extends Component{
  
  
  constructor(props) {
    super(props);
    console.log(props);
    

    this.state ={
        news:["test"],
        search: ""
    }


}

fectData(params) {
  
    return axios.get(API_URL + "/api/news/"+params)
        .then((res) =>{
            console.log(res)
        //this.props.onSearchNews(res.data.articles)
        this.setState({news:res.data.articles})
    });

      
  }


  handleOnInputChange = (evt) => {
    evt.preventDefault();
    this.props.parentCallback(this.state.news);
    
   console.log(evt,this.state)
  
    }
   


 

  
  render(){
    return(

      <div class="row">
      <div className = "col-6 mt-5 ms-5">
        <input placeholder="Search" id="Search"   class="form-control-sm col me-2"/>
        <button variant="btn btn-primary col-2 ms-1" onClick={this.handleOnInputChange}>Search</button>
       
      
      
      
      
      
      
      
      
      </div>
     </div>





    )


    }
}

export default Searchbar;