// ================== IMAGES ==================
import fish1 from "../assets/Collection/1.jpg";
import fish2 from "../assets/Collection/2.jpg";
import fish3 from "../assets/Collection/3.jpg";
import fish4 from "../assets/Collection/4.jpg";
import fish5 from "../assets/Collection/5.jpg";
import fish6 from "../assets/Collection/6.jpg";
import fish7 from "../assets/Collection/7.jpg";
import fish8 from "../assets/Collection/8.jpg";
import fish9 from "../assets/Collection/9.jpg";
import fish10 from "../assets/Collection/10.jpg";
import fish11 from "../assets/Collection/11.jpg";
import fish12 from "../assets/Collection/12.jpg";
import fish13 from "../assets/Collection/13.jpg";
import fish14 from "../assets/Collection/14.jpg";
import fish15 from "../assets/Collection/15.jpg";
import fish16 from "../assets/Collection/16.jpg";
import fish17 from "../assets/Collection/17.jpg";
import fish18 from "../assets/Collection/18.jpg";
import fish19 from "../assets/Collection/19.jpg";
import fish20 from "../assets/Collection/20.jpg";
import fish21 from "../assets/Collection/21.jpg";
import fish22 from "../assets/Collection/22.jpg";
import fish23 from "../assets/Collection/23.jpg";
import fish24 from "../assets/Collection/24.jpg";

// ================== TANK REQUIREMENTS ==================
export const fishRequirements = {
   betta: {
    temperature: "75–82°F (24–28°C)",
    ph: "6.5 – 7.5",
    tankSize: "5–10 gal (single male)",
    lifespan: "3–5 years",
    mates: "Peaceful community (with caution)",
    notes: [
      "Freshwater",
      "Low flow preferred",
      "Do not keep males together",
    ],
  },

  channa: {
    temperature: "64–82°F (18–28°C)",
    ph: "5.0 – 7.5",
    tankSize: "55 gal min • 100+ gal (large species)",
    lifespan: "8–10+ years",
    mates: "Not recommended • Highly aggressive",
    notes: [
      "Freshwater",
      "Slightly acidic water preferred",
      "Best kept alone",
    ],
  },

  flowerhorn: {
    temperature: "79–86°F (26–30°C)",
    ph: "7.0 – 8.0",
    tankSize: "55 gal min • 75–100 gal recommended",
    lifespan: "8–10 years",
    mates: "Not recommended • Extremely aggressive",
    notes: [
      "Freshwater",
      "Clean, well-filtered water required",
      "Solo tank recommended",
    ],
  },
};

// ================== FISH LIST ==================
export const fishList = [
  // ===== BETTA =====
  {
    name: "Imbellis Green (Wild)",
    category: "Betta",
    slug: "imbellis-green-wild",
    image: fish1,
    requirements: fishRequirements.betta
  },
  {
    name: "Mahachai Green (Wild)",
    category: "Betta",
    slug: "mahachai-green-wild",
    image: fish2,
    requirements: fishRequirements.betta
  },
  {
    name: "Mahachai Blue (Wild)",
    category: "Betta",
    slug: "mahachai-blue-wild",
    image: fish3,
    requirements: fishRequirements.betta
  },
  {
    name: "Alien Blue (Wild)",
    category: "Betta",
    slug: "alien-blue-wild",
    image: fish4,
    requirements: fishRequirements.betta
  },
  {
    name: "Alien Green (Wild)",
    category: "Betta",
    slug: "alien-green-wild",
    image: fish5,
    requirements: fishRequirements.betta
  },
  {
    name: "Xelophane (HMPK)",
    category: "Betta",
    slug: "xelophane-hmpk",
    image: fish6,
    requirements: fishRequirements.betta
  },
  {
    name: "Snow Dragon (HMPK)",
    category: "Betta",
    slug: "snow-dragon-hmpk",
    image: fish7,
    requirements: fishRequirements.betta
  },
  {
    name: "Samurai / Black Mamba (HMPK)",
    category: "Betta",
    slug: "samurai-black-mamba-hmpk",
    image: fish8,
    requirements: fishRequirements.betta
  },
  {
    name: "Avatar Blue (HMPK)",
    category: "Betta",
    slug: "avatar-blue-hmpk",
    image: fish9,
    requirements: fishRequirements.betta
  },
  {
    name: "Imbellis Blue (Wild)",
    category: "Betta",
    slug: "imbellis-blue-wild",
    image: fish10,
    requirements: fishRequirements.betta
  },
  {
    name: "Yellow Multi (HMPK)",
    category: "Betta",
    slug: "yellow-multi-hmpk",
    image: fish11,
    requirements: fishRequirements.betta
  },
  {
    name: "Fighting Plakat (Wild)",
    category: "Betta",
    slug: "fighting-plakat-wild",
    image: fish12,
    requirements: fishRequirements.betta
  },
  {
    name: "Fancy Copper (HMPK)",
    category: "Betta",
    slug: "fancy-copper-hmpk",
    image: fish13,
    requirements: fishRequirements.betta
  },
  {
    name: "Crown Tail",
    category: "Betta",
    slug: "crown-tail",
    image: fish14,
    requirements: fishRequirements.betta
  },
  {
    name: "Dumbo",
    category: "Betta",
    slug: "dumbo",
    image: fish15,
    requirements: fishRequirements.betta
  },
  {
    name: "Halfmoon",
    category: "Betta",
    slug: "halfmoon",
    image: fish16,
    requirements: fishRequirements.betta
  },

  // ===== CHANNA =====
  {
    name: "Channa Guacha",
    category: "Channa",
    slug: "channa-guacha",
    image: fish17,
    requirements: fishRequirements.channa
  },
  {
    name: "Channa Blue Pulchra",
    category: "Channa",
    slug: "channa-blue-pulchra",
    image: fish18,
    requirements: fishRequirements.channa
  },
  {
    name: "Channa Fire & Ice",
    category: "Channa",
    slug: "channa-fire-ice",
    image: fish19,
    requirements: fishRequirements.channa
  },
  {
    name: "Channa Golden Cobra",
    category: "Channa",
    slug: "channa-golden-cobra",
    image: fish20,
    requirements: fishRequirements.channa
  },
  {
    name: "Channa Barca",
    category: "Channa",
    slug: "channa-barca",
    image: fish21,
    requirements: fishRequirements.channa
  },

  // ===== FLOWER HORN =====
  {
    name: "Flower Horn Golden Base",
    category: "Flower Horn",
    slug: "flower-horn-golden-base",
    image: fish22,
    requirements: fishRequirements.flowerhorn
  },
  {
    name: "Flower Horn (Super Red Dragon)",
    category: "Flower Horn",
    slug: "flower-horn-super-red-dragon",
    image: fish23,
    requirements: fishRequirements.flowerhorn
  },

  // ===== BETTA =====
  {
    name: "Red Solid (HMPK)",
    category: "Betta",
    slug: "red-solid-hmpk",
    image: fish24,
    requirements: fishRequirements.betta
  },
];
