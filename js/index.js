var app = new Vue({
	el: '#app',
	data: {
		list: [{
				id: 1,
				name: 'iphone 7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'iphone 8',
				price: 7188,
				count: 1
			},
			{
				id: 3,
				name: 'iphone X',
				price: 8188,
				count: 1
			},
		]
	},
	methods: {
		handleReduce: function(index) {
			if(this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd: function(index) {
			this.list[index].count++;
		},
		handleRemove: function(index) {
			this.list.splice(index, 1);
		}
	},
	computed: {
		totalPrice: function() {
			var total = 0;
			for(var i = 0, len = this.list.length; i < len; i++) {
				total += this.list[i].price * this.list[i].count;
			}
			//每隔三位加一个逗号
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
		}
	}
})