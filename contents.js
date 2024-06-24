const {createApp,reactive} = Vue
        createApp({
            setup(){
                const indexC = reactive({
                    welcome: "欢迎来到我的个人网站！",
                    testing: "网站测试中…",
                    tips: "注意,本站仅供学习使用"
                })
                return {
                    indexC
                }
            }
        }).mount("#main")