const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'sojib', email: 'sojib@gmail.com', job: 'college' },
    { id: 2, name: 'mizan', email: 'mizan@gmail.com', job: 'student' },
    { id: 3, name: 'sorif', email: 'sorif@gmail.com', job: 'student ' },
    { id: 4, name: 'kajal', email: 'kajal@gmail.com', job: ' student' },
    { id: 5, name: 'noyon', email: 'noyon@gmail.com', job: 'student ' },
]


app.get('/', (req, res) => {
    res.send('ayaa i can code on node,,i was fetch on error node code ')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    console.log(user)
    res.send(user)
});

app.get('/userdata', (req, res) => {
    res.send(['mango, orange, apple, lemon'])
})

// post 

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1 ;
    users.push(user)
    res.send(user)
});



app.listen(port, () => {
    console.log('listen to port ', port)
})