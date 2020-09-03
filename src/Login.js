import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory } from 'react-router-dom';
import image from './image/amazon.jpg'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push("/")
                //redirec to homepage
            }) 
            .catch (e => alert(e.message))
    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push("/")
                    //create user and redirect to home page
            }) 
            .catch (e => alert (e.message))
        
    }
    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="data:image/png;base64,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"
            alt=""
            />
            </Link>
            <div className="login__container">
            <h1>Sign in</h1>
            <form>
            <h5>E-mail</h5>
            <input value={email} onChange={e =>setEmail(e.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <button onClick={login}  type="submit" className="login__signInButton"> Sign In</button>
            </form>
            
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>     
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
