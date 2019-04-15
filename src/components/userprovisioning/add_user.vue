<template>
  <div id="adduser">   
    <v-container grid-list-md text-xs-center>
      <v-form v-model="valid" ref="add_user_form">
        <v-flex xs10 ml-3>
            <ul class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/userlist">User List</a></li>
              <li><a>Add User</a></li>
            </ul>
            </v-flex>
        <v-card>
          <v-layout row wrap flex align-center justify-center>
            <v-flex xs7 class="text-xs-center">
                <v-layout row wrap>
                  <v-flex xs6 pr-3>
                     <v-text-field v-model="first_name" label="First Name" :rules="nameRules" required style="max-height:45px;"></v-text-field>
                  </v-flex>
                  <v-flex xs6 pl-3>
                     <v-text-field v-model="last_name" label="Last Name" :rules="nameRules" required style="max-height:45px;"></v-text-field>
                  </v-flex>
                  <v-flex xs6 pr-3>
                    <v-text-field v-model="email" label="Email" :rules="emailRules" required style="max-height:45px;"></v-text-field>
                  </v-flex>
                  <v-flex xs6 pl-3>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'visibility_off' : 'visibility'"
                      :rules="pwdRules"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6 pr-3>
                    <v-text-field
                      v-model="confirm_password"
                      :append-icon="show2 ? 'visibility_off' : 'visibility'"
                      :rules="confirmPwdRules"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Confirm Password"
                      hint="At least 8 characters"
                      @click:append="show2 = !show2"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6 pl-3>
                     <v-checkbox :label="`Enabled`" v-model="checkbox"></v-checkbox>
                  </v-flex>
                </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
        <v-layout row wrap mt-2>
          <v-flex xs12 class="text-xs-right">
            <v-btn color="primary" @click="submit" :loading="loading" :disabled="loading"  @click.native="loader='loading'">Save</v-btn>
            <v-btn color="primary" @click="clear" style="margin-right: 0px;">Cancel</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
    <v-snackbar v-model="snackbar" :center=true :top=true :timeout=snackbartimeout :color='colorValue'
        >
        {{ snackbartext }}
      </v-snackbar>
  </div>
</template>

<style scoped>
.v-text-field.v-text-field--solo .v-input__control{
  min-height: 20px;
}
#adduser .v-input--checkbox, label {
  margin-top:2%;
}
</style>

<script>
import config from "../../config.json"
import Breadcrumb from "../Breadcrumbs.vue"
import { post as postToServer } from './../../methods/serverCall.js';
import { get as getToServer } from './../../methods/serverCall.js';
import { ADD_USER, GET_USER } from '../../data/url_constants.js'
export default {
  data () {
      return {
        valid: false,
        snackbar:false,
        snackbartext:'',
        snackbartimeout:4000,
        colorValue:'error',
        loader: null,
        loading: false,
        show1: false,
        show2: false,
        valid: true,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        nameRules:[
          v => !!v || 'Name is required'
        ],
        checkbox: true,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        pwdRules: [
          v => !!v || 'Password is required',
          v => v.length >= 8 || 'Min 8 characters',
        ],
        confirmPwdRules: [
          v => !!v || 'Confirm Password is required',
          (v) => v == this.password || 'Password and Confirm Password must match'
        ],
      }
    },
    mounted () {
      if (this.$route.params.userid) {
        this.getUser()
      }
    },
    methods: {
      submit () {
        if (this.$refs.add_user_form.validate()) {
          if(this.$route.params.userid && this.$route.params.type && this.$route.params.type == 'edit'){
            this.updateUser()
          } else {
            this.addUser()
          }
        }
      },
      clear () {
        this.$refs.add_user_form.reset()
      },
      getUser() {
        console.log(this.$route.params.userid)
        getToServer(this, config.USER_PROVISION_URL + GET_USER +this.$route.params.userid).then(response => {
                var data = response
                this.first_name = data.first_name
                this.last_name = data.last_name
                this.email = data.username
           }).catch(error_response => {
            if(error_response){
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = error_response;
              this.loader = null 
            }
            else {
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = SERVER_ERROR;
            }
        })
     },
      addUser () {
        let l = this.loader
        this[l] = !this[l]
          var Authorization = this.$session.get('access_token')
          var client_id = this.$session.get('client_id')
          var UserData = {"username": this.email, "client_id": client_id, "first_name": this.first_name, "last_name": this.last_name, "password": this.password, "active": this.checkbox}
          postToServer(this, config.USER_PROVISION_URL + ADD_USER, UserData).then(userResponse  => {
                if(userResponse){
                  this.colorValue = 'success'
                  this.snackbar = true
                  this.snackbartext = 'User added successfully';
                  this.$cookies.set('user_add', true)
                  this.$router.push("/userlist")
                }
            }).catch(error_response => {
          if(error_response){
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = error_response;
              this[l]  = false
              this.loader = null
            }
            else {
              this.snackbar = true
              this.snackbartext = 'Something went wrong.Try Again';
              this.colorValue = 'error'
              this[l]  = false
              this.loader = null
              
            }
      });
    },
    updateUser () {
        let l = this.loader
        this[l] = !this[l]
          var Authorization = this.$session.get('access_token')
          var client_id = this.$session.get('client_id')
          var UserData = {"userid": this.$route.params.userid, "username": this.email, "client_id": client_id, "first_name": this.first_name, "last_name": this.last_name, "password": this.password, "active": this.checkbox}
          postToServer(this, config.USER_PROVISION_URL + UPDATE_USER, UserData).then(userResponse  => {
                if(userResponse){
                  this.colorValue = 'success'
                  this.snackbar = true
                  this.snackbartext = 'User updated successfully';
                  this.$cookies.set('user_add', true)
                  this.$router.push("/userlist")
                }
            }).catch(error_response => {
          if(error_response){
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = error_response;
              this[l]  = false
              this.loader = null
            }
            else {
              this.snackbar = true
              this.snackbartext = 'Something went wrong.Try Again';
              this.colorValue = 'error'
              this[l]  = false
              this.loader = null
              
            }
      });
      }
    }
  }
</script>