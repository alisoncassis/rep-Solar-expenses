const Crypto = require('crypto')
const db = require('../../database/mongo')
const jwt = require('jsonwebtoken')


module.exports = {
    sign: (email, password) => {
        return new Promise((resolve, reject) => {
            db.connection().collection('users').find({email}).toArray((err, user) => {
                if(err) resolve({
                    data: {
                        status: 404,
                        error: 'Not Found',
                        message: 'email do not match'
                    },
                    statusCode: 404
                })
                const hash = Crypto.createHash('md5').update(password).digest('hex')
                if(hash != user[0].password) resolve({
                    data: {
                        status: 400,
                        error: 'No match',
                        message: 'password do not match'
                    },
                    statusCode: 400
                })
                const token = jwt.sign(
                    {email, role: user[0].profile},
                    process.env.TOKEN_SECRET,
                    {algorithm: 'HS256', expiresIn: '12h'}
                )
                resolve({
                    token,
                    statusCode: 200
                })
            })
        })
    },

    verify: (decoded, request, callback) => {
        db.connection().collection('users').find({email: decoded.email}).toArray((err, user) => {
            if(err) callback(null, false)
            decoded.scope = decoded.role
            callback(null, true, decoded)
        })
    }
}
