import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

const isIOS = Platform.OS === 'ios'

export class Profile extends Component {

  constructor(props) {
    super(props);
  }


  toEdit(){
    this.props.navigation.navigate('UserInfo')
  }

  render() {

    return (
        <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
          <Text style={{fontSize: 20}}>My Account</Text>
          <View style={styles.item}>
            <Text style={styles.itemHeader}>Gender</Text>
            <Text style={styles.itemHeader}>{'male'}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemHeader}>Nickname</Text>
            <Text style={styles.itemHeader}>{'cat'}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemHeader}>Birthday</Text>
            <Text style={styles.itemHeader}>{'2012-04-12'}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemHeader: {
    fontSize: 20,
    marginTop: 15,
  }
})