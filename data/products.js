// data/products.js
export const biscuitProducts = [
  { 
    slug: "naif-vanilla-cookies",
    name: "NAIF Vanilla Cookies", 
    category: "cookies", 
    tag: "Vanilla Cookies", 
    amharic: "ናኢፍ ቫኒላ ኩኪስ", 
    color: "from-amber-400 to-yellow-600",
    flavorStory: "Our signature golden-baked cookies infused with pure, aromatic Madagascar vanilla extract. Light, incredibly buttery, and designed to melt effortlessly on the tongue.",
    ingredients: ["Fortified Alsen Wheat Flour", "Pure Cane Sugar", "Natural Vanilla Extract", "Vegetable Shortening", "Fresh Milk Solids", "Leavening Agents"],
    nutrition: { energy: "485 kcal", protein: "6.2g", fat: "19.5g", carbs: "68.0g" },
    packaging: "75g individual wrap | 24 packets per master carton"
  },
  { 
    slug: "naif-ginger-cookies",
    name: "NAIF Ginger Cookies", 
    category: "cookies", 
    tag: "Ginger Cookies", 
    amharic: "ናኢፍ የቀረፋ ኩኪስ", 
    color: "from-amber-600 to-orange-700",
    flavorStory: "A warm, comforting classic baked with a custom blend of organic, locally-sourced ginger and ground cinnamon. Delivers a subtle sweet heat with a deeply satisfying snap.",
    ingredients: ["Fortified Alsen Wheat Flour", "Brown Sugar", "Natural Ginger Extract", "Cinnamon Powder", "Vegetable Oil", "Molasses"],
    nutrition: { energy: "460 kcal", protein: "5.8g", fat: "16.2g", carbs: "71.4g" },
    packaging: "75g individual wrap | 24 packets per master carton"
  },
  { 
    slug: "naif-chocolate-cookies",
    name: "NAIF Chocolate Cookies", 
    category: "cookies", 
    tag: "Chocolate Cookies", 
    amharic: "ናኢፍ ቸኮሌት ኩኪስ", 
    color: "from-stone-700 to-amber-950",
    flavorStory: "An intense cocoa experience. We combine premium dark chocolate solids with our signature buttery cookie dough to create a rich, semi-sweet masterpiece for true chocolate purists.",
    ingredients: ["Fortified Alsen Wheat Flour", "Premium Cocoa Powder", "Dark Chocolate Chips", "Sugar", "Butter", "Vanilla Extract"],
    nutrition: { energy: "510 kcal", protein: "7.1g", fat: "22.8g", carbs: "64.0g" },
    packaging: "75g individual wrap | 24 packets per master carton"
  },
  { 
    slug: "naif-milky-cookies",
    name: "NAIF Milky Cookies", 
    category: "cookies", 
    tag: "Milky Cookies", 
    amharic: "ናኢፍ የወተት ኩኪስ", 
    color: "from-blue-400 to-amber-500",
    flavorStory: "Creamy, wholesome, and rich in calcium. These cookies are baked with extra fresh local milk solids, resulting in a gentle, comforting dairy flavor loved by generations.",
    ingredients: ["Fortified Alsen Wheat Flour", "Fresh Whole Milk Solids", "Sweetened Condensed Milk", "Sugar", "Vegetable Butter"],
    nutrition: { energy: "475 kcal", protein: "8.0g", fat: "18.0g", carbs: "66.5g" },
    packaging: "75g individual wrap | 24 packets per master carton"
  },
  { 
    slug: "naif-vanilla-biscuit",
    name: "NAIF Vanilla Biscuit", 
    category: "biscuits", 
    tag: "Vanilla Biscuit", 
    amharic: "ናኢፍ ቫኒላ ብስኩት", 
    color: "from-blue-500 to-indigo-800",
    flavorStory: "The ultimate teatime companion. A crisp, structural classic biscuit with elegant embossed framing, carrying a light, delicate touch of aromatic vanilla sweet notes.",
    ingredients: ["Fortified Alsen Wheat Flour", "Refined Sugar", "Vegetable Fats", "Vanilla Flavoring", "Malt Extract", "Salt"],
    nutrition: { energy: "455 kcal", protein: "6.0g", fat: "14.5g", carbs: "73.2g" },
    packaging: "85g standard wrap | 36 packets per master carton"
  },
  { 
    slug: "naif-chocolate-biscuit",
    name: "NAIF Chocolate Biscuit", 
    category: "biscuits", 
    tag: "Chocolate Biscuit", 
    amharic: "ናኢፍ ቸኮሌት ብስኩት", 
    color: "from-amber-900 to-stone-950",
    flavorStory: "A beautifully structured dark biscuit. Baked with a high concentration of premium Dutch-process alkalized cocoa powder for a deep, rich brown finish and robust chocolate aroma.",
    ingredients: ["Fortified Alsen Wheat Flour", "Alkalized Cocoa Powder", "Sugar", "Vegetable Shortening", "Maltodextrin", "Chocolate Extract"],
    nutrition: { energy: "468 kcal", protein: "6.8g", fat: "15.9g", carbs: "70.1g" },
    packaging: "85g standard wrap | 36 packets per master carton"
  },
  { 
    slug: "naif-cappuccino-sandwich",
    name: "NAIF Cappuccino Sandwich Biscuit", 
    category: "sandwich", 
    tag: "Cappuccino Sandwich Biscuit", 
    amharic: "ናኢፍ ካፑቺኖ ሳንድዊች ብስኩት", 
    color: "from-amber-800 to-stone-900",
    flavorStory: "For coffee lovers. Two crispy chocolate-malt biscuits sandwiching a thick, incredibly luxurious, whipping cappuccino-infused cream filling.",
    ingredients: ["Fortified Alsen Wheat Flour", "Cappuccino Flavor Cream (Sugar, Vegetable Oil, Coffee Powder)", "Cocoa Powder", "Leavening Agents"],
    nutrition: { energy: "525 kcal", protein: "5.5g", fat: "24.0g", carbs: "61.0g" },
    packaging: "120g double pack | 18 packets per master carton"
  },
  { 
    slug: "naif-vanilla-sandwich",
    name: "NAIF Vanilla Sandwich Biscuit", 
    category: "sandwich", 
    tag: "Vanilla Sandwich Biscuit", 
    amharic: "ናኢፍ ቫኒላ ሳንድዊች ብስኩት", 
    color: "from-emerald-600 to-teal-850",
    flavorStory: "Double the pleasure. Creamy, silky vanilla bean custard cream pressed firmly between two ultra-crispy, sweet-embossed biscuits.",
    ingredients: ["Fortified Alsen Wheat Flour", "Sweet Vanilla Cream Filling", "Refined Sugar", "Vegetable Fats", "Salt", "Soy Lecithin"],
    nutrition: { energy: "518 kcal", protein: "5.2g", fat: "23.5g", carbs: "63.2g" },
    packaging: "120g double pack | 18 packets per master carton"
  }
];