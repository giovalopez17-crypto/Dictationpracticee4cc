/**
 * DAILY DICTATION - BANCO DE DATOS DE LECCIONES
 * 
 * Este archivo contiene todas las lecciones del sistema clasificadas por categorías.
 * Para añadir nuevas lecciones, simplemente agrega un nuevo objeto al arreglo siguiendo
 * la misma estructura de propiedades.
 */

const LESSONS_DATABASE = 
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
  [
  {
    id: "gram-01",
    title: "Tonight Movie Plans",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am going to watch a movie tonight.",
    difficulty: "Beginner"
  },
  {
    id: "gram-02",
    title: "Missed Cooking Class",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "She is not going to cook dinner today.",
    difficulty: "Beginner"
  },
  {
    id: "gram-03",
    title: "Weekend Soccer Match",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are they going to play soccer this weekend?",
    difficulty: "Beginner"
  },
  {
    id: "gram-04",
    title: "New Modern Guitar",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "He is going to buy a new guitar.",
    difficulty: "Beginner"
  },
  {
    id: "gram-05",
    title: "Skipped Gym Session",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "We are not going to visit the gym.",
    difficulty: "Beginner"
  },
  {
    id: "gram-06",
    title: "Next Summer Vacation",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Are you going to travel next summer holiday?",
    difficulty: "Beginner"
  },
  {
    id: "gram-07",
    title: "Morning Room Cleanup",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "They are going to clean the house tomorrow.",
    difficulty: "Beginner"
  },
  {
    id: "gram-08",
    title: "Cancelled Park Picnic",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "I am not going to eat fast food.",
    difficulty: "Beginner"
  },
  {
    id: "gram-09",
    title: "Upcoming English Exam",
    type: "TTS",
    category: "Grammar Practice",
    grammarType: "FUTURO GOING TO",
    text: "Is she going to study for the test?",
    difficulty: "Beginner"
  },
  {
    id: "gram-10",
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
  }
];
