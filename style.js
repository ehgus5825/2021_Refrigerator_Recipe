import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  //HeaderButton
  CheckIcon_CheckButton: {
    fontSize: 30,
    marginRight: 15,
    marginTop: 5,
    color: 'tomato',
  },
  testContatiner_HeaderButton: {
    flex: 0.13,
  },
  container_HeaderButton: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon_HeaderButton: {
    fontSize: 30,
    marginRight: 15,
    marginTop: 5,
    color: 'tomato',
  },
  //MenuButton
  menuIcon_MenuButton: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 5,
    color: 'tomato',
  },
  // list1
  checkBox_List1: {
    flex: 0.05,
    paddingRight: 15,
    margin: 10,
    justifyContent: 'center',
  },
  button_List1: {
    padding: 10,
    margin: 5,
    width: '45%',
    borderRadius: 10,
    backgroundColor: 'tomato',
  },
  button2_List1: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'tomato',
  },
  textStyle_List1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textView_List1: {
    width: '20%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 5,
    textAlign: 'center',
    margin: 10,
  },
  textView2_List1: {
    width: '80%',
    padding: 5,
    margin: 10,
  },
  input_List1: {
    height: 40,
    margin: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '80%',
  },
  text_List1: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  flatlist_List1: {
    flex: 6,
    padding: 0,
  },
  itemView_List1: {
    flexDirection: 'row',
    borderWidth: 0,
    borderRadius: 0,
    padding: 1,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: '#ccc',
  },
  itemImg_List1: {
    width: 70,
    height: 70,
    padding: 20,
    margin: 10,
    resizeMode: 'cover',
    backgroundColor: 'white',
    //marginRight:20,
  },
  itemName_List1: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemMsg_List1: {
    height: 30,
    fontSize: 14,
  },
  datePickerStyle_List: {
    width: '60%',
    marginTop: 10,
    marginBottom: 10,
    margin: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  //RecipeList
  root_RecipeList: {
    flex: 1,
    padding: 5,
  },
  itemView_RecipeList: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  itemName_RecipeList: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemSimilarity_RecipeList: {
    textAlign: 'right',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'tomato',
  },

  //RecipeInfo
  root_RecipeInfo: {
    flex: 1,
    padding: 20,
  },
  subheading_RecipeInfo: {
    flex: 1,
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content_RecipeInfo: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    lineHeight: 30,
  },
  
  //ClientScreen
  profile_ClientScreen: {
    height: 210,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 30,
    paddingTop: 40,    
  },
  pic_ClientScreen: {
    height: 140,
    width: 140,
    marginRight: 20,
    borderRadius: 100,
  },
  nickname_ClientScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text_ClientScreen: {
    fontSize: 14,
  },
  menuItem_ClientScreen: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  menuItemIcon_ClientScreen: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  menuItemText_ClientScreen: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  menuList_ClientScreen: {
    flex: 1,
    // backgroundColor: 'skyblue',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  }
});

export default style;
