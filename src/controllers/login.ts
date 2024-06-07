


import { Request, Response, NextFunction } from 'express';


//const jwt = require('jsonwebtoken')


import jwt from 'jsonwebtoken'

const router = require('express').Router()

// SECRET FROM .ENV
import '../util/config'

// function that queries specific user
import { getSpecificUser } from '../util/db';

// user type
import { User } from '@prisma/client';

interface userType{
    username: string,
    name: string    

}



router.post('/posti', async (request: Request, response: Response) => {
  const body = request.body

  const user = await getSpecificUser(body.username)


  const passwordCorrect = body.password === 'salainen'

    console.log('got from specific:', user)
    /*

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }*/

  //const userForToken = user
  
  //const token = jwt.sign(userForToken, SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = router