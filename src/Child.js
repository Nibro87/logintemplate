import React, { Component} from 'react';
import { Button,Card } from 'react-bootstrap';
import axios from "axios";
import SERVER_URL from "./settings"



class SearchArticle extends Component {

constructor(props) {
        super(props);

        this.state ={
            news: [],
            searchText: ""
        }

        
        
    }

    fectData(params) {
  
        axios.get(SERVER_URL + "/api/news/"+params)
            .then((res) =>{
                console.log(res)
                this.setState({news:res.data.articles})
                this.props.parentCallback(this.state.news);
           
        });
    
          
      } 



    handleOnInputChange = (event) => {
        const query = event.target.value;
                this.setState({ query, loading: true, message: ''  } );
    };

    
handleClick = (e) => {
   this.props.parentCallback(this.state.news);
   const params = this.state.searchText;
   console.log(params)
  
    axios.get(SERVER_URL + "/api/news/"+params)
   .then((res) =>{
       console.log(res)
       this.setState({news:res.data.articles})
       this.props.parentCallback(res.data.articles);
  
});

};


searchChange =(e) =>{
e.preventDefault()
this.setState({searchText: e.target.value})    
console.log(e)

}



 render() {
        return (
            <div>
                
                 <input placeholder="Search" id="Search" onChange={this.searchChange}  class="form-control-sm col me-2"/>
                 <button onClick={this.handleClick}>Search</button>
            </div>
        );
    }


    


}
export default SearchArticle;