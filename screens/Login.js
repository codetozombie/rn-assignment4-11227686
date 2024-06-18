// LoginScreen.js
import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image, Pressable} from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate('Home');
  };

  return (
  
    
    
    <View style={styles.container}>

<View>
      <Text style={styles.titleContainer}>Jobizz</Text>
    </View>

    <View style={styles.messageContainer}>
      <Text style={{color: '#0D0D26', fontSize: 24, fontWeight: 'bold'}}>Welcome Back 👋</Text>
      <Text style={{color: '#0D0D26', fontSize: 14}}>Let’s log in. Apply to jobs!</Text>
    </View>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry
      />
      <Button style={styles.button} title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.lineContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.line} />
      
      </View>


    <View style={styles.iconContainer}>

      <View style={styles.icon} onPress = {handleLogin}>
        <Pressable onPress={handleLogin}>
        <Image source={require('../assets/apple.svg')} 
        style={styles.aimage}
        onPress={handleLogin} />
        </Pressable>
      </View>

      <View style={styles.icon} onPress = {handleLogin}>
        <Pressable onPress={handleLogin}>
        <Image source={require('../assets/google.svg')} 
        style={styles.gimage} onPress = {handleLogin} />
        </Pressable>
      </View>

      <View style={styles.icon} >
        <Pressable onPress={handleLogin}>
        <Image source={require('../assets/facebook.svg')} 
        style={styles.fimage}   />
        </Pressable>

      </View> 

    </View>

    <View style={styles.footContainer}>
      <Text style={styles.footText}>Don’t have an account? <Text style={styles.footTextLink} onPress={() => navigation.navigate('Home')}>Register</Text></Text>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    backgroundColor: '#fff',
    //marginLeft: 25,
    //marginRight: 25,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    marginLeft: 25,
    marginRight: 25,
   // flex: 1,
  },
  input: {
    height: 52,
   // width:327,
    borderColor: '#BDBEC2',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
    border:0.5
    
  },
  button: {
    backgroundColor: 'green',
    // padding: 10,
    borderRadius: 5,
    height: 52,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  titleContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:106,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#356899',
 //   textAlign: 'center',
  },
  messageContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:10,
  },
  lineContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#AFB0B6',
    color: '#AFB0B6',
  },
  orText: {
    marginLeft: 10,
    marginRight: 10,
    color: '#AFB0B6',
    fontSize: 13,
  },
  iconContainer: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: 40,
   marginLeft: 80,
   marginRight: 80,
  },
  icon:{
    //flex: 1,
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }, 
  aimage:{
    width: 32,
    height: 40,
    alignSelf: 'center',
    marginTop: 7,
    // marginLeft: 15,
  },
gimage:{
    width: 40,
    height: 40,
    alignSelf: 'center',
     marginTop: 8,
     marginLeft: 1,
  },
  fimage:{
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 8,
     marginLeft: 1,
  },
  footContainer:{
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
  },
  footText:{
    color: '#BDBEC2',
    textAlign: 'center',
    fontSize: 14,
  },
  footTextLink:{
    color: 'blue',
  }
});

export default LoginScreen;
