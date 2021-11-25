import axios from "axios";
import { Button,Card } from 'react-bootstrap';
import ChildComponent from "./Child";
const { Component } = require("react");




 class ResultList extends Component{


    constructor(props) {
        super(props);
        
      
    
        this.state ={
            news:[],
            
        }
    
    
    }
   


    setNews=(data)=> {
        console.log(data)
        this.setState({news: data || [] })
    
    

    }



    render() {
const foundArticles = this.state.news.length != 0
        
return(
            <>
        <div>
            <ChildComponent parentCallback = {this.setNews}/>
      
            <>


{foundArticles ? this.state.news.map(article =>(
 
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

)) : <p>no articles</p>}
   

      
          </>
           
         
         </div>
          
         </>

        )
    
    }






}
export default ResultList;