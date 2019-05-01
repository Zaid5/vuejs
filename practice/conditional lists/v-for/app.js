// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
		el: '#app',
		data:{
			foods: ['meat', 'cookies','mangoes'],
			persons: [
					{name: 'abc' , age: 20, color: 'white'},
					{name: 'xyz' , age: 24, color: 'brown'}
				]	
			}
				
		});