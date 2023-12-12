import { React } from 'react';
import hero from "./hero/newhero.jpg";

const Home = () => {
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