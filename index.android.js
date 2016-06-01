/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const Realm = require('realm');

var create = require('./src/operation/create');
var update = require('./src/operation/update');
var nested = require('./src/operation/nested');
var delete_item = require('./src/operation/delete');
var sorting = require('./src/operation/sorting');
var slice = require('./src/operation/slice');

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
      <ScrollView>
        <View style={styles.containerMain}>
            <Button 
                text="Create"
                onPress={ () => {create._MockupBmpList(10000, realm)}}>
            </Button>
            <Button 
                text="Update I"
                onPress={ () => {update._ModifyValue(9999, realm)}}>
            </Button>
            <Button 
                text="Update II"
                onPress={ () => {update._UpdateWithPrimaryKey(realm)}}>
            </Button>
            <Button 
                text="Nested"
                onPress={ () => {nested._createGroupData(realm)}}>
            </Button>
            <Button 
                text="Delete"
                onPress={ () => {delete_item._deleteItems(realm)}}>
            </Button>
            <Button 
                text="Sort"
                onPress={ () => {sorting._sortItems(realm)}}>
            </Button>
            <Button 
                text="Slice"
                onPress={ () => {slice._sliceItems(realm)}}>
            </Button>
        </View>
      </ScrollView>
    );
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
