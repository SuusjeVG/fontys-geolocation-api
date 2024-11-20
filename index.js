import server  from './server.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Connection URI
const uri = "mongodb+srv://suusjevanglabbeek:PvS2NdvbEJSy6tAE@fontys-campus-locations.uxwir.mongodb.net/?retryWrites=true&w=majority&appName=Fontys-campus-locations";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const db_connection = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function startApi() {
    try {
        // Connect to the database
        const response = await db_connection.connect();
        const database = response.db('fontys-geolocations');
        const geolocations = database.collection('geolocations');
        
        // Fetch data from the database
        const api_data = await geolocations.find({}).toArray();

        // Start the server with the fetched data
        server(api_data);

    } catch (error) {
        console.error('Error:', error);
    }
}

startApi();

// db_connection.connect()
//     .then((response) => {
//         const database = response.db('fontys-geolocations');
//         const geolocations = database.collection('geolocations');
        
//         // Fetch data from the database
//         return geolocations.find({}).toArray();
//     })
//     .then((api_data) => {
//         console.log('Data fetched successfully:', api_data);

//         // Start the server
//         server(api_data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });



