const log = require("../config/log");
const AccountConfig = require("../config/AccountConfig");
const { accountInfo } = AccountConfig
const {Common, UserController, SdkReleaseController, TimerStatisticController} = require("../controllers/controllers.js")

/**
 * 定时任务
 */
module.exports = async (customerWarningCallback) => {

    /**
     * 每天凌晨生成今天和明天的表
     * */
    setTimeout(() => {
        Common.consoleInfo()
        const startTime = new Date().getTime();
        let count = 0;
        const fixed = async () => {
            count ++;
            const tempDate = new Date()
            const tempTime = new Date().getTime()
            const wrongTime = startTime + count * 1000
            var offset = tempTime - wrongTime;
            var nextTime = 1000 - offset;
            if (nextTime < 0) nextTime = 0;
            const hourTimeStr = tempDate.Format("hh:mm:ss")
            const minuteTimeStr = tempDate.Format("mm:ss")
            try {
                // 每天的0点，定时执行生成每天的表
                if (hourTimeStr == "00:00:01") {
                    SdkReleaseController.timerCreateTableByDay().catch((e)=>{
                        log.error(e)
                   });
                }
            } catch(e) {
                log.printError("定时器执行生成今天和明天的表报错：", e)
            }
            setTimeout(fixed, nextTime);
        }
        setTimeout(fixed, 1000);
    }, 6000);
    /**
     * 3秒后开始接收消息队列里的数据
     * */
    setTimeout(() => {
        if (accountInfo.messageQueue === true) {
            // 开始接收消息队列的消息
            Common.startReceiveMsg()
            Common.startReceiveMsgForMog()
        }
        // 将每个项目的配置放入全局变量中
        Common.setProjectConfigList()
        
        // 将项目的webMonitorId列表放入全局变量，并放入bin/webMonitorIdList.js文件中
        // Common.setStopWebMonitorIdList()
    }, 3000)
    
    Common.consoleLogo()
    // 初始化登录验证码
    UserController.setValidateCode()
    global.monitorInfo.loginValidateCodeTimer = setInterval(() => {
        UserController.setValidateCode()
    }, 5 * 60 * 1000)
    
    /** * 定时任务 定时执行计算规则  开始 */
    setTimeout(() => {
        const startTime = new Date().getTime();
        let count = 0;
        const fixed = async () => {
            count ++;
            const tempDate = new Date()
            const tempTime = new Date().getTime()
            const wrongTime = startTime + count * 1000
            var offset = tempTime - wrongTime;
            var nextTime = 1000 - offset;
            if (nextTime < 0) nextTime = 0;
            const hourTimeStr = tempDate.Format("hh:mm:ss")
            const minuteTimeStr = tempDate.Format("mm:ss")

            if (hourTimeStr === '00:10:00'){
                await TimerStatisticController.calculateDataPreDay('');
            }           
            setTimeout(fixed, nextTime);
        }
        setTimeout(fixed, 1000);
    }, 6000)
}