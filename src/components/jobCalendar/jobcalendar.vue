<template>
  <div>
    <v-layout row wrap pl-4 class="breadcrumbBackground">
            <v-flex xs8 style="margin:auto">
                <v-layout row wrap>
                    <v-flex xs12 pl-3>
                     <ul class="breadcrumb">
                        <li>
                            <router-link to="/dashboard">Home</router-link>
                        </li>
                        <li>Job Calendar</li>
                        <li>
                          <select v-model="Environment" 
                          style="-webkit-appearance: menulist;" v-on:change="EnvChange" autofocus ref="envname">
                          <option :value="{}">Select Environment</option>
                          <option v-for="(env, index) in EnvironmentList" :value="env" :key="index">{{env.name}}</option>
                          </select> 
                      </li>
                        <!-- <li>
                            <select v-model="Environment" v-on:change="getProcessDefList" style="-webkit-appearance: menulist;" autofocus ref="envname">
                                <option :value="{}">Select Environment</option>
                                <option v-for="(env, index) in EnvironmentList" :value="env" :key="index">{{env.name}}</option>
                            </select> 
                        </li> -->
                    </ul>
                </v-flex>                     
            </v-layout>

        </v-flex>
        <v-flex xs4 text-xs-right pr-4 pb-1 style="">
                 <!-- <v-tooltip bottom>
                    <v-autocomplete style="padding:0px" slot="activator" single-line hide-details :items="EnvironmentList" 
                    item-text="name" label="Select Environment" v-model="Environment"
                        required :rules="EnvironmentListRules" v-on:change="getProcessDefList" return-object>
                    </v-autocomplete>
                    <span>Environment List</span>
                </v-tooltip> -->
            </v-flex>
        </v-layout>
  <v-layout wrap mr-2 ml-2 mt-4>
    <v-flex
    sm12
    lg3
    class="pa-3 mb-3 feature-pane"
    >
    <v-btn
    fab
    outline
    small
    absolute
    left
    color="primary"
    @click="my_method"
    >
    <v-icon dark>
      keyboard_arrow_left
    </v-icon>
  </v-btn>
  <v-btn
  fab
  outline
  small
  absolute
  right
  color="primary"
  @click="$refs.calendar.next()"
  >
  <v-icon
  dark
  >
  keyboard_arrow_right
</v-icon>
</v-btn>
<br><br><br>
<v-select
v-model="type"
:items="typeOptions"
label="Type"
></v-select>
<v-checkbox
v-model="dark"
label="Dark"
></v-checkbox>
<v-select
v-model="color"
:items="colorOptions"
label="Color"
></v-select>
<v-menu
ref="startMenu"
v-model="startMenu"
:close-on-content-click="false"
:nudge-right="40"
:return-value.sync="start"
transition="scale-transition"
min-width="290px"
lazy
offset-y
full-width
>
<template v-slot:activator="{ on }">
  <v-text-field
  v-model="start"
  label="Start Date"
  prepend-icon="event"
  readonly
  v-on="on"
  ></v-text-field>
</template>
<v-date-picker
v-model="start"
no-title
scrollable
>
<v-spacer></v-spacer>
<v-btn
flat
color="primary"
@click="startMenu = false"
>
Cancel
</v-btn>
<v-btn
flat
color="primary"
@click="$refs.startMenu.save(start)"
>
OK
</v-btn>
</v-date-picker>
</v-menu>
<v-menu
v-if="hasEnd"
ref="endMenu"
v-model="endMenu"
:close-on-content-click="false"
:nudge-right="40"
:return-value.sync="end"
transition="scale-transition"
min-width="290px"
lazy
offset-y
full-width
>
<template v-slot:activator="{ on }">
  <v-text-field
  v-model="end"
  label="End Date"
  prepend-icon="event"
  readonly
  v-on="on"
  ></v-text-field>
</template>
<v-date-picker
v-model="end"
no-title
scrollable
>
<v-spacer></v-spacer>
<v-btn
flat
color="primary"
@click="endMenu = false"
>
Cancel
</v-btn>
<v-btn
flat
color="primary"
@click="$refs.endMenu.save(end)"
>
OK
</v-btn>
</v-date-picker>
</v-menu>
<v-menu
ref="nowMenu"
v-model="nowMenu"
:close-on-content-click="false"
:nudge-right="40"
:return-value.sync="now"
transition="scale-transition"
min-width="290px"
lazy
offset-y
full-width
>
<template v-slot:activator="{ on }">
  <v-text-field
  v-model="now"
  label="Today"
  prepend-icon="event"
  readonly
  v-on="on"
  ></v-text-field>
</template>
<v-date-picker
v-model="now"
no-title
scrollable
>
<v-spacer></v-spacer>
<v-btn
flat
color="primary"
@click="nowMenu = false"
>
Cancel
</v-btn>
<v-btn
flat
color="primary"
@click="$refs.nowMenu.save(now)"
>
OK
</v-btn>
</v-date-picker>
</v-menu>
<v-select
v-model="weekdays"
:items="weekdaysOptions"
label="Weekdays"
></v-select>
<v-select
v-if="hasIntervals"
v-model="intervals"
:items="intervalsOptions"
label="Intervals"
></v-select>
<v-select
v-if="hasIntervals"
v-model="styleInterval"
:items="styleIntervalOptions"
label="Styling"
></v-select>
</v-flex>
<v-flex
sm12
lg9
class="pl-3"
>
<v-sheet height="500">
  <v-calendar ref="calendar" v-model="start" :type="type" :start="start" :end="end" :min-weeks="minWeeks" :max-days="maxDays" :now="now" :dark="dark" :weekdays="weekdays" :first-interval="intervals.first"
  :interval-minutes="intervals.minutes" :interval-count="intervals.count" :interval-height="intervals.height" :interval-style="intervalStyle" :show-interval-label="showIntervalLabel"
  :color="color">
 <!--  <template v-slot:day="day">
    <div
    v-if="day.day % 3 === 0"
    class="day"
    >
    day slot {{ day.date }}
  </div>
</template>
<template v-slot:header="day">
  <div
  v-if="day.weekday % 2"
  class="day-header"
  >
  day-header slot {{ day.date }}
</div>
</template>
<template v-slot:day-body="day">
  <div
  v-if="day.weekday % 3 === 2"
  class="day-body"
  >
  day-body slot {{ day.date }}
</div>
</template> -->
</v-calendar>
</v-sheet>
</v-flex>
</v-layout>
</div>
</template>
<script>
import {getEnvironmentList} from '../../methods/EnvironmentList.js'
import {getTodaysWithFormat} from '../../methods/dateutils.js'
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6]

  const intervalsDefault = {
    first: 0,
    minutes: 60,
    count: 24,
    height: 40
  }

  const stylings = {
    default (interval) {
      return undefined
    },
    workday (interval) {
      const inactive = interval.weekday === 0 ||
        interval.weekday === 6 ||
        interval.hour < 9 ||
        interval.hour >= 17
      const startOfHour = interval.minute === 0
      const dark = this.dark
      const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

      return {
        backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
        borderTop: startOfHour ? undefined : '1px dashed ' + mid
      }
    },
    past (interval) {
      return {
        backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined
      }
    }
  }

export default {
  name: 'DemoCalendar',
  data: function () {
    return {
      EnvironmentList:[],
      Environment:{},
      dark: false,
      startMenu: false,
      start: getTodaysWithFormat(),
      endMenu: false,
      end: '2019-03-31',
      nowMenu: false,
      minWeeks: 1,
      now: '2019-03-01',
      type: 'month',
      typeOptions: [
      { text: 'Day', value: 'day' },
      { text: '4 Day', value: '4day' },
      { text: 'Week', value: 'week' },
      { text: 'Month', value: 'month' },
      ],
      weekdays: weekdaysDefault,
      weekdaysOptions: [
      { text: 'Sunday - Saturday', value: weekdaysDefault },
      { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] }
      ],
      intervals: intervalsDefault,
      intervalsOptions: [
      { text: 'Default', value: intervalsDefault },
      { text: 'Workday', value: { first: 16, minutes: 30, count: 20, height: 40 } }
      ],
      maxDays: 7,
      maxDaysOptions: [
      { text: '7 days', value: 7 },
      { text: '5 days', value: 5 },
      { text: '4 days', value: 4 },
      { text: '3 days', value: 3 }
      ],
      styleInterval: 'default',
      styleIntervalOptions: [
      { text: 'Default', value: 'default' },
      { text: 'Workday', value: 'workday' },
      { text: 'Past', value: 'past' }
      ],
      color: 'primary',
      colorOptions: [
      { text: 'Primary', value: 'primary' },
      { text: 'Secondary', value: 'secondary' },
      { text: 'Accent', value: 'accent' },
      { text: 'Red', value: 'red' },
      { text: 'Pink', value: 'pink' },
      { text: 'Purple', value: 'purple' },
      { text: 'Deep Purple', value: 'deep-purple' },
      { text: 'Indigo', value: 'indigo' },
      { text: 'Blue', value: 'blue' },
      { text: 'Light Blue', value: 'light-blue' },
      { text: 'Cyan', value: 'cyan' },
      { text: 'Teal', value: 'teal' },
      { text: 'Green', value: 'green' },
      { text: 'Light Green', value: 'light-green' },
      { text: 'Lime', value: 'lime' },
      { text: 'Yellow', value: 'yellow' },
      { text: 'Amber', value: 'amber' },
      { text: 'Orange', value: 'orange' },
      { text: 'Deep Orange', value: 'deep-orange' },
      { text: 'Brown', value: 'brown' },
      { text: 'Blue Gray', value: 'blue-gray' },
      { text: 'Gray', value: 'gray' },
      { text: 'Black', value: 'black' }
      ]
    }
  },
  mounted() {
    var env_value = this.$session.get('selected_env')
   if( env_value && env_value.id != '0' && env_value.id !='all_env')
      {
        this.Environment = this.$session.get('selected_env')
      }
     getEnvironmentList(this);
      this.focus_env()
  },
  computed: {
    intervalStyle () {
      return stylings[ this.styleInterval ].bind(this)
    },
    hasIntervals () {
      return this.type in {
        'week': 1, 'day': 1, '4day': 1, 'custom-daily': 1
      }
    },
    hasEnd () {
      return this.type in {
        'custom-weekly': 1, 'custom-daily': 1
      }
    }
  },
  methods: {
    focus_env(){
        if(this.$refs.envname.$el)
          this.$refs.envname.$el.focus()
        else this.$refs.envname.focus()
      },

    showIntervalLabel (interval) {
      return interval.minute === 0
    },
    my_method(){
      var test = getTodaysWithFormat()
      console.log(test)
      this.$refs.calendar.prev()
    },
    EnvChange(){
      this.$session.set('selected_env', this.Environment)
    }
  }
}
</script>
<style scoped>

.feature-pane {
  position: relative;
  padding-top: 30px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.day-header {
  margin: 0px 2px 2px 2px;
  padding: 2px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.day-body {
  position: absolute;
  top: 400px;
  height: 36px;
  margin: 2px;
  padding: 2px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  left: 0;
  right: 0;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.day {
  position: relative;
  height: 24px;
  margin: 0px;
  padding: 0px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  left: 0;
  right: 0;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>