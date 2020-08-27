import axios from 'axios'


const service = axios.create({
    //url = base url + reqeust url
    // baseURL : "http://127.0.0.1:6088",
    baseURL : "http://127.0.0.1:8092",
    // https://xdvideo-file.oss-cn-shenzhen.aliyuncs.com/video/2020/maven/%E5%AE%98%E7%BD%91%E4%B8%BB%E5%9B%BE-mawen.png
    
    //配置请求超时时间
    timeout: 5000
})



export default service