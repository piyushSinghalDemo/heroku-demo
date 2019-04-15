<template lang="html">
<<<<<<< HEAD
  <!-- <v-flex xs12 style="padding:0px;"> -->
    <v-menu ref="menu2" :close-on-content-click="false" :disabled="disabled" v-model="menu2" :return-value.sync="date" :nudge-right="40"
      lazy transition="scale-transition" offset-y full-width min-width="290px">
      <v-text-field slot="activator" :disabled="disabled" v-model="calenderDate" label="Date" append-icon="event"></v-text-field>
      <v-date-picker v-model="date" :disabled="disabled" @input="emitChange" no-title></v-date-picker>
    </v-menu>
  <!-- </v-flex> -->
=======
      <v-flex xs12 style="padding:0px;">
             <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2"
                 :nudge-right="40" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px" >
      
          <v-text-field slot="activator" v-model="calenderDate" label="Date" append-icon="event"></v-text-field>
          <v-date-picker v-model="date" no-title @input="emitChange"></v-date-picker>
      </v-menu>
      </v-flex>
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
</template>

<script>
export default {
  name: 'Calender',
  data() {
    return {
        menu2: false,
        date: null,
        calenderDate:this.input,
        customFormat:null,
    }
  },
<<<<<<< HEAD
  props: ['input','format','disabled'],
=======
  props: ['input','format'],
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
  watch:{
    input(newValue) {  
            this.calenderDate = newValue;
    },
     date (val) {
        this.calenderDate = this.parseDate(this.date)
      },
      format(newValue) {  
            this.customFormat = newValue;
    },
  },
  methods: {
    emitChange: function () {
      this.calenderDate = this.parseDate(this.date);
      this.$refs.menu2.save(this.calenderDate);
      this.$emit('update', this.calenderDate)
    },
    parseDate (date) {
       if (!date) return null

       if(!this.customFormat || this.customFormat == 'yyyy-mm-dd') return date

        const [year, month, day] = date.split('-')
        return `${month}-${day}-${year}`
    }
  }
}
</script>