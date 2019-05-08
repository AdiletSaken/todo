var app = new Vue({
	el: '#app',
	data: {
		newTodo: '',
		todos: []
	},
	methods: {
		addTodo: function() {
			this.newTodo = this.newTodo.trim()
			if (this.newTodo) {
				this.todos.push({
					text: this.newTodo,
					done: false
				});
			}
			this.newTodo = '';
		},
		removeTodo: function(todo) {
			todo.done = true;
		},
		undoTodo: function(todo) {
			todo.done = false;
		}
	},
	computed: {
		unfinishedTodos: function() {
			return this.todos.filter((todo) => !todo.done);
		},
		finishedTodos: function() {
			return this.todos.filter((todo) => todo.done);
		}
	}
});