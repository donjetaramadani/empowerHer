import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Newinquries = () => {
  const [title, setTitle] = useState('');
  const [inquiryType, setInquiryType] = useState('Job Seeking');
  const [description, setDescription] = useState('');
  const [inquiries, setInquiries] = useState([
    { title: "Previous Inquiry 1", type: "Job Seeking", description: "Description here." },
    { title: "Previous Inquiry 2", type: "Academic Review", description: "Another description." },
  ]);

  const handleAddInquiry = () => {
    const newInquiry = { title, type: inquiryType, description };
    setInquiries([...inquiries, newInquiry]);
    setTitle('');
    setInquiryType('Job Seeking');
    setDescription('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Inquiries</Text>
      {inquiries.map((inquiry, index) => (
        <View key={index} style={styles.inquiryItem}>
          <Text style={styles.inquiryTitle}>{inquiry.title} - {inquiry.type}</Text>
          <Text>{inquiry.description}</Text>
        </View>
      ))}

      <Text style={styles.header}>Add New Inquiry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Picker
        selectedValue={inquiryType}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setInquiryType(itemValue)}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Job Seeking" value="Job Seeking" />
        <Picker.Item label="Academic Review" value="Academic Review" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.textArea}
        placeholder="Describe your inquiry..."
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit Inquiry" onPress={handleAddInquiry} color='#6a1b9a' />
    </ScrollView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#6a1b9a'
  },
  input: {
    height: 40,
    borderColor: '#ce93d8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  pickerItem: {
    color: '#6a1b9a'
  },
  textArea: {
    height: 100,
    borderColor: '#ce93d8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF'
  },
  inquiryItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  inquiryTitle: {
    fontWeight: 'bold',
    color: '#6a1b9a'
  },
});


  

export default Newinquries;
