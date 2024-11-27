<template>
  <div class="grid-wrap gy-3">
    <div class="row">
      <h3>All Consumption</h3>
      <div
          class="book-item gy-1 col-xs-12 col-sm-6 d-flex"
          v-for="food in foods" :key="food.id"
      >
        <router-link :to="'/consumptions/' + food.id">
          <div class="card book-cover">
            <img :src="food.image" alt="Food Image"/>
          </div>
        </router-link>
        <div class="book-details ms-1 pt-3">
          <router-link :to="'/consumptions/' + food.id">
            <h5 class="book-name m-0">{{ food.name }}</h5>
          </router-link>
          <div class="d-flex book-author my-1">
            <i class="icon material-icons">person</i>
            <span class="author align-self-center ms-1">{{ food.chef }}</span>
          </div>
          <p class="book-price my-2 limited-text">{{ food.description }}</p>
          <div>
            <span v-for="(ingredient, index) in food.ingredients" :key="index" class="book-genre-span">
              {{ ingredient }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodList",
  props: {
    foods: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.foods);
    console.log("empty");// Logs the foods prop when the component is mounted
  },
};
</script>
