<style src="jointjs/dist/joint.min.css"></style>
<<<<<<< HEAD
<style src="material-icons/iconfont/material-icons.css"></style>
<style>
  @import "./assets/fontawesome-free-5.1.0-web/css/all.css";
  @import "./assets/css/googlefontmaterial.css";
  @import "./css/app.css";
=======
<style>
  @import "./assets/fontawesome-free-5.1.0-web/css/all.css";
  @import "./assets/css/googlefontmaterial.css"
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</style>

<template>
  <div id="app">
      <v-app>
          <v-content v-if='isloggedin'>
            <customHeader></customHeader>
<<<<<<< HEAD
              <v-container class="background" id="dashboard-routing" 
               :class="{'navigationPadding':!removeHeader, 'headerPadding':removeHeader}">
=======
              <v-container class="background">
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                  <router-view ></router-view>      
              </v-container>
        </v-content>
        <v-content v-else>
<<<<<<< HEAD
          <div class="" :style="{'background': ' RGB(51,51,51)', 'background-size': '100% 100%', 'min-height': imageHeight }">
=======
          <div class="" :style="{'background-image': 'url(' + backgroundImage + ')', 'background-size': '100% 100%', 'min-height':'680px' }">
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
              <v-container class="background">
                  <router-view ></router-view>      
              </v-container>
          </div> 
        </v-content>

          <!-- </div>  -->

      </v-app>
  </div>
</template>

<script>
import customHeader from './components/customHeader.vue'
import Register from './components/authorization/register'
import Schedule from './components/schedular/schedule'
import { sessioncheck } from './methods/user_session.js';

export default {
  name: 'app',
  data() {
      return {
<<<<<<< HEAD
        imageHeight:'530px',
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        backgroundImage: require('./assets/images/LasVegas.jpg'),
        isloggedin:false
      }
    },
<<<<<<< HEAD
    computed:{
      removeHeader() {
        return this.$route.path === '/businessobjectdesigner' || this.$route.path === '/Flowchart'
      }
    },
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
  components: {
    'customHeader': customHeader,
    'register':Register,
    'schedule':Schedule,
  },
<<<<<<< HEAD
  watch:{
    "$breadcrumbs":{
      handler(newVal){
        if(newVal)
        this.validate_routing();
      },
      deep:true
    }
  },
  mounted() {
    // this.isloggedin=true; 
=======
  mounted() {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    this.validate_routing();
  },
  methods: {
    validate_routing(){
      var breadcrumbsstring = this.$breadcrumbs[0].meta['breadcrumb'];
      var crump = breadcrumbsstring.split('/'),
      crumpLength = crump.length,
      key = crump[crumpLength-1];
      key =  key.replace(/ /g, '');
<<<<<<< HEAD
      let array = ['Register','Login', 'ForgotPassword', 'ResetPassword', 'ApprovalTask', 'ResendEmail'];
=======
      let array = ['Register','Login', 'ForgotPassword', 'ResetPassword'];
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      let param = array.includes(key)
      if(!param){
        sessioncheck(this)
        this.isloggedin = true
      }
      else {
<<<<<<< HEAD
        if(!this.$session.exists()){
          this.isloggedin = false
          // provide dynamic height to background
          this.imageHeight = window.innerHeight + 'px';
        }
        else
          window.location.href = "/dashboard"
=======
        if(!this.$session.exists())
          this.isloggedin = false
        else
          window.location.href = "/Flowchart"
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        }
      }
  },
}
</script>
<<<<<<< HEAD
<style scoped>
.navigationPadding{
  padding-top:110px !important;
}
.headerPadding{
  padding-top:35px !important;
=======

<style>
a {
  color: inherit !important;
}

.background {
  height: 100%
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#diagramContainer {
  padding: 20px;
  width: 80%;
  height: 150px;
  border: 1px solid gray;
}

.item {
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
}
</style>
