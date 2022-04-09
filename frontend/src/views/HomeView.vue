<template>
  <div class="home">
    
    <div class="hero">
      
  <div class="heroBox">
    <head>
      <title>Yancey Creative Project</title>
    </head>
    <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <h1 class="fw-light mast">
            <Countdown font-size="46px" deadline="August 6, 2022"></Countdown></h1>
          <p class="lead">Until our big day!</p>
        </div>
      </div>
    </div>
  </header>

  </div>  
  
  
  </div><div class="wrapper">

    <h1 class="title"> Home </h1>
    <h2 class="desc"> Zack & Eden's Wedding Website </h2>
    <div class="intro">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Sit amet venenatis urna cursus eget nunc. Diam sollicitudin tempor id eu nisl nunc. Quam lacus suspendisse faucibus interdum posuere lorem. Interdum consectetur libero id faucibus. Volutpat diam ut venenatis tellus in metus. Non blandit massa enim nec dui nunc mattis enim ut. Et magnis dis parturient montes nascetur ridiculus mus. Tristique nulla aliquet enim tortor at auctor urna. Varius quam quisque id diam vel quam elementum pulvinar etiam. Leo in vitae turpis massa sed elementum tempus egestas sed. Condimentum id venenatis a condimentum vitae. Elementum sagittis vitae et leo duis ut diam quam. Tortor at risus viverra adipiscing at in tellus. Leo vel fringilla est ullamcorper eget. Elit duis tristique sollicitudin nibh sit. Nisl tincidunt eget nullam non nisi est. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.</p>
    </div>

  </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import Countdown from 'vuejs-countdown'

export default {

  name: "HomeView",
  components: {
    Countdown
  },
  methods:{
    async getCountDown(){
      
    }
  }
};
</script>



<style scoped>

  /* Text-centering */
  .title,
  .desc,
  .intro,
  .col,
  .container{
    text-align: center;
  }

  .title{
    padding-top: 40px;
  }
  .intro {
    margin: 1.75em 0 .75em;
    border-bottom: 3px double rgba(0, 0, 0, 0.05);
    margin-bottom: 1.75em;
  }

    .intro a {
    opacity: .7;
  }
  
  .intro a:hover {
    opacity: 1;
  }
  
  .intro h3 {
    font-size: .825em;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    margin: .25em .75em .75em;
  }
  
  .intro h3 a {
    font-weight: 400;
  }
  

  .wrapper{
      padding: auto;
      padding-top: 100px;
      padding-bottom: 20px;
  }

.vuejs-countdown .digit{
  font-size: 7.5rem !important; 
}

.vuejs-countdown .digit {
    font-size: 38px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0;
}

.lead{
  margin-top:30px;
  font-size: 5rem;
}
.masthead {
  height: 50vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: rgb(135, 135, 135);
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.heroBox {
  background: white;
  opacity: 0.80;
  display: inline;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
}

.hero::after {
  content: "";
  background-image: url("../assets/payson.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.hero img {
  height: 20px;
  margin: 0px;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 20px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>