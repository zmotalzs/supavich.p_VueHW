<template>
  <div class="container - fluid">
    <h1 font="comic">Portfolio</h1>
    <img
      src="@/assets/getstudentimage.jpg "
      width="150"
      height="150"
      class="center"
    />
    <p>{{ "MyProfile Data : " }}</p>
    <ul>
      <li v-for="Pro in Profile" v-bind:key="Pro.id">
        {{ Pro.topic }} = {{ Pro.mydata }}
      </li>
    </ul>
    <p>{{ "Go to MyContact Click Here!!!" }}</p>
    <button @click="gotoMyContact">
      <img src="@/assets/contact.jpg" width="100" height="100" class="center" />
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    Profile: [
      { topic: "Name", mydata: "Supavich Piromkloy" },
      { topic: "Nickname", mydata: "Pann" },
      { topic: "Age", mydata: "21" },
      {
        topic: "Skill",
        mydata: "C,C++,Java,PL/SQL,Basic Microsoft Program Ex.word , excel...",
      },
      { topic: "Hobby", mydata: "Read Novel , Watch Anime , Play Game " },
    ],
  }),
  methods: {
    gotoMyContact() {
      this.$router.push("/Contact");
    },
  },
};
</script>

<style lang="scss">
h1 {
  font-family: cursive;
  font-size: 40px;
  text-decoration: underline;
  text-align: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
p {
  font-family: cursive;
  font-size: 30px;
  text-decoration: underline;
}
ul {
  font-family: cursive;
  font-size: 20px;
}
</style>