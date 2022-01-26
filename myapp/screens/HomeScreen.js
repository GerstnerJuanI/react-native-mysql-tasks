import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';

const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks()
    }, []);

    return (
        <View>
            <FlatList
                data={tasks}
                renderItem={
                    ({item}) => {
                        return (
                            <Text>{item.title}</Text>
                        );
                    }
                }
            />

        </View>
    );
};

export default HomeScreen;
