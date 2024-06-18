import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const JobCard = ({ logo, jobTitle, companyName, amount, location, customStyles, csTextStyles }) => {
  return (
    <View style={[styles.card, customStyles]}>
      <View style={[styles.header,csTextStyles]}>
        <Image source={logo} style={styles.logo} />
        <View>
          <Text style={[styles.jobTitle, csTextStyles]}>{jobTitle}</Text>
          <Text style={[styles.companyName, csTextStyles]}>{companyName}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.amount,csTextStyles]}>{amount}</Text>
        <Text style={[styles.location,csTextStyles]}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 186,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
    marginLeft: 20,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 22.5,
    backgroundColor: 'white',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  companyName: {
    fontSize: 14,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
   // alignContent: 'end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  location: {
    fontSize: 14,
    color: 'white',
  },
});

export default JobCard;
