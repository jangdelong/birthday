/*
 * name: index.js
 * author: Jelon
 * date: 2014-9-14
 * version: 0.0.1
 * desc: 写给xx童鞋..
 */
(function() {
	var timer = null,
		txt = '亲爱的xx童鞋，生日快乐~',
		txt_cake = $('#txtCake').text(),
		arr_cake = txt_cake.split(''),
		txt_tmp1 = '',
		txt_tmp2 = '',
		len1 = txt.length,
		len2 = txt_cake.length,
		index1 = -1,
		index2 = -1,
		index3 = 0,
		index4 = 0;

	//加载底部文字
	var fib1 = function() {
		var _arguments = arguments;

		timer = setTimeout(function() {
			index1++;
			if (index1 < len1) {
				txt_tmp1 += txt.charAt(index1);
				$('#txt').text(txt_tmp1);
				_arguments.callee();
			} else {
				clearTimeout(timer);
				fib4();
				timer = null;
			}

		}, 500);
	};
	//蛋糕内部文字
	var fib2 = function() {
		var _arguments = arguments;
		setTimeout(function() {
			index2++;
			if (index2 < len2) {
				arr_cake = [];
				arr_cake = txt_cake.split('');

				arr_cake[index2] = '<i>' + txt_cake.charAt(index2) + '</i>';
				txt_tmp2 = arr_cake.join('');
				$('#txtCake').html(txt_tmp2);
				_arguments.callee();
			} else {
				$('#txtCake').html(txt_cake);
				index2 = -1;
				_arguments.callee();
			}			
		}, 100);
	};
	//蜡烛闪烁
	var fib3 = function() {
		setInterval(function() {
			index3++;
			if (index3%2 == 0) {
				$('#candle').css('color', '#999');
			} else {
				$('#candle').css('color', '#fc0');
			}
		}, 350);
	};
	//底部文字闪烁
	var fib4 = function() {
		setInterval(function() {
			index4++;
			if (index4%2 == 0) {
				$('#txt').css({'color': '#f66'});
			} else {
				$('#txt').css({'color': '#333'});
			}
		}, 800);
	};
	$(function() {
		fib1();
		fib2();
		fib3();
	});
	
})();
