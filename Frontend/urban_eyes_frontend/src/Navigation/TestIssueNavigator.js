import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IssueList from '../components/IssueList';
import IssueDetail from '../components/IssueDetail';

const Stack = createStackNavigator();

const TestIssueNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IssueList" component={IssueList} options={{ title: 'Issues' }} />
            <Stack.Screen name="IssueDetail" component={IssueDetail} options={{ title: 'Issue Details' }} />
        </Stack.Navigator>
    );
};

export default TestIssueNavigator;
