import { View, Text, TextInput,StyleSheet } from 'react-native';
import React from 'react';

import Layout from '../components/Layout';

const taskFormScreen = () => {
    return (
        <Layout>
            <TextInput
                placeholder='write a Title'
                />
            <TextInput
                placeholder='Write a description'/>


        </Layout>
    );
};
const styles = StyleSheet.create({
    input:{
        width: '90%',
        backgroundColor:'red'
    }
})
export default taskFormScreen;
