import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const HomePage = ({isLoggedIn,isAuthenticated}) => {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
//   const isLoggedIn=!!localStorage.getItem("isLoggedIn")
// const isAuthenticated= !!localStorage.getItem("isAuthenticated")
// const handleRegistration=()=>{
//   isAuthenticated 
// }
// const handleLogin=()=>{
  
// }
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
              <h1>Connect with the Right Talent</h1>
              <p>Your trusted platform for connecting skilled professionals with opportunities, Find skilled professionals for any task, anytime, anywhere.</p>
              <div className="hero-buttons">
                {!isAuthenticated &&  <button className="primary-btn" onClick={() => navigate('/signup')}>
                  Get Started
                </button>}
               
                {isAuthenticated && !isLoggedIn&& <button className="secondary-btn" onClick={() => navigate('/login')}>
                  Sign In
                </button>}  
               
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="services-section">
          <h2 className='text-center'>100+ Services to choose from</h2>
          <div className="faq-grid">
            <div className="faq-item"><h3>Delivery Services</h3><p>Fast and secure parcel delivery.</p></div>
            <div className="faq-item"><h3>Household Assistance</h3><p>Professional cleaning, plumbing, and repairs.</p></div>
            <div className="faq-item"><h3>Medical Support</h3><p>Prescription pickups and medical aid services.</p></div>
            <div className="faq-item"><h3>Shopping Assistance</h3><p>Groceries, retail, and personal shopping support.</p></div>
            <div className="faq-item"><h3>IT & Tech Help</h3><p>Software troubleshooting, coding help, and more.</p></div>
            <div className="faq-item"><h3>Heavy Lifting</h3><p>On-demand manpower for moving and logistics.</p></div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2 className='text-center'>Why Choose Quick Aid?</h2>
          <div className="benefits-grid">
            <div className="benefit-item"><h3>Verified Agents</h3><p>All agents go through a rigorous verification process.</p></div>
            <div className="benefit-item"><h3>Real-Time Tracking</h3><p>Stay updated with live tracking for all services.</p></div>
            <div className="benefit-item"><h3>24/7 Availability</h3><p>Request manpower assistance anytime, anywhere.</p></div>
            <div className="benefit-item"><h3>Secure Payments</h3><p>Seamless and secure transactions with multiple payment options.</p></div>
          </div>
        </section>
        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>For Professionals</h3>
              <p>Find your dream job with our extensive network of employers</p>
              <ul className="feature-list">
                <li>Personalized job matches</li>
                <li>Career guidance</li>
                <li>Skill development</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>For Employers</h3>
              <p>Access a pool of qualified candidates for your organization</p>
              <ul className="feature-list">
                <li>Smart candidate matching</li>
                <li>Recruitment tools</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>For Agents</h3>
              <p>Connect businesses with talent and grow your network</p>
              <ul className="feature-list">
                <li>Commission tracking</li>
                <li>Client management</li>
                <li>Market insights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Profile</h3>
              <p>Sign up and create your professional profile</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Set Preferences</h3>
              <p>Define your preferences and requirements</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Matched</h3>
              <p>Receive personalized matches and opportunities</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Connect & Grow</h3>
              <p>Connect with matches and grow your network</p>
            </div>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">8</div>
              <h3>Create Profile</h3>
              <p>Sign up and create your professional profile</p>
            </div>
            <div className="step">
              <div className="step-number">7</div>
              <h3>Set Preferences</h3>
              <p>Define your preferences and requirements</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h3>Get Matched</h3>
              <p>Receive personalized matches and opportunities</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Connect & Grow</h3>
              <p>Connect with matches and grow your network</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="benefits-container">
            <div className="benefits-content">
              <h2>Benefits for Everyone</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h3>For Users</h3>
                  <ul>
                    <li>Easy job search and application</li>
                    <li>Profile visibility to top employers</li>
                    <li>Career development resources</li>
                    <li>Real-time job notifications</li>
                    <li>Professional networking</li>
                    <li>Skill assessment tools</li>
                  </ul>
                </div>
                <div className="benefit-item">
                  <h3>For Agents</h3>
                  <ul>
                    <li>Commission-based earnings</li>
                    <li>Access to premium job listings</li>
                    <li>Candidate management tools</li>
                    <li>Business growth opportunities</li>
                    <li>Analytics and reporting</li>
                    <li>Client relationship tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>"Found my dream job within weeks of joining the platform. The matching system is incredible!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https:via.placeholder.com/50" alt="User" />
                <div>
                  <h4>John Doe</h4>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>"As an agent, this platform has helped me grow my business exponentially."</p>
              </div>
              <div className="testimonial-author">
                <img src="https:via.placeholder.com/50" alt="User" />
                <div>
                  <h4>Jane Smith</h4>
                  <p>Recruitment Agent</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        {!isAuthenticated &&  
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join our platform today and take the next step in your career or business</p>
         <button className="primary-btn" onClick={() => navigate('/register')}>
              Create Account
            </button>
          </div>
        </section>
}
        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the matching system work?</h3>
              <p>Our AI-powered system analyzes your profile, skills, and preferences to match you with the best opportunities.</p>
            </div>
            <div className="faq-item">
              <h3>What are the commission rates for agents?</h3>
              <p>Commission rates vary based on the job placement and your performance level. Contact us for detailed information.</p>
            </div>
            <div className="faq-item">
              <h3>How can I improve my profile visibility?</h3>
              <p>Complete your profile, add relevant skills, and keep your information up to date to increase visibility.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage; 