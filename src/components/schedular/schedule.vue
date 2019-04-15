<template>
<<<<<<< HEAD
    <div>
            <!-- <v-flex xs10 ml-1 mb-3>
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="/scheduledJobList">Process Definition</a></li>
                    <li>Schedule a Job</li>
                </ul>
            </v-flex> -->
            <v-layout row wrap pl-4 mb-3 class="breadcrumbBackground">
            <v-flex xs8 style="margin:auto">
                <v-layout row wrap>
                    <v-flex xs12 pl-3>
                        <ul class="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li><a href="/scheduledJobList">Process Definition</a></li>
                            <li>Schedule a Job</li>
                        </ul>
                    </v-flex>
                     <v-flex >
                        
                    </v-flex>
                </v-layout>
                
            </v-flex>
            <v-flex xs4 text-xs-right pr-4 pb-1 style="">
               
            </v-flex>
        </v-layout>
        <v-card class="elevation-7">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap ml-3>
                    <v-flex xs12 style="text-align:left">
                        <span style="font-size:30px">Schedule </span>
=======
    <v-container style="padding-top:10px;max-width:100%">
            <v-flex xs10 ml-3>
            <ul class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/scheduledJobList">Process Definition</a></li>
              <li>Schedule a Job</li>
            </ul>
            </v-flex>
        <v-card class="elevation-7">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap justify-start>
                    <v-flex xs10 offset-xs1>
                        <span style="float:left;font-size:30px">Schedule </span>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
<<<<<<< HEAD
                <v-container>
                <!-- <v-layout row wrap>
                    <v-flex xs12> -->
                        <v-layout row wrap>
                            <v-flex xs6>
                                <v-text-field v-model="jobObject.params.name" label="Schedule Name"  style="width:90%;" readonly></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <calender :input="jobObject.params.start_from" @update="setDate" style="width:90%;float:right"> </calender>
=======
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <v-text-field v-model="schedule_name" label="Schedule Name" style="width:90%;"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <calender :input="start_date" @update="setDate($event,index)" style="width:90%;float:right"> </calender>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs6>
<<<<<<< HEAD
                                <v-menu ref="menu" :close-on-content-click="false" v-model="menu2"
                                    :nudge-right="40" :return-value.sync="jobObject.params.start_time" lazy transition="scale-transition"  
                                    offset-y full-width max-width="290px" min-width="290px" style="width:90%">
                                        <v-text-field slot="activator" v-model="jobObject.params.start_time" label="Start Time"
                                        append-icon="access_time" readonly ></v-text-field>
                                    <v-time-picker v-if="menu2" v-model="jobObject.params.start_time" format="24hr" @change="$refs.menu.save(jobObject.params.start_time)" ></v-time-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex xs6>
                                <v-autocomplete clearable v-model="jobObject.params.timezone" label="Time Zone" 
                                :items="timeZoneItems" style="width:90%;float:right;"></v-autocomplete> 
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap v-if="type !== 'history'">
                            <v-flex xs6>
                                <v-layout style="width:90%;">
                                    <v-flex xs4 style="margin:auto">
                                        <label class="v-label" style="float: left;">Execution Type</label>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-radio-group v-model="jobObject.params.is_recurring" row>
                                            <v-radio class="radioClass" :color="colorCode" label="One Time" :value="false"></v-radio>
                                            <v-radio class="radioClass" :color="colorCode" label="Recurring" :value="true" v-if="!is_one_time_schedule"></v-radio>
=======
                                 <v-menu ref="menu" :close-on-content-click="false" v-model="menu2"
                                    :nudge-right="40" :return-value.sync="time" lazy transition="scale-transition"  offset-y full-width max-width="290px" 
                                    min-width="290px" style="width:90%">
                                        <v-text-field slot="activator" v-model="start_time" label="Start Time"
                                        append-icon="access_time" readonly ></v-text-field>
                                        <v-time-picker v-if="menu2" v-model="time" format="24hr" @change="$refs.menu.save(time)" ></v-time-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex xs6>
                                <v-select :items="timeZoneItems" v-model="timezone" label="Time Zone" style="width:90%;float:right"></v-select>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <!-- <v-flex xs6>
                            </v-flex> -->
                            <v-flex xs6>
                                <v-layout style="width:90%;">
                                    <v-flex xs4>
                                        <label class="v-label" style="margin-top: 20%;float: left;">Execution Type</label>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-radio-group v-model="row" row>
                                            <v-radio class="radioClass" color="red" label="One Time" value="One Time"></v-radio>
                                            <v-radio class="radioClass" color="red" label="Recurring" value="Recurring"></v-radio>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                                        </v-radio-group>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
<<<<<<< HEAD
                    <!-- </v-flex>
                </v-layout> -->
                </v-container>
            </v-card-text>
        </v-card>
        
        <v-card class="elevation-7" style="margin-top:30px;padding-top:0px;padding-bottom:0px" v-show="jobObject.params.is_recurring == true">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap justify-start ml-3>
                    <v-flex xs12 style="text-align:left">
                        <label style="font-size:30px">Recurrence Pattern</label>
=======
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
        
        <v-card class="elevation-7" style="margin-top:30px;padding-top:0px;padding-bottom:0px" v-show="row == 'Recurring'">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap justify-start>
                    <v-flex xs10 offset-xs1>
                        <label style="float:left;font-size:30px">Recurrence Pattern</label>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-layout row wrap>
                            <v-flex xs3>
                                    <!-- <v-radio class="radioClass" color="red" label="Daily" value="radio-1"></v-radio> -->
<<<<<<< HEAD
                                <v-radio-group v-model="jobObject.params.recurring.recurrence_pattern.recurrence_pattern_type" 
                                        column style="border-right: 02px dashed;margin-right: 20%;min-height: 200px;">
                                    <v-radio class="radioClass" :color="colorCode" label="Weekly" value="weekly"></v-radio>
                                    <v-radio class="radioClass" :color="colorCode" label="Monthly" value="monthly"></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs9>
                                      <!-- *****dayOfWeeks******************** Weekly **************************     -->
                            <v-layout row wrap v-show="jobObject.params.recurring.recurrence_pattern.recurrence_pattern_type == 'weekly'" mt-3>
                                <v-flex xs12>
                                    <v-checkbox label="Select All" v-model = "weeklySelectAll" @change="toggleSelect" 
                                        :color="colorCode" class="customCheckbox">
                                    </v-checkbox>
                                </v-flex>
                                <v-flex class="text-sm-left" v-for="(day, index) in dayOfWeeks" :key="index">
                                    <v-chip :color="colorCode" class="pointer custWidth" text-color="white" @click="day.value = !day.value"  v-if="day.value">{{day.text}}</v-chip>
                                    <v-chip class="pointer custWidth" @click="day.value = !day.value" outline v-if="!day.value">{{day.text}}</v-chip>
                                </v-flex>
                            </v-layout>
                                <!-- ***************************** Monthly ************************************ -->
                            <v-layout row wrap v-show="jobObject.params.recurring.recurrence_pattern.recurrence_pattern_type == 'monthly'">
                                <v-flex>
                                    <v-checkbox label="Select All" v-model="monthlySelectAll" @change="toggleMonthlySelect" :color="colorCode" class="customCheckbox">
                                     </v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-radio-group v-model="jobObject.params.recurring.recurrence_pattern.is_day_of_month" row>
                                        <v-radio class="radioClass" :color="colorCode" label="Date of Month" :value="false"></v-radio>
                                        <v-radio class="radioClass" :color="colorCode" label="Day of Month" :value="true"></v-radio>
                                    </v-radio-group>
                                </v-flex>
                            </v-layout>    
                            <v-layout class="text-sm-left" row v-show="jobObject.params.recurring.recurrence_pattern.recurrence_pattern_type == 'monthly'" >
                                <v-flex xs6 v-if="!jobObject.params.recurring.recurrence_pattern.is_day_of_month">
                                    <!-- jobObject.params.recurring.recurrence_pattern.day_of_month <label style="display: inline;float: left;margin-top:3%;font-weight: bold;font-size: 16px;">Date of month</label> -->
                                    <v-select :items="day_array" v-model="jobObject.params.recurring.recurrence_pattern.day_of_month" 
                                        label="Select Date" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                                <v-flex xs6 v-show="jobObject.params.recurring.recurrence_pattern.is_day_of_month">
                                    <!-- <label style="display: inline;float: left;margin-top:3%;font-weight: bold;font-size: 16px;">Day of Month</label> -->
                                    <v-select v-model="jobObject.params.recurring.recurrence_pattern.which_day_of_week" :items="day_of_week_array" label="Select Week" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                                <v-flex xs6 v-show="jobObject.params.recurring.recurrence_pattern.is_day_of_month">
                                    <v-select :items="week_array" v-model="jobObject.params.recurring.recurrence_pattern.selected_week_day" 
                                        label="Select Day" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap v-show="jobObject.params.recurring.recurrence_pattern.recurrence_pattern_type == 'monthly'" mt-1>
                                <v-flex class="text-sm-left" v-for="(month, index) in dayOfMonthArray" :key="index">
                                    <v-chip :color="colorCode" class="pointer custWidth" text-color="white" @click="month.value = !month.value"  v-if="month.value">{{month.text}}</v-chip>
                                    <v-chip class="pointer custWidth" @click="month.value = !month.value" outline v-if="!month.value">{{month.text}}</v-chip>
=======
                                <v-radio-group v-model="recurrence" column style="border-right: 02px dashed;margin-right: 20%;min-height: 200px;">
                                    <v-radio class="radioClass" color="red" label="Weekly" value="Weekly"></v-radio>
                                    <v-radio class="radioClass" color="red" label="Monthly" value="Monthly"></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs9>
                                      <!-- ************************* Weekly **************************     -->
                            <v-layout row wrap v-show="recurrence == 'Weekly'" mt-3>
                                <v-flex xs12>
                                     <v-checkbox label="Select All" color="red" class="customCheckbox">
                                     </v-checkbox>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="sun = false"  v-if="sun==true || sun=='true'">Sun</v-chip>
                                    <v-chip class="pointer custWidth" @click="sun = true" outline v-if="sun==false || sun=='false'">Sun</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Mon = false"  v-if="Mon==true || Mon=='true'">Mon</v-chip>
                                    <v-chip class="pointer custWidth" @click="Mon = true" outline v-if="Mon==false || Mon=='false'">Mon</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Tue = false"  v-if="Tue==true || Tue=='true'">Tue</v-chip>
                                    <v-chip color="primary" class="pointer custWidth" @click="Tue = true" outline v-if="Tue==false || Tue=='false'">Tue</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth"  text-color="white" @click="Wed = false"  v-if="Wed==true || Wed=='true'">Wed</v-chip>
                                    <v-chip color="primary" class="pointer custWidth" @click="Wed = true" outline v-if="Wed==false || Wed=='false'">Wed</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth"  text-color="white" @click="Thu = false"  v-if="Thu==true || Thu=='true'">Thu</v-chip>
                                    <v-chip color="primary" class="pointer custWidth" @click="Thu = true" outline v-if="Thu==false || Thu=='false'">Thu</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth text-sm-center"  text-color="white" @click="Fri = false"  v-if="Fri==true || Fri=='true'">Fri</v-chip>
                                    <v-chip color="primary" class="pointer custWidth" @click="Fri = true" outline v-if="Fri==false || Fri=='false'">Fri</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                     <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Sat = false"  v-if="Sat==true || Sat=='true'">Sat</v-chip>
                                    <v-chip color="primary" class="pointer custWidth" @click="Sat = true" outline v-if="Sat==false || Sat=='false'">Sat</v-chip>
                                </v-flex>
                            </v-layout>
                                <!-- ***************************** Monthly ************************************ -->
                            <v-layout row wrap v-show="recurrence == 'Monthly'">
                                <v-flex>
                                    <v-checkbox label="Select All" color="red" class="customCheckbox">
                                     </v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-radio-group v-model="dayOfMonth" row>
                                        <v-radio class="radioClass" color="red" label="Date of Month" value="Date of Month"></v-radio>
                                        <v-radio class="radioClass" color="red" label="Day of Month" value="Day of Month"></v-radio>
                                    </v-radio-group>
                                </v-flex>
                            </v-layout>    
                            <v-layout class="text-sm-left" row v-show="recurrence == 'Monthly'" >
                                <v-flex xs6 v-if="dayOfMonth == 'Date of Month'">
                                    <!-- <label style="display: inline;float: left;margin-top:3%;font-weight: bold;font-size: 16px;">Date of month</label> -->
                                    <v-select :items="day_array" label="Select Date" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                                <v-flex xs6 v-show="dayOfMonth == 'Day of Month'">
                                    <!-- <label style="display: inline;float: left;margin-top:3%;font-weight: bold;font-size: 16px;">Day of Month</label> -->
                                    <v-select :items="day_of_week_array" label="Select Week" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                                <v-flex xs6 v-show="dayOfMonth == 'Day of Month'">
                                    <v-select :items="week_array" label="Select Day" style="width:80%;display:inline-block;margin-top:0px"></v-select>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap v-show="recurrence == 'Monthly'" mt-1>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Jan = false"  v-if="Jan==true || Jan=='true'">Jan</v-chip>
                                    <v-chip class="pointer custWidth" @click="Jan = true" outline v-if="Jan==false || Jan=='false'">Jan</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Feb = false"  v-if="Feb==true || Feb=='true'">Feb</v-chip>
                                    <v-chip class="pointer custWidth" @click="Feb = true" outline v-if="Feb==false || Feb=='false'">Feb</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Mar = false"  v-if="Mar==true || Mar=='true'">Mar</v-chip>
                                    <v-chip class="pointer custWidth" @click="Mar = true" outline v-if="Mar==false || Mar=='false'">Mar</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Apr = false"  v-if="Apr==true || Apr=='true'">Apr</v-chip>
                                    <v-chip class="pointer custWidth" @click="Apr = true" outline v-if="Apr==false || Apr=='false'">Apr</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="May = false"  v-if="May==true || May=='true'">May</v-chip>
                                    <v-chip class="pointer custWidth" @click="May = true" outline v-if="May==false || May=='false'">May</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Jun = false"  v-if="Jun==true || Jun=='true'">Jun</v-chip>
                                    <v-chip class="pointer custWidth" @click="Jun = true" outline v-if="Jun==false || Jun=='false'">Jun</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Jul = false"  v-if="Jul==true || Jul=='true'">Jul</v-chip>
                                    <v-chip class="pointer custWidth" @click="Jul = true" outline v-if="Jul==false || Jul=='false'">Jul</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Aug = false"  v-if="Aug==true || Aug=='true'">Aug</v-chip>
                                    <v-chip class="pointer custWidth" @click="Aug = true" outline v-if="Aug==false || Aug=='false'">Aug</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Sep = false"  v-if="Sep==true || Sep=='true'">Sep</v-chip>
                                    <v-chip class="pointer custWidth" @click="Sep = true" outline v-if="Sep==false || Sep=='false'">Sep</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Oct = false"  v-if="Oct==true || Oct=='true'">Oct</v-chip>
                                    <v-chip class="pointer custWidth" @click="Oct = true" outline v-if="Oct==false || Oct=='false'">Oct</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Nov = false"  v-if="Nov==true || Nov=='true'">Nov</v-chip>
                                    <v-chip class="pointer custWidth" @click="Nov = true" outline v-if="Nov==false || Nov=='false'">Nov</v-chip>
                                </v-flex>
                                <v-flex class="text-sm-left">
                                    <v-chip color="primary" class="pointer custWidth" text-color="white" @click="Dec = false"  v-if="Dec==true || Dec=='true'">Dec</v-chip>
                                    <v-chip class="pointer custWidth" @click="Dec = true" outline v-if="Dec==false || Dec=='false'">Dec</v-chip>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                                </v-flex>
                            </v-layout>    

                            </v-flex> <!-- end of xs9 -->
                        </v-layout>

                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
<<<<<<< HEAD
        <v-card class="elevation-7" style="margin-top:30px" v-show="jobObject.params.is_recurring">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap justify-start ml-3>
                    <v-flex xs12 style="text-align:left">
                        <span style="font-size:30px">Range of Recurrence</span>
=======
        <v-card class="elevation-7" style="margin-top:30px" v-show="row == 'Recurring'">
            <v-card-title style="background:#494949;color:white;padding: 0px 7px;">
                <v-layout row wrap justify-start>
                    <v-flex xs10 offset-xs1>
                        <span style="float:left;font-size:30px">Range of Recurrence</span>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                      <v-layout row wrap>
<<<<<<< HEAD
                          <v-flex xs3>      
                              <v-checkbox label="No End Date" v-model="jobObject.params.recurring.range_of_recurrence.end_on" 
                                    :color="colorCode" class="customCheckbox" @change="toggleUntillDate"> </v-checkbox>
                          </v-flex>
                          <v-flex xs3 class="text-xs-right">
                                <v-text-field v-model="jobObject.params.recurring.range_of_recurrence.end_after_times" label="End after iterations" :rules="iterationRules" style="width:90%;float:right"> </v-text-field>
                            </v-flex>
                          <v-flex xs3 class="text-xs-right">
                               <label style="margin-top:7%;font-weight: bold;font-size: 16px;">Day of month</label>
                          </v-flex>
                          <v-flex xs3>
                               <calender :input="jobObject.params.recurring.range_of_recurrence.until_date" @update="setUntillDate" style="width:90%;float:right"> </calender>
=======
                          <v-flex xs4>
                              <label style="float:left;padding: 15px 5px 0px;font-weight: bold;font-size:24px">End On</label>
                          </v-flex>
                          <v-flex xs4>
                              <v-radio class="radioClass" color="red" label="No End Date" value="No End Date" style="margin-top: 7%;"></v-radio>
                          </v-flex>
                          <v-flex xs4>
                               <label style="display: inline;float: left;margin-top:7%;font-weight: bold;font-size: 16px;">Day of month</label>
                               <v-text-field label="YY/MM/DD" style="width:50%;display:inline-block;" append-icon="fa-calendar-alt"></v-text-field>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                          </v-flex>
                      </v-layout>  
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
        <v-layout row wrap mt-5>
            <v-flex xs12 class="text-xs-right" mr-2>
<<<<<<< HEAD
                <v-btn :color="outlineColor" outline @click="saveData" style="border-radius:10px">
                    Save
                </v-btn>                    
                <v-btn :color="outlineColor" outline style="border-radius:10px" @click="CancelSchedule">
=======
                <v-btn color="blue" style="color:white">
                    Save
                </v-btn>                    
                <v-btn color="blue"  style="color:white">
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
                    Cancel
                </v-btn>
            </v-flex>
        </v-layout>
<<<<<<< HEAD
        <v-snackbar v-model="snackbar" :right=true :top=true :timeout=snackbartimeout :color='colorValue'>
            {{ snackbartext }}
        </v-snackbar>
    </div>
=======
    </v-container>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</template>
<script>
import config from "../../config.json"
import Calender from '../../views/calender'
import Breadcrumb from "../Breadcrumbs.vue"
<<<<<<< HEAD
import cloneDeep from 'lodash/cloneDeep'
import {
    get as getToServer,
    post as postToServer
} from './../../methods/serverCall.js';
import {
    SERVER_ERROR
} from '../../data/client_message.js'
import {
    GET_SCHEDULE,
    SCHEDULE_JOB,
    UPDATE_JOB
} from '../../data/url_constants.js';
import {
    DAY_OF_WEEKS,
    DAY_OF_MONTH_ARRAY,
    WEEK_ARRAY,
    DAY_ARRAY,
    DAY_OF_WEEK_ARRAY,
    JOB_OBJECT
} from '../../data/metaData.js'
import filter from 'lodash/filter'
import {COLOR_CODE, BTN_COLOR} from '../../data/macros.js'
var moment = require("moment-timezone");
export default {
    name: 'Schedule',
    components: {
        'calender': Calender,
        Breadcrumb
    },
    data() {
        return {
            disabled: 0,
            snackbar:false,
            snackbartext:'',
            snackbartimeout:5000,
            colorValue:'error',
            loader: "loading",
            loading: false,
            outlineColor:BTN_COLOR,
            colorCode:COLOR_CODE,
            type:'new',
            weeklySelectAll: true,
            monthlySelectAll: true,
            dayOfWeeks: DAY_OF_WEEKS,
            dayOfMonthArray: DAY_OF_MONTH_ARRAY,
            schedule_name: "",
            start_date: "",
            start_time: "",
            timezone: "",
            dayOfMonth: "Date of Month",
            time: null,
            menu2: false,
            modal2: false,
            timeZoneItems: moment.tz.names(),
            WeeklyArray: [],
            monthArray: [],
            row: 'One Time',
            recurrence: 'Weekly',
            week_array: WEEK_ARRAY,
            day_array: DAY_ARRAY,
            day_of_week_array: DAY_OF_WEEK_ARRAY,
            jobObject: cloneDeep(JOB_OBJECT),
            is_one_time_schedule:false,
            iterationRules: [v => /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/.test(v) || 'End after iterations should be numeric'],
        }
    },
    watch: {
        'jobObject.params.recurring.range_of_recurrence.until_date'(newvalue, o) {
            if (newvalue)
                this.jobObject.params.recurring.range_of_recurrence.end_on = false;
        },
        dayOfMonthArray: {
            handler: function (val, o) {
                let selectedMonth = filter(val, 'value');
                this.monthlySelectAll = selectedMonth.length == val.length ? true : false;
            },
            deep: true
        },
        dayOfWeeks: {
            handler: function (val, oldVal) {
                let selectedWeek = filter(val, 'value');
                this.weeklySelectAll = selectedWeek.length == val.length ? true : false;
            },
            deep: true
        },
    },
    mounted() {
        let _this = this;
            // debugger;
        if (this.$route.params.service_id && this.$route.params.end_point) {
            _this.jobObject.params.service_id = this.$route.params.service_id;
            _this.jobObject.params.end_point = this.$route.params.end_point;
            _this.jobObject.params.name = this.$route.params.schedule_data.process_definition_name
            _this.jobObject.params = Object.assign(_this.jobObject.params, this.$route.params.schedule_data)
            console.log(_this.jobObject.params)
        }
        if (this.$route.params.schedule_id) {
            this.getSchedule()
        }
        else{
            this.jobObject.params.timezone = this.$session.get('time_zone_preference')
        }
        if(this.$route.params.type && this.$route.params.type == 'history' && this.$route.params.job){
        this.type = 'history';
        this.jobObject = this.$route.params.job;
        this.jobObject.params.start_time = this.jobObject.params.start_time.HH + ':' + this.jobObject.params.start_time.mm;
        this.jobObject.schedule_id = this.jobObject.id;
        this.jobObject.params.is_recurring = false;
      }
      this.is_one_time_schedule =  this.$route.params.schedule_data.is_one_time_schedule
    },
    props: {
        msg: String
    },
    methods: {
        toggleUntillDate(val) {
            if (val) this.jobObject.params.recurring.range_of_recurrence.until_date = null;
        },
        toggleMonthlySelect(val) {
            this.dayOfMonthArray.map(obj => {
                obj.value = val ? true : false;
            })
        },
        toggleSelect(val) {
            this.dayOfWeeks.map(obj => {
                obj.value = val ? true : false;
            });
        },
        saveData() {
            let _this = this;
            var clientId = this.$session.get('client_id')
            var user_id = this.$session.get('email')

            this.jobObject.params.client_id = clientId;
            this.jobObject.params.created_by = user_id;
            let inputParam = _this.getSaveObject(this.jobObject);
            let url = "";
            if (this.$route.params.schedule_id && this.$route.params.type && this.$route.params.type == 'edit') {
                inputParam.id = this.$route.params.schedule_id;
                url = config.SCHEDULER_URL + UPDATE_JOB;
            } else {
                url = config.SCHEDULER_URL + SCHEDULE_JOB;
            }
            postToServer(this, url, inputParam).then(
                    addResponse  => {
                        setTimeout(function () {
                            _this.$router.push('/scheduledJobList');
                        }, 2000);
                    }).catch(error_response => {
                if(error_response){
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

            // postToServer(this, url, inputParam).then(response => {
            //     debugger
            //     // this.$toasted.success(response.message);
            //     this.colorValue = 'success'
            //     this.snackbartext = response.message;
            //     this.snackbar = true
            //     setTimeout(function () {
            //         _this.$router.push('/scheduledJobList');
            //     }, 2000);
            // }, error => {
            //     if (error){
            //     this.colorValue = 'error'
            //     this.snackbartext = error;
            //     this.snackbar = true
            //     }
            //         // this.$toasted.error(error);
            // }).catch(error_response => {

            // })
        },
        getSaveObject(Object) {
            let tempObject = cloneDeep(Object);
            let _this = this;
            tempObject.params.is_recurring = tempObject.params.is_recurring + "";
            if (tempObject.params.is_recurring) {
                if (tempObject.params.recurring.recurrence_pattern.recurrence_pattern_type == 'weekly') {
                    // The `_.property` iteratee shorthand. tempObject.params.recurring.recurrence_pattern.month_array
                    let selectedWeek = filter(_this.dayOfWeeks, 'value');
                    tempObject.params.recurring.recurrence_pattern.week_array = [];
                    selectedWeek.map((obj, index) => {
                        tempObject.params.recurring.recurrence_pattern.week_array.push(obj.text);
                    });
                } else {
                    let selectedMonth = filter(_this.dayOfMonthArray, 'value');
                    tempObject.params.recurring.recurrence_pattern.month_array = [];
                    selectedMonth.map((obj, index) => {
                        tempObject.params.recurring.recurrence_pattern.month_array.push(obj.text);
                    });
                }
            }
            if (tempObject.params.start_time) {
                let time = tempObject.params.start_time.split(":");
                tempObject.params.start_time = {
                    'HH': time[0],
                    'mm': time[1]
                }
            }
            return tempObject;
        },
        setDate(dateParam) {
            let _this = this;
            _this.jobObject.params.start_from = dateParam;
        },
        setUntillDate(dateParam) {
            let _this = this;
            _this.jobObject.params.recurring.range_of_recurrence.until_date = dateParam;
            _this.jobObject.params.recurring.range_of_recurrence.end_on = false;
        },
        getSchedule() {
            getToServer(this, config.SCHEDULER_URL + GET_SCHEDULE + this.$route.params.schedule_id).then(response => {
                this.jobObject = response;
                this.jobObject.params.start_time = response.params.start_time.HH + ':' + response.params.start_time.mm;
                this.jobObject.params.is_recurring = JSON.parse(this.jobObject.params.is_recurring);
            }).catch(error_response => {

            })
        },
        CancelSchedule(){
            // this.$router.push('/process_def_list_for_execution')
            this.$router.go(-1);
        }
    },
=======
import { get as getToServer } from './../../methods/serverCall.js';
import {SERVER_ERROR} from '../../data/client_message.js'
import { GET_SCHEDULE } from '../../data/url_constants.js';
export default {
     name: 'Schedule',
     components: {
    'calender':Calender,
    Breadcrumb
  },
    data() {
      return {
        schedule_name: "",
        start_date: "",
        start_time: "",
        timezone: "",
        dayOfMonth:"Date of Month",
        sun:true,
        Mon:true,
        Tue:true,
        Wed:true,
        Thu:true,
        Fri:true,
        Sat:true,
        Jan:true,
        Feb:true,
        Mar:true,
        Apr:true,
        May:true,
        Jun:true,
        Jul:true,
        Aug:true,
        Sep:true,
        Oct:true,
        Nov:true,
        Dec:true,
        time: null,
        menu2: false,
        modal2: false,
         timeZoneItems: ['Armenia Time', 'Argentina Time', 'Arabia Standard Time', 'Atlantic Standard Time', 'Antarctica/Davis'],
         WeeklyArray: [],
         monthArray:[],
         row:'One Time',
         recurrence:'Weekly',
         week_array:['sun','mon','tue','wed','thu','fri','sat'],
         day_array:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17',
        '18','19','20','21','22','23','24','25','26','27','28','29','30','31','last'],
        day_of_week_array:['1st','2nd','3rd','4th','5th','last'],
      }
    },
    mounted () {
      if (this.$route.params.schedule_id) {
        this.getSchedule()
      }
    },
  props: {
    msg: String
  },
  methods: {
    setVisibility(){
        alert("Working");
    },
   setDate(dateParam, index){
       let _this = this;
       alert("Date "+dateParam);
       // _this.tableObj.criteriaArray[index].value = dateParam;
       // console.log("criteria Array "+JSON.stringify(_this.tableObj.criteriaArray));
     },
    getSchedule(){
        console.log(this.$route.params.schedule_id)
        getToServer(this, config.SCHEDULER_URL + GET_SCHEDULE +this.$route.params.schedule_id).then(response => {
                var data = response
                this.schedule_name = data.name
                this.timezone = data.params.timezone
                this.start_date = data.params.start_from
                this.start_time = data.params.start_time.HH+':'+data.params.start_time.mm
                this.execution_type = data.params.is_recurring
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
    }
},
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c

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

