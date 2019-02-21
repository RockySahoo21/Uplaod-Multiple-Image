import ImagePicker from 'react-native-image-crop-picker';

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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  } 
});
