<template>
  <div class="body">
    {{id}} - {{vdoc}} - {{vkc}}
    <div v-if="id===vdoc" v-html="vhtml"></div>
    <div v-else>{{dbq(id)}}</div>
  </div>
</template>

<script>
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
            .get( '/u/tnemeth/getkurz/' + targy )
            .then( resp => {
                this.vhtml = md(resp.data.rows[0].leiras)
                this.vdoc = resp.data.rows[0].kl
                this.vkc = resp.data.rows[0].kurzuscim
            })
      }
  }
}
</script>

<style>
.body {
  margin: 32px;
}
</style>