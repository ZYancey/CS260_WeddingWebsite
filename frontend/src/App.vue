<template>
  <div id="app">
    <div class="header">
    <div class="brand"> 
      <h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/reception">Reception</router-link> |
      <router-link to="/registry">Registry</router-link> |
      <router-link to="/rsvp">RSVP</router-link>
    </nav> </h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>


<div class="footer l-box is-center">
   <a class="nav-link" href="https://github.com/ZYancey/CS260_WeddingWebsite"><img class="git" src="./assets/GitHub-Mark-64px.png" width=20px></a>
   </div>
</div>

</template>

<style>

.footer {
    background-color: #F7F5F7;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.l-box {
padding: 10px;
}
.is-center {
text-align: center;
}


  .git{
      width: 25px;
  }


body {
  margin: 0px;
  background: #F7F5F7;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  position: relative;
  display: block;
}

.brand {
  display: relative;
  vertical-align: center;
  padding: 10px 100px;
}

.brand h1 {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  background: #eaeaea;
  padding: 10px 50px;
  border-radius: 20px;
  font-size: 18px;
}

.brand h2 {
  font-size: 12px;
  padding: 10px;
  margin-top: 12px;
}

.main {
  padding: 20px 100px;
}

.pure-button {
  font-size: 10px;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 12px;
}

.space-right {
  margin-right: 10px;
}

a {
  color: #000000;
}

.pure-button-primary {
  background-color: #ffad60;
  color: #333;
  border-radius: 30px;
}
</style>
