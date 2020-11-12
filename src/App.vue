<template>
  <div>
    <Home />
    <TodoList :todos="todos" />
    <TodoForm @todo-item="addTodo" />
  </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    Home
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      console.log("adding", todo);
    }
  }
};
</script>
