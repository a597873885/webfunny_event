//delete//
const moment = require('moment');
//delete//
const BuryPointProject = function (sequelize, DataTypes) {
  return sequelize.define('BuryPointProject', {
    // ID 主键
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      AUTO_INCREMENT: 1000
    },
    // 项目ID event1001开始
    projectId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'projectId'
    },
     // 父id
     parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'parentId'
    },
    // 名称
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'name'
    },
    // 级别
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'type'
    },
    // 创建人
    createBy: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'createBy'
    },
    // 修改人
    updateBy: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'updateBy'
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  }, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
  })

}
//exports//
module.exports = BuryPointProject
//exports//