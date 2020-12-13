import React from 'react';
import { StyleSheet } from 'react-native';
import {Anatomy} from '../Shared/Anatomy'
import CardView from '../Shared/Card';
import { Typography } from '../Shared/Typography';
import { color, size } from "../../assets/utils/styleGlobalConfig";
import {  Thumbnail} from 'native-base';
import { ThemeContext } from "../Shared/Utils/themeContext";
import { Countdown } from 'react-native-countdown-text';


export const GroupBuyCard = props => {
    const{ cards }= props;
    const uri = cards.itemDTO.images[0];
    const productName = cards.itemDTO.name;
    const {leaderName: LeaderName,
        leaderAvatar:LeaderImage,
        itemPrice,
        groupPrice,
        expireAt
    }= cards;
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
            <Anatomy
            backgroundColor="transparent"
            style={styles.CardStyle}
            >
              <Anatomy style={styles.innerContainer}>
                <Anatomy style={styles.Card}>
                  <Anatomy style={styles.thumbnailContainer}>
                <Thumbnail square large source={{uri: uri}} />
                  </Anatomy>
                  <Anatomy style={styles.cardBody}>
                      <Anatomy style={styles.cardBodyHeader}>
                          <Anatomy style={styles.groupOwner}>
                            <Thumbnail circle small source={{uri: LeaderImage}}/>
                            <Typography fontType="H5" bold style={{marginLeft:size.ssm}}>{LeaderName}</Typography>
                          </Anatomy>
                          <Anatomy style={styles.groupTimer}>
                            <Typography fontType="H3" highLight bold><Countdown format={"hh:mm:ss"} finishTime={expireAt} /></Typography>
                          </Anatomy>
                      </Anatomy>
                      <Anatomy style={styles.cardBodyDescription}>
                            <Typography fontType="H3">{productName}</Typography>
                      </Anatomy>
                      <Anatomy style={styles.cardBodyFooter}>
                        <Anatomy style={styles.productPrice}>
                            <Typography style={styles.crossed}>Rp. {itemPrice}</Typography>
                            <Typography fontType="H3" highLight>Rp. {groupPrice}</Typography>
                        </Anatomy>
                        <Anatomy style={styles.productBuyButton}>
                            <Typography style={styles.buttonText}>Beli Bareng</Typography>
                        </Anatomy>
                      </Anatomy>
                  </Anatomy>
                </Anatomy>
              </Anatomy>
            </Anatomy>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
      CardStyle:{
        marginTop:size.l,
    marginLeft:size.md,
    marginRight:size.md,
    borderColor: color.grey,
    borderStyle: 'solid',
    borderWidth: size.xxs,
    borderRadius: size.ssm,
      },
      groupOwner:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flex:0.6
      },
      cardBodyHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
      },
      groupTimer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
      },
      cardBody:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignContent:'center',
        width:'70%',
        marginLeft:size.small
      },
      cardBodyFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginTop:size.sm
      },
      Card:{
        flexDirection:'row'
      }, 
      innerContainer:{
        margin: size.l,
        width:'100%'
      },
      thumbnailContainer:{
        justifyContent:'center',
        alignItems:'center'
      },
      cardBodyDescription:{
        textAlign:'left',
        marginTop:size.sm
      },
      crossed:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        fontSize:10 ,
      },
      productBuyButton:{
        backgroundColor:'#E65A28',
        borderRadius: size.small,
        paddingLeft:size.smd,
        paddingRight:size.smd,
        paddingBottom:size.ssm,
        paddingTop:size.ssm,
      },
      buttonText:{
        color:color.white,
      }
});
