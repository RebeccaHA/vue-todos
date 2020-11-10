<template>
  <div>
    <TodoList :todos="todos" />
    <TodoForm @todo-item="addTodo(todo)" />
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
      console.log("adding", todo);
    }
  }
};
</script>
