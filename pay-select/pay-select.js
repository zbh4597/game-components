(function (exports) {
	var template = 
		'<div class="pay-select-container">' +
			'<div class="pay-select-title">请选择支付方式</div>' +
			'<ul class="pay-select-items">' +
				'<li data-click="wechat">微信支付</li>' +
				'<li data-click="alipay">支付宝支付</li>' +
			'</ul>' +
			'<div class="pay-select-cancel" data-click="cancel">取消</div>' +
		'</div>';
	var handler;

	function PaySelect () {}
	PaySelect.prototype.init = function (config) {
		this.elem = document.createElement('div');
		this.elem.innerHTML = template;
		this.initStyle();
		this.hide();
		
		var that = this;
		handler = function (event) {
			var target = event.target;
			if (typeof config === 'object' && typeof target.dataset['click'] === 'string' && typeof config[target.dataset['click']] === 'function') {
				config[target.dataset['click']].call(that); // 事件处理程序上下文绑定在PaySelect实例上
			}
		};
		this.elem.addEventListener('click', handler, false);

		document.body.appendChild(this.elem);
		return this;
	};
	PaySelect.prototype.show = function () {
		this.elem.display = 'block';
		return this;
	};
	PaySelect.prototype.hide = function () {
		this.elem.display = 'none';
		return this;
	};
	PaySelect.prototype.remove = function () {
		this.elem.removeEventListener('click', handler);
		this.elem.remove();
	};
	PaySelect.prototype.initStyle = function () {
		this.elem.querySelector('.pay-select-container').setAttribute('style',
			'width: 50%;' +
			'height: 50%;' +
			'position: absolute;' +
			'top: 50%;' +
			'left: 50%;' +
			'transform: translate3D(-50%, -50%, 0);' +
			'color: rgb(51, 141, 238);' +
			'background-color: rgb(235, 233, 234);' +
			'display: flex;' +
			'flex-flow: column nowrap;' +
			'justify-content: center;'
		);
		this.elem.querySelector('.pay-select-title').setAttribute('style',
			'height: 30%;' +
			'font-size: 1.5em;' +
			'color: rgb(113, 113, 113);' +
			'display: flex;' +
			'justify-content: center;' +
			'align-items: center;'
		);
		this.elem.querySelector('.pay-select-items').setAttribute('style',
			'list-style: none;' +		
			'margin: 0;' +
			'padding: 0;' +
			'flex: 1;' +
			'display: flex;' +
			'flex-flow: column nowrap;' +
			'justify-content: center;'
		);
		var lis = this.elem.querySelectorAll('.pay-select-items li');
		for (var i = 0, len = lis.length; i < len; i++) {
			lis[i].setAttribute('style',
				'flex: 1;' +
				'display: flex;' +
				'justify-content: center;' +
				'align-items: center;' +
				'border-bottom: 1px solid rgb(194, 194, 206);'
			);
		}
		this.elem.querySelector('.pay-select-items li').style.borderTop = '1px solid rgb(194, 194, 206)';
		this.elem.querySelector('.pay-select-cancel').setAttribute('style',
			'height: 25%;' +
			'font-size: 1.2em;' +
			'display: flex;' +
			'justify-content: center;' +
			'align-items: center;'
		);

		return this;
	};

	exports.PaySelect = PaySelect;
})(window);