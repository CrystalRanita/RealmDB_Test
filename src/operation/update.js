 'use strict';

module.exports = {
  _ModifyValue: function(mdf_id, schema) {
    let query_id= mdf_id.toString();
    console.log("Query ID: " + query_id);
    //Lookup doc on github realm.js: /realm-js/docs/collection.js
    let mdf_data = schema.objects('Step').filtered('username == $0', query_id);
    console.log("Set mdf_data done");
    console.log("mdf_data.length: " + mdf_data.length);
    if (mdf_data.length > 0){
      console.log("mdf_data.username: " + mdf_data[0].username);
      console.log("mdf_data.bpm: " + mdf_data[0].bpm);
      console.log("mdf_data.date: " + mdf_data[0].date);
      console.log("mdf_data.steps: " + mdf_data[0].steps);
      schema.write(()=>{
        mdf_data[0].steps = 99999;
      });
      console.log("After mdf_data.steps: " + mdf_data[0].steps);
    }else{
      console.log("UNKNOWN ID: "+ mdf_id + "...Skip Query");
    }
  },

  _UpdateWithPrimaryKey: function(schema) {
    schema.write(()=>{
      schema.deleteAll();

      //Create Item
      schema.create('Step', {username: 'Rana', date: '2016-05-01', bpm: 90, steps: 8888});
      let members = schema.objects('Step').filtered('username == $0', 'Rana');
      console.log("================== Before ================");
      console.log("username: " + members[0].username);
      console.log("bpm: " + members[0].bpm);
      console.log("date: " + members[0].date);
      console.log("steps: " + members[0].steps);
      console.log("============================================");
      //Update with primary key
      schema.create('Step', {username: Rana, bpm: 120}, true);

    });

    let members = schema.objects('Step').filtered('username == $0', 'Rana');
    console.log("================== After ===================");
    console.log("username: " + members[0].username);
    console.log("bpm: " + members[0].bpm);
    console.log("date: " + members[0].date);
    console.log("steps: " + members[0].steps);
    console.log("============================================");

  },
}