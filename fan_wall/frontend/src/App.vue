<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/fans">Fans</router-link> |
      <router-link to="/walls">Walls</router-link> |
      <router-link to="/events">Events</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Calistoga', cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b12183;
  background-image: url('./assets/astronomy-1867616_1920.jpg');
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #b12183;
}

#nav a.router-link-exact-active {
  color:#eeee14;
}
</style>

