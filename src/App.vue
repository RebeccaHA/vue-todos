<template>
  <div>
    <NavBar />
    <router-view />
    <TodoList :todos="todos" />
    <TodoForm @todo-item="addTodo" />
  </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    NavBar
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
