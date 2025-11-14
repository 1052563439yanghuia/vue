import axios from "axios";

const q = axios.create({
    baseURL: 'http://114.55.2.211:9010'
})

const getLeftNav = async () => {
    const { data } = await q.get('/nav/left_nav')
    return data
}

const loginBody = {
    account:'admin',
    password:"admin"
}

q.post('./login',loginBody).then((r) => {
    
})



