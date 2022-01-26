import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';
import TaskList from '../components/TaskList';

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
            <TaskList tasks={tasks}/>
        </View>
    );
};

export default HomeScreen;
