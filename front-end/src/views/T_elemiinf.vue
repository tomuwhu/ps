<template>
  <div class="about">
    <div v-html="tl"></div>
  </div>
</template>

<script>
  var markdown = require( "markdown" ).markdown
  let targy = markdown.toHTML( `
# Elemi Informatika 2

## Ismeretanyag

- Írott és audiovizuális dokumentumok elektronikus létrehozása, kezelése.
- Dokumentumkészítés, prezentációtervezés és kivitelezés.
- Grafikai alkalmazások, fényképek feldolgozása, videó szerkesztés, zeneszerkesztés, multimédia szerkesztés.
- A dokumentumkészítő alkalmazások alapfogalmai és általános funkciói, tipikus dokumentumtípusok az oktatásban.
- Elemi adatkezelés, adatfeldolgozés, információmegjelenítés.
- A probléma megoldásához szükséges módszerek és eszközök helyes kiválasztása.
- Egyszerűbb folyamatok modellezése.
- Információkeresés, információközlési rendszerek.
- Az információs technológián alapuló kommunikációs formák.
- Médiainformatika, könyvtári informatika.
- A problémamegoldási folyamat tervezése (Pólyai alapokon), automatizálható problémamegoldási folyamatok megvalósítása.
- Egyszerű, tübb ciklusos, függvényekre, osztályokra bontott alkalmazások készítése.
- A programkészítésen belül a tervezés és a megvalósítás éles szétválasztása.
- Office eszközök programozása.

## Megszerezhető szakterületi tudás / készség / képesség

- Elkötelezettség és felelősségvállalás a szakmai fejlődésre.
- Elkötelezett a szaktárgya, annak tanítása iránt.
- Elkötelezett az igényes tanári munkára, a folyamatos önművelésre.
- Részt vesz a szaktantárgy fejlesztési, innovációs tevékenységében.
- Fontosnak  tartja  a  szaktárgyán  belüli  szakmai  együttműködést.  
- Tisztában  van szaktárgyának etikai kérdéseivel.  
- Kész  új, korszerű  informatikai  alkalmazások  megismerésére  és  ezen  ismeretek átadására
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