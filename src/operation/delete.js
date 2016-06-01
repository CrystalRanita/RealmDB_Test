 'use strict';

module.exports = {
  _deleteItems: function(schema) {
	schema.write(()=>{
      schema.deleteAll();
	  schema.create('Step', {
        username: 'Crystal',
        date: '2016-05-28',
        bpm: 100,
        steps: 2000
	  });
	});

    let members = schema.objects('Step').filtered('username == $0', 'Crystal');
    console.log("============================================");
	console.log("members.username: " + members[0].username);
	console.log("members.bpm: " + members[0].bpm);
	console.log("members.date: " + members[0].date);
	console.log("members.steps: " + members[0].steps);
	console.log("members length before delete operation: " + members.length);
	console.log("============================================");

	//Do delete action
	schema.write(()=>{
		schema.delete(members);
	});
	console.log("members length after delete operation: " + members.length);
  },
}