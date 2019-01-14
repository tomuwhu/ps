<template>
  <div class="about">
    <div v-html="tl"></div>
  </div>
</template>

<script>
  var markdown = require( "markdown" ).markdown
  let targy = markdown.toHTML( `
# Szakmódszertan

## Ismeretanyag

- az informatika, mint modellezés,
- az informatika, mint emberek közötti kommunikációs eszköz,
- az informatika, mint virtuális valóság,
- játékok virtuális terekben, interaktív médiák,
- virtuális világok a tanulásban, kutatásban,
- az információs társadalom és az ember,
- informatikai intelligencia, informatikai kompetenciák,
- az informatikai tudás helye a társadalmban,
- nevelési elvek az informatika órán, szocializációs szerep,
- az informatika használata és a kommunikációs „illemszabályok”,
- az autentikáció jelentősége és szabályai,

## Megszerezhető szakterületi tudás / készség / képesség (kompetenciák)

### A pedagógiai folyamat tervezése terén

- Képes  a  szaktárgy  tanulása-tanítása  során  felhasználható  nyomtatott  és  digitális  tankönyvek, taneszközök, egyéb tanulási források kritikus elemezésére és a konkrét  célokhoz  illeszkedő  kiválasztására  (különös  tekintettel  az  infokommunikációs  technológiára). 
- Képes  kollektív  munkában  történő  helyi  tanterv  készítésére,  önálló  éves  tematikus  (tanmeneti) tervezésre, óravázlat készítésére, valamint az oktatástechnikai eszközök  használatára. 

### A tanulási folyamat támogatása szervezése és irányítása terén

- Ismeri  a  szaktárgy  megértéséhez  és  kreatív  alkalmazásához  szükséges  gondolkodásmód  kialakulásában/kialakításában  szerepet  játszó  pszichológiai  tényezőket.  
- Tisztában  van  a  szóbeli  és  írásbeli  kifejezőkészség  alapvető  tanulás-módszertani  jellegzetességeivel, hibáival. 
- Képes  a  motivációt,  tanulói  aktivitást  biztosító,  a  tanulók  gondolkodási,  probléma- megoldási  és  együttműködési  képességeinek  fejlesztését  segítő  módszerek  megválasztására  és  alkalmazására.  Képes  a  szaktárgy  ismeretanyagának  megfelelő csoportosításával,  közvetítésével  az  érdeklődés  és  a  figyelem  folyamatos  fenntartására.  
- Képes  a  szaktárgy  speciális  összefüggéseivel,  fogalmaival  kapcsolatos  megértési  nehézségek kezelésére. 
- Felkészült  a  tények  és  értékelések  közötti  különbségek,  az  összefüggések  önálló  felismertetésére. 
- Felkészült  a  szaktárgy  tanulásában  kiemelkedő  eredményeket  elérő  tanulók  motiválására,  segítésére,  a  tehetséggondozásra,  valamint  ösztönzés  az  informatikai  ismereteknek a szaktárgy tanulása során való felhasználására. 

### A pedagógiai folyamatok és a tanulók értékelése terén 

- Ismeri  és  alkalmazza  a  tudásellenőrzés  és  a  képességmérés  legkorszerűbb  eredményeit, eszközeit.  
- Tájékozott  a  különböző  feladatbankokról  és  gyűjteményekről,  képes  ilyenek  összeállítására, illetve alkalmazására. Tantárgyi követelmények kidolgozására képes.  
- Képes a tanulók személyre szabott, differenciált módszerekkel történő értékelésére.  

  ` )
module.exports = {
  data: () => ({
    tl: targy
  }) 
}
</script>
<style>
.about {
  margin: 32px;
}
</style>