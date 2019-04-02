<template>
<div class="language">
  <ul class="langs">
    <li @click="langzh" v-bind:style="{background:activbgzh}">ZH</li>
    <li @click="langen" v-bind:style="{background:activbgen}">EN</li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'MainScreen',
  components:{
  },
  data () {
    return {
      activbgzh:"rgba(55,82,137,1)",
      activbgen:"rgba(32,54,99,1)"
    }
  },
  mounted() {
  },
  methods: {
  	langzh:function(){
      this.$i18n.locale='zh'
        this.activbgzh="rgba(55,82,137,1)"
        this.activbgen="rgba(32,54,99,1)"
     },
     langen:function(){
      this.$i18n.locale='en'
        this.activbgzh="rgba(32,54,99,1)"
        this.activbgen="rgba(55,82,137,1)"
     }
  }
}
</script>

<style scoped="scoped">
.langs{
  list-style: none;
  width:100%;
  color: white
}
.langs li{
  float:left;
  width: 40%;
  height: 30px;
  line-height: 30px;
  background-color: blue;
}
.language{
  width: 20%;
  height: 40px;
  position: absolute;
  top:75px;
  right: 0;
}
</style>