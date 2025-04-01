import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import WhatsApp from "../../../Assets/Images/WhatsApp.svg"
import writeus from "../../../Assets/Images/fi-rr-comment-alt.svg"

const HomePage = ({ isLoggedIn, isAuthenticated }) => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(""); // Clear input field
    setShowForm(false); // Hide form after submission
  };
  const handleCallback = () => {
    alert("You will shortly receive a call from our customer executive")
  }
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
              <h1 className='py-5'>Welcome to ExpertHub</h1>
              <p className='fw-bold'>Your go-to platform for on-demand manpower services! We connect customers with skilled agents to handle a variety of tasks, ensuring efficiency, reliability, and convenience at your fingertips.</p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={() => navigate('/signup')}>
                  Get Started
                </button>

                <button className="secondary-btn" onClick={() => navigate('/login')}>
                  Sign In
                </button>

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

        <section className="services-section">
        <div className="benefits-container">
        <div className="benefits-content">
          <h2 className='text-center'>📌 What We Do</h2>
          <div className="faq-grid">
            <div className="faq-item"><p>We are an innovative platform that connects customers with skilled agents, providing on-demand manpower services for a wide range of needs. Whether it’s delivery assistance, home services, professional tasks, or urgent errands, ExpertHub ensures that you get the right help—when and where you need it.</p></div>
          </div>
          </div>
          </div>
        </section>
        <section className="testimonials-section mt-3">
          <h2 className="text-center mb-4">💼 How It Works for Customers</h2>
          <div className="row how-it-works mx-auto">
            <div className="col-md-3 text-center">
              <div className="icon">📋</div>
              <h5 className=" mt-3">Choose Services</h5>
              <p>Select the type of help you need.</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">🔍</div>
              <h5 className=" mt-3">Find an Agent</h5>
              <p>Get matched with a skilled agent in your area.</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">💳</div>
              <h5 className=" mt-3">Book & Pay Securely</h5>
              <p>Schedule the service at your convenience.</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">⭐</div>
              <h5 className=" mt-3">Track & Rate</h5>
              <p>Monitor the service and rate your experience.</p>
            </div>
          </div>
          <p className="text-center mt-4 text-muted">With ExpertHub, finding trusted and reliable assistance has never been easier!</p>
        </section>
        <section className="testimonials-section agentCustGap">
          <h2 class="text-center mb-4">🤝 How It Works for Agents</h2>
          <div class="row how-it-works-agent mx-auto">
            <div class="col-md-3 text-center">
              <div class="icon-agent">📝</div>
              <i class="bi bi-person-plus-fill text-success display-4"></i>
              <h5 class=" mt-3">Sign Up & Get Verified</h5>
              <p>Create your profile and get approved.</p>
            </div>
            <div class="col-md-3 text-center">
              <div class="icon-agent">📩</div>
              <h5 class=" mt-3">Receive Job Requests</h5>
              <p>Get matched with customers needing your skills.Accept tasks that fit your skills and schedule.</p>
            </div>
            <div class="col-md-3 text-center">
              <div class="icon-agent">💰</div>
              <h5 class=" mt-3">Earn & Grow</h5>
              <p>Complete tasks, get paid, and build your reputation.</p>
            </div>
            <div class="col-md-3 text-center">
              <div class="icon-agent">⭐</div>
              <h5 class=" mt-3">Build Your Reputation</h5>
              <p>Gain positive reviews, increase your ratings, and grow your business.</p>
            </div>
          </div>
          <p class="text-center mt-4 text-muted">
            Whether you're a freelancer, technician, delivery expert, or skilled professional,
            <strong>ExpertHub</strong> helps you connect with paying customers effortlessly!
          </p>
        </section>
        <section className="testimonials-section agentCustGap">
          <h2 class="text-center fw-bold mb-4">🌟 Why Choose <span class="text-primary">ExpertHub?</span></h2>
          <div class="row why-choose mx-auto">
            <div class="col-md-6 d-flex align-items-center mb-4">
              <div class="iconwhy me-3">✔️</div>
              <div>
                <h5 class="fw-bold">Trusted & Verified Agents</h5>
                <p>Background-checked professionals for a safe experience.</p>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center mb-4">
              <div class="iconwhy me-3">⚡</div>
              <div>
                <h5 class="fw-bold">Fast & Reliable Service</h5>
                <p>Quick matching with skilled agents for urgent needs.</p>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center mb-4">
              <div class="iconwhy me-3">🔒</div>
              <div>
                <h5 class="fw-bold">Secure Payments</h5>
                <p>Hassle-free transactions with multiple payment options.</p>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center mb-4">
              <div class="iconwhy me-3">⭐</div>
              <div>
                <h5 class="fw-bold">Customer Reviews & Ratings</h5>
                <p>Transparent feedback ensures high-quality services.</p>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="iconwhy me-3">⏳</div>
              <div>
                <h5 class="fw-bold">Flexible Work for Agents</h5>
                <p>Set your own schedule and earn on your terms.</p>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center mb-4">
              <div class="iconwhy me-3">🕒</div>
              <div>
                <h5 class="fw-bold">24X7 Customer support</h5>
                <p>Request assistance anytime</p>
              </div>
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
                    <li>✔ Find Trusted Professionals – Get access to background-checked and skilled agents.</li>
                    <li>✔ Fast & Reliable Service – Quickly match with agents for urgent tasks.</li>
                    <li>✔ Secure & Hassle-Free Payments – Pay easily and securely through our platform.</li>
                    <li>✔ Wide Range of Services – From home repairs to deliveries, get the help you need.</li>
                    <li>✔ Ratings & Reviews – Choose top-rated agents based on customer feedback.</li>
                    <li>✔ 24/7 Availability – Request manpower assistance anytime, anywhere</li>
                    <li>✔ And much more...</li>
                  </ul>
                  <p>Whether you need a helping hand, a delivery assistant, a tech expert, or any other professional help, ExpertHub makes finding reliable assistance easy, fast, and stress-free!</p>
                  <Link to="/signup" class="btn btn-primary mt-3">Join ExpertHub Now</Link>
                </div>
                <div className="benefit-item">
                  <h3>For Agents</h3>
                  <ul>
                    <li>✔ Growth Opportunities – Build your profile, increase your ratings, and earn more!</li>
                    <li>✔ Wide Range of Jobs – From handyman work to tech support, pick jobs that match your expertise.</li>
                    <li>✔ Work on Your Terms – Accept jobs that suit your schedule.</li>
                    <li>✔ Steady Income – Get paid fairly for your skills and time.</li>
                    <li>✔ Instant Payment – Receive payment instantly after delivering services.</li>
                    <li>✔ Customer Trust & Safety – Work with verified customers in a secure environment.</li>
                    <li>✔ 24/7 Availability – Request assistance anytime</li>
                    <li>✔ And much more...</li>
                  </ul>
                  <p>Whether you are a skilled professional, technician, doctor, looking for a part/full-time job, or professional from any background looking for extra income, ExpertHub provides the platform, security, and customers to help you succeed!</p>
                  <Link to="/signup" class="btn btn-primary mt-3">Join ExpertHub Now</Link>
                </div>
              </div>
            </div>
          </div>
              </section>
              <section className="cta-section mt-3">
          <div className="cta-content-join">
            <h2>🚀 Join ExpertHub Today!</h2>
            <p>📍 Customers: Need help? Find an agent now!</p>
            <p>🛠 Agents: Have skills? Start earning today!</p>
            <p>Experience seamless manpower assistance with ExpertHub—where help is just a click away!</p>
            <button className="primary-btn" onClick={() => navigate('/signup')}>
              Get Started
            </button>
          </div>
        </section>
        {/* Services Section */}
        <section className="services-section">
        <div className="benefits-container">
        <div className="benefits-content">
          <h2 className='text-center'>100+ Services to choose from</h2>
          <div className="faq-grid">
            <div className="faq-item"><h3>Delivery Services</h3><p>Fast and secure parcel delivery.</p></div>
            <div className="faq-item"><h3>Household Assistance</h3><p>Professional cleaning, plumbing, and repairs.</p></div>
            <div className="faq-item"><h3>Medical Support</h3><p>Prescription pickups and medical aid services.</p></div>
            <div className="faq-item"><h3>Shopping Assistance</h3><p>Groceries, retail, and personal shopping support.</p></div>
            <div className="faq-item"><h3>IT & Tech Help</h3><p>Software troubleshooting, coding help, and more.</p></div>
            <div className="faq-item"><h3>Heavy Lifting</h3><p>On-demand manpower for moving and logistics.</p></div>
          </div>
          </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        {/* <section className="why-choose-us">
          <h2 className='text-center'>Why Choose ExpertHub?</h2>
          <div className="benefits-grid">
            <div className="benefit-item"><h3>Verified Agents</h3><p>All agents go through a rigorous verification process.</p></div>
            <div className="benefit-item"><h3>Real-Time Tracking</h3><p>Stay updated with live tracking for all services.</p></div>
            <div className="benefit-item"><h3>24/7 Availability</h3><p>Request manpower assistance anytime, anywhere.</p></div>
            <div className="benefit-item"><h3>Secure Payments</h3><p>Seamless and secure transactions with multiple payment options.</p></div>
          </div>
        </section> */}
        {/* Features Section */}
        {/* <section className="features-section">
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
        </section> */}

        {/* How It Works Section */}
        {/* <section className="how-it-works">
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
        </section> */}

  
        {/* <section class="container text-center py-5">
        <h2 class="fw-bold text-primary mb-4">Why Become a ExpertHub Agent?</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card border-0 shadow-lg p-4 text-center">
                    <i class="bi bi-calendar-check display-4 text-success mb-3"></i>
                    <h5 class="fw-bold">Work on Your Terms</h5>
                    <p class="text-muted">Accept jobs that suit your schedule.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-lg p-4 text-center">
                    <i class="bi bi-cash-stack display-4 text-success mb-3"></i>
                    <h5 class="fw-bold">Steady Income</h5>
                    <p class="text-muted">Get paid fairly for your skills and time.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-lg p-4 text-center">
                    <i class="bi bi-tools display-4 text-success mb-3"></i>
                    <h5 class="fw-bold">Wide Range of Jobs</h5>
                    <p class="text-muted">From handyman work to tech support, pick jobs that match your expertise.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 shadow-lg p-4 text-center">
                    <i class="bi bi-shield-check display-4 text-success mb-3"></i>
                    <h5 class="fw-bold">Customer Trust & Safety</h5>
                    <p class="text-muted">Work with verified customers in a secure environment.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 shadow-lg p-4 text-center">
                    <i class="bi bi-bar-chart-line display-4 text-success mb-3"></i>
                    <h5 class="fw-bold">Growth Opportunities</h5>
                    <p class="text-muted">Build your profile, increase your ratings, and earn more!</p>
                </div>
            </div>
        </div>
        <p class="mt-4 text-muted">
            Whether you are a freelancer, skilled worker, technician, or professional looking for extra income, 
            ExpertHub provides the platform, security, and customers to help you succeed!
        </p>
        <a href="#" class="btn btn-primary mt-3">Join ExpertHub Now</a>
    </section> */}
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
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join our platform today and take the next step in your career or business</p>
            <button className="primary-btn" onClick={() => navigate('/signup')}>
              Create Account
            </button>
          </div>
        </section>

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
            <div className="faq-item">
              <h3>How can I improve my profile visibility?</h3>
              <p>Complete your profile, add relevant skills, and keep your information up to date to increase visibility.</p>
            </div>
            <div className="faq-item">
              <h3>How can I improve my profile visibility?</h3>
              <p>Complete your profile, add relevant skills, and keep your information up to date to increase visibility.</p>
            </div>
            <div className="faq-item">
              <h3>How can I improve my profile visibility?</h3>
              <p>Complete your profile, add relevant skills, and keep your information up to date to increase visibility.</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section lastsec">
        <h2>Need Assistance? We're Just a Click Away!</h2>
          <p className='text-center'>
            Call us at +918787882984 Or {" "}
            <span
              className="text-primary cursor-pointer no-underline"
              onClick={() => setShowForm(true)}
            >
              write to us
              <img src={writeus} alt="Message Icon" width="18" height="18" className="ms-1" />
            </span>
          </p>

          <p className='text-center'>
            Or contact us on WhatsApp us(click on the Icon)
            <a href="https://wa.me/918787882984" target="_blank" rel="noopener noreferrer">
              <img className="whatsapp ms-1" src={WhatsApp} alt="WhatsApp" width="26" height="26" />
            </a>
            +918787882984
          </p>

          <p className='text-center'>
            Or <Link onClick={handleCallback} className="no-underline">request a callback</Link>, and our team will reach out to assist you.
          </p>

          {showForm && (
            <form onSubmit={handleFormSubmit} className="mt-3 text-center">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Write your query here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary mt-2">Send</button>
              <button type="button" className="btn btn-secondary mt-2 ms-2" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          )}
        </section>
       
      </div>
    </>
  );
};
export default HomePage
