


// express setup
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

// types for req and res
import { Request, Response } from 'express';

// .env file variables
import '../util/config'

// createuser database function
import { createUserFunc } from '../util/db.js'

// jsonwebtoken
import jwt from 'jsonwebtoken'
const app = express()

// enables express to use json that gets passed to it?
app.use(express.json)

// cors
app.use(cors())


var corsOptions = {
    origin: ['*'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// cors options to app
app.use(cors(corsOptions))




app.get('/posts', (req: Request, res: Response) => {

    console.log('here body:', req.body)

    const { username, name, Role } = req.body

    try {

        let data = createUserFunc(username, name, Role)
    
        res.json(data)

    } catch(err) {
        console.log('error in posts is:', err)
    }

})




app.listen(3000)

console.log('Server running in 0.0.0.0:3000:')


