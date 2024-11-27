<template>
  <div class="grid-wrap" v-if="isFoodInitialized">
    <div class="d-flex justify-content-center">
      <div class="cover">
        <img :src="food.image"/>
      </div>
      <div class="ms-4">
        <div class="d-flex mt-4">
          <h1 class="title m-0">{{ food.name }}</h1>
          <span class="food-view-count d-flex align-items-center ms-2">
                        <i class="me-1 eye-icon material-icons">visibility</i>
                        {{ food.viewCount }}
                    </span>
          <div class="ms-auto d-flex align-self-center">
            <i class="share-icon material-symbols-outlined">share</i>
            <i class="ms-3 bookmark-icon material-symbols-outlined">bookmark</i>
            <i class="ms-3 heart-icon material-symbols-outlined">favorite</i>
          </div>
        </div>
        <div class="d-flex food-author">
          <i class="icon material-icons">restaurant_menu</i>
          <span class="author align-self-center ms-1">{{ food.chef }}</span>
        </div>
        <div class="rating mt-1">
          <span v-for="star in fullStars" :key="'full-' + star" class="star filled">★</span>
          <span v-if="hasHalfStar" class="star half">★</span>
          <span v-for="star in emptyStars" :key="'empty-' + star" class="star">★</span>
          <span class="rate-text ms-1">{{ food.rating }}</span>
        </div>
        <div class="desc mt-2">
          <h6 class="m-0">Description</h6>
          <p class="m-0 mt-1">{{ food.description }}</p>
          <div class="d-flex mt-1">
            <h6 class="m-0 align-self-center">ingredients:&nbsp;</h6>
            <p class="m-0"> {{ food.ingredients.join(", ") }}</p>
          </div>

          <div class="d-flex mt-1">
            <h6 class="m-0 align-self-center">Price:&nbsp;</h6>
            <p class="m-0"> ${{ food.price }}</p>
          </div>
        </div>
        <div class="action-btn mt-3">
          <button class="btn btn-order">Order Now</button>
          <button class="btn ms-3 btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="food-related-card">
      <div class="py-4">
        <h5 class="mx-4 px-1">You might also like</h5>
        <div class="mt-4 mx-4 carousel d-flex flex-wrap">
          <swiper ref="swiper" v-if="recommendedFoods.length > 0" :slides-per-view="'auto'"  :space-between="24" class="food-slider m-0" @swiper="onSwiper">
            <swiper-slide v-for="food in recommendedFoods" :key="food.id">
              <div class="food-related-cover">
                <router-link :to="'/menu/' + food.id">
                  <img :src="food.image" :alt="food.name" />
                  <p class="m-0 mt-2 food-related-title">{{ food.name }}</p>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
          <div class="carousel-navigation" v-if="recommendedFoods.length > slidesPerView">
            <button @click="previousSlide" class="carousel-button left">
              <i class="icon material-icons">arrow_back_ios</i>
            </button>
            <button @click="nextSlide" class="carousel-button right">
              <i class="icon material-icons">arrow_forward_ios</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="food-review-card py-4">
      <h5 class="mx-4 px-1">Reviews</h5>
      <div v-for="(review, index) in food.reviews" :key="index" class="m-4 p-3 review-card">
        <i class="icon material-icons float-end">more_vert</i>
        <div class="comment mb-4 mt-2">
          <span>{{ review.reviewText }}</span>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div class="">
            <i class="icon material-symbols-outlined">thumb_up</i>
            <i class="ms-3 icon material-icons">reply</i>
          </div>
          <div class="user-details me-2">
            <span>{{ review.userId }}</span>
            <span>{{ review.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- Show a loading or error message -->
    <p>Food not found or not initialized.</p>
  </div>
</template>

<script>
import { foods } from '../temp-data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "FoodDetailsPage",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      foods,
      food: foods.find(food => food.id === this.$route.params.id),
      userRating: null,
      slidesPerView: 7,
      swiper: null,
    };
  },

  computed: {
    isFoodInitialized() {
      return this.food !== undefined && this.food !== null;
    },
    fullStars() {
      return Math.floor(this.userRating || this.food?.rating || 0);
    },
    hasHalfStar() {
      return (this.userRating || this.food?.rating || 0) % 1 >= 0.5;
    },
    emptyStars() {
      return 5 - Math.ceil(this.userRating || this.food?.rating || 0);
    },
    selectedFood() {
      return foods.find(food => food.id === this.$route.params.id);
    },
    recommendedFoods() {
      if (!this.selectedFood) return [];
      return foods.filter(food =>
          food.id !== this.selectedFood.id &&
          food.ingredients.some(ingredients => this.selectedFood.ingredients.includes(ingredients))
      );
    },
  },
  watch: {
    '$route.params.foodId': function(newId) {
      this.food = foods.find(food => food.id === newId);
      this.userRating = null;
    }
  },
  mounted() {
    console.log('Route ID:', this.$route.params.id);
    this.food = foods.find(food => food.id === this.$route.params.id);
    if (!this.food) {
      console.error('Food not found!');
    }  },
  methods: {
    setRating(rating) {
      this.userRating = rating;
    },
    nextSlide() {
      if (this.swiper) {
        const currentIndex = this.swiper.activeIndex;
        const slidesToScroll = 3;
        const newIndex = currentIndex + slidesToScroll;

        if (newIndex < this.swiper.slides.length) {
          this.swiper.slideTo(newIndex);
        }
      }
    },
    previousSlide() {
      if (this.swiper) {
        const currentIndex = this.swiper.activeIndex;
        const slidesToScroll = 3;
        const newIndex = currentIndex - slidesToScroll;

        if (newIndex >= 0) {
          this.swiper.slideTo(newIndex);
        }
      }
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
}
</script>

<style>
.cover {
  border: none;
  transition: transform 0.2s;
  display: inline-block;
}

.cover img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.2s;
  margin: 10px;
  display: inline-block;
}

.food-view-count {
  font-size: 12px;
  color: #a2a2a2;
  font-weight: 600;
}

.eye-icon {
  font-size: 14px;
}

.share-icon, .bookmark-icon, .heart-icon {
  font-size: 20px;
  color: #a2a2a2;
}

.star {
  position: relative;
  color: #a2a2a226;
}

.star.filled {
  color: gold;
}

.star.half {
  color: transparent;
}

.star.half::after {
  content: '★';
  color: gold;
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
  top: -5%;
}

.rate-text {
  font-size: 10px;
  font-weight: 600;
  color: #a2a2a2;
}

.desc h6 {
  font-size: 12px;
  font-weight: 600;
  color: #212427cc;
}

.desc p {
  font-size: 12px;
  line-height: 1.7;
}

.btn-cook {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #57cc3c;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.btn-buy {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #ff5a5a;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>
