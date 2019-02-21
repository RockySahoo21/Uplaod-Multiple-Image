import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Image,
  Button,
  ScrollView
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { Dropdown } from 'react-native-material-dropdown';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const options = {
  title: 'Select Photo',
  quality: 1.0,
  width: 50,
  height: 50,
};


export default class UdiChild extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '',status:'',assetid:'',images:null};
  }

  dashboard = () => {
    this.props.navigation.navigate('First');
  }

  cameraOpen = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
}


      renderImage(image) {
        return <Image style={{width: 75, height: 75, resizeMode: 'contain'}} source={image} />
      }


  render() {

    return (
      <View style={styles.container}>

      <Text style={styles.centerText}>
        Zed<Text style={styles.textBold}>Cloud</Text>
      </Text>

      <View style={{flex:1,flexDirection:'column',marginTop:50,marginBottom:50,justifyContent:'space-between',margin:10}}>

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black',left:25}}>Title</Text>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 1,width:150,left:100}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
      </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black',left:25}}>Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'black', borderWidth: 1,width:150,left:88}}
            onChangeText={(status) => this.setState({status})}
            value={this.state.status}
          />
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black',left:25}}>Asset ID</Text>
          <TextInput
            style={{height: 40, borderColor: 'black', borderWidth: 1,width:150,left:66}}
            onChangeText={(assetid) => this.setState({assetid})}
            value={this.state.assetid}
          />
        </View>

        <View style={{justifyContent:'center',alignItems:'center'}}>

        <TouchableOpacity style={{backgroundColor:'#fff',height: 40,width:150, borderColor: 'black', borderWidth: 1,alignItems:'center',justifyContent:'center'}} onPress={this.cameraOpen}>
            <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Add Site Image</Text>
        </TouchableOpacity>

          </View>

        <View style={{flexDirection:'row',height:70,width:300,margin:5,justifyContent:'center',alignItems:'center'}}>
        <ScrollView
        horizontal={true}
        >
        {this.state.images ? this.state.images.map(i =>
          <View style={{flexDirection:'row'}} key={i.uri}>
          {this.renderImage(i)}
          </View>): null}
          </ScrollView>
          </View>

          <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#fff',height: 40,width:60, borderColor: 'black', borderWidth: 1,alignItems:'center',justifyContent:'center',right:60}} onPress={this.dashboard}>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Close</Text>
             </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:'#fff',height: 40,width:60, borderColor: 'black', borderWidth: 1,alignItems:'center',justifyContent:'center',left:60}} onPress={this.dashboard}>
                  <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Save</Text>
              </TouchableOpacity>
          </View>


        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  centerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  textBold: {
    color: 'rgb(105, 179, 244)',
  },
  uploadAvatar: {
  height:50,
  width:50,
  },
});
