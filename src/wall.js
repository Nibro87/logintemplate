import React, { useState,useEffect,Component } from "react"
import { Button,Card,CloseButton } from 'react-bootstrap';
import axios from "axios";
import SERVER_URL from "./settings"


function DeleteArticle(params) {
  return axios.get(SERVER_URL +"/api/info/delete?id="+params)
  .then((res) =>{
   setTimeout(()=>{window.location.reload(false)},500)
   
  })
   
    
}





function Wall() {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        
                 fetch(SERVER_URL + "/api/info/allposts")
                .then((res) => res.json())
                .then((data) => {
                  setData(data);
                  console.log(data)
                })
                .catch((err) => {
                  setError(err);
                })
                .finally(() => {
                  setLoading(false);
                });
              
        setLoading(true);
    
    }, []);
  
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(data)) {
      return <p>There was an error loading your data!</p>;
    }
  
    return (
      <ul>
        {data.map((item) => (


       <Card style={{ width: '40rem' }}>
           <button className="btn btn-danger btn-xs" style = {{ width: '1rem' }} onClick= {()=> {DeleteArticle(item.id)}} />     
          <Card.Text>{item.postArticle}</Card.Text>
         <Card.Img variant="top" src={item.urlToImage} />
         <Card.Body>
           <Card.Title><a target="_blank" href= {item.url}>{item.title}</a></Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{item.publishedAt}</Card.Subtitle>
           <Card.Text>
             {item.description}
            
           </Card.Text>
        
         </Card.Body>
       </Card>
      
       ))}
       
      </ul>
    );
  }

  export default Wall;