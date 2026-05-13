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
