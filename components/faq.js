import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqData = [
    {
      question: "What is this platform?",
      answer: "This platform is designed to connect professionals across various industries for networking, job opportunities, and professional growth."
    },
    {
      question: "What are the impacts of using this platform?",
      answer: "Using this platform can significantly enhance your professional networking opportunities, increase job visibility, and provide access to industry insights and trends."
    },
    {
      question: "How can I sign up?",
      answer: "You can sign up by visiting our registration page and entering your details. Once registered, you can fully customize your profile."
    },
    {
      question: "Is there a fee to use the platform?",
      answer: "Basic membership is free, which includes access to standard networking features. Premium membership options are available for enhanced features and services."
    },
    {
      question: "Can I access this platform on mobile devices?",
      answer: "Yes, our platform is mobile-friendly and can be accessed via any mobile browser. Additionally, we offer a dedicated mobile app available for download on iOS and Android devices."
    },
    {
      question: "How do I reset my password?",
      answer: "If you've forgotten your password, go to the login page and click on 'Forgot Password?' Follow the instructions to receive an email to reset your password."
    },
    {
      question: "What security measures are in place to protect my information?",
      answer: "We use advanced encryption and security practices to ensure that your data is safe and secure. Regular audits and updates are performed to maintain our security standards."
    },
    {
      question: "How can I delete my account?",
      answer: "To delete your account, please go to your account settings and select 'Delete Account.' Please note that this action is irreversible and will remove all your data from our platform."
    },
    {
      question: "Who can I contact if I have technical issues?",
      answer: "If you encounter any technical issues, please contact our support team by submitting a ticket through the help center on our website. Our team is available 24/7 to assist you."
    },
    {
      question: "Are there any user guidelines I need to follow?",
      answer: "Yes, we have a set of community guidelines and terms of use that all users are required to follow. These guidelines are in place to ensure a safe and professional environment for all members."
    }
  ];
  

  return (
    <ScrollView style={styles.container}>
      {faqData.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.questionContainer}>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {activeIndex === index && (
            <Text style={styles.answer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  faqItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f3e5f5' 
  },
  questionContainer: {
    padding: 10,
    backgroundColor: '#ce93d8', 
  },
  question: {
    fontWeight: 'bold',
    color: '#4a148c' 
  },
  answer: {
    padding: 10,
    color: '#6a1b9a', 
    lineHeight: 20,
  }
});

export default FAQ;
