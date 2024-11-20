import express from 'express';

export  default function server(data) {
    const app = express()
    const port = process.env.PORT || 3000; 
    const host = 'https://fontys-geolocation-api.onrender.com/'; // localhost
    
    // middleware headers
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Content-Type', 'application/json');
    
        next();
    });

    app.get('/', (req, res) => {
        // valid json response
        res.send(data);
    })
    
    app.listen(port, () => {
        // console.log(`Server is running on ${host}:${port}`)
        console.log('Server is running')
    });
}

