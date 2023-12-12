import {React, useState} from 'react';
import Logo from "../../../components/Logo"
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';


const loginUrl = "http://41.63.9.43:7002/primarydata/users/login";

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async (event) =>{
        event.preventDefault();

        setLoading(true);
        try {
            const response = await axios.post(loginUrl, {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'userName': username,
                        'password': password,
                    },
                }
            );
            const authToken = response.data;

            // Store encrypted token
            //const encryptedToken = CryptoJS.AES.encrypt(authToken, 'secretKey').toString();
            localStorage.setItem('authToken', authToken);
            
            // Retrieve and decrypt token
            // const storedToken = localStorage.getItem('authToken');
            // const decryptedToken = CryptoJS.AES.decrypt(storedToken, 'secretKey').toString(CryptoJS.enc.Utf8);
            //console.log(response.data);
    
            // Reset the form and loading state
            setUsername('');
            setPassword('');
            setError(null);
            navigate('/cdf/');
        } catch (error) {
            // Handle login error
            setError(error.message);
            alert(error.message)
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="mas-login log">
            <form onSubmit={handleLogin}  className="log-form">
                <div className="flex justify-center divide-inherit">
                    <Logo theme="grey-color" root="/"/>
                </div>
                <h2 className='text-3xl antialiased text-green-600 py-5'>Login</h2>
                <div className='flex gap-5 w-full'>
                    <div className="w-full">
                        <FormField onchange={(e) => setUsername(e.target.value)} label="Username" id="txtusername" styles="w-full"/>
                        <FormField onchange={(e) => setPassword(e.target.value)} label="Password" id="txtpassword" type="password" styles="w-full"/>

                    </div>
                    
                </div>
                <div className="grid w-full" >
                    <Button type="submit" text="Login" styles="w-full text-center uppercase p-2 rounded-sm" />
                </div>
                <div className="flex justify-between items-center py-2">
                    <Link to="register" className='text-sky-600'>Register If has no Account</Link>
                    <Link to="register" className='text-sky-600'>Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;