import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appTheme from '../Themes/AppTheme';

// Example data (to replace this with fetch call)
const issuesData = [
  {
    id: 1,
    title: 'Pothole',
    description: 'A very deep pothole on Princes Consort road.',
    type: 'Public Service Disruption',
    status: 'Closed',
    votes: 2,
  },
  {
    id: 2,
    title: 'Drainage Blocked',
    description: 'Drains near Imperial College are blocked.',
    type: 'Sewage',
    status: 'Open',
    votes: 0,
  },
  {
    id: 3,
    title: 'Road Accident',
    description: 'Accident on Exhibition Road.',
    type: '',
    status: 'Open',
    votes: 0,
  },
];

const IssueBlock = ({ issue, onVote }) => (


    // Issue box
  <View style={styles.issueBlock}>
    <View style={styles.issueContent}>
      <Text style={styles.issueTitle}>{issue.title}</Text>
      <Text style={styles.issueDescription}>{issue.description}</Text>
      <Text style={styles.issueType}>Type: {issue.type}</Text>
      <Text style={styles.issueStatus}>Status: {issue.status}</Text>
    </View>
    <View style={styles.voteContainer}>
      <TouchableOpacity onPress={() => onVote(issue.id, 1)}>
        <Icon name="arrow-up-circle-outline" size={24} color="#0b6623" />
      </TouchableOpacity>
      <Text style={styles.voteCount}>{issue.votes}</Text>
      <TouchableOpacity onPress={() => onVote(issue.id, -1)}>
        <Icon name="arrow-down-circle-outline" size={24} color="#960019" />
      </TouchableOpacity>
    </View>
  </View>
);

const Track = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = issuesData;  // use JSON instead 
      setIssues(data);
    };

    fetchData();
  }, []);

  const handleVote = (id, delta) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === id ? { ...issue, votes: issue.votes + delta } : issue
      ).sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={issues}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <IssueBlock issue={item} onVote={handleVote} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#080816',
  },
  issueBlock: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginVertical: 8,
    borderRadius: 20, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row', // Align content and voting container side by side
    justifyContent: 'space-between', // Distribute space between elements
    backgroundColor: "grey", // Box background color
  },
  issueContent: {
    flex: 1,
  },
  issueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appTheme.colors.background, // Text color
  },
  issueDescription: {
    marginTop: 8,
    color: '#7a2a5b', // Text color
  },
  issueType: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#7a2a5b', // Text color
  },
  issueStatus: {
    marginTop: 8,
    color: '#7a2a5b', // Text color
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16, // Adds space between the content and the vote container
  },
  voteCount: {
    marginHorizontal: 8,
    fontSize: 18,
    color: '#080816', // Text color
  },
});

export default Track;
