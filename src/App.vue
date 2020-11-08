
<template>
  <div>
    <TodoList />
    <TodoForm />
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
  }
};
</script>

