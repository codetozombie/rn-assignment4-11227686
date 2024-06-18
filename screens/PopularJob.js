import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const PopularJob = ({ logo, jobTitle, companyName, amount, location, customStyles }) => {
  return (
    <View style={[styles.card, customStyles]}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.amountLocation}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 14,
    color: '#666',
  },
  amountLocation: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});

export default PopularJob;
