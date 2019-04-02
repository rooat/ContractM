module.exports = {
	proxy:{
		'/api': {
	      target: '',
	      changeOrigin: true,
	      pathRewrite:{
	          '^/api': ''
	      }
		}
	}
}