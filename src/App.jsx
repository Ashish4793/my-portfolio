import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { BoxArrowUpRight } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
<div>



    <div className='App'>
      <section className='mt-5' id='start'>

        <div data-aos="fade-in">
          <img width={250} src="../assets/img/avatar.png" className="rounded-circle avatar mt-3 mb-3"
            alt="Avatar" />

          <h2 className='display-4 head1'>Hey,</h2>
          
          <h1 className='display-2 head2'>I'm Ashish Kumar.</h1>
          <h2 className='typewriter'><Typewriter
  options={{
    strings: ['A Full Stack Web Developer', 'A Cloud Enthusiast'],
    autoStart: true,
    loop: true,
  }}
/></h2>
<div className="alert alert-danger w-50 mx-auto mt-5 mb-5" role="alert">
  This version of the website has been removed <br></br>
  Please click <a href="https://ashishh-kumar.netlify.app/">here</a> to visit updated website
</div>
        </div>
      </section>


</div>
</div>

  );
}

export default App;
