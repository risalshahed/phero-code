/*
---------------------
Create Atlas Account
---------------------
1. sign up with google
2. create cluster
3. user & password
4. Network Access -> IP -> Allow for all (don't do for DB of production)
5. db -> Con -> Code copy
--------------------------------------
Sending data from client to server
--------------------------------------
1. Client side: create form
2. obSubmit -> get data from user
3. server -> create user POST method to receive data on backend
4. client -> set fetch with headers, body, post
5. Make sure you return a JSON from the POST API
-----------------------------
Load data to the client side
-----------------------------
1. create & get api on the server side
2. create a query object
3. collection.find(query)
4. cursor.toArray()
5. return the result
6. from client useEffect & display
----------
DELETE
----------

*/





// return 'express' function & store it in a const express
const express = require('express');
// mongo
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();

// *** npm i mongodb

// (middleware) allow others to fetch data or connect front-end & back-end data
const cors = require('cors');
app.use(cors());

// front-end thk pathano data receive krte problem hy, to solve it, we use express.json as middleware (to do body parse)
app.use(express.json());  // this helps in getting data on req.body



// mongo db
const uri = "mongodb+srv://netninja:test1234@cluster0.0qtxh.mongodb.net/prog-hero?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// ---------------------------------- CRUD Operation ----------------------------------
/* client.connect(err => {
  const userCollection = client.db("foodExpress").collection("user");
  console.log('db connected');
  // perform actions on the collection object
  client.close();
}); */

// Another approach with async function (Copied from https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)
async function run() {
  try {
    // wait to connect the client
    await client.connect();
    // "foodExpress" database thakle DB te data insert krbe, else create DB & insert
    const userCollection = client.db("foodExpress").collection("user");
    /* const user = { name: 'Hasan Sas', email: 'sas@yahoo.com' }
    const result = await userCollection.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`); */

    // mongodb.com -> node-drivers -> usage examples -> find operations
    // get the users from DB (above line is code source from mongodb website)
    app.get('/user', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    })

    // get user for a specific id
    app.get('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const result = userCollection.findOne(query);
      res.send(result);
    })

// mongodb.com -> node-drivers -> usage examples -> insert operations -> one document
    // client-side theke form er input dle ja hbe, all in this 'app.post' function
    app.post('/user', async (req, res) => {
      // client side thk form a submit dle ja asbe, ta req.body te pawa jabe
      const newUser = req.body;
      console.log('adding new user', newUser);
      // save data on DB from client-side input
      const result = await userCollection.insertOne(newUser);
      // res.send('data of user from front-end derived');
      // error dekhabe! cz amra client side theke JSON (res => res.json()) pathai! kin2 eikhane eita just a simple string! we must respond an OBJECT to avoid the error!!
      // res.send({output: 'Success'});
      res.send(result);
    })

    // update user
    app.put('/user/:id', async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const filter = {_id: ObjectId(id)};
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options)
      res.send(result);
    })

    // delete a user
    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      // delete the user with specific id stored in query constant
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })
  }

  finally {
    // Close connection with database (await -> wait for something)
    // await client.close();
  }
}

// only async function a catch dewa jaay
run().catch(console.dir);


// add a port
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('yo nigga, Node it is')
})

// Listen to the port
app.listen(port, () => {
  console.log('listening', port);
})