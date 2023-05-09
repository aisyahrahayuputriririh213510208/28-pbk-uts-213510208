<template>
  <div class="app">
    <h1>To Do List</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a new list" />
      <button>Add List</button>
    </form>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="(task, index) in filteredTasks" :key="index">
          <input type="checkbox" v-model="task.completed" />
          <span :class="{ completed: task.completed }">{{ task.description }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <div>
        <button @click="filterTasks('all')">All</button>
        <button @click="filterTasks('active')">Active</button>
        <button @click="filterTasks('completed')">Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        { description: 'belajar vuejs', completed: false },
        { description: 'belajar javascript', completed: false },
        { description: 'belajar c++', completed: true },
      ],
      filter: 'all',
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ description: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    filterTasks(filter) {
      this.filter = filter;
    },
  },
  computed: {
    filteredTasks() {
      switch (this.filter) {
        case 'active':
          return this.tasks.filter((task) => !task.completed);
        case 'completed':
          return this.tasks.filter((task) => task.completed);
        default:
          return this.tasks;
      }
    },
  },
};
</script>

<style>
/* Style untuk aplikasi To Do List */
.completed {
  text-decoration: line-through;
  color: gray;
}
body {
  background-color: #ffe5e5;
}
.app {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  width: 70%;
  display: inline-block;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  margin-left: 13%;
}
</style>