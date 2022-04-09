<template>
  <div class="home">
    
    <div class="hero">
      
  <div class="heroBox">
    <head>
      <title>Yancey Creative Project</title>
    </head>

    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          
          
          <h1 class="fw-light" id="mast"></h1>


          <p class="lead"></p>
          <div class="intro">

          <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-3"> 
              <a href="https://github.com/ZYancey/CS260_WeddingWebsite"> <button class="button-links b-target pure-button">Target Registry</button></a> </div>
            <div class="pure-u-1 pure-u-md-1-3"> 
              <a href="https://github.com/ZYancey/CS260_WeddingWebsite"> <button class="button-links b-venmo pure-button">Venmo</button> </a> </div>
            <div class="pure-u-1 pure-u-md-1-3"> 
              <a href="https://github.com/ZYancey/CS260_WeddingWebsite"> <button class="button-links b-amz pure-button">Amazon Registry</button>  </a> </div>
          </div>
        


        <p>INSERT VENMO QR CODE HERE IN ADDITION TO ABOVE LINK
        </p>


      <div class="v-container">
        <div class="v-row">
            <div id="historical">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Sit amet venenatis urna cursus eget nunc. Diam sollicitudin tempor id eu nisl nunc. Quam lacus suspendisse faucibus interdum posuere lorem. Interdum consectetur libero id faucibus. Volutpat diam ut venenatis tellus in metus. Non blandit massa enim nec dui nunc mattis enim ut. Et magnis dis parturient montes nascetur ridiculus mus. Tristique nulla aliquet enim tortor at auctor urna. Varius quam quisque id diam vel quam elementum pulvinar etiam. Leo in vitae turpis massa sed elementum tempus egestas sed. Condimentum id venenatis a condimentum vitae. Elementum sagittis vitae et leo duis ut diam quam. Tortor at risus viverra adipiscing at in tellus. Leo vel fringilla est ullamcorper eget. Elit duis tristique sollicitudin nibh sit. Nisl tincidunt eget nullam non nisi est. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.</p>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>

  </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "HomeView",
  components: {
    //   HelloWorld,
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
  .historical{
    width: 100%;
  }

  .b-venmo{
    background: rgb(66, 184, 221);
  }

    .b-target{
    background: rgb(221, 66, 66);
  }

    .b-amz{
    background: rgb(221, 175, 66);
  }

  .button-links{
     font-size: 32px;
   }

  .qr-code{
    width: 50%;
    height: 50%;
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
  


  .col_sm{
      text-align: center;
  }

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  padding: 30px;
  display: flex;
}

.heroBox {
  background: white;
  opacity: 0.95;
  display: inline;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
}

.hero::after {
  content: "";
  background-image: url("../assets/shade.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position:fixed;
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