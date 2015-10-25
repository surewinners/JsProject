//实例化一个Object对象,变量名为ex_arr
var ex_arr = new Object();
	ex_arr = {
		'usd':{'rmb':6.36, 'hkd':7.75 },
		'rmb':{'usd':0.16, 'hkd':1.22 },
		'hkd':{'usd':0.13, 'rmb':0.82 },
	};

function ex_rate(ex_from,ex_to,ex_v)
{		
	var result = 0;
	result = (ex_v * ex_arr[ex_from][ex_to]).toFixed(2);
	document.getElementById( ex_to + '_txt').value = result;
}