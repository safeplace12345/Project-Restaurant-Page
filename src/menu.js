import helper from "./helpers";
const URL = "/partials/menu.html";
const menu = [
  {
    restaurant: "Chipotle",
    foodItems: [
      {
        foodName: "Chicken Burrito",
        foodType: "Burrito",
        protein: "chicken",
        calories: 975,
      },
      {
        foodName: "Steak Burrito",
        foodType: "Burrito",
        protein: "steak",
        calories: 945,
      },
      {
        foodName: "Carnitas Burrito",
        foodType: "Burrito",
        protein: "carnitas",
        calories: 1005,
      },
      {
        foodName: "Barbacoa Burrito",
        foodType: "Burrito",
        protein: "barbacoa",
        calories: 965,
      },
      {
        foodName: "Chorizo Burrito",
        foodType: "Burrito",
        protein: "chorizo",
        calories: 1095,
      },
      {
        foodName: "Sofritas Burrito",
        foodType: "Burrito",
        protein: "sofritas",
        calories: 945,
      },
      {
        foodName: "Chicken Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 630,
      },
      {
        foodName: "Chicken Bowl",
        calories: 630,
      },
      {
        foodName: "Steak Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 600,
      },
      {
        foodName: "Steak Bowl",
        calories: 600,
      },
      {
        foodName: "Carnitas Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 660,
      },
      {
        foodName: "Carnitas Bowl",
        calories: 660,
      },
      {
        foodName: "Barbacoa Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 620,
      },
      {
        foodName: "Barbacoa Bowl",
        calories: 620,
      },
      {
        foodName: "Chorizo Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 750,
      },
      {
        foodName: "Chorizo Bowl",
        calories: 750,
      },
      {
        foodName: "Sofritas Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 600,
      },
      {
        foodName: "Sofritas Bowl",
        calories: 600,
      },
      {
        foodName: "Chicken Corn Tortilla Taco",
        foodType: "Taco",
        protein: "chicken",
        calories: 650,
      },
      {
        foodName: "Chicken Flour Tortilla Taco",
        foodType: "Taco",
        protein: "chicken",
        calories: 700,
      },
      {
        foodName: "Steak Corn Tortilla Taco",
        foodType: "Taco",
        protein: "steak",
        calories: 620,
      },
      {
        foodName: "Steak Flour Tortilla Taco",
        foodType: "Taco",
        protein: "steak",
        calories: 670,
      },
      {
        foodName: "Carnitas Corn Tortilla Taco",
        foodType: "Taco",
        protein: "carnitas",
        calories: 680,
      },
      {
        foodName: "Carnitas Flour Tortilla Taco",
        foodType: "Taco",
        protein: "carnitas",
        calories: 730,
      },
      {
        foodName: "Barbacoa Corn Tortilla Taco",
        foodType: "Taco",
        protein: "barbacoa",
        calories: 640,
      },
      {
        foodName: "Barbacoa Flour Tortilla Taco",
        foodType: "Taco",
        protein: "barbacoa",
        calories: 690,
      },
      {
        foodName: "Chorizo Corn Tortilla Taco",
        foodType: "Taco",
        protein: "chorizo",
        calories: 770,
      },
      {
        foodName: "Chorizo Flour Tortilla Taco",
        foodType: "Taco",
        protein: "chorizo",
        calories: 820,
      },
      {
        foodName: "Sofritas Corn Tortilla Taco",
        foodType: "Taco",
        protein: "sofritas",
        calories: 620,
      },
      {
        foodName: "Sofritas Flour Tortilla Taco",
        foodType: "Taco",
        protein: "sofritas",
        calories: 670,
      },
      {
        foodName: "Chicken Salad",
        calories: 345,
        foodType: "Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Steak Salad",
        calories: 315,
        foodType: "Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Carnitas Salad",
        calories: 375,
        foodType: "Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Barbacoa Salad",
        calories: 335,
        foodType: "Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Chorizo Salad",
        calories: 465,
        foodType: "Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Chicken Quesadilla",
        calories: 610,
        foodType: "Quesadilla",
      },
      {
        foodName: "Steak Quesadilla",
        calories: 550,
        foodType: "Quesadilla",
      },
      {
        foodName: "Carnitas Quesadilla",
        calories: 640,
        foodType: "Quesadilla",
      },
      {
        foodName: "Cheese Quesadilla",
        calories: 430,
        foodType: "Quesadilla",
      },
      {
        foodName: "Kids Chicken Taco",
        calories: 205,
      },
      {
        foodName: "Kids Steak Taco",
        calories: 200,
      },
      {
        foodName: "Chips",
        calories: 540,
        sideItem: true,
      },
      {
        foodName: "Chips and Salsa",
        calories: 570,
        sideItem: true,
      },
      {
        foodName: "Chips and Guacamole",
        calories: 770,
        sideItem: true,
      },
      {
        foodName: "Chips and Queso",
        calories: 770,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Panera",
    foodItems: [
      {
        foodName: "BBQ Chicken Flatbread",
        foodType: "Sandwich",
        calories: 380,
        carbs: 41,
      },
      {
        foodName: "Chicken Flatbread",
        calories: 380,
        correctedTerm: "BBQ Chicken Flatbread",
        carbs: 41,
      },
      {
        foodName: "Tomato Mozzarella Flatbread",
        calories: 350,
        carbs: 35,
      },
      {
        foodName: "Roasted Turkey Cranberry Flatbread",
        calories: 310,
        carbs: 36,
      },
      {
        foodName: "Turkey Cranberry Flatbread",
        calories: 310,
        carbs: 36,
      },
      {
        foodName: "Half Size Italian on Hoagie Roll",
        calories: 440,
        carbs: 38,
      },
      {
        foodName: "Half Italian",
        calories: 440,
        correctedTerm: "Half Size Italian on Hoagie Roll",
        carbs: 38,
      },
      {
        foodName: "Italian",
        calories: 880,
        correctedTerm: "Italian on Hoagie Roll",
        carbs: 75,
      },
      {
        foodName: "Italian on Hoagie Roll",
        calories: 880,
        carbs: 75,
      },
      {
        foodName: "Steak and White Cheddar Panini",
        calories: 940,
        carbs: 79,
      },
      {
        foodName: "Steak and Cheddar Panini",
        foodType: "Sandwich",
        calories: 940,
        carbs: 79,
      },
      {
        foodName: "Steak Panini",
        calories: 940,
        correctedTerm: "Steak & White Cheddar Panini on Hoagie Roll",
        carbs: 79,
      },
      {
        foodName: "Steak & White Cheddar Panini on Hoagie Roll",
        calories: 940,
        carbs: 79,
      },
      {
        foodName: "Half Steak Panini",
        calories: 470,
        correctedTerm: "Half Size Steak & White Cheddar Panini on Hoagie Roll",
        carbs: 40,
      },
      {
        foodName: "Half Size Steak & White Cheddar Panini on Hoagie Roll",
        calories: 470,
        carbs: 40,
      },
      {
        foodName: "Chicken Panini",
        calories: 750,
        correctedTerm: "Frontega Chicken Panini on Focaccia",
        carbs: 85,
      },
      {
        foodName: "Half Chicken Panini",
        calories: 380,
        correctedTerm: "Half Size Chicken Panini",
        carbs: 42,
      },
      {
        foodName: "Half Size Chicken Panini",
        calories: 380,
        carbs: 42,
      },
      {
        foodName: "Frontega Chicken Panini on Focaccia",
        calories: 750,
        carbs: 85,
      },
      {
        foodName: "Half Turkey Sandwich",
        calories: 280,
        correctedTerm: "Half Size Turkey Breast Sandwich",
        carbs: 32,
      },
      {
        foodName: "Half Size Turkey Breast Sandwich",
        calories: 280,
        carbs: 32,
      },
      {
        foodName: "Turkey Sandwich",
        foodType: "Sandwich",
        calories: 560,
        correctedTerm: "Turkey Breast Sandwich",
        carbs: 65,
      },
      {
        foodName: "Turkey Breast Sandwich",
        calories: 560,
        carbs: 65,
      },
      {
        foodName: "Grilled Cheese",
        calories: 640,
        correctedTerm: "Classic Grilled Cheese",
        carbs: 73,
      },
      {
        foodName: "Classic Grilled Cheese",
        calories: 640,
        carbs: 73,
      },
      {
        foodName: "Half Size Classic Grilled Cheese",
        calories: 320,
        carbs: 37,
      },
      {
        foodName: "Half Grilled Cheese",
        calories: 320,
        correctedTerm: "Half Size Classic Grilled Cheese",
        carbs: 37,
      },
      {
        foodName: "Chicken Salad Sandwich",
        calories: 700,
        carbs: 90,
      },
      {
        foodName: "Veggie Sandwich",
        calories: 440,
        carbs: 65,
      },
      {
        foodName: "Mediterranean Veggie Sandwich",
        foodType: "Sandwich",
        calories: 440,
        carbs: 65,
      },
      {
        foodName: "Mediterranean Sandwich",
        calories: 440,
        carbs: 65,
      },
      {
        foodName: "Ancient Grain Greek Salad",
        foodType: "Salad",
        calories: 400,
        carbs: 38,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Modern Greek Salad with Quinoa",
        foodType: "Salad",
        calories: 530,
        carbs: 29,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Greek Salad",
        foodType: "Salad",
        calories: 400,
        carbs: 13,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Seasonal Greens Salad",
        foodType: "Salad",
        calories: 180,
        carbs: 20,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Chicken Tortellini Alfredo",
        calories: 750,
        carbs: 68,
      },
      {
        foodName: "Macaroni and Cheese",
        calories: 470,
        carbs: 36,
      },
      {
        foodName: "Mac and Cheese",
        calories: 470,
        correctedTerm: "Small Mac and Cheese",
        carbs: 36,
      },
      {
        foodName: "Mac & Cheese",
        calories: 470,
        correctedTerm: "Small Mac and Cheese",
        carbs: 36,
      },
      {
        foodName: "Small Mac and Cheese",
        calories: 470,
        carbs: 36,
      },
      {
        foodName: "Kids Mac and Cheese",
        calories: 470,
        carbs: 36,
      },
      {
        foodName: "Large Mac and Cheese",
        calories: 950,
        carbs: 71,
      },
      {
        foodName: "Mac and Cheese Breadbowl",
        calories: 1140,
        carbs: 166,
      },
      {
        foodName: "Apple",
        calories: 80,
        sideItem: true,
        carbs: 21,
      },
      {
        foodName: "Roll",
        calories: 190,
        sideItem: true,
        carbs: 32,
      },
      {
        foodName: "Baguette",
        calories: 180,
        sideItem: true,
        carbs: 36,
      },
      {
        foodName: "French Baguette",
        calories: 180,
        sideItem: true,
        carbs: 36,
      },
      {
        foodName: "Chips",
        calories: 150,
        sideItem: true,
        carbs: 17,
      },
      {
        foodName: "Kettle Chips",
        calories: 150,
        sideItem: true,
        carbs: 17,
      },
      {
        foodName: "Vegetarian Autumn Squash Soup",
        calories: 340,
        sideItem: true,
        correctedTerm: "Bowl of Vegetarian Autumn Squash Soup",
        carbs: 44,
      },
      {
        foodName: "Autumn Squash Soup",
        foodType: "Soup",
        calories: 340,
        sideItem: true,
        correctedTerm: "Bowl of Vegetarian Autumn Squash Soup",
        carbs: 44,
      },
      {
        foodName: "Bowl of Vegetarian Autumn Squash Soup",
        calories: 340,
        sideItem: true,
        carbs: 44,
      },
      {
        foodName: "Cup of Vegetarian Autumn Squash Soup",
        calories: 230,
        sideItem: true,
        carbs: 29,
      },
      {
        foodName: "Turkey Chili",
        foodType: "Soup",
        calories: 260,
        sideItem: true,
        correctedTerm: "Bowl of Turkey Chili",
        carbs: 32,
      },
      {
        foodName: "Bowl of Turkey Chili",
        calories: 260,
        sideItem: true,
        carbs: 32,
      },
      {
        foodName: "Cup of Turkey Chili",
        calories: 170,
        sideItem: true,
        carbs: 21,
      },
      {
        foodName: "Cream of Chicken & Wild Rice Soup",
        foodType: "Soup",
        calories: 260,
        sideItem: true,
        correctedTerm: "Bowl of Cream of Chicken & Wild Rice Soup",
        carbs: 27,
      },
      {
        foodName: "Bowl of Cream of Chicken & Wild Rice Soup",
        sideItem: true,
        calories: 260,
        carbs: 27,
      },
      {
        foodName: "Cup of Cream of Chicken & Wild Rice Soup",
        sideItem: true,
        calories: 180,
        carbs: 18,
      },
      {
        foodName: "Chicken Noodle Soup",
        foodType: "Soup",
        sideItem: true,
        calories: 160,
        correctedTerm: "Bowl of Chicken Noodle Soup",
        carbs: 19,
      },
      {
        foodName: "Bowl of Chicken Noodle Soup",
        calories: 160,
        sideItem: true,
        carbs: 19,
      },
      {
        foodName: "Cup of Chicken Noodle Soup",
        calories: 110,
        sideItem: true,
        carbs: 13,
      },
      {
        foodName: "Baked Potato Soup",
        foodType: "Soup",
        calories: 330,
        sideItem: true,
        carbs: 33,
      },
      {
        foodName: "Potato Soup",
        calories: 330,
        sideItem: true,
        carbs: 33,
      },
      {
        foodName: "New England Clam Chowder",
        foodType: "Soup",
        calories: 570,
        sideItem: true,
        carbs: 42,
      },
      {
        foodName: "Broccoli Cheddar Soup",
        foodType: "Soup",
        calories: 360,
        sideItem: true,
        carbs: 30,
      },
      {
        foodName: "Vegetarian Creamy Tomato Soup",
        calories: 280,
        sideItem: true,
        carbs: 36,
      },
      {
        foodName: "Creamy Tomato Soup",
        foodType: "Soup",
        calories: 280,
        sideItem: true,
        carbs: 36,
      },
      {
        foodName: "Tomato Soup",
        calories: 280,
        sideItem: true,
        carbs: 36,
      },
      {
        foodName: "French Onion Soup",
        foodType: "Soup",
        calories: 310,
        correctedTerm: "Bowl of French Onion Soup",
        sideItem: true,
        carbs: 35,
      },
      {
        foodName: "Bowl of French Onion Soup",
        calories: 310,
        sideItem: true,
        carbs: 35,
      },
      {
        foodName: "Cup of French Onion Soup",
        calories: 190,
        sideItem: true,
        carbs: 21,
      },
      {
        foodName: "Pecan Braid",
        calories: 470,
        foodType: "Breakfast",
        sideItem: true,
        carbs: 52,
      },
      {
        foodName: "Cheese Pastry",
        calories: 410,
        sideItem: true,
        carbs: 43,
      },
      {
        foodName: "Chocolate Pastry",
        calories: 420,
        sideItem: true,
        carbs: 46,
      },
      {
        foodName: "Cherry Pastry",
        calories: 460,
        sideItem: true,
        carbs: 58,
      },
      {
        foodName: "Bear Claw",
        calories: 540,
        foodType: "Pastry",
        sideItem: true,
        carbs: 59,
      },
      {
        foodName: "Cinnamon Roll",
        calories: 670,
        foodType: "Pastry",
        sideItem: true,
        carbs: 100,
      },
      {
        foodName: "Pecan Roll",
        calories: 720,
        foodType: "Pastry",
        sideItem: true,
        carbs: 69,
      },
      {
        foodName: "Cobblestone",
        calories: 560,
        foodType: "Pastry",
        sideItem: true,
        carbs: 102,
      },
      {
        foodName: "Blueberry Muffin",
        calories: 460,
        foodType: "Pastry",
        sideItem: true,
        carbs: 69,
      },
      {
        foodName: "Cranberry Orange Muffin",
        calories: 480,
        foodType: "Pastry",
        sideItem: true,
        carbs: 71,
      },
      {
        foodName: "Apple Crunch Muffin",
        calories: 450,
        foodType: "Pastry",
        sideItem: true,
        carbs: 80,
      },
      {
        foodName: "Pumpkin Muffin",
        calories: 580,
        foodType: "Pastry",
        sideItem: true,
        carbs: 90,
      },
      {
        foodName: "Chocolate Chip Muffie",
        calories: 320,
        foodType: "Pastry",
        sideItem: true,
        carbs: 46,
      },
      {
        foodName: "Pumpkin Muffie",
        calories: 290,
        foodType: "Pastry",
        sideItem: true,
        carbs: 90,
      },
      {
        foodName: "Steak and Egg Sandwich",
        foodType: "Breakfast",
        calories: 540,
        carbs: 59,
      },
      {
        foodName: "Ham Egg and Cheese Sandwich",
        calories: 340,
        carbs: 30,
      },
      {
        foodName: "Sausage Egg and Cheese Sandwich",
        calories: 550,
        carbs: 44,
      },
      {
        foodName: "Bacon Egg and Cheese Sandwich",
        calories: 490,
        carbs: 44,
      },
      {
        foodName: "Asiago Bacon Egg and Cheese Sandwich",
        calories: 580,
        carbs: 56,
      },
      {
        foodName: "Egg and Cheese Sandwich",
        calories: 390,
        carbs: 43,
      },
      {
        foodName: "Avocado Egg White and Spinach Sandwich",
        foodType: "Breakfast",
        calories: 410,
        carbs: 52,
      },
      {
        foodName: "Mediterranean Egg White Sandwich",
        calories: 410,
        carbs: 47,
      },
      {
        foodName: "Turkey Sausage Egg White and Spinach Sandwich",
        calories: 410,
        carbs: 50,
      },
      {
        foodName: "Oatmeal",
        calories: 300,
        foodType: "Breakfast",
        sideItem: true,
        carbs: 53,
      },
      {
        foodName: "Oatmeal with Apple",
        calories: 370,
        sideItem: true,
        carbs: 53,
      },
      {
        foodName: "Oatmeal with Strawberries",
        calories: 340,
        sideItem: true,
        carbs: 51,
      },
      {
        foodName: "Oatmeal with Almonds",
        calories: 300,
        sideItem: true,
        carbs: 52,
      },
      {
        foodName: "Greek Yogurt",
        calories: 300,
        foodType: "Breakfast",
        sideItem: true,
        carbs: 40,
      },
      {
        foodName: "Fruit Cup",
        calories: 60,
        sideItem: true,
        carbs: 17,
      },
    ],
  },
  {
    restaurant: "Burger King",
    foodItems: [
      {
        foodName: "Whopper",
        foodType: "Burger",
        calories: 660,
      },
      {
        foodName: "Whooper",
        calories: 660,
        correctedTerm: "Whopper",
      },
      {
        foodName: "Whopper Sandwich",
        calories: 660,
        correctedTerm: "Whopper",
      },
      {
        foodName: "Whopper with Cheese",
        calories: 740,
      },
      {
        foodName: "Whooper with Cheese",
        calories: 740,
      },
      {
        foodName: "Bacon and Cheese Whopper",
        calories: 790,
      },
      {
        foodName: "Bacon Double Cheeseburger",
        calories: 370,
      },
      {
        foodName: "Double Bacon Burger",
        calories: 370,
        correctedTerm: "Bacon Double Cheeseburger",
      },
      {
        foodName: "Double Whopper",
        foodType: "Burger",
        calories: 900,
      },
      {
        foodName: "Double Whopper with Cheese",
        calories: 980,
      },
      {
        foodName: "Triple Whopper",
        calories: 1130,
      },
      {
        foodName: "Triple Whopper with Cheese",
        calories: 1210,
      },
      {
        foodName: "Bacon King",
        calories: 1150,
      },
      {
        foodName: "Double Whopper Bacon King",
        calories: 1150,
        correctedTerm: "Bacon King",
      },
      {
        foodName: "Farmhouse King",
        calories: 1220,
      },
      {
        foodName: "Farmhouse",
        calories: 1220,
      },
      {
        foodName: "Rodeo King",
        calories: 1250,
      },
      {
        foodName: "Rodeo Burger",
        calories: 1250,
      },
      {
        foodName: "Big King",
        calories: 530,
      },
      {
        foodName: "Junior Whopper",
        calories: 310,
        correctedTerm: "Whopper Jr",
      },
      {
        foodName: "Whopper Junior",
        calories: 310,
        correctedTerm: "Whopper Jr",
      },
      {
        foodName: "Jr Whopper",
        calories: 310,
        correctedTerm: "Whopper Jr",
      },
      {
        foodName: "Whopper Jr",
        foodType: "Burger",
        calories: 310,
      },
      {
        foodName: "Grilled Chicken Sandwich",
        calories: 470,
      },
      {
        foodName: "Grilled Chicken",
        foodType: "Chicken",
        calories: 470,
      },
      {
        foodName: "Crispy Chicken Sandwich",
        calories: 670,
      },
      {
        foodName: "Crispy Chicken",
        foodType: "Chicken",
        calories: 670,
      },
      {
        foodName: "Chicken Sandwich",
        calories: 660,
      },
      {
        foodName: "Original Chicken Sandwich",
        calories: 660,
      },
      {
        foodName: "Chicken Tendercrisp",
        calories: 640,
      },
      {
        foodName: "Crispy Chicken Junior",
        foodType: "Chicken",
        calories: 450,
      },
      {
        foodName: "Chicken Junior",
        calories: 450,
      },
      {
        foodName: "Chicken Jr",
        calories: 450,
      },
      {
        foodName: "Spicy Chicken Junior",
        calories: 390,
      },
      {
        foodName: "Spicy Chicken Jr",
        calories: 390,
      },
      {
        foodName: "Snickers Pie",
        calories: 300,
        sideItem: true,
      },
      {
        foodName: "Pie made with Snickers",
        calories: 300,
        sideItem: true,
      },
      {
        foodName: "Apple Pie",
        calories: 340,
        sideItem: true,
      },
      {
        foodName: "Dutch Apple Pie",
        calories: 340,
        sideItem: true,
      },
      {
        foodName: "4 Piece Chicken Nuggets",
        calories: 170,
      },
      {
        foodName: "6 Piece Chicken Nuggets",
        calories: 260,
      },
      {
        foodName: "10 Piece Chicken Nuggets",
        calories: 430,
      },
      {
        foodName: "20 Piece Chicken Nuggets",
        calories: 860,
      },
      {
        foodName: "10 Piece Spicy Nuggets",
        calories: 530,
      },
      {
        foodName: "Ten Piece Spicy Nuggets",
        calories: 530,
      },
      {
        foodName: "10 Spicy Nuggets",
        calories: 530,
      },
      {
        foodName: "Ten Spicy Nuggets",
        calories: 530,
      },
      {
        foodName: "Spicy 10 Piece Nuggets",
        calories: 530,
      },
      {
        foodName: "Spicy Chicken Nuggets",
        calories: 530,
      },
      {
        foodName: "Spicy Nuggets",
        calories: 530,
      },
      {
        foodName: "Big Fish Sandwich",
        calories: 510,
      },
      {
        foodName: "Veggie Burger",
        calories: 390,
      },
      {
        foodName: "BK Veggie Burger",
        calories: 390,
      },
      {
        foodName: "Classic Grilled Dog",
        calories: 310,
      },
      {
        foodName: "Grilled Hot Dog",
        calories: 310,
      },
      {
        foodName: "Grilled Dog",
        calories: 310,
      },
      {
        foodName: "Hot Dog",
        calories: 310,
      },
      {
        foodName: "Chili Cheese Grilled Dog",
        calories: 330,
      },
      {
        foodName: "Grilled Chili Cheese Hot Dog",
        calories: 330,
      },
      {
        foodName: "Grilled Chili Cheese Dog",
        calories: 330,
      },
      {
        foodName: "Chili Cheese Hot Dog",
        calories: 330,
      },
      {
        foodName: "Chicken Fries",
        calories: 290,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 380,
        correctedTerm: "Medium Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fries",
        calories: 380,
        correctedTerm: "Medium Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fries",
        calories: 380,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fri",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fries",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Value Fries",
        calories: 220,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 430,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fry",
        calories: 380,
        correctedTerm: "Medium Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fry",
        calories: 380,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fry",
        calories: 380,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fry",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Value Fry",
        calories: 220,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fry",
        calories: 430,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Onion Rings",
        calories: 410,
        correctedTerm: "Medium Onion Rings",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Onion Rings",
        calories: 410,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Value Onion Rings",
        calories: 150,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Onion Rings",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Onion Rings",
        calories: 500,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Side Salad",
        calories: 60,
        sideItem: true,
      },
      {
        foodName: "Egg and Cheese Croissanwich",
        foodType: "Breakfast",
        calories: 300,
        breakfastItem: true,
      },
      {
        foodName: "Egg and Cheese Croissandwich",
        calories: 300,
        breakfastItem: true,
        correctedTerm: "Egg and Cheese Croissanwich",
      },
      {
        foodName: "Sausage Egg and Cheese Croissanwich",
        foodType: "Breakfast",
        calories: 470,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg and Cheese Croissandwich",
        calories: 470,
        breakfastItem: true,
        correctedTerm: "Sausage Egg and Cheese Croissanwich",
      },
      {
        foodName: "Ham Egg and Cheese Croissanwich",
        foodType: "Breakfast",
        calories: 330,
        breakfastItem: true,
      },
      {
        foodName: "Ham Egg and Cheese Croissandwich",
        calories: 330,
        breakfastItem: true,
        correctedTerm: "Ham Egg and Cheese Croissanwich",
      },
      {
        foodName: "Bacon Egg and Cheese Croissanwich",
        foodType: "Breakfast",
        calories: 340,
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese Croissandwich",
        calories: 340,
        breakfastItem: true,
        correctedTerm: "Bacon Egg and Cheese Croissanwich",
      },
      {
        foodName: "Fully Loaded Croissanwich",
        foodType: "Breakfast",
        calories: 610,
        breakfastItem: true,
      },
      {
        foodName: "Fully Loaded Croissandwich",
        calories: 610,
        breakfastItem: true,
        correctedTerm: "Fully Loaded Croissanwich",
      },
      {
        foodName: "Double Sausage King Croissanwich",
        foodType: "Breakfast",
        calories: 700,
        breakfastItem: true,
      },
      {
        foodName: "Double Sausage King Croissandwich",
        calories: 700,
        breakfastItem: true,
        correctedTerm: "Double Sausage King Croissanwich",
      },
      {
        foodName: "King Croissanwich",
        calories: 700,
        breakfastItem: true,
        correctedTerm: "Double Sausage King Croissanwich",
      },
      {
        foodName: "Sausage and Bacon King Croissanwich",
        calories: 580,
        breakfastItem: true,
      },
      {
        foodName: "Sausage and Bacon King Croissandwich",
        calories: 580,
        breakfastItem: true,
        correctedTerm: "Sausage and Bacon King Croissanwich",
      },
      {
        foodName: "Ham and Sausage King Croissanwich",
        calories: 530,
        breakfastItem: true,
      },
      {
        foodName: "Ham and Sausage King Croissandwich",
        calories: 530,
        breakfastItem: true,
        correctedTerm: "Ham and Sausage King Croissanwich",
      },
      {
        foodName: "Sausage Biscuit",
        calories: 390,
        breakfastItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Biscuit",
        calories: 390,
        breakfastItem: true,
        correctedTerm: "Sausage Biscuit",
      },
      {
        foodName: "Ham Egg and Cheese Biscuit",
        calories: 370,
        breakfastItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Sausage Egg and Cheese Biscuit",
        calories: 510,
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese Biscuit",
        calories: 380,
        breakfastItem: true,
      },
      {
        foodName: "Fully Loaded Biscuit",
        calories: 610,
        breakfastItem: true,
      },
      {
        foodName: "Cinnamon Roll",
        calories: 280,
        breakfastItem: true,
        sideItem: true,
      },
      {
        foodName: "Hash Browns",
        calories: 250,
        breakfastItem: true,
        sideItem: true,
        correctedTerm: "Small Hash Browns",
      },
      {
        foodName: "Small Hash Browns",
        calories: 250,
        breakfastItem: true,
        sideItem: true,
      },
      {
        foodName: "Medium Hash Browns",
        calories: 500,
        breakfastItem: true,
        sideItem: true,
      },
      {
        foodName: "Large Hash Browns",
        calories: 670,
        breakfastItem: true,
        sideItem: true,
      },
      {
        foodName: "French Toast Sticks",
        calories: 230,
        breakfastItem: true,
      },
    ],
  },
  {
    restaurant: "Subway",
    foodItems: [
      {
        foodName: "Black Forest Ham",
        calories: 290,
        correctedTerm: "6 inch Black Forest Ham",
      },
      {
        foodName: "Black Forrest Ham",
        calories: 290,
        correctedTerm: "6 inch Black Forest Ham",
      },
      {
        foodName: "Six inch Black Forest Ham",
        calories: 290,
      },
      {
        foodName: "6 inch Black Forest Ham",
        foodType: "Six inch",
        calories: 290,
      },
      {
        foodName: "12 inch Black Forest Ham",
        calories: 580,
      },
      {
        foodName: "Footlong Black Forest Ham",
        foodType: "Footlong",
        calories: 580,
      },
      {
        foodName: "Oven Roasted Chicken",
        calories: 320,
      },
      {
        foodName: "6 inch Oven Roasted Chicken",
        foodType: "Six inch",
        calories: 320,
      },
      {
        foodName: "Six inch Oven Roasted Chicken",
        calories: 320,
      },
      {
        foodName: "12 inch Oven Roasted Chicken",
        calories: 640,
      },
      {
        foodName: "Footlong Oven Roasted Chicken",
        foodType: "Footlong",
        calories: 640,
      },
      {
        foodName: "6 inch Roast Beef",
        foodType: "Six inch",
        calories: 320,
      },
      {
        foodName: "Six inch Roast Beef",
        calories: 320,
      },
      {
        foodName: "12 inch Roast Beef",
        calories: 640,
      },
      {
        foodName: "Footlong Roast Beef",
        foodType: "Footlong",
        calories: 640,
      },
      {
        foodName: "Rotisserie-Style Chicken",
        calories: 350,
      },
      {
        foodName: "Roasted Chicken",
        calories: 350,
      },
      {
        foodName: "Rotisserie Chicken",
        foodType: "Chicken",
        calories: 350,
      },
      {
        foodName: "6 inch Rotisserie Chicken",
        foodType: "Six inch",
        calories: 350,
      },
      {
        foodName: "Six inch Rotisserie Chicken",
        calories: 350,
      },
      {
        foodName: "12 inch Rotisserie Chicken",
        calories: 700,
      },
      {
        foodName: "Footlong Rotisserie Chicken",
        foodType: "Footlong",
        calories: 700,
      },
      {
        foodName: "Rotisserie Chicken Sandwich",
        calories: 350,
      },
      {
        foodName: "Subway Club",
        calories: 310,
        correctedTerm: "6 inch Subway Club",
      },
      {
        foodName: "6 inch Subway Club",
        foodType: "Six inch",
        calories: 310,
      },
      {
        foodName: "12 inch Subway Club",
        calories: 620,
      },
      {
        foodName: "Footlong Subway Club",
        calories: 620,
      },
      {
        foodName: "Chicken Teriyaki",
        calories: 370,
        correctedTerm: "6 inch Sweet Onion Chicken Teriyaki",
      },
      {
        foodName: "6 inch Chicken Teriyaki",
        calories: 370,
        correctedTerm: "6 inch Sweet Onion Chicken Teriyaki",
      },
      {
        foodName: "Sweet Onion Chicken Teriyaki",
        calories: 370,
        correctedTerm: "6 inch Sweet Onion Chicken Teriyaki",
      },
      {
        foodName: "6 inch Sweet Onion Chicken Teriyaki",
        foodType: "Six inch",
        calories: 370,
      },
      {
        foodName: "12 inch Sweet Onion Chicken Teriyaki",
        calories: 740,
      },
      {
        foodName: "Footlong Teriyaki Chicken",
        calories: 740,
      },
      {
        foodName: "Footlong Sweet Onion Chicken Teriyaki",
        calories: 740,
      },
      {
        foodName: "Turkey Breast",
        foodType: "Turkey",
        calories: 280,
        correctedTerm: "6 inch Turkey Breast",
      },
      {
        foodName: "6 inch Turkey and Cheese",
        calories: 280,
      },
      {
        foodName: "Six inch Turkey and Cheese",
        calories: 280,
      },
      {
        foodName: "6 inch Turkey Breast",
        foodType: "Six inch",
        calories: 280,
      },
      {
        foodName: "12 inch Turkey Breast",
        calories: 560,
      },
      {
        foodName: "Footlong Turkey Breast",
        calories: 560,
      },
      {
        foodName: "Foot long Turkey",
        calories: 560,
        correctedTerm: "Footlong Turkey Breast",
      },
      {
        foodName: "Veggie Delite",
        calories: 280,
        correctedTerm: "6 inch Veggie Delite",
      },
      {
        foodName: "Veggie Delight",
        calories: 280,
        correctedTerm: "6 inch Veggie Delite",
      },
      {
        foodName: "6 inch Veggie Delite",
        foodType: "Six inch",
        calories: 280,
      },
      {
        foodName: "Six inch Veggie Delite",
        calories: 280,
        correctedTerm: "6 inch Veggie Delite",
      },
      {
        foodName: "6 inch Veggie Delight",
        calories: 280,
        correctedTerm: "6 inch Veggie Delite",
      },
      {
        foodName: "12 inch Veggie Delite",
        calories: 560,
      },
      {
        foodName: "Footlong Veggie Delite",
        calories: 560,
      },
      {
        foodName: "Carved Turkey",
        foodType: "Turkey",
        calories: 330,
      },
      {
        foodName: "6 inch Carved Turkey",
        foodType: "Turkey",
        calories: 330,
      },
      {
        foodName: "12 inch Carved Turkey",
        foodType: "Turkey",
        calories: 660,
      },
      {
        foodName: "Footlong Carved Turkey",
        foodType: "Turkey",
        calories: 660,
      },
      {
        foodName: "Chicken and Bacon Ranch Melt",
        foodType: "Chicken",
        calories: 590,
      },
      {
        foodName: "Chicken Bacon Ranch Melt",
        foodType: "Chicken",
        calories: 590,
      },
      {
        foodName: "Cold Cut Combo",
        calories: 340,
      },
      {
        foodName: "Cold Cut",
        calories: 340,
      },
      {
        foodName: "6 inch Cold Cut Combo",
        foodType: "Six inch",
        calories: 340,
      },
      {
        foodName: "12 inch Cold Cut Combo",
        calories: 680,
      },
      {
        foodName: "Footlong Cold Cut Combo",
        calories: 680,
      },
      {
        foodName: "Italian BMT",
        calories: 390,
        correctedTerm: "6 inch Italian BMT",
      },
      {
        foodName: "BMT",
        calories: 390,
        correctedTerm: "6 inch Italian BMT",
      },
      {
        foodName: "6 inch Italian BMT",
        foodType: "Six inch",
        calories: 390,
      },
      {
        foodName: "12 inch Italian BMT",
        calories: 780,
      },
      {
        foodName: "Footlong Italian BMT",
        calories: 780,
      },
      {
        foodName: "Meatball Marinara",
        calories: 460,
      },
      {
        foodName: "6 inch Meatball Marinara",
        calories: 460,
      },
      {
        foodName: "12 inch Meatball Marinara",
        calories: 920,
      },
      {
        foodName: "Footlong Meatball Marinara",
        calories: 920,
      },
      {
        foodName: "Meatball Sub",
        calories: 460,
        correctedTerm: "6 inch Meatball Sub",
      },
      {
        foodName: "6 inch Meatball Sub",
        calories: 460,
      },
      {
        foodName: "6 inch Meatball",
        calories: 460,
        correctedTerm: "6 inch Meatball Sub",
      },
      {
        foodName: "12 inch Meatball Sub",
        calories: 920,
      },
      {
        foodName: "Footlong Meatball Sub",
        calories: 920,
      },
      {
        foodName: "Spicy Italian",
        calories: 470,
        correctedTerm: "6 inch Spicy Italian",
      },
      {
        foodName: "6 inch Spicy Italian",
        calories: 470,
      },
      {
        foodName: "12 inch Spicy Italian",
        calories: 940,
      },
      {
        foodName: "Footlong Spicy Italian",
        calories: 940,
      },
      {
        foodName: "Spicy Italian Footlong",
        calories: 940,
        correctedTerm: "Footlong Spicy Italian",
      },
      {
        foodName: "Spicy Italian Sub",
        calories: 470,
      },
      {
        foodName: "Steak and Cheese",
        calories: 470,
        correctedTerm: "6 inch Steak and Cheese",
      },
      {
        foodName: "Philly Cheese Steak",
        calories: 470,
        correctedTerm: "6 inch Steak and Cheese",
      },
      {
        foodName: "6 inch Steak and Cheese",
        calories: 470,
      },
      {
        foodName: "12 inch Steak and Cheese",
        calories: 940,
      },
      {
        foodName: "Footlong Steak and Cheese",
        calories: 940,
      },
      {
        foodName: "Tuna",
        calories: 470,
      },
      {
        foodName: "6 inch Tuna",
        calories: 470,
      },
      {
        foodName: "12 inch Tuna",
        calories: 940,
      },
      {
        foodName: "Footlong Tuna",
        calories: 940,
      },
      {
        foodName: "Italian Hero",
        calories: 550,
      },
      {
        foodName: "6 inch Italian Hero",
        calories: 550,
      },
      {
        foodName: "12 inch Italian Hero",
        calories: 1100,
      },
      {
        foodName: "Footlong Italian Hero",
        calories: 1100,
      },
      {
        foodName: "Black Forest Ham Salad",
        calories: 110,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Oven Roasted Chicken Salad",
        calories: 150,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Roast Beef Salad",
        foodType: "Salad",
        calories: 140,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Rotisserie-Style Chicken Salad",
        calories: 170,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Rotisserie Chicken Salad",
        foodType: "Salad",
        calories: 170,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Subway Club Salad",
        calories: 140,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Sweet Onion Chicken Teriyaki Salad",
        calories: 230,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Turkey Breast Salad",
        foodType: "Salad",
        calories: 110,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Veggie Delite Salad",
        foodType: "Salad",
        calories: 60,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Bacon, Egg & Cheese",
        calories: 460,
      },
      {
        foodName: "Bacon, Egg & Cheese Sandwich",
        calories: 460,
      },
      {
        foodName: "Ham, Egg & Cheese",
        calories: 410,
      },
      {
        foodName: "Ham, Egg & Cheese Sandwich",
        calories: 410,
      },
      {
        foodName: "Black Forest Ham, Egg & Cheese",
        calories: 410,
      },
      {
        foodName: "Black Forest Ham, Egg & Cheese Sandwich",
        calories: 410,
      },
      {
        foodName: "Egg & Cheese",
        calories: 380,
      },
      {
        foodName: "Egg & Cheese Sandwich",
        calories: 380,
      },
      {
        foodName: "Steak, Egg & Cheese",
        calories: 450,
      },
      {
        foodName: "Steak, Egg & Cheese Sandwich",
        calories: 450,
      },
      {
        foodName: "Salt and Vinegar Chips",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Baked BBQ",
        calories: 130,
        sideItem: true,
      },
      {
        foodName: "Baked BBQ Chips",
        calories: 130,
        sideItem: true,
      },
      {
        foodName: "Baked Barbeque",
        calories: 130,
        sideItem: true,
      },
      {
        foodName: "Baked Barbeque Chips",
        calories: 130,
        sideItem: true,
      },
      {
        foodName: "Chips",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Apple Slices",
        calories: 35,
        sideItem: true,
      },
      {
        foodName: "Apple",
        calories: 35,
        sideItem: true,
        correctedTerm: "Apple Slices",
      },
      {
        foodName: "Potato Chips",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Potato Chip",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Lays Potato Chips",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Doritos",
        calories: 140,
        sideItem: true,
      },
      {
        foodName: "Doritos Nacho Cheese Tortilla Chips",
        calories: 140,
        sideItem: true,
      },
      {
        foodName: "Cheetos",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Hot Cheetos",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Beef Chili with Beans",
        foodType: "Soup",
        calories: 360,
        sideItem: true,
      },
      {
        foodName: "Black Bean Soup",
        foodType: "Soup",
        calories: 210,
        sideItem: true,
      },
      {
        foodName: "Broccoli Cheddar Soup",
        foodType: "Soup",
        calories: 170,
        sideItem: true,
      },
      {
        foodName: "Chicken Tortilla Soup",
        calories: 110,
        sideItem: true,
      },
      {
        foodName: "Creamy Chicken & Dumpling Soup",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Creamy Chicken & Wild Rice Soup",
        calories: 190,
        sideItem: true,
      },
      {
        foodName: "French Onion Soup",
        foodType: "Soup",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Homestyle Chicken Noodle Soup",
        calories: 110,
        sideItem: true,
      },
      {
        foodName: "Chicken Noodle Soup",
        calories: 110,
        sideItem: true,
      },
      {
        foodName: "Loaded Baked Potato with Bacon Soup",
        calories: 210,
        sideItem: true,
      },
      {
        foodName: "Tomato Basil Soup",
        foodType: "Soup",
        calories: 130,
        sideItem: true,
      },
      {
        foodName: "Raspberry Cheesecake Cookie",
        calories: 200,
        sideItem: true,
      },
      {
        foodName: "White Chip Macadamian Nut Cookie",
        calories: 220,
        sideItem: true,
      },
      {
        foodName: "Chocolate Chunk Cookie",
        calories: 210,
        sideItem: true,
      },
      {
        foodName: "Double Chocolate Cookie",
        calories: 210,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Chick-fil-A",
    foodItems: [
      {
        foodName: "Chicken Sandwich",
        foodType: "Chicken",
        calories: 440,
      },
      {
        foodName: "Chicken Deluxe Sandwich",
        calories: 500,
      },
      {
        foodName: "Chicken Deluxe",
        foodType: "Chicken",
        calories: 500,
      },
      {
        foodName: "Spicy Chicken Deluxe Sandwich",
        calories: 570,
      },
      {
        foodName: "Spicy Chicken Deluxe",
        foodType: "Chicken",
        calories: 570,
      },
      {
        foodName: "Spicy Deluxe",
        calories: 570,
      },
      {
        foodName: "Spicy Deluxe Sandwich",
        calories: 570,
      },
      {
        foodName: "Spicy Deluxe Chicken Sandwich",
        calories: 570,
      },
      {
        foodName: "Chicken Salad Sandwich",
        foodType: "Chicken",
        calories: 500,
      },
      {
        foodName: "Spicy Chicken Sandwich",
        calories: 490,
      },
      {
        foodName: "Spicy Chicken",
        foodType: "Chicken",
        calories: 490,
      },
      {
        foodName: "Grilled Chicken Sandwich",
        calories: 320,
      },
      {
        foodName: "Grilled Chicken",
        foodType: "Chicken",
        calories: 320,
      },
      {
        foodName: "Four count Chicken Strips",
        calories: 470,
      },
      {
        foodName: "4 count Chicken Strips",
        calories: 470,
      },
      {
        foodName: "Chick-n-Strips 4 count",
        calories: 470,
      },
      {
        foodName: "Chick-n-Strips four count",
        calories: 470,
      },
      {
        foodName: "Three count Chicken Strips",
        calories: 360,
      },
      {
        foodName: "3 count Chicken Strips",
        calories: 360,
      },
      {
        foodName: "Chick-n-Strips 3 count",
        calories: 360,
      },
      {
        foodName: "Chick-n-Strips three count",
        calories: 360,
      },
      {
        foodName: "Four piece Chicken Strips",
        calories: 470,
      },
      {
        foodName: "4 piece Chicken Strips",
        foodType: "Chicken Strips",
        calories: 470,
      },
      {
        foodName: "Chick-n-Strips 4 piece",
        calories: 470,
      },
      {
        foodName: "Chick-n-Strips four piece",
        calories: 470,
      },
      {
        foodName: "Three piece Chicken Strips",
        calories: 360,
      },
      {
        foodName: "3 piece Chicken Strips",
        foodType: "Chicken Strips",
        calories: 360,
      },
      {
        foodName: "Chick-n-Strips 3 piece",
        calories: 360,
      },
      {
        foodName: "Chick-n-Strips three piece",
        calories: 360,
      },
      {
        foodName: "Grilled Chicken Club Sandwich",
        calories: 440,
      },
      {
        foodName: "Grilled Chicken Club",
        calories: 440,
      },
      {
        foodName: "12 piece chicken nuggets",
        foodType: "Nuggets",
        calories: 400,
      },
      {
        foodName: "Grilled Chicken Cool Wrap",
        calories: 340,
      },
      {
        foodName: "Chicken Wrap",
        calories: 340,
        correctedTerm: "Grilled Chicken Cool Wrap",
      },
      {
        foodName: "Chicken Cool Wrap",
        calories: 340,
        correctedTerm: "Grilled Chicken Cool Wrap",
      },
      {
        foodName: "Cool Wrap",
        calories: 340,
        correctedTerm: "Grilled Chicken Cool Wrap",
      },
      {
        foodName: "Wrap",
        calories: 340,
        correctedTerm: "Grilled Chicken Cool Wrap",
      },
      {
        foodName: "Grilled Chicken Market Salad",
        calories: 470,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Grilled Market Salad",
        foodType: "Salad",
        calories: 470,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Market Salad",
        foodType: "Salad",
        calories: 470,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Cobb Salad",
        foodType: "Salad",
        calories: 510,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Spicy Southwest Salad",
        foodType: "Salad",
        calories: 470,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Southwest Salad",
        foodType: "Salad",
        calories: 450,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Side Salad",
        foodType: "Salad",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Waffle Potato Fries",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Waffle Fries",
        calories: 360,
        foodType: "Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Waffle Fries",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Waffles Fries",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Waffle Fries",
      },
      {
        foodName: "Fries",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Waffle Fries",
      },
      {
        foodName: "Large Fries",
        calories: 460,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Large Waffle Fries",
      },
      {
        foodName: "Large Waffle Fries",
        foodType: "Fries",
        calories: 460,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Waffle Potato Fries",
        calories: 460,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fries",
        calories: 280,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Waffle Fries",
        foodType: "Fries",
        calories: 280,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Chicken Soup",
        calories: 140,
        sideItem: true,
      },
      {
        foodName: "Small Chicken Noodle Soup",
        calories: 140,
        sideItem: true,
      },
      {
        foodName: "Chicken Soup",
        calories: 250,
        sideItem: true,
      },
      {
        foodName: "Chicken Noodle Soup",
        calories: 250,
        sideItem: true,
      },
      {
        foodName: "Large Chicken Soup",
        calories: 250,
        sideItem: true,
      },
      {
        foodName: "Large Chicken Noodle Soup",
        calories: 250,
        sideItem: true,
      },
      {
        foodName: "Chicken Biscuit",
        calories: 450,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Chicken Minis",
        calories: 350,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese Biscuit",
        calories: 420,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg and Cheese Biscuit",
        calories: 600,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Hash Browns",
        calories: 240,
        sideItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Fruit Cup",
        calories: 45,
        sideItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Buttered Biscuit",
        calories: 300,
        sideItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Greek Yogurt Parfait",
        calories: 230,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "McDonalds",
    foodItems: [
      {
        foodName: "Big Mac",
        foodType: "Burger",
        calories: 540,
      },
      {
        foodName: "Big Macs",
        calories: 540,
        correctedTerm: "Big Mac",
      },
      {
        foodName: "BigMac",
        calories: 540,
        correctedTerm: "Big Mac",
      },
      {
        foodName: "BigMc",
        calories: 540,
        correctedTerm: "Big Mac",
      },
      {
        foodName: "2 Big Macs",
        calories: 1080,
      },
      {
        foodName: "Quarter Pounder",
        foodType: "Burger",
        calories: 540,
        correctedTerm: "Quarter Pounder with Cheese",
      },
      {
        foodName: "Quarter Pounder Burger",
        calories: 540,
        correctedTerm: "Quarter Pounder with Cheese",
      },
      {
        foodName: "Quarter Pounder with Cheese",
        calories: 540,
      },
      {
        foodName: "Quarter Pound with Cheese",
        calories: 540,
      },
      {
        foodName: "Quarter Pounder Deluxe",
        calories: 600,
      },
      {
        foodName: "Mushroom & Swiss Quarter Pounder",
        calories: 590,
      },
      {
        foodName: "Mushroom & Swiss Burger",
        calories: 590,
        correctedTerm: "Mushroom & Swiss Quarter Pounder",
      },
      {
        foodName: "Grand Mac",
        calories: 860,
      },
      {
        foodName: "Hamburger",
        calories: 250,
      },
      {
        foodName: "Cheeseburger",
        calories: 300,
      },
      {
        foodName: "Cheese Burger",
        calories: 300,
        correctedTerm: "Cheeseburger",
      },
      {
        foodName: "2 Cheeseburgers",
        calories: 600,
      },
      {
        foodName: "2 Cheese burgers",
        calories: 600,
        correctedTerm: "2 Cheeseburgers",
      },
      {
        foodName: "McDouble",
        calories: 380,
      },
      {
        foodName: "Bacon McDouble",
        calories: 450,
      },
      {
        foodName: "Bacon Angus Beef Burger",
        calories: 770,
      },
      {
        foodName: "Bacon and Cheddar Angus Burger",
        calories: 770,
      },
      {
        foodName: "Double Cheeseburger",
        calories: 430,
      },
      {
        foodName: "Double Cheese Burger",
        calories: 430,
        correctedTerm: "Double Cheeseburger",
      },
      {
        foodName: "Triple Cheeseburger",
        calories: 520,
      },
      {
        foodName: "Triple Cheese Burger",
        calories: 520,
        correctedTerm: "Triple Cheeseburger",
      },
      {
        foodName: "Double Quarter Pounder with Cheese",
        foodType: "Burger",
        calories: 770,
      },
      {
        foodName: "Double Quarter Pound with Cheese",
        calories: 770,
      },
      {
        foodName: "Double Quarter Pounder",
        calories: 770,
      },
      {
        foodName: "Filet-o-Fish",
        calories: 390,
        correctedTerm: "Filet-o-Fish Sandwich",
      },
      {
        foodName: "Filet-o-Fish Sandwich",
        calories: 390,
      },
      {
        foodName: "Fish Sandwich",
        calories: 390,
        correctedTerm: "Filet-o-Fish Sandwich",
      },
      {
        foodName: "Fish Filet Sandwich",
        calories: 390,
        correctedTerm: "Filet-o-Fish Sandwich",
      },
      {
        foodName: "Fish Fillet",
        calories: 390,
        correctedTerm: "Filet-o-Fish Sandwich",
      },
      {
        foodName: "Mc Chicken",
        calories: 350,
        correctedTerm: "McChicken Sandwich",
      },
      {
        foodName: "McChicken",
        calories: 350,
        correctedTerm: "McChicken Sandwich",
      },
      {
        foodName: "McChicken Sandwich",
        foodType: "Chicken",
        calories: 350,
      },
      {
        foodName: "Classic Chicken Sandwich",
        calories: 350,
        correctedTerm: "McChicken Sandwich",
      },
      {
        foodName: "Chicken Sandwich",
        calories: 350,
        correctedTerm: "McChicken Sandwich",
      },
      {
        foodName: "Hot and Spicy McChicken Sandwich",
        calories: 360,
      },
      {
        foodName: "Hot n Spicy McChicken",
        calories: 360,
        correctedTerm: "Hot and Spicy McChicken Sandwich",
      },
      {
        foodName: "Hot and Spicy McChicken",
        calories: 360,
        correctedTerm: "Hot and Spicy McChicken Sandwich",
      },
      {
        foodName: "Buttermilk Crispy Chicken Sandwich",
        calories: 570,
      },
      {
        foodName: "Buttermilk Crispy Chicken",
        calories: 570,
        correctedTerm: "Buttermilk Crispy Chicken Sandwich",
      },
      {
        foodName: "Buttermilk Chicken",
        calories: 570,
        correctedTerm: "Buttermilk Crispy Chicken Sandwich",
      },
      {
        foodName: "Buttermilk Chicken Sandwich",
        calories: 570,
        correctedTerm: "Buttermilk Crispy Chicken Sandwich",
      },
      {
        foodName: "Crispy Chicken Sandwich",
        foodType: "Chicken",
        calories: 570,
        correctedTerm: "Buttermilk Crispy Chicken Sandwich",
      },
      {
        foodName: "Original Chicken Sandwich",
        calories: 570,
        correctedTerm: "Buttermilk Crispy Chicken Sandwich",
      },
      {
        foodName: "Artisan Grilled Chicken Sandwich",
        calories: 380,
      },
      {
        foodName: "Grilled Chicken Sandwich",
        foodType: "Chicken",
        calories: 380,
      },
      {
        foodName: "Grilled Chicken",
        calories: 380,
      },
      {
        foodName: "4 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 180,
      },
      {
        foodName: "6 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 270,
      },
      {
        foodName: "10 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 440,
      },
      {
        foodName: "20 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 890,
      },
      {
        foodName: "Buttermilk Crispy Tenders",
        calories: 490,
      },
      {
        foodName: "4 Piece Buttermilk Crispy Tenders",
        foodType: "Chicken Tenders",
        calories: 490,
      },
      {
        foodName: "Four Piece Buttermilk Crispy Tenders",
        calories: 490,
        correctedTerm: "4 Piece Buttermilk Crispy Tenders",
      },
      {
        foodName: "4 Piece Buttermilk Crispy Chicken Tenders",
        calories: 490,
        correctedTerm: "4 Piece Buttermilk Crispy Tenders",
      },
      {
        foodName: "Four Piece Buttermilk Crispy Chicken Tenders",
        calories: 490,
        correctedTerm: "4 Piece Buttermilk Crispy Tenders",
      },
      {
        foodName: "4 Piece Crispy Tenders",
        calories: 490,
      },
      {
        foodName: "4 Piece Chicken Tenders",
        calories: 490,
      },
      {
        foodName: "Four Piece Chicken Tenders",
        calories: 490,
      },
      {
        foodName: "6 Piece Buttermilk Crispy Tenders",
        foodType: "Chicken Tenders",
        calories: 730,
      },
      {
        foodName: "Six Piece Buttermilk Crispy Tenders",
        calories: 730,
        correctedTerm: "6 Piece Buttermilk Crispy Tenders",
      },
      {
        foodName: "6 Piece Crispy Tenders",
        calories: 730,
      },
      {
        foodName: "6 Piece Chicken Tenders",
        calories: 730,
      },
      {
        foodName: "Six Piece Chicken Tenders",
        calories: 730,
      },
      {
        foodName: "10 Piece Buttermilk Crispy Tenders",
        foodType: "Chicken Tenders",
        calories: 1210,
      },
      {
        foodName: "10 Piece Crispy Tenders",
        calories: 1210,
      },
      {
        foodName: "10 Piece Chicken Tenders",
        calories: 1210,
      },
      {
        foodName: "Ten Piece Chicken Tenders",
        calories: 1210,
      },
      {
        foodName: "McRib",
        calories: 500,
      },
      {
        foodName: "Mc Rib",
        calories: 500,
      },
      {
        foodName: "Bacon Ranch Salad and Buttermilk Crispy Chicken",
        foodType: "Salad",
        calories: 490,
        dressingItem: true,
      },
      {
        foodName: "Bacon Ranch Salad & Buttermilk Crispy Chicken",
        calories: 490,
        dressingItem: true,
      },
      {
        foodName: "Bacon Ranch Grilled Chicken Salad",
        foodType: "Salad",
        calories: 320,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Southwest Buttermilk Crispy Chicken Salad",
        foodType: "Salad",
        calories: 520,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Southwest Buttermilk Crispy Chicken",
        calories: 520,
        sideItem: true,
        dressingItem: true,
        correctedTerm: "Southwest Buttermilk Crispy Chicken Salad",
      },
      {
        foodName: "Southwest Grilled Chicken Salad",
        foodType: "Salad",
        calories: 350,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Grilled Chicken Salad",
        calories: 350,
        correctedTerm: "Southwest Grilled Chicken Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Southwest Salad",
        calories: 350,
        correctedTerm: "Southwest Grilled Chicken Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Side Salad",
        foodType: "Salad",
        calories: 15,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Ranch Snack Wrap",
        calories: 360,
        correctedTerm: "Ranch Chicken Snack Wrap",
      },
      {
        foodName: "Ranch Chicken Snack Wrap",
        calories: 360,
      },
      {
        foodName: "Crispy Ranch Snack Wrap",
        calories: 360,
        correctedTerm: "Ranch Chicken Snack Wrap",
      },
      {
        foodName: "Crispy Chicken Snack Wrap",
        calories: 360,
        correctedTerm: "Ranch Chicken Snack Wrap",
      },
      {
        foodName: "Grilled Chicken Snack Wrap",
        calories: 270,
      },
      {
        foodName: "Chicken Snack Wrap",
        calories: 270,
        correctedTerm: "Grilled Chicken Snack Wrap",
      },
      {
        foodName: "Fruit 'N Yogurt Parfait",
        calories: 150,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Egg McMuffin",
        calories: 300,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Egg White Delight McMuffin",
        calories: 260,
        breakfastItem: true,
      },
      {
        foodName: "Egg White Delight",
        calories: 260,
        breakfastItem: true,
        correctedTerm: "Egg White Delight McMuffin",
      },
      {
        foodName: "Sausage McMuffin",
        calories: 400,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausage and Egg McMuffin",
        calories: 470,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg McMuffin",
        calories: 470,
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese Biscuit",
        calories: 450,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg Cheese Biscuit",
        calories: 450,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Biscuit",
        calories: 460,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Biscuit with Egg",
        calories: 530,
        breakfastItem: true,
      },
      {
        foodName: "Steak Egg and Cheese Biscuit",
        calories: 530,
        breakfastItem: true,
      },
      {
        foodName: "Steak Egg Cheese Biscuit",
        calories: 530,
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese McGriddles",
        calories: 420,
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese McGriddle",
        calories: 420,
        breakfastItem: true,
      },
      {
        foodName: "Sausage McGriddle",
        calories: 430,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg and Cheese McGriddles",
        calories: 550,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg and Cheese McGriddle",
        calories: 550,
        breakfastItem: true,
      },
      {
        foodName: "Sausage, Egg, & Cheese Mcgriddle",
        calories: 550,
        correctedTerm: "Sausage Egg and Cheese McGriddle",
        breakfastItem: true,
      },
      {
        foodName: "Sausage Egg McGriddle",
        calories: 550,
        correctedTerm: "Sausage Egg and Cheese McGriddle",
        breakfastItem: true,
      },
      {
        foodName: "McGriddle",
        calories: 550,
        correctedTerm: "Sausage Egg and Cheese McGriddle",
        breakfastItem: true,
      },
      {
        foodName: "Chicken McGriddles",
        calories: 390,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Chicken McGriddle",
        calories: 390,
        correctedTerm: "Chicken McGriddles",
        breakfastItem: true,
      },
      {
        foodName: "Bacon Egg and Cheese Bagel",
        calories: 550,
        breakfastItem: true,
      },
      {
        foodName: "Big Breakfast",
        calories: 750,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Big Breakfast with Hotcakes",
        calories: 1350,
      },
      {
        foodName: "Hotcakes",
        calories: 600,
        breakfastItem: true,
      },
      {
        foodName: "Hot Cakes",
        calories: 600,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Hotcakes and Sausage",
        calories: 790,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Burrito",
        calories: 290,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Hash Browns",
        calories: 150,
        sideItem: true,
        foodType: "Breakfast",
      },
      {
        foodName: "Hash Brown",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Hashbrowns",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Hashbrown",
        calories: 150,
        sideItem: true,
      },
      {
        foodName: "Fruit and Maple Oatmeal",
        calories: 310,
        foodType: "Breakfast",
        sideItem: true,
        breakfastItem: true,
      },
      {
        foodName: "Fruit & Maple Oatmeal",
        calories: 310,
        sideItem: true,
        breakfastItem: true,
      },
      {
        foodName: "Fries",
        correctedTerm: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fry",
        correctedTerm: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Frys",
        correctedTerm: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fries",
        correctedTerm: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fry",
        correctedTerm: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fries",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fry",
        calories: 340,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fries",
        calories: 230,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small French Fries",
        calories: 230,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Small Fries",
      },
      {
        foodName: "Small Fry",
        calories: 230,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 510,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fry",
        calories: 510,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "McFlurry",
        calories: 370,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Oreo McFlurry",
        calories: 510,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "M and M McFlurry",
        calories: 630,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Small Carmel Macchiato",
        calories: 260,
        sideItem: true,
      },
      {
        foodName: "Medium Carmel Macchiato",
        calories: 320,
        sideItem: true,
      },
      {
        foodName: "Carmel Macchiato",
        calories: 320,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Medium McCafe Carmel Macchiato",
        calories: 320,
        sideItem: true,
      },
      {
        foodName: "Large Carmel Macchiato",
        calories: 400,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Wendys",
    foodItems: [
      {
        foodName: "Single",
        foodType: "Burger",
        calories: 550,
      },
      {
        foodName: "Double",
        foodType: "Burger",
        calories: 790,
      },
      {
        foodName: "Triple",
        calories: 1070,
      },
      {
        foodName: "Daves Single",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Dave's Single",
        calories: 550,
      },
      {
        foodName: "Dave’s Single",
        calories: 550,
      },
      {
        foodName: "Daves Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Dave's Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Dave’s Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Daves Double",
        calories: 790,
      },
      {
        foodName: "Dave's Double",
        calories: 790,
      },
      {
        foodName: "Dave’s Double",
        calories: 790,
      },
      {
        foodName: "Daves Triple",
        calories: 1070,
      },
      {
        foodName: "Dave's Triple",
        calories: 1070,
      },
      {
        foodName: "Dave’s Triple",
        calories: 1070,
      },
      {
        foodName: "Son of Baconator",
        calories: 610,
      },
      {
        foodName: "Baconator",
        foodType: "Burger",
        calories: 930,
      },
      {
        foodName: "Homestyle Asiago Ranch Chicken Club",
        calories: 650,
      },
      {
        foodName: "Spicy Asiago Ranch Chicken Club",
        calories: 640,
      },
      {
        foodName: "Grilled Asiago Ranch Chicken Club",
        foodType: "Chicken",
        calories: 500,
      },
      {
        foodName: "Homestyle Chicken Sandwich",
        calories: 500,
      },
      {
        foodName: "Chicken Sandwich",
        calories: 500,
        correctedTerm: "Homestyle Chicken Sandwich",
      },
      {
        foodName: "Spicy Chicken Sandwich",
        calories: 490,
      },
      {
        foodName: "Spicey Chicken Sandwich",
        calories: 490,
        correctedTerm: "Spicy Chicken Sandwich",
      },
      {
        foodName: "Premium Cod Sandwich",
        calories: 430,
      },
      {
        foodName: "Double Stack",
        calories: 390,
      },
      {
        foodName: "Spicy Chicken Go Wrap",
        foodType: "Chicken",
        calories: 370,
      },
      {
        foodName: "Grilled Chicken Go Wrap",
        calories: 270,
      },
      {
        foodName: "Grilled Chicken Go Wraps",
        calories: 270,
        correctedTerm: "Grilled Chicken Go Wrap",
      },
      {
        foodName: "Toasted Chicken Wrap",
        calories: 270,
        correctedTerm: "Grilled Chicken Go Wrap",
      },
      {
        foodName: "Junior Bacon Cheeseburger",
        foodType: "Burger",
        calories: 370,
      },
      {
        foodName: "Jr Bacon Cheeseburger",
        calories: 370,
      },
      {
        foodName: "Jr Bacon Burger",
        calories: 370,
      },
      {
        foodName: "Jr. Bacon Cheeseburger",
        calories: 370,
      },
      {
        foodName: "Jr. Bacon Burger",
        calories: 370,
      },
      {
        foodName: "Grilled Chicken Sandwich",
        calories: 360,
      },
      {
        foodName: "Crispy Chicken Sandwich",
        calories: 330,
      },
      {
        foodName: "Junior Cheeseburger",
        foodType: "Burger",
        calories: 280,
      },
      {
        foodName: "Junior Cheese Burger",
        calories: 280,
        correctedTerm: "Junior Cheeseburger",
      },
      {
        foodName: "Jr Cheeseburger",
        calories: 280,
        correctedTerm: "Junior Cheeseburger",
      },
      {
        foodName: "Jr. Cheeseburger",
        calories: 280,
        correctedTerm: "Junior Cheeseburger",
      },
      {
        foodName: "Junior Burger",
        calories: 280,
        correctedTerm: "Junior Cheeseburger",
      },
      {
        foodName: "Homestyle Chicken Wrap",
        calories: 340,
      },
      {
        foodName: "Grilled Chicken Wrap",
        calories: 340,
      },
      {
        foodName: "Spicy Chicken Wrap",
        calories: 340,
      },
      {
        foodName: "10 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 420,
      },
      {
        foodName: "6 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 250,
      },
      {
        foodName: "4 Piece Chicken Nuggets",
        foodType: "Nuggets",
        calories: 170,
      },
      {
        foodName: "Fries",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fry",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fries",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fry",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fries",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fry",
        calories: 420,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fries",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fry",
        calories: 320,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Value Fries",
        calories: 230,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Value Fry",
        calories: 230,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 530,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fry",
        calories: 530,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Chili",
        calories: 170,
        sideItem: true,
      },
      {
        foodName: "Small Chili",
        calories: 170,
        sideItem: true,
      },
      {
        foodName: "Large Chili",
        calories: 250,
        sideItem: true,
      },
      {
        foodName: "Apple Bites",
        calories: 35,
        sideItem: true,
      },
      {
        foodName: "Mozzarella Chicken Salad",
        foodType: "Salad",
        calories: 520,
        sideItem: true,
      },
      {
        foodName: "Taco Salad",
        foodType: "Salad",
        calories: 660,
        sideItem: true,
      },
      {
        foodName: "Power Mediterranean Chicken Salad",
        calories: 480,
        sideItem: true,
      },
      {
        foodName: "Mediterranean Chicken Salad",
        foodType: "Salad",
        calories: 480,
        sideItem: true,
      },
      {
        foodName: "Apple Pecan Chicken Salad",
        calories: 560,
        sideItem: true,
      },
      {
        foodName: "Chicken Salad",
        calories: 560,
        sideItem: true,
        correctedTerm: "Apple Pecan Chicken Salad",
      },
      {
        foodName: "Spicy Caesar Chicken Salad",
        calories: 720,
        sideItem: true,
      },
      {
        foodName: "Caesar Chicken Salad",
        foodType: "Salad",
        calories: 720,
        sideItem: true,
      },
      {
        foodName: "Caesar Salad",
        calories: 230,
        sideItem: true,
        correctedTerm: "Caesar Side Salad",
      },
      {
        foodName: "Caesar Side Salad",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Garden Side Salad",
        foodType: "Salad",
        calories: 110,
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Side Salad",
        foodType: "Salad",
        calories: 110,
        correctedTerm: "Garden Side Salad",
        sideItem: true,
        dressingItem: true,
      },
      {
        foodName: "Frosty",
        calories: 393,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Chocolate Chip Cookie",
        calories: 310,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Chocolate Chunk Cookie",
        calories: 310,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Sugar Cookie",
        calories: 330,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Double Chocolate Chip Cookie",
        calories: 290,
        foodType: "Dessert",
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Taco Bell",
    foodItems: [
      {
        foodName: "7 Layer Burrito",
        foodType: "Burrito",
        calories: 440,
      },
      {
        foodName: "Seven Layer Burrito",
        calories: 440,
      },
      {
        foodName: "7 Layer",
        calories: 440,
      },
      {
        foodName: "Seven Layer",
        calories: 440,
      },
      {
        foodName: "Bean Burrito",
        calories: 380,
      },
      {
        foodName: "5 layer burrito",
        calories: 500,
      },
      {
        foodName: "Beefy 5 Layer Burrito",
        foodType: "Burrito",
        calories: 500,
      },
      {
        foodName: "Beefy five layer burrito",
        calories: 500,
      },
      {
        foodName: "Beefy Fritos Burrito",
        calories: 440,
      },
      {
        foodName: "Beefy Frito Burrito",
        calories: 440,
      },
      {
        foodName: "Beefy Nacho Loader Griller",
        calories: 370,
      },
      {
        foodName: "Black Bean Burrito",
        calories: 390,
      },
      {
        foodName: "Beef Burrito Supreme",
        calories: 410,
      },
      {
        foodName: "Chicken Burrito Supreme",
        protein: "chicken",
        foodType: "Burrito",
        calories: 380,
      },
      {
        foodName: "Steak Burrito Supreme",
        protein: "steak",
        calories: 390,
      },
      {
        foodName: "Cheesy Bean and Rice Burrito",
        calories: 430,
      },
      {
        foodName: "Chili Cheese Burrito",
        foodType: "Burrito",
        calories: 370,
      },
      {
        foodName: "Cheesy Potato Burrito",
        calories: 490,
      },
      {
        foodName: "Potato Burrito",
        calories: 490,
      },
      {
        foodName: "Chipotle Chicken Loaded Griller",
        calories: 340,
      },
      {
        foodName: "Combo Burrito",
        foodType: "Burrito",
        calories: 450,
      },
      {
        foodName: "Beef and Bean Burrito",
        calories: 450,
        correctedTerm: "Combo Burrito",
      },
      {
        foodName: "Loaded Potato Griller",
        calories: 410,
      },
      {
        foodName: "Loaded Potato Grilled",
        calories: 410,
        correctedTerm: "Loaded Potato Griller",
      },
      {
        foodName: "Quesarito",
        calories: 640,
        correctedTerm: "Chicken Quesarito",
      },
      {
        foodName: "Queserito",
        calories: 640,
        correctedTerm: "Chicken Quesarito",
      },
      {
        foodName: "Quesorito",
        calories: 640,
        correctedTerm: "Chicken Quesarito",
      },
      {
        foodName: "Beef Quesarito",
        calories: 650,
      },
      {
        foodName: "Chicken Quesarito",
        protein: "chicken",
        calories: 640,
      },
      {
        foodName: "Steak Quesarito",
        calories: 630,
      },
      {
        foodName: "Steak Quesorito",
        calories: 630,
        correctedTerm: "Steak Quesarito",
      },
      {
        foodName: "Shredded Chicken Burrito",
        protein: "chicken",
        foodType: "Burrito",
        calories: 420,
      },
      {
        foodName: "Beef Smothered Burrito",
        protein: "beef",
        foodType: "Burrito",
        calories: 700,
      },
      {
        foodName: "Shredded Chicken Smothered Burrito",
        protein: "chicken",
        foodType: "Burrito",
        calories: 670,
      },
      {
        foodName: "Steak Smothered Burrito",
        protein: "steak",
        foodType: "Burrito",
        calories: 660,
      },
      {
        foodName: "Beef XXL Grilled Stuft Burrito",
        protein: "beef",
        foodType: "Burrito",
        calories: 870,
      },
      {
        foodName: "Beef XXL Grilled Stuffed Burrito",
        calories: 870,
      },
      {
        foodName: "Chicken XXL Grilled Stuft Burrito",
        protein: "chicken",
        foodType: "Burrito",
        calories: 830,
      },
      {
        foodName: "Steak XXL Grilled Stuft Burrito",
        calories: 840,
      },
      {
        foodName: "Steak XXL Grilled Stuffed Burrito",
        calories: 840,
      },
      {
        foodName: "Beefy Mini Quesadilla",
        calories: 210,
      },
      {
        foodName: "Caramel Apple Empanada",
        calories: 280,
        sideItem: true,
      },
      {
        foodName: "Cheese Roll-up",
        calories: 180,
        sideItem: true,
      },
      {
        foodName: "Cheesy Bean and Rice Burrito",
        calories: 430,
      },
      {
        foodName: "Cinnabon Delights",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Cinabon Delight",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Cinabon Delight",
        calories: 160,
        sideItem: true,
        correctedTerm: "Cinnabon Delights",
      },
      {
        foodName: "Cinnbons",
        calories: 160,
        sideItem: true,
        correctedTerm: "Cinnabon Delights",
      },
      {
        foodName: "Cinnamon Twists",
        calories: 170,
        sideItem: true,
      },
      {
        foodName: "Cinnamon Twist",
        calories: 170,
        sideItem: true,
        correctedTerm: "Cinnamon Twists",
      },
      {
        foodName: "Twists",
        calories: 170,
        sideItem: true,
        correctedTerm: "Cinnamon Twists",
      },
      {
        foodName: "Shredded Chicken Mini Quesadilla",
        calories: 200,
      },
      {
        foodName: "Spicy Potato Soft Taco",
        foodType: "Taco",
        calories: 230,
      },
      {
        foodName: "Spicy Tostada",
        calories: 210,
      },
      {
        foodName: "Triple Layer Nachos",
        calories: 320,
      },
      {
        foodName: "3 Layer Nachos",
        calories: 320,
        correctedTerm: "Triple Layer Nachos",
      },
      {
        foodName: "Triple Layer Nacho",
        calories: 320,
        correctedTerm: "Triple Layer Nachos",
      },
      {
        foodName: "3 Layer Nacho",
        calories: 320,
        correctedTerm: "Triple Layer Nachos",
      },
      {
        foodName: "Fresco Bean Burrito",
        protein: "bean",
        foodType: "Burrito",
        calories: 350,
      },
      {
        foodName: "Fresco Chicken Burrito Supreme",
        protein: "chicken",
        foodType: "Burrito",
        calories: 340,
      },
      {
        foodName: "Fresco Chicken Burrito",
        calories: 340,
        correctedTerm: "Fresco Chicken Burrito Supreme",
      },
      {
        foodName: "Fresco Steak Burrito Supreme",
        protein: "steak",
        foodType: "Burrito",
        calories: 340,
      },
      {
        foodName: "Fresco Steak Burrito",
        calories: 340,
        correctedTerm: "Fresco Steak Burrito Supreme",
      },
      {
        foodName: "Beef Fresco Crunchy Taco",
        foodType: "Taco",
        calories: 140,
      },
      {
        foodName: "Beef Fresco Soft Taco",
        foodType: "Taco",
        calories: 160,
      },
      {
        foodName: "Shredded Chicken Fresco Soft Taco",
        foodType: "Taco",
        calories: 150,
      },
      {
        foodName: "Steak Fresco Soft Taco",
        foodType: "Taco",
        calories: 140,
      },
      {
        foodName: "Double Chalupa",
        foodType: "Chalupa",
        calories: 600,
      },
      {
        foodName: "Spicy Double Chalupa",
        foodType: "Chalupa",
        calories: 600,
      },
      {
        foodName: "Beefy Mini Quesadilla",
        calories: 210,
      },
      {
        foodName: "Beef Chalupa Supreme",
        protein: "beef",
        foodType: "Chalupa",
        calories: 350,
      },
      {
        foodName: "Beef Chalupa",
        calories: 350,
        correctedTerm: "Beef Chalupa Supreme",
      },
      {
        foodName: "Chicken Chalupa Supreme",
        foodType: "Chalupa",
        calories: 330,
      },
      {
        foodName: "Chicken Chalupa",
        foodType: "Chalupa",
        calories: 330,
      },
      {
        foodName: "Steak Chalupa Supreme",
        foodType: "Chalupa",
        calories: 330,
      },
      {
        foodName: "Steak Chalupa",
        calories: 330,
      },
      {
        foodName: "Cheese Roll-Up",
        calories: 180,
      },
      {
        foodName: "Cheesy Gordita Crunch",
        calories: 500,
      },
      {
        foodName: "Cheesy Gordita Crunch Supreme",
        calories: 520,
      },
      {
        foodName: "Cool Ranch Doritos Cheesy Gordita Crunch",
        calories: 500,
      },
      {
        foodName: "Crunchwrap",
        calories: 530,
      },
      {
        foodName: "Crunch Wrap",
        calories: 530,
      },
      {
        foodName: "Crunchwrap Supreme",
        calories: 530,
      },
      {
        foodName: "Crunch Wrap Supreme",
        calories: 530,
      },
      {
        foodName: "Double Tostada",
        calories: 270,
      },
      {
        foodName: "Chicken DoubleDilla",
        calories: 660,
      },
      {
        foodName: "Steak DoubleDilla",
        calories: 670,
      },
      {
        foodName: "Express Fiesta Taco Salad",
        calories: 580,
        sideItem: true,
      },
      {
        foodName: "Fiery Doritos Cheesy Gordita Crunch",
        calories: 500,
        sideItem: true,
      },
      {
        foodName: "Beef Fiesta Taco Salad",
        calories: 760,
        sideItem: true,
      },
      {
        foodName: "Beef Taco Salad",
        calories: 760,
        sideItem: true,
      },
      {
        foodName: "Taco Salad",
        calories: 760,
        sideItem: true,
      },
      {
        foodName: "Chicken Fiesta Taco Salad",
        calories: 720,
        sideItem: true,
      },
      {
        foodName: "Steak Fiesta Taco Salad",
        calories: 730,
        sideItem: true,
      },
      {
        foodName: "Steak Taco Salad",
        calories: 730,
        sideItem: true,
      },
      {
        foodName: "Beef Gordita Supreme",
        protein: "beef",
        calories: 280,
      },
      {
        foodName: "Chicken Gordita Supreme",
        protein: "chicken",
        calories: 260,
      },
      {
        foodName: "Steak Gordita Supreme",
        protein: "steak",
        calories: 270,
      },
      {
        foodName: "Mexican Pizza",
        calories: 550,
      },
      {
        foodName: "Meximelt",
        calories: 250,
      },
      {
        foodName: "Nacho Cheese Doritos Cheesy Gordita Crunch",
        calories: 490,
      },
      {
        foodName: "Nachos BellGrande",
        calories: 760,
      },
      {
        foodName: "Nachos Bell Grande",
        calories: 760,
      },
      {
        foodName: "Beef Nacho",
        calories: 760,
        correctedTerm: "Nachos Bell Grande",
      },
      {
        foodName: "Nachos Bel Grande",
        calories: 760,
        correctedTerm: "Nachos Bell Grande",
      },
      {
        foodName: "Nacho Bell Grande",
        calories: 760,
        correctedTerm: "Nachos Bell Grande",
      },
      {
        foodName: "Nachos Supreme",
        calories: 440,
      },
      {
        foodName: "Nacho Supreme",
        calories: 440,
        correctedTerm: "Nachos Supreme",
      },
      {
        foodName: "Nachos",
        calories: 440,
        correctedTerm: "Nachos Supreme",
      },
      {
        foodName: "Quesadilla",
        calories: 460,
        correctedTerm: "Cheese Quesadilla",
      },
      {
        foodName: "Cheese Quesadilla",
        protein: "cheese",
        foodType: "Quesadilla",
        calories: 460,
      },
      {
        foodName: "Chicken Quesadilla",
        protein: "chicken",
        foodType: "Quesadilla",
        calories: 510,
      },
      {
        foodName: "Steak Quesadilla",
        protein: "steak",
        foodType: "Quesadilla",
        calories: 510,
      },
      {
        foodName: "Shredded Chicken Mini Quesadilla",
        protein: "chicken",
        foodType: "Quesadilla",
        calories: 200,
      },
      {
        foodName: "Spicy Tostada",
        calories: 210,
      },
      {
        foodName: "Power Menu Bowl",
        calories: 500,
      },
      {
        foodName: "Taco 12 Pack",
        calories: 2010,
      },
      {
        foodName: "12 Pack Tacos",
        calories: 2010,
      },
      {
        foodName: "12 Crunch Tacos",
        calories: 2010,
      },
      {
        foodName: "12 Soft Tacos",
        calories: 2010,
      },
      {
        foodName: "Triple Layer Nachos",
        calories: 320,
      },
      {
        foodName: "Cool Ranch Doritos Double Decker Taco",
        calories: 320,
      },
      {
        foodName: "Cool Ranch Doritos Locos Taco",
        calories: 170,
      },
      {
        foodName: "Ranch Doritos Locos Taco",
        calories: 170,
      },
      {
        foodName: "Doritos Locos Taco",
        calories: 170,
      },
      {
        foodName: "Dorito Loco Taco",
        calories: 170,
      },
      {
        foodName: "Cool Ranch Doritos Locos Taco Supreme",
        calories: 190,
      },
      {
        foodName: "Hard Shell Taco",
        calories: 170,
        correctedTerm: "Beef Hard Shell Taco",
      },
      {
        foodName: "Beef Hard Shell Taco",
        calories: 170,
      },
      {
        foodName: "Beef Taco",
        calories: 170,
        correctedTerm: "Beef Hard Shell Taco",
      },
      {
        foodName: "Ground Beef Taco",
        calories: 170,
        correctedTerm: "Beef Hard Shell Taco",
      },
      {
        foodName: "Ground Beef Hard Shell Taco",
        calories: 170,
        correctedTerm: "Beef Hard Shell Taco",
      },
      {
        foodName: "Crunchy Taco",
        calories: 170,
      },
      {
        foodName: "Crunchy Taco Supreme",
        calories: 190,
      },
      {
        foodName: "Beef Taco Supreme",
        calories: 190,
        correctedTerm: "Crunchy Taco Supreme",
      },
      {
        foodName: "Double Decker Taco",
        calories: 320,
      },
      {
        foodName: "Double Decker Taco Supreme",
        calories: 340,
      },
      {
        foodName: "Fiery Doritos Double Decker Taco",
        calories: 320,
      },
      {
        foodName: "Fiery Doritos Locos Taco",
        calories: 170,
      },
      {
        foodName: "Fiery Doritos Locos Taco Supreme",
        calories: 190,
      },
      {
        foodName: "Grilled Steak Soft Taco",
        foodType: "Taco",
        calories: 200,
      },
      {
        foodName: "Steak Taco",
        calories: 200,
        correctedTerm: "Grilled Steak Soft Taco",
      },
      {
        foodName: "Nacho Cheese Doritos Double Decker Taco",
        calories: 320,
      },
      {
        foodName: "Nacho Cheese Doritos Locos Taco",
        calories: 170,
      },
      {
        foodName: "Nacho Cheese Doritos Locos Taco Supreme",
        calories: 190,
      },
      {
        foodName: "Beef Soft Taco",
        protein: "beef",
        foodType: "taco",
        calories: 180,
      },
      {
        foodName: "Ground Beef Soft Taco",
        calories: 180,
        correctedTerm: "Beef Soft Taco",
      },
      {
        foodName: "Chicken Soft Taco",
        calories: 170,
      },
      {
        foodName: "Chicken Soft Tacos",
        calories: 170,
        correctedTerm: "Chicken Soft Taco",
      },
      {
        foodName: "Chicken Taco",
        calories: 170,
        correctedTerm: "Chicken Soft Taco",
      },
      {
        foodName: "Beef Soft Taco Supreme",
        protein: "beef",
        foodType: "Taco",
        calories: 210,
      },
      {
        foodName: "Soft Taco Supreme",
        calories: 210,
      },
      {
        foodName: "Soft Shell Taco Supreme",
        calories: 210,
      },
      {
        foodName: "Spicy Potato Soft Taco",
        calories: 230,
      },
      {
        foodName: "Cheesy Fiesta Potatoes",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Fiesta Potatoes",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Naked Egg Taco",
        calories: 310,
      },
      {
        foodName: "Cinnabon Delights",
        foodType: "Dessert",
        calories: 160,
      },
      {
        foodName: "2 Pack Cinnabon Delights",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "Cinnabon Delights 2 Pack",
        calories: 160,
        sideItem: true,
      },
      {
        foodName: "4 Pack Cinnabon Delights",
        calories: 320,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Cinnabon Delights 4 Pack",
        calories: 320,
        sideItem: true,
      },
      {
        foodName: "12 Pack Cinnabon Delights",
        calories: 960,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Cinnabon Delights 12 Pack",
        calories: 960,
        sideItem: true,
      },
      {
        foodName: "Cinnamon Twists",
        calories: 170,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Caramel Apple Empanada",
        calories: 280,
        foodType: "Dessert",
        sideItem: true,
      },
      {
        foodName: "Seasoned Rice",
        calories: 120,
        sideItem: true,
      },
      {
        foodName: "Black Beans",
        calories: 80,
        sideItem: true,
      },
      {
        foodName: "Beans",
        calories: 80,
        sideItem: true,
        correctedTerm: "Black Beans",
      },
      {
        foodName: "Nacho Fries",
        calories: 320,
        sideItem: true,
      },
      {
        foodName: "Chips and Salsa",
        calories: 180,
        sideItem: true,
      },
      {
        foodName: "Chips",
        calories: 180,
        sideItem: true,
      },
      {
        foodName: "Chips and Guacamole",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Chips and Nacho Cheese Sauce",
        calories: 230,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Arbys",
    foodItems: [
      {
        foodName: "Classic Roast Beef",
        calories: 360,
        foodType: "Roast Beef",
      },
      {
        foodName: "Roast Beef Classic",
        calories: 360,
      },
      {
        foodName: "Double Roast Beef",
        calories: 510,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound Roast Beef",
        calories: 610,
        foodType: "Roast Beef",
      },
      {
        foodName: "Classic Beef and Cheddar",
        calories: 450,
      },
      {
        foodName: "Classic Beef n Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
      },
      {
        foodName: "Beef and Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
        foodType: "Roast Beef",
      },
      {
        foodName: "Beef n Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
      },
      {
        foodName: "Mid Beef and Cheddar",
        calories: 450,
      },
      {
        foodName: "Double Beef and Cheddar",
        calories: 630,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound Beef and Cheddar",
        calories: 740,
        foodType: "Roast Beef",
      },
      {
        foodName: "Classic French Dip and Swiss",
        calories: 540,
      },
      {
        foodName: "French Dip and Swiss",
        calories: 540,
      },
      {
        foodName: "French Dip",
        calories: 540,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound French Dip and Swiss",
        calories: 750,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound French Dip",
        calories: 750,
        correctedTerm: "Half Pound French Dip and Swiss",
      },
      {
        foodName: "Three Cheese Steak",
        calories: 650,
      },
      {
        foodName: "Fire Roasted Philly",
        calories: 640,
      },
      {
        foodName: "Philly Cheese Steak",
        calories: 640,
      },
      {
        foodName: "Grand Turkey Club",
        foodType: "Turkey",
        calories: 480,
      },
      {
        foodName: "Roast Turkey Ranch and Bacon",
        foodType: "Turkey",
        calories: 800,
      },
      {
        foodName: "Roast Turkey Ranch and Bacon Wrap",
        calories: 620,
      },
      {
        foodName: "Roast Turkey and Swiss",
        foodType: "Turkey",
        calories: 710,
      },
      {
        foodName: "Roast Turkey",
        calories: 710,
      },
      {
        foodName: "Roast Turkey and Swiss Sandwich",
        calories: 710,
      },
      {
        foodName: "Roast Turkey and Swiss Wrap",
        calories: 520,
      },
      {
        foodName: "Smokehouse Brisket Sandwich",
        calories: 600,
      },
      {
        foodName: "Smokehouse Brisket",
        calories: 600,
      },
      {
        foodName: "Brisket Sandwich",
        calories: 600,
      },
      {
        foodName: "Turkey Gyro",
        calories: 470,
      },
      {
        foodName: "Roast Beef Gyro",
        calories: 550,
      },
      {
        foodName: "Loaded Italian",
        calories: 680,
      },
      {
        foodName: "Loaded Italian Sub",
        calories: 680,
      },
      {
        foodName: "Loaded Italian Subs",
        calories: 680,
      },
      {
        foodName: "Reuben",
        calories: 680,
      },
      {
        foodName: "Rueben",
        calories: 680,
        correctedTerm: "Reuben",
      },
      {
        foodName: "Buttermilk Chicken",
        foodType: "Chicken",
        calories: 550,
      },
      {
        foodName: "Buttermilk Crispy Chicken",
        calories: 550,
      },
      {
        foodName: "Crispy Chicken",
        foodType: "Chicken",
        calories: 550,
      },
      {
        foodName: "Chicken Bacon and Swiss",
        foodType: "Chicken",
        calories: 650,
      },
      {
        foodName: "Chicken Bacon Swiss",
        calories: 650,
      },
      {
        foodName: "Chicken Cordon Bleu",
        foodType: "Chicken",
        calories: 690,
      },
      {
        foodName: "Buffalo Chicken",
        foodType: "Chicken",
        calories: 540,
      },
      {
        foodName: "Butermilk Buffalo Chicken",
        calories: 540,
      },
      {
        foodName: "Three Chicken Tenders",
        calories: 360,
      },
      {
        foodName: "3 Chicken Tenders",
        calories: 360,
      },
      {
        foodName: "Chicken Tenders",
        calories: 360,
      },
      {
        foodName: "Five Chicken Tenders",
        calories: 600,
      },
      {
        foodName: "5 Chicken Tenders",
        calories: 600,
      },
      {
        foodName: "Chopped Farmhouse Salad",
        foodType: "Salad",
        calories: 430,
        sideItem: true,
      },
      {
        foodName: "Crispy Chicken Chopped Farmhouse Salad",
        calories: 430,
        sideItem: true,
      },
      {
        foodName: "Chopped Farmhouse Salad with Chicken",
        foodType: "Salad",
        calories: 430,
        sideItem: true,
      },
      {
        foodName: "Chopped Farmhouse Salad with Turkey",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Chopped Farmhouse Salad with Roast Turkey",
        calories: 230,
        sideItem: true,
      },
      {
        foodName: "Chopped Side Salad",
        foodType: "Salad",
        calories: 70,
        sideItem: true,
      },
      {
        foodName: "Side Salad",
        foodType: "Salad",
        calories: 70,
        sideItem: true,
      },
      {
        foodName: "Curly Fries",
        calories: 550,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 550,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Loaded Curly Fries",
        calories: 700,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Curly Fries Medium",
        calories: 550,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Curly Fries",
        calories: 550,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Curly Fry",
        calories: 550,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Curly Fries",
        calories: 650,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 650,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fry",
        calories: 650,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Curly Fries",
        calories: 410,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Snack Curly Fries",
        calories: 250,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Mozzarella Sticks",
        calories: 460,
        sideItem: true,
      },
      {
        foodName: "4 count Mozzarella Sticks",
        calories: 460,
        sideItem: true,
      },
      {
        foodName: "6 count Mozzarella Sticks",
        calories: 670,
        sideItem: true,
      },
      {
        foodName: "Buffalo Chicken Slider",
        calories: 290,
        foodType: "Slider",
      },
      {
        foodName: "Chicken and Cheese Slider",
        calories: 290,
        foodType: "Slider",
      },
      {
        foodName: "Chicken 'n Cheese Slider",
        calories: 290,
      },
      {
        foodName: "Corned Beef and Cheese Slider",
        calories: 220,
        foodType: "Slider",
      },
      {
        foodName: "Corned Beef 'n Cheese Slider",
        calories: 220,
      },
      {
        foodName: "Ham and Cheese Slider",
        calories: 230,
        foodType: "Slider",
      },
      {
        foodName: "Ham 'n Cheese Slider",
        calories: 230,
      },
      {
        foodName: "Jalepeno Roast Beef Slider",
        calories: 240,
        foodType: "Slider",
      },
      {
        foodName: "Pizza Slider",
        calories: 300,
        foodType: "Slider",
      },
      {
        foodName: "Roast Beef Slider",
        calories: 240,
        correctedTerm: "Roast Beef 'n Cheese Slider",
      },
      {
        foodName: "Roast Beef and Cheese Slider",
        calories: 240,
      },
      {
        foodName: "Roast Beef 'n Cheese Slider",
        calories: 240,
      },
      {
        foodName: "Turkey and Cheese Slider",
        calories: 200,
      },
      {
        foodName: "Turkey 'n Cheese Slider",
        calories: 200,
      },
      {
        foodName: "Crispy Fish Sandwich",
        calories: 570,
        foodType: "Fish",
      },
      {
        foodName: "Fish Sandwich",
        calories: 570,
        correctedTerm: "Crispy Fish Sandwich",
      },
      {
        foodName: "Crispy Fish Flatbread",
        calories: 590,
        foodType: "Fish",
      },
      {
        foodName: "Kings Hawaiian Fish Deluxe",
        calories: 690,
        foodType: "Fish",
      },
      {
        foodName: "Nashville Hot Fish",
        calories: 540,
        foodType: "Fish",
      },
      {
        foodName: "Nashville Hot Fish Sandwich",
        calories: 540,
        correctedTerm: "Nashville Hot Fish",
      },
      {
        foodName: "Kings Hawaiian Nashville Hot Fish Deluxe",
        calories: 670,
        foodType: "Fish",
      },
    ],
  },
  {
    restaurant: "Hardees",
    foodItems: [
      {
        foodName: "Made from Scratch Biscuit",
        calories: 430,
      },
      {
        foodName: "Grass-Fed All-Natural Burger",
        calories: 780,
      },
      {
        foodName: "Thick Burger",
        calories: 780,
      },
      {
        foodName: "Thickburger",
        foodType: "Burger",
        calories: 780,
      },
      {
        foodName: "Original Thickburger",
        calories: 780,
      },
      {
        foodName: "Veggie",
        calories: 550,
        correctedTerm: "Veggie Thickburger",
      },
      {
        foodName: "Veggie Thickburger",
        foodType: "Burger",
        calories: 550,
      },
      {
        foodName: "Veg It",
        calories: 550,
      },
      {
        foodName: "Cheeseburger",
        calories: 640,
      },
      {
        foodName: "Mushroom & Swiss Thickburger",
        calories: 680,
      },
      {
        foodName: "Bacon Cheese Thickburger",
        foodType: "Burger",
        calories: 850,
      },
      {
        foodName: "Frisco Thickburger",
        foodType: "Burger",
        calories: 840,
      },
      {
        foodName: "Frisco Burger",
        calories: 840,
      },
      {
        foodName: "Double Thickburger",
        calories: 1130,
      },
      {
        foodName: "Monster Thickburger",
        calories: 1300,
      },
      {
        foodName: "Monster Burger",
        calories: 1300,
        correctedTerm: "Monster Thickburger",
      },
      {
        foodName: "Quarter Pound Thickburger",
        calories: 530,
      },
      {
        foodName: "Quarter Pound Cheeseburger",
        calories: 440,
      },
      {
        foodName: "Charbroiled Chicken Club Sandwich",
        calories: 560,
      },
      {
        foodName: "Charbroiled BBQ Chicken Sandwich",
        calories: 350,
      },
      {
        foodName: "Big Chicken Fillet Sandwich",
        calories: 710,
      },
      {
        foodName: "Spicy Chicken Sandwich",
        calories: 440,
      },
      {
        foodName: "Regular Roast Beef Sandwich",
        calories: 310,
      },
      {
        foodName: "Big Roast Beef Sandwich",
        calories: 500,
      },
      {
        foodName: "Hot Ham 'N Cheese Sandwich",
        calories: 290,
      },
      {
        foodName: "Big Hot Ham 'N Cheese Sandwich",
        calories: 530,
      },
      {
        foodName: "Jumbo Chili Dog",
        calories: 390,
      },
      {
        foodName: "Double Cheeseburger",
        calories: 380,
      },
      {
        foodName: "Double Cheese burger",
        calories: 380,
      },
      {
        foodName: "Small Cheeseburger",
        calories: 300,
      },
      {
        foodName: "Small Cheese burger",
        calories: 300,
      },
      {
        foodName: "Small Hamburger",
        foodType: "Burger",
        calories: 250,
      },
      {
        foodName: "3 Piece Hand Breaded Chicken Tenders",
        calories: 260,
      },
      {
        foodName: "3 Piece Chicken Tenders",
        calories: 260,
      },
      {
        foodName: "5 Piece Hand Breaded Chicken Tenders",
        calories: 440,
      },
      {
        foodName: "5 Piece Chicken Tenders",
        calories: 440,
      },
      {
        foodName: "Kids Meal Chicken Tenders",
        calories: 400,
      },
      {
        foodName: "Kids Meal Cheeseburger",
        calories: 520,
      },
      {
        foodName: "Kids Meal Hamburger",
        calories: 470,
      },
      {
        foodName: "Kids Meal Hot Dog",
        calories: 570,
      },
      {
        foodName: "Kids French Fries",
        calories: 240,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Kids French Fry",
        calories: 240,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small French Fries",
        calories: 300,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small French Fry",
        calories: 300,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium French Fries",
        calories: 490,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium French Fry",
        calories: 490,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fries",
        calories: 490,
        correctedTerm: "Medium French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 490,
        correctedTerm: "Medium French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fry",
        calories: 490,
        correctedTerm: "Medium French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large French Fries",
        calories: 530,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large French Fry",
        calories: 530,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Crispy Curls",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Crispy Curly Fries",
        calories: 360,
        sideItem: true,
      },
      {
        foodName: "Medium Crispy Curls",
        calories: 470,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Crispy Curly Fries",
        calories: 470,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Crispy Curls",
        calories: 570,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Crispy Curly Fries",
        calories: 570,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Beer Battered Onion Rings",
        calories: 410,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Onion Rings",
        calories: 410,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Side Salad",
        foodType: "Salad",
        calories: 120,
        sideItem: true,
      },
      {
        foodName: "Made from Scratch Biscuit",
        calories: 430,
        breakfastItem: true,
      },
      {
        foodName: "Biscuit",
        calories: 430,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Cinnamon and Raisin Biscuit",
        calories: 320,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Jelly Biscuit",
        calories: 460,
        breakfastItem: true,
      },
      {
        foodName: "Sausage Biscuit",
        calories: 620,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausage and Egg Biscuit",
        calories: 690,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausge, Egg, and Cheese Biscuit",
        calories: 790,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Sausage Cheese Biscuit",
        calories: 790,
        breakfastItem: true,
        correctedTerm: "Sausge, Egg, and Cheese Biscuit",
      },
      {
        foodName: "Country Ham Biscuit",
        calories: 500,
        breakfastItem: true,
      },
      {
        foodName: "Ham Biscuit",
        calories: 500,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Chicken Filet Biscuit",
        calories: 650,
        breakfastItem: true,
      },
      {
        foodName: "Chicken Biscuit",
        calories: 650,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Country Steak Biscuit",
        calories: 640,
        breakfastItem: true,
      },
      {
        foodName: "Bacon, Egg, and Cheese Biscuit",
        calories: 610,
        breakfastItem: true,
      },
      {
        foodName: "Bacon, Swiss, Chicken, and Egg Biscuit",
        calories: 840,
        breakfastItem: true,
      },
      {
        foodName: "Ham, Egg, and Cheese Biscuit",
        calories: 580,
        breakfastItem: true,
      },
      {
        foodName: "Loaded Omelet Biscuit",
        calories: 620,
        breakfastItem: true,
      },
      {
        foodName: "Monster Biscuit",
        calories: 880,
        breakfastItem: true,
      },
      {
        foodName: "Biscuit and Gravy",
        calories: 620,
        breakfastItem: true,
      },
      {
        foodName: "Sunrise Croissant with Ham",
        calories: 390,
        breakfastItem: true,
      },
      {
        foodName: "Ham Croissant",
        calories: 390,
        foodType: "Breakfast",
        breakfastItem: true,
      },
      {
        foodName: "Frisco Breakfast Sandwich",
        calories: 450,
        breakfastItem: true,
      },
      {
        foodName: "Low Carb Breakfast Bowl",
        calories: 680,
      },
      {
        foodName: "Loaded Breakfast Burrito",
        calories: 580,
        breakfastItem: true,
      },
      {
        foodName: "Hardee Breakfast Platter with Bacon",
        calories: 900,
        breakfastItem: true,
      },
      {
        foodName: "Breakfast Platter with Bacon",
        calories: 900,
        breakfastItem: true,
      },
      {
        foodName: "Hardee Breakfast Platter with Ham",
        calories: 880,
        breakfastItem: true,
      },
      {
        foodName: "Breakfast Platter with Ham",
        calories: 880,
        breakfastItem: true,
      },
      {
        foodName: "Hardee Breakfast Platter with Sausage",
        calories: 1070,
      },
      {
        foodName: "Breakfast Platter with Sausage",
        calories: 1070,
        foodType: "Breakfast",
      },
      {
        foodName: "Small Hash Rounds",
        calories: 260,
        sideItem: true,
      },
      {
        foodName: "Medium Hash Rounds",
        calories: 370,
        sideItem: true,
      },
      {
        foodName: "Hash Rounds",
        calories: 370,
        foodType: "Breakfast",
        sideItem: true,
      },
      {
        foodName: "Hash Browns",
        calories: 370,
        sideItem: true,
        correctedTerm: "Hash Rounds",
      },
      {
        foodName: "Large Hash Rounds",
        calories: 510,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Five Guys",
    foodItems: [
      {
        foodName: "Hamburger",
        foodType: "Burger",
        calories: 700,
      },
      {
        foodName: "Cheeseburger",
        foodType: "Burger",
        calories: 840,
      },
      {
        foodName: "Bacon Burger",
        foodType: "Burger",
        calories: 780,
      },
      {
        foodName: "Bacon Cheeseburger",
        foodType: "Burger",
        calories: 920,
      },
      {
        foodName: "Bacon Cheeseburger all the way",
        calories: 970,
      },
      {
        foodName: "Little Hamburger",
        foodType: "Burger",
        calories: 480,
      },
      {
        foodName: "Little Burger",
        calories: 480,
        correctedTerm: "Little Hamburger",
      },
      {
        foodName: "Little Cheeseburger",
        foodType: "Burger",
        calories: 550,
      },
      {
        foodName: "Little Bacon Burger",
        foodType: "Burger",
        calories: 560,
      },
      {
        foodName: "Little Bacon Cheeseburger",
        foodType: "Burger",
        calories: 630,
      },
      {
        foodName: "Hot Dog",
        foodType: "Hot Dogs",
        calories: 545,
      },
      {
        foodName: "HotDog",
        calories: 545,
      },
      {
        foodName: "Cheese Dog",
        foodType: "Hot Dogs",
        calories: 615,
      },
      {
        foodName: "Bacon Dog",
        foodType: "Hot Dogs",
        calories: 625,
      },
      {
        foodName: "Bacon Cheese Dog",
        foodType: "Hot Dogs",
        calories: 695,
      },
      {
        foodName: "Veggie Sandwich",
        foodType: "Sandwich",
        calories: 545,
      },
      {
        foodName: "Cheese Veggie Sandwich",
        foodType: "Sandwich",
        calories: 510,
      },
      {
        foodName: "Grilled Cheese",
        foodType: "Sandwich",
        calories: 470,
      },
      {
        foodName: "BLT",
        foodType: "Sandwich",
        calories: 533,
      },
      {
        foodName: "Little French Fries",
        calories: 526,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Little Fries",
        calories: 526,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "French Fries",
        calories: 953,
        correctedTerm: "Regular French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 953,
        correctedTerm: "Regular French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Regular French Fries",
        calories: 953,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large French Fries",
        calories: 1314,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 1314,
        sideItem: true,
        ketchupItem: true,
      },
    ],
  },
  {
    restaurant: "In-N-Out",
    foodItems: [
      {
        foodName: "Hamburger",
        foodType: "Burger",
        calories: 390,
      },
      {
        foodName: "Burger",
        calories: 670,
        correctedTerm: "Hamburger",
      },
      {
        foodName: "Cheeseburger",
        foodType: "Burger",
        calories: 480,
      },
      {
        foodName: "Double Double",
        foodType: "Burger",
        calories: 670,
      },
      {
        foodName: "Double-Double",
        calories: 670,
      },
      {
        foodName: "Double Double Burger",
        calories: 670,
        correctedTerm: "Double Double",
      },
      {
        foodName: "Double",
        calories: 670,
        correctedTerm: "Double Double",
      },
      {
        foodName: "Double Meat",
        foodType: "Secret Menu",
        calories: 560,
      },
      {
        foodName: "Three by Three",
        foodType: "Secret Menu",
        calories: 860,
      },
      {
        foodName: "3x3",
        calories: 860,
        correctedTerm: "Three by Three",
      },
      {
        foodName: "Four by Four",
        foodType: "Secret Menu",
        calories: 1050,
      },
      {
        foodName: "4x4",
        calories: 1050,
        correctedTerm: "Four by Four",
      },
      {
        foodName: "Grilled Cheese",
        foodType: "Secret Menu",
        calories: 380,
      },
      {
        foodName: "Veggie Burger",
        foodType: "Secret Menu",
        calories: 200,
      },
      {
        foodName: "French Fries",
        calories: 395,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 395,
        correctedTerm: "French Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Chocolate Shake",
        foodType: "Shake",
        calories: 590,
        sideItem: true,
      },
      {
        foodName: "Vanilla Shake",
        foodType: "Shake",
        calories: 590,
        sideItem: true,
      },
      {
        foodName: "Strawberry Shake",
        foodType: "Shake",
        calories: 590,
        sideItem: true,
      },
    ],
  },
  {
    restaurant: "Sonic",
    foodItems: [
      {
        foodName: "Hatch Green Chile Cheeseburger",
        calories: 730,
      },
      {
        foodName: "Jalapeno Burger",
        foodType: "Burger",
        calories: 660,
      },
      {
        foodName: "Jalapeno Cheeseburger",
        calories: 730,
      },
      {
        foodName: "Jr. Burger",
        foodType: "Burger",
        calories: 320,
      },
      {
        foodName: "Jr. Deluxe Burger",
        foodType: "Burger",
        calories: 340,
      },
      {
        foodName: "Jr. Deluxe Cheeseburger",
        calories: 410,
      },
      {
        foodName: "Jr. Double Cheeseburger",
        calories: 560,
      },
      {
        foodName: "Bacon Cheeseburger with Mayo",
        foodType: "Burger",
        calories: 870,
      },
      {
        foodName: "Burger with Ketchup",
        foodType: "Burger",
        calories: 680,
      },
      {
        foodName: "Burger with Mustard",
        calories: 670,
      },
      {
        foodName: "Cheese burger",
        calories: 730,
        correctedTerm: "Cheeseburger",
      },
      {
        foodName: "Cheeseburger with Ketchup",
        calories: 750,
      },
      {
        foodName: "Cheeseburger with Mayo",
        calories: 780,
      },
      {
        foodName: "Cheeseburger with Mustard",
        calories: 730,
      },
      {
        foodName: "Cheeseburger",
        foodType: "Burger",
        calories: 730,
      },
      {
        foodName: "Bacon Double Cheeseburger with Mayo",
        calories: 1280,
      },
      {
        foodName: "Double Cheeseburger with Ketchup",
        foodType: "Burger",
        calories: 1160,
      },
      {
        foodName: "Double Cheeseburger with Mayo",
        calories: 1280,
      },
      {
        foodName: "Double Cheese burger",
        calories: 1160,
        correctedTerm: "Double Cheeseburger with Ketchup",
      },
      {
        foodName: "Jalapeno Double Cheeseburger with Mustard",
        calories: 1140,
      },
      {
        foodName: "Veggie Burger with Ketchup",
        foodType: "Burger",
        calories: 490,
      },
      {
        foodName: "Veggie Burger with Mayo",
        calories: 520,
      },
      {
        foodName: "Veggie Burger with Mustard",
        calories: 470,
      },
      {
        foodName: "Veggie Burger",
        calories: 470,
      },
      {
        foodName: "Country Fried Steak Sandwich",
        foodType: "Sandwich",
        calories: 650,
      },
      {
        foodName: "Country Fried Steak",
        foodType: "Sandwich",
        calories: 650,
      },
      {
        foodName: "Fish Sandwich",
        foodType: "Sandwich",
        calories: 640,
      },
      {
        foodName: "Grilled Cheese",
        foodType: "Sandwich",
        calories: 430,
      },
      {
        foodName: "Grilled Cheese Sandwich",
        foodType: "Sandwich",
        calories: 430,
      },
      {
        foodName: "Philly Cheesesteak Sandwich",
        foodType: "Sandwich",
        calories: 750,
      },
      {
        foodName: "Seafood and Crab Sandwich",
        foodType: "Sandwich",
        calories: 600,
      },
      {
        foodName: "All-American Dog",
        foodType: "Hot Dog",
        calories: 410,
      },
      {
        foodName: "All Beef Hot Dog",
        foodType: "Hot Dog",
        calories: 360,
      },
      {
        foodName: "Cheesy Bacon Pretzel Dog",
        foodType: "Hot Dog",
        calories: 460,
      },
      {
        foodName: "Chicago Dog",
        foodType: "Hot Dog",
        calories: 420,
      },
      {
        foodName: "Chili Cheese Coney Dog",
        foodType: "Hot Dog",
        calories: 490,
      },
      {
        foodName: "Corn Dog",
        foodType: "Hot Dog",
        calories: 230,
      },
      {
        foodName: "Footlong Quarter Pound Coney",
        foodType: "Hot Dog",
        calories: 870,
      },
      {
        foodName: "New York Dog",
        foodType: "Hot Dog",
        calories: 400,
      },
      {
        foodName: "Original Pretzel Dog",
        foodType: "Hot Dog",
        calories: 340,
      },
      {
        foodName: "Fries",
        calories: 290,
        correctedTerm: "Medium Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Regular Fries",
        calories: 290,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Fries",
        calories: 290,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Fries",
        calories: 290,
        correctedTerm: "Medium Fries",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Fries",
        calories: 250,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Mini Fries",
        calories: 130,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Fries",
        calories: 470,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Chili Cheese Fries",
        calories: 450,
        sideItem: true,
      },
      {
        foodName: "Medium Chili Cheese Fries",
        calories: 450,
        sideItem: true,
      },
      {
        foodName: "Regular Chili Cheese Fries",
        calories: 450,
        sideItem: true,
      },
      {
        foodName: "Tots",
        calories: 360,
        correctedTerm: "Medium Tots",
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Medium Tots",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Regular Tots",
        calories: 360,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Small Tots",
        calories: 250,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Tots",
        calories: 580,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Tots with Cheese",
        calories: 170,
        sideItem: true,
        ketchupItem: true,
      },
    ],
  },
  {
    restaurant: "Panda Express",
    foodItems: [
      {
        foodName: "Orange Chicken",
        foodType: "Entree",
        calories: 380,
        carbs: 44,
        sodium: 610,
      },
      {
        foodName: "Double Orange Chicken",
        calories: 760,
        carbs: 88,
        sodium: 1220,
      },
      {
        foodName: "String Bean Chicken Breast",
        foodType: "Entree",
        calories: 190,
        carbs: 13,
        sodium: 590,
      },
      {
        foodName: "Chicken and Green Beans",
        calories: 190,
        carbs: 13,
        sodium: 590,
        correctedTerm: "String Bean Chicken Breast",
      },
      {
        foodName: "Sweet Fire Chicken Breast",
        calories: 380,
        carbs: 47,
        sodium: 320,
      },
      {
        foodName: "Sweet Fire Chicken",
        foodType: "Entree",
        calories: 380,
        carbs: 47,
        sodium: 320,
        correctedTerm: "Sweet Fire Chicken Breast",
      },
      {
        foodName: "Kung Pao Chicken",
        foodType: "Entree",
        calories: 290,
        carbs: 14,
        sodium: 970,
      },
      {
        foodName: "Mushroom Chicken",
        foodType: "Entree",
        calories: 220,
        carbs: 11,
        sodium: 840,
      },
      {
        foodName: "Black Pepper Chicken",
        foodType: "Entree",
        calories: 280,
        carbs: 15,
        sodium: 1130,
      },
      {
        foodName: "Black Peper Chicken",
        calories: 280,
        carbs: 15,
        sodium: 1130,
        correctedTerm: "Black Pepper Chicken",
      },
      {
        foodName: "Grilled Teriyaki Chicken",
        calories: 300,
        carbs: 8,
        sodium: 530,
      },
      {
        foodName: "Teriyaki Chicken",
        foodType: "Entree",
        calories: 300,
        carbs: 8,
        sodium: 530,
      },
      {
        foodName: "Broccoli Beef",
        foodType: "Entree",
        calories: 150,
        carbs: 13,
        sodium: 520,
      },
      {
        foodName: "Beef Broccoli",
        calories: 150,
        carbs: 13,
        sodium: 520,
      },
      {
        foodName: "Shanghai Angus Steak",
        foodType: "Entree",
        calories: 310,
        carbs: 16,
        sodium: 830,
      },
      {
        foodName: "Beijing Beef",
        foodType: "Entree",
        calories: 470,
        carbs: 46,
        sodium: 660,
      },
      {
        foodName: "Honey Walnut Shrimp",
        foodType: "Entree",
        calories: 360,
        carbs: 35,
        sodium: 440,
      },
      {
        foodName: "Walnut Shrimp",
        calories: 360,
        carbs: 35,
        sodium: 440,
        correctedTerm: "Honey Walnut Shrimp",
      },
      {
        foodName: "Eggplant Tofu",
        foodType: "Entree",
        calories: 340,
        carbs: 23,
        sodium: 520,
      },
      {
        foodName: "Chow Mein",
        foodType: "Sides",
        calories: 510,
        carbs: 80,
        sodium: 860,
      },
      {
        foodName: "Fried Rice",
        foodType: "Sides",
        calories: 520,
        carbs: 85,
        sodium: 850,
      },
      {
        foodName: "Mixed Vegetables",
        foodType: "Sides",
        calories: 80,
        carbs: 16,
        sodium: 540,
      },
      {
        foodName: "Mixed Vegetable",
        calories: 80,
        carbs: 16,
        sodium: 540,
        correctedTerm: "Mixed Vegetables",
      },
      {
        foodName: "Mix Vegetable",
        calories: 80,
        carbs: 16,
        sodium: 540,
        correctedTerm: "Mixed Vegetables",
      },
      {
        foodName: "White Steamed Rice",
        calories: 380,
        carbs: 87,
        sodium: 0,
      },
      {
        foodName: "White Rice",
        foodType: "Sides",
        calories: 380,
        carbs: 87,
        sodium: 0,
      },
      {
        foodName: "Brown Rice",
        foodType: "Sides",
        calories: 420,
        carbs: 86,
        sodium: 15,
      },
      {
        foodName: "Brown Steamed Rice",
        calories: 420,
        carbs: 86,
        sodium: 15,
      },
      {
        foodName: "Half Chow Mein and White Rice",
        calories: 445,
        carbs: 83,
        sodium: 430,
      },
      {
        foodName: "Chow Mein and White Rice",
        calories: 445,
        carbs: 83,
        sodium: 430,
        correctedTerm: "Half Chow Mein and White Rice",
      },
      {
        foodName: "Chicken Potsticker",
        foodType: "Appetizers",
        calories: 160,
        carbs: 20,
        sodium: 250,
      },
      {
        foodName: "Potsticker",
        calories: 160,
        carbs: 20,
        sodium: 250,
      },
      {
        foodName: "Cream Cheese Rangoon",
        foodType: "Appetizers",
        calories: 190,
        carbs: 24,
        sodium: 180,
      },
      {
        foodName: "Crab Rangoon",
        calories: 190,
        carbs: 24,
        sodium: 180,
      },
      {
        foodName: "Chicken Egg Roll",
        calories: 200,
        carbs: 20,
        sodium: 340,
      },
      {
        foodName: "Egg Roll",
        foodType: "Appetizers",
        calories: 200,
        carbs: 20,
        sodium: 340,
      },
      {
        foodName: "Veggie Spring Roll",
        calories: 190,
        carbs: 27,
        sodium: 520,
      },
      {
        foodName: "Spring Roll",
        foodType: "Appetizers",
        calories: 190,
        carbs: 27,
        sodium: 520,
      },
      {
        foodName: "Crispy Shrimp",
        foodType: "Appetizers",
        calories: 260,
        carbs: 26,
        sodium: 800,
      },
    ],
  },
  {
    restaurant: "Cookout",
    foodItems: [
      {
        foodName: "Small Hamburger",
        foodType: "Burger",
        calories: 226,
      },
      {
        foodName: "Regular Hamburger",
        foodType: "Burger",
        calories: 325,
      },
      {
        foodName: "Hamburger",
        calories: 325,
        correctedTerm: "Regular Hamburger",
      },
      {
        foodName: "Huge Hamburger",
        foodType: "Burger",
        calories: 510,
      },
      {
        foodName: "Big Double",
        foodType: "Burger",
        calories: 311,
      },
      {
        foodName: "Chicken Breast",
        foodType: "Chicken",
        calories: 377,
      },
      {
        foodName: "Original Style Chicken Breast",
        foodType: "Chicken",
        calories: 393,
      },
      {
        foodName: "Barbeque Style Chicken Breast",
        foodType: "Chicken",
        calories: 376,
      },
      {
        foodName: "Cajun Style Chicken Breast",
        foodType: "Chicken",
        calories: 377,
      },
      {
        foodName: "Cheddar Style Chicken Breast",
        foodType: "Chicken",
        calories: 534,
      },
      {
        foodName: "Spicy Chicken Breast",
        foodType: "Chicken",
        calories: 446,
      },
      {
        foodName: "Regular BBQ Sandwich",
        calories: 368,
      },
      {
        foodName: "BBQ Plate",
        calories: 976,
      },
      {
        foodName: "Hot Dog",
        foodType: "Hot Dog",
        calories: 260,
      },
      {
        foodName: "Cook Out Style Hot Dog",
        foodType: "Hot Dog",
        calories: 383,
      },
      {
        foodName: "Mexi Hot Dog",
        foodType: "Hot Dog",
        calories: 362,
      },
      {
        foodName: "Bacon Cheddar Hot Dog",
        foodType: "Hot Dog",
        calories: 523,
      },
      {
        foodName: "Crispy Chicken Cajun Wrap",
        foodType: "Chicken Wrap",
        calories: 501,
      },
      {
        foodName: "Crispy Chicken Ranch Wrap",
        foodType: "Chicken Wrap",
        calories: 522,
      },
      {
        foodName: "Crispy Chicken Honey Mustard Wrap",
        foodType: "Chicken Wrap",
        calories: 517,
      },
      {
        foodName: "Bacon Ranch Wrap",
        calories: 419,
      },
      {
        foodName: "BLT Sandwich",
        calories: 392,
      },
      {
        foodName: "3 Chicken Strips",
        calories: 660,
      },
      {
        foodName: "Chicken Strip Sandwich",
        calories: 674,
      },
      {
        foodName: "Chicken Strip Club",
        calories: 846,
      },
      {
        foodName: "Onion Rings Full Order",
        calories: 256,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Large Onion Rings",
        calories: 256,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Onion Rings Full Order",
      },
      {
        foodName: "Onion Rings Side Order",
        calories: 128,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Onion Rings",
        calories: 128,
        sideItem: true,
        ketchupItem: true,
        correctedTerm: "Onion Rings Side Order",
      },
      {
        foodName: "Corn Dog",
        calories: 220,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Cheese Dog",
        calories: 146,
        sideItem: true,
        ketchupItem: true,
      },
      {
        foodName: "Chili",
        calories: 164,
        sideItem: true,
        correctedTerm: "Side of Chili",
      },
      {
        foodName: "Side of Chili",
        calories: 164,
        sideItem: true,
      },
      {
        foodName: "Hushpuppies Full Order",
        calories: 600,
        sideItem: true,
      },
      {
        foodName: "Hushpuppies Side Order",
        calories: 300,
        sideItem: true,
      },
      {
        foodName: "Hushpuppies",
        calories: 300,
        sideItem: true,
        correctedTerm: "Hushpuppies Side Order",
      },
      {
        foodName: "Large Fries",
        calories: 694,
        sideItem: true,
      },
      {
        foodName: "Regular Fries",
        calories: 347,
        sideItem: true,
      },
      {
        foodName: "Cook Out Fries",
        calories: 465,
        sideItem: true,
      },
      {
        foodName: "Fries",
        calories: 465,
        sideItem: true,
        correctedTerm: "Cook Out Fries",
      },
    ],
  },
];

function getMenu(element) {
  let foodItemArr = [];
  menu.forEach((food) => {
    foodItemArr.push(food.foodItems[0]);
  });
  return mapOverArray(foodItemArr);
}
const mapOverArray = (arr) => {
  arr.map((element) => {
    element.foodName = `<h3 class="text-center text-mute" id="cardHead">${element.foodName}<\h3>`;
    element.foodType = `<h6 class="card-text text-success">${
      !element.foodType ? "Spicy" : element.foodType
    }</h6>`;
    element.protein = `<p class="card-text">${
      !element.protein ? "Natural" : element.protein
    }</p>`;
    element.calories = `<span class="text-center">${element.calories}</span>`;
  });
  return arr;
};
const newCards = (element) => {
  const newcard = document.createElement("div");
  newcard.classList.add("col-sm-3");
  newcard.classList.add("border");
  const img = `<img src="/partials/home Assets/visualsofdana-p1dTApnbTnI-unsplash.jpg" class="img-fluid">`;
  newcard.innerHTML +=
    element.foodName +
    img +
    element.foodType +
    element.protein +
    element.calories;
  return newcard;
};
const appendCard = (element) => {
  let menu = getMenu();
  menu.forEach((item) => {
    element.appendChild(newCards(item));
  });
};
const appendCardsToMenuPage = (element, json) => {
  element.insertAdjacentHTML("beforeend", json);
  const menuPage = document.querySelector("#menu-page");
  return appendCard(menuPage);
};
export async function fetchMenu(element) {
  element.innerHTML = "";
  const resText = helper().fetchData(URL);
  window.document.location.hash = "menu";
  return appendCardsToMenuPage(element, await resText);
}

export function autoMenu(element) {
  if (window.document.location.hash === "#menu") fetchMenu(element);
}

const autoLoad = (element) => {};
