 'use strict';

module.exports = {
  _randomDate: function() {
    var startDate = new Date("2016-05-01T12:00:00");
    var endDate = new Date();
    var date = new Date(+startDate + Math.random() * (endDate - startDate));

    return date;
  },
}