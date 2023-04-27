import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Form } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div class="container">
      <div class="card shadow">
        <div class="card-body">
          <div class="text-center login-form ">
           <Form>
            <Form.Label>User</Form.Label>
            <Form.Control type='text' placeholder='Username'></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'></Form.Control>
           </Form>
           <Button>Login</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
