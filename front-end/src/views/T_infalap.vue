<template>
  <div class="about">
    <div v-html="tl"></div>
  </div>
</template>

<script>
  var markdown = require( "markdown" ).markdown
  let targy = markdown.toHTML( `
# Informatikai alapismeretek (Fogorvos szak)
# Informatikai alkalmazások (Informatikatanár szak)
# Számítástechnikai alapismeretek (BIOLÓGUS MSc - Bioinformatika szakirány)

## Ismeretanyag:

- Gépi adatábrázolás. Számítógépek működési elve. Belső programvezérlés elve. A belső programvezérlésű számítógép felépítése, működése.
- Hardware alapismeretek. Output egységek. Monitorok (típusai, szöveges és grafikus üzemmód). Nyomtatók. Adathordozók.
- Software alapismeretek: fájlok, könyvtárstruktúra, programok típusai, vezérlési módok. Az operációs rendszer fogalma. 
- A fontosabb operációs rendszerek jellemzése. Programok kezelési módjai: parancs-, menü- és ablakos vezérlés. 
- Multiprogramozás, virtuális tárkezelés, a swap fájl fogalma, több felhasználós környezet.
- Operációs rendszerek összehasonlítása, jellemzése
- Vágólap használata. A bináris fájl és ASCII fájl fogalma. Szövegfájlok típusai, szövegszerkesztők típusai.
- Számítógépes dokumentumkészítés.
- Szövegszerkesztés. Dokumentum formázási lehetőségek szövegszerkesztővel.
- Stílusok. Körlevélkészítés.
- Táblázatkezelés: táblázat elemei, azonosítása, adattípusok, hivatkozások, cellák automatikus feltöltése, formulák használata, diagramok.
- Prezentációkészítés.
- Az Internet, WEB és WEB2-es szolgáltatások, Felhő szolgáltatások.
- Elektronikus levelezés.
- Adatbiztonság. Adattömörítés lényege, gyakori tömörítő eljárások, tömörített fájlok kezelése.
- Az IKT eszközök. Az informatika aktuális újdonságai.
- Az esélyegyenlőség biztosításának hardver és szoftver eszközei.

## Megszerezhető szakterületi tudás / készség / képesség

### A pedagógiai folyamat tervezése terén 

- Képes  a  szaktárgy  tanulása-tanítása  során  felhasználható  nyomtatott  és  digitális  tankönyvek, taneszközök, egyéb tanulási források kritikus elemezésére és a konkrét  célokhoz  illeszkedő  kiválasztására  (különös  tekintettel  az  infokommunikációs  technológiára). 
- Szakszerűen  tudja  használni  az  iskola  informatikaoktatási  eszközeit,  bevonni  oktatómunkájába  az  informatikai  eszközöket,  távoktatási  anyagokat.  Alkalmas  informatikai  tananyagfejlesztésre,  más  szakos  tananyagfejlesztés  informatikai  megvalósításának támogatására.

### A szakmai együttműködés és a kommunikáció terén 

- Együttműködik a szaktárgyával rokon tárgyak tanáraival.  
- Képes arra, hogy a rokon tárgyakban is megjelenő, egymásra épülő ismeretanyagok ütemezését egyeztesse. 
- Kész  együttműködni  a  szaktárgya  területén  működő  helyi  (fővárosi/városi/területi),megyei és országos szakmai fórumokkal, alkotó munkaközösségekkel, szakdidaktikai 
műhelyekkel. 
- Alkalmas  együttműködő  készsége  alapján  csoportmunkára  (bevonva  a  diákok csoportjainak  irányításába  más  szakos  tanárokat  is),  az  informatika  és  a  társadalom 
kölcsönhatásának követésére.
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
