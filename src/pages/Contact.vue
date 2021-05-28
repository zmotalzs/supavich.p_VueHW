<template>
  <div class="container - fluid">
    <h1 class="content">Portfolio</h1>
    <img
      src="@/assets/getstudentimage.jpg "
      width="150"
      height="150"
      class="center"
    />
    <p>{{ "MyContact Data : " }}</p>
    <ul>
      <li v-for="Con in Contact" v-bind:key="Con.id">
        {{ Con.topic }} = {{ Con.myContact }}
      </li>
    </ul>
    <p>{{ "Go Back to MyProflie Click Here!!!" }}</p>
    <button @click="gotoMyHomePage">
      <img
        src="@/assets/homepage.jpg"
        width="200"
        height="100"
        class="center"
      />
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    Contact: [
      { topic: "Privage_Email", myContact: "zmotalzs@hotmail.com" },
      { topic: "College_Email", myContact: "pi.supavich_st@tni.ac.th" },
      { topic: "Tel.", myContact: "0846389102" },
      {
        topic: "Line",
        myContact: "zmotalzs",
      },
      { topic: "Facebook", myContact: "Motalzs Supavich Piromkloy" },
    ],
  }),
  methods: {
    gotoMyHomePage() {
      this.$router.push("/");
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