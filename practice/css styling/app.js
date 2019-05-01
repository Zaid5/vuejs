new Vue({
		el: '#exercise',
		data: {
			value: 0,
		},
		watch:{
			value: function(value){
				var vm = this;
				setTimeout(function(){
					vm.value = 0;
				},5000)
			}
		},
		computed:{
			result(){
				return this.value	 > 37 ? 'done' : 'not there yet'
			}
		},
		methods: {
			output(){
				return this.value	 > 37 ? 'greater than 5' : 'less than 5'
			}
		}
	});