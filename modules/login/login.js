const Crypto = require('crypto')
const db = require('../../database/mongo')

module.exports = (email, password) => {
    return new Promise((resolve, reject) => {
        db.connection().collection('users').find({email}).toArray((err, user) => {
            if(err || user.length === 0) {
                reject({
                    data: {
                        status: 404,
                        field: 'email',
                        error: 1,
                        message: 'email do not match'
                    },
                    statusCode: 404
                })
            } else {
                const hash = Crypto.createHash('md5').update(password).digest('hex')
                if(hash != user[0].password) {
                    reject({
                        data: {
                            status: 400,
                            field: 'password',
                            error: 1,
                            message: 'password do not match'
                        },
                        statusCode: 400
                    })
                }
                resolve(user[0])
            }
        })
    })
}
