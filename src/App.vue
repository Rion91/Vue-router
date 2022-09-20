<template>
  <div>
    <MenuBar/>

    <router-view/>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
export default {
  name:"App",
  components: {MenuBar},
}
</script>
