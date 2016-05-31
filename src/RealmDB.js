'use strict';
const Realm = require('realm');

class Step extends Realm.Object{}
Step.schema = {
    name: 'Step',
    properties: {
        username: 'string',
        date: 'string',
        bpm: {type: 'int', default: 0},
        steps: {type: 'int', default: 0},
    },
};

class Acc extends Realm.Object{}
Acc.schema = {
    name: 'Acc',
    properties: {
      username: 'string',
      date: 'string',
      x: {type: 'double', defaule: 0},
      y: {type: 'double', defaule: 0},
      z: {type: 'double', defaule: 0},
    },
};

class SelectItems extends Realm.Object{}
SelectItems.schema = {
    name: 'SelectItems',
    properties: {
        items: {type: 'list', objectType: 'Step'},
    },
};

export default new Realm({ schema: [Step, Acc, SelectItems]})