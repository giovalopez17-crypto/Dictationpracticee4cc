/**
 * DAILY DICTATION - BANCO DE DATOS DE LECCIONES
 * 
 * Este archivo contiene todas las lecciones del sistema clasificadas por categorías.
 * Para añadir nuevas lecciones, simplemente agrega un nuevo objeto al arreglo siguiendo
 * la misma estructura de propiedades.
 */

const LESSONS_DATABASE = [
  {
    id: "gram-01",
    title: "Conditional Intent",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "2ND CONDITIONAL",
    text: "If I had known about the unexpected traffic delays on the highway, I would have taken the train.",
    difficulty: "Advanced"
  },
  {
    id: "gram-02",
    title: "Unbroken Project Effort",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "PRESENT PERFECT PROGRESSIVE",
    text: "She has been working tirelessly on her research project since last Tuesday.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-03",
    title: "Future Travel Plans",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "We are going to travel to Kyoto next winter to experience the traditional gardens.",
    difficulty: "Beginner"
  },
  {
    id: "gram-04",
    title: "Habitual Office Work",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "SIMPLE PRESENT",
    text: "He usually practices the piano for two hours every single day after finishing school.",
    difficulty: "Beginner"
  },
  {
    id: "gram-05",
    title: "The Chef's Secret Recipe",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "SIMPLE PRESENT 3RD PERSON",
    text: "She bakes a fresh loaf of sourdough bread every morning before the sun rises.",
    difficulty: "Beginner"
  },

  {
    id: "story-01",
    title: "The Golden Bird Pathway",
    type: "TTS",
    category: "Stories",
    text: "Deep within the ancient forest, a small golden bird guarded a secret path that only opened at midnight.",
    difficulty: "Intermediate"
  },
  {
    id: "story-02",
    title: "The Reverse Clockmaker",
    type: "TTS",
    category: "Stories",
    text: "Once upon a time, an old clockmaker realized his clocks were ticking backward, reversing five minutes every day.",
    difficulty: "Intermediate"
  },

  {
    id: "yt-01",
    title: "Steve Jobs - Visionary Limits",
    type: "YOUTUBE",
    category: "YouTube Clips",
    text: "Your time is limited, so don't waste it living someone else's life.",
    difficulty: "Beginner",
    videoId: "UF8uR6Z6KLc",
    startTime: 40,
    endTime: 45
  },
  {
    id: "yt-02",
    title: "Carl Sagan - Pale Blue Dot Spot",
    type: "YOUTUBE",
    category: "YouTube Clips",
    text: "Look again at that dot. That's here. That's home. That's us.",
    difficulty: "Advanced",
    videoId: "GO5FwsblpT8",
    startTime: 15,
    endTime: 27
  },

  {
    id: "spell-01",
    title: "Registering Customer Name",
    type: "TTS",
    category: "Spelling",
    text: "My name is Arthur, spelled A-R-T-H-U-R, and my last name is Cunningham, spelled C-U-N-N-I-N-G-H-A-M.",
    difficulty: "Beginner"
  },
  {
    id: "spell-02",
    title: "Academic Term spelling",
    type: "TTS",
    category: "Spelling",
    text: "Please spell the word conscientious, which is C-O-N-S-C-I-E-N-T-I-O-U-S.",
    difficulty: "Intermediate"
  },

  {
    id: "addr-01",
    title: "Midwest Shipping Address",
    type: "TTS",
    category: "Addresses",
    text: "The package must be delivered to one-two-three-four North Maple Avenue, Suite five-hundred, Chicago, Illinois.",
    difficulty: "Intermediate"
  },
  {
    id: "addr-02",
    title: "London Head Office Location",
    type: "TTS",
    category: "Addresses",
    text: "Our headquarters are located at forty-five Broad Street, Apartment three-B, London, England.",
    difficulty: "Beginner"
  },

  {
    id: "phone-01",
    title: "Corporate Helpline Access",
    type: "TTS",
    category: "Phone Numbers",
    text: "You can reach our customer support department directly at area code two-one-two, five-five-five, zero-one-nine-nine.",
    difficulty: "Beginner"
  },
  {
    id: "phone-02",
    title: "Emergency Outpost Hotlines",
    type: "TTS",
    category: "Phone Numbers",
    text: "In case of an urgent emergency, call plus-one, eight-hundred, four-four-three, nine-one-one-zero immediately.",
    difficulty: "Intermediate"
  },

  {
    id: "info-01",
    title: "New Guest Registry Log",
    type: "TTS",
    category: "Personal Information",
    text: "Her name is Sarah Miller, she lives at seven-two Oak Road, and her telephone number is five-five-five, zero-one-two-three.",
    difficulty: "Beginner"
  },
  {
    id: "info-02",
    title: "Digital Client Account Record",
    type: "TTS",
    category: "Personal Information",
    text: "Please record the guest's email: robert-dot-jones-at-email-dot-com, born on October fourteenth, nineteen-ninety.",
    difficulty: "Intermediate"
  },

  {
    id: "speech-01",
    title: "Everyday Reductions Practice",
    type: "TTS",
    category: "Connected Speech",
    text: "I'm gonna try to find out what he's wanna do after we link up at the coffee shop.",
    difficulty: "Intermediate"
  },
  {
    id: "speech-02",
    title: "Conversational Elision Waves",
    type: "TTS",
    category: "Connected Speech",
    text: "What do you want to do about the issue? I don't know, but we should've done something earlier.",
    difficulty: "Advanced"
  },

  {
    id: "price-01",
    title: "Detailed Financial Settlement",
    type: "TTS",
    category: "Critical Prices",
    text: "The total invoice amount comes to exactly three thousand, four hundred and fifty dollars and seventy-five cents.",
    difficulty: "Beginner"
  },
  {
    id: "price-02",
    title: "Quarterly Revenue Variance Report",
    type: "TTS",
    category: "Critical Prices",
    text: "Our quarterly revenue dropped by twelve-point-five percent, resulting in a net loss of forty-five thousand Euros.",
    difficulty: "Intermediate"
  },

  {
    id: "nav-01",
    title: "Street Directions Layout",
    type: "TTS",
    category: "Directions & Navigation",
    text: "Go straight for two blocks, turn left onto Grand Avenue, and the museum will be on your right, next to the bank.",
    difficulty: "Beginner"
  },
  {
    id: "gram-06",
    title: "Tonight Movie Plans",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am going to watch a movie tonight.",
    difficulty: "Beginner"
  },
  {
    id: "gram-07",
    title: "Missed Cooking Class",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "She is not going to cook dinner today.",
    difficulty: "Beginner"
  },
  {
    id: "gram-08",
    title: "Weekend Soccer Match",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are they going to play soccer this weekend?",
    difficulty: "Beginner"
  },
  {
    id: "gram-09",
    title: "New Modern Guitar",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "He is going to buy a new guitar.",
    difficulty: "Beginner"
  },
  {
    id: "gram-10",
    title: "Skipped Gym Session",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "We are not going to visit the gym.",
    difficulty: "Beginner"
  },
  {
    id: "gram-11",
    title: "Next Summer Vacation",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are you going to travel next summer holiday?",
    difficulty: "Beginner"
  },
  {
    id: "gram-12",
    title: "Morning Room Cleanup",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "They are going to clean the house tomorrow.",
    difficulty: "Beginner"
  },
  {
    id: "gram-13",
    title: "Cancelled Park Picnic",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am not going to eat fast food.",
    difficulty: "Beginner"
  },
  {
    id: "gram-14",
    title: "Upcoming English Exam",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Is she going to study for the test?",
    difficulty: "Beginner"
  },
  {
    id: "gram-15",
    title: "Early Bedtime Routine",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "He is going to sleep very early tonight.",
    difficulty: "Beginner"
  },
  {
    id: "nav-02",
    title: "Expressway Roundabout Guide",
    type: "TTS",
    category: "Directions & Navigation",
    text: "At the roundabout, take the third exit onto Highway eighty, then stay in the left lane to exit toward downtown.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-01",
    title: "International Marketing Strategy",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Our marketing team is going to launch the new campaign next Monday morning.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-02",
    title: "Postponed Renovation Project",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "They are not going to renovate the old office building until next year.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-03",
    title: "Corporate Budget Meeting",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Is the financial director going to present the annual budget during the meeting?",
    difficulty: "Intermediate"
  },
  {
    id: "gram-04",
    title: "Advanced Coding Course",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "He is going to enroll in an intensive web development bootcamp next month.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-05",
    title: "Cancelled Flight Alternative",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "We are not going to book the flights because the prices increased dramatically.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-06",
    title: "Keynote Speech Inquiry",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are you going to attend the international technology conference in San Francisco?",
    difficulty: "Intermediate"
  },
  {
    id: "gram-07",
    title: "Healthy Lifestyle Habits",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "She is going to change her daily diet and start exercising regularly soon.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-08",
    title: "Declined Job Offer",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am not going to accept that job offer due to the low salary.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-09",
    title: "Local Charity Event",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Is your local community going to organize a charity event for the hospital?",
    difficulty: "Intermediate"
  },
  {
    id: "gram-10",
    title: "Family Vacation Plan",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "My family is going to rent a beautiful cabin near the lake this summer.",
    difficulty: "Intermediate"
  },
  {
    id: "gram-01",
    title: "Strategic Corporate Merger",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "The multinational corporation is going to acquire three struggling tech startups to expand its regional market share significantly.",
    difficulty: "Advanced"
  },
  {
    id: "gram-02",
    title: "Unresolved Infrastructure Delay",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "The local government is not going to approve the budget for the new highway system until environmental studies are completed.",
    difficulty: "Advanced"
  },
  {
    id: "gram-03",
    title: "Artificial Intelligence Debate",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are the lead software developers going to implement advanced artificial intelligence modules to automate these repetitive quality assurance processes?",
    difficulty: "Advanced"
  },
  {
    id: "gram-04",
    title: "Academic Research Publication",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "She is going to present her groundbreaking scientific research regarding renewable energy sources at the upcoming international academic symposium.",
    difficulty: "Advanced"
  },
  {
    id: "gram-05",
    title: "Severe Weather Precautions",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "We are not going to risk traveling through the mountain passes while the severe winter blizzard warnings remain active.",
    difficulty: "Advanced"
  },
  {
    id: "gram-06",
    title: "Macroeconomic Policy Shift",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Is the central bank going to raise interest rates again next quarter to combat the rising inflation affecting consumer goods?",
    difficulty: "Advanced"
  },
  {
    id: "gram-07",
    title: "Sustainable Agriculture Shift",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Independent local farmers are going to adopt vertical farming techniques to maximize crop yields while drastically reducing water consumption.",
    difficulty: "Advanced"
  },
  {
    id: "gram-08",
    title: "Declined Investment Venture",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am not going to invest my personal savings into that volatile cryptocurrency project without seeing a detailed risk assessment.",
    difficulty: "Advanced"
  },
  {
    id: "gram-09",
    title: "Organizational Restructuring Inquiry",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "How is the senior management team going to handle the sudden resignation of our chief operating officer during this crisis?",
    difficulty: "Advanced"
  },
  {
    id: "gram-10",
    title: "Architectural Urban Design",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "The renowned architectural firm is going to design a modern minimalist museum that blends seamlessly into the historic city center.",
    difficulty: "Advanced"
  },
  {
    id: "story-int-01",
    title: "The Midnight Coffee Roastery",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "The small downtown coffee shop had already closed its heavy wooden doors to the public.",
      "However, the master roaster was still working hard beneath the warm, dim lights inside.",
      "He had recently discovered a rare bean that required a very precise roasting temperature.",
      "Although the process took hours, he successfully created the most aromatic blend of the year."
    ]
  },
  {
    id: "story-int-02",
    title: "A Quiet Urban Sanctuary",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "Elena decided to build a minimalist garden on the rooftop of her apartment building.",
      "She wanted to create a peaceful sanctuary where corporate workers could escape daily stress.",
      "After she had carefully arranged the green plants, a beautiful butterfly suddenly appeared.",
      "Her clever project proved that nature can always find a home within busy cities."
    ]
  },
  {
    id: "story-int-03",
    title: "The Digital Nomad Dilemma",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "Liam had been working remotely from a tropical island for over six months.",
      "While the beautiful ocean view was absolutely breathtaking, his internet connection remained quite unstable.",
      "He should have upgraded his data plan before managing this critical software launch.",
      "Fortunately, a local programmer helped him find a reliable connection just in time."
    ]
  },
  {
    id: "story-int-04",
    title: "Echoes of Ancient Stars",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "The dedicated research team spent the entire night monitoring the deep space telescope.",
      "They were searching for a specific rhythmic pattern that indicated an undiscovered planet.",
      "Suddenly, an unusual acoustic signal echoed loudly through the main control room speakers.",
      "They immediately realized that their scientific understanding of the galaxy would change forever."
    ]
  },
  {
    id: "story-int-05",
    title: "The Clockmaker Secret Legacy",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "An old craftsman left an elegant silver pocket watch to his brilliant granddaughter.",
      "The mysterious device had not been ticking properly for at least three decades.",
      "When she gently turned the internal gold gear, a hidden compartment suddenly opened.",
      "Inside, she discovered a beautifully detailed map leading to a forgotten historical library."
    ]
  },
  {
    id: "story-int-06",
    title: "The Architecture of Sound",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "An innovative architect wanted to design a concert hall with perfect natural acoustics.",
      "She experimented with curved wooden panels that could naturally reflect soft musical notes.",
      "Although critics doubted her unusual layout, the opening night performance was a triumph.",
      "The audience completely agreed that the sound quality surpassed any traditional venue."
    ]
  },
  {
    id: "story-int-07",
    title: "The Silent Canvas Exhibition",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "A talented local artist decided to paint a collection using only monochromatic colors.",
      "He believed that removing vibrant shades would allow viewers to focus on deep textures.",
      "Many gallery visitors stood silently for minutes, deeply moved by the powerful shadows.",
      "His bold artistic choice successfully demonstrated that simplicity can convey profound emotions."
    ]
  },
  {
    id: "story-int-08",
    title: "The Artificial Intelligence Trial",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "The tech company launched an advanced algorithm to predict global financial fluctuations.",
      "During the initial test phase, the system made several highly unpredictable market choices.",
      "The engineering team spent days analyzing the complex neural networks for data errors.",
      "Ultimately, they discovered that the machine had anticipated a major economic shift."
    ]
  },
  {
    id: "story-int-09",
    title: "The Lost Botanical Recipe",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "A young chef traveled to a remote mountain village seeking an ancient herb.",
      "Old culinary manuscripts claimed this rare plant could naturally preserve fresh food texturing.",
      "After exploring the steep northern slopes, she finally found the fragrant green leaves.",
      "She returned to her modern kitchen to recreate a legendary historical masterpiece."
    ]
  },
  {
    id: "story-int-10",
    title: "The Missing Algorithm Key",
    type: "TTS",
    category: "Stories",
    difficulty: "Intermediate",
    sentences: [
      "The cybersecurity analyst noticed a strange encrypted file on the main corporate server.",
      "Someone had deliberately hidden the network security key inside an ordinary image file.",
      "She utilized a specialized decoding program to safely extract the critical system data.",
      "By solving this digital puzzle, she prevented a massive international data breach."
    ]
  },







  
];
