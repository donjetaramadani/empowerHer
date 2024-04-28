import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const ProfileScreen = () => {
  const chartConfig = {
    backgroundColor: '#6a1b9a',
    backgroundGradientFrom: '#8e24aa',
    backgroundGradientTo: '#ab47bc',
    decimalPlaces: 0, 
    color: (opacity = 1) => `rgba(233, 30, 99, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, 
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ff4081'
    }
  };
  
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fopenclipart.org%2Fdetail%2F277089%2Ffemale-avatar-5&psig=AOvVaw1yO_c3gbkbPvaYZ-hQmh9w&ust=1714307064869000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjZ-s6x4oUDFQAAAAAdAAAAABAR' // Placeholder URL for user avatar
  };

  // Data for New Incoming Users (can be dynamic or fetched from an API)
  const userData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      data: [50, 80, 120, 150, 180, 200]
    }]
  };

  // Data for Number of Inquiries (can be dynamic or fetched from an API)
  const inquiryData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [{
      data: [30, 45, 28, 80, 99, 43]
    }]
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Dashboard</Text>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.avatar }} style={styles.profilePic} />
          <View>
            <Text style={styles.profileName}>{user.name} </Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
          </View>
        </View>
        {/* Line Chart for New Incoming Users */}
        <Text style={styles.chartLabel}>New Incoming Users</Text>
        <LineChart
          data={userData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />

        {/* Bar Chart for Number of Inquiries */}
        <Text style={styles.chartLabel}>Number of Inquiries Over Time</Text>
        <BarChart
          data={inquiryData}
          width={Dimensions.get('window').width - 40}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f3e5f5', // light purple background
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4a148c'
  },
  profileEmail: {
    fontSize: 16,
    color: '#6a1b9a'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a148c' 
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#6a1b9a' 
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16
  }
});

export default ProfileScreen;
