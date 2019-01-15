<template>
  <div class="body">
    <div v-html="targyak.get(id)"></div>
  </div>
</template>

<script>
const md = require( "markdown" ).markdown.toHTML
module.exports = {
  props: ['id'],
  data: () => ({
      targyak: new Map
  }),
  beforeMount() {
      this.targyak.set(
          'elemiinf',
          md( `## Elemi Informatika` )
      )
      this.targyak.set(
          'infalap',
          md( `## Informatikai alapismeretek` )
      )
      this.targyak.set(
          'szakm',
          md( `## Szakmódszertan` )
      )
  }
}
</script>

<style>
.body {
  margin: 32px;
}
</style>