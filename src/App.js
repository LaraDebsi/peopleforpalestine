import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import { useLanguage } from './LanguageContext';
import protestHome from './images/protesthome.jpg';
import newsImage1 from './images/news1.png';
import newsImage2 from './images/news2.png';
import newsImage3 from './images/news3.png';
import facebookIcon from './images/facebook-icon.png';
import twitterIcon from './images/twitter-icon.png';
import instagramIcon from './images/instagram-icon.png';
import watermelonIcon from './images/watermelon-icon.png'; 
import groupImage from './images/joingroup.png'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import universityMap from './images/university-map.png';
import uottawaLogo from './images/uottawa-logo.png';
import mcmasterLogo from './images/mcmaster-logo.png';
import torontoLogo from './images/toronto-logo.png';
import mcgillLogo from './images/mcgill-logo.png';
import ubcLogo from './images/ubc-logo.png';
import waterlooLogo from './images/waterloo-logo.png';
import viuLogo from './images/vancouver-logo.png';
import victoriaLogo from './images/victoria-logo.png';
import uofcalLogo from './images/ucalgary-logo.png';
import uofalbLogo from './images/alberta-logo.png';
import uofmanLogo from './images/manitoba-logo.png';
import uofwindLogo from './images/uwindsor-logo.jpeg';
import westernLogo from './images/western-logo.png';
import uqamLogo from './images/uqam-logo.png';
import dalhousieLogo from './images/dal-logo.png';

const universities = [
  { name: "University of Ottawa", status: "Shut Down", logo: uottawaLogo, info: "Information about uOttawa encampment.", recentUpdate: "JUL 10, 2024 - Pro-Palestinian demonstrators have decided to end the encampment on the campus of the University of Ottawa after a 10-week protest calling on the university to cut financial ties with Israel.    The groups Labour for Palestine Ottawa and Occupy Tabaret issued a statement early Wednesday morning, saying the students have 'elected to vacate the encampment on Tabaret Lawn'. 'We reached an impasse in negotiations as the direct result of the university claiming they had zero powers to do anything about the funds they manage and in fact do have full control over', Sumayya Kheireddine, student leader of Occupy Tabaret, said in a statement. 'At best, this university and President are out of touch with reality. At worst, they are simply cruel, and only guided by greed and immune to the suffering of others.'"  },
  { name: "McMaster University", status: "Divested", logo: mcmasterLogo, info: "Information about McMaster encampment.", recentUpdate: "MAY 24, 2024 - McMaster University says the student-led, pro-Palestinian encampment that has grown on campus over the past two-and-a-half weeks is ending after the school and protestors agreed on terms. The school's update, posted Friday, said there were a 'series of meaningful discussions' that led to the decision. The university says the students agreed to remove tents by Saturday evening and not form another encampment on campus.  'McMaster has voted to accept an offer,' organizers of the encampment said in an online statement late Friday. 'We secured commitments that begin to align with our principles of human rights and social justice for all.'" },
  { name: "University of Toronto", status: "Shut Down", logo: torontoLogo, info: "Information about University of Toronto encampment.", recentUpdate: "JUL 2, 2024 - The judge granted the University of Toronto's request for an injunction, although no evidence showed that the protesters were violent or antisemitic. He stated that the demonstration was preventing the university from controlling the King's College Circle area on campus. The protesters must comply with the court order by Wednesday, July 3, at 6 p.m., and the police intend to enforce it." },
  { name: "McGill University", status: "Shut Down", logo: mcgillLogo, info: "Information about McGill encampment.", recentUpdate: "JUL 10, 2024 - McGill issued two eviction notices to the pro-Palestinian protesters occupying its grounds. Shortly after, private security agents began evacuating them and dismantling the camp. In a statement released this morning, the administration of McGill University explained that the operation was justified due to the protesters' prolonged refusal to allow access to the camp to the fire safety service officials, the Montreal police, and the university staff." },
  { name: "University of BC", status: "Shut Down", logo: ubcLogo, info: "Information about UBC encampment.", recentUpdate: "JUL 8, 2024 - The pro-Palestinian protest camp, which had occupied a sports field at the University of British Columbia's Vancouver campus for over two months, has been dismantled by the demonstrators. Dozens of tents had been removed, though barricades and fencing around the site are still present. A statement from UBC mentioned that the protesters left MacInnes Field, located near the school's transit loop and - student union building, but provided no further details." },
  { name: "University of Waterloo", status: "Divested", logo: waterlooLogo, info: "Information about University of Waterloo encampment.", recentUpdate: "JUL 6, 2024 - Following eight weeks of protests on the University of Waterloo campus, members of Occupy UWaterloo informed the school they will be voluntarily decamping on Sunday at 8 p.m. The pro-Palestinian encampment has resided on the grassy area beside the Graduate House since May 13. The student-led group posted a notice on social media on Saturday, saying it's members will not be returning. 'The university has agreed to withdraw its claim and injunction proceeding once the encampment is vacated,' Occupy UWaterloo's post says." },
  { name: "Vancouver Island University", status: "Shut Down", logo: viuLogo, info: "Information about VIU encampment.", recentUpdate: "JUL 15, 2024 - VIU had given protesters a July 15 deadline to break up the encampment, alleging they had violated campus policies by erecting temporary structures and camping overnight." },
  { name: "University of Victoria", status: "In Progress", logo: victoriaLogo, info: "Information about University of Victoria encampment.", recentUpdate: " JUL 19, 2024 - Marking 80 days since they first erected an encampment on part of the campus' quad, University of Victoria (UVic) protesters on Friday (July 19) said the school refused to engage with their most recent proposal. 'We understand that UVic does not want us here. We are prepared to stay strong and devoted to a free Palestine, our solidarity remains unwavering' UVic protesters said during a Friday press conference." },
  { name: "University of Calgary", status: "Shut Down", logo: uofcalLogo, info: "Information about University of Calgary encampment.", recentUpdate: "MAY 10, 2024 - The University of Calgary's Student Union condemns the actions against demonstrators, stating the use of Calgary police invited violence against students. They dispute claims of counter-protesters at the camp. " },
  { name: "University of Alberta", status: "In Progress", logo: uofalbLogo, info: "Information about University of Alberta encampment.", recentUpdate: "JUN 17, 2024 - President Bill Flanagan says the university's board of governors unanimously passed a motion to disclose a complete list of the university's endowment pool investment holdings." },
  { name: "University of Manitoba", status: "In Progress", logo: uofmanLogo, info: "Information about University of Manitoba encampment.", recentUpdate: "JUL 15, 2024 - Pro-Palestinian protesters who have been encamped at the University of Manitoba campus for more than two months say they are ready to fight a potential injunction that could see them removed. 'The university has not offered anything substantive or anything that remotely touches what we are asking for,' said Victoria Canjura, a spokesperson for the Students for Justice in Palestine encampment. 'One of the only correspondences was, you know, this letter that detailed their threat of legal action should we not be gone.'" },
  { name: "University of Windsor", status: "Shut Down", logo: uofwindLogo, info: "Information about University of Windsor encampment.", recentUpdate: "JUL 11, 2024 - The pro-Palestinan protest encampment at University of Windsor is coming to an end after the school’s top brass agreed to multiple demands, including expanding research ties with Palestinian universities and disclosing public investments. " },
  { name: "Western University", status: "In Progress", logo: westernLogo, info: "Information about Western University encampment.", recentUpdate: "MAY 29, 2024 - Western University's president announced a list of steps the institution is willing to take in return for the dismantling of a pro-Palestinian protest encampment that's been in place on the university's campus since May 1." },
  { name: "UQAM", status: "Divested", logo: uqamLogo, info: "Information about UQAM encampment.", recentUpdate: "MAY 30, 2024 - The university agrees to ensure the UQAM Foundation has no direct investments in weapons manufacturers, to call for an immediate ceasefire and to fund the reception of Palestinian academics and students." },
  { name: "Dalhousie University", status: "In Progress", logo: dalhousieLogo, info: "Information about Dalhousie University encampment.", recentUpdate: "JUN 14, 2024 - Dalhousie announces it will grant amnesty to encampment students following a potion passed by the student union. The university's senate says students can miss one class or assessment per course until the end of August." }
];

const regions = [
  "Atlantic Region",
  "Central Canada",
  "Prairie Provinces",
  "West Coast",
  "North"
];

const randomMeetingPlans = [
  "Discussing historical background and current events",
  "Planning a community outreach program",
  "Exploring cultural aspects and heritage",
  "Organizing a fundraising event"
];

const translations = {
  EN: {
    home: "Home",
    stayUpdated: "Stay Updated",
    about: "About",
    encampments: "Encampments",
    donate: "Donate Now",
    topNews: "TOP NEWS",
    aboutUs: "ABOUT US",
    contactUs: "CONTACT US",
    contributingUniversities: "Contributing Universities",
    lookUpYourUniversity: "Look up your university here...",
    whatIsAnEncampment: "What is an Encampment?",
    encampmentsText1: "Encampments are a form of peaceful protest and civil disobedience where individuals gather to raise awareness and call for action on specific issues. Participants set up temporary camps in public spaces, often in front of institutions or government buildings, to bring attention to their cause and demand change. These encampments can last for days, weeks, or even months, depending on the level of commitment and the response from authorities.",
    encampmentsText2: "Encampments provide a visible and powerful way to highlight issues such as injustice, inequality, and human rights violations. By occupying a public space, participants create a constant reminder of the cause they are fighting for and encourage others to join their movement. Encampments are often organized with a clear set of demands and are accompanied by various forms of activism, including marches, rallies, and educational workshops.",
    encampmentsText3: "Through their presence and activities, encampments aim to put pressure on decision-makers, raise public awareness, and inspire collective action for social change. While encampments can face challenges such as legal restrictions and logistical difficulties, they remain a significant and impactful method of grassroots activism.",
    currentStatus: "CURRENT STATUS",
    alphabetical: "Alphabetical (A...Z)",
    divested: "Divested",
    inProgress: "In Progress",
    shutDown: "Shut Down",
    selectRegion: "Select Region",
    selectInterest: "Select Interest",
    meetingType: "Meeting Type",
    joinGroup: "Join Group",
    leaveComment: "Leave a comment or ask questions:",
    name: "Name:",
    email: "Email:",
    comment: "Comment:",
    submit: "Submit",
    youCanGetInTouch: "You can get in touch via:",
    emailContact: "Email ~ info@peopleforpali.org",
    phoneContact: "Phone ~ (613) 123 - 4567",
    mediaContact: "Media ~",
    nextMeeting: "Next Meeting:",
    donationType: "Select Donation Type",
    oneTime: "ONE TIME",
    monthly: "MONTHLY",
    next: "Next",
    previous: "Previous",
    selectDonationAmount: "Select Donation Amount",
    otherAmount: "OTHER AMOUNT",
    selectDonationCause: "Select Donation Cause",
    sponsorFamily: "Sponsor a family",
    rebuildPalestine: "Rebuild Palestine",
    findAidsCamps: "Find Aids/Camps",
    yourInformation: "Your Information",
    firstName: "First Name:",
    lastName: "Last Name:",
    reviewAndConfirm: "Review and Confirm",
    donationTypeLabel: "Donation Type:",
    donationAmountLabel: "Donation Amount:",
    donationCauseLabel: "Donation Cause:",
    fullNameLabel: "Name:",
    donateNow: "Donate Now",
    why: "WHY?",
    whyDescription: "In the year 1967, the Israeli government made public displays of the Palestinian flag a criminal offense in Gaza and the West Bank. To circumvent the ban, Palestinians began using the watermelon because, when cut open, the fruit bears the national colors of the Palestinian flag—red, black, white, and green. Now, the watermelon is a symbol of Palestinians' public expression in protests and artworks, representing the struggle against the Israeli occupation of the Palestinian territories.",
    takeActionForPalestine: "Take Action For Palestine!",
    learnWhereToStart: "-- Learn where to start to be on the right side of history --",
    stayUpdatedDescription: "Stay updated on our brothers and sisters in Palestine through unbiased and authentic sources",
    learnMore: "Learn more",
    topNewsDescription: "Israeli forces attack Gaza City, Rafah",
    aboutDescription1: "People for Palestine (PfP) is a community of individuals working together for peace, equality, and justice, and against racism, occupation, and colonization.",
    aboutDescription2: "We are raising awareness and providing education about the situation in Palestine, helping people learn how they can contribute and join our cause. Our focus is on informing individuals about the realities of the occupation, the role of corporations that profit from it, and the shortcomings of our government and media in addressing these issues. By building a mass movement for Palestine in Canada, we aim to empower people with knowledge and resources to advocate for justice and equality.",
    aboutDescription3: "We believe in the power of informed communities. The more people who join us in this effort, raising their voices for justice and equality, the stronger our collective impact. United, we can challenge the status quo, influence governments, hold corporations accountable, and ensure the truth is heard. Together, we can make a difference.",
    whatPfPBelieves: "What does PfP believe?",
    PfPBelievesAnswer: "PfP believes in peace, equality, and justice for all individuals, regardless of race, occupation, or colonization.",
    PfPGoadsAims: "What are PfP goals/aims?",
    PfPGoadsAimsAnswer: "PfP aims to raise awareness, provide education, and empower individuals to advocate for justice and equality in Palestine.",
    howPfPMadeDifference: "How has PfP made a difference?",
    howPfPMadeDifferenceAnswer: "PfP has made a difference by informing individuals about the occupation, influencing governments, and holding corporations accountable.",
    youCanJoinGroup: "Welcome to our new startup project! Wherever you are in Canada you may join a support group - whether it be to learn and get educated by group leaders about Palestine and its occupation or to take action for the cause in your region. Join a group to learn when the next meeting will take place near you!"
  },
  FR: {
    home: "Accueil",
    stayUpdated: "Restez Informé",
    about: "À Propos",
    encampments: "Campements",
    donate: "Faire un Don",
    topNews: "ACTUALITÉS",
    aboutUs: "À PROPOS DE NOUS",
    contactUs: "CONTACTEZ-NOUS",
    contributingUniversities: "Universités Contributrices",
    lookUpYourUniversity: "Recherchez votre université ici...",
    whatIsAnEncampment: "Qu'est-ce qu'un Campement?",
    encampmentsText1: "Les campements sont une forme de protestation pacifique et de désobéissance civile où les individus se rassemblent pour sensibiliser et appeler à l'action sur des questions spécifiques. Les participants installent des camps temporaires dans des espaces publics, souvent devant des institutions ou des bâtiments gouvernementaux, pour attirer l'attention sur leur cause et exiger des changements. Ces campements peuvent durer des jours, des semaines ou même des mois, selon le niveau d'engagement et la réponse des autorités.",
    encampmentsText2: "Les campements fournissent un moyen visible et puissant de mettre en évidence des problèmes tels que l'injustice, l'inégalité et les violations des droits de l'homme. En occupant un espace public, les participants créent un rappel constant de la cause pour laquelle ils se battent et encouragent les autres à rejoindre leur mouvement. Les campements sont souvent organisés avec un ensemble clair de revendications et sont accompagnés de diverses formes d'activisme, notamment des marches, des rassemblements et des ateliers éducatifs.",
    encampmentsText3: "Grâce à leur présence et à leurs activités, les campements visent à faire pression sur les décideurs, à sensibiliser le public et à inspirer une action collective pour un changement social. Bien que les campements puissent faire face à des défis tels que les restrictions légales et les difficultés logistiques, ils restent une méthode significative et percutante d'activisme de base.",
    currentStatus: "STATUT ACTUEL",
    alphabetical: "Alphabétique (A...Z)",
    divested: "Désinvesti",
    inProgress: "En Cours",
    shutDown: "Fermé",
    selectRegion: "Sélectionnez la Région",
    selectInterest: "Sélectionnez l'Intérêt",
    meetingType: "Type de Réunion",
    joinGroup: "Rejoindre le Groupe",
    leaveComment: "Laissez un commentaire ou posez des questions :",
    name: "Nom :",
    email: "E-mail :",
    comment: "Commentaire :",
    submit: "Soumettre",
    youCanGetInTouch: "Vous pouvez nous contacter via :",
    emailContact: "E-mail ~ info@peopleforpali.org",
    phoneContact: "Téléphone ~ (613) 123 - 4567",
    mediaContact: "Médias ~",
    nextMeeting: "Prochaine Réunion :",
    donationType: "Sélectionnez le Type de Don",
    oneTime: "UNIQUE",
    monthly: "MENSUEL",
    next: "Suivant",
    previous: "Retourne",
    selectDonationAmount: "Sélectionnez le Montant du Don",
    otherAmount: "AUTRE MONTANT",
    selectDonationCause: "Sélectionnez la Cause du Don",
    sponsorFamily: "Parrainer une famille",
    rebuildPalestine: "Reconstruire la Palestine",
    findAidsCamps: "Trouver des Aides/Camps",
    yourInformation: "Vos Informations",
    firstName: "Prénom :",
    lastName: "Nom de famille :",
    reviewAndConfirm: "Réviser et Confirmer",
    donationTypeLabel: "Type de Don :",
    donationAmountLabel: "Montant du Don :",
    donationCauseLabel: "Cause du Don :",
    fullNameLabel: "Nom :",
    donateNow: "Faire un Don Maintenant",
    why: "POURQUOI?",
    whyDescription: "En 1967, le gouvernement israélien a criminalisé les manifestations publiques du drapeau palestinien à Gaza et en Cisjordanie. Pour contourner cette interdiction, les Palestiniens ont commencé à utiliser la pastèque car, lorsqu'elle est coupée, elle révèle les couleurs nationales du drapeau palestinien : rouge, noir, blanc et vert. Aujourd'hui, la pastèque est un symbole de l'expression publique des Palestiniens dans les manifestations et les œuvres d'art, représentant la lutte contre l'occupation israélienne des territoires palestiniens.",
    takeActionForPalestine: "Agir pour la Palestine!",
    learnWhereToStart: "-- Apprenez par où commencer pour être du bon côté de l'histoire --",
    stayUpdatedDescription: "Restez informé sur nos frères et sœurs en Palestine grâce à des sources impartiales et authentiques",
    learnMore: "En savoir plus",
    topNewsDescription: "Les forces israéliennes attaquent la ville de Gaza, Rafah",
    aboutDescription1: "People for Palestine (PfP) est une communauté d'individus travaillant ensemble pour la paix, l'égalité et la justice, et contre le racisme, l'occupation et la colonisation.",
    aboutDescription2: "Nous sensibilisons et éduquons sur la situation en Palestine, aidant les gens à apprendre comment ils peuvent contribuer et rejoindre notre cause. Notre objectif est d'informer les individus sur les réalités de l'occupation, le rôle des entreprises qui en profitent et les lacunes de notre gouvernement et des médias dans le traitement de ces questions. En construisant un mouvement de masse pour la Palestine au Canada, nous visons à donner aux gens les connaissances et les ressources nécessaires pour plaider en faveur de la justice et de l'égalité.",
    aboutDescription3: "Nous croyons au pouvoir des communautés informées. Plus il y a de personnes qui nous rejoignent dans cet effort, élevant leur voix pour la justice et l'égalité, plus notre impact collectif est fort. Unis, nous pouvons défier le statu quo, influencer les gouvernements, tenir les entreprises responsables et faire entendre la vérité. Ensemble, nous pouvons faire une différence.",
    whatPfPBelieves: "Que croit PfP?",
    PfPBelievesAnswer: "PfP croit en la paix, l'égalité et la justice pour tous les individus, indépendamment de la race, de l'occupation ou de la colonisation.",
    PfPGoadsAims: "Quels sont les objectifs/visées de PfP?",
    PfPGoadsAimsAnswer: "PfP vise à sensibiliser, à éduquer et à donner aux individus les moyens de plaider pour la justice et l'égalité en Palestine.",
    howPfPMadeDifference: "Comment PfP a-t-il fait une différence?",
    howPfPMadeDifferenceAnswer: "PfP a fait une différence en informant les individus sur l'occupation, en influençant les gouvernements et en tenant les entreprises responsables.",
    youCanJoinGroup: "Bienvenue dans notre nouveau projet de démarrage! Où que vous soyez au Canada, vous pouvez rejoindre un groupe de soutien - que ce soit pour apprendre et être éduqué par les chefs de groupe sur la Palestine et son occupation ou pour agir pour la cause dans votre région. Rejoignez un groupe pour savoir quand aura lieu la prochaine réunion près de chez vous!"
  }
};

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
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [formError, setFormError] = useState("");
  const [thankYouPopup, setThankYouPopup] = useState(false);
  const [whyPopup, setWhyPopup] = useState(false);
  const [showAnotherDonationButton, setShowAnotherDonationButton] = useState(false);
  const [contactError, setContactError] = useState("");
  const [contactPopup, setContactPopup] = useState(false);
  const [region, setRegion] = useState("");
  const [interest, setInterest] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [groupInfo, setGroupInfo] = useState(null);
  const [carouselGroups, setCarouselGroups] = useState([]);
  
  const { language, toggleLanguage } = useLanguage();
  
  const currentTranslations = translations[language];

  useEffect(() => {
    const groups = [];
    for (let i = 0; i < universities.length; i += 5) {
      groups.push(universities.slice(i, i + 5));
    }
    setCarouselGroups(groups);
  }, [universities]);

  const toggleAnswer1 = () => setShowAnswer1(!showAnswer1);
  const toggleAnswer2 = () => setShowAnswer2(!showAnswer2);
  const toggleAnswer3 = () => setShowAnswer3(!showAnswer3);

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
    if (currentStep === 2 && donationDetails.selectedAmount === 'other' && (!donationDetails.otherAmount || isNaN(donationDetails.otherAmount))) {
      setFormError("Please enter a valid amount.");
      return;
    }
    if (currentStep === 3 && !donationDetails.cause) {
      setFormError("Please select a donation cause.");
      return;
    }
    if (currentStep === 4) {
      if (!donationDetails.firstName || !donationDetails.lastName || !validateEmail(donationDetails.email)) {
        setFormError("Please fill in all required fields with valid information.");
        return;
      }
    }
    setFormError("");
    if (currentStep === 5) {
      setThankYouPopup(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
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

  const handleLearnMoreClick = (university) => {
    setPopupContent(university);
    setPopupVisible(true);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 5) {
      setThankYouPopup(true);
      setCurrentStep(6);
      setShowAnotherDonationButton(true);
    }
  };

  const handleThankYouPopupClose = () => {
    setThankYouPopup(false);
    setCurrentStep(1);
    setShowAnotherDonationButton(false);
    setDonationDetails({
      donationType: "one-time",
      selectedAmount: 100,
      otherAmount: null,
      firstName: "",
      lastName: "",
      email: "",
      cause: ""
    });
  };

  const handleWhyPopupOpen = () => {
    setWhyPopup(true);
  };

  const handleWhyPopupClose = () => {
    setWhyPopup(false);
  };

  const handleMakeAnotherDonation = () => {
    setCurrentStep(1);
    setDonationDetails({
      donationType: "one-time",
      selectedAmount: 100,
      otherAmount: null,
      firstName: "",
      lastName: "",
      email: "",
      cause: ""
    });
    setShowAnotherDonationButton(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, comment } = e.target.elements;
    if (!name.value || !email.value || !comment.value) {
      setContactError("All fields are required.");
      return;
    }
    if (!validateEmail(email.value)) {
      setContactError("Please enter a valid email.");
      return;
    }
    setContactError("");
    setContactPopup(true);
  };

  const handleContactPopupClose = () => {
    setContactPopup(false);
  };

  const handleGroupSubmit = (e) => {
    e.preventDefault();
    if (!region || !interest || !meetingType) {
      setGroupInfo({ error: "Please select region, interest, and meeting type." });
      return;
    }

    const randomPlan = randomMeetingPlans[Math.floor(Math.random() * randomMeetingPlans.length)];
    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 30) + 1);

    setGroupInfo({
      region,
      interest,
      meetingType,
      date: randomDate.toDateString(),
      plan: randomPlan
    });
  };

  const handleGroupConfirmationClose = () => {
    setGroupInfo(null);
  };

  const handleFilterChange = (filter) => {
    setFilterBy((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((item) => item !== filter);
      }
      return [...prevFilters, filter];
    });
  };

  const handleSortChange = () => {
    setSortBy((prevSort) => (prevSort === "alphabetical" ? null : "alphabetical"));
  };

  const getFilteredAndSortedUniversities = () => {
    let filteredUniversities = universities;

    if (filterBy.length > 0) {
      filteredUniversities = filteredUniversities.filter((university) =>
        filterBy.includes(university.status)
      );
    }

    if (sortBy === "alphabetical") {
      filteredUniversities = filteredUniversities.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    const groups = [];
    for (let i = 0; i < filteredUniversities.length; i += 5) {
      groups.push(filteredUniversities.slice(i, i + 5));
    }
    return groups;
  };

  const carouselItems = getFilteredAndSortedUniversities().map((group, index) => (
    <div key={index} className="status-grid">
      {group.map((university) => (
        <div key={university.name} className="status-card">
          <img src={university.logo} alt={university.name} className="status-logo" />
          <p>{university.name}</p>
          <button className="status-button" onClick={() => handleLearnMoreClick(university)}>
            {university.status}
          </button>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <a href="#home">{currentTranslations.home}</a>
          <a href="#stay-updated">{currentTranslations.stayUpdated}</a>
          <a href="#about">{currentTranslations.about}</a>
          <a href="#encampments">{currentTranslations.encampments}</a>
          <a href="#donate">{currentTranslations.donate}</a>
        </nav>
        <div className="language-switcher">
          <button onClick={toggleLanguage}>
            {language === 'EN' ? 'FR' : 'EN'}
          </button>
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{currentTranslations.takeActionForPalestine}</h1>
              <p>{currentTranslations.learnWhereToStart}</p>
            </div>
            <button className="why-button" onClick={handleWhyPopupOpen}>
              {currentTranslations.why} <img src={watermelonIcon} alt="Watermelon" className="watermelon-icon" />
            </button>
          </div>
          <img src={protestHome} alt="Protest" />
        </section>

        <section id="stay-updated" className="stay-updated">
          <header className="stay-updated-header">
            <h1>{currentTranslations.topNews}</h1>
          </header>
          <div className="news-article">
            <div className="news-card">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                <div className="news-content">
                  <h2>{currentTranslations.topNewsDescription}</h2>
                  <p>23 June 2024</p>
                  <img src={newsImage1} alt="News 1" />
                </div>
                <div className="news-content">
                  <h2>{currentTranslations.topNewsDescription}</h2>
                  <p>6 July 2024</p>
                  <img src={newsImage2} alt="News 2" />
                </div>
                <div className="news-content">
                  <h2>{currentTranslations.topNewsDescription}</h2>
                  <p>4 July 2024</p>
                  <img src={newsImage3} alt="News 3" />
                </div>
              </Carousel>
            </div>
            <div className="sources">
              <h3>{currentTranslations.stayUpdatedDescription}</h3>
              <ul>
                <li><a href="https://www.aljazeera.com" target="_blank" rel="noopener noreferrer">https://www.aljazeera.com</a></li>
                <li><a href="https://www.palestinechronicle.com" target="_blank" rel="noopener noreferrer">https://www.palestinechronicle.com</a></li>
                <li><a href="https://english.wafa.ps" target="_blank" rel="noopener noreferrer">https://english.wafa.ps</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="about" role="region" aria-labelledby="about-header">
          <header className="about-header">
            <h1 id="about-header">{currentTranslations.aboutUs}</h1>
          </header>
          <div className="about-content">
            <div className="about-description">
              <p>{currentTranslations.aboutDescription1}</p>
              <p>{currentTranslations.aboutDescription2}</p>
              <p>{currentTranslations.aboutDescription3}</p>
            </div>
            <div className="about-questions">
              <button className="question-box" onClick={toggleAnswer1} aria-expanded={showAnswer1} aria-controls="answer1">
                <span className="plus-sign">+</span> {currentTranslations.whatPfPBelieves}
              </button>
              {showAnswer1 && (
                <div className="modal" id="answer1" role="dialog" aria-labelledby="answer1-label">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer1} role="button" tabIndex="0" aria-label="Close">&times;</span>
                    <p id="answer1-label">{currentTranslations.PfPBelievesAnswer}</p>
                  </div>
                </div>
              )}
              <button className="question-box" onClick={toggleAnswer2} aria-expanded={showAnswer2} aria-controls="answer2">
                <span className="plus-sign">+</span> {currentTranslations.PfPGoadsAims}
              </button>
              {showAnswer2 && (
                <div className="modal" id="answer2" role="dialog" aria-labelledby="answer2-label">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer2} role="button" tabIndex="0" aria-label="Close">&times;</span>
                    <p id="answer2-label">{currentTranslations.PfPGoadsAimsAnswer}</p>
                  </div>
                </div>
              )}
              <button className="question-box" onClick={toggleAnswer3} aria-expanded={showAnswer3} aria-controls="answer3">
                <span className="plus-sign">+</span> {currentTranslations.howPfPMadeDifference}
              </button>
              {showAnswer3 && (
                <div className="modal" id="answer3" role="dialog" aria-labelledby="answer3-label">
                  <div className="modal-content">
                    <span className="close" onClick={toggleAnswer3} role="button" tabIndex="0" aria-label="Close">&times;</span>
                    <p id="answer3-label">{currentTranslations.howPfPMadeDifferenceAnswer}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <header className="contact-header">
            <h1>{currentTranslations.contactUs}</h1>
          </header>
          <div className="contact-content">
            <div className="contact-info-box">
              <h2>{currentTranslations.youCanGetInTouch}</h2>
              <p>{currentTranslations.emailContact}</p>
              <p>{currentTranslations.phoneContact}</p>
              <p>{currentTranslations.mediaContact}</p>
              <div className="social-media-icons">
                <div className="tooltip">
                  <img src={facebookIcon} alt="Facebook" />
                  <span className="tooltiptext">@peopleforpalestine</span>
                </div>
                <div className="tooltip">
                  <img src={twitterIcon} alt="Twitter" />
                  <span className="tooltiptext">@PfP_Official</span>
                </div>
                <div className="tooltip">
                  <img src={instagramIcon} alt="Instagram" />
                  <span className="tooltiptext">@people4palestine</span>
                </div>
              </div>
            </div>
            <div className="contact-form-box">
              <h2>{currentTranslations.leaveComment}</h2>
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{currentTranslations.name}</label>
                  <input type="text" id="name" name="name" placeholder="Jon Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{currentTranslations.email}</label>
                  <input type="email" id="email" name="email" placeholder="jon.doe@gmail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">{currentTranslations.comment}</label>
                  <textarea id="comment" name="comment" placeholder="Your comment"></textarea>
                </div>
                {contactError && <div className="form-error">{contactError}</div>}
                <button type="submit">{currentTranslations.submit}</button>
              </form>
            </div>
          </div>
          {contactPopup && (
            <div className="contact-confirmation">
              <h2>Thank you for contacting us!</h2>
              <p>We will get back to you as soon as possible and appreciate your interactivity!</p>
              <button onClick={handleContactPopupClose}>Okay</button>
            </div>
          )}
          <div className="group-join-container">
            <img src={groupImage} alt="Group" className="group-image" />
            <div className="group-join-box">
              <h2>{currentTranslations.joinGroup}</h2>
              <p>{currentTranslations.youCanJoinGroup}</p>
              <form onSubmit={handleGroupSubmit}>
                <div className="form-group">
                  <label htmlFor="region">{currentTranslations.selectRegion}</label>
                  <select id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="">{currentTranslations.selectRegion}</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="interest">{currentTranslations.selectInterest}</label>
                  <select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)} disabled={!region}>
                    <option value="">{currentTranslations.selectInterest}</option>
                    <option value="Learn About">{currentTranslations.learnMore}</option>
                    <option value="Work On">{currentTranslations.learnMore}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="meetingType">{currentTranslations.meetingType}</label>
                  <select id="meetingType" value={meetingType} onChange={(e) => setMeetingType(e.target.value)} disabled={!interest}>
                    <option value="">{currentTranslations.meetingType}</option>
                    <option value="Virtual">Virtual</option>
                    <option value="In Person">In Person</option>
                  </select>
                </div>
                <button type="submit">{currentTranslations.joinGroup}</button>
              </form>
              {groupInfo && (
                <div className="group-info">
                  {groupInfo.error ? (
                    <div className="form-error">{groupInfo.error}</div>
                  ) : (
                    <>
                      <h3>{currentTranslations.nextMeeting}</h3>
                      <p>Date: {groupInfo.date}</p>
                      <p>Plan: {groupInfo.plan}</p>
                      <p>{currentTranslations.meetingType}: {groupInfo.meetingType}</p>
                      <p>{currentTranslations.selectRegion}: {groupInfo.region}</p>
                      <p>{currentTranslations.selectInterest}: {groupInfo.interest}</p>
                      <button onClick={handleGroupConfirmationClose}>Okay</button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="encampments" className="encampments">
          <header className="encampments-header">
            <h1>{currentTranslations.encampments}</h1>
          </header>
          <div className="encampments-content">
            <div className="university-search">
              <h2> {currentTranslations.contributingUniversities}</h2>
              <input 
                type="text" 
                placeholder={currentTranslations.lookUpYourUniversity} 
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
                  >
                    {university.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="university-info">
              <h2>{currentTranslations.whatIsAnEncampment}</h2>
              <p>{currentTranslations.encampmentsText1}</p>
              <p>{currentTranslations.encampmentsText2}</p>
              <p>{currentTranslations.encampmentsText3}</p>
            </div>
          </div>
          <div className="current-status">
            <header>
              <h1>{currentTranslations.currentStatus}</h1>
              <div className="filters">
                <label>
                  <input
                    type="checkbox"
                    checked={sortBy === "alphabetical"}
                    onChange={handleSortChange}
                  />
                  {currentTranslations.alphabetical}
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filterBy.includes("Divested")}
                    onChange={() => handleFilterChange("Divested")}
                  />
                  {currentTranslations.divested}
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filterBy.includes("In Progress")}
                    onChange={() => handleFilterChange("In Progress")}
                  />
                  {currentTranslations.inProgress}
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filterBy.includes("Shut Down")}
                    onChange={() => handleFilterChange("Shut Down")}
                  />
                  {currentTranslations.shutDown}
                </label>
              </div>
            </header>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
              {carouselItems}
            </Carousel>
          </div>
          {popupVisible && (
            <div className="popup">
              <div className="popup-content">
                <span className="close-popup" onClick={() => setPopupVisible(false)}>&times;</span>
                <h2>{popupContent.name}</h2>
                <p>{popupContent.recentUpdate}</p>
              </div>
            </div>
          )}
        </section>
        <section id="donate" className="donate">
          <header className="donate-header">
            <h1>{currentTranslations.donate}</h1>
          </header>
          <div className="donate-content">
            <div className="step-bar">
              {["Type", "Amount", "Cause", "Info", "Review"].map((step, index) => (
                <div key={index} className={`step-item ${currentStep >= index + 1 ? "active" : ""}`}>
                  <div className="circle">{currentStep > index + 1 || (currentStep === 6 && index + 1 === 5) ? '✔' : index + 1}</div>
                  <div className="label">Step {index + 1}</div>
                </div>
              ))}
            </div>
            {formError && <div className="form-error">{formError}</div>}
            {currentStep === 1 && (
              <div className="step">
                <h2>{currentTranslations.donationType}</h2>
                <button className={`toggle-button ${donationDetails.donationType === 'one-time' ? 'active' : ''}`} onClick={() => handleInputChange({ target: { name: 'donationType', value: 'one-time' } })}>{currentTranslations.oneTime}</button>
                <button className={`toggle-button ${donationDetails.donationType === 'monthly' ? 'active' : ''}`} onClick={() => handleInputChange({ target: { name: 'donationType', value: 'monthly' } })}>{currentTranslations.monthly}</button>
                <button onClick={handleNextStep}>{currentTranslations.next}</button>
              </div>
            )}
            {currentStep === 2 && (
              <div className="step">
                <h2>{currentTranslations.selectDonationAmount}</h2>
                <div className="donation-options">
                  {[25, 50, 100, 200, 500, 1000, 5000].map(amount => (
                    <button key={amount} className="donation-option" style={donationDetails.selectedAmount === amount ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleAmountClick(amount)}>
                      ${amount}
                    </button>
                  ))}
                  <button className="donation-option" style={donationDetails.selectedAmount === 'other' ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleAmountClick('other')}>
                    {currentTranslations.otherAmount}
                  </button>
                  {donationDetails.selectedAmount === 'other' && (
                    <div className="other-amount-input">
                      <input type="number" name="otherAmount" value={donationDetails.otherAmount || ''} onChange={handleInputChange} placeholder={currentTranslations.otherAmount} />
                    </div>
                  )}
                </div>
                <button onClick={handlePrevStep}>{currentTranslations.previous}</button>
                <button onClick={handleNextStep}>{currentTranslations.next}</button>
              </div>
            )}
            {currentStep === 3 && (
              <div className="step">
                <h2>{currentTranslations.selectDonationCause}</h2>
                <div className="donation-causes">
                  {["Sponsor a family", "Rebuild Palestine", "Find Aids/Camps"].map(cause => (
                    <button key={cause} className="cause-button" style={donationDetails.cause === cause ? { backgroundColor: '#E05B5B', color: 'white' } : {}} onClick={() => handleCauseSelect(cause)}>
                      {cause.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button onClick={handlePrevStep}>{currentTranslations.previous}</button>
                <button onClick={handleNextStep}>{currentTranslations.next}</button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="step">
                <h2>{currentTranslations.yourInformation}</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">{currentTranslations.firstName}</label>
                    <input type="text" id="firstName" name="firstName" value={donationDetails.firstName} onChange={handleInputChange} placeholder="Jon" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">{currentTranslations.lastName}</label>
                    <input type="text" id="lastName" name="lastName" value={donationDetails.lastName} onChange={handleInputChange} placeholder="Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{currentTranslations.email}</label>
                    <input type="email" id="email" name="email" value={donationDetails.email} onChange={handleInputChange} placeholder="jon.doe@gmail.com" />
                    {!validateEmail(donationDetails.email) && donationDetails.email && (
                      <div className="tooltip">{currentTranslations.validateEmail}</div>
                    )}
                  </div>
                </form>
                <button onClick={handlePrevStep}>{currentTranslations.previous}</button>
                <button onClick={handleNextStep}>{currentTranslations.next}</button>
              </div>
            )}
            {currentStep === 5 && (
              <div className="step">
                <h2>{currentTranslations.reviewAndConfirm}</h2>
                <p>{currentTranslations.donationTypeLabel} {donationDetails.donationType}</p>
                <p>{currentTranslations.donationAmountLabel} ${donationDetails.selectedAmount === 'other' ? donationDetails.otherAmount : donationDetails.selectedAmount}</p>
                <p>{currentTranslations.donationCauseLabel} {donationDetails.cause}</p>
                <p>{currentTranslations.fullNameLabel} {donationDetails.firstName} {donationDetails.lastName}</p>
                <p>{currentTranslations.email} {donationDetails.email}</p>
                <button onClick={handlePrevStep}>{currentTranslations.previous}</button>
                <button type="submit" className="donate-button" onClick={handleDonationSubmit}>{currentTranslations.donateNow}</button>
              </div>
            )}
            {popupVisible && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close-popup" onClick={() => setPopupVisible(false)}>&times;</span>
                  <h2>{popupContent.name}</h2>
                  <p>{popupContent.recentUpdate}</p>
                </div>
              </div>
            )}
            {thankYouPopup && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={handleThankYouPopupClose}>&times;</span>
                  <h2>Thank you for your donation!</h2>
                  <p>You will be receiving an email shortly to finalize your donation.</p>
                </div>
              </div>
            )}
            {showAnotherDonationButton && (
              <button className="another-donation-button" onClick={handleMakeAnotherDonation}>
                {currentTranslations.donateAgain}
              </button>
            )}
          </div>
        </section>
      </main>
      {whyPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleWhyPopupClose}>&times;</span>
            <p>
              {currentTranslations.whyDescription}
            </p>
          </div>
        </div>
      )}
      <footer className="footer">
        <img src={logo} alt="People for Palestine" className="footer-logo" />
        <div className="footer-social-icons">
        </div>
      </footer>
    </div>
  );
}

export default App;
