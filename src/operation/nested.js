 'use strict';

module.exports = {
  _createGroupData: function(schema) {
	schema.write(()=>{
	  schema.create('Group', {
	  	title: 'Rana COM',
	  	step_data: {username: 'Crystal', date: '2016-05-27', bpm: 100, steps: 2000},
	  });
	});

    let members = schema.objects('Step').filtered('username == $0', 'Crystal');
    console.log("============================================");
	console.log("members.username: " + members[0].username);
	console.log("members.bpm: " + members[0].bpm);
	console.log("members.date: " + members[0].date);
	console.log("members.steps: " + members[0].steps);
	console.log("============================================");
  },
}