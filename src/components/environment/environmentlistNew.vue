<template>
<<<<<<< HEAD
    <div>
        <!-- <v-layout row wrap mr-1 ml-2>
            <v-flex xs10 style="margin:auto">
                <ul class="breadcrumb">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>Environment List</li>
                </ul>
            </v-flex>
            <v-flex xs2 text-xs-right>
                <v-tooltip bottom>
                    <v-btn slot="activator"  class="btn-color">
                        Add
                    </v-btn>
                    <span>Add New Environment</span>
                </v-tooltip>
            </v-flex>
        </v-layout> -->
        <v-layout row wrap pl-4 class="breadcrumbBackground">
            <v-flex xs8 style="margin:auto">
                <v-layout row wrap>
                    <v-flex xs4 pl-3>
                        <ul class="breadcrumb">
                            <li>
                                <router-link to="/dashboard">Home</router-link>
                            </li>
                            <li>Environment List</li>
                        </ul>
                    </v-flex>
                     <v-flex xs8>
                         <!-- <v-tooltip bottom>
                          <a slot="activator" @click="addEnvironment" style="float:left; text-decoration:underline !important">New...</a>
                          <span>Add Workflow Route</span>
                         </v-tooltip> -->
                           
                    </v-flex>
                </v-layout>
                
            </v-flex>
            <v-flex xs4 text-xs-right pr-4 pb-1 style="">
                
            </v-flex>
        </v-layout>
        <vc-data-table :data="tableList" @onNew="addEnvironment" @onCellEvent="onCellEvent" @sortBy="sortBy" @onpagination="onPagination" @filterData="filterData"
            @onDelete="onDelete" @onEdit="onEdit" @onCopy="onCopy"></vc-data-table>
        <v-snackbar v-model="snackbar" :right=true :top=true :timeout=snackbartimeout :color='colorValue'>
            {{ snackbartext }}
        </v-snackbar>
        <loading-panel :loader="loader"></loading-panel>
    </div>
</template>
<script>
import moment from 'moment'
import config from '../../config.json'
import { get as getToServer, deleteFromServer, post as postToServer } from './../../methods/serverCall.js';
import {SERVER_ERROR} from '../../data/client_message.js'
import { ENVIRONMENTLIST_BY_CLIENT, DELETE_ENVIRONMENT, UPDATE_ENVIRONMENT} from '../../data/url_constants.js';
import {CLIENT_SIDE, SERVER_SIDE} from '../../data/macros.js'
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy';
import dataTable from '../../views/dataTable/datatable.vue'
import LoadPanel from "../../views/loading.vue"
import getUserRole from './../../methods/GetUserRole.js'

import {ENVIRONMENT_SERVICE_ID,CREATE_ACTION,UPDATE_ACTION,DELETE_ACTION,READ_ACTION} from "../../data/macros.js"
import {getEnvironmentList} from '../../methods/EnvironmentList.js'

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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5" style="padding:0px">
                                <v-progress-linear :indeterminate="true" style="margin:0px;" :class="{'blurOpacity':!isloading}"></v-progress-linear>
                            </td>
                        </tr>
                        <tr v-for="(entry,index) in filteredData" :key="index">
                            <!-- <td>
                                <span> {{index + 1}}</span>
                            </td> -->
                            <td style="width:20%">
                                <v-text-field solo label="Search" v-if="edit == entry.id" v-model="entry.type" single-line hide-details></v-text-field>
                                <span v-else> {{entry.type}}</span>
                            </td>
                            <td style="width:25%">
                                <v-text-field solo label="Search" v-if="edit == entry.id" v-model="entry.name" single-line hide-details></v-text-field>
                                <span v-else>{{entry.name}}</span>
                            </td>
                            <td style="width:20%">
                                <v-text-field solo label="Search" v-if="edit == entry.id" v-model="entry.environment_database_type" single-line hide-details></v-text-field>
                                <span v-else>{{entry.environment_database_type }} </span>
                            </td>
                            <td style="width:20%">
                                <v-text-field solo label="Search" v-if="edit == entry.id" v-model="entry.databases_locations" single-line hide-details></v-text-field>
                                <span v-else>{{entry.databases_locations }} </span>
                            </td>
                            <td class="text-xs-right" style="width:15%">
                                <div v-if="edit == entry.id">
                                    <v-icon small class="mr-2" @click="saveRowData(index)" style="color:#494949">
                                        fa-save
                                    </v-icon>
                                    <v-icon small class="mr-2" @click="cancelRowData()" style="color:#494949">
                                        cancel
                                    </v-icon>
                                </div>
                                <div v-else>
                                    <v-icon small class="mr-2" @click="editrowData(entry.id)" style="color:#494949">
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
                            <td colspan="5">Sorry, nothing to display here</td>
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
                <v-select :items="perPageArray" @change="getRecordPerPage" v-model="perPage" style="width:20%;"></v-select>
            </v-flex>
            <v-flex xs6 class="">
                <v-pagination @input="onpagination" v-model="page" :length="totalPages" :total-visible="7"></v-pagination>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import moment from 'moment'
import Breadcrumb from "../Breadcrumbs.vue"
import config from '../../config.json'
import { get as getToServer, deleteFromServer, post as postToServer } from './../../methods/serverCall.js';
import {SERVER_ERROR} from '../../data/client_message.js'
import { ENVIRONMENTLIST_BY_CLIENT, DELETE_ENVIRONMENT} from '../../data/url_constants.js';
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy'
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
// import data from './metaData.js'
export default {
    name: 'DemoGrid',
    data: function () {
        return {
<<<<<<< HEAD
            loader:false,
            tableList: {
                headers: [
                    { text: 'Name', value: 'name', width: '33%' },
                    { text: 'Database Type', value: 'environment_database_type', width: '33%' },
                    { text: 'Database Location', value: 'databases_locations', width: '33%' },
                    // { text: 'Agent Name', value: 'mapped_agent_name', width: '30%' },
                    // { text: 'Environment Type', value: 'type', width: '20%' },
                ],
                actions:[],//if we need conditional action in row then provide key
                sorting_type: SERVER_SIDE,
                filterType: SERVER_SIDE,
                paginationType: SERVER_SIDE,
                total_count: 0,
                rows: [],
                select_rows:true,
                syncHeaderScroll:false,
            },
            //  flag:true,
             snackbar:false,
             snackbartext:'',
             snackbartimeout:5000,
             colorValue:'success',
             showEnvType:false,
             valid:true, 
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            sorting : config.SORTING_TYPE,
            envIpJson : {
                    "filter": [],
                    "sort": {
                        "column": "",
                        "type": ""
                    },
                    "page": 1,
<<<<<<< HEAD
                    "page_size": 10
=======
                    "page_size": 5
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                },
            isloading:false,
            menu:false,
            edit:"",
<<<<<<< HEAD
            perPage: 10,
            page: 1,
            userRole:'',
        }
    },
    components: {
    'vc-data-table': dataTable  ,
    'loading-panel':LoadPanel  
    },
    mounted() {
        this.userRole = this.$session.get('user_role_mapping');
        this.tableList.actions=[{'text':'new','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,ENVIRONMENT_SERVICE_ID,CREATE_ACTION)},    
                {'text':'copy','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,ENVIRONMENT_SERVICE_ID,CREATE_ACTION)},
                {'text':'edit','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,ENVIRONMENT_SERVICE_ID,UPDATE_ACTION)},
                {'text':'delete','key':"", selectType:"single", role:this.userRole.is_superadmin || getUserRole(this.userRole,ENVIRONMENT_SERVICE_ID,DELETE_ACTION)}];
        if(this.tableList.paginationType == CLIENT_SIDE)
            this.envIpJson.page_size="*";
        this.get_environment_by_client_id(this.envIpJson);
    },
    methods: {
        onCellEvent(record){
            this.onEdit(record);
        },
        addEnvironment(){
            let _this = this;
        _this.$router.push('/manageenvironment');
        },
         get_environment_by_client_id(envIpJson){
            let _this = this;    
            _this.loader=true;
            var url = config.ENVIRONMENT_API_URL+ENVIRONMENTLIST_BY_CLIENT;
            var client_id = this.$session.get('client_id')
            envIpJson.client_id = client_id
            let inputJson = envIpJson;
            postToServer(this, url, inputJson).then(envirnentResponse => {
                debugger
                _this.loader = false;
                _this.tableList.rows = envirnentResponse.result;
                _this.tableList.total_count =envirnentResponse.total; 
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
        onDelete:function(record){
            let _this = this;
            _this.deleteEnvironment(record.id);
            let inputJson = _this.envIpJson;
            this.get_environment_by_client_id(inputJson);
        },
        onCopy:function(record){
            let _this = this;
            this.$router.push({ name: 'manageenvironment', params: { environment_id: record.id, type:'copy' }})
        },
        onEdit:function(record){
            let _this = this;
            this.$router.push({ name: 'manageenvironment', params: { environment_id: record.id, type:'edit' }})
        },
        sortBy: function (key, sortingType) {
            let _this = this;
            if(!key || !sortingType)
                return 

            let inputJson = _this.envIpJson;
            inputJson.sort.column = key;
            inputJson.sort.type = sortingType;
            this.get_environment_by_client_id(inputJson);
        },
        onPagination(page, perPage) {
            let _this = this;
            let inputJson = _this.envIpJson;
            inputJson.page = page;
            inputJson.page_size = perPage;
            this.get_environment_by_client_id(inputJson);
        },
        filterData(filterArray){
            let _this = this;
            let inputJson = _this.envIpJson;
            inputJson.filter=[];
            debugger;
            filterArray.map((obj, index)=>{
                obj.stringArray.map((stringObj, stringIndex)=>{
                    let temp = {"column":obj.value,"value": String(stringObj.text).trim()};
                     inputJson.filter.push(cloneDeep(temp));
                })
            });
            this.get_environment_by_client_id(inputJson);
        },
        deleteEnvironment(envId){
            let _this = this; 
            // debugger;      
            var url = config.ENVIRONMENT_API_URL+DELETE_ENVIRONMENT+ envId
            deleteFromServer(this, url).then(envirnentResponse => {
                let inputJson = _this.envIpJson;
                _this.get_environment_by_client_id(inputJson);
            });
        },
=======
            headers:  [
                
                { text: 'Environment Type', value: 'type' },
                { text: 'Name', value: 'name' },
                { text: 'Database Type', value: 'environment_database_type' },
                { text: 'Database Location', value: 'databases_locations' },
                { text: 'Actions'}
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
            tableList: [],
            sortingData: [],
            inputArray: {
                'Environment Type': "",
                'Name': "",
                'Database Type': "",
                'Database Location':"",
                'Action': ""
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
    computed: {
        filteredData: function () {            
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.tableList
               if (sortKey && this.sorting == 'client_side') {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        },
        // sortOrders:function(){
        //     let order ={};
        //     this.headers.map(function (object) {
        //         order[object.text] = 1
        //     })
        //     return order
        // }
    },
    filters: {
        formatDate: function (value) {
            if (value) {
                return moment(String(value)).format('YYYY/MM/DD')
            }
        }
    },
    mounted() {
        this.get_environment_by_client_id(this.envIpJson);
    },
    methods: {
        getRecordPerPage(){
            let inputJson = cloneDeep(this.envIpJson);
            inputJson.page_size = this.perPage;
            this.get_environment_by_client_id(inputJson);
        },
         get_environment_by_client_id(envIpJson){
            let _this = this;    
            _this.isloading=true;
            var url = config.ENVIRONMENT_API_URL+ENVIRONMENTLIST_BY_CLIENT;
            let inputJson = envIpJson;
            postToServer(this, url, inputJson).then(envirnentResponse => {
                _this.isloading = false;
                _this.tableList = cloneDeep(envirnentResponse.result);
                _this.sortingData = cloneDeep(envirnentResponse.result);
                _this.totalRecords = envirnentResponse.total;
                _this.setRecordPerPage();
            });
        },
        deleteEnvironment(envId){
            let _this = this;    
            var url = config.ENVIRONMENT_API_URL+DELETE_ENVIRONMENT+ envId
            deleteFromServer(this, url).then(envirnentResponse => {
                get_environment_by_client_id();
            });
        },
        removeBubbling(event) {
            event && event.stopPropagation();
        },
        numPages() {
            let _this = this;
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
            _this.deleteEnvironment(obj.id);
            obj.menu = false;
        },
        onpagination() {
            let _this = this;
            let inputJson = cloneDeep(_this.envIpJson);
            inputJson.page = _this.page;
            inputJson.page_size = _this.perPage;
            this.get_environment_by_client_id(inputJson);
            // _this.changePage();
        },
        editrowData(id) {
            let _this = this;
            _this.edit = id;
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
            let _this = this;
            
            if(!key)
            return 

            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
            
            if(_this.sorting == 'client_side')
            return

            let inputJson = cloneDeep(_this.envIpJson);
            inputJson.sort.column = key;
            inputJson.sort.type = _this.sortOrders[key] > 0 ? 'asc' : 'dsc'
            this.get_environment_by_client_id(inputJson);
        }
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
    }
}
</script>
<style scoped>
<<<<<<< HEAD
/* tr:nth-child(even) {background-color: #E8E8E8;}
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
.blurOpacity{
    opacity: 0;
}
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
<<<<<<< HEAD
} */


/* th.active {
=======
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
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
=======
}
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</style>