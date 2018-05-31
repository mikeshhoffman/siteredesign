// LOGO COMPONENT
Vue.component('vue-logo-elem', {
  props: ['text'],
  template: '<img srcset="images/fesc_header_logo_tall.png 400w, images/fesc_header_logo_tall.png 800w, images/fesc_header_logo_tall.png 1280w" sizes="(max-width: 800px) 400px, (max-width: 1600px) 800px, (min-width: 1601px) 1200px" src="images/header_logo_orig.png" alt="logo for Florida Energy Systems Consortium (FESC)">'
})
var vueLogoFunc = new Vue({
  el: '#vue-logo-div',
  data: {  }
})

// NAV BAR COMPONENT
Vue.component('vue-navbar-elem', {
  props: ['text'],
  template: '<nav><a href="index.html">Home</a> | <a href="public-outreach.html">Outreach</a> | <a href="sitemap.html">Site Map</a> </nav>'
})
var vueNavbarFunc = new Vue({
  el: '#vue-navbar-div',
  data: {  }
})

// FOOTER COMPONENT
Vue.component('vue-footer-elem', {
  props: ['text'],
  template: '<footer><div class="fb-share-button" data-href="https://mikeshhoffman.github.io/siteredesign/" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmikeshhoffman.github.io%2Fsiteredesign%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=energy%20research">Tweet</a><p>Copyright &copy; 2008-2018 Florida Energy Systems Consortium. All Rights Reserved.</p></footer>'
})
var vueFooterFunc = new Vue({
  el: '#vue-footer-div',
  data: {  }
})
