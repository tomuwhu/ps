<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item>
        <router-link to="/">
          Kezdőlap
        </router-link>
      </b-nav-item>
      <b-nav-item-dropdown id="ddown" text="Oktatott tárgyak" left>
        <b-dropdown-item>
          <router-link to="/elemiinf">
            Elemi informatika II.
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item> 
          <router-link to="/infalap">
            Informatikai alapismeretek
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item> 
          <router-link to="/infalap">
            Informatikai alkalmazások
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item> 
          <router-link to="/infalap">
            Számítástechnikai alapismeretek
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item> 
          <router-link to="/szakm">
            Szakmódszertan I.
          </router-link>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="http://www.inf.u-szeged.hu/~tnemeth/" target="_blank">Régi tárgyak</b-dropdown-item>
      </b-nav-item-dropdown>
        <b-nav-item-dropdown id="ddown" text="Szakdolgozat / Diplomamunka" left>
        <b-dropdown-item  target="_blank" href="http://diploma.bibl.u-szeged.hu/cgi/search/archive/advanced/export_diploma_HTML.html?screen=Search&dataset=archive&_action_export=1&output=HTML&exp=0%7C1%7C-date%2Fcreators_name%2Ftitle%7Carchive%7C-%7Cinstitution%3Ainstitution%3AANY%3AEQ%3Aszte%7Csupervisor_name%3Asupervisor_name%3AALL%3AEQ%3AN%C3%A9meth+Tam%C3%A1s%7C-%7Ceprint_status%3Aeprint_status%3AANY%3AEQ%3Aarchive%7Cmetadata_visibility%3Ametadata_visibility%3AANY%3AEQ%3Ashow&n=&cache=1375899">
            Korábbi témák
        </b-dropdown-item>
        <b-dropdown-item  target="_blank" href="https://www.inf.u-szeged.hu/bir/temavalasztas/alga/tnemeth">
            Aktuális témák
        </b-dropdown-item>
      </b-nav-item-dropdown>
      </b-nav-item-dropdown>
        <b-nav-item-dropdown id="ddown" text="Publikációs listák" left>
        <b-dropdown-item  target="_blank" href="https://vm.mtmt.hu//search/slist.php?nwi=1&inited=1&ty_on=1&url_on=1&cite_type=2&orderby=3D1a&location=mtmt&stn=1&AuthorID=10028510&pr_on=1&Scientific=1">
            Magyar Tudományos Művek Tára
        </b-dropdown-item>
        <b-dropdown-item  target="_blank" href="https://scholar.google.hu/citations?user=LJqnw1sAAAAJ&hl=hu">
            Google Tudós
        </b-dropdown-item>
        <b-dropdown-item  target="_blank" href="https://www.researchgate.net/profile/Tamas_Nemeth8">
            Research Gate
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item target="_blank" href="http://www.inf.u-szeged.hu/~tnemeth/cv.pdf">
        CV
      </b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
 document.title="Dr. Németh Tamás"
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bree+Serif|Crimson+Text|Indie+Flower|Pacifico|Special+Elite');

/*
font-family: 'Crimson Text', serif;
font-family: 'Indie Flower', cursive;
font-family: 'Pacifico', cursive;
font-family: 'Bree Serif', serif;
font-family: 'Special Elite', cursive;
*/

#app {
  font-family: 'Crimson Text', serif;
}

#nav {
  margin: 6px;
  margin-left: 32px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
