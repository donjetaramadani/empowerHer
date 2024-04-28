import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import image1 from '../assets/1.jpg';
const eventData = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join us for the annual tech conference where industry leaders will share insights into the future of technology.",
    imageUrl: image1, 
    eventUrl: "https://example.com/event1",
    applyUrl: "https://example.com/apply1"
  },
  {
    id: 2,
    title: "Web Development Workshop",
    description: "A hands-on workshop designed to teach the fundamentals of web development and modern web technologies.",
    imageUrl: image1, 
    eventUrl: "https://example.com/event2",
    applyUrl: "https://example.com/apply2"
  },
  {
    id: 3,
    title: "Web Development Workshop",
    description: "A hands-on workshop designed to teach the fundamentals of web development and modern web technologies.",
    imageUrl: "https://example.com/image2.jpg", 
    eventUrl: "https://example.com/event2",
    applyUrl: "https://example.com/apply2"
  },
];

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Read More" color='#f06292' onPress={() => Linking.openURL(event.eventUrl)} />
        <Button title="Apply" color='#ab47bc' onPress={() => Linking.openURL(event.applyUrl)} />
      </View>
    </View>
  );
};

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      {eventData.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#ab47bc',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  }
});

export default Search;
 