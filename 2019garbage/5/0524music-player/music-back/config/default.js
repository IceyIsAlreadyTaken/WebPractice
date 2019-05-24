module.exports = {
    env: "development",
    server: {
        host: "127.0.0.1",
        port: 8080,
        socket: 8081
    },
    sequelize: {
        host: "127.0.0.1",
        database: "music",
        username: "root",
        password: "123456",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+08:00",
        logging: false,
        operatorsAliases: false
    },
    session: {
        secret: "secret",
        resave: false,
        saveUninitialized: false
    },
    qqStrategyOption: {
        clientID: 100000,
        clientSecret: "clientSecret",
        callbackURL: "https://127.0.0.1:8080/auth/qq/callback"
    },
    weiboStrategyOption: {
        clientID: 100000,
        clientSecret: "clientSecret",
        callbackURL: "https://127.0.0.1:8080/auth/qq/callback"
    },
    email: {
        transporter: {
            host: "smtp.163.com",
            secureConnection: true,
            port: 465,
            secure: true,
            auth: {
                user: "user",
                pass: "pass"
            }
        },
        to: "to@email"
    },
    emailSendENV: [
        "production", "test"
    ],
    avoidNotifyIDList: [],
    jwtKey: "jwtKey",
    webhook: {
        path: '/webhook',
        port: 8338,
        secret: 'webhook'
    },
    blacklist: [
        100
    ],
    administrators: []
}