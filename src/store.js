//saya sudah mencoba import store tetapi tidak bisa,tampilan hanya menjadi background saja
import { defineStore } from 'pinia';
import { createPinia } from 'pinia';
import router from './router';

const piniaInstance = createPinia();

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  getters: {
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleTodoCompletion(todo) {
      todo.completed = !todo.completed;
    },
  },
});

// Attach the Pinia instance to Vue Router navigation guards
router.beforeEach((to, from, next) => {
  piniaInstance.router = router;
  next();
});

export default piniaInstance;
