import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connectSelector } from '../../Utils/connectHelper';


class ProductDescriptionPage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
    render(){
      const{record}= this.props;
        return (
            <View style={styles.container}>
              <Text>Product Description Page</Text>
            </View>
          );
        }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connectSelector({
})(ProductDescriptionPage);
