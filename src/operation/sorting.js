 'use strict';

var create = require('./create');

module.exports = {
  _sortItems: function(schema) {
  	let i=0;
  	let j=0;
  	let num = 10;
	//Create 10 items then sorts them
	create._MockupBmpList(num, schema);

    let members = schema.objects('Step');
    console.log("================ Before Sorting ===========");
    for(; i < num; i++){

	    console.log("============================================");
		console.log("username: " + members[i].username);
		console.log("bpm: " + members[i].bpm);
		console.log("date: " + members[i].date);
		console.log("steps: " + members[i].steps);
		console.log("============================================");
    }

	//Sorting with steps
		let members_sorted = members.sorted('steps');

    console.log("================ After Sorting ===========");
    for(; j < num; j++){
  	    console.log("============================================");
		console.log("username: " + members_sorted[j].username);
		console.log("bpm: " + members_sorted[j].bpm);
		console.log("date: " + members_sorted[j].date);
		console.log("steps: " + members_sorted[j].steps);
		console.log("============================================");
	}
  },
}