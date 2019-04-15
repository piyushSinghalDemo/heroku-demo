<template>
    <v-container grid-list-md>
        <v-flex xs10 ml-3>
            <ul class="breadcrumb">
              <li><a href="/">Home</a></li>
<<<<<<< HEAD
              <li>Process Definition List</li>
            </ul>
        </v-flex>
=======
              <li>Process Definition</li>
            </ul>
            </v-flex>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        <v-card>
            <v-card-title>
                <v-layout row wrap justify-start>
                    <v-flex xs3>
<<<<<<< HEAD
                  <v-autocomplete
                    :items="EnvironmentList"
                    item-text="name"
                    label="Select Environment"
                    v-model="Environment"
                    required
                    :rules="EnvironmentListRules"
                    v-on:change="getProcessDefList"
                    return-object>
                  </v-autocomplete>
                </v-flex>
                    <v-flex xs3 offset-xs2>
=======
                     <h3 style="text-align:  left;">Process Definitions</h3>   
                    </v-flex>
                    <v-flex xs3 offset-xs5>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                        <v-tooltip bottom>
                            <v-text-field slot="activator" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                            <span>Search data from list</span>
                        </v-tooltip>
                    </v-flex>
<<<<<<< HEAD
                    <v-flex>
                    <span v-if="this.Environment.allow_create == true">                        
                      <router-link :to="{ name: 'processdefinition', params: { 'env_id': this.Environment.id}}">
                     <v-btn style="color:blue">
                        Create Process Doc 
                      </v-btn>
                    </router-link>
                      </span>
                    </v-flex>
                </v-layout>

            </v-card-title>
            <v-data-table :headers="headers" :items="process_doc_list" :search="search">
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">{{ props.index+1 }}</td>
                  <td class="text-xs-left">{{ props.item.process_definition_name}}</td>
                  <td class="text-xs-left">{{ props.item.version}}</td>
                  <td class="text-xs-left">{{ props.item.created_by}}</td>
                  <td class="text-xs-left">
                    <v-layout row wrap justify-start>
                    <v-flex xs3>
                    <router-link :to="{ name: 'editprocessdef', params: { 'process_def_id': props.item.id }}">
                     <v-btn style="color:blue">
                        Edit
                      </v-btn>
                    </router-link>
                  </v-flex xs3>
                  <v-flex>
                    <router-link :to="{ name: 'executeprocess', params: { 'process_definition_id': props.item.id, 'process_doc': props.item}}">
                     <v-btn style="color:blue">
                        Execute 
                      </v-btn>
                    </router-link>
                  </v-flex>
                  <v-flex xs5>
                    <router-link :to="{ name: 'SelectEnvTypePublish', params: { 'env_id': Environment.id, 'env_name': Environment.name, 'promotion_path_id': 12, 'process_definition_id': props.item.id, 'process_definition_name': props.item.process_definition_name, 'process_definition_version': props.item.version, 'published_promotion_id': props.item.published_promotion_id}}">
                     <v-btn v-if="props.item.is_publish == false" style="color:blue">
                        Publish
                      </v-btn>
                    </router-link>
                  </v-flex>
                  </v-layout>
=======
                </v-layout>
            </v-card-title>
            <v-data-table :headers="headers" :items="process_doc_list" :search="search" 
            class="css-serial">
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left"></td>
                  <td class="text-xs-left">{{ props.item.process_definition_name}}</td>
                  <td class="text-xs-left">1</td>
                  <td class="text-xs-left">User</td>
                  <td class="text-xs-left">
                    <router-link :to="{ name: 'executeprocess', params: { 'process_definition_id': props.item.process_definition_id, 'process_doc': props.item}}">
                     <v-btn style="color:blue">
                        Execute
                      </v-btn>
                    </router-link>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                  </td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-card>
        <v-snackbar v-model="snackbar" :right=true :top=true :timeout=snackbartimeout :color='colorValue'
        >
        {{ snackbartext }}
      </v-snackbar>
    </v-container>
</template>
<script>
// import { post as postToServer } from './../../methods/serverCall.js';
import Breadcrumb from "../Breadcrumbs.vue"
import config from '../../config.json'
<<<<<<< HEAD
import { post as postToServer } from './../../methods/serverCall.js';
import { get as getToServer } from './../../methods/serverCall.js';
import { ALL_PROCESS_DEF, GET_ALL_ENV, GET_ALL_PROCESS_DEF_ENV} from '../../data/url_constants.js';
=======
import { get as getToServer } from './../../methods/serverCall.js';
import { ALL_PROCESS_DEF} from '../../data/url_constants.js';
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
import { SERVER_ERROR } from '../../data/client_message.js';
  export default {
    name: "datasourcelist",
    components: {
         Breadcrumb
      },
    data () {
      return {
        search: '',
        snackbar:false,
        snackbartext:'',
        snackbartimeout:4000,
        colorValue:'error',
<<<<<<< HEAD
=======
        loader: "loading",
        loading: false,
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        headers: [
          { text: 'Sr. No.', align: 'left', sortable: false},
          { text: 'Process Definition Name', value: 'process_definition_name' },
          { text: 'Version', value: '1' },
          { text: 'Created By', value: 'User' },
          // { text: 'Edit',sortable: false},
          { text: 'Action',sortable: false}, 
        ],
        process_doc_list: [],
<<<<<<< HEAD
        EnvironmentList: [],
        Environment: {'allow_create': false},
        EnvironmentListRules: [v => !!v || 'Environment is required.'],
      }
    },
    mounted() {
      // this.getProcessDefList();
      this.getEnvironmentList();
=======
      }
    },
    mounted() {
      this.getProcessDefList();
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    },
    methods: {
      getProcessDefList () {
        var client_id = this.$session.get('client_id')
<<<<<<< HEAD
        getToServer(this, config.IDE_API_URL + GET_ALL_PROCESS_DEF_ENV + this.Environment.id
          ).then(response => {
            debugger;
=======
        getToServer(this, config.IDE_API_URL + ALL_PROCESS_DEF + client_id
          ).then(response => {
            // debugger;
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            var data = response
            if(data){
            this.process_doc_list = data
            } else {
                data = {}
                this.process_doc_list = data
              }
          }).catch(ProcessDocError => {
            if(ProcessDocError){
              this.loader = null 
              this.snackbar = true
              this.colorValue = 'error'
<<<<<<< HEAD
              this.process_doc_list = []
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
              this.snackbartext = ProcessDocError;
            }
            else {
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = SERVER_ERROR;
            }
        });
        },
<<<<<<< HEAD
        getEnvironmentList () {
        getToServer(this, config.ENVIRONMENT_API_URL + GET_ALL_ENV + this.$session.get('client_id')).then(response => {
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
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    }
  }
</script>
<style>
.iconFormat{
    margin-right: 5px;
    cursor: pointer;
}
<<<<<<< HEAD
=======
.css-serial {
  counter-reset: serial-number;  /* Set the serial number counter to 0 */
}

.css-serial td:first-child:before {
  counter-increment: serial-number;  /* Increment the serial number counter */
  content: counter(serial-number);  /* Display the counter */
}
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</style>

