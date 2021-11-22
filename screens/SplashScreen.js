import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../global/style';

export default function SplashScreen({navigation}) {
  const [animating, setAnimating] = useState(true);
  const memberID = require('../global/Global');

  //-------------- 로컬?�� user_id�? ????�� ?��?�� ?��?���? ?��?��?��?�� ?��?�� -----------------------

  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      const value = await AsyncStorage.getItem('user_id');
      // user_id�? ?��?���? (null?�� ?��?���?)
      if (value !== null) {
        // memberID.userID?�� �? ?��?�� -> ?��?���? �?
        memberID.userID = value;
      }
      // user_id - ?��?���? (null) Auth ?��?�� / ?��?���? DrawerTab ?��?��
      navigation.replace(value === null ? 'Auth' : 'DrawerTab');
    }, 3000);
  }, []);

  //---------------------------UI �?�?-------------------------------------------------

  return (
    <View style={style.container_SplashScreen}>
      <Image
        source={require('../imgpath/logo.gif')}
        style={style.img_SplashScreen}
      />
      <ActivityIndicator
        animating={animating}
        color="#FA8072"
        size="large"
        style={style.activityIndicator_SplashScreen}
      />
    </View>
  );

  //-----------------------------------------------------------------------------------
}
