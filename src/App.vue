
<template>
  <div>
    <TodoList :todos="this.todos" />
    <TodoForm @add-todo="addTodo" />
  </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm
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

