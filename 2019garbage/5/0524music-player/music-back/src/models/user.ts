import Sequelize from 'sequelize'

export default (sequelize: Sequelize.Sequelize) => {
    return sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            unionid: {
                type: Sequelize.STRING,
            },
            nickname: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            sourceData: {
                type: Sequelize.JSON,
            },
            from: {
                type: Sequelize.ENUM('qq', 'weibo'),
            },
        },
        {
            freezeTableName: true,
        }
    )
}
