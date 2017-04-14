import fetch from '../config/fetch'
import * as home from 'src/service/tempdata/test'
import * as menu from 'src/service/tempdata/menu'
import * as linkData from 'src/service/tempdata/linkData'

// const linkData = r => require.ensure([], () => r(require('src/service/tempdata/linkData')), 'linkData')

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {

	// var cityGuess = () => fetch('GET', '/v1/cities', {
	// 	type: 'guess'
	// });
  var getMenu = () => setpromise(menu);
  var getLinkData = () => setpromise(linkData);
}else{
	// var cityGuess = () => setpromise(home.guesscity);
	var getMenu = () => setpromise(menu);
	var getLinkData = () => setpromise(linkData);
}


/**
 * 以下Api接口不需要进行反向代理
 */

var sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);
export {getMenu,getLinkData }
