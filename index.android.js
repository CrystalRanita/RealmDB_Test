/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Realm = require('realm');
import realm from './src/RealmDB';
import Button from './src/component/Button';

class db_test extends Component {
  constructor(props) {
    super(props);
    let stepBmpList =realm.objects('Step');
    this.state = {};
  }

  render() {
    return (
        <View style={styles.containerMain}>
            <Button 
                text="Set Data"
                onPress={ () => {this._MockupBmpList(10)}}>
            </Button>
            <Button 
                text="Modify Data"
                onPress={ () => {this._ModifyValue(5)}}>
            </Button>
        </View>
    );
  }

  //Create value
  _stepBmpList() {
    realm.write(()=>{
      //realm.deleteAll();
      realm.create('Step', {username: 'Crystal', date: '2016-05-27', bpm: 100, steps: 2000});
      realm.create('Step', {username: 'Bulldog', date: '2016-05-28', bpm: 110, steps: 4000});
      realm.create('Step', {username: 'English', date: '2016-05-29', bpm: 120, steps: 3000});
      realm.create('Step', {username: 'Dalmitian', date: '2016-05-30', bpm: 130, steps: 6000});
      realm.create('Step', {username: 'Rana', date: '2016-05-31', bpm: 140, steps: 1000});
      
    });

    let menbers = realm.objects('Step').filtered('steps > 3000');
    console.log("create data done: " + menbers.length);
    console.log('create db:', realm.path);
  }

  _MockupBmpList(num) { //Create BPM Data

    realm.write(()=>{
        realm.deleteAll();
        console.log("Total DB number for Step: " + num);
        console.log("Clean DB done!");
        for (i = 0; i < num; i++) {
          let ID = i.toString();
          let randomDate = (this._randomDate()).toString();
          let bpm_value = parseInt(Math.floor((Math.random() * 71) + 90)); //return Math.floor(Math.random()*(max-min+1)+min); data between 90~160
          let steps_value = parseInt(Math.floor((Math.random() * 10000) + 1)); //1~10000,
          console.log("ID: " + ID);
          console.log("Random Date: " + randomDate);
          console.log("Bpm Value: " + bpm_value);
          console.log("Steps Value: " + steps_value);
          console.log("---------------------------");
          realm.create('Step', {username: ID, date: randomDate, bpm: bpm_value, steps: steps_value});
        }
    });
    let menbers = realm.objects('Step');
    console.log("create data done: " + menbers.length);
    console.log('create db:', realm.path); //might be: data/data/com.db_test/files/default.realm
  }

  _ModifyValue(mdf_id) {
    let query_id= mdf_id.toString();
    console.log("Query ID: " + query_id);
    //Lookup doc on github realm.js: /realm-js/docs/collection.js
    let mdf_data = realm.objects('Step').filtered('username == $0', query_id);
    console.log("Set mdf_data done");
    console.log("mdf_data.length: " + mdf_data.length);
    if (mdf_data.length > 0){
      console.log("mdf_data.username: " + mdf_data[0].username);
      console.log("mdf_data.bpm: " + mdf_data[0].bpm);
      console.log("mdf_data.date: " + mdf_data[0].date);
      console.log("mdf_data.steps: " + mdf_data[0].steps);
      realm.write(()=>{
        console.log("mdf_data.steps: " + mdf_data[0].steps);
        mdf_data[0].steps = 99999;
        console.log("After mdf_data.steps: " + mdf_data[0].steps);
      });
    }else{
      console.log("UNKNOWN ID: "+ mdf_id + "...Skip Query");
    }
  }

  _randomDate() {
    var startDate = new Date("2016-05-01T12:00:00");
    var endDate = new Date();
    var date = new Date(+startDate + Math.random() * (endDate - startDate));

    return date;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('db_test', () => db_test);
