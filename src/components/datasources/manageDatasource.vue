<template>
<<<<<<< HEAD
    <div>
   <v-layout row wrap pl-4 mb-3 class="breadcrumbBackground">
            <v-flex xs8 style="margin:auto">
                <v-layout row wrap>
                    <v-flex xs12 pl-3>
                        <ul class="breadcrumb">
                          <li>
                            <router-link to="/dashboard">Home</router-link>
                          </li>
                          <li>
                            <router-link to="/datasourcelist">Data Sources</router-link>
                            </li>
                          <li><span style="font-weight:400;font-size:14px">
                            <input type="text" autofocus onFocus="this.select()"  v-model="DatasourceName" @blur="untitle_datasource" ref="dsname"/></span></li>
                        </ul>
                    </v-flex>
                     <v-flex >
                        
                    </v-flex>
                </v-layout>
                
            </v-flex>
            <v-flex xs4 text-xs-right pr-4 pb-1 style="">
               
            </v-flex>
        </v-layout>
    <v-form ref="form" v-model="valid">
            <!-- <v-flex xs10 ml-1 mb-3>
              <ul class="breadcrumb">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/datasourcelist">Data Sources</router-link>
                  </li>
                <li><span style="font-weight:400;font-size:18px;">
                  <input type="text" autofocus style='border-color:#ffeeee !important;' v-model="DatasourceName" @blur="untitle_datasource" ref='dsname'/></span></li>
              </ul>
            </v-flex> -->
        <v-card class="elevation-7">
            <!-- <v-card-title style="background:#494949;color:white;padding:10px;">
                <v-flex style="text-align:left">
                    <span style="font-size:25px">Datasource Details</span>
                </v-flex>
            </v-card-title> -->
            <v-card-text style="padding-top:0px;">
              <v-container style="padding-top:0px;">
                <!-- <v-layout row wrap> -->
                    <v-flex xs12>
                        <v-layout row wrap>
                        <v-flex text-sm-left xs2>
                              <label class="v-label" style="margin-top: 13%;">Database Type:</label>
                          </v-flex>
                          <v-flex xs9>
                          <v-radio-group v-model="databaseType" row 
=======
    <v-container style="padding-top:10px;max-width:100%">
    <v-form ref="form" v-model="valid">
            <v-flex xs10 ml-3>
              <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/datasourcelist">Data Sources</a></li>
                <li><a href="#">Add Datasource</a></li>
                <li><span style="font-weight:400;font-size:15px;"><input type="text" v-model="DatasourceName" @blur="untitle_datasource"/></span></li>
              </ul>
            </v-flex>
                <v-layout row wrap id="radiogroup">
                    <v-flex xs12 ml-3 >
                        <v-radio-group v-model="row" row hide-details>
                            <v-radio class="radioClass label-margin" color="red" label="Datasource" value="datasource" ></v-radio>
                            <v-radio class="radioClass label-margin" color="red" label="Connection String" value="connectionString" disabled></v-radio>
                            <v-radio class="radioClass label-margin" color="red" label="Listner" value="listner" disabled ></v-radio>
                        </v-radio-group>
                    </v-flex>
                </v-layout>
        <v-card class="elevation-7">
            <v-card-title style="background:#494949;color:white;padding:10px;">
                <v-layout row wrap justify-start>
                    <v-flex xs10 offset-xs1>
                        <span style="float:left;font-size:25px">Datasource Details</span>
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-layout row wrap>
                        <v-flex text-sm-left xs3>
                              <label class="v-label" style="margin-top: 10%;">Database Type:</label>
                          </v-flex>
                          <v-flex xs9>
                              <v-radio-group v-model="databaseType" row 
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                              hide-details :rules="databaseTypeRules" @change="setPort">
                            <v-radio v-for="db in databaseTypes"
                              :key="db.id"
                              :label="db.name"
<<<<<<< HEAD
                              :value="db.id" :color="colorCode" class="label-margin"></v-radio>
=======
                              :value="db.id" class="label-margin"></v-radio>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                        </v-radio-group>
                          </v-flex>
                        </v-layout>
                         <v-layout row wrap>
                        <v-flex xs6>
                              <v-text-field label="Host"
                              style="margin-right:10px;"
                              v-model="Host"
                              required
                              :rules="HostRules"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                              <v-text-field label="Port"
                              style="margin-left:10px;"
<<<<<<< HEAD
                              v-model="Port" required
                              @keypress="isNumber"
                              :rules="PortRules"></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs6>
                              <v-text-field label="Database Name"
                              style="margin-right:10px;"
                              v-model="Database"
                              required
                              :rules="DatabaseRules"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                              <v-text-field label="Schema Name"
                              style="margin-left:10px;"
                              v-model="SchemaName"
                              required
                              :rules="SchemaNameRules"
                              ></v-text-field>
                            </v-flex>
                        </v-layout>
=======
                              v-model="Port"
                              :type="show1 ? 'text' : 'number'"
                              required
                              :rules="PortRules"></v-text-field>
                          </v-flex>
                        </v-layout>

                          
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                        <v-layout row wrap>
                          <v-flex xs6>
                              <v-text-field label="User Name"
                              style="margin-right:10px;"
                              v-model="UserName"
                              required
                              :rules="UserNameRules"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                              <v-text-field label="Password"
                              style="margin-left:10px;"
                              v-model="UserPassword"
                              :append-icon="show1 ? 'visibility_off' : 'visibility'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              required
                              :rules="UserPasswordRules"></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
<<<<<<< HEAD
                          <v-flex text-sm-left xs6>
                             <v-autocomplete clearable autocomplete :items="agent_list" item-text="agent_name" :rules="agentRules" v-model="mapped_agent" label="Select Agent" style="margin-right:10px; margin-top:6px;" return-object></v-autocomplete>
                          </v-flex>
                          <v-flex xs6>
                          <v-text-field label="Timeout (in seconds)"
                              style="margin-right:10px;"
                              v-model="Timeout1"
                              @keypress="isNumber"
                              required
                              :rules="TimeoutRules"></v-text-field>
                            </v-flex>
                          </v-layout>
                            <v-layout row wrap>
                            <v-flex xs6>
                              <v-textarea label="Description" rows=1
                              v-model="Description" style="margin-right:10px;"></v-textarea>
                          </v-flex>
                          <v-flex xs6 v-if="databaseType === 'db2' || databaseType === 'db2i'">
                          <v-text-field label="Database Nickname(if available)"
                              style="margin-left:10px;"
                              v-model="db2nickname"></v-text-field>
                          </v-flex>
                        </v-layout>                        
                    </v-flex>
                <!-- </v-layout> -->
              </v-container>
=======
                          <v-flex xs6>
                              <v-text-field label="Schema Name"
                              style="margin-right:10px;"
                              v-model="SchemaName"
                              required
                              :rules="SchemaNameRules"></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                              <v-text-field label="Database Name"
                              style="margin-left:10px;"
                              v-model="Database"
                              required
                              :rules="DatabaseRules"></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                        <v-flex text-sm-left xs3>
                              <label class="v-label" style="margin-top: 10%;">Datasource Property Type:</label>
                          </v-flex>
                          <v-flex xs9>
                              <v-radio-group v-model="DatasourceProperty" row 
                              hide-details :rules="databaseTypeRules">
                            <v-radio v-for="db in datasourceProperties"
                              :key="db.id"
                              :label="db.name"
                              :value="db.id" class="label-margin"></v-radio>
                        </v-radio-group>
                          </v-flex>
                            
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs6>
                          <v-text-field label="Timeout(in seconds)"
                              style="margin-right:10px;"
                              v-model="Timeout1"
                              :type="show1 ? 'text' : 'number'"
                              required
                              :rules="TimeoutRules"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                              <v-textarea label="Description" rows=1
                              v-model="Description" style="margin-left:10px;"></v-textarea>
                          </v-flex>
                        </v-layout>
                        
                    </v-flex>
                </v-layout>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            </v-card-text>
        </v-card>
        <v-layout row wrap mt-5>
            <v-flex xs12 class="text-xs-right" mr-2>
<<<<<<< HEAD
                <v-btn outline :color="outlineColor" style="border-radius:10px"  @click="submit" >
                    Save
                </v-btn> 
                <v-btn outline :color="outlineColor" style="border-radius:10px" :loading="testConnectionLoader" 
                  @click="TestDBConnection" >
                    Test Connection
                </v-btn>
                <v-btn outline :color="outlineColor" style="border-radius:10px" @click="onCancel" >
=======
                <v-btn color="blue" @click="submit" style="color:white">
                    Save
                </v-btn> 
                <v-btn color="info" @click="TestDBConnection" style="color:white">
                    Test Connection
                </v-btn>
                <v-btn color="blue"  style="color:white">
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                    Cancel
                </v-btn>
            </v-flex>
        </v-layout>
        </v-form>
        <connectionstring v-if="type_connection_sting"></connectionstring>
<<<<<<< HEAD
        <v-snackbar v-model="snackbar" :top=true :right=true :timeout=snackbartimeout :color='colorValue'
        >
        {{ snackbartext }}
      </v-snackbar>
    </div>
=======
        <v-snackbar v-model="snackbar" :center=true :top=true :timeout=snackbartimeout :color='colorValue'
        >
        {{ snackbartext }}
      </v-snackbar>
    </v-container>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</template>
<script>
import config from '../../config.json'
import Breadcrumb from "../Breadcrumbs.vue"
import { post as postToServer } from './../../methods/serverCall.js';
import { get as getToServer } from './../../methods/serverCall.js';
<<<<<<< HEAD
import { ADD_DATASOURCE, DS_AND_DB_TYPES, CHECK_CONNECTION, UPDATE_DATASOURCE, GET_ALL_AGENT_MASTER } from '../../data/url_constants.js'
import {SERVER_ERROR} from '../../data/client_message.js'
import {COLOR_CODE, BTN_COLOR} from '../../data/macros.js'
export default {
     name: 'Schedule',
     data() {
      return {
        outlineColor:BTN_COLOR,
        colorCode:COLOR_CODE,
        testConnectionLoader:false,
=======
import { ADD_DATASOURCE, DS_AND_DB_TYPES, CHECK_CONNECTION, UPDATE_DATASOURCE } from '../../data/url_constants.js'
import {SERVER_ERROR} from '../../data/client_message.js'

export default {
     name: 'Schedule',
     mounted () {
       this.GetDSAndDBTypes()
    },
     data() {
      return {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        valid: false,
        snackbar:false,
        snackbartext:'',
        snackbartimeout:4000,
        colorValue:'error',
        loader: "loading",
        loading: false,
        DatasourceName: 'Untitled Datasource',
        databaseTypes: [],
        datasourceProperties: [],
<<<<<<< HEAD
        databaseType: "ms_sql",
        Host: '',
        // DatasourceProperty: null,
=======
        databaseType: null,
        Host: '',
        DatasourceProperty: null,
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        Port: '',
        UserName: '',
        UserPassword: '',
        Database: '',
        SchemaName: '',
        Description: '',
        Timeout1: '',
<<<<<<< HEAD
        agent_list:[],
        mapped_agent:'',
        type_connection_sting:  false,
        db2nickname:'',
=======
        type_connection_sting:  false,
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        show1: false,
        row:'datasource',
        databaseTypeRules: [v => !!v || 'Database Type is required.'],
        DatasourceNameRules: [v => !!v || 'Datasource Name is required.'],
        HostRules: [v => !!v || 'Host is required.'],
<<<<<<< HEAD
        // DatasourcePropertyRules:[v => !!v || 'Datasource Property is required.'],
=======
        DatasourcePropertyRules:[v => !!v || 'Datasource Property is required.'],
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        PortRules: [v => !!v || 'Port is required.',
                              v => v.length <= 6 || 'Port must be 4 digit'],
        UserNameRules: [v => !!v || 'User Name is required.'],
        UserPasswordRules: [v => !!v || 'Password is required.'],
        DatabaseRules: [v => !!v || 'Database Name is required.',
                              v => /^[a-zA-Z0-9-_ ]+$/.test(v) || 'Database Name must be valid'],
        SchemaNameRules: [v => !!v || 'Schema Name is required.',
                              v => /^[a-zA-Z0-9-_ ]+$/.test(v) || 'Schema Name must be valid'],
        TimeoutRules: [v => !!v || 'Timeout is required.',
        v => v > 0 || 'Timeout must be grater than 0'],
<<<<<<< HEAD
        agentRules: [
          v => !!v || 'Agent is required'
        ],
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      }
    },
     components: {
    Breadcrumb
  },
  props: {
    msg: String
  },
<<<<<<< HEAD
  mounted () {
       this.get_agent_details()
       this.GetDSAndDBTypes()
       if(this.$refs.dsname.$el)
        this.$refs.dsname.$el.focus()
      else this.$refs.dsname.focus()     
    },
  methods: {
    onCancel(){
      this.$router.push("/datasourcelist")
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
=======
  methods: {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.Generate_Connection_String()
        if(this.$route.params.datasourceid && this.$route.params.type && this.$route.params.type == 'edit'){
              this.updateData()
        } else {
          this.addDatasource()
        }
        }
    },        
    untitle_datasource(){
      if (!this.DatasourceName.trim()){
        this.DatasourceName = 'Untitled Datasource'
      }
    },
    setPort(){
<<<<<<< HEAD
          let portArray = {"ms_sql":"1433","oracle":"1521","db2":"50000","db2i":"446"}
=======
          let portArray = {"ms_sql":"1433","oracle":"1521","db2":"50000","db2i":"50000"}
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          // console.log("dbtype "+this.collection.form.dbtype);
          this.Port = portArray[this.databaseType];
    },
    GetDSAndDBTypes() {
<<<<<<< HEAD
        getToServer(this, config.DATA_SOURCE_URL + DS_AND_DB_TYPES +this.$route.params.datasourceid, true).then(response => {
=======
        getToServer(this, config.DATA_SOURCE_URL + DS_AND_DB_TYPES +this.$route.params.datasourceid).then(response => {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                var data = response
                // this.databaseTypes.push({"id":"Select DB type","name":"Select DB type"})
                for (var i = 0; i< data.database_name_dict.database.length; i++)
                {
                  this.databaseTypes.push(data.database_name_dict.database[i])
                }
                for (var j = 0; j< data.datasource_property_dict.datasource_property.length; j++)
                {
                  this.datasourceProperties.push(data.datasource_property_dict.datasource_property[j])
                }
                if(this.$route.params.datasourceid)
                  {
                    this.Host=data.datasource_details.datasource_info.host
                    this.Port=data.datasource_details.datasource_info.port
                    this.UserName=data.datasource_details.datasource_info.user
                    this.UserPassword=data.datasource_details.datasource_info.password
                    this.Database=data.datasource_details.datasource_info.database_name
                    this.SchemaName=data.datasource_details.datasource_info.schema_name
<<<<<<< HEAD
                    this.DatasourceName= this.$route.params.type == 'copy' ? 'Copy_of_'+data.datasource_details.datasource_info.datasource_name
                    :data.datasource_details.datasource_info.datasource_name;
                    this.databaseType=data.datasource_details.datasource_info.database_type
                    this.Timeout1=data.datasource_details.datasource_info.timeout
                    // this.DatasourceProperty=data.datasource_details.datasource_info.datasource_property
                    this.row=data.datasource_details.datasource_info.datasource_type
                    this.Description = data.datasource_details.datasource_info.description
                    if(data.datasource_details.datasource_info.db2nickname)
                      this.db2nickname = data.datasource_details.datasource_info.db2nickname
                    this.mapped_agent = {
                        'id': data.datasource_details.datasource_info.mapped_agent_id,
                        'agent_name':data.datasource_details.datasource_info.mapped_agent_name,
                      }
                    if(!data.datasource_details.datasource_info.mapped_agent_id && this.agent_list.length > 0)
                      this.mapped_agent = this.agent_list[0]
                    if(this.$refs.dsname.$el)
                        this.$refs.dsname.$el.focus()
                      else this.$refs.dsname.focus()
                     
=======
                    this.DatasourceName=data.datasource_details.datasource_info.datasource_name
                    this.databaseType=data.datasource_details.datasource_info.database_type
                    this.Timeout1=data.datasource_details.datasource_info.timeout
                    this.DatasourceProperty=data.datasource_details.datasource_info.datasource_property
                    this.row=data.datasource_details.datasource_info.datasource_type
                    this.Description = data.datasource_details.datasource_info.description
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                  }
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
    addDatasource(){
<<<<<<< HEAD
      var client_id = this.$session.get('client_id')
      var user_id = this.$session.get('user_id')
      var datasource_input_details = {
            "client_id": client_id,
            "user_id": user_id,
=======
      var datasource_input_details = {
            "client_id": "1",
            "user_id": "1",
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            "host": this.Host,
            "port": this.Port,
            "user": this.UserName,
            "password": this.UserPassword,
            "database_name": this.Database,
            "schema_name": this.SchemaName,
            "datasource_name": this.DatasourceName,
            "database_type": this.databaseType,
            "description": this.Description,
            "timeout": this.Timeout1,
<<<<<<< HEAD
            // "datasource_property": this.DatasourceProperty,
            "datasource_type": this.row,
            "connection_string": this.connection_string,
            'mapped_agent_id': this.mapped_agent.id,
            'mapped_agent_name': this.mapped_agent.agent_name,
          }
      if(this.databaseType === "db2" || this.databaseType === "db2i")
      {
        datasource_input_details["db2nickname"] =this.db2nickname
      }
=======
            "datasource_property": this.DatasourceProperty,
            "datasource_type": this.row,
            "connection_string": this.connection_string
          }

>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      var add_datasource_end_point = config.DATA_SOURCE_URL + ADD_DATASOURCE
      postToServer(this, add_datasource_end_point, datasource_input_details
        ).then(datasourceResponse  => {
            if(datasourceResponse){
              this.colorValue = 'success'
              this.snackbar = true
              this.snackbartext = datasourceResponse;
              this.$cookies.set('datasource_added', true)
              this.$router.push("/datasourcelist")
            }
        }).catch(DatasourceError => {
          if(DatasourceError){
              this.loader = null 
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = DatasourceError;
            }
            else {
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = SERVER_ERROR;
            }
      });
    },
    updateData () {
      var client_id = this.$session.get('client_id')
      var user_id = this.$session.get('user_id')
      var datasource_details = {
        'client_id': client_id,
        'user_id':user_id,
        'host': this.Host,
        'port': this.Port,
        'user': this.UserName,
        'password': this.UserPassword,
        'database_name': this.Database,
        'schema_name': this.SchemaName,
        'database_type': this.databaseType,
        'datasource_id':this.$route.params.datasourceid,
        'datasource_name': this.DatasourceName,
        'description':this.Description,
        'timeout':this.Timeout1,
<<<<<<< HEAD
        // 'datasource_property':this.DatasourceProperty,
        'datasource_type':this.row,
        'connection_string':this.connection_string,
        'mapped_agent_id': this.mapped_agent.id,
        'mapped_agent_name': this.mapped_agent.agent_name,
      }
      if(this.databaseType === "db2" || this.databaseType === "db2i")
      {
        datasource_details["db2nickname"] =this.db2nickname
=======
        'datasource_property':this.DatasourceProperty,
        'datasource_type':this.row,
        'connection_string':this.connection_string
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      }
      postToServer(this, config.DATA_SOURCE_URL + UPDATE_DATASOURCE, datasource_details
        ).then(datasourceResponse  => {
        if(datasourceResponse){
          this.colorValue = 'success'
          this.snackbar = true
          this.snackbartext = datasourceResponse;
          this.$cookies.set('datasource_added', true)
          this.$router.push("/datasourcelist")
        }
      }).catch(DatasourceError => {
      if(DatasourceError){
          this.loader = null 
          this.snackbar = true
          this.colorValue = 'error'
          this.snackbartext = DatasourceError;
        }
        else {
          this.snackbar = true
          this.colorValue = 'error'
          this.snackbartext = SERVER_ERROR;
        }
      });
    },

    Generate_Connection_String(){
      if(this.databaseType=='ms_sql'){
          this.connection_string='mssql://'+this.UserName+':'+this.UserPassword+'@'+this.Host+':'+this.Port+'/'+this.Database+"?driver=ODBC Driver 17 for SQL Server&; odbc_options='TDS_Version=7.2'"
      }
      else if(this.databaseType=='oracle'){
<<<<<<< HEAD
          this.connection_string='oracle+cx_oracle://'+this.UserName+':'+this.UserPassword+'@'+this.Host+':'+this.Port+'/'+this.Database+"?driver=FreeTDS"
=======
          this.connection_string='oracle+cx_oracle://'+this.UserName+':'+this.UserPassword+'@'+this.Host+':1'+this.Port+'/'+this.Database+"?driver=FreeTDS"
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
      }
      else if(this.databaseType=='db2'){
          this.connection_string='ibm_db_sa://'+this.UserName+':'+this.UserPassword+'@'+this.Host+'/'+this.Database
      } else if(this.databaseType=='db2i'){
          this.connection_string='ibm_db_sa+pyodbc400://'+this.UserName+':'+this.UserPassword+'@'+this.Host+'/'+this.Database
      }
    },
<<<<<<< HEAD
    get_agent_details(){
      var client_id = this.$session.get('client_id')
      var agent_endpoint = config.AGENT_API_URL + GET_ALL_AGENT_MASTER + client_id
      getToServer(this, agent_endpoint, true).then(response_data => {
        debugger
         if(response_data){
            this.agent_list = response_data
            //auto select agent
            if(!this.$route.params.datasourceid)
              this.mapped_agent = this.agent_list[0]
         }
        }).catch(error_response => {
          if(error_response){
            // this.snackbar = true
            // this.colorValue = 'error'
            // this.snackbartext = error_response;
          }
          else {
            // this.snackbar = true
            // this.colorValue = 'error'
            // this.snackbartext = SERVER_ERROR;
          }
        });
    },
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    TestDBConnection(){
      if (this.$refs.form.validate()) {
        var client_id = this.$session.get('client_id')
        var user_id = this.$session.get('user_id')
        this.Generate_Connection_String();
        var datasource_input_details = {
            "client_id": client_id,
            "user_id": user_id,
            "host": this.Host,
            "port": this.Port,
            "user": this.UserName,
            "password": this.UserPassword,
            "database_name": this.Database,
            "schema_name": this.SchemaName,
            "datasource_name": this.DatasourceName,
            "database_type": this.databaseType,
            "description": this.Description,
            "timeout": this.Timeout1,
<<<<<<< HEAD
            // "datasource_property": this.DatasourceProperty,
            "datasource_type": this.row,
            "connection_string": this.connection_string,
            "mapped_agent_id": this.mapped_agent.id,
          }
        var add_datasource_end_point = config.DATA_SOURCE_URL + CHECK_CONNECTION
        this.testConnectionLoader = true;
        postToServer(this, add_datasource_end_point, datasource_input_details, true
          ).then(response => {
          this.testConnectionLoader = false;
=======
            "datasource_property": this.DatasourceProperty,
            "datasource_type": this.row,
            "connection_string": this.connection_string
          }
        var add_datasource_end_point = config.DATA_SOURCE_URL + CHECK_CONNECTION
        postToServer(this, add_datasource_end_point, datasource_input_details
          ).then(response => {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          if (response) {
            this.loader = null 
            this.snackbar = true
            this.colorValue = 'success'
<<<<<<< HEAD
            this.snackbartext = 'Connection Successful';
=======
            this.snackbartext = response;
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          } 
          else{
            this.loader = null 
            this.snackbar = true
            this.colorValue = 'error'
            this.snackbartext = 'Failed To Connect with DB'
          }
        }).catch(ConnectionError => {
<<<<<<< HEAD
          this.testConnectionLoader = false;
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          if(ConnectionError){
              this.loader = null 
              this.snackbar = true
              this.colorValue = 'error'
              this.snackbartext = ConnectionError;
          }
          else {
            this.snackbar = true
            this.colorValue = 'error'
            this.snackbartext = SERVER_ERROR;
          }
       });
      }
    },
  }
}
</script>

<style>
  .label-margin label{
<<<<<<< HEAD
    margin-top:5%;
=======
    margin-top:7%;
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
  }
</style>
