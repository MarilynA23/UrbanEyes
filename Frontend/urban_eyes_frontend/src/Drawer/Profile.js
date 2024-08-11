// Profile.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../UserContext'; // Import useUser hook

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useUser(); // Destructure user from context

  const { name, email, city, username, password, contact } = user;

  return (
      <>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}> Your Profile </Text>
        </View>
        <View style={{ flex: 0.75, backgroundColor: 'black' }}>
          <ProfileField icon="person" label="Name" value={name} />
          <ProfileField icon="mail" label="Email ID" value={email} />
          <ProfileField icon="location-pin" label="Location (City)" value={city} />
          <ProfileField icon="person" label="Username" value={username} />
          <ProfileField icon="phone" label="Contact Number" value={contact} />
          <ProfileField icon="remove-red-eye" label="Password" value={password} />

          <View style={styles.buttonContainer}>
            <Button
                title="Edit Profile"
                color={"#c14961"}
                style={styles.button}
                onPress={() => navigation.navigate("EditProfile")}
            />
          </View>
        </View>
      </>
  );
};

const ProfileField = ({ icon, label, value }) => (
    <View style={styles.fieldcontainer}>
      <View style={{ flex: 0.2 }}>
        <MaterialIcon name={icon} size={30} color={styles.secondary.color} />
      </View>
      <View style={{ flex: 0.75 }}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#9da4dd',
    alignItems: 'center',
    fontWeight: "bold"
  },
  titlecontainer: {
    flex: 0.25,
    backgroundColor: '#080816',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#c14961',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    color: "#e4e6f6",
  },
  value: {
    color: "#9da4dd",
  },
  secondary: {
    color: "#7a2a5b",
  },
});

export default Profile;
