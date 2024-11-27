<template>
  <div id="app">
    <h1>Food Waste Tracker</h1>

    <!-- Scrollable Food Selection -->
    <div class="food-selection">
      <h2>Select a Food Item</h2>
      <div class="food-list">
        <div class="food-item" v-for="food in foods" :key="food.id">
          <img :src="food.image" :alt="food.name" class="food-image" />
          <button @click="selectFood(food)">{{ food.name }}</button>
        </div>
      </div>
    </div>

    <!-- Waste Form Section -->
    <div v-if="selectedFood" class="waste-form">
      <h2>Waste Information for {{ selectedFood.name }}</h2>
      <form @submit.prevent="submitWasteForm">
        <div>
          <label for="amountWasted">Amount Wasted:</label>
          <!-- Range input for amount wasted -->
          <input
              type="range"
              v-model="wasteForm.amountWasted"
              min="0"
              max="100"
              step="1"
              id="amountWasted"
              required
          />
          <span>{{ wasteForm.amountWasted }}%</span> <!-- Display selected percentage -->
        </div>

        <!-- Reason Dropdown -->
        <div>
          <label for="reason">Reason for Waste:</label>
          <select v-model="wasteForm.reason" required>
            <option value="" disabled>Select a reason</option>
            <option value="Spoiled">Spoiled</option>
            <option value="Not enough time to eat">Not enough time to eat</option>
            <option value="Cooked too much">Cooked too much</option>
            <option value="Didn't like it">Didn't like it</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <!-- Location of Waste -->
        <div class="scrollable-select">
          <label for="location">Location of Waste:</label>
          <select v-model="wasteForm.location" required>
            <option value="" disabled>Select a location</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Outside">Outside</option>
            <option value="Office">Office</option>
            <option value="School">School</option>
            <option value="Hospital">Hospital</option>
            <option value="Cafeteria">Cafeteria</option>
            <option value="Home">Home</option>
          </select>
        </div>

        <!-- Additional Comments -->
        <div>
          <label for="comments">Additional Comments:</label>
          <textarea v-model="wasteForm.comments" placeholder="Add comments"></textarea>
        </div>

        <button type="submit">Submit Waste Info</button>
      </form>
    </div>

    <!-- Waste List Section -->
    <div v-if="wasteEntries.length > 0" class="waste-list">
      <h2>Wasted Food Entries</h2>
      <div v-for="entry in wasteEntries" :key="entry.id" class="waste-entry">
        <p><strong>Food:</strong> {{ entry.foodName }}</p>
        <p><strong>Amount Wasted:</strong> {{ entry.amountWasted }}%</p>
        <p><strong>Reason:</strong> {{ entry.reason }}</p>
        <p><strong>Location:</strong> {{ entry.location }}</p>
        <p><strong>Comments:</strong> {{ entry.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { foods } from '../temp-data'; // Import the food data from data-item.js

export default {
  name: 'App',
  data() {
    return {
      foods: foods,  // Use the imported food data here
      selectedFood: null,
      wasteForm: {
        amountWasted: "",
        reason: "",
        location: "",
        comments: ""
      },
      wasteEntries: JSON.parse(localStorage.getItem('wasteEntries')) || []  // Persist waste entries in localStorage
    };
  },
  methods: {
    selectFood(food) {
      this.selectedFood = food;
    },
    submitWasteForm() {
      const newEntry = {
        id: Date.now(),
        foodName: this.selectedFood.name,
        amountWasted: this.wasteForm.amountWasted,
        reason: this.wasteForm.reason,
        location: this.wasteForm.location,
        comments: this.wasteForm.comments
      };

      this.wasteEntries.push(newEntry);
      // Save waste entries to localStorage for persistence
      localStorage.setItem('wasteEntries', JSON.stringify(this.wasteEntries));
      console.log('Updated waste entries:', this.wasteEntries);

      // Reset the form after submission
      this.wasteForm.amountWasted = "";
      this.wasteForm.reason = "";
      this.wasteForm.location = "";
      this.wasteForm.comments = "";
      this.selectedFood = null;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.food-selection {
  margin: 20px 0;
}

.food-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 300px;
  overflow-y: scroll;
}

.food-item {
  display: inline-block;
  margin: 10px;
  text-align: center;
}

.food-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.waste-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.waste-form input,
.waste-form select,
.waste-form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.waste-list {
  margin-top: 20px;
  max-height: 400px;
  overflow-y: scroll;
}

.waste-entry {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.waste-entry p {
  margin: 5px 0;
}
</style>
