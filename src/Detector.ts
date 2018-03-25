// 检测是否支持HTML5的history API
const supportsHistory = "pushState" in window.history;

export default { supportsHistory };
