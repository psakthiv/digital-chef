import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate  } from 'react-router-dom';
import logo from './Logo.jpg';
import { Image } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',}}>
    <Form>
    <Image
                                alt=""
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                />{' '}
                                Digital Chef
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="User Name" />
        <Form.Text className="text-muted">
          This can also be your email address.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={()=>navigate("/home")}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;