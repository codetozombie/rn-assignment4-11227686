import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Pressable } from 'react-native';
import JobCard from './JobCard';
import PopularJob from './PopularJob';
import SearchBar from './SearchBar';
import { AntDesign } from '@expo/vector-icons';

const jobs = [
  {
    id: '1',
    logo: require('../assets/ms.webp'),
    jobTitle: 'Software Engineer',
    companyName: 'Microsoft Corp. Inc',
    amount: '$120,000/year',
    location: 'San Francisco, CA',
    customStyles: { backgroundColor: 'blue', color: 'white' },
    csTextStyles: { color: 'white' },
  },
  {
    id: '2',
    logo: require('../assets/aplogo.webp'),
    jobTitle: 'Data Scientist',
    companyName: 'Company B',
    amount: '$110,000/year',
    location: 'New York, NY',
    customStyles: { backgroundColor: 'red' },
  },
  {id: '3',
  logo: require('../assets/cisco.png'),
  jobTitle: 'Cyber Security Analyst',
companyName: 'CISCO',
  amount: '$110,000/year',
  location: 'New York, NY',
  customStyles: { backgroundColor: 'darkgreen' },
  csTextStyles: { color: 'black' },
  },
  {id: '4',
    logo: require('../assets/oracle.png'),
    jobTitle: 'Database Administrator',
    companyName: 'Oracle',
    amount: '$110,000/year',
    location: 'New York, NY',
    customStyles: { backgroundColor: '#8c3910' },
    csTextStyles: { color: 'black' },
    },
    {id: '5',
      logo: require('../assets/fb.webp'),
      jobTitle: 'Full Stack Developer',
      companyName: 'Facebook',
      amount: '$110,000/year',
      location: 'New York, NY',
      customStyles: {
        backgroundColor: '#0097b0',},
      csTextStyles: { color: 'black' },
      },
      {id: '6',
        logo: require('../assets/tesla.png'),
        jobTitle: 'Mechanical Engineer',
        companyName: 'Tesla',
        amount: '$210,000/year',
        location: 'Vietnam',
        customStyles: { backgroundColor: '#cea631' },
        csTextStyles: { color: 'black' },
        },
        {id: '7',
          logo: require('../assets/accent.png'),
          jobTitle: 'IT Support',
          companyName: 'Accenture',
          amount: '$160,000/year',
          location: 'Dublin, NY',
          customStyles: { backgroundColor: 'darkgreen' },
          csTextStyles: { color: 'black' },
          },
          {id: '8',
            logo: require('../assets/sale.png'),
            jobTitle: 'Cloud Architect',
            companyName: 'Salesforce',
            amount: '$110,000/year',
            location: 'New York, NY',
            customStyles: { backgroundColor: '#2a2a59' },
            csTextStyles: { color: 'black' },
            },
  // Add more job data here

];

const popularJob = [
  {
    id: '9',
    logo: require('../assets/ms.webp'), // Update the path to your local image
    jobTitle: 'Software Engineer',
    companyName: 'Microsoft Corp. Inc',
    amount: '$160,000/year',
    location: 'San Francisco, CA',
  },
  {
    id: '10',
    logo: require('../assets/aplogo.webp'), // Update the path to your local image
    jobTitle: 'Computer Engineer',
    companyName: 'Apple Inc',
    amount: '$124,000/year',
    location: 'New York, NY',
  },
  {
    id: '11',
    logo: require('../assets/google.webp'), // Update the path to your local image
    jobTitle: 'Data Scientist',
    companyName: 'Google Inc',
    amount: '$118,000/year',
    location: 'Silicon Valley, CA',
  },
  {
    id: '12',
    logo: require('../assets/amazon.webp'), // Update the path to your local image
    jobTitle: 'Software Engineer',
    companyName: 'Amazon Inc',
    amount: '$115,000/year',
    location: 'Seattle, WA',
  },
  {
    id: '13',
    logo: require('../assets/meta.webp'), // Update the path to your local image
    jobTitle: 'Electrical Engineer',
    companyName: 'Meta Inc',
    amount: '$160,000/year',
    location: 'Sunnyvale, CA',
  },
  {
    id: '14',
    logo: require('../assets/broadcom.png'), // Update the path to your local image
    jobTitle: 'Support Engineer',
    companyName: 'Broadcom Inc',
    amount: '$150,000/year',
    location: 'San Jose, CA',
  },
  {
    id: '15',
    logo: require('../assets/netflix.png'), // Update the path to your local image
    jobTitle: 'UI Engineer',
    companyName: 'Netflix Inc',
    amount: '$125,000/year',
    location: 'Warsaw, PL',
  },
  {
    id: '16',
    logo: require('../assets/qualcomm.png'), // Update the path to your local image
    jobTitle: 'AI/ML Intern',
    companyName: 'Qualcomm Inc',
    amount: '$150,000/year',
    location: 'Chengdu, China',
  },

  // Add more job data here
];

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Eric Atsu</Text>
            <Text style={{ fontSize: 20, color: '#95969D' }}>eric@gmail.com</Text>
          </View>

          <View style={styles.profileRight}>
            <Image source={require('../assets/dp.jpeg')} style={styles.profileImage} />
            <Image source={require('../assets/circle.png')} style={styles.circleImage} />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchLeft}>
            <SearchBar placeholder="Search a job or position" />
          </View>

          <View style={styles.searchRight}>
            <Pressable>
              <AntDesign name="menufold" size={45} color="black" style={styles.menu} />
            </Pressable>
          </View>
        </View>

        <View style={styles.featuredContainer}>
          <View style={styles.featuredLeft}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Featured Jobs</Text>
          </View>

          <View style={styles.featuredRight}>
            <Text  style={{  fontSize: 14 }}>View All</Text>
          </View>
        </View>

        <FlatList
          data={jobs}
          renderItem={({ item }) => (
            <JobCard
              logo={item.logo}
              jobTitle={item.jobTitle}
              companyName={item.companyName}
              amount={item.amount}
              location={item.location}
              customStyles={item.customStyles}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />

        <View style={styles.featuredContainer}>
          <View style={styles.featuredLeft}>
            <Text  style={{ fontWeight: 'bold', fontSize: 16 }}>Popular Jobs</Text>
          </View>

          <View style={styles.featuredRight}>
            <Text  style={{  fontSize: 14 }}>View All</Text>
          </View>
        </View>

        <FlatList
          data={popularJob}
          renderItem={({ item }) => (
            <PopularJob
              logo={item.logo}
              jobTitle={item.jobTitle}
              companyName={item.companyName}
              amount={item.amount}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    height: 70,
    marginLeft: 20,
    marginRight: 0,
  },
  profileLeft: {
    flex: 3,
  },
  profileRight: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    height: 70,
    marginLeft: 20,
    marginRight: 0,
    marginTop: 20,
  },
  searchLeft: {
    flex: 9,
    marginLeft: -16,
  },
  searchRight: {
    flex: 2,
  },
  featuredContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: -20,
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  featuredLeft: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuredRight: {
    flex: 1,
    fontSize: 14,
    color: '#95969D',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 10,
  },
  circleImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    top: 10,
    right: 15,
  },
  flatListContent: {
    paddingHorizontal: 1,
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default HomeScreen;
