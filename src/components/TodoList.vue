
<template>
  <ul v-for="(todo,index) in todos">
    <li :key="index">
      <TodoItem @todo-item="addTodo" :todo="todo" />
    </li>
  </ul>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
};
</script>

