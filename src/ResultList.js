import axios from "axios";
import { Button,Card,Comment } from 'react-bootstrap';
import SERVER_URL from "./settings"
import SearchArticleComponent from "./Child";
const { Component } = require("react");





 class ResultList extends Component{


    constructor(props) {
        super(props);
     
      
    
        this.state ={
            news:[],
            commentText:""
            
        }
    
    
    }
   


    addComment =(e) =>{
        e.preventDefault()
        this.setState({commentText: e.target.value})   
        
    }



    shareArticle = (article) => {
    article.comment = this.state.commentText
    console.log(article);
    axios.post(SERVER_URL + "/api/info/share",article)
    .then(()=>{})
   
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
            <SearchArticleComponent parentCallback = {this.setNews} />
      
            <>


{foundArticles ? this.state.news.map(article =>(
 
<Card style={{ width: '40rem' }}>

<Card.Img variant="top"  src={article.urlToImage} />
<Card.Body>
  <Card.Title><a target="_blank"  href= {article.url}>{article.title}</a></Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{article.publishedAt}</Card.Subtitle>
  <Card.Text> 
   {article.description}
   </Card.Text>

 

</Card.Body>


<input type="text" name="comment" onChange={this.addComment}/> 




<button onClick={() =>{this.shareArticle(article)}}  variant="primary">Share</button>

</Card>


)) : <p>no articles</p>}
   

      
          </>
           
         
         </div>
          
         </>

        )
    
    }






}
export default ResultList;