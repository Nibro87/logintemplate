import { Form } from 'react-bootstrap';



function CommentBox() {

    return(
<Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button class="btn btn-primary col-2 ms-2">Send</button>
</Form>
    );
    
}

export default CommentBox;