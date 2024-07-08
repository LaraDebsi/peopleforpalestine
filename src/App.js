import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.png';
import protestHome from './images/protesthome.jpg'; // Import the protest image
import newsImage1 from './images/news1.png'; // Import the news images
import newsImage2 from './images/news2.png';
import newsImage3 from './images/news3.png';
import facebookIcon from './images/facebook-icon.png'; // Import the social media icons
import twitterIcon from './images/twitter-icon.png';
import instagramIcon from './images/instagram-icon.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import universityMap from './images/university-map.png'; // Add your university map image
import uottawaLogo from './images/uottawa-logo.png';
import mcmasterLogo from './images/mcmaster-logo.png';
import torontoLogo from './images/toronto-logo.png';
import mcgillLogo from './images/mcgill-logo.png';
import ubcLogo from './images/ubc-logo.png';
import waterlooLogo from './images/waterloo-logo.png';

const universities = [
  { name: "uOttawa", status: "In Progress", logo: uottawaLogo, info: "Information about uOttawa encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
  { name: "McMaster", status: "Divested", logo: mcmasterLogo, info: "Information about McMaster encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
  { name: "University of Toronto", status: "In Progress", logo: torontoLogo, info: "Information about University of Toronto encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
  { name: "McGill", status: "In Progress", logo: mcgillLogo, info: "Information about McGill encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
  { name: "UBC", status: "In Progress", logo: ubcLogo, info: "Information about UBC encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
  { name: "University of Waterloo", status: "In Progress", logo: waterlooLogo, info: "Information about University of Waterloo encampment.", program: ["09:00 - 11:00 Lorem ipsum", "12:00 - 14:00 Lorem ipsum", "16:00 - 18:00 Lorem ipsum"] },
];

function App() {
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [donationDetails, setDonationDetails] = useState({
    donationType: "one-time",
    selectedAmount: 100,
    otherAmount: null,
    firstName: "",
    lastName: "",
    email: "",
    cause: ""
  });

  const toggleAnswer1 = () => setShowAnswer1(!showAnswer1);
  const toggleAnswer2 = () => setShowAnswer2(!showAnswer2);
  const toggleAnswer3 = () => setShowAnswer3(!showAnswer3);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUniversities = universities.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAmountClick = (amount) => {
    setDonationDetails({
      ...donationDetails,
      selectedAmount: amount,
      otherAmount: amount === 'other' ? '' : null
    });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationDetails({
      ...donationDetails,
      [name]: value
    });
  };

  const handleCauseSelect = (cause) => {
    setDonationDetails({
      ...donationDetails,
      cause
    });
  };
    
  return (
    <div className="App">
      <div className="step-bar">
        {["Type", "Amount", "Cause", "Info", "Review"].map((step, index) => (
          <div key={index} className={`step-item ${currentStep === index + 1 ? "active" : ""}`}>
            {step}
          </div>
        ))}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <a href="#home">Home</a>
          <a href="#stay-updated">Stay Updated</a>
          <a href="#about">About</a>
          <a href="#encampments">Encampments</a>
          <a href="#donate">Donate Now</a>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Take Action For Palestine!</h1>
              <p>-- Learn where to start to be on the right side of history --</p>
            </div>
            <button className="learn-now">Learn Now</button>
          </div>
          <img src={protestHome} alt="Protest" />
        </section>

        <section id="stay-updated" className="stay-updated">
          <header className="stay-updated-header">
            <h1>TOP NEWS</h1>
          </header>
          <div className="news-article">
            <div className="news-card">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                <div className="news-content">
                  <h2>Israeli forces attack Gaza City, Rafah</h2>
                  <p>23 June 2024</p>
                  <img src={newsImage1} alt="News 1" />
                </div>
                <div className="news-content">
                  <h2>Israeli attack on UN school used as shelter in Gaza kills at least 16</h2>
                  <p>6 July 2024</p>
                  <img src={newsImage2} alt="News 2" />
                </div>
                <div className="news-content">
                  <h2>Israel says will send delegation for Gaza ceasefire negotiations</h2>
                  <p>4 July 2024</p>
                  <img src={newsImage3} alt="News 3" />
                </div>
              </Carousel>
            </div>
            <div className="sources">
              <h3>Stay updated on our brothers and sisters in Palestine through unbiased and authentic sources</h3>
              <ul>
                <li><a href="https://www.aljazeera.com" target="_blank" rel="noopener noreferrer">https://www.aljazeera.com</a></li>
                <li><a href="https://www.palestinechronicle.com" target="_blank" rel="noopener noreferrer">https://www.palestinechronicle.com</a></li>
                <li><a href="https://english.wafa.ps" target="_blank" rel="noopener noreferrer">https://english.wafa.ps</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <header className="about-header">
            <h1>ABOUT US</h1>
          </header>
          <div className="about-content">
            <div className="about-description">
              <p>
                People for Palestine (PfP) is a community of individuals working together for peace, equality, and justice,
                and against racism, occupation, and colonization.
              </p>
              <p>
                We are raising awareness and providing education about the situation in Palestine, helping people learn how
                they can contribute and join our cause. Our focus is on informing individuals about the realities of the
                occupation, the role of corporations that profit from it, and the shortcomings of our government and media
                in addressing these issues. By building a mass movement for Palestine in Canada, we aim to empower people
                with knowledge and resources to advocate for justice and equality.
              </p>
              <p>
                We believe in the power of informed communities. The more people who join us in this effort, raising their
                voices for justice and equality, the stronger our collective impact. United, we can challenge the status quo,
                influence governments, hold corporations accountable, and ensure the truth is heard. Together, we can make a
                difference.
              </p>
            </div>
            <div className="about-questions">
              <button className="question-box" onClick={toggleAnswer1}>
                <span className="plus-sign">+</span> What does PfP believe?
              </button>
              {showAnswer1 && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer1}>&times;</span>
                    <p>PfP believes in peace, equality, and justice for all individuals, regardless of race, occupation, or colonization.</p>
                  </div>
                </div>
              )}
              <button className="question-box" onClick={toggleAnswer2}>
                <span className="plus-sign">+</span> What are PfP goals/aims?
              </button>
              {showAnswer2 && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer2}>&times;</span>
                    <p>PfP aims to raise awareness, provide education, and empower individuals to advocate for justice and equality in Palestine.</p>
                  </div>
                </div>
              )}
              <button className="question-box" onClick={toggleAnswer3}>
                <span className="plus-sign">+</span> How has PfP made a difference?
              </button>
              {showAnswer3 && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer3}>&times;</span>
                    <p>PfP has made a difference by informing individuals about the occupation, influencing governments, and holding corporations accountable.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <header className="contact-header">
            <h1>CONTACT US</h1>
          </header>
          <div className="contact-content">
            <div className="contact-info">
              <h2>You can get in touch via:</h2>
              <p>Email ~ info@peopleforpali.org</p>
              <p>Phone ~ (613) 123 - 4567</p>
              <p>Media ~</p>
              <div className="social-media-icons">
                <img src={facebookIcon} alt="Facebook" />
                <img src={twitterIcon} alt="Twitter" />
                <img src={instagramIcon} alt="Instagram" />
              </div>
            </div>
            <div className="contact-form">
              <h2>Leave a comment or ask questions:</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Jon Doe" />
                </div>
                <div class="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="jon.doe@gmail.com" />
                </div>
                <div class="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <textarea id="comment" name="comment" placeholder="Your comment"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <section id="encampments" className="encampments">
          <header className="encampments-header">
            <h1>ENCAMPMENTS</h1>
          </header>
          <div className="encampments-content">
            <div className="university-search">
              <h2>Select a University:</h2>
              <input 
                type="text" 
                placeholder="Look up your university here..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
              <div className="university-map">
                <img src={universityMap} alt="University Map" />
              </div>
              <div className="university-list">
                {searchTerm && filteredUniversities.map(university => (
                  <div 
                    key={university.name} 
                    className="university-item" 
                    onClick={() => handleUniversitySelect(university)}
                  >
                    {university.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="university-info">
              <h2>{selectedUniversity.name}</h2>
              <p>{selectedUniversity.info}</p>
              <h3>Today's Program:</h3>
              <ul>
                {selectedUniversity.program.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="current-status">
            <header>
              <h1>CURRENT STATUS</h1>
              <div className="filters">
                <label>
                  <input
                    type="checkbox"
                    checked={sortBy === "alphabetical"}
                    onChange={() => setSortBy(sortBy === "alphabetical" ? "" : "alphabetical")}
                  />
                  Alphabetical (A...Z)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filterBy === "Divested"}
                    onChange={() => setFilterBy(filterBy === "Divested" ? "" : "Divested")}
                  />
                  Divested
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filterBy === "In Progress"}
                    onChange={() => setFilterBy(filterBy === "In Progress" ? "" : "In Progress")}
                  />
                  In Progress
                </label>
              </div>
            </header>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
              <div className="status-grid">
                {filteredUniversities.map((university, index) => (
                  <div key={index} className="status-card">
                    <div className={`status-badge ${university.status.replace(" ", "-").toLowerCase()}`}>
                      {university.status === 'Divested' ? 'Divested' : 'In Progress'}
                    </div>
                    <img src={university.logo} alt={university.name} className="status-logo" />
                    <p>{university.name}</p>
                    <button className="learn-more" onClick={() => handleLearnMoreClick(university)}>Learn More</button>
                  </div>
                ))}
              </div>
            </Carousel>
          </div>
          {popupVisible && (
            <div className="popup">
              <div className="popup-content">
                <span className="close-popup" onClick={() => setPopupVisible(false)}>&times;</span>
                <h2>{popupContent.name}</h2>
                <p>{popupContent.info}</p>
                <h3>Today's Program:</h3>
                <ul>
                  {popupContent.program.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
        <section id="donate" className="donate">
          <header className="donate-header">
            <h1>DONATE NOW</h1>
          </header>
          <div className="step-bar">
            {["Type", "Amount", "Cause", "Info", "Review"].map((step, index) => (
              <div key={index} className={`step-item ${currentStep >= index + 1 ? "active" : ""}`}>
                <div className="circle">{currentStep > index + 1 ? '✔' : index + 1}</div>
                <div className="label">Step {index + 1}</div>
              </div>
            ))}
          </div>
          <div className="donate-content">
            {currentStep === 1 && (
              <div className="step">
                <h2>Select Donation Type</h2>
                <button className={`toggle-button ${donationDetails.donationType === 'one-time' ? 'active' : ''}`} onClick={() => handleInputChange({ target: { name: 'donationType', value: 'one-time' } })}>ONE TIME</button>
                <button className={`toggle-button ${donationDetails.donationType === 'monthly' ? 'active' : ''}`} onClick={() => handleInputChange({ target: { name: 'donationType', value: 'monthly' } })}>MONTHLY</button>
                <button onClick={handleNextStep}>Next</button>
              </div>
            )}
            {currentStep === 2 && (
              <div className="step">
                <h2>Select Donation Amount</h2>
                <div className="donation-options">
                  {[25, 50, 100, 200, 500, 1000, 5000].map(amount => (
                    <button key={amount} className="donation-option" style={donationDetails.selectedAmount === amount ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleAmountClick(amount)}>
                      ${amount}
                    </button>
                  ))}
                  <button className="donation-option" style={donationDetails.selectedAmount === 'other' ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleAmountClick('other')}>
                    OTHER AMOUNT
                  </button>
                  {donationDetails.selectedAmount === 'other' && (
                    <div className="other-amount-input">
                      <input type="number" name="otherAmount" value={donationDetails.otherAmount || ''} onChange={handleInputChange} placeholder="Enter amount" />
                    </div>
                  )}
                </div>
                <button onClick={handlePrevStep}>Previous</button>
                <button onClick={handleNextStep}>Next</button>
              </div>
            )}
            {currentStep === 3 && (
              <div className="step">
                <h2>Select Donation Cause</h2>
                <div className="donation-causes">
                  {["Sponsor a family", "Rebuild Palestine", "Find Aids/Camps"].map(cause => (
                    <button key={cause} className="cause-button" style={donationDetails.cause === cause ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleCauseSelect(cause)}>
                      {cause.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button onClick={handlePrevStep}>Previous</button>
                <button onClick={handleNextStep}>Next</button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="step">
                <h2>Your Information</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={donationDetails.firstName} onChange={handleInputChange} placeholder="Jon" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={donationDetails.lastName} onChange={handleInputChange} placeholder="Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={donationDetails.email} onChange={handleInputChange} placeholder="jon.doe@gmail.com" />
                  </div>
                </form>
                <button onClick={handlePrevStep}>Previous</button>
                <button onClick={handleNextStep}>Next</button>
              </div>
            )}
            {currentStep === 5 && (
              <div className="step">
                <h2>Review and Confirm</h2>
                <p>Donation Type: {donationDetails.donationType}</p>
                <p>Donation Amount: ${donationDetails.selectedAmount === 'other' ? donationDetails.otherAmount : donationDetails.selectedAmount}</p>
                <p>Donation Cause: {donationDetails.cause}</p>
                <p>Name: {donationDetails.firstName} {donationDetails.lastName}</p>
                <p>Email: {donationDetails.email}</p>
                <button onClick={handlePrevStep}>Previous</button>
                <button type="submit" className="donate-button">Donate Now</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
