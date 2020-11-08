<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input id="name" v-model="name" />
      <br />
      <textarea id="description" v-model="description"></textarea>
      <select id="importance" v-model="importance">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoForm",

  data() {
    return {
      title: "",
      description: "",
      name: "",
      createdDate: "",
      importance: null
    };
  }
};
</script>