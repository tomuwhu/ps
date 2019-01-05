<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item>
        <router-link to="/">
          Kezdőlap
        </router-link>
      </b-nav-item>
      <b-nav-item-dropdown id="ddown" text="Oktatás" left>
        <b-dropdown-item>
          <router-link to="/about">
            Oktatás
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item>two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>three</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item>
        
      </b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Bree+Serif|Crimson+Text|Indie+Flower|Pacifico|Special+Elite');

/*
font-family: 'Crimson Text', serif;
font-family: 'Indie Flower', cursive;
font-family: 'Pacifico', cursive;
font-family: 'Bree Serif', serif;
font-family: 'Special Elite', cursive;
*/

#app {
  font-family: 'Crimson Text', serif;
}

#nav {
  margin: 6px;
  margin-left: 32px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
