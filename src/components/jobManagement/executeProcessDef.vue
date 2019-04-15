<template>
    <v-container style="padding-top:10px;max-width:100%">
    <v-form ref="form" v-model="valid">
      <v-flex xs10 ml-3>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/processDefinitionList">Process Definition</a></li>
          <li>Execute Process</li>
        </ul>
      </v-flex>
      <v-card class="elevation-7">
        <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
          <v-layout row wrap justify-start>
            <v-flex xs10 offset-xs1>
              <span style="float:left;font-size:30px;text-align:left;">Execute Process</span>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <v-layout justify-center row wrap>
                <v-flex xs6>
                  <v-text-field label="Process Definition Name"
                    v-model="PDName"
                    required
                    :rules="PDRules" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout justify-center row wrap>
                <v-flex xs6>
                  <v-autocomplete
                    :items="EnvironmentList"
                    item-text="name"
                    item-value="id"
                    label="Select Environment"
                    v-model="Environment"
                    required
                    :rules="EnvironmentListRules"
                    clearable>
                  </v-autocomplete>
                </v-flex>
              </v-layout>
              <v-layout row justify-center wrap>
                <v-flex xs6>
                  <v-layout  style="width:90%;">
                    <v-flex xs4 style="text-align: left;">
                      <label  class="v-label" style="margin-top: 15%;text-align: left;">Select Mode: 
                      </label>
                    </v-flex>
                    <v-flex xs8>
                      <v-radio-group v-model="ExecutionMode" row
                      :rules="ModeRules">
                          <v-radio class="radioClass" color="info" label="Final" value="final"></v-radio>
                          <v-radio class="radioClass" color="info" label="Proof" value="proof"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-layout row wrap mt-5>
        <v-flex xs12 class="text-xs-right" mr-2>
          <v-btn color="blue" @click="submit" style="color:white">
            Save
          </v-btn>                    
          <v-btn color="blue"  style="color:white">
            Cancel
          </v-btn>
        </v-flex>
      </v-layout>
      </v-form>
    </v-container>
</template>
<script>
import Breadcrumb from "../Breadcrumbs.vue"
import config from '../../config.json'
import { post as postToServer } from './../../methods/serverCall.js';
import { get as getToServer } from './../../methods/serverCall.js';
import { ENVIRONMENTLIST_BY_CLIENT, CREATE_NEW_JOB } from '../../data/url_constants.js';
import { SERVER_ERROR } from '../../data/client_message.js';
export default {
     name: 'Schedule',
     components: {
    Breadcrumb
  },
  mounted () {
    this.process_doc = this.$route.params.process_doc;
      if(this.process_doc)
      this.name = this.process_doc.process_definition_name;
      this.getEnvironmentList()
    },
    data() {
      return {
        valid: false,
        process_doc:null,
        PDName: '',
        EnvironmentList: [],
        ExecutionMode: null,
        Environment: null,
        PDRules: [v => !!v || 'Process Definition Name is required.'],
        ModeRules: [v => !!v || 'Execution Mode is required.'],
        EnvironmentListRules: [v => !!v || 'Environment is required.'],
      }
    },
  props: {
    msg: String
  },
  methods: {
    submit () {
            if (this.$refs.form.validate()) {
              // Native form submission is not yet supported
              this.CreateNewJob()
            }
          },
      getEnvironmentList () {
        this.PDName = this.process_doc.process_definition_name
        // this.PDName = "Process Definition Name"
        var data={"filter":[],
                  "sort": {}}
        postToServer(this, config.ENVIRONMENT_API_URL + ENVIRONMENTLIST_BY_CLIENT, data).then(response => {
            if(response){
            this.EnvironmentList = response
            // console.log(this.EnvironmentList)
            } else {
               this.errorMsg = response
            }
          },response => {
            // debugger;
            this.ShowErrorMessage=true
            this.ErrorMessage=response
          }).catch(EnvironmentError => {
            if(EnvironmentError){
                 this[l]  = false
                 this.loader = null 
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = EnvironmentError;
                }
                else {
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = SERVER_ERROR;
                }
          })
        },
      CreateNewJob(){
        var client_id = this.$session.get('client_id')
        postToServer(this, config.ENGINE_API_URL + CREATE_NEW_JOB, {
          'client_id': client_id,
          'process_definition_id': this.$route.params.process_definition_id,
          'created_by': this.$session.get('email'),
          'execution_environment': this.Environment,
          'mode_of_execution':this.ExecutionMode
        }).then(response => {
          if (response) {
              this.ShowErrorMessage=false;
              this.ShowSuccessMessage = true;
              this.sucessMessage = response.body;
            this.$router.push('/currentjoblist')
          }}).catch(ProcessDefError => {
          if(ProcessDefError){
                  this.loader = null 
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = ProcessDefError;
                }
                else {
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = SERVER_ERROR;
                }
        })
      },
  }
}
</script>
<style scoped>
 .radioClass >>> label{
    top: 5px !important;
} 
.radioClass >>> i{
    font-size: 30px
}
.customCheckbox >>> label{
    top: 5px !important;
}
/* .customCheckbox >>> i{
    top: 5px !important;
} */
.pointer{
    cursor: pointer;
}
.pointer >>> span{
    cursor: pointer;
}
.custWidth{
    width: 55px;
}
.customCheckbox >>> label{
    top: 5px !important;
}
</style>

