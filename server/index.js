const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000
dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.MY

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db('practice')
        const userCollection = db.collection('allData')
        const booking = db.collection('bookingData')

        app.get('/destination', async (req,res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.get('/destination/:id', async (req,res) => {
            const {id} = req.params
            const result = await userCollection.findOne({_id: new ObjectId(id)})
            res.json(result)
        })

        app.post('/destination', async (req,res) => {
            const newUSer = req.body
            const result = await userCollection.insertOne(newUSer)
            res.send(result)
        })

        app.delete('/destination/:id', async (req,res) => {
            const {id} = req.params
            const query = {
                _id: new ObjectId(id)
            }
            const result = await userCollection.deleteOne(query)
            res.json(result)
        })

        app.put('/destination/:id', async (req,res) => {
            const {id} = req.params
            const filter = {
                _id: new ObjectId(id)
            }
            const m = req.body
            const updateDocument = {
                $set: m
            }
            const result = await userCollection.updateOne(filter,updateDocument)
            console.log(result)
            res.send(result)
        })

        app.post('/booking', async (req,res) => {
            const newData = req.body
            // const result = await booking.insertOne(newUSer)
            // res.json(result)
            console.log(newData)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World Umayer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
