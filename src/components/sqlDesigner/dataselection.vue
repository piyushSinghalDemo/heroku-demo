<template>
  <v-flex id="mainflex">
    <v-card class="rounded-card">
<<<<<<< HEAD
        <!-- <v-layout row wrap ml-3 mr-3>
          <v-flex xs12 style="text-align:left">
            <span class="v-align">
              <span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;"> Home /</span> &nbsp;
              <span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;">Process Designer /</span>&nbsp;
              <span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;">{{parentdigramobj.diagram_name}} /</span>&nbsp;
              <span style="font-weight:400;font-size:15px;"><input type="text" v-model="stepname"/></span>  
              <span style="font-weight:400;font-size:13px;margin-left:5px;" v-bind:class="{errorcls:is_error_occured , successcls:!is_error_occured}">{{'('+savedstatus + ')'}}</span>
              <span style="font-weight:400;font-size:13px;margin-left:5px;" :style="{'color': colorCode}">{{datasource_error}}</span>
            </span>
            <v-icon style="font-size:20px;float:right;" class="v-align" @click="savedata(true)" title='close'>far fa-times-circle</v-icon>
            <span style="font-size:13px;float:right;" class="v-align" :style="{'color': colorCode}" @click="validatestepdata()">
              <v-progress-circular :width="3" v-if="validateProgress" :size="20" color="blue" indeterminate></v-progress-circular>
              <input type="button" v-if="!validateProgress" value="Validate"/>
            </span>
            <span class="v-align" style="font-size:13px;float:right;margin-right:5px;" :style="{'color': colorCode}">
              <showerrorlisttemplate :validation_response="validation_response" stepType="Selection"
                @set-error="setError" @totalCount="totalCount"></showerrorlisttemplate></span>
            <v-chip small color="grey" style="float:right">{{errorListCount}}</v-chip>
          </v-flex>
        </v-layout> -->
        <v-layout row wrap pr-4 mb-2  class="breadcrumbBackground">
          <v-flex xs9 pl-4 style="text-align:left;margin:auto">
            <ul class="breadcrumb" style="display:inline-flex;">
              <li><a @click="savedata(true)">{{env_name}} </a></li>
              <li><a @click="savedata(true)"> {{parentdigramobj.diagram_name}} </a></li>
              <li><input type="text" v-model="stepname"/></li>
            </ul>
            <span style="font-weight:400;font-size:13px;margin-left:5px;" v-bind:class="{errorcls:is_error_occured , successcls:!is_error_occured}">{{'('+savedstatus + ')'}}</span>
              <span style="font-weight:400;font-size:13px;margin-left:5px;" :style="{'color': colorCode}">{{datasource_error}}</span>
          </v-flex>
          <v-flex xs3>
            <v-icon style="font-size:20px;float:right;" class="v-align" @click="savedata(true)" title='close'>far fa-times-circle</v-icon>
             <span class="" style="font-size:13px;float:right;margin-right:5px;" :style="{'color': colorCode}">
              <v-progress-circular :width="3" v-if="validateProgress" :size="30" color="blue" indeterminate></v-progress-circular>
              <showerrorlisttemplate :validation_response="validation_response" stepType="Selection"
                @set-error="setError" @totalCount="totalCount" :errorListCount="errorListCount" :showprocess="validateProgress ? 'Y':'N'"></showerrorlisttemplate></span>

            <span style="font-size:13px;float:right;" class="v-align" :style="{'color': colorCode}" @click="validatestepdata()">
              <input type="button" value="Validate"/>
            </span>
           
          </v-flex>
		</v-layout>
      <div style="width:99%;margin-left:7px;">
        <tablelistpanel :tableListLoader="tableListLoader" :tablelistobj="tablelistpanelproperties" 
            @dragged-object="draggedObject" @performcollapse="perform_collapse" :steptablelist="steps_table_list"></tablelistpanel>
          <!-- <draggable class="upperrow" v-model="selectedColumns" :options="dragOptions" @change="updateGroup($event)" style="width:40%">           -->
            <div id="join_panel" class="upperrow" style="width:39%;" ref="join_panel_ref">
              <div id="selection_paper" style="left:1px;transform-origin: top left;transform: scale(1);"  ref="selection_paper"></div>
            </div>
          <!-- </draggable> -->
        <div id="selection_panel" class="upperrow" style="width:40%;" ref="selection_panel_ref"> 
          <h6 style="margin-top:-10px;margin-left:5px;z-index:222;position:absolute;background:white;" >Select Columns for Worktable</h6>
          <span style="float:right;margin-top:-23px;margin-left:19%;position:absolute;background:white;">
           <!--  <button type="button" @click="savedata(true)">//
              <v-icon style="font-size:20px" @click="savedata(true)">far fa-times-circle</v-icon>
            </button> -->
          </span>
          <span style="float:right;margin-right:1%;">
            <label><input type="checkbox" v-model="distinct"/>&nbsp;&nbsp;<strong>Distinct</strong></label></span>
            <table class="table table-striped table-bordered draggable_table"  id="select_column_table" style="margin-top: 3%;" :title="selection_error">
              <thead :class="{highlight_tbl:selection_error}">
=======
      <div style="text-align: left;margin-left:1%">
        <span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;"> Home /</span> &nbsp;<span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;">Process Designer /</span>&nbsp;<span style="color:rgba(0,0,0,0.54);font-weight:400;font-size:13px;">{{parentdigramobj.diagram_name}} /</span>&nbsp;<span style="font-weight:400;font-size:15px;"><input type="text" v-model="stepname"/></span>         
      </div>
        <!-- <v-container grid-list-md align-content-space-around> -->
      <!-- <v-layout raw wrap style="margin:1%;">        -->
        
        <div style="width:99%;margin-left:7px;">
          <div id="table_list_panel" class="upperrow" style="width:20%;">
            <div id="table_list_header" style="height:10%;background-color:#E0E0E0;">
              <v-icon small id="close_tablelist_icon" class="glyphicon" @click.stop="perform_collapse('close')" style="color:#494949;;position:absulate;margin-top:5%;float:left;margin-right:1%;font-weight:bold;">
                        chevron_left
              </v-icon>
              <v-icon small id="open_tablelist_icon" class="glyphicon" @click.stop="perform_collapse('open')" style="color:#494949;position:absulate;margin-top:5%;float:left;margin-right:1%;margin-top:50%;display:none;font-weight:bold;">
                        chevron_right
              </v-icon>

              <input id="tbl_searchbox" type="text" v-on:keyup="perform_tablelist_serach" v-model="table_search" placeholder="Type your search here" class="form-control" style="width:82%;float:left;margin-bottom:3px;margin-top:3px;"/>
              <v-icon small id="tbl_searchicon" class="glyphicon" style="color:#494949;;position:absulate;margin-top:5%;float:right;margin-right:2%;">
                        fa-search
              </v-icon>
            </div>
            <v-list id="list_of_tables" dense>
              <draggable v-model="table_list">
                <v-list-tile v-for="item in table_list" :key="item.title" class="list_items" v-on:dragstart="dragitem">
                  <v-list-tile-action>
                    <v-icon color="blue">fa-table</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </draggable>
            </v-list>
        </div>
        <div id="join_panel" class="upperrow" style="width:39%;">
          <div id="selection_paper" style="left:1px;transform-origin: top left;transform: scale(1);"  ref="selection_paper"></div>
        </div>
        <div id="selection_panel" class="upperrow" style="width:40%;"> 
          <h5 style="margin-top:-10px;margin-left:5px;z-index:222;position:absolute;background:white;" >Columns for selection</h5>
            <span style="float:right;margin-top:-23px;margin-left:19%;position:absolute;background:white;">
            <button type="button" @click="closepopup()">
              <v-icon style="font-size:20px">far fa-times-circle</v-icon>
            </button>
          </span>
            <table border="0" class="table table-striped table-bordered draggable_table" id="select_column_table" style="margin-top: 3%;">
              <tbody>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                <tr>
                  <th>#</th>
                  <th>Column</th>
                  <th>Table</th>
                  <th>Aggregate</th>
<<<<<<< HEAD
                  <th>Alias name</th>
                  <th>Order Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <draggable v-model="columns_for_selection" :element="'tbody'">
                <tr v-for="(item, idx) in columns_for_selection" :key="idx" >
                  <td class="handle" style="max-width: 28px;">::</td>
                  <td class="text-xs-left" v-model="item.column_name" :class="{highlight_tbl:item.error_list.column_name}" :title="item.error_list.column_name">
                    {{item.column_name}}
                  </td>
                  <td class="text-xs-left" v-model="item.table_name" :class="{highlight_tbl:item.error_list.table_name}" :title="item.error_list.table_name">{{item.table_name}}</td>
                  <td class="text-xs-left"> <v-autocomplete style="width:125px;padding:0px;" :items="aggregate_types" placeholder="Aggregate" item-text="name" item-value="id" v-model="item.aggregate" clearable dense ></v-autocomplete></td>
                  <td class="text-xs-left" :class="{highlight_tbl:item.error_list.alias_name}" :title="item.error_list.alias_name">
                    <v-text-field v-model="item.alias_name" style="width: 100px;" placeholder="Alias name" solo @v-on:blur="savedata()" hide-details></v-text-field>
                  </td>
                  <td>
                    <toggle-button v-model="item.order_type" :labels="{checked: 'DESC', unchecked: 'ASC'}":sync="true" :width="60"/>
                  </td>
                  <td><v-icon small style="color:#494949" @click="delete_selection_row(idx)">fa-trash-alt</v-icon></td>
                </tr>
              </draggable>
            </table>
          </div>   
        </div>      
        <v-layout raw wrap style="margin-left:1%;margin-right:1%">
            <!-- Embed criteria table here -->
            <criteria :policy_list="policy_list" :showpolicies="showpolicies" :columns_for_filter="columns_for_filter" :column_name_list="column_name_list" 
              @savedata="saveCriteria" @new="add_new_filter_row" @delete="delete_filter_row"></criteria>
        </v-layout>
      </v-card>
      <v-dialog v-model="tbl_dialog" persistent width="400">
        <v-flex style="height:100%">
          <v-card class="rounded-card" style="height:100%">
            <v-toolbar dark dense>
              <v-flex class="text-md-center"><b>Select {{dbl_click_tbl_cell_name}}</b> Table Columns
                <v-icon class="text-lg-left" @click="tbl_dialog = false" style="color:#dedede;height:22px;float:right">fa-times-circle</v-icon>
              </v-flex>
            </v-toolbar>
            <v-layout raw wrap>
              <v-flex xs5></v-flex>
            <v-flex xs6 pl-4>
            <input type="text" v-model="search" placeholder="Type your search here" class="form-control" style="margin-bottom:3px;margin-right:5px;margin-top:8px;" :search="search"/>
          </v-flex>
        </v-layout>
            <v-flex pa-2 xs12 style="height: 361px; overflow-y: auto;" id="step_detail_table">
              
              <v-data-table :headers="step_headers" :items="dbl_click_tbl_items" :search="search" hide-actions scrollable>
                <template slot="items" slot-scope="props" >
                  <td class="text-xs-left"><input type="checkbox" v-model="props.item.forselection"></td>
                  <!-- <td class="text-xs-left"><input type="checkbox" v-model="props.item.forfilter"></td> -->
                  <td class="text-xs-left">{{ props.item.column_name }}</td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </v-data-table>
            </v-flex>
            <!-- <v-card-actions> -->
              <v-btn outline :color="outlineColor" style="border-radius:10px" v-on:click="performselection()">Submit</v-btn>
            <!-- </v-card-actions> -->
            <!-- <v-btn color="success" large block v-on:click="performselection()" style="margin-bottom: 20px;">Submit</v-btn> -->
          </v-card>
        </v-flex>
      </v-dialog>
      <v-dialog v-model="join_dialog" persistent width="600" style="overflow-y:none">
        <v-flex>
          <v-card class="rounded-card">
            <v-toolbar dark dense>
             <v-flex class="text-md-center">Specify Join
               <v-icon class="text-lg-left" @click="join_dialog = false" style="color:#dedede;height:22px;float:right">fa-times-circle</v-icon>
             </v-flex>
           </v-toolbar>
           <v-container grid-list-md align-content-space-around>
            <v-layout raw wrap>
              <v-flex xs4 style="font-weight: bold;margin:auto"><label :class="{highlight_tbl:jfrom_error}" :title="jfrom_error">{{join_from_table}}</label></v-flex>
              <v-flex xs3>
                <v-autocomplete :items="jtype_list" item-text="jtype_list" v-model="jtype" dense></v-autocomplete>
              </v-flex>
              <v-flex xs4 style="font-weight: bold;;margin:auto"><label :class="{highlight_tbl:jto_error}" :title="jto_error">{{join_to_table}}</label></v-flex>
=======
                  <th style="width: 28px;">Alias name</th>
                  <th style="width: 28px;">Order No</th>
                  <th>Order Type</th>
                  <th>Action</th>
                </tr>
                <tr v-for="item in columns_for_selection">
                  <td class="handle" style="max-width: 28px;">::</td>
                  <td class="text-xs-left">{{item.column_name}}</td>
                  <td class="text-xs-left">{{item.table_name}}</td>
                  <td class="text-xs-left"> <v-autocomplete style="width:125px;" :items="aggregate_types" placeholder="Aggregate" item-text="name" item-value="id" clearable dense></v-autocomplete></td>
                  <td class="text-xs-left" >
                    <v-text-field v-model="title" placeholder="Alias name" solo></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="title" placeholder="Order No." solo onkeypress="if (isNaN(this.value + String.fromCharCode(event.keyCode))) return false;"></v-text-field>
                    <!-- <input type="input" style="width:40px;border: 1px solid #AFAEAE; background-color: #ffffff;" onkeypress="if (isNaN(this.value + String.fromCharCode(event.keyCode))) return false;"> -->
                  </td>
                  <td>
                    <toggle-button :labels="{checked: 'DESC', unchecked: 'ASC'}":sync="true" width="60"/>
                  </td>
                  <td><v-icon small style="color:#494949">fa-trash-alt</v-icon></td>
                </tr>
              </tbody>
            </table>
        </div>   
      </div>      
      <!-- </v-layout> -->
      <v-layout raw wrap style="margin-left:1%;margin-right:1%">
        <v-flex xs12 id="criteria_output_panel" class="lowerrow">
              <table border="0" class="table table-striped table-bordered table-fixed" id="filter_column_table">
                <tbody>
                  <tr>
                    <th>Parentheses</th>
                    <th>Column name</th>
                    <th>Operator</th>
                    <th>Value Type</th>
                    <th>Value</th>
                    <th>Parentheses</th>
                    <th>Operation</th>
                    <th>Action</th>
                  </tr>
                  <tr v-for="(filter_c, idx) in columns_for_filter">
                    <td height="15px">
                      <v-autocomplete clearable :items="start_parentheses_list" v-model="filter_c.s_parentheses" item-text="value" placeholder="Parentheses"></v-autocomplete>
                    </td>
                    <td>
                      <v-autocomplete :items="column_name_list" v-model="filter_c.column_name" item-text="column_name" placeholder="Column name"></v-autocomplete>
                    </td>
                    <td>
                      <v-autocomplete :items="filter_operators" item-text="name" item-value="id" v-model="filter_c.operator" placeholder="Operator"></v-autocomplete>
                    </td>
                    <td>
                      <v-autocomplete :items="value_type_list" @change="resetValue(idx)" v-model="filter_c.v_type"></v-autocomplete>
                    </td>
                    <td>
                      <v-text-field v-model="filter_c.value" v-if="filter_c.v_type === 'Value'" placeholder="Value" solo></v-text-field>
                      <v-autocomplete  v-if="filter_c.v_type === 'Column'" :items="column_name_list" v-model="filter_c.value" item-text="column_name"></v-autocomplete>
                      <v-text-field v-model="filter_c.value" v-if="filter_c.v_type === 'Date'" placeholder="Date" solo></v-text-field>
                    </td>
                    <td id="value_data">
                      <v-autocomplete clearable :items="end_parentheses_list" v-model="filter_c.e_parentheses" placeholder="Parentheses"></v-autocomplete>
                    </td>
                    <td>
                      <toggle-button :labels="{checked: 'OR', unchecked: 'AND'}"
                   style="margin-top:12%" :sync="true" width="60"/>
                    </td>
                    <td>
                      <v-icon @click="add_new_filter_row()" v-if="(idx+1) == columns_for_filter.length" style="color:#494949; margin-right: 2px;" small>fa-plus-square</v-icon>
                      <v-icon style="color:#494949;" small>fa-trash-alt</v-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-flex>     
          </v-layout>
    </v-card>
    <v-dialog v-model="tbl_dialog" width="600" scrollable>
      <v-flex>        
        <v-card class="rounded-card" style="height: 460px;">
          <v-toolbar dark dense>
            <v-flex class="text-md-center">{{dbl_click_tbl_cell_name}}
            <v-icon class="text-lg-left" @click="dialog = false" style="color:#dedede;height:22px;float:right">fa-times-circle</v-icon> 
            </v-flex>
          </v-toolbar>
          <v-flex pa-2 xs12 style="height: 361px; overflow-y: scroll;" id="step_detail_table">
            <input type="text" v-model="search" placeholder="Type your search here" class="form-control" style="width:50%;float: right;margin-bottom:3px;margin-right:5px;margin-top:5px;" :search="search"/>
            <v-data-table :headers="step_headers" :items="dbl_click_tbl_items" :search="search" hide-actions>
              <template slot="items" slot-scope="props">
                <td class="text-xs-left"><input type="checkbox" v-model="props.item.forselection"></td>
                <td class="text-xs-left"><input type="checkbox" v-model="props.item.forfilter"></td>
                <td class="text-xs-left">{{ props.item.title }}</td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-flex>
          <v-btn color="success" large block v-on:click="performselection()" style="margin-bottom: 0px;">Submit</v-btn> 
        </v-card>   
      </v-flex>                 
    </v-dialog>
    <v-dialog v-model="join_dialog" width="600">
      <v-flex>
        <v-card class="rounded-card">
          <v-toolbar dark dense>
           <v-flex class="text-md-center">Join</v-flex> 
          </v-toolbar>
          <!-- <v-container grid-list-md align-content-space-around> -->
          <v-container grid-list-md align-content-space-around>
            <v-layout raw wrap>
              <v-flex xs4 style="font-weight: bold;">{{join_from_table}}</v-flex>
                <v-flex xs3>
                  <v-autocomplete :items="jtype_list" item-text="jtype_list"      v-model="jtype" dense></v-autocomplete>
                    
                  </v-flex>
              <v-flex xs4 style="font-weight: bold;">{{join_to_table}}</v-flex>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
            </v-layout>

            <v-layout raw wrap>
              <v-flex xs4>
<<<<<<< HEAD
                <v-autocomplete :items="jfrom_column_list" item-text="title" item-value ="title" dense
                label="Select From" rule="selectFromrule" v-model="jfrom" refs="el_jfrom" required clearable>
              </v-autocomplete>
            </v-flex>
            <v-flex xs3>
              <v-autocomplete :items="operators"  item-text="name" item-value="id" v-model="join_opeator" dense></v-autocomplete>
            </v-flex>
            <v-flex xs4>
              <v-autocomplete :items="jto_column_list" ref="el_jto" item-text="title" item-value ="title"
              label="Select To" :rule="selectTorule" v-model="jto" required clearable dense>
            </v-autocomplete>
          </v-flex>
          <v-flex xs1>
            <button v-if="add_join_button" @click="add_join(add_join_button)" title="Add join">
              <v-icon style="font-size:40px;" >add_box</v-icon> </button>
              <button v-else @click="add_join(add_join_button)" title="Add join">
=======
                <v-autocomplete :items="jfrom_column_list" item-text="title"item-value ="title" dense
                label="Select From" rule="selectFromrule" v-model="jfrom" refs="el_jfrom" required clearable>
                </v-autocomplete>
              </v-flex>
              <v-flex xs3>
                <v-autocomplete :items="operators"  item-text="name" item-value="id" v-model="join_opeator" dense></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-autocomplete :items="jto_column_list" ref="el_jto" item-text="title"item-value ="title"
                label="Select To" :rule="selectTorule" v-model="jto" required clearable dense>
                </v-autocomplete>
              </v-flex>
              <v-flex xs1>
              <button v-if="add_join_button" @click="add_join(add_join_button)" title="Add join">
                <v-icon style="font-size:40px;" >add_box</v-icon> </button>
               <button v-else @click="add_join(add_join_button)" title="Add join">
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                <v-icon style="font-size:40px;" >add_box</v-icon> </button>
              </v-flex>
              <!-- <v-flex xs3> <v-btn color="success" v-on:click="add_join()">Add</v-btn></v-flex> -->
            </v-layout>
<<<<<<< HEAD
            <v-layout raw wrap style="max-height:112px;overflow-y:auto">
             <table border="0" class="table table-striped table-bordered table-fixed">
              <tbody>
                <tr v-for="(item, index) in join_json_for_link">
                  <td :class="{highlight_tbl:item.error_list.from_column}" :title="item.error_list.from_column">{{item.from_column}}</td>
                  <td>{{changeText[item.operator]}}</td>
                  <td :class="{highlight_tbl:item.error_list.to_column}" :title="item.error_list.to_column">{{item.to_column}}</td>
                  <td>
                    <v-icon small class="mr-2" style="color:#494949" @click="update_join(item.from_column, item.operator, item.to_column, index)">fa-edit</v-icon>
                    <v-icon small style="color:#494949" @click="delete_join(index)">fa-trash-alt</v-icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </v-layout>
          <v-btn outline :color="outlineColor" style="border-radius:10px" v-on:click="close_join_dialog()">Submit</v-btn>
        </v-container>
      </v-card>
    </v-flex>
  </v-dialog>
</v-flex>
</template>
<script>
const joint = require('jointjs')
const cloneDeep = require('clone-deep');
import {COLOR_CODE,BTN_COLOR} from '@/data/macros.js'
import tablelistpanel from './tablelistpanel.vue'
import draggable from 'vuedraggable'
import moment from 'moment'
import showerrorlisttemplate from './showerrorlisttemplate.vue'
import {getTableRectangle} from "../../methods/flowcharts/shapes.js"
import {validateConnection,validateMagnet,get_port_group,get_port_items,reset_port_markup} from "../../methods/flowcharts/ports.js"
import {getDefaultLinkProperies,RestrictCyclicConnection,ValidateSourceTarget,ValidateOutgoingLink} from "../../methods/flowcharts/links.js"
import {PerformSmartRouting,validate_graph_data_for_selection,get_elements_ids_by_name} from "../../methods/flowcharts/graph.js"
import {JOIN_OPERATOR_ARRAY_JSON,JOIN_TYPE,AGGREGATE_FUNCTIONS, FLITER_JOIN_OPERATOR_ARRAY_JSON,GRAPH_TABLE_ERROR_MESSAGES} from '../../methods/flowcharts/constants.js'
import Sortable from 'sortablejs'
import {getTableList, getTableColumns,getBulkTablesColumns} from "../../methods/agent_api_call.js"
import {handleKeyevents} from "../../methods/flowcharts/papers.js"
export const DATE_TYPE_ARRAY = {'Database Date':'MM/DD/YYYY', 'JDE Julien': '', 'CCYYMMDD': 'CCYYMMDD', 'Century Only': 'CC', 'Year Only': 'YY', 'Month Only':'MM', 'YYDDD': 'YYDDD'};
import dateformat from './dateformat.vue'
import {validate_process_def_json} from "../../methods/call_validation.js"
import Criteria from '@/views/criteria.vue';
import _ from 'lodash';
import {
  VALUE_TO_TEXT,VALIDATION_IN_RPOCESS_MESSAGE
} from "../../methods/flowcharts/constants.js";
export default {
  components:{
    draggable,
    dateformat,
    tablelistpanel,
    showerrorlisttemplate,
    'criteria':Criteria
  },
  data () {
    return {
      changeText:VALUE_TO_TEXT,
      errorListCount:0,
      colorCode:COLOR_CODE,
      outlineColor:BTN_COLOR,
      currentTableObject:{},
      selectedColumns:[],
      validateProgress:false,
      errorList:{},
      isBetween:false,
      tableheight:'500px',
      distinct:false,
      editable: true,
      isDragging: false,
      delayedDragging: false,
      search: '',
      table_search:'',
      join_dialog:false,
      stepname:this.parentdigramobj.cell_name,
      join_from_table:'',
      join_json_for_link: [],
      join_to_table:'',
      jto_column_list:[],
      jfrom_column_list:[],
      join_json: [],
      operators:JOIN_OPERATOR_ARRAY_JSON,
      filter_operators:FLITER_JOIN_OPERATOR_ARRAY_JSON,
      join_opeator:'_eq_',
      jtype_list:JOIN_TYPE,
      link_id: '',
      jfrom:'',
      jto:'',
      jfrom_drv_table: "false",
      jto_drv_table: "false",
      jfrom_error:'',
      jto_error:'',
      jtype:'Inner Join',
      tbl_dialog:false,
      dbl_click_tbl_cell_name:'',
      dbl_click_tbl_items:[],
      selection_graph: new joint.dia.Graph,
      columns_for_selection:[],
      port_reset_value:0,
      port_radis : 8,
      // table_column_list:[],
      selected_table:'',
      table_list:[],
      connection_str:"",
      schema:"",
      db_type:"",
      default_table_list:"",
      step_headers: [
      { text: 'Select', value: 'forselection', align: "left", sortable: false},
      // { text: 'Filter', value: 'forfilter', align: "left", sortable: false},
      { text: 'Column name', value: 'column_name', align: "left", sortable: false}
      ],
      aggregate_types:AGGREGATE_FUNCTIONS,
      columns_for_filter: [],
      value_type_list: ['Value', 'Date', 'Column'],      
      column_name_list: [],
      filter_column_tbl_obj: {
        's_parentheses': '',
        'column_name': '',
        'operator': '',
        'v_type1': 'Value',
        'v_type2': 'Value',
        'value1': '',
        'value2':'',
        'e_parentheses': '',
        'is_drv_table': false
      },
      selectFromrule:[
      v => !!v || 'Select from required'
      ],
      selectTorule: [
      v => !!v || 'Select to is required'
      ],
      add_join_button: false,
      join_keys_list: [],
      filter_json:[],
      selection_headers:[
      {
        text: "",
        align: "left",
        sortable: false
      },
      { text: 'Column', value: 'column_name', align: "left", sortable: false},
      { text: 'Table', value: 'table_name', align: "left", sortable: false},
      {text: 'Aggregate', value: 'aggregate', align: "left", sortable: false},
      {text: 'Alias name', value: 'alias_name', align: "left", sortable: false},
      {text: 'Order Type', value: 'order_type', align: "left", sortable: false},
      {text: 'Action', value: 'action', align: "left", sortable: false}
      ],
      dragged_tbl_list:[],
      dragged_tbl_list_with_type:[],
      dateformat_dialog: false,
      env_id: '',
      savedstatus:'edited',
      is_error_occured:false,
      tablelistpanelproperties:'',
      dateformatobj:'',
      auto_increment_id:0,
      selection_error:'',
      paper:'',
      source_cells_detail:[],
      combined_error_list:{},
      join_error_json:{},
      validation_response:{},
      policy_list:[],
      filter_popup_index:0,
      showpolicies:true,
      datasource_error:'',
      env_name:this.$session.get('selected_env').name,
      steps_table_list:[], //this variable is for pass step table list to tablelist panel when user perform server search.
    }
  },
  props:['parentdigramobj','savedatastatus','iserroroccured',"policies","tableListLoader",'datasourceerror'],
  watch: {
    '$store.state.errorList':{
      handler(newValue){
        if(!_.isEmpty(newValue)){
          // let idArray = Object.keys(newValue);
          if(this.parentdigramobj && newValue[this.parentdigramobj.stepId]){
            this.validation_response = newValue[this.parentdigramobj.stepId];
          }          
        }
      },
      deep:true
    },
    datasourceerror(newvalue){
      this.datasource_error =newvalue
    },
    policies(newvalue){
      // debugger;
      this.policy_list = newvalue;
    },
    savedatastatus(newvalue,oldvalue){
      this.savedstatus = newvalue
    },
    iserroroccured(newvalue,oldvalue){
      this.is_error_occured =newvalue
    },
    parentdigramobj(newvalue,o){
      // debugger;
      // this.errorListCount = 0
      var details_for_table_panel = {}
      this.source_cells_detail = []
      this.column_name_list = []
      this.stepname = newvalue.cell_name
      this.steps_table_list = []
      this.validation_response ={}
      if(newvalue.tables_detail){
        details_for_table_panel.tables_detail = newvalue.tables_detail
        this.table_list = newvalue.tables_detail.table_list
        this.connection_str= newvalue.tables_detail.connection_str
        this.schema= newvalue.tables_detail.schema
        this.db_type= newvalue.tables_detail.db_type
        this.default_table_list = newvalue.tables_detail.default_table_list
        details_for_table_panel.table_list = this.table_list
        details_for_table_panel.connection_str = this.connection_str
        details_for_table_panel.schema = this.schema
        details_for_table_panel.db_type = this.db_type
        details_for_table_panel.default_table_list = this.default_table_list
      }
      //Code to bind error message if user perform validation at flowchart level
      var flowchart_errors = this.$store.state.errorList
      if(flowchart_errors && this.parentdigramobj && flowchart_errors[newvalue.stepId]){
          this.validation_response = flowchart_errors[newvalue.stepId];
        }

      if (newvalue.env_id){
        this.env_id = newvalue.env_id
        console.log('ON SELECTION', this.env_id)
      }
      if(newvalue.step_data){
        if(newvalue.step_data.join)
          this.join_json = newvalue.step_data.join
        else{
          this.join_json = [] 
        }
        this.distinct = false
        if(newvalue.step_data.distinct)
          this.distinct = newvalue.step_data.distinct
        if(newvalue.step_data.selection){
          this.columns_for_selection = newvalue.step_data.selection
        }
        else{
          this.columns_for_selection = []
        }
        if(newvalue.step_data.filter){
          this.columns_for_filter = newvalue.step_data.filter
        }
        else{
          this.columns_for_filter = []
        }
        if(newvalue.step_data.graph){
          this.selection_graph.fromJSON(JSON.parse(JSON.stringify(newvalue.step_data.graph)))
        }
        else{
          this.selection_graph.clear()
        }
        /* if(newvalue.step_data.validation_response){
          this.validation_response = newvalue.step_data.validation_response
        } */
        // this.Perform_Validation(this.validation_response)
        if(newvalue.step_data.select_table_list){
          this.dragged_tbl_list = newvalue.step_data.select_table_list
        }
        else{
          this.dragged_tbl_list =[]
        }
        if(newvalue.step_data.new_select_table_list){
          this.dragged_tbl_list_with_type = newvalue.step_data.new_select_table_list
          getBulkTablesColumns(this,this.table_column_list,this.env_id,this.connection_str,this.schema,cloneDeep(this.dragged_tbl_list_with_type)).then(tableColumnResponse=>{
            for (var i = tableColumnResponse.length - 1; i >= 0; i--) {
              var table_name = tableColumnResponse[i].table_name
              var table_columns = tableColumnResponse[i].table_column_list
              for (var j = table_columns.length - 1; j >= 0; j--) {
                var filter_dict = {}
                filter_dict['column_name'] = table_name+'.'+table_columns[j]
                filter_dict[table_name+'.'+table_columns[j]] = false
                this.column_name_list.push(filter_dict)
              }
            }
            if(this.columns_for_filter.length === 0){
              this.add_new_filter_row()
            }
          })
        }
        else{
          this.dragged_tbl_list_with_type =[]
        }

        if(newvalue.step_data.auto_id)
          this.auto_increment_id = newvalue.step_data.auto_id
        else
          this.auto_increment_id = 0

        // if(newvalue.step_data.validation_response)
        //   this.validation_response = newvalue.step_data.validation_response
      }
      if(newvalue.source_cells_detail && newvalue.source_cells_detail.length > 0){
        this.source_cells_detail = newvalue.source_cells_detail
        this.table_list = cloneDeep(this.default_table_list)
        var step_list = newvalue.source_cells_detail
        for(var i=0;i<step_list.length;i++){
          for(var each_table_count=0;each_table_count<this.table_list.length;each_table_count++){
            if (this.table_list[each_table_count].title == step_list[i].source_name){
              this.table_list.splice(each_table_count, 1)
              break;
            }
          }
          this.table_list.push({"type":"S","title":step_list[i].source_name})
          this.steps_table_list.push({"type":"S","title":step_list[i].source_name})
          for(var tbl_col_count=0;tbl_col_count<this.table_column_list.length; tbl_col_count++){
            if (this.table_column_list[tbl_col_count].table_name == step_list[i].source_name){
              this.table_column_list.splice(tbl_col_count, 1)
              break
            }
          }
          // this.table_column_list.push({"table_name":step_list[i].source_name, "table_column_list":step_list[i].columns})
          let key = this.env_id + '_table_column_list';

          if (!this.$store.state.cacheData[key]) {
            this.$store.state.cacheData[key] = [];
          }
              // this.table_column_list.push({"table_name":step_list[i].source_name, "table_column_list":step_list[i].columns})

              var table_name = step_list[i].source_name
              var table_columns = step_list[i].columns
              for (var k = this.dragged_tbl_list_with_type.length - 1; k >= 0; k--) {
                if(this.dragged_tbl_list_with_type[k].table_type === 'step' && (this.dragged_tbl_list_with_type[k].table_name === table_name || this.dragged_tbl_list_with_type[k].table_name === table_name.replace(/\s+/g, '').trim())){
                  for (var j = table_columns.length - 1; j >= 0; j--) {
                    var filter_dict = {}
                    filter_dict['column_name'] = table_name+'.'+table_columns[j]
                    filter_dict[table_name+'.'+table_columns[j]] = true
                    this.column_name_list.push(filter_dict)
                  }
                  break;
                }
              }
              let cacheIndex = -1;
              cacheIndex = _.findIndex(this.$store.state.cacheData[key], function(o) { return o.table_name == table_name; });

              if(cacheIndex >= 0){
                this.$store.state.cacheData[key].splice(cacheIndex, 1); 
              }
               
              this.$store.state.cacheData[key].push({"table_name":table_name, "table_column_list":table_columns})
            }
          }
          else{
            this.table_list = cloneDeep(this.default_table_list)
          }



      // as we required step tables also.so need to copy table list to default
      this.default_table_list = cloneDeep(this.table_list)
      details_for_table_panel.table_list = this.table_list
      details_for_table_panel.default_table_list = this.default_table_list
      details_for_table_panel.env_id = this.env_id
      this.tablelistpanelproperties = details_for_table_panel
    },
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
    columns_for_selection(newvalue){
      this.savedata(false)
    },
    join_json(newvalue){
      this.savedata(false)
    },
    columns_for_filter(newvalue){
      this.savedata(false)
    },
    stepname(newvalue,oldvalue){
      if(newvalue.length ===0)
        this.stepname = oldvalue
      this.savedata(false)
    },
    column_name_list(newvalue){
      this.savedata(false)
    },
    selected_table(newvalue){
      this.savedata(false)
    }
  },
  mounted() {
    let _this = this

      // this.tableheight='530px';
      if(this.$refs.join_panel_ref.$el)
        var join_flex = this.$refs.join_panel_ref.$el
      else
        var join_flex = this.$refs.join_panel_ref

      join_flex.addEventListener('drop',drop_on_join_panel)
      join_flex.addEventListener('dragover',allowDrop_on_join_panel)

      function drop_on_join_panel(event) {
        event.preventDefault();
        // debugger
        var table_name = _this.currentTableObject.title;// event.dataTransfer.getData("table_name");
        var table_type = _this.currentTableObject.type; // event.dataTransfer.getData("table_type");
      // var cell = getRectangle(join_flex.scrollLeft + 50,join_flex.scrollTop+50,100,40,data)
      var display_table_name = table_name
      if(table_name.length >= 9)
        display_table_name = table_name.substring(0,8) + '...'
      var cell = getTableRectangle(event.offsetX,event.offsetY,150,40,display_table_name,table_name,table_type)

      _this.dragged_tbl_list.push(table_name)
      
      _this.dragged_tbl_list_with_type.push({"table_name":table_name,"table_type":table_type})

      cell.addTo(_this.selection_graph)
    }
    function allowDrop_on_join_panel(event) {
      event.preventDefault();
    }

    var paper_heigth = 500
    var paper_width = 900
    var currentScale = 1
    var gridSize = 25
    var graph =_this.selection_graph
    var paper = new joint.dia.Paper({
      el: $('#selection_paper'),
      model: graph,
      gridSize: gridSize,
      drawGrid:{ name: 'mesh', args: { color: 'grey' }},
      height:paper_heigth,
      width:paper_width,
      defaultLink: getDefaultLinkProperies(true),
      validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView){
        return validateConnection(cellViewS, magnetS, cellViewT, magnetT, end, linkView)
      },
      validateMagnet: function(cellView, magnet) {
        return validateMagnet(cellView, magnet)
      },
      interactive: { vertexAdd: false },
    // Enable marking available cells & magnets
    markAvailable: true,
    linkPinning:false,
    // Enable link snapping within 75px lookup radius
    snapLinks: { radius: 75 },
    linkPinning:false
  });

    var selected;
    paper.on("link:connect", function(linkView) {
      reset_port_markup(_this.selected_table.model,_this.port_reset_value)
      _this.selected_table=''
    }).on("link:pointerdblclick", function(linkView) {
      _this.join_dialog =true
      _this.getLinkDetails(linkView.model)
    });

    paper.on('element:mouseover', function(cellView) {
      reset_port_markup(cellView.model,_this.port_radis)
      _this.selected_table = cellView
      selected = cellView
    }).on('element:pointerdblclick',function(cellView){
      var cell = cellView.model
      _this.showTableColumns(cell.prop('table_name'),cell.prop('is_drv_table'), cell.prop('table_type'))
    }).on('blank:mouseover blank:contextmenu link:mouseover', function(cellView) {
      reset_port_markup(_this.selected_table.model,_this.port_reset_value)
      _this.selected_table=''
    });

    graph.on('add', function(cell) {
      if(cell.isElement()){
        cell.set('ports',{'groups':get_port_group(),'items':get_port_items(_this.port_reset_value)})
        _this.showTableColumns(cell.prop('table_name'),cell.prop('is_drv_table'), cell.prop('table_type'),true)
        cell.attr('root/title',cell.prop('table_name'))
    }
      PerformSmartRouting(graph,cell,paper)
    }).on('change:position', function(cell) {
      PerformSmartRouting(graph,cell,paper)
    }).on('remove',function(cell){
      if (cell.isLink()) {
        _this.perform_link_Removed(cell.id)
      }
      else if(cell.isElement()){
        _this.perform_element_Removed(cell)
      }
    }).on('change',function(cell){
      // _this.savedata(false)
    });

    $('#selection_paper')
    .attr('tabindex', 0)
    .on('mouseover', function() {
      this.focus();
    })
    .on('keydown', function(e) {
      var key = e.which || e.keyCode;
      var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false);
        //delete table list
        if(key === 46 && _this.selected_table){
          _this.selected_table.model.remove()
        }
      });

    _this.paper = paper

  },
  computed: {
    table_column_list(){
      let data = this.$store.state.cacheData[this.env_id+'_table_column_list'];
      return data ? data : [];
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description"        
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
  },
  methods:{
    totalCount(count){
      this.errorListCount = count;
    },
    draggedObject(object){
      this.currentTableObject = object;
    },
    updateGroup(){
      // alert("changes in data selections");
    },
    setError(errorList){
      let _this = this;
      // _this.Remove_Error_List();
      debugger;
      _this.Perform_Validation(errorList);
    },
    saveCriteria(columns_for_filter){
      // debugger;
      this.columns_for_filter = columns_for_filter;
      this.savedata();
    },
    findBetween(){
      let _this = this;
      _this.isBetween = false;
      // debugger;
      _this.columns_for_filter.map(obj=>{
        if(obj.operator == '_bet_') 
          _this.isBetween = true;
      });
    },
    get_new_id(){
      return ++this.auto_increment_id;
    },
    datePicker(idx){
      this.filter_popup_index = idx
      var date_details = this.columns_for_filter[idx].datedetails
      if(date_details)
        this.dateformatobj = cloneDeep(date_details)
      else
        this.dateformatobj ={}
      this.dateformat_dialog = true
    },
    getdate(index,data){
      index = this.filter_popup_index
      var date_data = cloneDeep(data)
      this.columns_for_filter[index].value = date_data["value"]
      this.columns_for_filter[index].datedetails = date_data
      this.savedata()
      this.dateformat_dialog = false
    },
    resetIsDrvTable(c_name, idx){
      for(var i=0;i< this.column_name_list.length;i++){
        if(this.column_name_list[i][c_name]){
          this.columns_for_filter[idx].is_drv_table = this.column_name_list[i][c_name]
          break;
        }else{
          this.columns_for_filter[idx].is_drv_table = false
        }
      }
      this.savedata()
    },
    perform_link_Removed(link_id){
      for(var i=0;i< this.join_json.length;i++){
        if(Object.keys(this.join_json[i])[0]===link_id){
          this.join_json.splice(i, 1)
          break;
        }
      }
    },
    perform_element_Removed(element){
      // var table_to_removed = element.attr('text/text').replace(/\s+/g, '').trim()
      var table_to_removed = element.prop('table_name')
      if(!table_to_removed)
        table_to_removed = element.attr('text/text').replace(/\s+/g, '').trim()
      for (var i = this.columns_for_selection.length - 1; i >= 0; i--) {
        if(this.columns_for_selection[i].table_name === table_to_removed)
          this.columns_for_selection.splice(i,1)
      }
      for (var j = this.columns_for_filter.length - 1; j >= 0; j--) {
        var tbl_name =''
        if(!this.columns_for_filter[j].column_name)
          continue
        tbl_name = this.columns_for_filter[j].column_name.split('.')[0]
        if(tbl_name === table_to_removed)
          this.columns_for_filter.splice(j,1)
      }

      for (var k = this.column_name_list.length - 1; k >= 0; k--) {
        var tbl_name = this.column_name_list[k].column_name.split('.')[0]
        if(tbl_name === table_to_removed)
          this.column_name_list.splice(k,1)
      }
      if(this.dragged_tbl_list.includes(table_to_removed)){
        this.dragged_tbl_list.splice(this.dragged_tbl_list.indexOf(table_to_removed), 1);
        for (var i = this.dragged_tbl_list_with_type.length - 1; i >= 0; i--) {
          if(this.dragged_tbl_list_with_type[i].table_name === table_to_removed){
            this.dragged_tbl_list_with_type.splice(i,1)
            break;
          }
        }
      }
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
    },
    showTableColumns(table_name,is_drv_table, table_type,show_filter=false){
      // console.log(table_name)
      this.tbl_dialog= !show_filter
      this.dbl_click_tbl_cell_name = table_name
      getTableColumns(this,this.table_column_list,this.env_id,this.connection_str,this.schema, table_name, table_type).then(tableColumnResponse => {
        this.dbl_click_tbl_items = []
        for(var i=0;i<tableColumnResponse.length;i++){
          var _data_dict = {"forselection": false,
          "forfilter":false,
          "table_name": table_name,
          "column_name": tableColumnResponse[i],
          "is_drv_table":is_drv_table}
          this.dbl_click_tbl_items.push(_data_dict)          
          // add_fliter_row.push(true) ;
        }
        if(show_filter)
        {
          this.performselection()
        }
      }).catch({});
    },
    performselection(){
      // var add_fliter_row = []
      for(var i=0;i<this.dbl_click_tbl_items.length;i++){
        if(this.dbl_click_tbl_items[i].forselection === true){
          this.selection_error = ''
          var row_id =this.get_new_id()
          var alias_name = ''
          for(var j=0;j<this.columns_for_selection.length;j++){
            if(this.dbl_click_tbl_items[i].column_name == this.columns_for_selection[j].column_name && this.columns_for_selection[j].alias_name === ''){
              alias_name = this.columns_for_selection[i].column_name+'_'+row_id;
              break;
            }
          }
          this.columns_for_selection.push({'id':row_id,'column_name': this.dbl_click_tbl_items[i].column_name, 'table_name': this.dbl_click_tbl_items[i].table_name, 'alias_name': alias_name,'is_drv_table':this.dbl_click_tbl_items[i].is_drv_table,'error_list':''})
        }
        // if(this.dbl_click_tbl_items[i].forfilter === true){
        //   var filter_dict = {}
        //   filter_dict['column_name'] = this.dbl_click_tbl_items[i].table_name+'.'+this.dbl_click_tbl_items[i].column_name
        //   filter_dict[this.dbl_click_tbl_items[i].table_name+'.'+this.dbl_click_tbl_items[i].column_name] = this.dbl_click_tbl_items[i].is_drv_table
        //   this.column_name_list.push(filter_dict)
        //   add_fliter_row.push(true) ;
        // }

        var filter_dict = {}
        filter_dict['column_name'] = this.dbl_click_tbl_items[i].table_name+'.'+this.dbl_click_tbl_items[i].column_name
        filter_dict[this.dbl_click_tbl_items[i].table_name+'.'+this.dbl_click_tbl_items[i].column_name] = this.dbl_click_tbl_items[i].is_drv_table
        this.column_name_list.push(filter_dict)
      }
      if(this.columns_for_filter.length === 0){
        this.add_new_filter_row()
      }
      this.tbl_dialog =false
    },
    delete_selection_row(index){
      this.columns_for_selection.splice(index,1)
      this.savedata()
    },
    add_new_filter_row(){
      var current_filter_length = this.columns_for_filter.length
      if(current_filter_length > 0){
        if(!this.columns_for_filter[current_filter_length-1]['operation'])
          this.columns_for_filter[current_filter_length-1]['operation'] = false   
      }
      var obj = cloneDeep(this.filter_column_tbl_obj);
      obj['id'] = this.get_new_id()
      obj['error_list'] = ''
      this.columns_for_filter.push(obj);
    },
    resetValue(idx){
      // alert(this.columns_for_filter[idx].value)
      // this.columns_for_filter[idx].value = '';
      this.savedata()
    },
    delete_filter_row(idx){
      var current_filter_length = this.columns_for_filter.length
      if(current_filter_length > 1 && current_filter_length-1 ===  idx)
        delete this.columns_for_filter[idx-1]['operation']
      this.columns_for_filter.splice(idx, 1)
      if(this.columns_for_filter.length === 0){
        var obj = cloneDeep(this.filter_column_tbl_obj);
        this.columns_for_filter.push(obj);
      }
    },
    getLinkDetails(link){
      this.link_id=link.id
      this.jfrom=''
      this.jto=''
      this.jto_error=''
      this.jfrom_error=''
      this.jfrom_drv_table= "false"
      this.jto_drv_table="false"
      this.join_json_for_link=''
      this.join_keys_list=[]
      this.join_opeator="_eq_"
      var source_id = link.source().id
      var target_id = link.target().id
      this.join_from_table = this.selection_graph.getCell(source_id).prop('table_name')
      this.jfrom_drv_table = this.selection_graph.getCell(source_id).prop('is_drv_table')
      var jfrom_table_type = this.selection_graph.getCell(source_id).prop('table_type')
      this.join_to_table = this.selection_graph.getCell(target_id).prop('table_name')
      this.jto_drv_table = this.selection_graph.getCell(target_id).prop('is_drv_table')
      var jto_table_type = this.selection_graph.getCell(target_id).prop('table_type')
      getTableColumns(this,this.table_column_list,this.env_id,this.connection_str,this.schema, this.join_from_table, jfrom_table_type).then(tableColumnResponse=> {
        this.jfrom_column_list = tableColumnResponse            
      }).catch();
      getTableColumns(this, this.table_column_list,this.env_id,this.connection_str,this.schema, this.join_to_table, jto_table_type).then(tableColumnResponse=> {
        this.jto_column_list = tableColumnResponse
      }).catch();

      for (var i = 0; i < this.join_json.length; i++) {
        if(this.join_json[i][this.link_id]){
          this.join_keys_list = this.join_json[i][this.link_id].condition
          this.join_json_for_link = this.join_json[i][this.link_id].condition
          //if table level error occured, then they definitly present in 
          //first condition against table names
          this.jfrom_error = this.join_json_for_link[0].error_list.jfrom
          this.jto_error = this.join_json_for_link[0].error_list.jto
          break;
        }
      }
    },
    add_join(){
      var data = {'jfrom':this.join_from_table,'jto':this.join_to_table,'type':this.jtype, 'condition': this.join_keys_list,'jfrom_drv_table':this.jfrom_drv_table,'jto_drv_table':this.jto_drv_table}
      
      if(this.jfrom && this.jto){
        var link_found = false
        for (var i = 0; i < this.join_json.length; i++) {
          if(this.join_json[i][this.link_id]){
            link_found = true
            break;
          }
        }
        if(!link_found){
          var generate_dict = {}
          generate_dict[this.link_id] =data
          this.join_json.push(generate_dict)
        }
        
        if(this.update_join_button){
          var start_index = (this.update_join_button-1);
          var number_of_elements_to_remove = 1;
          var l_id = this.link_id
          var j_from = this.jfrom
          var j_operator = this.join_opeator
          var j_to = this.jto
          var join_from_table = this.join_from_table
          var join_to_table = this.join_to_table
          var _obj = this.join_json.map(function(el) {
            if(el[l_id]){
              el[l_id]['condition'].splice(start_index, number_of_elements_to_remove, {'from_column': j_from,'operator': j_operator, 'to_column': j_to,
                'jfrom':join_from_table,'jto':join_to_table})}
            });
        }else{
          for (var i = 0; i < this.join_json.length; i++) {
            if(this.join_json[i][this.link_id] && !(this.join_json[i][this.link_id]['condition'].some((elem) => this.jfrom === elem.from_column && this.jto === elem.to_column && this.join_opeator === elem.operator )))
            {
              this.join_json[i][this.link_id]['condition'].push({'id':this.get_new_id(),'from_column': this.jfrom, 'operator': this.join_opeator, 'to_column': this.jto, 'jfrom':this.join_from_table,'jto':this.join_to_table,'error_list':{}})
              this.join_json_for_link = this.join_json[i][this.link_id].condition
              break;
            }
          }
        }
        this.jfrom=''
        this.jto=''
        this.join_opeator="_eq_"
        this.update_join_button=false
      }
    },
    update_join(j_from, j_cond, j_to, index){
      this.jfrom=j_from
      this.jto=j_to
      this.join_opeator=j_cond,
      this.update_join_button = (index+1)
    },
    delete_join(index){
      for (var i = 0; i < this.join_json.length; i++) {
        if(this.join_json[i][this.link_id]){
          this.join_json[i][this.link_id]['condition'].splice(index, 1)
          if(this.join_json[i][this.link_id]['condition'].length === 0){
            //delete join key too
            this.join_json.splice(i,1)
          }
          break;
        }
      }
    },
    savedata(is_close){
      let _this = this
      this.savedstatus = "edited"
      var data = this.getdata()
      this.Remove_From_Normal_List(data.step_data.selection)
      this.Remove_From_Normal_List(data.step_data.filter)
      this.Remove_From_Join_List(data.step_data.join)
      console.log("data",data)
      _this.$emit('update-object',data,is_close)
    },
    getdata(){
      this.env_name = this.$session.get('selected_env').name
      let _this = this
      this.is_error_occured =false
      var filter_data = cloneDeep(this.columns_for_filter)
      if(filter_data.length === 1 && (!filter_data[0].column_name ||!filter_data[0].operator))
        filter_data = []
      console.log(this.column_name_list)
      var data = {'stepname':_this.stepname,
      'step_data':{'graph':_this.selection_graph.toJSON(),'join':cloneDeep(this.join_json),'selection':cloneDeep(this.columns_for_selection),'filter':filter_data,'filter_column_list':['abc'], 'select_table_list':cloneDeep(this.dragged_tbl_list),'new_select_table_list':cloneDeep(this.dragged_tbl_list_with_type),'auto_id':this.auto_increment_id,'validation_response':this.validation_response,'distinct':this.distinct}}
    return data
  },
  validatestepdata(){
    var _this = this
    if(_this.validateProgress){
      alert(VALIDATION_IN_RPOCESS_MESSAGE)
      return false
    }
    _this.validateProgress=true;
    var data = this.getdata()
    data['previous_steps_data'] = this.source_cells_detail
    data['step_type'] ='Selection'
    data['env_id'] = this.env_id
    _this.selection_error = ''
    _this.combined_error_list = {}
    _this.validation_response={}
    _this.Remove_Error_List();
    validate_process_def_json(this, data).then(validation_response => {
      _this.validateProgress=false;
      var error_data = validation_response ;
      _this.validation_response = validation_response
      _this.$store.state.errorList[this.parentdigramobj.stepId] = validation_response
        //first clear all errors list
        // _this.Perform_Validation(_this.validation_response)
      },error=>{
         _this.validateProgress = false;
       })
    console.log(_this.combined_error_list)
  },
  Perform_Validation(error_data){
    var _this = this
    _this.Remove_Error_List();
    if(this.dragged_tbl_list.length === "0"){
      _this.combined_error_list.Required = []
      _this.combined_error_list.Required.push('Drag atleast one table on the graph')
    }
    if (typeof error_data === 'object'){
      if(error_data.step_data){
        var step_data_errors = error_data.step_data
        if(step_data_errors.selection){
          if(_this.columns_for_selection.length ===0){
            _this.selection_error = 'Atleast one column for selection required'
            if(!_this.combined_error_list.Required)
              _this.combined_error_list.Required = []
            _this.combined_error_list.Required.push(_this.selection_error)
          }
          else{
            _this.Perform_Validation_On_Selection(step_data_errors.selection)
          }
        }
        if(step_data_errors.filter){
          _this.Perform_Validation_On_Filter(step_data_errors.filter)
        }
        if(step_data_errors.graph){
          validate_graph_data_for_selection(_this.selection_graph,_this.paper,step_data_errors.graph.orphan_steps,step_data_errors.graph.links_without_join,GRAPH_TABLE_ERROR_MESSAGES.orphan)
        }
        if(step_data_errors.join){
          _this.Perform_Validation_On_Join(step_data_errors.join)
        }
        var orphas_list = []
        if(step_data_errors.table_list){
          orphas_list = get_elements_ids_by_name(_this.selection_graph,step_data_errors.table_list)
        }
        if(step_data_errors.link){
          validate_graph_data_for_selection(_this.selection_graph,_this.paper,orphas_list,step_data_errors.link,GRAPH_TABLE_ERROR_MESSAGES.dependencynotfound)
        }
      }
    }
  },
  Perform_Validation_On_Selection(selection_error_data){
    var _this = this;
    var rows = Object.keys(selection_error_data)
    rows.map(row=>{ // it will provide rowindex like 0,1,2
      let columnArray = Object.keys(selection_error_data[row]); 
      columnArray.map(column=>{ // it will provide key in that object like alies_name, column_name
        _this.columns_for_selection[row].error_list[column] = selection_error_data[row][column]; 
      })
    })
  },
  Perform_Validation_On_Filter(filter_error_data){
   var _this = this;
    var rows = Object.keys(filter_error_data)
    rows.map(row=>{ // it will provide rowindex like 0,1,2
      let columnArray = Object.keys(filter_error_data[row]); 
      columnArray.map(column=>{ // it will provide key in that object like alies_name, column_name
        _this.columns_for_filter[row].error_list[column] = filter_error_data[row][column]; 
      })
    })
  },
  Perform_Validation_On_Join(join_error_data){
    var _this = this
    for(var i=0;i<_this.join_json.length;i++){
      var join_link_id = Object.keys(_this.join_json[i])[0]
      if(join_error_data[join_link_id]){
        var error_link_json = join_error_data[join_link_id]
        var keys = Object.keys(error_link_json)
        for(var j=0;j<keys.length;j++){
          var join_condition = _this.join_json[i][join_link_id].condition
          for(var k=0;k<join_condition.length;k++){
            if(keys[j]==join_condition[k].id){
              join_condition[k].error_list= error_link_json[keys[j]]
              break;
            }
          }
          _this.join_json[i][join_link_id].condition = join_condition
        }
      }
    }
  },
  Remove_Error_List(){
    validate_graph_data_for_selection(this.selection_graph,this.paper,[],[],'')
    this.Remove_From_Normal_List(this.columns_for_selection)
    this.Remove_From_Normal_List(this.columns_for_filter)
    this.Remove_From_Join_List(this.join_json)
    
  },
  Remove_From_Normal_List(list){
    for(var i=0;i<list.length;i++){
      list[i].error_list = {}
    }
  },
  Remove_From_Join_List(list){
    for(var i=0;i<list.length;i++){
      var join_link_id = Object.keys(list[i])[0]
      for(var j=0;j<list[i][join_link_id].condition.length;j++){
        list[i][join_link_id].condition[j].error_list={}
      }
    }
  },
  Get_Json_As_String(ind,json_data,add_to){ //index, error_msg, selection
    for(var key in json_data){
      if(add_to === 'selection')
        this.combined_error_list.Selection.push('Row no. '+(ind+1)+':'+json_data[key])
      else
        this.combined_error_list.Filter.push('Row no. '+(ind+1)+':' +json_data[key])
    }
  },
  dragitem(event){
    var innerhtml = event.target.innerHTML
    var parser = new DOMParser()
    var doc = parser.parseFromString(innerhtml, "text/xml");
    var table_type = doc.getElementsByTagName('i')[0].getAttribute("title")
    event.dataTransfer.setData("table_name", event.target.innerText);
    event.dataTransfer.setData("table_type", table_type);
  },
  close_join_dialog(){
    this.add_join()
    this.join_dialog =false
  },
  /* close_date_format_popup(){
    this.dateformat_dialog = false
  }, */
  perform_collapse(action){
    if(action === 'close'){
      if(this.$refs.selection_panel_ref.$el)
        this.$refs.selection_panel_ref.$el.style.width="58%";
      else this.$refs.selection_panel_ref.style.width="58%";
    }
    else{
      if(this.$refs.selection_panel_ref.$el)
        this.$refs.selection_panel_ref.$el.style.width="40%";
      else this.$refs.selection_panel_ref.style.width="40%";
    }
  },
}
}
</script>
<style>
.joinGrid{
  max-height: 112px;
  overflow-y: auto;
}
.v-autocomplete.v-input{
  margin:0px;
}
.upperrow{
  display:inline-block;
  height:400px;
  overflow: auto;
  border:1px solid grey;
}

/* .lowerrow{
  display:block;
  height:200px;
  overflow: auto;
  border:1px solid grey;

} */

#mainflex{
  background-color:grey;
}

.list_items {
  draggable:true;
  height:30px;
}

.handle {
  cursor: move !important;
  cursor: -webkit-grabbing !important;
}
table.v-table thead tr, table.v-table tbody tr{
  height: 38px;
}
.sticky {
  position: absolute;
}
#filter_column_table .v-input__slot{
=======
            <v-layout raw wrap>
             <table border="0" class="table table-striped table-bordered table-fixed">
                <tbody>
                  <tr v-for="(item, index) in join_json.keys">
                    <td>{{item.jfromColumn}}</td>
                    <td>{{item.jCondition}}</td>
                    <td>{{item.jtoColumn}}</td>
                    <td>
                      <v-icon small class="mr-2" style="color:#494949" @click="update_join(item.jfromColumn, item.jCondition, item.jtoColumn, index)">fa-edit</v-icon>
                      <v-icon small style="color:#494949" @click="delete_join(index)">fa-trash-alt</v-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </v-layout>
          </v-container> 
        </v-card>   
      </v-flex>                 
    </v-dialog>
  </v-flex>        
</template>
<script>
  const joint = require('jointjs')
  const cloneDeep = require('clone-deep');
  import draggable from 'vuedraggable'
  import {getRectangle} from "../../methods/flowcharts/shapes.js"
  import {validateConnection,validateMagnet,get_port_group,get_port_items,reset_port_markup} from "../../methods/flowcharts/ports.js"
  import {getDefaultLinkProperies,RestrictCyclicConnection,ValidateSourceTarget,ValidateOutgoingLink} from "../../methods/flowcharts/links.js"
  import {PerformSmartRouting} from "../../methods/flowcharts/graph.js" 
  import {JOIN_OPERATOR_ARRAY_JSON,JOIN_TYPE,AGGREGATE_FUNCTIONS, FLITER_JOIN_OPERATOR_ARRAY_JSON} from '../../methods/flowcharts/constants.js'
  import Sortable from 'sortablejs'

  export default {
    components:{
      draggable
    },
    data () {
      return {
        search: '',
        drawer: true,
        mini: true,
        right: null,
        table_search:'',
        join_dialog:false,
        stepname:this.parentdigramobj.cell_name,
        join_from_table:'',
        join_to_table:'',
        jto_column_list:[],
        jfrom_column_list:[],
        join_json: '',
        operators:JOIN_OPERATOR_ARRAY_JSON,
        filter_operators:FLITER_JOIN_OPERATOR_ARRAY_JSON,
        join_opeator:"EQUALS_TO",
        jtype_list:JOIN_TYPE,
        jfrom:'',
        jto:'',
        jtype:'inner join',
        tbl_dialog:false,
        dbl_click_tbl_cell_name:'',
        dbl_click_tbl_items:[],
        selection_graph: new joint.dia.Graph,
        columns_for_selection:[],
        port_reset_value:0,
        port_radis : 5,
        selected_table:'',
        table_list:  [{title: 'Customer'},{title: 'Employee'},{title:'SalesOrder'},{title: 'Customer1'},{title: 'Employee1'},{title:'SalesOrder1'},{title: 'Customer2'},{title: 'Employee2'},{title:'SalesOrder2'},{title: 'Customer3'},{title: 'Employee3'},{title:'SalesOrder3'},{title: 'Customer4'},{title: 'Employee4'},{title:'SalesOrder4'}],
        default_table_list:[],
        step_headers: [
          { text: 'Select', value: 'forselection', align: "left", sortable: false},
          { text: 'Filter', value: 'forfilter', align: "left", sortable: false},
          { text: 'Column name', value: 'title', align: "left", sortable: false}
        ],
        aggregate_types:AGGREGATE_FUNCTIONS,
        columns_for_filter: [],
        value_type_list: ['Value', 'Date', 'Column'],
        start_parentheses_list: [{'value':'('}, {'value':'(('}, {'value':'((('}, {'value':'(((('}],
        end_parentheses_list: [')', '))', ')))', '))))'],
        column_name_list: [],
        filter_column_tbl_obj: {
          's_parentheses': '',
          'column_name': '',
          'operators': '',
          'v_type': 'Value',
          'value': '',
          'e_parentheses': '',
        },
        selectFromrule:[
          v => !!v || 'Select from required'
        ],
        selectTorule: [
          v => !!v || 'Select to is required'
        ],
        add_join_button: false
      }
    },
    props:['parentdigramobj'],
    watch: {
      parentdigramobj(newvalue){
        this.stepname = newvalue.cell_name
      }
    },
    mounted() {
        let _this = this

        var header = document.getElementById("table_list_header");
        var table_list_panel = document.getElementById("table_list_panel")
        table_list_panel.addEventListener('scroll',function(e){
          // header.classList.add("sticky");
        });

        // var sticky = header.offsetTop;

        // function myFunction() {
        //   if (table_list_panel.pageYOffset > sticky) {
        //     header.classList.add("sticky");
        //   } else {
        //     header.classList.remove("sticky");
        //   }
        // }

        let table = document.querySelector(".draggable_table tbody");
        var _self = this;
        Sortable.create(table, {
          handle: ".handle", // Use handle so user can select text
        });


        _this.default_table_list=cloneDeep(_this.table_list)


        var join_flex = document.getElementById('join_panel')

        join_flex.addEventListener('drop',drop_on_join_panel)
        join_flex.addEventListener('dragover',allowDrop_on_join_panel)

        function drop_on_join_panel(event) {
          event.preventDefault();
          var table_name = event.dataTransfer.getData("table_name");
          // var cell = getRectangle(join_flex.scrollLeft + 50,join_flex.scrollTop+50,100,40,data)

          var cell = getRectangle(event.offsetX,event.offsetY,100,40,table_name)
          cell.addTo(_this.selection_graph)
          // _this.add_columns_for_selection(table_name)
        }

        function allowDrop_on_join_panel(event) {
          event.preventDefault();
        }

        var paper_heigth = 500
        var paper_width = 900
        var currentScale = 1
        var gridSize = 25
        var graph =_this.selection_graph
        var paper = new joint.dia.Paper({
          el: $('#selection_paper'),
          model: graph,
          gridSize: gridSize,
          drawGrid:{ name: 'mesh', args: { color: 'grey' }},
          height:paper_heigth,
          width:paper_width,
        defaultLink: getDefaultLinkProperies(),
         validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView){
          return validateConnection(cellViewS, magnetS, cellViewT, magnetT, end, linkView)
         },
        validateMagnet: function(cellView, magnet) {
            return validateMagnet(cellView, magnet)
        },
        interactive: { vertexAdd: false },
        // Enable marking available cells & magnets
        markAvailable: true,
        linkPinning:false,
        // Enable link snapping within 75px lookup radius
        snapLinks: { radius: 75 },
        linkPinning:false
        });

        var selected;
        paper.on("link:connect", function(linkView) {
          reset_port_markup(_this.selected_table.model,_this.port_reset_value)
          _this.selected_table=''
        }).on("link:pointerdblclick", function(linkView) {
          _this.join_dialog =true
          _this.getLinkDetails(linkView.model)
        });

        paper.on('element:mouseover', function(cellView) {
          reset_port_markup(cellView.model,_this.port_radis)
          _this.selected_table = cellView
          selected = cellView
        }).on('element:pointerdblclick',function(cellView){
          _this.showTableColumns(cellView.model.attr('text/text').trim())
        }).on('blank:mouseover blank:contextmenu link:mouseover', function(cellView) {
        reset_port_markup(_this.selected_table.model,_this.port_reset_value)
        _this.selected_table=''
      });

      graph.on('add', function(cell) {
        cell.set('ports',{'groups':get_port_group(),'items':get_port_items(_this.port_reset_value)})
        PerformSmartRouting(graph,cell,paper)
      }).on('change:position', function(cell) {
        PerformSmartRouting(graph,cell,paper)
      }).on('remove',function(cell){
        if (cell.isLink()) {
          //logic for remove join
        }
      });

      

      },
      methods:{
        get_columns(table_name){
          if(table_name === "Customer"){
            return [{title:'id',subtitle:'int'},{title:'name',subtitle:'varchar(50)'},{title:'city',subtitle:'varchar(50)'},{title:'pincode',subtitle:'int'}]
          }
          else if(table_name === "Employee")
            return [{title:'id',subtitle:'int'},{title:'name',subtitle:'varchar(50)'},{title:'joining_date',subtitle:'DateTime'},{title:'bloodgroup',subtitle:'varchar(5)'},{title:'salary',subtitle:'Numeric(16,1)'}]

         else if(table_name === 'SalesOrder')
          return [{title:'id',subtitle:'int'},{title:'cust_id',subtitle:'int'},{title:'item_id',subtitle:'int'},{title:'category_id',subtitle:'int'},{title:'invoice_id',subtitle:'int'}]
        },
        showTableColumns(table_name){
          this.tbl_dialog=true
          this.dbl_click_tbl_cell_name = table_name
          this.dbl_click_tbl_items = this.get_columns(table_name);
          for(var i=0;i<this.dbl_click_tbl_items.length;i++){
            this.dbl_click_tbl_items[i]['forselection'] = false,
            this.dbl_click_tbl_items[i]['forfilter'] = false,
            this.dbl_click_tbl_items[i]['table_name'] = table_name,
            this.dbl_click_tbl_items[i]['column_name'] = this.dbl_click_tbl_items[i].title
          }
        },
        performselection(){
          var add_fliter_row = []
          for(var i=0;i<this.dbl_click_tbl_items.length;i++){
            if(this.dbl_click_tbl_items[i].forselection === true){
              this.columns_for_selection.push(this.dbl_click_tbl_items[i])
              }
            if(this.dbl_click_tbl_items[i].forfilter === true){
              this.column_name_list.push({'column_name': this.dbl_click_tbl_items[i].table_name+'.'+this.dbl_click_tbl_items[i].column_name})
              add_fliter_row.push(true) ;
            }
          }
          if(this.columns_for_filter.length === 0 && add_fliter_row.includes(true)){
            var obj = cloneDeep(this.filter_column_tbl_obj);
            this.columns_for_filter.push(obj);
          }
          this.tbl_dialog =false
        },
        add_new_filter_row(){
          var obj = cloneDeep(this.filter_column_tbl_obj);
          this.columns_for_filter.push(obj);
        },
        resetValue(idx){
          this.columns_for_filter[idx].value = '';
        },
        getLinkDetails(link){
          this.jfrom=''
          this.jto=''
          this.join_opeator="EQUALS_TO"
          var source_id = link.source().id
          var target_id = link.target().id
          this.join_from_table = this.selection_graph.getCell(source_id).attr('text/text').trim()
          this.join_to_table = this.selection_graph.getCell(target_id).attr('text/text').trim()
          this.jfrom_column_list = this.get_columns(this.join_from_table)
          this.jto_column_list = this.get_columns(this.join_to_table)
          this.join_json = {'jFromTable':this.join_from_table,'jToTablel':this.join_to_table,'jType':this.jtype, 'keys': []}
        },
        add_join(){
          if(this.jfrom && this.jto){
            if(this.add_join_button){
              var start_index = (this.add_join_button-1);
              var number_of_elements_to_remove = 1;
              this.join_json['keys'].splice(start_index, number_of_elements_to_remove, {'jfromColumn': this.jfrom, 'jCondition': this.join_opeator, 'jtoColumn': this.jto})
            }else{
              this.join_json['keys'].push({'jfromColumn': this.jfrom, 'jCondition': this.join_opeator, 'jtoColumn': this.jto})
            }
            this.jfrom=''
            this.jto=''
            this.join_opeator="EQUALS_TO"
          }
        },
        update_join(j_from, j_cond, j_to, index){
          this.jfrom=j_from
          this.jto=j_to
          this.join_opeator=j_cond,
          this.add_join_button = (index+1)
        },
        delete_join(index){
          this.join_json['keys'].splice(index, 1)
        },
        closepopup(){
          let _this = this
          var data = {'graph':_this.selection_graph,'stepname':_this.stepname}
          _this.$emit('update-object',data)
        },
        dragitem(event){
          event.dataTransfer.setData("table_name", event.target.innerText);
        },
        perform_tablelist_serach(event,loop){
          var input = this.table_search
          var table_list = document.getElementById('list_of_tables')
          var list_items = table_list.getElementsByClassName('list_items')
          var filter = input.toUpperCase();
          var key_found = false
          for (var i = 0; i < list_items.length; i++) {
            if (list_items[i].innerText.trim().toUpperCase().indexOf(filter) > -1) 
              {
                  list_items[i].style.display = "";
                  key_found = true
              }
              else
                list_items[i].style.display = "none";
          }
          if(input.length == 0){
            this.table_list = cloneDeep(this.default_table_list)
            if(!loop){
              this.perform_tablelist_serach(event,1)
              console.log('loop 0')
            }
          }
          else if(input.length%3==0 || !key_found){
            this.perform_serverside_search(input)
             if(!loop){
              console.log('loop 1')
              this.perform_tablelist_serach(event,1)
            }
          }
        },
        perform_serverside_search(input){
          this.table_list = [{title:"SalesOrder"},{title:"PurchaseOrders"}]
        },

        perform_collapse(action){
          if(action === 'close'){
            document.getElementById("table_list_panel").style.width="2%";
            document.getElementById("selection_panel").style.width="58%";
            document.getElementById("close_tablelist_icon").style.display="none";
            document.getElementById("tbl_searchbox").style.display="none";
            document.getElementById("tbl_searchicon").style.display="none";
            document.getElementById("tbl_searchicon").style.display="none";
            document.getElementById("list_of_tables").style.display="none";
            document.getElementById("open_tablelist_icon").style.display="block";
          }
          else{
            document.getElementById("table_list_panel").style.width="20%";
            document.getElementById("selection_panel").style.width="40%";
            document.getElementById("close_tablelist_icon").style.display="";
            document.getElementById("tbl_searchbox").style.display="";
            document.getElementById("tbl_searchicon").style.display="";
            document.getElementById("list_of_tables").style.display="";
            document.getElementById("open_tablelist_icon").style.display="none";

          }
          // table_list_panel
        },
      }
    }
</script>
<style>
  .v-autocomplete.v-input{
    margin:0px;
  }
  .upperrow{
    display:inline-block;
    height:400px;
    overflow: auto;
    border:1px solid grey;
    }

  .lowerrow{
    display:block;
    height:200px;
    overflow: auto;
    border:1px solid grey;

    }

#mainflex{
    background-color:grey;
}

.list_items {
  height:30px;
  draggable:true;
}

.handle {
    cursor: move !important;
    cursor: -webkit-grabbing !important;
  }
table.v-table thead tr, table.v-table tbody tr{
    height: 38px;
  }
  .sticky {
  position: absolute;
}
 #filter_column_table .v-input__slot{
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
  margin-bottom: -10px;
  margin-top: -5px;
}
#select_column_table .v-select__slot{
  margin-bottom: -6px;
}
#filter_column_table .v-input__slot input, .v-select-list .v-list__tile__content{
  font-size: 15px;
}
<<<<<<< HEAD
#select_column_table td{
  font-size: 13px;
}
#select_column_table .v-input__slot{
  font-size: 14px;
  margin-bottom: -8px;
  margin-top: -5px;
}
#select_column_table .v-input__append-inner i{
  /*font-size: 15px;*/
=======
#select_column_table .v-input__slot{
  font-size: 13px;
  margin-bottom: -10px;
  margin-top: -5px;
}
#select_column_table .v-input__append-inner i{
  font-size: 15px;
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
}
#select_column_table .v-text-field__slot{
  width: 65px;
}
<<<<<<< HEAD
#select_column_table .v-text-field__slot{
  margin-top: -5px;
}
.handle {
  cursor: move !important;
  cursor: -webkit-grabbing !important;
}
.v-radio label{
  font-size: 15px;
}
.v-radio i{
  font-size: 20px;
}
.v-dialog__activator{
  margin-top: -10px;
}
.scrollit {
    overflow:scroll !important;
    height:100px;
}
/* .highlight_tbl{
  border:3px solid #FF0000 !important;
} */
</style>
// function drop_on_second(event) {
      //   event.preventDefault();
      //   var data = event.dataTransfer.getData("Text");
      //   _this.second_table_name = data
      //   _this.second_table_list = _this.get_columns(data)

      // }

      // function allowDrop_on_second(event) {
      //   event.preventDefault();
      // }

      // function first_table_mouse_over(){
      //   var list = _this.first_table_list
      //   _this.column_desc_table_list = JSON.parse(JSON.stringify(list)).slice(1)
      //   _this.column_desc_table_list
      //   _this.column_desc_of_table_name = _this.column_desc_of_table_name_initial_text + _this.first_table_name
      // }

      // function second_table_mouse_over(){
      //   var list = _this.second_table_list
      //   _this.column_desc_table_list = JSON.parse(JSON.stringify(list)).slice(1)
      //   _this.column_desc_table_list
      //   _this.column_desc_of_table_name = _this.column_desc_of_table_name_initial_text + _this.second_table_name
      // }
=======

</style>
// function drop_on_second(event) {
        //   event.preventDefault();
        //   var data = event.dataTransfer.getData("Text");
        //   _this.second_table_name = data
        //   _this.second_table_list = _this.get_columns(data)
          
        // }

        // function allowDrop_on_second(event) {
        //   event.preventDefault();
        // }

        // function first_table_mouse_over(){
        //   var list = _this.first_table_list
        //   _this.column_desc_table_list = JSON.parse(JSON.stringify(list)).slice(1)
        //   _this.column_desc_table_list
        //   _this.column_desc_of_table_name = _this.column_desc_of_table_name_initial_text + _this.first_table_name
        // }

        // function second_table_mouse_over(){
        //   var list = _this.second_table_list
        //   _this.column_desc_table_list = JSON.parse(JSON.stringify(list)).slice(1)
        //   _this.column_desc_table_list
        //   _this.column_desc_of_table_name = _this.column_desc_of_table_name_initial_text + _this.second_table_name
        // }
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
