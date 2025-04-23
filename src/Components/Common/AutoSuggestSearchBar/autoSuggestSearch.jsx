import React, { useContext, useEffect, useRef, useState } from "react";
import IncrementDecrementFunctionality from "../IncrementDecrementFunctionality/incrementDecrementFunctionality";
import { connect, useDispatch } from "react-redux";
import { AddMenuRedux } from "../../Redux/Slice/Menu/MenuSlice";
import { UseContext } from "../../Context/context";
import useApi from "../../utils/Api/api";

// Json
let MenuItemsJson = [
  {
    Mid: 11,
    category: "Appetizers",
    // image: Appetizers,
    subcategories: [
      {
        id: 1,
        name: "Samosa",
        description:
          "Crispy pastry filled with spiced potatoes, peas, and herbs.",
        price: 80,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra tamarind chutney", price: 10 },
          { option: "Mint chutney", price: 10 },
          { option: "Yogurt topping", price: 15 },
          { option: "Mini samosas", price: 0 },
          { option: "Spicy filling", price: 0 },
          { option: "Cheese filling", price: 20 },
        ],
      },
      {
        id: 2,
        name: "Paneer Tikka",
        description:
          "Marinated cottage cheese cubes grilled to perfection with herbs.",
        price: 250,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra paneer skewer", price: 50 },
          { option: "Mint chutney", price: 10 },
          { option: "Spicy marinade", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Chicken Seekh Kebab",
        description: "Spiced minced chicken skewers cooked in a tandoor.",
        price: 300,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra kebab skewer", price: 60 },
          { option: "Garlic sauce", price: 15 },
          { option: "Mild or spicy", price: 0 },
          { option: "Mint chutney", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Aloo Tikki Chaat",
        description:
          "Potato patties topped with yogurt, tamarind, and mint chutney.",
        price: 150,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra yogurt", price: 10 },
          { option: "Sev", price: 10 },
          { option: "Pomegranate seeds", price: 20 },
          { option: "Sweet or spicy chutney", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Lamb Galouti Kebab",
        description:
          "Melt-in-your-mouth minced lamb kebabs with a rich blend of spices.",
        price: 400,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra kebab", price: 70 },
          { option: "Naan bread", price: 20 },
          { option: "Spicy or mild", price: 0 },
          { option: "Garlic butter topping", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Avocado Papdi Chaat",
        description:
          "Crispy wafers topped with mashed avocado, spiced yogurt, and chutneys—a modern twist on traditional chaat.",
        price: 180,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra avocado", price: 30 },
          { option: "Sev", price: 10 },
          { option: "Mild or spicy chutneys", price: 0 },
        ],
      },
      {
        id: 7,
        name: "Chicken 65",
        description:
          "Spicy and tangy fried chicken with South Indian spices, curry leaves, and yogurt.",
        price: 220,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra curry leaves", price: 10 },
          { option: "Yogurt dip", price: 15 },
          { option: "Mild or extra spicy", price: 0 },
        ],
      },
      {
        id: 8,
        name: "Kurkuri Bhindi",
        description:
          "Crispy, spiced okra fries for a crunchy and flavorful bite.",
        price: 130,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra crispy bhindi", price: 20 },
          { option: "Tangy yogurt dip", price: 15 },
          { option: "Less or extra crispy", price: 0 },
          { option: "Spicy seasoning", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 12,
    category: "Veg",
    // image: Vegetarian,
    subcategories: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        description:
          "Cottage cheese in a rich, creamy tomato sauce with butter.",
        price: 300,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra paneer", price: 50 },
          { option: "Extra cream", price: 15 },
          { option: "Spicy or mild", price: 0 },
          { option: "Garlic naan pairing", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Chole Bhature",
        description: "Spiced chickpeas served with fluffy fried bread.",
        price: 220,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra bhatura", price: 30 },
          { option: "Raita", price: 20 },
          { option: "Spicy or mild", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Baingan Bharta",
        description:
          "Roasted and mashed eggplant with onions, tomatoes, and spices.",
        price: 200,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra baingan", price: 40 },
          { option: "Garlic naan", price: 20 },
          { option: "Less or extra spicy", price: 0 },
          { option: "Butter topping", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Palak Paneer",
        description: "Spinach and paneer cubes cooked with creamy spices.",
        price: 280,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra paneer", price: 50 },
          { option: "Cream", price: 15 },
          { option: "Mild or spicy", price: 0 },
          { option: "Extra spinach", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Stuffed Bell Peppers",
        description:
          "Bell peppers filled with spiced potatoes, peas, and cottage cheese, baked to perfection.",
        price: 260,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra filling", price: 30 },
          { option: "Cheese topping", price: 20 },
          { option: "Spicy or mild filling", price: 0 },
          { option: "No onions option", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Jackfruit Curry",
        description:
          "Tender jackfruit cooked in a robust, spicy coconut gravy.",
        price: 300,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra jackfruit", price: 50 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Rice pairing", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 13,
    category: "Non-Veg",
    // image: Non_Vegetarian,
    subcategories: [
      {
        id: 1,
        name: "Chicken Tikka Masala",
        description: "Grilled chicken in a creamy, spiced tomato sauce.",
        price: 350,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 60 },
          { option: "Extra cream", price: 15 },
          { option: "Spicy or mild", price: 0 },
          { option: "Garlic naan pairing", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Lamb Rogan Josh",
        description: "Aromatic slow-cooked lamb curry with Kashmiri spices.",
        price: 400,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra lamb", price: 70 },
          { option: "Raita", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Rice or naan pairing", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Goan Fish Curry",
        description:
          "Fresh fish cooked in a tangy, spicy coconut curry from Goa.",
        price: 370,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra fish", price: 60 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Butter Chicken",
        description: "Tender chicken in a rich, buttery, tomato-based gravy.",
        price: 330,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 60 },
          { option: "Extra butter", price: 15 },
          { option: "Mild or extra spicy", price: 0 },
          { option: "Rice pairing", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Chicken Chettinad",
        description:
          "Fiery South Indian chicken curry made with freshly ground spices.",
        price: 340,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 60 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or extra spicy", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Mutton Vindaloo",
        description:
          "A spicy, tangy mutton curry with vinegar, inspired by Portuguese cuisine in Goa.",
        price: 380,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra mutton", price: 70 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or extra spicy", price: 0 },
          { option: "Steamed rice pairing", price: 0 },
        ],
      },
      {
        id: 7,
        name: "Prawn Moilee",
        description:
          "Lightly spiced, creamy coconut-based prawn curry from Kerala.",
        price: 400,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra prawns", price: 80 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or extra spicy", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 14,
    category: "Breads",
    // image: Breads,
    subcategories: [
      {
        id: 1,
        name: "Garlic Naan",
        description: "Soft, pillowy naan bread brushed with garlic butter.",
        price: 80,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra garlic topping", price: 10 },
          { option: "Butter", price: 10 },
          { option: "Whole wheat or white flour", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Roti",
        description: "Whole wheat flatbread, perfect for curries.",
        price: 40,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Butter", price: 10 },
          { option: "Tawa or tandoor cooked", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Stuffed Paratha",
        description:
          "Flatbread stuffed with spiced potatoes, paneer, or spinach.",
        price: 100,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra stuffing", price: 20 },
          { option: "Butter", price: 10 },
          { option: "Choice of potato, paneer, or spinach filling", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Lachha Paratha",
        description: "Layered and flaky whole wheat bread.",
        price: 70,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra butter", price: 10 },
          { option: "Whole wheat or refined flour", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Cheese Naan",
        description: "Soft naan filled with gooey, melted cheese.",
        price: 110,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra cheese", price: 30 },
          { option: "Regular or chili cheese", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Chili Cheese Kulcha",
        description:
          "Soft bread stuffed with cheese and green chili for an extra kick.",
        price: 120,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra cheese", price: 30 },
          { option: "Extra chili", price: 10 },
          { option: "Regular or spicy", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 15,
    category: "Rice & Biryanis",
    // image: Rice,
    subcategories: [
      {
        id: 1,
        name: "Vegetable Biryani",
        description:
          "Basmati rice with vegetables, spices, and herbs, served with raita.",
        price: 200,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra vegetables", price: 30 },
          { option: "Raita", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Basmati or jeera rice", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Chicken Biryani",
        description:
          "Aromatic basmati rice cooked with marinated chicken and spices.",
        price: 280,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 60 },
          { option: "Boiled egg", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Saffron rice option", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Lamb Biryani",
        description:
          "Fragrant rice with tender lamb pieces and delicate spices.",
        price: 350,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra lamb", price: 70 },
          { option: "Raita", price: 20 },
          { option: "Mild or spicy", price: 0 },
          { option: "Basmati or jeera rice", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Mushroom Pulao",
        description: "Fragrant rice cooked with mushrooms and mild spices.",
        price: 180,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra mushrooms", price: 30 },
          { option: "Extra ghee", price: 15 },
          { option: "Mild or spicy", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds.",
        price: 100,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra ghee", price: 10 },
          { option: "Basmati or regular rice", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 16,
    category: "Desserts",
    // image: Desserts,
    subcategories: [
      {
        id: 1,
        name: "Gulab Jamun",
        description:
          "Milk-based dumplings soaked in saffron and cardamom-flavored syrup.",
        price: 100,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra gulab jamun", price: 40 },
          { option: "Ice cream scoop", price: 20 },
          { option: "Warm or cold", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Ras Malai",
        description: "Soft cheese patties soaked in sweet, thickened milk.",
        price: 120,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra ras malai piece", price: 50 },
          { option: "Nuts", price: 15 },
          { option: "Warm or cold", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Mango Kulfi",
        description: "Traditional Indian ice cream with fresh mango flavor.",
        price: 130,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra kulfi", price: 40 },
          { option: "Nuts", price: 10 },
          { option: "Mango or pistachio flavor", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Chocolate Samosa",
        description:
          "Crispy pastry filled with melted chocolate—a modern twist!",
        price: 120,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chocolate drizzle", price: 20 },
          { option: "Served warm or cold", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Jalebi with Rabri",
        description:
          "Crispy, syrup-soaked coils served with thickened, sweetened milk.",
        price: 150,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra jalebi", price: 30 },
          { option: "Extra rabri", price: 20 },
          { option: "Warm or cold", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Coconut Ladoo",
        description: "Sweet coconut balls with condensed milk.",
        price: 90,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra ladoo", price: 20 },
          { option: "Roasted coconut garnish", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 17,
    category: "Snacks",
    // image: Snacks,
    subcategories: [
      {
        id: 1,
        name: "Bhel Puri",
        description:
          "Puffed rice, sev, vegetables, and tamarind sauce for a crunchy, tangy snack.",
        price: 120,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra sev", price: 10 },
          { option: "Extra chutneys", price: 10 },
          { option: "Mild or spicy", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Pav Bhaji",
        description:
          "Spicy mashed vegetable curry served with buttered bread rolls.",
        price: 150,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra pav", price: 20 },
          { option: "Extra butter", price: 10 },
          { option: "Mild or spicy bhaji", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Dahi Puri",
        description: "Crisp puris filled with yogurt, chutneys, and sev.",
        price: 130,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra yogurt", price: 10 },
          { option: "Extra sev", price: 10 },
          { option: "Mild or spicy chutney", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Masala Fries",
        description: "French fries with an Indian spice twist.",
        price: 110,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra fries", price: 20 },
          { option: "Cheese", price: 20 },
          { option: "Mild or spicy seasoning", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Paneer Kathi Roll",
        description: "Wrap filled with spiced paneer, onions, and chutneys.",
        price: 180,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra paneer", price: 40 },
          { option: "Extra chutney", price: 10 },
          { option: "Spicy or mild", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Chicken Frankie",
        description:
          "Grilled chicken wrapped in a soft roti with spicy chutney.",
        price: 200,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 50 },
          { option: "Extra chutney", price: 10 },
          { option: "Spicy or mild", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 18,
    category: "Beverages",
    // image: Beverages,
    subcategories: [
      {
        id: 1,
        name: "Masala Chai",
        description: "Spiced Indian tea with milk.",
        price: 60,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra milk", price: 10 },
          { option: "Ginger", price: 5 },
          { option: "Less sugar or extra strong", price: 0 },
        ],
      },
      {
        id: 2,
        name: "Mango Lassi",
        description: "Creamy, refreshing mango yogurt drink.",
        price: 120,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra mango pulp", price: 20 },
          { option: "Nuts", price: 15 },
          { option: "Sweet or salted", price: 0 },
        ],
      },
      {
        id: 3,
        name: "Sweet Lassi",
        description: "Cool, sweetened yogurt drink.",
        price: 100,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra yogurt", price: 10 },
          { option: "Nuts", price: 15 },
          { option: "Sweet or salted", price: 0 },
        ],
      },
      {
        id: 4,
        name: "Nimbu Pani",
        description: "Indian-style lemonade with spices and mint.",
        price: 80,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra lemon", price: 5 },
          { option: "Mint", price: 5 },
          { option: "Sweet or salted", price: 0 },
        ],
      },
      {
        id: 5,
        name: "Rose Milk",
        description: "Refreshing milk flavored with rose syrup.",
        price: 100,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra rose syrup", price: 10 },
          { option: "Nuts", price: 15 },
          { option: "With or without sugar", price: 0 },
        ],
      },
      {
        id: 6,
        name: "Coconut Water",
        description: "Fresh and natural coconut water.",
        price: 90,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra coconut pulp", price: 15 },
          { option: "Chilled or room temperature", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 19,
    category: "South Indian",
    // image: South_Indian,
    subcategories: [
      {
        id: 1,
        name: "Masala Dosa",
        // foodImg: Rajasthani,
        description:
          "Rice crepe filled with spiced potato, served with coconut chutney and sambar.",
        price: 180,
      },
      {
        id: 2,
        name: "Idli-Sambar",
        // foodImg: Rajasthani,
        description: "Steamed rice cakes served with sambar and chutneys.",
        price: 120,
      },
      {
        id: 3,
        name: "Chicken Chettinad",
        description:
          "Fiery chicken curry with ground spices, native to Tamil Nadu.",
        price: 340,
        // foodImg: Rajasthani,
        add_ons: [
          { option: "Extra chicken", price: 60 },
          { option: "Coconut milk", price: 20 },
          { option: "Mild or extra spicy", price: 0 },
          { option: "Lemon garnish", price: 0 },
        ],
      },
    ],
  },
  {
    Mid: 20,
    category: "Rajasthani",
    // image: Rajasthani,
    subcategories: [
      {
        id: 1,
        name: "Dal Baati Churma",
        // foodImg: Rajasthani,
        description:
          "Baked wheat balls served with lentil curry and sweet churma.",
        price: 300,
      },
      {
        id: 2,
        name: "Gatte ki Sabzi",
        // foodImg: Rajasthani,
        description: "Gram flour dumplings in a spiced yogurt curry.",
        price: 200,
      },
      {
        id: 3,
        name: "Ker Sangri",
        // foodImg: Rajasthani,
        description: "Rajasthani desert beans and berries cooked with spices.",
        price: 250,
      },
    ],
  },
  {
    Mid: 21,
    category: "Indo-Chinese Fusion",
    // image: Beverages,
    subcategories: [
      {
        id: 1,
        name: "Chili Paneer",
        // foodImg: Rajasthani,
        description:
          "Indian-style cottage cheese stir-fried with bell peppers, onions, and a spicy sauce.",
        price: 220,
      },
      {
        id: 2,
        name: "Hakka Noodles",
        // foodImg: Rajasthani,
        description:
          "Stir-fried noodles with vegetables, soy sauce, and Indian spices.",
        price: 200,
      },
      {
        id: 3,
        name: "Manchurian",
        // foodImg: Rajasthani,
        description: "Deep-fried vegetable balls in a tangy, spicy sauce.",
        price: 220,
      },
    ],
  },
];

const AutoSuggestSearch = ({ inputValue, MenuFromRedux }) => {
  // ========
  // States
  // ==========
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState();
  const [showDropdown, setshowDropdown] = useState(true);
  const [IncrDecrQuantity, setIncrDecrQuantity] = useState({});
  const dispatch = useDispatch();
  const dropdownRef = useRef(null); // Ref for the dropdown
  const { CustomerDetailsCnxt } = useContext(UseContext);
  const { request, error } = useApi();

  // =========
  // Functions
  // =========
  // {
  //   Mid: 11,
  //   category: "Appetizers",
  //   // image: Appetizers,
  //   subcategories: [
  //     {
  //       id: 1,
  //       name: "Samosa",
  //       description:
  //         "Crispy pastry filled with spiced potatoes, peas, and herbs.",
  //       price: 80,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra tamarind chutney", price: 10 },
  //         { option: "Mint chutney", price: 10 },
  //         { option: "Yogurt topping", price: 15 },
  //         { option: "Mini samosas", price: 0 },
  //         { option: "Spicy filling", price: 0 },
  //         { option: "Cheese filling", price: 20 },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Paneer Tikka",
  //       description:
  //         "Marinated cottage cheese cubes grilled to perfection with herbs.",
  //       price: 250,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra paneer skewer", price: 50 },
  //         { option: "Mint chutney", price: 10 },
  //         { option: "Spicy marinade", price: 0 },
  //         { option: "Lemon garnish", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: "Chicken Seekh Kebab",
  //       description: "Spiced minced chicken skewers cooked in a tandoor.",
  //       price: 300,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra kebab skewer", price: 60 },
  //         { option: "Garlic sauce", price: 15 },
  //         { option: "Mild or spicy", price: 0 },
  //         { option: "Mint chutney", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       name: "Aloo Tikki Chaat",
  //       description:
  //         "Potato patties topped with yogurt, tamarind, and mint chutney.",
  //       price: 150,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra yogurt", price: 10 },
  //         { option: "Sev", price: 10 },
  //         { option: "Pomegranate seeds", price: 20 },
  //         { option: "Sweet or spicy chutney", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       name: "Lamb Galouti Kebab",
  //       description:
  //         "Melt-in-your-mouth minced lamb kebabs with a rich blend of spices.",
  //       price: 400,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra kebab", price: 70 },
  //         { option: "Naan bread", price: 20 },
  //         { option: "Spicy or mild", price: 0 },
  //         { option: "Garlic butter topping", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 6,
  //       name: "Avocado Papdi Chaat",
  //       description:
  //         "Crispy wafers topped with mashed avocado, spiced yogurt, and chutneys—a modern twist on traditional chaat.",
  //       price: 180,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra avocado", price: 30 },
  //         { option: "Sev", price: 10 },
  //         { option: "Mild or spicy chutneys", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 7,
  //       name: "Chicken 65",
  //       description:
  //         "Spicy and tangy fried chicken with South Indian spices, curry leaves, and yogurt.",
  //       price: 220,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra curry leaves", price: 10 },
  //         { option: "Yogurt dip", price: 15 },
  //         { option: "Mild or extra spicy", price: 0 },
  //       ],
  //     },
  //     {
  //       id: 8,
  //       name: "Kurkuri Bhindi",
  //       description:
  //         "Crispy, spiced okra fries for a crunchy and flavorful bite.",
  //       price: 130,
  //       // foodImg: Rajasthani,
  //       add_ons: [
  //         { option: "Extra crispy bhindi", price: 20 },
  //         { option: "Tangy yogurt dip", price: 15 },
  //         { option: "Less or extra crispy", price: 0 },
  //         { option: "Spicy seasoning", price: 0 },
  //       ],
  //     },
  //   ],
  // },

  // const options = [];
  // MenuItemsJson.map((item) => {
  //   item?.subcategories?.map((foodName) => options?.push(foodName));
  // });

  // Function to handle clicking on an option
  // const handleOptionClick = (option) => {
  // setQuery(""); // Reset search bar
  // setFilteredOptions(); // Hide suggestions
  // };

  // Filter Previous order with customerId
  const FilterPrevOrdCustmId = MenuFromRedux?.Menu?.filter(
    (i) => i?.customerID == CustomerDetailsCnxt?._id
  );

  // Function to handle Add FOOD Item
  const HandleItemAdd = (item) => {
    const payload = {
      customerID: CustomerDetailsCnxt?._id,
      menuID: 0,
      floorName: CustomerDetailsCnxt?.floorName,
      tableNumber: CustomerDetailsCnxt?.tableNumber,
      orderID: item?.id,
      categoriesName: "",
      subcategoriesName: item?.name,
      subcategoriesAmount: item?.price,
      subcategoriesType: "",
      quantity: 1,
      totalAmount: 0,
      totalitemTax: 0,
      discount: "",
      addonNotes: "",
      addonName: "",
      addonAmount: 0,
      addonQuantity: 0,
    };
    dispatch(AddMenuRedux(payload));
  };

  useEffect(() => {
    const value = inputValue;
    if (value?.length > 0) {
      const filtered = options?.filter((option) =>
        option?.name?.toLowerCase()?.includes(value?.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions();
    }
  }, [inputValue]);

  // Function to handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilteredOptions(null); // Close the dropdown
        // setshowDropdown(false)
        // console.log('showDropdown: ', showDropdown);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, showDropdown]);

  // \===================================

  // new FUncton

  const options = MenuItemsJson.flatMap((item) => item.subcategories);

  // const [orderData, setOrderData] = useState({
  //   customerUid: CustomerDetailsCnxt?.customerUid, // replace with actual uid if needed
  //   floorName: CustomerDetailsCnxt?.floorName,
  //   tableNumber: CustomerDetailsCnxt?.tableNumber,
  //   categories: [],
  // });
  // const HandleItemAdd = async (item) => {
  //   try {
  //     const category = MenuItemsJson?.find(({ subcategories }) =>
  //       subcategories?.some((sub) => sub?.name === item?.name)
  //     );
  //     const categoryName = category ? category?.category : "Uncategorized";

  //     // Find existing category in orderData
  //     const existingCategoryIndex = orderData?.categories?.findIndex(
  //       (cat) => cat?.categoriesName === categoryName
  //     );

  //     const subcategoryItem = {
  //       subcategoriesName: item?.name,
  //       subcategoriesAmount: item?.price,
  //       subcategoriesType: categoryName,
  //       quantity: 1, // Set the quantity as per your need
  //       totalAmount: item?.price,
  //       totalItemTax: 0, // Replace this with your tax calculation
  //       discount: "", // Set any discount here if needed
  //       extraAddon: [], // Collect any add-ons if needed
  //     };

  //     if (existingCategoryIndex > -1) {
  //       // Category exists, add the subcategory to the existing category
  //       const updatedCategories = [...orderData?.categories];
  //       updatedCategories[existingCategoryIndex]?.subcategories?.push(
  //         subcategoryItem
  //       );
  //       setOrderData({ ...orderData, categories: updatedCategories });
  //       const response = await request(
  //         "POST",
  //         "/food-fusion/cashier/createMenu",
  //         { ...orderData, categories: updatedCategories }
  //       );
  //       console.log("response: ", response);
  //     } else {
  //       // Category doesn't exist, create a new one with the subcategory
  //       const newCategory = {
  //         categoriesName: categoryName,
  //         subcategories: [subcategoryItem],
  //       };
  //       setOrderData({
  //         ...orderData,
  //         categories: [...orderData.categories, newCategory],
  //       });

  //       const response = await request(
  //         "POST",
  //         "/food-fusion/cashier/createMenu",
  //         { ...orderData, categories: [...orderData?.categories, newCategory] }
  //       );
  //       console.log("response: ", response);
  //     }
  //   } catch (error) {}
  // };

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        {/* Search bar */}
        <div className="relative w-full">
          {/* <input
            type="text"
            // value={query}
            onChange={handleSearch}
            placeholder="Search items from menu"
            className="w-full px-4 py-2 bg-transparent border-0  rounded-lg shadow-sm focus:outline-none "
          /> */}

          {/* Suggestions dropdown */}
          {filteredOptions?.length >= 0 && (
            <ul
              ref={dropdownRef}
              className={`absolute left-0 top-[-20px] w-full auto-suggest overflow-y-scroll hidden-scroll bg-white border-t-0 rounded-lg rounded-t-none card-box-shadow z-10 ${
                showDropdown ? "" : ""
              }`}
            >
              <li className="h-4"></li>
              {filteredOptions?.map((option, index) => (
                <>
                  <li
                    key={index}
                    // onClick={() => handleOptionClick(option)}
                    className="ps-[10px] pe-5 mx-4 my-4 py-3 h-14 text-base flex justify-between items-center cursor-pointer border-b-2 hover:bg-[--select-section]"
                  >
                    {option?.name}
                    {FilterPrevOrdCustmId?.find(
                      (i) => i?.orderID == option?.id
                    ) ? (
                      <>
                        <IncrementDecrementFunctionality
                          ItemId={option?.id}
                          isOptionSelected={true}
                          prevCount={
                            FilterPrevOrdCustmId?.find(
                              (i) => i?.orderID == option?.id
                            )?.quantity
                          }
                          // GetQuantity={GetQuantity}
                        />
                      </>
                    ) : (
                      <button
                        onClick={() => HandleItemAdd(option)}
                        className={`"border-2 cashier-light-bg-color text-black px-5 py-1 rounded-md `}
                      >
                        ADD
                      </button>
                    )}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  MenuFromRedux: state?.menu,
});

export default connect(mapStateToProps, {})(AutoSuggestSearch);
