'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: '',
      tasks: [
        {
          text: 'Read a book',
          done: false
        },
        {
          text: 'Pet the cat',
          done: false
        },
        {
          text: 'Learn to code',
          done: true
        },
      ]
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          text: this.newTask,
          done: false
        });
        this.newTask = '';
      }
    },
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    }
  }
}).mount('#app');