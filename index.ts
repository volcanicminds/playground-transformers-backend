'use strict'

import dotenv from 'dotenv'
dotenv.config()

const { start: startServer } = require('@volcanicminds/backend')
startServer().catch((err) => console.log(err))
