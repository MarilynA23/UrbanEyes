

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ContactUsPage = () => {
    const [issue, setIssue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
 
    const handleReport = () => {
        //handle sign up logic
        if (!selectedValue || !issue) {
          alert("Please enter issue and select type.");
          return;
        }
        alert(`Issue: ${issue}, ${selectedValue} type`);
    };

    return (
      <>
      <View style={styles.container}>
          <Text style={styles.title}>Queries or Concerns?</Text>
          <Text style={{fontSize: 18,
        marginBottom: 20,
        color: "#9da4dd"}}>Contact Us</Text>
          <TextInput
          style={styles.input}
          placeholder="Issue"
          value={issue}
          onChangeText={setIssue}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item style={styles.pickerItem} label="Faulty App Working" value="Faulty App Working" />
        <Picker.Item label="Mapping Issues" value="Mapping Issues" />
        <Picker.Item label="Reporting Issues" value="Reporting Issues" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
          <Button title="Report" color={"#c14961"} onPress={handleReport}/>
      </View>
    </>  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#080816'
    },
    title: {
        fontSize: 24,
        marginBottom: 5,
        color: "#9da4dd"
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "#e4e6f6"
    },
    picker: {
      marginBottom: 10,
      background:"none",
      color: "#7a2a5b",
      height: 40,
    },
    pickerItem: {
      background:"none",
      color: "#7a2a5b",
    }
});

const text= "#e4e6f6";
const background= "#080816";
const primary= "#9da4dd";
const secondary= "#7a2a5b";
const accent= "#c14961";

export default ContactUsPage;