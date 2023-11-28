'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
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
      }
    }
  }).mount('#app');