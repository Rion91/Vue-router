<template>
  <div class="container mt-3">
    <h1 v-if="loading">Loading...</h1>
    <div v-else class="row">
      <div class="col-md-4 mb-4" v-for="(product, index) in products" :key="index">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" alt="Product image" class="product-image">
            <h6 class="mt-2">{{ product.title }}</h6>
            <p class="my-2 text-muted">$ {{ product.price }}</p>

            <router-link class="btn btn-primary btn-block" :to="`/product/${product.id}`">More Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductHome',
  data() {
    return{
      loading: false,
      products: []
    }
  },

  created(){
    this.loading = true
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.loading = true;
        })
  }
}
</script>

<style>
.product-image {
  height: 150px;
}
</style>
