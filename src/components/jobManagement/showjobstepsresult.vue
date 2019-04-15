<template>
<<<<<<< HEAD
  <v-container grid-list-md>
    <v-flex xs10 ml-3>
      <ul class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/processDefinitionList">Process Definition</a></li>
        <li><a href="/jobhistorylist">Jobs History</a></li>
        <li>{{job_name}}({{job_id}})</li>
      </ul>
    </v-flex>
    <v-card>
      <v-card-title>
        <v-layout row wrap justify-start>
          <v-flex>
            <h3 style="text-align:left;">Job Details</h3>
          </v-flex>
        </v-layout>
      </v-card-title>
      <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered">
        <tbody style="text-align: left;">
          <tr>
            <td colspan="2" v-if="status!='completed' && status!='terminated' && isfromcurrentlist">
              <div class="float-left" v-if="status!='completed' && status!='terminated'">
                <button class="btn btn-default font-blue-alt" role="button" v-on:click="get_steps_details()">Refresh</button>
              </div>
            </td>
            <td colspan="2" v-if="isfromcurrentlist">
              <div class="float-right" v-if="isfromcurrentlist">
                <router-link class="btn btn-default font-blue-alt" to="/currentjoblist" id="current job list">Back To
                  Current Job List</router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <v-data-table :headers="headers" :items="step_list" :search="search">
        <template slot="items" slot-scope="props">
          <td>{{props.index+1}}</td>
          <td>{{props.item[0]}}</td>
          <td>{{props.item[1]}}</td>
          <td>{{props.item[2]}}</td>
          <td>{{props.item[3]}}</td>
          <td>{{props.item[4]}}</td>
          <td>{{props.item[5]}}</td>
          <td>{{props.item[8]}}</td>
          <td>{{props.item[6]}}</td>
          <td>{{props.item[7]}}</td>
          <!-- <td v-else>N/A</td>
=======
<v-container grid-list-md>
<v-flex xs10 ml-3>
            <ul class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/processDefinitionList">Process Definition</a></li>
              <li><a href="/jobhistorylist">Jobs History</a></li>
              <li>Show Job Steps Result</li>
            </ul>
            </v-flex>
    <v-card>
            <v-card-title>
                <v-layout row wrap justify-start>
                    <v-flex>
                     <h3 style="text-align:left;">Job Details</h3>   
                    </v-flex>
                </v-layout>
            </v-card-title>
            <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered">
              <tbody style="text-align: left;">
              <tr>
                <td>Job Id</td><td>{{job_id}}</td>
              </tr>
              <tr>
                <td>Mode</td><td>{{mode}}</td>
              </tr>
              <tr>
                <td>Status</td><td>{{status}}</td>
              </tr>
              <tr>
                <td colspan="2" v-if="status!='completed' && status!='terminated' && isfromcurrentlist">
                  <div class="float-left" v-if="status!='completed' && status!='terminated'">
                    <button class="btn btn-default font-blue-alt" role="button" v-on:click="get_steps_details()">Refresh</button>
                </div>
                <div class="float-right" v-if="isfromcurrentlist"><router-link class="btn btn-default font-blue-alt" to="/currentjoblist" id="current job list">Back To Current Job List</router-link></div>
              </td>
            </tr>
            </tbody>
            </table>
            <v-data-table :headers="headers" :items="step_list" :search="search">
                <template slot="items" slot-scope="props">
                  <td>{{props.index+1}}</td>
                  <td>{{props.item.step_type}}</td>
                  <td>{{props.item.operation}}</td>
                  <td>{{props.item.table_name}}</td>
                  <td>{{props.item.query}}</td>
                  <td>{{props.item.step_status}}</id>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                  <td>{{props.item.query_result}}</td>
                  <td>{{props.item.step_start_time}}</td>
                  <td>{{props.item.step_end_time}}</td>
                  <td>{{props.item.processing_time}}</td>
<<<<<<< HEAD
                  <td>{{props.item.query}}</td>
                  <td>{{props.item.step_status}}</td> -->
        </template>
      </v-data-table>
    </v-card>
    <!-- <button type="button" name="cancel" class="btn btn-success" href="javascript:;" v-on:click="showConfirmDeleteAlert()" style="width:150px">Delete</button> -->
    <div style="display:none;position:absolute;top:50%;left:35%;padding:2px;" id="loadingSpinner" class="progress-overlay pad45A float_center"
      v-cloak>
      <!--   <img id="loadingSpinner" src="../../assets/images/spinner/loader-dark.gif" alt=""> -->
    </div>

    <simplert :useRadius="true" :useIcon="true" ref="simplert">
    </simplert>
  </v-container>
=======
                </template>
            </v-data-table>
            </v-card>
                  <!-- <button type="button" name="cancel" class="btn btn-success" href="javascript:;" v-on:click="showConfirmDeleteAlert()" style="width:150px">Delete</button> -->
            <div style="display:none;position:absolute;top:50%;left:35%;padding:2px;" id="loadingSpinner" class="progress-overlay pad45A float_center" v-cloak>
           <!--   <img id="loadingSpinner" src="../../assets/images/spinner/loader-dark.gif" alt=""> -->
           </div>

          <simplert :useRadius="true"
            :useIcon="true"
            ref="simplert">
          </simplert>
  </v-container>  
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</template>

<script>
  import config from '../../config.json'
  import Simplert from 'vue2-simplert'
  // import sessionCheck from '../../methods/sessionCheck'
  import { get as getToServer } from './../../methods/serverCall.js';
  import { GETALLSTEPSDETAIL } from '../../data/url_constants.js';
  import { SERVER_ERROR } from '../../data/client_message.js';
  var moment = require("moment-timezone")
  export default {
    components: {
      Simplert,
    },
    data () {
      return {
        search:"",
        snackbar:false,
        snackbartext:'',
        snackbartimeout:4000,
        colorValue:'error',
        loader: "loading",
        loading: false,
        step_list: [],
        job_id:'',
<<<<<<< HEAD
        job_name: '',
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        mode:'',
        status:'',
        ShowSuccessMessage: false,
        live_satus: [],
        isfromcurrentlist:false,
<<<<<<< HEAD
        headers: [
          // { text: 'Sr. No', align: 'left'},
          { text: 'Step type', value: 'step_type' },
          { text: 'Operation', value: 'operation' },
          { text: 'Table', value: 'table_name' },
          { text: 'Rows Affected', value: "query_result"}, 
          { text: 'Start Time' , value: "step_start_time"}, 
          { text: 'End Time', value: "step_end_time"},
          { text: 'Processing Time', value: 'processing_time'},
          { text: 'Query', value: "query"}, { text: 'Status' , value: "step_status"}],
=======
        headers: [{ text: 'Sr. No', align: 'left', sortable: false},
          { text: 'Step type', value: 'step_type' },
          { text: 'Operation', value: 'operation' }, { text: 'Table', value: 'table_name' },
          { text: 'Query', value: "query"}, { text: 'Status' , value: "step_status"}, { text: 'Affected Rows Count', value: "query_result"}, 
          { text: 'Start Time' , value: "step_start_time"}, 
          { text: 'End Time', value: "step_end_time"}, { text: 'Processing Time', value: 'processing_time'}],
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          
      }
    },
    mounted () {
      // sessionCheck(this);
      // $( "#Details" ).DataTable({"autoWidth": false,"scrollX":true})
<<<<<<< HEAD
      debugger;
      this.job_id =this.$route.params.jobid
      this.job_name = this.$route.params.jobname
=======
      // debugger;
      this.job_id =this.$route.params.jobid
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      this.mode = this.$route.params.mode
      this.status = this.$route.params.status
      this.isfromcurrentlist=this.$route.params.isfromcurrentlist
      this.get_steps_details()
    },
    methods: {
      get_steps_details(){
        // sessionCheck(this);
        var client_id = this.$session.get('client_id')
      getToServer(this, config.ENGINE_API_URL + GETALLSTEPSDETAIL +this.job_id,
        ).then(response => {
            var data = response
            var timezone_preference = this.$session.get('time_zone_preference')
            if(data){
<<<<<<< HEAD
              // data.map(function(obj){
              // if (isNaN(parseInt(obj.query_result,10)) || obj.query_result.length > 15)
              // obj.query_result = "N/A"
              // obj.step_start_time = moment(obj.step_start_time, "x").tz(timezone_preference).format('YYYY-MM-DD | HH:mm:ss')
            // })
=======
              data.map(function(obj){
              if (isNaN(parseInt(obj.query_result,10)) || obj.query_result.length > 15)
              obj.query_result = "N/A"
              // obj.step_start_time = moment(obj.step_start_time, "x").tz(timezone_preference).format('YYYY-MM-DD | HH:mm:ss')
            })
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
              this.step_list = data
            }
            
          }).catch(JobStepError => {
            if(JobStepError){
                  this.loader = null
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = JobStepError;
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

