<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="@/assets/nemethtamas.jpg" class="r5" alt="Fénykép">
        </div>
        <div class="col-md-4">
          <br><br><br>
          <h4>Dr. Németh Tamás</h4>
            <p>egyetemi adjunktus</p>
            <p>SZTE - TTIK - Informatikai Intézet<p>
            <p>
             <a target='_blank' href='https://earth.google.com/web/@46.24909515,20.14647498,78.00118773a,72.55536563d,35y,105.7829675h,44.99598744t,-0r/data=ClEaTxJJCiUweDQ3NDQ4ODcwMzNmYzhlNzE6MHhiNmU2NTEyYWFiOGU1Y2Q0GTzkHCvnH0dAIQSGUbWCJTRAKg7DgXJww6FkIHTDqXIgMhgCIAE'>Iroda:</a> <a target='_blank' href='https://earth.google.com/web/@46.24918953,20.14634662,85.23022461a,0d,88.62942005y,94.56206024h,106.28188836t,0r/data=ClEaTxJJCiUweDQ3NDQ4ODcwMzNmYzhlNzE6MHhiNmU2NTEyYWFiOGU1Y2Q0GTzkHCvnH0dAIQSGUbWCJTRAKg7DgXJww6FkIHTDqXIgMhgBIAEiGgoWRkNKQmlidi1kd1JfZUlNd0ZUR0UzQRAC'>42-es oktatói szoba</a>
            </p>
            <p>Tel.: +36 (62) 34-3435</p>
            <p>Ímél: tnemeth@'URL a /-ig'</p>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
 img.r5 {
   border-radius: 20px;
 }
 p {
   margin: 0px ;
 }
 h4 {
   font-family: 'Crimson Text', serif;
 }
</style>