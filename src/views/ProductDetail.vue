<template>
  <div class="container mt-3">
    <h1 v-if="loading">Loading...</h1>
    <div v-else class="row">
      <div class="col-md-4 p-5">
        <img :src="product.image" class="img-fluid" alt="product image">
      </div>
      <div class="col-md-8 p-5">
        <h1 class="display-4">{{ product.title }}</h1>
        <h3 class="mt-5 text-primary">$ {{ product.price }}</h3>
        <p class="mt-5">{{ product.description }}</p>

        <div class="d-flex justify-content-between mt-5">
          <router-link to="/products" class="btn btn-outline-secondary">Go Back</router-link>
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductDetail',
  data() {
    return {
      loading: false,
      product: {},
    }
  },
  created() {
    this.loading = true
    axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(response => {
          this.product = response.data
          this.loading = false
        })
        .catch(e => {
          this.loading = true;
        })
  }
}
</script>
