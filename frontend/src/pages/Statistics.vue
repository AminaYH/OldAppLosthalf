<template>
  <div id="statistics">
    <h1>Food Waste Statistics</h1>

    <div v-if="totalWaste > 0">
      <p><strong>Total Waste:</strong> {{ totalWaste }} portions</p>
      <p><strong>Average Waste per Entry:</strong> {{ averageWaste }} portions</p>

      <h2>Waste Breakdown by Food</h2>
      <ul>
        <li v-for="(wastedAmount, foodName) in wasteByFood" :key="foodName">
          <strong>{{ foodName }}:</strong> {{ wastedAmount }} portions wasted
        </li>
      </ul>

      <h2>Advice</h2>
      <p>{{ consumptionAdvice }}</p>
    </div>

    <div v-else>
      <p>No waste data available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsPage',
  data() {
    return {
      wasteEntries: JSON.parse(localStorage.getItem('wasteEntries')) || [], // Retrieve waste entries from localStorage or initialize empty array
    };
  },
  computed: {
    totalWaste() {
      console.log("Current waste entries:", this.wasteEntries); // Debug log
      return this.wasteEntries.reduce((total, entry) => total + parseFloat(entry.amountWasted), 0).toFixed(2);
    },
    averageWaste() {
      if (this.wasteEntries.length === 0) return 0;
      return (this.totalWaste / this.wasteEntries.length).toFixed(2);
    },
    wasteByFood() {
      const wasteStats = {};
      this.wasteEntries.forEach(entry => {
        if (!wasteStats[entry.foodName]) {
          wasteStats[entry.foodName] = 0;
        }
        wasteStats[entry.foodName] += parseFloat(entry.amountWasted);
      });
      return wasteStats;
    },
    consumptionAdvice() {
      const waste = this.totalWaste;
      if (waste < 5) {
        return "Great job! You're wasting very little food. Keep it up!";
      } else if (waste >= 5 && waste < 10) {
        return "You're wasting a moderate amount of food. Try to better portion your meals.";
      } else {
        return "You are wasting a lot of food. Consider adjusting your portion sizes or saving leftovers.";
      }
    }
  },
  methods: {
    updateWasteEntries() {
      this.wasteEntries = JSON.parse(localStorage.getItem('wasteEntries')) || [];
    }
  }
};
</script>


<style scoped>
#statistics {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
}

p {
  font-size: 18px;
}

strong {
  font-weight: bold;
}
</style>
