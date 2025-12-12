/*
 * @Author: huanling
 * @version: 1.0.0
 * @Company: 砼车信息技术有限公司
 * @Description:
 * @Date: 2019-12-09 16:14:00
 * @LastEditors: huanling
 * @LastEditTime: 2019-12-11 11:30:52
 */

import THImc from './th-imc';

THImc.install = function (Vue) {
  Vue.component(THImc.name, THImc);
};

export default THImc;
