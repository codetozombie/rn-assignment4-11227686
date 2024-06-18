import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Pressable } from 'react-native';
import JobCard from './JobCard';
import PopularJob from './PopularJob';
import SearchBar from './SearchBar';
import { AntDesign } from '@expo/vector-icons';

const jobs = [
  {
    id: '1',
    logo: require('../assets/icon.png'),
    jobTitle: 'Software Engineer',
    companyName: 'Company A',
    amount: '$120,000/year',
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    logo: require('../assets/icon.png'),
    jobTitle: 'Data Scientist',
    companyName: 'Company B',
    amount: '$110,000/year',
    location: 'New York, NY',
    customStyles: { backgroundColor: 'red' },
  },
  // Add more job data here
];

const popularJob = [
  {
    id: '1',
    logo: require('../assets/icon.png'), // Update the path to your local image
    jobTitle: 'Software Engineer',
    companyName: 'Company A',
    amount: '$120,000/year',
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    logo: require('../assets/icon.png'), // Update the path to your local image
    jobTitle: 'Data Scientist',
    companyName: 'Company B',
    amount: '$110,000/year',
    location: 'New York, NY',
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
              <AntDesign name="menufold" size={48} color="black" style={styles.menu} />
            </Pressable>
          </View>
        </View>

        <View style={styles.featuredContainer}>
          <View style={styles.featuredLeft}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Featured Jobs</Text>
          </View>

          <View style={styles.featuredRight}>
            <Text>View All</Text>
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
            <Text>Popular Jobs</Text>
          </View>

          <View style={styles.featuredRight}>
            <Text>View All</Text>
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
    marginRight: 20,
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
    marginRight: 20,
    marginTop: 20,
  },
  searchLeft: {
    flex: 9,
  },
  searchRight: {
    flex: 2,
  },
  featuredContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
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
