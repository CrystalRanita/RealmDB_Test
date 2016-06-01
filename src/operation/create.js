 'use strict';

var common = require('./common');

module.exports = {
  _MockupBmpList: function(num, schema) {
    schema.write(()=>{
        let i=0;
        schema.deleteAll();
        console.log("Total DB number for Step: " + num);
        console.log("Clean DB done!");
        for (; i < num; i++) {
          let ID = i.toString();
          let randomDate = (common._randomDate()).toString();
          let bpm_value = parseInt(Math.floor((Math.random() * 71) + 90)); //return Math.floor(Math.random()*(max-min+1)+min); data between 90~160
          let steps_value = parseInt(Math.floor((Math.random() * 10000) + 1)); //1~10000,
          console.log("ID: " + ID);
          console.log("Random Date: " + randomDate);
          console.log("Bpm Value: " + bpm_value);
          console.log("Steps Value: " + steps_value);
          console.log("---------------------------");
          schema.create('Step', {username: ID, date: randomDate, bpm: bpm_value, steps: steps_value});
        }
    });
    let members = schema.objects('Step');
    console.log("create data done: " + members.length);
    console.log('create db:', schema.path); //might be: data/data/com.db_test/files/default.realm
  },
}