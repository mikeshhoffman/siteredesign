//Vue.component('app-header', {
//  props: ['text'],
//  template: '<header><h1><img src="alligator-logo.png" alt="Alligator Logo">{{ text }}</h1></header>'
//})



// the header component
//Vue.component('app-header', {
//  props: ['text'],
//  template: '<header><img srcset="images/fesc_header_logo_tall.png 400w, images/fesc_header_logo_tall.png 800w, images/fesc_header_logo_tall.png 1280w" sizes="(max-width: 800px) 400px, (max-width: 1600px) 800px, (min-width: 1601px) 1200px" src="images/header_logo_orig.png" alt="logo for Florida Energy Systems Consortium (FESC)"> <nav><a href="index.html">Home</a> | <a href="public-outreach.html">Outreach</a> | <a href="sitemap.html">Site Map</a> </nav></header>'
//})

Vue.component('app-nav', {
  props: ['text'],
  template: '<nav><a href="index.html">Home</a> | <a href="public-outreach.html">Outreach</a> | <a href="sitemap.html">Site Map</a> </nav>'
})
