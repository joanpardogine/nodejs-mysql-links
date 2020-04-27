module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'bhj4waxt4p73hge7a5gf-mysql.services.clever-cloud.com',
        user: process.env.DATABASE_USER || 'uvk4sp9ijlt4xnuv',
        password: process.env.DATABASE_PASSWORD || 'x8At56PP1eLoKz0EvWQz',
        database: process.env.DATABASE_NAME || 'db_links'
    }

};