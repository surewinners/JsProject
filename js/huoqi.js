// JavaScript Document

//存款总额deposit_sum * 存款天数deposit_days * 年利率0.36%/365 = 利息ints ；
//存款总额deposit_sum + 利息ints = 本息和pri_ints ；

//求利息&本息和

/*var ex_arr = new Object();
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
*/

var huoqi_lv = 0.0036;
var yuebao_lv = 0.032;
function huoqi(){
	var result_ints = 0;
	var deposit_sum = parseFloat(document.getElementById('deposit_sum').value);
	var deposit_days = parseFloat(document.getElementById('deposit_days').value);
	
	result_ints = (deposit_sum * deposit_days/365 * huoqi_lv);	
	document.getElementById('lv_val').value = result_ints;
	document.getElementById('sum_val').value = deposit_sum+result_ints;
	document.getElementById('yue_val').value = deposit_sum * deposit_days/365 * yuebao_lv;
}