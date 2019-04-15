<template>
<<<<<<< HEAD
  <div>
    <v-layout row wrap class="topLine">
      <v-flex xs12 mr-4 pl-4>
        <span style="float:left;font-size:18px">Essentio Data Cloud</span>
        <v-menu offset-y style="float:right">
            <div slot="activator">
              <span>{{this.user_name +' '+ currenttime + ' ' +this.time_zone | initCap}}
                <i class="fas fa-angle-down"></i>
              </span>
            </div>
            <v-list style="cursor:pointer">
              <v-list-tile>
                <v-list-tile-title @click="routeUrl('/userprofile')">Edit Profile</v-list-tile-title>
              </v-list-tile>
               <v-list-tile>
                <v-list-tile-title @click="routeUrl('/changepassword')">Change Password</v-list-tile-title>
              </v-list-tile>
               <v-list-tile>
                <v-list-tile-title @click="logout()">Sign out</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu offset-y style="float:right;margin-right:3%">
            <div slot="activator">
              <span><i class="fas fa-cog" style="font-size: 16px;"></i></span>
            </div>
            <v-list style="cursor:pointer" v-if="have_account_right">
              <v-list-tile>
                <v-list-tile-title @click="routeUrl('/clientsettings')" >Client Settings</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-list style="cursor:pointer" v-if="have_account_right">
              <v-list-tile>
                <v-list-tile-title @click="routeUrl('/ldapsetting')" >LDAP Settings</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-list style="cursor:pointer" v-if="have_account_right">
              <v-list-tile>
                <v-list-tile-title @click="routeUrl('/smtpsetting')" >SMTP Settings</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

            <v-menu offset-y style="float:right;margin-right:10px">
            <div slot="activator">
              <span><i class="far fa-bell" style="font-size: 16px;"></i></span>
            </div>
            
          </v-menu>
      </v-flex>
    </v-layout>

  <v-layout v-if="!hideHeader" id="topNavigation" class="main-header" row wrap style="margin:0px;padding:0px">
    <v-flex xs2 pl-4 style="height:100%;margin:0px;padding:0px">
      <img class="cust-logo" src="../assets/images/logo.png" style="float:left;margin-top:4%"/>
    </v-flex>
    <v-flex xs9 style="height:100%;margin:0px;padding:0px">
      <v-layout align-center fill-height row wrap>
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'Run'}">
           <v-menu offset-y class="menuCss" style="margin-left:20%;padding-top:11px;" >
            <div slot="activator" class="" @click="isSelected='Run'">
              
                <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'Run',focus:isSelected == 'Run'}">fas fa-play-circle</v-icon>
              <span :class="{'lightgray':isSelected !== 'Run'}" style="margin:0 auto">Run</span>
            </div>
            <v-list style="cursor:pointer" v-show="showRunMenu">
              <v-list-tile v-for="(tile, index) in topNavigation.run" :key="index" v-if="tile.role">
                <v-list-tile-title  @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'Approve'}">
            <v-menu offset-y class="menuCss" style="margin-left:0%;padding-top:11px">
            <div slot="activator" class="" @click="isSelected='Approve'">
               <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'Approve',focus:isSelected == 'Approve'}">fas fa-check-circle</v-icon>
              <span :class="{'lightgray':isSelected !== 'Approve'}" style="margin:0 auto">Approve</span>
            </div>
            <v-list style="cursor:pointer">
              <v-list-tile v-for="(tile, index) in topNavigation.approve" :key="index" v-if="tile.role">
                <v-list-tile-title @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'dataManagement'}" >
          <v-menu offset-y class="menuCss" style="margin-left:2%;padding-top:11px">
            <div slot="activator" class="" @click="isSelected='dataManagement'">
               
               <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'dataManagement',focus:isSelected == 'dataManagement'}">fas fa-database</v-icon>
              <span :class="{'lightgray':isSelected !== 'dataManagement'}" style="margin:0 auto">Data Management</span>
            </div>
            <v-list style="cursor:pointer" v-show="showDataManagementMenu">
              <v-list-tile v-for="(tile, index) in topNavigation.dataManagement" :key="index" v-if="tile.role">
                <v-list-tile-title @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'Archive'}">
          <v-menu offset-y class="menuCss" style="margin-left:5%;padding-top:11px">
            <div slot="activator" class="" @click="isSelected='Archive'">
             
              <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'Archive',focus:isSelected == 'Archive'}">fas fa-drafting-compass</v-icon>
              <span :class="{'lightgray':isSelected !== 'Archive'}" style="margin:0 auto">Develop</span>
            </div>
            <v-list style="cursor:pointer" v-show="showDevlop">
              <v-list-tile v-for="(tile, index) in topNavigation.archive" :key="index" v-if="tile.role">
                <v-list-tile-title @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'Configure'}">
          <v-menu offset-y class="menuCss" style="margin-left:0%;padding-top:11px">
            <div slot="activator"  @click="isSelected='Configure'">
               <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'Configure',focus:isSelected == 'Configure'}">tune</v-icon>
              <span :class="{'lightgray':isSelected !== 'Configure'}" style="margin:0 auto">Configure</span>
            </div>
            <v-list style="cursor:pointer" v-show="showConfigure">
              <v-list-tile v-for="(tile, index) in topNavigation.configure" :key="index" v-if="tile.role">
                <v-list-tile-title @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
              <v-menu offset-x class="menuCss" open-on-hover style="width:100%" v-show="showRuleMenu">
                <v-list-tile slot="activator">
                  <v-list-tile-title>Rules</v-list-tile-title>
                  <v-list-tile-action class="justify-end">
                    <v-icon>play_arrow</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list style="cursor:pointer">
                  <v-list-tile v-for="(tile, index2) in topNavigation.rule" :key="index2" v-if="tile.role">
                    <v-list-tile-title @click="routeUrl(tile.url);">{{tile.name}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              
            </v-list>
          </v-menu>
        </v-flex>
        
        <v-flex xs2 style="height:100%;margin:0px;padding:0px" :class="{'activeLink':isSelected == 'Admin'}">
            <v-menu offset-y class="menuCss" style="padding-top:11px;">
            <div slot="activator" class="" @click="isSelected='Admin'" >
 
               <v-icon style="display:block;margin:auto;" :class="{normal:isSelected !== 'Admin',focus:isSelected == 'Admin'}">fas fa-user-cog</v-icon>
              <span :class="{'lightgray':isSelected !== 'Admin'}" style="margin:0 auto">Admin</span>
            </div>
            <v-list style="cursor:pointer" v-show="showAdmin">
              <v-list-tile v-for="(tile, index) in topNavigation.admin" :key="index" v-if="tile.role">
                <v-list-tile-title @click="routeUrl(tile.url)">{{tile.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
      
    </v-flex>
  </v-layout>        
  
  </div>
</template>
<script>
  var moment = require("moment-timezone")
  import {
    post as postToServer
  } from './../methods/serverCall.js';
  import config from '../config.json'
  import {
    SERVER_ERROR
  } from '../data/client_message.js'
  import {
    LOGOUT
  } from '../data/url_constants.js'
  import {
    DATASOURCE_SERVICE_ID,PUBLISH_SERVICE_ID,ENVIRONMENT_SERVICE_ID,REPOSITORY_SERVICE_ID,USER_PROVISIONING_SERVICE_ID,POLICY_SERVICE,SCHEDULER_SERVICE,ACCOUNT_MANAGEMENT_SERVICE,SECURITY_SERVICE,JOB_MANAGEMENT_SERVICE
  } from "../data/macros.js"
  export default {
    name: "customHeader",
    data() {
      return {
        userRole:this.$session.get('user_role_mapping'),
        have_account_right:this.getUserMenu(ACCOUNT_MANAGEMENT_SERVICE),
        configureMenu:false,
        isSelected:'Admin',
        topNavigation: {
          'run':[
          
            {
              'name': "Job List",
              'url': '/process_def_list_for_execution',
               role:this.getUserMenu(PUBLISH_SERVICE_ID)
            },{
              'name': "Today's Jobs",
              'url': '/currentjoblist',
              role:this.getUserMenu(JOB_MANAGEMENT_SERVICE)
            },{
              'name': "Jobs History",
              'url': '/jobhistorylist',
              role:this.getUserMenu(JOB_MANAGEMENT_SERVICE)
            },
            {
              'name': 'Scheduled Jobs',
              'url': '/scheduledJobList',
              role:this.getUserMenu(SCHEDULER_SERVICE)
            }
          ],
          'approve':[
            {
              name: 'My Approvals',
              url: '/managetaskforapprovallist',
              role:this.getUserMenu('default')
            },
            {
              name: 'My Requests',
              url: '/manageapprovalrequestlist',
              role:this.getUserMenu('default')
            },
            {
              name: 'Approval History',
              url: '/approvalhistorylist',
              role:this.getUserMenu('default')
            },
          ],
          'archive': [
            {
              'name': "Object Management",
              'url': '/processDefinitionList',
              role:this.getUserMenu(PUBLISH_SERVICE_ID)||this.getUserMenu(REPOSITORY_SERVICE_ID)
            },
            {
              'name': 'Workflow',
              'url': '/workflowrouteList',
              role:this.getUserMenu(REPOSITORY_SERVICE_ID)
            },
            {
              'name': "Publish History",
              'url': '/publish_history',
              role:this.getUserMenu(PUBLISH_SERVICE_ID)
            }
          ],
          'dataManagement':[
            {
              'name': 'Manage Archive',
              'url': '/archives',
              role:this.getUserMenu(JOB_MANAGEMENT_SERVICE)
            },
            {
              'name':'Business Object Activity',
              'url': '/allactivity',
              role:this.getUserMenu(JOB_MANAGEMENT_SERVICE)
            }
          ],
          'configure': [
            {
              name: 'Datasources',
              url: '/datasourcelist',
              role:this.getUserMenu(DATASOURCE_SERVICE_ID)  //this.userRole.is_superadmin || getUserMenu('datasource')
            },{
              'name': 'Policies',
              'url': '/policyList',
              role:this.getUserMenu(POLICY_SERVICE)
            },
            {
              'name': 'Environments',
              'url': '/Environmentlist',
              role:this.getUserMenu(ENVIRONMENT_SERVICE_ID)
            },{
              'name': 'Business Object Policy',
              'url': '/bopolicymapping',
              role:this.getUserMenu(POLICY_SERVICE)
            }
          ],
          'configure2':[
            {
              'name': 'Business Object Policy',
              'url': '/bopolicymapping',
              role:this.getUserMenu(POLICY_SERVICE)
            }
          ],
          'rule':[
            {
              name: 'Job Execution',
              url: '/jobrulelist',
              role:this.getUserMenu(JOB_MANAGEMENT_SERVICE)
            },
            {
              'name': 'Policy Change',
              'url': '/policyrulelist',
              role:this.getUserMenu(POLICY_SERVICE)
            },
            {
              name: 'Object Publishing',
              url: '/publishrulelist',
              role:this.getUserMenu(PUBLISH_SERVICE_ID)
            },
          ],
          'admin': [{
              name: "Users",
              url: "/userlist",
              role:this.getUserMenu(USER_PROVISIONING_SERVICE_ID)
            },
            {
              name: 'User Roles',
              url: '/manageuserrole',
              role:this.getUserMenu(SECURITY_SERVICE)
            },            
            {
              name: 'Role Setup',
              url: '/rolelist',
              role:this.getUserMenu(SECURITY_SERVICE)
            },
            {
              name: 'Package Builder',
              url: '/package_builder',
              role:this.getUserMenu('joblist')
            },
            {
              name: 'Import Package',
              url: '/import_package',
              role:this.getUserMenu('joblist')
            }
          ]
        },
        currenttime: '',
        interval: '',
        sinout_endpoint: '',
        user_name: this.$session.get('user_name'),
        time_zone:'',
        showRunMenu:this.getUserMenu(REPOSITORY_SERVICE_ID) || this.getUserMenu(JOB_MANAGEMENT_SERVICE) ||this.getUserMenu(SCHEDULER_SERVICE)|| this.getUserMenu(PUBLISH_SERVICE_ID),
        showDataManagementMenu:this.getUserMenu(JOB_MANAGEMENT_SERVICE),
        showDevlop: this.getUserMenu(REPOSITORY_SERVICE_ID) || this.getUserMenu(PUBLISH_SERVICE_ID),
        showConfigure: this.getUserMenu(DATASOURCE_SERVICE_ID) || this.getUserMenu(POLICY_SERVICE) ||this.getUserMenu(ENVIRONMENT_SERVICE_ID) ||  this.getUserMenu(JOB_MANAGEMENT_SERVICE) || this.getUserMenu(PUBLISH_SERVICE_ID),
        showRuleMenu:this.getUserMenu(POLICY_SERVICE) ||  this.getUserMenu(JOB_MANAGEMENT_SERVICE) || this.getUserMenu(PUBLISH_SERVICE_ID),
        showAdmin:this.getUserMenu(USER_PROVISIONING_SERVICE_ID) || this.getUserMenu(SECURITY_SERVICE)

      }
    },
    computed:{
      hideHeader() {
        return this.$route.path === '/businessobjectdesigner' || this.$route.path === '/Flowchart'
      }

      
    },
    filters: {
      initCap: function (value) {
        if (!value) return ''
        let arr = value.split(' ');
        arr.map((string, index) => {
          string = string.toString()
          arr[index] = string.charAt(0).toUpperCase() + string.slice(1)
        })
        return arr.join(' ');
      }
    },
    beforeCreate(){
      this.userRole = this.$session.get('user_role_mapping');

    },
    mounted() {
      this.interval = setInterval(this.gettime, 1000);

    },
    methods: {
      getUserMenu(serviceName){
        if(this.userRole.is_superadmin)
          return true          
        if(this.userRole[serviceName])
            return true;
        if (serviceName === 'default')
          return true
        return false;    
      },
      routeUrl(path) {
        this.$router.push(path);
      },
      gettime() {
        this.currenttime = moment().tz(this.$session.get('time_zone_preference')).format('HH:mm:ss')
        this.time_zone = moment().tz(this.$session.get('time_zone_preference')).format('z')
      },
      logout() {
        var logout_endpoint = config.AUTHENTICATION_URL + LOGOUT
        var input_token = {
          'access_token': this.$session.get('access_token')
        }
        postToServer(this, logout_endpoint, input_token).then(logout_response => {
=======
    <b-navbar toggleable="md" class="main-header ht-70" style="padding:0px;">
      <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->
      <b-navbar-brand href="#" class="mr-2">
        <!-- style="margin:15px;" -->
          <img class="cust-logo" src="../assets/images/logo.png" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="nav-items mr-2">
          <b-nav-item class="pl-10" @click="scheduler">
            <div class="pd-5 mr-l-50">
              <img src="../assets/images/run.png" />
              <span>Run</span> 
            </div>
          </b-nav-item>
          <b-nav-item class="">
            <div class="pd-5 mr-l-50">
              <img src="../assets/images/approve.png" />
              <span>Approve</span> 
            </div>
          </b-nav-item>
          <b-nav-item class="">
            <div class="pd-5 mr-l-50">
              <img src="../assets/images/archives.png"/>
              <span>Archive</span> 
            </div>
          </b-nav-item>
          <b-nav-item class="">
            <!-- <div class="pd-5 mr-l-50" @click="flowchart">
              <img src="../assets/images/configure.png"/>
              <span>Configure</span> 
            </div> -->

          <v-menu offset-y>
            <div slot="activator" class="pd-5 mr-l-50">
              <img src="../assets/images/configure.png"/>
                <span>Configure</span> 
            </div>
            <v-list style="cursor:pointer">
              <v-list-tile>
                <v-list-tile-title>Policies</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title @click="workflow">Workflow</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title @click="flowchart">Designer</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title @click='environmentlist'>Environments</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>Email</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu> 
          </b-nav-item>
          <b-nav-item class="">
            <!-- <div class="pd-5 mr-l-50" @click='environmentlist'>
              <img src="../assets/images/admin.png"/>
              <span>Admin</span> 
            </div> -->
            <v-menu offset-y>
            <div slot="activator" class="pd-5 mr-l-50">
              <img src="../assets/images/admin.png"/>
              <span>Admin</span> 
            </div>
            <v-list style="cursor:pointer">
                  <v-list-tile>
                    <v-list-tile-title>Users</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title @click="datasourceList">Data Sources</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>LDAP</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>Security Roles</v-list-tile-title>
                  </v-list-tile>
            </v-list>
          </v-menu>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item class="customNav" style="padding:0px;">
            <div style="width: 50px;border-left: 1px solid white;border-right: 1px solid white;line-height: 70px;">
              <i class="far fa-bell" style="font-size: 28px;"></i>
            </div>
            </b-nav-item>
             <b-nav-item class="customNav" style="padding:0px;">
            <v-menu offset-y>
            <div slot="activator" style="width: 50px;border-right: 1px solid white;line-height: 70px;">
              <i class="fas fa-cog" style="font-size: 28px;"></i>
            </div>
          <!-- <div class="pd-5 mr-l-50">
            <img src="../assets/images/approve.png" />
            <span>Approve</span>
          </div> -->
          <v-list style="cursor:pointer">
            <v-list-tile>
              <v-list-tile-title @click="clientsettings">Client Settings</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>

            </b-nav-item>
          
          <b-nav-item-dropdown right style="padding-top: 6%;margin-left:10px;">
            <template slot="button-content">
              <em style="display:block;">{{currenttime}} (MDT)</em>
              <em>Hi {{this.user_name}}, </em>
            </template>
            <b-dropdown-item href="#">Edit Profile</b-dropdown-item>
            <b-dropdown-item href="/changepassword">Change Password</b-dropdown-item>
            <b-dropdown-item @click="logout()">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
</template>
<script>
  var moment = require("moment-timezone")
  import { post as postToServer } from './../methods/serverCall.js';
  import config from '../config.json'
  import {SERVER_ERROR} from '../data/client_message.js'
  import {LOGOUT} from '../data/url_constants.js'
  export default {
  name: "customHeader",
  data() {
    return {
      currenttime:'',
      interval:'',
      sinout_endpoint:'',
      user_name: this.$session.get('user_name'),
    }
  },
  mounted(){
    this.interval = setInterval(this.gettime, 1000)
  },
  methods: {
    clientsettings(){
      this.$router.push('/clientsettings');
    },
    workflow(){
      this.$router.push('/workflowtemplateList');
    },
    scheduler(){
      this.$router.push('/Schedule');
    },
    flowchart(){
       this.$router.push('/Flowchart');
    },
    environmentlist(){
       this.$router.push('/Environmentlist');
    },
    datasourceList(){
      this.$router.push('/datasourcelist');
    },
    gettime(){
      this.currenttime = moment().tz('America/Denver').format('HH:mm:ss')
    },    
    logout(){
      var logout_endpoint = config.AUTHENTICATION_URL + LOGOUT
      var input_token = {
          'access_token': this.$session.get('access_token')
        }
      postToServer(this, logout_endpoint, input_token).then(logout_response => {
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
          if (this.$cookies.isKey('Timeout')) {
            this.$cookies.remove('Timeout')
          }
          this.$session.destroy()
          window.location.href = "/login"
<<<<<<< HEAD
        }).catch(error_response => {
          if (this.$cookies.isKey('Timeout')) {
            this.$cookies.remove('Timeout')
          }
          this.$session.destroy()
        });
      }
    }
  }
</script>

<style>
.normal{
  color:rgb(188, 194, 199) !important;
}
.focus{
  color:white !important;
}
.width-60{
  width:60%
}
.menuCss{
  height:100%;
  padding-top: 7px;
  width:129px;
}
  .topLine{
     background-color: black;
     color: white;
     line-height: 32px;
     position: fixed;
     top: 0px;
     width: 100%;
     margin: 0px !important;
     z-index: 20;
  }
  .main-header {
    background-color: RGB(51,51,51);
    width: 100%;
    z-index: 20;
    padding: 0px;
    margin: 0px;
    position: fixed;
    top: 32px;width: 100%;height: 66px;
  }

  .cust-logo {
    width: 90%;
    height: 80%;
  }

  .lightgray {
    color: lightgray ;
  }

  #topNavigation span:hover {
    color: #9fc5e8 !important;
  }
  .v-list__tile:hover{
    background: rgb(51,51,51);
    color: white;
  }
  .activeLink {
    color: white !important;
    font-weight: bold;
    background: RGB(39,39,39);
  }
  
  .ht-70 {
    height: 70px;
  }

</style>
=======
          }
        ).catch(error_response => {
          if (this.$cookies.isKey('Timeout')) {
            this.$cookies.remove('Timeout')
          }
        this.$session.destroy()
      });
    }   
  }
}
</script>

<style>
.main-header {
  background-color: #262525;
  /* position: fixed; */
  width: 100%;
  height: 60px;
}
.cust-logo{
    width: 150px;
    height: 50px;
}

.nav-link{
  color: #cbbde2 !important;
  margin-right: 40px;
}
.nav-link:hover{
  color: white !important;
}
.rd-br{
  border-top: 6px solid red;
}
.ht-70{
  height: 70px;
}
.mr-3{
  margin-left: 10%
}
.mr-2{
  margin-left: 2%
}
.mr-l-50{
  margin-left: 50%
}
.pd-5{
  padding: 5px 0px;
}
.pl-10{
  padding-left: 10%;
}
.br-bottom{
  border-bottom: 02px solid white;
}
.customNav .nav-link{
  margin-right: 0px;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
