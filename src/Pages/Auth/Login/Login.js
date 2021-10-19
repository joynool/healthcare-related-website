import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () =>
{
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { message, setMessage, setIsLoading, createNewUser, setUserName, processLogin, loginUsingGoogle } = useAuth();

    const handleNameChange = e =>
    {
        setName(e.target.value);
    };

    const handleEmailChange = e =>
    {
        setEmail(e.target.value);
    };

    const handlePassChange = e =>
    {
        setPass(e.target.value);
    };

    const handleRegister = e =>
    {
        e.preventDefault();
        if (pass.length < 6) {
            setMessage('Password should be at least 6 character.')
            return;
        }
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass)) {
            setMessage('Password must contain.')
            return;
        }
        isLogin ?
            (createNewUser(name, email, pass)
                .then(result =>
                {
                    setUserName(name)
                    history.push(location.state?.from || '/home')
                })
                .catch(error => { setMessage(error.message) })
                .finally(() =>
                {
                    setIsLoading(false)
                }))
            :
            (processLogin(email, pass)
                .finally(() =>
                {
                    history.push(location.state?.from || '/home')
                    setIsLoading(false)
                }));

    };

    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogIn = () =>
    {
        loginUsingGoogle()
            .then(result =>
            {
                history.push(location.state?.from || '/home')
            })
            .catch(error => { setMessage(error.message) })
            .finally(() => setIsLoading(false));
    }

    const toggleLogin = e =>
    {
        setIsLogin(e.target.checked);
        setMessage('');
    };

    return (
        <div className="w-25 border border-2 rounded mx-auto m-4 p-3">
            <h2 className="fw-light text-center text-success">
                <u>
                    {
                        isLogin ? 'Register Fitness Club' : 'Login Fitness Club'
                    }
                </u>
            </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    {
                        isLogin && <div>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" required />
                        </div>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter your email" required />
                    {
                        isLogin && <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassChange} type="password" placeholder="Enter your password" required />
                </Form.Group>
                {
                    message && <Form.Text className="text-danger fw-bold">
                        {message}
                    </Form.Text>
                }
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="New to Fitness Club ?" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    {
                        isLogin ? 'Register' : 'Log In'
                    }
                </Button>
                <Button onClick={handleGoogleLogIn} variant="warning" className="ms-3">
                    Login with Google
                </Button>
            </Form>
        </div>
    );
};

export default Login;