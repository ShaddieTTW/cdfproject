import { React} from 'react';
import hero from "./hero/newhero.jpg";
import jwt from 'jsonwebtoken';

const Home = () => {
  const secretKey = 'your-secret-key';
  const token = localStorage.getItem('authToken');
  
  try {
    // Verify and decode the JWT
    const decoded = jwt.verify(token, secretKey, { algorithms: ['HS512'] });

    // Access the decoded payload
    console.log('Decoded Payload:', decoded);
  } catch (error) {
    console.error('JWT Verification Failed:', error.message);
  }
  return (
    <>
    <div className='img-hero'>
      <img src={hero} alt="hero" />
      <div class="on-img">
        <h1>Hello</h1>
      </div>
    </div>
    <div className='broad-grey'>
      
      <div className='all-width mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <h1>Home</h1>
        <p>Home Sweet Home</p>
      </div>
     
    </div>
    </>
    
  );
}
export default Home;