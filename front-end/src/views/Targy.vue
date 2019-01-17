<template>
  <div class="body">
    <h1>{{vkc}}</h1>
    <div v-if="id===vdoc" v-html="vhtml"></div>
    <div v-else>{{dbq(id)}}</div>
  </div>
</template>

<script>
//const _basedir='http://localhost:3000'
const _basedir='/u/tnemeth'
const md = require( "markdown" ).markdown.toHTML
module.exports = {
  props: ['id'],
  data: () => ({
    vhtml: 'Vucli',
    vdoc: '',
    vkc: ''
  }),
  mounted() {
        this.dbq(this.id)
  },
  methods: {
      dbq(targy) {
          this.axios
            .get( _basedir+'/getkurz/' + targy )
            .then( resp => {
                this.vhtml = md(resp.data.rows[0].leiras)
                this.vdoc = resp.data.rows[0].kl
                this.vkc = resp.data.rows[0].kurzuscim
            })
      }
  }
}
</script>

<style scoped>
.body {
  margin: 32px;
}
h1 {
  font-family: 'Crimson Text', serif;
  font-size: 25px;
  color: #541234;
}
h2 {
  font-family: 'Crimson Text', serif;
  font-size: 20px;
  color: #144234;
  text-shadow: 1px 1px 1px #659788;
}
h3 {
  font-family: 'Crimson Text', serif;
  font-size: 15px;
}
h4 {
  font-family: 'Crimson Text', serif;
  font-size: 10px;
}
</style>