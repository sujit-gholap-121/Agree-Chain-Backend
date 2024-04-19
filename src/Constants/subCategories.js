const agriCategories = [
  {
    id: "cereals",
    value: "Cereals",
    subCategory: ["rice", "wheat", "corn", "bajra", "jowar", "ragi", "barley"],
  },
  {
    id: "pulses",
    value: "Pulses",
    subCategory: ["Tur", "gram", "moong", "urad", "masoor", "peas"]
  },
  {
    id: "oilseeds",
    value: "Oilseeds",
    subCategory:[
        "Groundnut",
        "Mustard",
        "Sesame",
        "Castor",
        "Linseed",
        "Sunflower",
        "Soybean"
      ]
  },
  { id: "spices", value: "Spices",
subCategory:[
    "Adrak",
    "Ajwain",
    "Chakra Phool",
    "Dalchini",
    "Deggi Mirch",
    "Dhaniya",
    "Elaichi",
    "Garam Masala",
    "Haldi",
    "Heeng",
    "Indrayan",
    "Jaiphal",
    "Javitri",
    "Jeera",
    "Kali Mirch",
    "Kesar (Zaffran)",
    "Laung",
    "Methi",
    "Methi Dana",
    "Mirchi",
    "Posto",
    "Rai",
    "Ratanjot",
    "Saunf",
    "Sonf",
    "Tej Patta"
  ]
},
  {
    id: "vegetables",
    value: "Vegetables",
    subCategory:
    [
      "Bhindi",
      "Brinjal",
      "Cheera",
      "Cluster Beans",
      "Colocasia",
      "French Beans",
      "Gajar",
      "Gobhi",
      "Ganth Gobhi",
      "Kangkong",
      "Kathal",
      "Kamal Kakdi",
      "Karela",
      "Lady Finger",
      "Lobia",
      "Louki",
      "Matar",
      "Methi",
      "Mushroom",
      "Okra",
      "Parwal",
      "Palak",
      "Pyaaz",
      "Shalgam",
      "Shakarkandi",
      "Tamatar",
      "Tinda",
      "Turai"
    ]
    
  },
  { id: "cashCrops", value: "CashCrops",
  subCategory:[
    "Sugarcane","Cotton","Jute","Tobacco","Tea","Coffee","Rubber","Spices"
  ]
},
  {
    id: "flowers",
    value: "Flowers",
    subCategory:[
        "Ajwain",
        "Amaltas",
        "Champa",
        "China Rose",
        "Genda",
        "Gulmohar",
        "Jasmine",
        "Kaner",
        "Lily",
        "Lotus",
        "Madhumalti",
        "Mohabbat ka Phool",
        "Parijat",
        "Rangoon ka Lata"
      ]
  },
  {
    id: "Fruits",
    value: "Fruits",
    subCategory:[
        "Aam",
        "Anar",
        "Angoor",
        "Atti",
        "Bael",
        "Ber",
        "Bilva",
        "Bor",
        "Chikoo",
        "Anjir",
        "Gauva",
        "Imli",
        "Jamun",
        "Kathal",
        "Kanwal",
        "Karvanda", 
        "Kasundi",  
        "Kela",
        "Kesu",  
        "Khajur",
        "Kinnow",
        "Kokum",
        "Lechi",
        "Malta",
        "Mosambi",
        "Narangi",
        "Nariyal",
        "Nungu",
        "Papaya",
        "Phani",
        "Pineapple",
        "Raspberry",  
        "Sitafal",
        "Shahtoot",
"Starfruit",
        "Strawberry",  
        "Tarbooz",
      ]
      
  },
].sort((a, b) => (a.id.toLowerCase() < b.id.toLowerCase() ? -1 : 1));

export default agriCategories;
