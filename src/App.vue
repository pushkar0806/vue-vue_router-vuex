<template>
  <div id="app">
   <div id="header">
     <span><b>Car Gallery</b></span>
   </div>

    <div id="main">
      <div id="nav">
        <router-link to='/' class="navLinks">Introduction</router-link>
        <router-link to='/spec' class="navLinks">Tech Specs</router-link>
        <router-link to='/history' class="navLinks">History</router-link>
      </div>
      <router-view/>
    </div>

   <div id="footer">
     <span>Copyright @ Pushkar - 2020</span>
   </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.content{
    font-size:16px;text-align:left;margin:20px;
}
#header{
  position:fixed;
  top:0;
  left:0;
  height:45px;
  width:100%;
  background:#42b983;
  line-height:45px;
  z-index:1
}
#title{font-size:22px;color:white;font-family:impact}
#main{padding-top:45px;padding-bottom:50px;} 
#footer{
  position:fixed;
  bottom:0;
  left:0;
  height:45px;
  width:100%;
  background:#42b983;
  font-size:16px;
  line-height:45px;
  color:white;
  font-family: 'Avenir'
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

.navLinks {
      padding-left: 14px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
