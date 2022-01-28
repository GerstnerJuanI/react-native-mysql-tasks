
const dir1= 'http://192.168.56.1'
const API= dir1 + ':3000/tasks'

export const getTasks = async () =>{
    const res = await fetch(API);
    return await res.json();
}