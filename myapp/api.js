const API = 'http://192.168.1.105:3000/tasks'
export const getTasks = async () =>{
    const res = await fetch(API);
    return await res.json();
}