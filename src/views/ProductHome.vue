<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(product, index) in products" :key="index">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" alt="Product image">
            <h6 class="mt-2">{{ product.title }}</h6>
            <p class="my-2 text-muted">$ {{ product.price }}</p>

            <button class="btn btn-primary btn-block">More Details</button>
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
      products: []
    }
  },

  created(){
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data;
        })
  }
}
</script>

<style>
img {
  width: 100px;
  height: 150px;
}
</style>
