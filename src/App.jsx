import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './navbar';
import skills from './skills';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
<div>
<div id='eazybusModal' class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fw-bold">EazyBus</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>A bus booking website with a lot of features. Users can book seats,manage and cancel their bookings. Integrated with Razorpay and Stripe Payment Gateway.</p>
        <h5 className='mb-3'>Built with 🚀</h5>
        <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Mongoose ODM</li>
  <li>MongoDB</li>
  <li>jQuery</li>
  <li>Passport.js</li>
  <li>Nginx</li>
  <li>Stripe</li>
  <li>Razorpay PG</li>
</ul>
<h5 className='mb-3'>Functionalities ⚙️</h5>
<ul>
<li>Users can book seats on different routes.</li>
  <li>Users can manage and cancel thier bookings.</li>
  <li>Fully working payment gateway integration.</li>
  <li>User authentication using Local(username + password) and Google-OAuth Strategy.</li>
  <li>Seats are blocked to avoid same seat bookings. Incase the payment fails or user drops the booking seats are released after 10 mins.</li>
  <li>E-Mail functionalities to send booking confirmations. </li>
  <li>Fully working payment gateway integration.</li>
  <li>Hosted on AWS EC2 and AWS S3 is used to store invoices.</li>
</ul>
<a target='blank' style={{color : 'black'}} href="https://eazybus.site">Website Link 🔗</a>
      </div>
    </div>
  </div>
</div>

<div id='streamscanModal' class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fw-bold">StreamScan</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>StreamScan helps you find the streaming availability of movies and tv shows. Uses OMDb and Streaming Availability API.</p>
        <h5 className='mb-3'>Built with 🚀</h5>
        <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>React.js</li>
  <li><a target='blank' className='readmore-btn' href="https://www.omdbapi.com/">OMDb API</a></li>
  <li><a target='blank' className='readmore-btn' href="https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/details">Streaming Availability API</a></li>

</ul>
<h5 className='mb-3'>Functionalities ⚙️</h5>
<ul>
<li>Users can search for movies and tv shows.</li>
  <li>Users can view the streaming availability of a particular movie or tv show.</li>
  <li>Users can also get other information such as Release Year, Genre, Cast, IMDb Ratings, Number of Seasons(Tv Shows).</li>
</ul>
<a target='blank' style={{color : 'black'}} href="https://streamscan.netlify.app/">Website Link 🔗</a>
      </div>
    </div>
  </div>
</div>

<div id='newsgModal' class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fw-bold">GNews</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>A basic news app that shows latest news built using GNews API. Users can also search news using a keyword or category wise.</p>
        <h5 className='mb-3'>Built with 🚀</h5>
        <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Mongoose ODM</li>
  <li>MongoDB</li>
  <li>jQuery</li>
  <li>Passport.js</li>
  <li><a target='blank' className='readmore-btn' href="https://gnews.io/">GNews API</a></li>
</ul>
<h5 className='mb-3'>Functionalities ⚙️</h5>
<ul>
<li>Users can view latest news from different sources.</li>
  <li>Users can search news using a keyword.</li>
  <li>Users can browse news category-wise.</li>
  <li>Users can bookmark a article to read it later.</li>
  <li>User authentication using Local(username + password) , Google-OAuth and Facebook OAuth Strategy.</li>
  <li>Multiple Language Support</li>
  <li>Multiple Countries Support</li>
</ul>
<a target='blank' style={{color : 'black'}} href="https://news-app.cyclic.app/">Website Link 🔗</a>
      </div>
    </div>
  </div>
</div>


    <div className='App'>
      <Navbar />
      <section  id='start'>
        <div data-aos="fade-in">
          <img width={250} src="https://img.freepik.com/free-photo/view-3d-man-holding-coffee-cup-showing-thumbs-up_23-2150709926.jpg?t=st=1695391518~exp=1695395118~hmac=5ba223a821751814edcd02ad9aa5c713a8216c9ed574531810702363efe53cce&w=1060" className="rounded-circle mt-3 mb-3"
            alt="Avatar" />

          <h2 className='display-3 head1'>Hey,</h2>
          <h1 className='display-2 head2'>I'm Ashish Kumar.</h1>
          <span className='display-6'>A Full-Stack Web Developer</span>
        </div>
      </section>

      <section id='about-me'>
        <div data-aos='fade-up' className='container'>
          <h3 className='display-5 mb-3'>About Me</h3>
          <p className='about text-center'>
            I'm Ashish Kumar, a full-stack web developer pursuing my Bachelor of Technology in CSE (Cloud Computing and Automation) at Vellore Institute of Technology - Bhopal. I'm deeply passionate about MERN Stack and AWS, and I'm actively seeking internship opportunities in backend roles to gain hands-on experience and make a meaningful impact.
          </p>
        </div>

      </section>
      <section  id='skills'>
        <div data-aos='fade-up' class='container mb-1'>
          <h3 class='display-5'>Skills</h3>
          <div class="skills-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img width="80" height="80" src={skill.iconURL} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    <section className='mt-5' id='projects'>
    <div data-aos='fade-up' className='container mb-1'>
      <h3 className='display-5 text-center mt-5 mb-5'>Projects</h3>

      <div class="container">
        <div class="row">
          <div class="col-md-4 col-12 d-flex align-items-stretch">
            <div class="card bg-light shadow mb-5">
              <img src="../assets/img/eazybus.webp" class="card-img-top" alt="..." />

              <div class="card-body d-flex flex-column">
                <h4 class="card-title">EazyBus</h4>
                <p class="card-text">A bus booking website with a lot of features. Users can book seats,manage and cancel their bookings.Integrated with Razorpay and Stripe Payment Gateway<a href='' className='readmore-btn' type='button' data-bs-toggle="modal" data-bs-target="#eazybusModal">...read more</a></p>
                <div className='text-center'>
                  <div className='techusedDiv'>
                    <img className='techused' alt='html' src='../assets/img/html-5.svg' width='30'></img>
                    <img className='techused' alt='css' src='../assets/img/css-3.svg' width='30'></img>
                    <img className='techused' alt='js' src='../assets/img/javascript.svg' width='30'></img>
                    <img className='techused' alt='bootstrap' src='../assets/img/bootstrap.svg' width='30'></img>
                    <img className='techused' alt='nodejs' src='../assets/img/nodejs.svg' width='30'></img>
                    <img className='techused' alt='express' src='../assets/img/express-color.svg' width='30'></img>
                    <img className='techused' alt='mongodb' src='../assets/img/mongodb-color.svg' width='30'></img>
                    <img className='techused' alt='aws' src='../assets/img/aws.svg' width='30'></img>
                    <img className='techused' alt='stripe' src='../assets/img/stripe.svg' width='40'></img>
                    <img className='techused' alt='razorpay' src='../assets/img/razorpay-color.svg' width='40'></img>

                  </div>
                <a target='blank' href="https://eazybus.site"><btn className="btn shadow btn-sm btn-dark pb">Demo <BoxArrowUpRight color='white' /></btn></a>
                <a target='blank' href="https://github.com/Ashish4793/eazybus"><btn className="btn shadow btn-sm btn-dark pb">GitHub <BoxArrowUpRight color='white' /></btn></a>
                </div>

              </div>
            </div>

          </div>

          <div class="col-md-4 col-12 d-flex align-items-stretch">
          <div class="card bg-light shadow mb-5">
              <img src="../assets/img/streamscan.webp" class="card-img-top" alt="..." />

              <div class="card-body d-flex flex-column">
                <h4 class="card-title">StreamScan</h4>
                <p class="card-text">StreamScan helps you find the streaming availability of movies and tv shows. Uses OMDb and Streaming Availability API<a href='' className='readmore-btn' type='button' data-bs-toggle="modal" data-bs-target="#streamscanModal">...read more</a></p>
                <div className='text-center'>
                  <div className='techusedDiv mt-3'>
                    <img className='techused' alt='html' src='../assets/img/html-5.svg' width='30'></img>
                    <img className='techused' alt='css' src='../assets/img/css-3.svg' width='30'></img>
                    <img className='techused' alt='js' src='../assets/img/javascript.svg' width='30'></img>
                    <img className='techused' alt='bootstrap' src='../assets/img/bootstrap.svg' width='30'></img>
                    <img className='techused' alt='react' src='../assets/img/react.svg' width='30'></img>

                  </div>
                <a target='blank' href="https://streamscan.netlify.app/"><btn className="btn shadow btn-sm btn-dark pb">Demo <BoxArrowUpRight color='white' /></btn></a>
                <a target='blank' href="https://github.com/Ashish4793/streamscan"><btn className="btn shadow btn-sm btn-dark pb">GitHub <BoxArrowUpRight color='white' /></btn></a>
                </div>

              </div>
            </div>
          </div>

          <div class="col-md-4 col-12 d-flex align-items-stretch">
          <div class="card bg-light shadow mb-5">
              <img src="../assets/img/newsg.webp" class="card-img-top" alt="..." />

              <div class="card-body d-flex flex-column">
                <h4 class="card-title">GNews</h4>
                <p class="card-text">A basic news app that shows latest news built using GNews API. Users can also search news using a keyword or category wise<a href='' className='readmore-btn' type='button' data-bs-toggle="modal" data-bs-target="#newsgModal">...read more</a></p>
                <div className='text-center'>
                  <div className='techusedDiv mt-3'>
                    <img className='techused' alt='html' src='../assets/img/html-5.svg' width='30'></img>
                    <img className='techused' alt='css' src='../assets/img/css-3.svg' width='30'></img>
                    <img className='techused' alt='js' src='../assets/img/javascript.svg' width='30'></img>
                    <img className='techused' alt='bootstrap' src='../assets/img/bootstrap.svg' width='30'></img>
                    <img className='techused' alt='nodejs' src='../assets/img/nodejs.svg' width='30'></img>
                    <img className='techused' alt='express' src='../assets/img/express-color.svg' width='30'></img>
                    <img className='techused' alt='mongodb' src='../assets/img/mongodb-color.svg' width='30'></img>
                    <img className='techused' alt='passportjs' src='../assets/img/passport-color.svg' width='30'></img>

                  </div>
                <a target='blank' href="https://news-app.cyclic.app/"><btn className="btn shadow btn-sm btn-dark pb">Demo <BoxArrowUpRight color='white' /></btn></a>
                <a target='blank' href="https://github.com/Ashish4793/news-app/"><btn className="btn shadow btn-sm btn-dark pb">GitHub <BoxArrowUpRight color='white' /></btn></a>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  </section>

  <section id='certificates'>
    <div data-aos='fade-up' className='container mt-5 mb-1'>
      <h3 className='display-5 text-center mt-5 mb-5'>Certifications</h3>

      <div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4  d-flex align-items-stretch">
      <div class="card shadow bg-light">
      <img src="../assets/img/certificate/udemy.webp" class="card-img-top" alt="udemy_certficate" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">The Complete 2023 Web Development Bootcamp</h5>
          <div className='text-center'>
          <a target='blank' href="../assets/img/certificate/udemy.webp"><btn className="btn shadow btn-sm btn-dark pb">View</btn></a>
          <a target='blank' href="https://www.udemy.com/certificate/UC-73073573-4878-4375-adee-21e3a305ac33/"><btn className="btn shadow btn-sm btn-dark pb">Link</btn></a>
          </div>
         
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4  d-flex align-items-stretch">
    <div class="card shadow bg-light">
      <img src="../assets/img/certificate/coursera.webp" class="card-img-top" alt="udemy_certficate" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">HTML, CSS, and Javascript for Web Developers</h5>
          <div className='text-center'>
          <a target='blank' href="../assets/img/certificate/coursera.webp"><btn className="btn shadow btn-sm btn-dark pb">View</btn></a>
          <a target='blank' href="https://www.coursera.org/account/accomplishments/verify/82JV8JFF3MF7"><btn className="btn shadow btn-sm btn-dark pb">Link</btn></a>
          </div>
         
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-stretch">
    <div class="card w-100 shadow bg-light">
      <img src="../assets/img/certificate/hackerRank.webp" class="card-img-top" alt="udemy_certficate" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Problem Solving - Basic</h5>
          <div className='text-center'>
          <a target='blank' href="../assets/img/certificate/hackerRank.webp"><btn className="btn shadow btn-sm btn-dark pb">View</btn></a>
          <a target='blank' href="https://www.hackerrank.com/certificates/f55ada9e1e1b"><btn className="btn shadow btn-sm btn-dark pb">Link</btn></a>
          </div>
         
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-stretch">
    <div class="card shadow bg-light">
      <img src="../assets/img/certificate/mit.webp" class="card-img-top" alt="udemy_certficate" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Introduction to Computer Science and Programming Using Python</h5>
          <div className='text-center'>
          <a target='blank' href="../assets/img/certificate/mit.webp"><btn className="btn shadow btn-sm btn-dark pb">View</btn></a>
          <a target='blank' href="https://courses.edx.org/certificates/52c190127cb74a39bb38aae42313339c"><btn className="btn shadow btn-sm btn-dark pb">Link</btn></a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  </section>


  <section className='text-center mt-5' id='contact'>
    <footer class="footer mt-auto py-3 bg-black">
      <div class="container">
      <h3 className='display-5 text-center mt-3 mb-3'>Get in touch</h3>
      <div>
        <a target='blank' href="https://github.com/Ashish4793"><img className='social-icon' width={30} src="../assets/img/social/github-color.svg" alt="github" /></a>
        <a target='blank' href="https://www.linkedin.com/in/ashishk4793/"><img className='social-icon' width={30} src="../assets/img/social/linkedin-color.svg" alt="linkedin" /></a>
        <a target='blank' href="https://twitter.com/AshishK4793"><img className='social-icon' width={30} src="../assets/img/social/x-color.svg" alt="x" /></a>
      </div>

      <p className='mt-3' ><img width="35" height="35" src="https://img.icons8.com/fluency/35/mail--v1.png" alt="mail--v1"/> ashishk1063@outlook.com</p>
      <p className='copyright'>© {new Date().getFullYear()}, Ashish Kumar. All rights reserved.</p>

      </div>
    </footer>
  </section>
</div>

  );
}

export default App;
