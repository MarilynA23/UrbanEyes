import * as React from 'react';
import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Platform, Modal, TextInput, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {   
  const [markers, setMarkers] = useState([]);

  const addMarker = useCallback((newMarker) => {
    setMarkers(prevMarkers => [...prevMarkers, newMarker]);
  }, []);

  function MainTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Report') {
              iconName = focused ? 'warning' : 'warning-outline';
            } else if (route.name === 'Track') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else {
              iconName = focused? 'heart' : 'heart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName='Home'
      >
        <Tab.Screen name="Report" component={ReportTab} />
        <Tab.Screen name="Home">
          {() => <MapTab markers={markers} addMarker={addMarker} />}
        </Tab.Screen>
        <Tab.Screen name="Track" component={TrackTab} />
      </Tab.Navigator>
    );
  }

  function ReportTab() {
    return(
      <View> 
        <Text>YOOO</Text>
      </View>
    )
  }

  function TrackTab() {
    return(
      <View> 
        <Text>Track Tab</Text>
      </View>
    )
  }

  function ChatTab() {
    return(
      <View> 
        <Text>Chat Tab</Text>
      </View>
    )
  }

  function AboutTab() {
    return(
      <View> 
        <Text>About Tab</Text>
      </View>
    )
  }

  function SettingsTab() {
    return(
      <View> 
        <Text>Settings Tab</Text>
      </View>
    )
  }

  function ContactsTab() {
    return(
      <View> 
        <Text>Contacts Tab</Text>
      </View>
    )
  }

  function LogoutTab() {
    return(
      <View> 
        <Text>Logout Tab</Text>
      </View>
    )
  }


  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTab}/>
        <Drawer.Screen name="Report An Issue" component={ReportTab}/>
        <Drawer.Screen name="Track Issues" component={TrackTab}/>
        <Drawer.Screen name="About the App" component={AboutTab}/>
        <Drawer.Screen name="Chat" component={ChatTab}/>
        <Drawer.Screen name="Emergency Contacts" component={ContactsTab}/>
        <Drawer.Screen name="Settings" component={SettingsTab}/>
        <Drawer.Screen name="Logout" component={LogoutTab}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function MapTab({ markers, addMarker }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCoordinate, setCurrentCoordinate] = useState(null);
  const [desc, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [addr, setAddr] = useState('');
  const [error, setError] = useState('');

  const handleMapPress = useCallback((event) => {
    const {coordinate} = event.nativeEvent;
    setCurrentCoordinate(coordinate);
    setModalVisible(true);
    setError(''); // Clear any previous errors
  }, []);

  const handleSubmitReport = useCallback(() => {
    if (!title.trim()) {
      setError('Please enter a title for the report.');
      return;
    }
    if (!desc.trim()) {
      setError('Please enter a description for the report.');
      return;
    }

    addMarker({coordinate: currentCoordinate, title: title, description: desc});
    setTitle('');
    setAddr('');
    setDescription('');
    setModalVisible(false);
    setError(''); // Clear the error message
  }, [currentCoordinate, title, desc, addMarker]);

  return(
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        onPress={handleMapPress}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setError(''); // Clear the error message when closing the modal
        }}>
        <View style={styles.modal}>
          <Text>Report an Issue</Text>
          <TextInput
            placeholder='Enter Title'
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            placeholder='Enter Address'
            value={addr}
            onChangeText={setAddr}
            style={styles.input}
          />
          <TextInput
            placeholder='Describe The Issue'
            value={desc}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
            style={styles.input}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <View style={styles.buttonContainer}>
            <Button title='Report' onPress={handleSubmitReport}/>
            <Button title='Cancel' onPress={() => {
              setModalVisible(false);
              setError(''); // Clear the error message when cancelling
            }}/>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
});