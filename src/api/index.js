
const axios = require('axios').create({
    timeout: 0,
    withCredentials: false, // 允许跨域携带 cookie
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    maxContentLength: 2000,
    //transformResponse 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) { //data 由服务器提供的响应
        try {
            data = JSON.parse(data);
        } catch (e) {
            data = {};
        }
        return data;
    }]
})


export const getGuaDes = (data) => {
    let req = {
        para:{up:data[0],down:data[1]},
        url: 'https://qc9kbo.fn.thelarkcloud.com/hello'
    };
    return axios.get(req.url, { params: req.para });
}