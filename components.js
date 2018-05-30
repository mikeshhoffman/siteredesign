//Vue.component('app-header', {
//  props: ['text'],
//  template: '<header><h1><img src="alligator-logo.png" alt="Alligator Logo">{{ text }}</h1></header>'
//})



// the header component
//Vue.component('app-header', {
//  props: ['text'],
//  template: '<header><img srcset="images/fesc_header_logo_tall.png 400w, images/fesc_header_logo_tall.png 800w, images/fesc_header_logo_tall.png 1280w" sizes="(max-width: 800px) 400px, (max-width: 1600px) 800px, (min-width: 1601px) 1200px" src="images/header_logo_orig.png" alt="logo for Florida Energy Systems Consortium (FESC)"> <nav><a href="index.html">Home</a> | <a href="public-outreach.html">Outreach</a> | <a href="sitemap.html">Site Map</a> </nav></header>'
//})


// NAV BAR COMPONENT
Vue.component('app-nav', {
  props: ['text'],
  template: '<nav><a href="index.html">Home</a> | <a href="public-outreach.html">Outreach</a> | <a href="sitemap.html">Site Map</a> </nav>'
})

// Must come after the above. This component is inserted in the following HTML element:
/*
    <div id="about-app">
      <app-nav text="FESC Home Page"></app-nav>
    </div>
    Effectively, Vue first creates the app-nav component, above, and then the below looks for the element with ID of about-app, to put the app-nav component inside that (div) element.
*/
var aboutApp = new Vue({
  el: '#about-app',
  data: {  }
})


// FOOTER COMPONENT
Vue.component('app-footer', {
  props: ['text'],
  template: '<footer><div class="fb-share-button" data-href="https://mikeshhoffman.github.io/siteredesign/" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmikeshhoffman.github.io%2Fsiteredesign%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=energy%20research">Tweet</a><p>Copyright &copy; 2008-2018 Florida Energy Systems Consortium. All Rights Reserved.</p></footer>'
})
//The <div> in <footer> is facebook sharing button, generated at https://developers.facebook.com/docs/plugins/share-button
// The <a> in <footer> is twitter sharing button.

var footerApp = new Vue({
  el: '#footer-app',
  data: {  }
})
