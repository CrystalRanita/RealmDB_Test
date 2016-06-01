 'use strict';

var create = require('./create');

module.exports = {
  _sliceItems: function(schema) {
  	let i=0;
  	let j=0;
  	let num = 10;
	//Create 10 items then sorts them
	create._MockupBmpList(num, schema);

    let members = schema.objects('Step');
    console.log("================ Before Slice ===========");
    for(; i < num; i++){

	    console.log("============================================");
		console.log("username: " + members[i].username);
		console.log("bpm: " + members[i].bpm);
		console.log("date: " + members[i].date);
		console.log("steps: " + members[i].steps);
		console.log("============================================");
    }

	//Sorting with steps, item 2~4, item 5 not included.
		let members_slice = members.slice(2,5);

    console.log("================ After Slice ===========");
    for(; j < members_slice.length; j++){
  	    console.log("============================================");
		console.log("username: " + members_slice[j].username);
		console.log("bpm: " + members_slice[j].bpm);
		console.log("date: " + members_slice[j].date);
		console.log("steps: " + members_slice[j].steps);
		console.log("============================================");
	}
  },
}