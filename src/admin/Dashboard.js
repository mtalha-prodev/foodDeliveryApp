import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Item from './tabs/Item';
import Order from './tabs/Order';
import Add from './tabs/Add';
import Transaction from './tabs/Transaction';
import Notification from './tabs/Notification';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={style.container}>
      {selectedTab == 0 ? (
        <Item />
      ) : selectedTab == 1 ? (
        <Order />
      ) : selectedTab == 2 ? (
        <Add />
      ) : selectedTab == 3 ? (
        <Transaction />
      ) : (
        <Notification />
      )}

      <View style={style.bottomTabView}>
        <TouchableOpacity
          style={style.tabBtn}
          onPress={() => setSelectedTab(0)}>
          <Image
            source={require('../../assets/icons/item.png')}
            style={[
              style.tabImg,
              {tintColor: selectedTab == 0 ? '#E74C3C' : '#000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabBtn}
          onPress={() => setSelectedTab(1)}>
          <Image
            source={require('../../assets/icons/order.png')}
            style={[
              style.tabImg,
              {tintColor: selectedTab == 1 ? '#E74C3Cf' : '#000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabBtn}
          onPress={() => setSelectedTab(2)}>
          <Image
            source={require('../../assets/icons/add.png')}
            style={[
              style.tabImg,
              {
                width: 35,
                height: 35,
                tintColor: selectedTab == 2 ? '#E74C3C' : '#000',
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabBtn}
          onPress={() => setSelectedTab(3)}>
          <Image
            source={require('../../assets/icons/transaction.png')}
            style={[
              style.tabImg,
              {tintColor: selectedTab == 3 ? '#E74C3C' : '#000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabBtn}
          onPress={() => setSelectedTab(4)}>
          <Image
            source={require('../../assets/icons/notification.png')}
            style={[
              style.tabImg,
              {tintColor: selectedTab == 4 ? '#E74C3C' : '#000'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation:10,
  },
  tabBtn: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImg: {
    width: 26,
    height: 26,
  },
});

export default Dashboard;
