import React, {Component} from 'react';
import { StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import {Anatomy} from '../Shared/Anatomy'
import {getGroupDataApiCall,GroupBuySelector,payload,cards } from '../../Ducks/GroupBuy/GroupBuyDuck'; 
import { connectSelector } from '../../Utils/connectHelper';
import {GroupBuyCard} from './GroupBuyCard';

 class GroupBuy extends Component {
   constructor(props){
     super(props);
   }

   componentDidMount=()=>{
    const{dispatch} = this.props;
    dispatch(getGroupDataApiCall({
      resolve: Function.prototype,
      reject: Function.prototype
    }))
   }

   renderGroupCards=()=>{
      const{ GroupBuyCardsData }= this.props;
      //add dynamic key for flatlist
    return  GroupBuyCardsData[0]&&<FlatList
            data={GroupBuyCardsData}
            renderItem={({ item }) => (
            <TouchableHighlight>
            <GroupBuyCard 
            cards={item}
            />
            </TouchableHighlight>
  )}
/>
      
   }

  render(){
  return (
    <Anatomy>
      {this.renderGroupCards()}
    </Anatomy>
  );
    }
}

export default connectSelector({
  GroupBuyCardsData:cards
})(GroupBuy);
