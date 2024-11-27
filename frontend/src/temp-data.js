import pineapple from './assets/pineapple.jpeg';
import kiwi from './assets/kiwi.avif';
import spacar from './assets/spacar.jpg'
export const foods = [
  {
    id: "1",
    image: spacar,
    name: "Spaghetti Carbonara",
    rating: 4.5,
    viewCount: 1234,
    chef: "Chef Mario",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    cuisine: "Italian",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Pepper"],
    cookingTime: 30, // minutes
    price: 15.99,
    expirationDate: "2024-12-10", // Expiry date
    shelfLife: "3 days", // Shelf life after cooking
    wasteCategory: "Prepared Meal", // Category of waste
    consumption: [
      {
        userId: "User123",
        consumedAt: "2024-11-25", // Date of consumption
        portionSize: "1 plate", // Portion consumed
        location: "Home Kitchen", // Where the food was consumed
        methodOfConsumption: "Eat", // How it was consumed (e.g., "Eat", "Cooked", "Shared")
        comments: "Delicious, but a bit too creamy for my taste.", // User comments
      },
    ],
    waste: [
      {
        wastedAt: "2024-11-26", // Date of waste
        amountWasted: "Half plate", // Amount wasted
        reason: "Leftovers not eaten", // Reason for wasting
        location: "Home Kitchen", // Where the waste occurred
        storageCondition: "Stored in the fridge", // Storage condition (e.g., fridge, room temperature)
        comments: "The pasta got too dry and wasn't appetizing anymore.", // User comments
      },
    ],
  },
  {
    id: "2",
    image: pineapple,
    name: "Tacos al Pastor",
    rating: 4.7,
    viewCount: 987,
    chef: "Chef Diego",
    description: "Mexican-style tacos with marinated pork, pineapple, and cilantro.",
    cuisine: "Mexican",
    ingredients: ["Pork", "Pineapple", "Cilantro", "Onions", "Corn Tortillas"],
    cookingTime: 45,
    price: 12.99,
    expirationDate: "2024-12-05", // Expiry date
    shelfLife: "2 days", // Shelf life after cooking
    wasteCategory: "Prepared Meal", // Waste category
    consumption: [
      {
        userId: "SpicyLover",
        consumedAt: "2024-11-24", // Date of consumption
        portionSize: "2 tacos", // Portion consumed
        location: "Friend's House", // Where the food was consumed
        methodOfConsumption: "Eat", // How it was consumed
        comments: "The tacos had the perfect balance of flavor.", // User comments
      },
    ],
    waste: [
      {
        wastedAt: "2024-11-25", // Date of waste
        amountWasted: "3 tacos", // Amount wasted
        reason: "Overpurchased ingredients", // Reason for wasting
        location: "Home Kitchen", // Location of waste
        storageCondition: "Stored in room temperature", // Storage condition
        comments: "Bought too many ingredients, couldn’t finish them in time.", // User comments
      },
      {
        wastedAt: "2024-11-26",
        amountWasted: "2 tacos",
        reason: "Spoiled before use",
        location: "Fridge",
        storageCondition: "Refrigerated",
        comments: "The tacos got soggy from the sauce.", // User comments
      },
    ],
  },
  {
    id: "3",
    image: kiwi,
    name: "Kiwi Fruit Smoothie",
    rating: 4.3,
    viewCount: 745,
    chef: "Chef Ana",
    description: "A refreshing smoothie made with kiwi, banana, and yogurt.",
    cuisine: "Healthy",
    ingredients: ["Kiwi", "Banana", "Yogurt", "Honey"],
    cookingTime: 5, // minutes
    price: 8.99,
    expirationDate: "2024-11-30", // Expiry date for fruits
    shelfLife: "2 days", // Shelf life of fruit
    wasteCategory: "Fruit Waste", // Category of waste
    consumption: [
      {
        userId: "FruitFan88",
        consumedAt: "2024-11-22", // Date of consumption
        portionSize: "1 glass", // Portion consumed
        location: "Home Kitchen", // Location of consumption
        methodOfConsumption: "Drink", // Method of consumption
        comments: "Filling and refreshing, loved the taste of kiwi!", // User comments
      },
    ],
    waste: [
      {
        wastedAt: "2024-11-23", // Date of waste
        amountWasted: "1 kiwi", // Amount wasted
        reason: "Too ripe to use", // Reason for wasting
        location: "Home Kitchen", // Where the waste occurred
        storageCondition: "Stored in fruit basket", // How the fruit was stored
        comments: "The kiwi got too soft and couldn’t be used in the smoothie.", // User comments
      },
    ],
  },
];

export const products = [
  {
    name: "Pineapple",
    category: "Tropical Fruit",
    price: 7.99,
    description: "A whole fresh pineapple, full of flavor and perfect for fruit salads.",
    image: pineapple,
    weight: "900g",
    stock: 15,
    rating: 4.8,
    consumption: [
      {
        userId: "User123",
        consumedAt: "2024-11-25", // Date of consumption
        amountConsumed: "1 slice", // Amount consumed
        location: "Home Kitchen", // Location of consumption
        methodOfConsumption: "Eat", // How it was consumed
        comments: "Perfect for a refreshing fruit salad.", // User comments
      },
    ],
    waste: [
      {
        wastedAt: "2024-11-26", // Date of waste
        amountWasted: "Half pineapple", // Amount wasted
        reason: "Spoiled before use", // Reason for wasting
        location: "Fridge", // Location of waste
        storageCondition: "Stored in fridge", // Storage condition
        comments: "The pineapple was too ripe and went bad.", // User comments
      },
    ],
    expirationDate: "2024-12-15", // Expiry date
    shelfLife: "7 days", // Shelf life
  },
  {
    name: "Kiwi",
    category: "Berry",
    price: 3.50,
    description: "Kiwi fruit, tart and sweet, perfect for adding to fruit salads or smoothies.",
    image: kiwi,
    weight: "100g",
    stock: 40,
    rating: 4.8,
    consumption: [
      {
        userId: "User123",
        consumedAt: "2024-11-24", // Date of consumption
        amountConsumed: "2 kiwis", // Amount consumed
        location: "Home Kitchen", // Location of consumption
        methodOfConsumption: "Eat", // How it was consumed
        comments: "Loved the refreshing sour taste of kiwi!", // User comments
      },
    ],
    waste: [
      {
        wastedAt: "2024-11-25", // Date of waste
        amountWasted: "3 kiwis", // Amount wasted
        reason: "Not eaten in time", // Reason for wasting
        location: "Kitchen Fridge", // Where the waste occurred
        storageCondition: "Stored in fridge", // How the fruit was stored
        comments: "The kiwis got too mushy, couldn’t use them in smoothies.", // User comments
      },
    ],
    expirationDate: "2024-12-01", // Expiry date
    shelfLife: "5 days", // Shelf life
  },
];
