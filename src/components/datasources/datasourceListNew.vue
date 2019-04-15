<template>
<<<<<<< HEAD
    <div>
        <v-layout row wrap pl-4 class="breadcrumbBackground">
            <v-flex xs8 style="margin:auto">
                <v-layout row wrap>
                    <v-flex xs4 pl-3 style="margin:auto">
                        <ul class="breadcrumb">
                            <li>
                                <router-link to="/dashboard">Home</router-link>
                            </li>
                            <li>Datasources</li>
                        </ul>
                    </v-flex>
                     <v-flex xs8 style="text-align:left">
                        <!-- <v-tooltip bottom>
                            <a slot="activator" @click="addDataSource" style="float:left; text-decoration:underline !important">New...</a>
                            <span>Add New Datasource</span>
                        </v-tooltip> -->
                    </v-flex>
                </v-layout>                
            </v-flex>
            <v-flex xs4 text-xs-right pr-4 pb-1 style="">
                <!-- <v-select style="width:70%;float:right;padding:0px;margin:0px" v-model="dummyData" :items="['test-1','test-2']"  hide-details>
                </v-select> -->               
            </v-flex>
        </v-layout>
      <!--   <v-btn small color="primary" @click="exportData">Export Datasource data</v-btn> -->
      <!--   <v-btn small color="primary" @click="exportData('csv')">Export CSV</v-btn>
        <v-btn small color="primary" @click="exportData('pdf')">Export PDF</v-btn>
        <v-btn small color="primary" @click="exportData('xls')">Export XLS</v-btn>
        <v-btn small color="primary" @click="exportData('json')">Export JSON</v-btn> -->

        <vc-data-table :data="tableList" @sortBy="sortBy" @onpagination="onPagination" @filterData="filterData" @onNew="onNew"
            @onDelete="onDelete" @onUpdate="updateRow" @onCellEvent="onCellEvent"  @onEdit="onEdit" @onCopy="onCopy"></vc-data-table>
        <v-snackbar v-model="snackbar" :right=true :top=true :timeout=snackbartimeout :color='colorValue'>
            {{ snackbartext }}
        </v-snackbar>
        <loading-panel :loader="loader"></loading-panel>
    </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios';
import Breadcrumb from "../Breadcrumbs.vue"
import config from '../../config.json'
import { get as getToServer, deleteFromServer, post as postToServer } from './../../methods/serverCall.js';
import getUserRole from './../../methods/GetUserRole.js'
import {SERVER_ERROR} from '../../data/client_message.js'
import { GET_DATASOURCE_LIST, CHECK_USER_ROLE_PRESENT, EXPORT_DATASOURCE} from '../../data/url_constants.js';
import {CLIENT_SIDE, SERVER_SIDE} from '../../data/macros.js'
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy';
import dataTable from '../../views/dataTable/datatable.vue'
import LoadPanel from "../../views/loading.vue"
import {COLOR_CODE,DATASOURCE_SERVICE_ID,CREATE_ACTION,UPDATE_ACTION,DELETE_ACTION,READ_ACTION} from "../../data/macros.js"
import _ from 'lodash';
// import dummyData from './tableData.js'
// import data from './metaData.js'
export default {
    name: 'datasourcelist',
    data: function () {
        return {
            userRole:{},
            buttonColor:COLOR_CODE,
            loader:false,
            dummyData:'test-1',
            tableList: {
                headers: [
                    // { text: 'Environment Type', value: 'type', sortable: false, width: '20%' },
                    { text: 'Datasource Name', value: 'datasource_info.datasource_name', sortable: false, width: '20%', options:[], cssClass:'w16' },
                    { text: 'DB Type', value: 'datasource_info.database_type', sortable: false, width: '15%', options:[] },
                    { text: 'Host Name', value: 'datasource_info.host', sortable: false, width: '15%' },
                    { text: 'Database', value: 'datasource_info.database_name', sortable: false, width: '15%', options:[] },
                    { text: 'Schema', value: 'datasource_info.schema_name', sortable: false, width: '15%', options:[] },
                    { text: 'Agent Name', value: 'datasource_info.mapped_agent_name', width: '15%' },
                    { text: 'Description', value: 'datasource_info.description', sortable: false, width: '15%', options:[], cssClass:'w2' }
                ],
                // actions: ['edit','execute','publish'],
                actions:[],//if we need conditional action in row then provide key
                sorting_type: CLIENT_SIDE,
                filterType: CLIENT_SIDE,
                paginationType: CLIENT_SIDE,
                total_count: 0,
                rows: [],
                select_rows:true
            },
            //  flag:true,
             snackbar:false,
             snackbartext:'',
             snackbartimeout:5000,
             colorValue:'success',
             showEnvType:false,
             valid:true,
             dbTypefltrAry:[],
             nameTypefltrAry:[],
            'envTypefltrAry':[],
            'chip1':true,
            'searchEnv':"",
            'showname':false,
            'showDBType':false,
             chips: [],
             items: [],
            sorting : config.SORTING_TYPE,
            envIpJson : {
                    "filter": [],
                    "sort": {
                        "column": "",
                        "type": ""
                    },
                    "page": 1,
                    "page_size": 5
                },
            isloading:false,
            menu:false,
            edit:"",
            headers:  [                
                { text: 'Environment Type', value: 'type', sortable: false, width: '20%',options:[] },
                { text: 'Name', value: 'name', sortable: false, width: '30%' },
                { text: 'Database Type', value: 'environment_database_type', sortable: false, width: '20%',options:[] },
                { text: 'Database Location', value: 'databases_locations', sortable: false, width: '20%',options:[] },
            ],
            searchArray: {
                'Environment Type': false,
                'Name': false,
                'Database Type': false,
                'Database Location':false,
                'Action': false
            },
            perPage: 5,
            perPageArray: [5, 10, 50, 'all'],
            page: 1,
            totalPages:1,
            totalRecords:1,
            filterKey: "",
            sortingData: [],
            inputArray: {
                'Environment Type': [],
                'Name': [],
                'Database Type': [],
                'Database Location':[],
                'Action': []
            },
            sortKey: '',
            sortOrders: {
                'type': 1,
                'name': 1,
                'environment_database_type': 1,
                'databases_locations':1,
                'Action': 1
            }
        }
    },
    components: {
    'vc-data-table': dataTable,
    'loading-panel':LoadPanel
    },
    mounted() {
        // this.tableList.headers =this.headers; 
        /* if(this.tableList.paginationType == CLIENT_SIDE)
            this.envIpJson.page_size="*";
        this.getEnvironmentDetails();    //you are not authorised  
        this.get_environment_by_client_id(this.envIpJson); */
        // console.log("access_token"+this.$session.get('access_token'));
        this.userRole = this.$session.get('user_role_mapping');
        this.tableList.actions=[{'text':'new','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,DATASOURCE_SERVICE_ID,CREATE_ACTION)},    
                {'text':'copy','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,DATASOURCE_SERVICE_ID,CREATE_ACTION)},
                {'text':'edit','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,DATASOURCE_SERVICE_ID,UPDATE_ACTION)},
                {'text':'delete','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,DATASOURCE_SERVICE_ID,DELETE_ACTION)}];
     this.getDataSourceList();
    },
    methods: {    
    onNew(){
        this.addDataSource();
    },
     onCellEvent(record){ 
         this.onEdit(record);
     },
     exportData(file_format){
            // var client_id = this.$session.get('client_id')
            // var url = config.DATA_SOURCE_URL+EXPORT_DATASOURCE + client_id;
            // axios({
            // headers: {
            //         'Authorization': 'a59f744a58cb4767a59549f5054416b8'
            //     },
            //   url: url,
            //   method: 'GET',
            //   responseType: 'blob', // important
            // }).then((response) => {
            //   const url = window.URL.createObjectURL(new Blob([response.data]));
            //   const link = document.createElement('a');
            //   link.href = url;
            //   link.setAttribute('download', 'text/csv');
            //   document.body.appendChild(link);
            //   link.click();
            // });

           let _this = this;    
            _this.loader=true;
            var client_id = this.$session.get('client_id')
            var url = config.DATA_SOURCE_URL+EXPORT_DATASOURCE + client_id + "/" + file_format;
            getToServer(this, url).then(Response => {
                // file_name = Response
                window.location.href = "http://192.168.1.14:8008/static/"+Response
                _this.loader=false;
            }).catch(EnvError => {
                _this.loader=false;
            if(EnvError){

                  this.loader = null
                  this.snackbar = true
                  this.colorValue = 'error'
                  // record.perform = null;
                  // record.status="terminated";
                  this.snackbartext = EnvError;
                }
                else {
                  this.snackbar = true
                  this.colorValue = 'error'
                  this.snackbartext = SERVER_ERROR;
                }
          }) 
        },
     getDataSourceList () {
        let _this = this;
        _this.loader = true;
        var client_id = this.$session.get('client_id')
        var security_json = {"service_id":"datasource","user_id":this.$session.get('user_id'),"role_name":"view"}
        let securityUrl = config.Security_URL + CHECK_USER_ROLE_PRESENT;
        // postToServer(this, securityUrl, security_json).then(checkResponse => {
            getToServer(this, config.DATA_SOURCE_URL + GET_DATASOURCE_LIST + client_id
            ).then(response => {
            _this.loader = false;
            if(response){
                // var data = response;
                _this.tableList.rows = response;
                _this.tableList.total_count =response.length; 
            }else{
                _this.tableList.rows = [];
                _this.tableList.total_count = 0; 
            }
            /* if(data)
                this.desserts = []
                this.desserts = data */
            }).catch(error_response => {
            _this.loader = false;
            if(error_response){
                this.loader = null 
                this.snackbar = true
                this.colorValue = 'error'
                this.snackbartext = error_response;
                }
                else {
                this.snackbar = true
                this.colorValue = 'error'
                this.snackbartext = SERVER_ERROR;
                }
            });
        // }).catch(error_response => {
        //   if(error_response){
        //     this.snackbar = true
        //     this.colorValue = 'error'
        //     this.snackbartext = 'You are not Authorized to view datasource';
        //     this[l]  = false
        //     this.loader = null 
        //   }
        //   else {
        //     this.snackbar = true
        //     this.colorValue = 'error'
        //     this.snackbartext = 'environment';
        //     this[l]  = false
        //     this.loader = null 
        //   }
        // });

        },
        addDataSource(){
            let _this = this;
            _this.$router.push('/managedatasource');
        },
        
        submitDbType(){
            let _this = this;
            _this.dbTypefltrAry.push({text:cloneDeep(_this.searchEnv)});
            _this.searchEnv="";
        },
        // submitName(){
        //     let _this = this;
        //     _this.nameTypefltrAry.push({'text':cloneDeep(_this.inputArray['Name'])});
        //     _this.inputArray['Name']="";
        // },
        //  submit(){
        //      let _this = this;
        //      _this.envTypefltrAry.push({'text':cloneDeep(_this.inputArray['Environment Type'])});
        //      _this.inputArray['Environment Type']="";
        //     //  alert('hello');
        //  },
          remove (array, item) {
            array.splice(array.indexOf(item), 1)
            array = [...array]
          },
        getRecordPerPage(){
            let inputJson = this.envIpJson;
            inputJson.page_size = this.perPage;
            // this.get_environment_by_client_id(inputJson);
=======
    <v-container>
        <v-layout row wrap>
            <v-flex>
                <table class="table text-sm-left" style="width:100%">
                    <thead>
                        <tr>
                            <th @click="sortBy(header.value)" :class="{ active: sortKey == header.value}" 
                                v-for="(header, index) in headers" :key="index">
                                {{ header.text | capitalize }}
                                <span class="arrow" :class="sortOrders[header.value] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" v-on:click.stop.prevent="searchArray[header.text] = !searchArray[header.text]"
                                         small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" :placeholder="header.text" v-model="inputArray[header.text]" @keyup="columnFilter(inputArray[header.text], header.text)"
                                    @click="removeBubbling($event)" :class="{'showInput':searchArray[header.text],'srch-ip':true}" />
                            </th>
                            <!-- <th @click="sortBy('index')" :class="{ active: sortKey == 'index' }" style="width:15%">
                                {{ 'index' | capitalize }}
                                <span class="arrow" :class="sortOrders['index'] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" v-on:click.stop.prevent="inputArray.index = !inputArray.index" small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" placeholder="search" v-model="table.index" @keyup="columnFilter(table.index, 'index')"
                                    @click="removeBubbling($event)" :class="{'showInput':inputArray.index,'srch-ip':true,}" />
                            </th>
                            <th @click="sortBy('name')" :class="{ active: sortKey == 'name' }" style="width:15%">
                                {{ 'name' | capitalize }}
                                <span class="arrow" :class="sortOrders['name'] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" @click.stop.prevent="inputArray.name = !inputArray.name" small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" placeholder="search" v-model="table.name" @click="removeBubbling($event)" 
                                    @keyup="columnFilter(table.name, 'name')" :class="{'showInput':inputArray.name,'srch-ip':true,}" />
                            </th>
                            <th @click="sortBy('power')" :class="{ active: sortKey == 'power' }" style="width:15%">
                                {{ 'power' | capitalize }}
                                <span class="arrow" :class="sortOrders['power'] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" @click.stop.prevent="inputArray.power = !inputArray.power" small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" placeholder="search" v-model="table.power" @click="removeBubbling($event)"
                                    @keyup="columnFilter(table.power, 'power')" :class="{'showInput':inputArray.power,'srch-ip':true,}" />
                            </th>
                            <th class="" @click="sortBy('saleDate')" :class="{ active: sortKey == 'saleDate' }" style="width:15%">
                                {{ 'saleDate' | capitalize }}
                                <span class="arrow" :class="sortOrders['saleDate'] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" @click.stop.prevent="inputArray.saleDate = !inputArray.saleDate" small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" placeholder="search" v-model="table.saleDate" @click="removeBubbling($event)"
                                    @keyup="columnFilter(table.saleDate, 'saleDate')" :class="{'showInput':inputArray.saleDate,'srch-ip':true}" />
                            </th>
                            <th class="" @click="sortBy('amount')" :class="{ active: sortKey == 'amount' }" style="width:15%">
                                {{ 'amount' | capitalize }}
                                <span class="arrow" :class="sortOrders['amount'] > 0 ? 'asc' : 'dsc'">
                                </span>
                                <v-tooltip bottom>
                                    <v-icon slot="activator" @click.stop.prevent="inputArray.amount = !inputArray.amount" small class="srch-icon">fa-search</v-icon>
                                    search
                                </v-tooltip>
                                <input type="text" placeholder="search" v-model="table.amount" @click="removeBubbling($event)"
                                    @keyup="columnFilter(table.amount, 'amount')" :class="{'showInput':inputArray.amount,'srch-ip':true,}" />
                            </th>
                            <th style="width:10%">Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6" style="padding:0px">
                                <v-progress-linear :indeterminate="true" v-if="false" style="margin:0px;"></v-progress-linear>
                            </td>
                        </tr>
                        <tr v-for="(entry,index) in filteredData" :key="index">
                            <td>
                                <v-text-field label="Search" v-if="edit == entry.datasource_id" v-model="entry.datasource_info.datasource_name" single-line hide-details></v-text-field>
                                <span v-else> {{entry.datasource_info.datasource_name}}</span>
                            </td>
                            <td>
                                <v-text-field label="Search" v-if="edit == entry.datasource_id" v-model="entry.datasource_info.datasource_type" single-line hide-details></v-text-field>
                                <span v-else> {{entry.datasource_info.datasource_type}}</span>
                            </td>
                            <td>
                                <v-text-field label="Search" v-if="edit == entry.datasource_id" v-model="entry.datasource_info.datasource_property" single-line hide-details></v-text-field>
                                <span v-else>{{entry.datasource_info.datasource_property}}</span>
                            </td>
                            <td class="">
                                <v-text-field label="Search" v-if="edit == entry.datasource_id" v-model="entry.datasource_info.database_type" single-line hide-details></v-text-field>
                                <span v-else>{{entry.datasource_info.database_type }} </span>
                            </td>
                            <td class="text-xs-right">
                                <div v-if="edit == entry.datasource_id">
                                    <v-icon small class="mr-2" @click="saveRowData(index)" style="color:#494949">
                                        fa-save
                                    </v-icon>
                                    <v-icon small class="mr-2" @click="cancelRowData()" style="color:#494949">
                                        cancel
                                    </v-icon>
                                </div>
                                <div v-else>
                                    <v-icon small class="mr-2" @click="editrowData(entry.datasource_id)" style="color:#494949">
                                        fa-edit
                                    </v-icon>

                                    <v-menu v-model="entry.menu" :close-on-content-click="false" :nudge-width="200" offset-x >
                                    <v-icon small slot="activator"  style="color:#494949">
                                        fa-trash-alt
                                    </v-icon>
                                     <v-card>
                                         <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
            
                                               <v-list style="background:#494949;color:white;">
                                                    <v-list-tile-content>
                                                    <v-list-tile-title>Delete Record</v-list-tile-title>
                                                    </v-list-tile-content>
                                               </v-list>
                                               <v-spacer></v-spacer>
                                               <v-icon @click="entry.menu = false" color="white">close</v-icon>
                                         </v-card-title>
                                            <v-card-text>
                                                <label>"Are you sure you want to delete?"</label>
                                            </v-card-text>
                                            <!-- <v-divider></v-divider>   -->
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" flat @click="deleteRowData(entry)">Delete</v-btn>
                                                <v-btn flat @click="entry.menu = false">Cancel</v-btn>
                                            </v-card-actions>
                                        </v-card>                   
                                    </v-menu>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="!tableList.length" class="text-sm-center">
                            <td colspan="6">Sorry, nothing to display here</td>
                        </tr>
                    </tbody>
                </table>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs3 class="" pr-3>
                <label style="position: relative; top: 35%;">Records Per Page</label>
            </v-flex>
            <v-flex xs3 class="text-sm-left">
                <v-select :items="perPageArray" @change="setRecordPerPage" v-model="perPage" style="width:20%;"></v-select>
            </v-flex>
            <v-flex xs6 class="">
                <v-pagination @input="onpagination" v-model="page" :length="numPages()" :total-visible="4"></v-pagination>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import moment from 'moment'
import Breadcrumb from "../Breadcrumbs.vue"
import config from '../../config.json'
import { get as getToServer } from './../../methods/serverCall.js';
import {SERVER_ERROR} from '../../data/client_message.js'
import { GET_DATASOURCE_LIST} from '../../data/url_constants.js';
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy'
// import data from './metaData.js'
export default {
    name: 'DemoGrid',
    data: function () {
        return {
            menu:false,
            edit:"",
            headers: [
                {
                    text: 'Datasource Name',
                    align: 'left',
                    // sortable: false,
                    value: 'datasource_info.datasource_name'
                },
                { text: 'Datasource Type', value: 'datasource_info.datasource_type' },
                { text: 'Datasource Property', value: 'datasource_info.datasource_property' },
                { text: 'Database Type', value: 'datasource_info.database_type' },
                { text: 'Action',sortable: false}, 
            ],
            searchArray: {
                'Datasource Name': false,
                'Datasource Type': false,
                'Datasource Property': false,
                'Database Type': false,
                'Action': false
            },
            perPage: '5',
            perPageArray: ['5', '10', '50', 'all'],
            page: 1,
            filterKey: "",
            tableList: [],
            sortingData: [],
            inputArray: {
                'Datasource Name': '',
                'Datasource Type': '',
                'Datasource Property': '',
                'Database Type': '',
                'Action': ''
            },
            sortKey: '',
            // sortOrders: {
            //     'name': 1,
            //     'power': 1,
            //     'amount': 1,
            //     'saleDate': 1,
            //     'index': 1
            // }
        }
    },
    computed: {
        filteredData: function () {
            debugger;
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.tableList
            if (sortKey) {
                // data = data.slice().sort(function (a, b) {
                //     a = a[sortKey]
                //     b = b[sortKey]
                //     return (a === b ? 0 : a > b ? 1 : -1) * order
                // })
                let temp = [{name:'def',obj:{'text':'pqr'}},{name:'abc',obj:{'text':'acf'}},{name:'aaa',obj:{'text':'aaa'}}];
                temp = orderBy(temp, 'obj.text', 'asc');
                console.log(JSON.stringify(temp));
                data = orderBy(data, sortKey, 'asc');
            }
            return data
        },
        sortOrders:function(){
            let order ={};
            this.headers.map(function (object) {
                order[object.text] = 1
            })
            return order
        }
    },
    filters: {
        formatDate: function (value) {
            if (value) {
                return moment(String(value)).format('YYYY/MM/DD')
            }
        }
    },
    mounted() {
        this.getDataSourceList();
        
    },
    methods: {
           getDataSourceList () {
            let _this = this;   
            var client_id = this.$session.get('client_id')
            getToServer(this, config.DATA_SOURCE_URL + GET_DATASOURCE_LIST + client_id
            ).then(response => {
            if(response){
                _this.tableList = cloneDeep(response);
                _this.sortingData = cloneDeep(response);
                this.setRecordPerPage();
            }else{
                data = {}
                this.desserts = [];  
            }
            }).catch(error_response => {
            // if(error_response){
            //     this.snackbar = true
            //     this.colorValue = 'error'
            //     this.snackbartext = error_response;
            //     }
            //     else {
            //     this.snackbar = true
            //     this.colorValue = 'error'
            //     this.snackbartext = SERVER_ERROR;
            //     }
            });
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        },
        removeBubbling(event) {
            event && event.stopPropagation();
        },
        numPages() {
            let _this = this;
<<<<<<< HEAD
            if(_this.totalRecords)
            _this.totalPages = Math.ceil(_this.totalRecords / _this.perPage);
        },
        setRecordPerPage() {
            let _this = this;
            // _this.page = 1;
            _this.numPages();
            // _this.changePage();
        },
        cancelRowData() {
            let _this = this;
            _this.edit = "";
        },
        saveRowData(index) {
            let _this = this;
            _this.edit = "";
            // _this.tableList.map(function (obj, index) {
            //     if (obj.edit == true)
            //         obj.edit = false;
            // });
        },
        deleteRowData(obj) {
            let _this = this;
            // let editObject = JSON.stringify(obj);
            // _this.tableList.map(function (currentObject, index) {
            //     let temp = JSON.stringify(currentObject);
            //     if (temp === editObject)
            //         _this.tableList.splice(index, 1);
            // });
            // 
            _this.deleteDataSource(obj.datasource_id);
            obj.menu = false;
=======
            return Math.ceil(_this.sortingData.length / _this.perPage);
        },
        setRecordPerPage() {
            let _this = this;
            _this.page = 1;
            _this.numPages();
            _this.changePage();
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
        },
        changePage() {
            let _this = this,
                dataFrom = 0,
                dataTo = 5;
            _this.showDataAsPerPage(_this.sortingData);
        },
        showDataAsPerPage(data) {
            let _this = this,
                dataFrom = 0,
                dataTo = 5;
            if (_this.page < 1) _this.page = 1;
<<<<<<< HEAD
            if (_this.page > _this.numPages()) _this.page = numPages();
=======
            if (_this.page > _this.numPages()) _this.page = _this.numPages();
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            if (_this.page <= 1) {
                if (data.length >= _this.perPage)
                    _this.tableList = data.slice(0, _this.perPage);
                else
                    _this.tableList = data.slice(0, data.length);
            } else {
                dataFrom = (_this.page - 1) * _this.perPage;
                dataTo = _this.perPage * _this.page;
                if (dataTo <= data.length)
                    _this.tableList = data.slice(dataFrom, dataTo);
                else
                    _this.tableList = data.slice(dataFrom, data.length);
            }
        },
<<<<<<< HEAD
        editrowData(id) {
            let _this = this;
            _this.edit = id;
        },
        columnFilter(elem, key) {
            let _this = this;
            // debugger;
            if (!elem)
                _this.setRecordPerPage()
            _this.tableList = _this.sortingData.filter(function (el) {
                return String(el[key]).toLowerCase().indexOf(String(elem).toLowerCase()) > -1;
            })
            // _this.showDataAsPerPage(_this.tableList);
        },
        onDelete:function(record){
            let _this = this;
            _this.deleteDataSource(record.id);
            // let inputJson = _this.envIpJson;
            // this.get_environment_by_client_id(inputJson);
        },
        onCopy:function(record){
            let _this = this;
            this.$router.push({ name: 'managedatasource', params: { datasourceid: record.datasource_info.datasource_id, type:'copy' }})
        },
        onEdit:function(record){
            let _this = this;
            this.$router.push({ name: 'managedatasource', params: { datasourceid: record.datasource_info.datasource_id, type:'edit' }})
        },
        sortBy: function (key, sortingType) {
            let _this = this;
            // debugger;
            if(!key || !sortingType)
                return 

            let inputJson = _this.envIpJson;
            inputJson.sort.column = key;
            inputJson.sort.type = sortingType;
            // this.get_environment_by_client_id(inputJson);
        },
        onPagination(page, perPage) {
            let _this = this;
            // debugger;
            let inputJson = _this.envIpJson;
            inputJson.page = page;
            inputJson.page_size = perPage;
            // this.get_environment_by_client_id(inputJson);
            //  _this.changePage();
        },
        filterData(filterArray){
            let _this = this;
            let inputJson = _this.envIpJson;
            inputJson.filter=[];
            // debugger;
            filterArray.map((obj, index)=>{
                obj.stringArray.map((stringObj, stringIndex)=>{
                    let temp = {"column":obj.value,"value": stringObj};
                     inputJson.filter.push(cloneDeep(temp));
                })
            });
            // this.get_environment_by_client_id(inputJson);
        },
        /* deleteEnvironment(envId){
            let _this = this; 
            debugger;      
            var url = config.ENVIRONMENT_API_URL+DELETE_ENVIRONMENT+ envId
            deleteFromServer(this, url).then(envirnentResponse => {
                let inputJson = _this.envIpJson;
                // _this.get_environment_by_client_id(inputJson);
            });
        }, */
        updateRow(record){
            console.log("Need to integrate update Service");
            var url = config.ENVIRONMENT_API_URL+UPDATE_ENVIRONMENT+record.id;
            let inputJson = record;
            debugger;
            postToServer(this, url, inputJson).then(envirnentResponse => {

            });
        },
        deleteDataSource (id) {
          deleteFromServer(this, config.DATA_SOURCE_URL + '/delete_datasource/' + id).then(response => {
			// var data = JSON.parse(response.bodyText)
                this.getDataSourceList()
		  }, response => {
			
		  }).catch(e => {
			
		  })
		},
=======
        cancelRowData() {
            let _this = this;
            _this.edit = "";
        },
        saveRowData(index) {
            let _this = this;
            _this.edit = "";
            // _this.tableList.map(function (obj, index) {
            //     if (obj.edit == true)
            //         obj.edit = false;
            // });
        },
        deleteRowData(obj) {
            let _this = this;
            let editObject = JSON.stringify(obj);
            _this.tableList.map(function (currentObject, index) {
                let temp = JSON.stringify(currentObject);
                if (temp === editObject)
                    _this.tableList.splice(index, 1);
            });
            obj.menu = false;
        },
        onpagination(obj) {
            let _this = this;
            _this.changePage();
        },
        editrowData(datasource_id) {
            let _this = this;
            _this.edit = datasource_id;
        },
        columnFilter(elem, key) {
            let _this = this;
            if (!elem)
                _this.setRecordPerPage()
            _this.tableList = _this.sortingData.filter(function (el) {
                return String(el[key]).toLowerCase().indexOf(String(elem).toLowerCase()) > -1;
            })
            _this.showDataAsPerPage(_this.tableList);
        },
        sortBy: function (key) {
            // debugger;
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    }
}
</script>
<style scoped>
<<<<<<< HEAD
.smaller{
    width:20px;
    height:20px;
    font: 10px
}
/* tr:nth-child(even) {background-color: #E8E8E8;}
.blurOpacity{
    opacity: 0;
}
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
.showInput {
    visibility: inherit !important;
    width: 50% !important;
}

.srch-ip {
    width: 0px;
    background: white;
    color: black;
    float: right;
    transition: all 1s;
    visibility: hidden;
}

table {
    border: 2px solid grey;
    border-radius: 3px;
    background-color: #fff;
    cursor: pointer;
}

thead {
    line-height: 30px;
<<<<<<< HEAD
    transition: all 10s;
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
}

th {
    background-color: grey;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

<<<<<<< HEAD
=======
td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}

.srch-icon {
    font-size: 16px;
    color: white;
    float: right;
    margin-top: 4%;
<<<<<<< HEAD
} */
</style>
=======
}
</style>

>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
