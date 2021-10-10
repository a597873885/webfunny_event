const {CommonUpLog,BuryPointCardController,BuryPointCardStatisticsController,BuryPointFieldController,BuryPointWarehouseController,BuryPointTestController,ConfigController,MessageController,TeamController,TimerStatisticController,CommonUtil,BuryPointProjectController,Common,ProjectController,SdkReleaseController,UserController} = require("../controllers/controllers.js")


const createRoutes = (router) => {
    /**
     * 日志相关处理
     */
    // 用户上传日志（h5）
    router.post('/upLog', Common.upLog);

    // 添加team
    router.post('/config', ConfigController.create);

    /**
     * 登录相关逻辑
     */
    // 登录
    router.post('/login', UserController.login);
    // 重置验证码
    router.post('/refreshValidateCode', UserController.refreshValidateCode)
    // 获取验证码
    router.post('/getValidateCode', UserController.getValidateCode)
    // 获取用户列表
    router.post('/getUserList', UserController.getUserList);
    // 获取简单的用户信息列表
    router.post('/getAllUserInfoForSimple', UserController.getAllUserInfoForSimple);
    // 管理员获取用户列表
    router.post('/getUserListByAdmin', UserController.getUserListByAdmin);
    // 忘记密码
    router.post('/forgetPwd', UserController.forgetPwd);
    // 发送注册验证码
    router.post('/sendRegisterEmail', UserController.sendRegisterEmail);
    // 给管理员发送确认邮件
    router.post('/registerCheck', UserController.registerCheck);
    // 管理员注册接口
    router.post('/registerForAdmin', UserController.registerForAdmin);
    
    // 注册用户
    router.get('/register', UserController.register);
    // 重置密码
    router.get('/resetPwd', UserController.resetPwd);
    // 激活用户
    router.post('/activeRegisterMember', UserController.activeRegisterMember);
    // 删除用户
    router.post('/deleteRegisterMember', UserController.deleteRegisterMember);

    // 新增消息
    router.post('/createMessage', MessageController.createNewMessage);
    // 获取消息
    router.post('/getMessageByType', MessageController.getMessageByType);
    // 阅读消息
    router.post('/readMessage', MessageController.readMessage);
    // 阅读全部
    router.post('/readAll', MessageController.readAll)

    /**
     * Common 逻辑接口
     */
    // 获服务并发日志量
    router.post('/getConcurrencyByMinuteInHour', Common.getConcurrencyByMinuteInHour);


    // 添加team
    router.post('/team', TeamController.create);
    // 获取团队列表
    router.post("/getTeamList", TeamController.getTeamList)
    router.post("/addTeamMember", TeamController.addTeamMember)
    router.post("/createNewTeam", TeamController.createNewTeam)
    router.post('/deleteTeam', TeamController.deleteTeam);
    router.post('/moveProToTeam', TeamController.moveProToTeam)
    router.post('/updateTeamProjects', TeamController.updateTeamProjects)
    // 获取所有团队列表
    router.post("/getAllTeamList", TeamController.getAllTeamList)
    

    /**
     * 应用接口
     */
    // 添加应用
    router.post('/project', ProjectController.create);
    // 删除应用
    router.get('/deleteProject', ProjectController.deleteProject);
    // 获取应用详细信息
    router.get('/projectDetail', ProjectController.detail);
    // 获取应用列表
    router.get('/project/list', ProjectController.getProjectList);
    // 获取应用列表
    router.get('/webMonitorIdList', ProjectController.getWebMonitorIdList);
    // 获取应用详情
    router.get('/project/detail', ProjectController.getProjectDetail);
    // 更新启动列表
    router.get('/project/updateStartList', ProjectController.updateStartList);
    // 更新探针代码
    router.get('/project/updateMonitorCode', ProjectController.updateMonitorCode);
    // 获取所有应用列表
    router.get('/project/list/all', ProjectController.getAllProjectList);
    // 获取所有应用列表详情
    router.get('/project/detailList', ProjectController.getProjectDetailList);
    // 创建新的监控项目
    router.post('/createNewProject', ProjectController.createNewProject);
    // 创建新的监控项目
    router.get('/checkProjectCount', ProjectController.checkProjectCount);
    // 暂停项目的日志上报
    router.post('/changeLogServerStatusByWebMonitorId', ProjectController.changeLogServerStatusByWebMonitorId)
    // 获取暂停日志上报的项目列表
    router.post('/getStopWebMonitorIdList', ProjectController.getStopWebMonitorIdList)
    // 获取userTags
    router.post('/getUserTags', ProjectController.getUserTags)
    // 保存userTags
    router.post('/saveUserTags', ProjectController.saveUserTags)
    // 获取项目配置
    router.post('/getProjectConfig', ProjectController.getProjectConfig)
    // 保存项目配置
    router.post('/saveProjectConfig', ProjectController.saveProjectConfig)
    // 开启项目监控
    router.post('/openProject', ProjectController.openProject)
    // 保存警报信息相关
    router.post('/saveAlarmInfo', ProjectController.saveAlarmInfo)

    /**
     * 推送信息相关
     */
    router.get('/pushInfo', Common.pushInfo);

    /**
     * 更新信息相关
     */
    router.get('/updateInfo', Common.updateInfo);

    /**
     * 版本校验
     */
    router.get('/monitorVersion', Common.monitorVersion);

    /**
     * 获取项目版本号
     */
    router.get('/projectVersion', Common.projectVersion);
    // 获取日志服务所有相关信息
    router.get('/getSysInfo', Common.getSysInfo);

    

    /**
     * Docker 心跳检测
     */
    router.get('/health', Common.dockerHealth);

    /**
     * 测试接口
     */
    router.post('/test', Common.test);

    /**
     * 获取所有数据库表名
     */
    router.get('/getAllTableList', Common.getAllTableList);

    /**
     * 点位字段接口
     */
    router.post('/buryPointField/create', BuryPointFieldController.create);
    router.get('/buryPointField/detail', BuryPointFieldController.detail);
    router.post('/buryPointField/update', BuryPointFieldController.update);
    router.post('/buryPointField/delete', BuryPointFieldController.delete);
    router.post('/buryPointField/page', BuryPointFieldController.getPageList);
    router.post('/buryPointField/list', BuryPointFieldController.getList);
    router.post('/buryPointField/getListByPointId', BuryPointFieldController.getListByPointId);
    router.get('/buryPointField/AllList', BuryPointFieldController.getAllList);

    /**
     * 点位仓库接口
     */
    router.post('/buryPointWarehouse/create', BuryPointWarehouseController.create);
    router.post('/buryPointWarehouse/update', BuryPointWarehouseController.update);
    router.post('/buryPointWarehouse/delete', BuryPointWarehouseController.delete);
    router.get('/buryPointWarehouse/detail', BuryPointWarehouseController.detail);
    router.post('/buryPointWarehouse/page', BuryPointWarehouseController.getPageList);
    router.post('/buryPointWarehouse/list', BuryPointWarehouseController.getList);
    router.get('/buryPointWarehouse/AllList', BuryPointWarehouseController.getAllList);

    /**
     * SDK发布接口
     */
    router.post('/sdkRelease/create', SdkReleaseController.create);
    router.post('/sdkRelease/update', SdkReleaseController.update);
    router.post('/sdkRelease/delete', SdkReleaseController.delete);
    router.post('/sdkRelease/page', SdkReleaseController.getPageList);
    router.post('/sdkRelease/list', SdkReleaseController.getList);
    router.get('/sdkRelease/AllList', SdkReleaseController.getAllList);
    router.post('/upEvent', SdkReleaseController.upEvent);
    router.post('/sdkRelease/createReleaseScript', SdkReleaseController.createReleaseScript);
    router.get('/sdkRelease/downLoad', SdkReleaseController.downloadScript);

     /**
     * 点位项目接口
     */
    router.post('/buryPointProject/create', BuryPointProjectController.create);
    router.post('/buryPointProject/update', BuryPointProjectController.update);
    router.post('/buryPointProject/delete', BuryPointProjectController.delete);
    router.get('/buryPointProject/tree', BuryPointProjectController.tree);
    router.get('/buryPointProject/all', BuryPointProjectController.getAllList);
    router.get('/buryPointProject/allProject', BuryPointProjectController.getAllProjectList);

    /**
     * 点位卡片接口
     */
    router.post('/buryPointCard/create', BuryPointCardController.create);
    router.post('/buryPointCard/delete', BuryPointCardController.delete);
    router.post('/buryPointCard/list', BuryPointCardController.getList);
    
    
    router.get('/test/calcu', TimerStatisticController.calculateDataPreDay);
    router.get('/test/update', TimerStatisticController.test);



    


}

module.exports = {
    createRoutes
}