<template>
  <div class="gallery">
    <Card>
      <img src='@/assets/suv.jpg'>
      <h2>{{  $store.state.car_info.brand }} {{ $store.state.car_info.model }}</h2>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Gallery',

}
</script>

<style scoped>
#gallery {margin: 20px;}
</style>
