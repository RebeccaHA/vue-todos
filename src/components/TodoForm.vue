<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="title">Title</label>
      <br />
      <input id="title" v-model="title" />
      <br />
      <label for="description">Description</label>
      <br />
      <textarea id="description" v-model="description"></textarea>
      <br />
      <label for="importance">Importance</label>
      <p>Please select the level of importance</p>
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