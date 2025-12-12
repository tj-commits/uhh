/**
 * 深度克隆
 * @param {*} obj 
 * @returns 
 */
export function deepClone(obj) {
	// 对常见的“非”值，直接返回原来值
	if ([null, undefined, NaN, false].includes(obj)) return obj
	//原始类型直接返回
	if (typeof obj !== 'object' && typeof obj !== 'function') return obj
	// var o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}
	var o = Array.isArray(obj) ? [] : {}
	for (let i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		}
	}
	return o
}
