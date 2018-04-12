# Proposal for site redesign of floridaenergy.ufl.edu

Author: Michael Hoffman

April 11, 2018

This is a proposal for the responsive redesign of <http://floridaenergy.ufl.edu>.

[Asana project for redesign](https://app.asana.com/0/622197888656195/list)

[Detailed ticket for this task/assignment](https://app.asana.com/0/622197888656195/622197888656197)


<!-- ==============================================================-->
## Objectives/purpose of the redesign

*   Make the website run better on small screens on slow networks, with older browsers.

*   Make the website easier to navigate and easier to read.

*   Make the website more responsive and increase its accessibility.

*   Tune the website for its various audiences, including research universities, students, industry, and government energy agencies.

*   Responsive, modern redesign of this civic website.

*   Add interactivity with Javascript libraries.

*   Build visualizations of public data from a web API.


### General objectives of the website

Redesign the website so that the website better helps the Florida Energy Systems Consortium (FESC) to do the following:

*   Promote collaboration among energy experts at Florida universities

*   Create an energy strategy and help R&D for energy systems that are environmentally friendly, sustainable, and efficient, with expanded economic development for the state of Florida.

*   Support education, public outreach programs, and technology commercialization, to prepare a qualified energy workforce and informed public.

*   Guide the Florida Legislature, Executive Office of the Governor, and the Florida’s Office of Energy in the Florida Department of Agriculture and Consumer Services.

*   Identify innovation opportunities, prepare an energy workforce, and guide economic development.

*   Lead energy research, education, technology, and energy systems analysis.

*   Coordinate energy research among universities and industry.

*   Coordinate the energy expertise within the State university system, technology incubators, industrial parks, and industry-driven research centers.

*   Provide a state resource for objective energy systems analysis.


<!-- ==============================================================-->
## State of the current site


### Accessibility audit

Evaluation of current site's accessibility:

The demonstrations page (<http://floridaenergy.ufl.edu/energy-education/demonstrations/>) doesn't use semantic HTML.

*   Recommendation: Use semantic HTML, such as header, article, nav, and footer HTML elements.

The page "Demonstrations" (<http://floridaenergy.ufl.edu/energy-education/demonstrations/>) has alt text of "alternatively_fueled_vehicle".

*   Recommendation: Use consistent, clean alt text on all images.


<!--
*   <http://a11yproject.com/checklist.html>
*   <https://www.w3.org/WAI/intro/accessibility.php>
-->

<!--html100 deck 6, UX slides-->
<!--
*   Discoverability 
*   Learnability
*   Efficiency
*   Consistency
*   Delight
-->

<!--
todo: html100 deck 7 describes how to define user stories.
html200 deck 4 slides 50-56 describes testing.
-->

<!--html200 deck 4 slides 50-56-->
<!--
Usability factors to assess:
*   Ease of use- instructions, navigation
*   General appearance
*   Content is free of typos, grammar errors
*   Subjective user satisfaction
-->


<!--
Browser/OS compatibility: 
*   <https://www.browserling.com>
Chrome dev console device options
-->

<!--HTML200 deck 9  -  testing responsivity, becoming responsive-->


### Mobile friendliness


#### Google's mobile friendliness test

<https://search.google.com/test/mobile-friendly>

Results:

*   Page is not mobile friendly; this page can be difficult to use on a mobile device.

*   Viewport not set

*   Clickable elements too close together

*   Text too small to read

*   Content wider than screen


#### Evaluation of current site's responsiveness

<!--responsiveness-->

The home page layout is too heavyweight for mobile, and there are a variety of purposes on home page.

*   Recommendation: Use a streamlined, mobile-first primary design. Keep the central content that is unique for each page, but remove some elements from the top, bottom (12 universities' logos), and left. Use a mobile-first redesign for a smaller screen, to force clearer prioritization of content.

The site is non-responsive; when the viewport is narrow, images are cut off; text eg <http://floridaenergy.ufl.edu/about/> is cut off when narrower than 2/3 of 1058 px.

*   Recommendation: Use a flexible grid layout with breakpoints.

On all pages, the top navigation bar items are concatenated together at some viewport widths, and the right hand items become non-visible when the viewport is narrower than 730 px.

*   Recommendation: Use a flexible grid layout with breakpoints.

In the "Energy Education/ Energy Jobs" page (<http://floridaenergy.ufl.edu/energy-education/>), the right side of the text is cut off when the viewport is narrower than 1236px.

*   Recommendation: Use a flexible grid layout with breakpoints.

In the page "Nuclear Training Reactor at UF" (<http://floridaenergy.ufl.edu/energy-education/nuclear-training-reactor-at-uf/>), the right-side text cuts off when the viewport is narrower than 1361px.

*   Recommendation: Use a flexible grid layout with breakpoints.

<http://responsivedesignchecker.com> confirmed the analysis above, and demonstrated that the site isn't usable on narrow screens.
A 13" notebook is about the smallest device with which the site is presently usable.

<!--todo: see HTML200 slides about evaluating responsiveness/ mobile friendliness-->


### Performance / Page load time

<!--
todo: 
Stats/numbers
load times
percentages
-->


#### Performance measured at webpagetest.org

<https://www.webpagetest.org>

The First View of the home page <http://floridaenergy.ufl.edu> requires around 4 seconds (tested over 3 runs).

There are likely opportunities to reduce bandwidth needed for image and JavaScript:
*   Images: 55% of requests, 43% of bytes
*   JS: 22% of requests, 45% of bytes


#### Performance measured at pingdom.com

<https://tools.pingdom.com>

The home page (<http://floridaenergy.ufl.edu>) measured as follows:

*   Performance grade: B (82).  

*   Load time: 4.5 seconds 

*   Faster than 35% of tested sites.

*   Page size: 1.2MB

*   Distinct Requests needed to load the page: 61

The Site Map page (<http://floridaenergy.ufl.edu/?page_id=73>) measured as follows:

*   Performance grade: B (80).  

*   Load time: 5.2 seconds 

*   Faster than 30% of tested sites.

*   Page size: 463KB

*   Distinct Requests needed to load the page: 43

The performance site recommended browser caching, and serving static content from a cookieless domain.


### Functionality (does it work?)

In the footer, in "Design by sjulien.com", the URL isn't linked.

*   Recommendation: Link the domain name.

The copyright year is outdated ("Copyright © 2008-2015"), at the bottom of every page.

*   Recommendation: Update the copyright to 2018 or automatically showing the Current Year, and restyling it for more subtle formatting.


#### HTML validation
<!--html200 deck 4 slides 50-56-->
<!--Functionality factors to assess:-->
<!--*   HTML and CSS is valid?  -->

The HTML validator <https://validator.w3.org> found 34 errors and 25 warnings, for the home page.

*   Recommendation: Fix the HTML validation errors and most of the warnings.


#### CSS validation

The main CSS file (<http://floridaenergy.ufl.edu/wp-content/themes/fesc/style.css>) passes validation (at <https://jigsaw.w3.org/css-validator/validator>).


#### Link testing

<http://www.brokenlinkcheck.com> found broken links, including:

*   http://www.myfloridaclimate.com/env/home/serve_to_preserve_faq
*   https://www.epa.gov/Ozone/defns.html
*   https://www.research.noaa.gov/climate/t_modeling.html
*   https://solarindustrymag.com/issues/SI1309/FEAT_05_Hazardous_Materials_Used_In_Silicon_PV_Cell_Production_A_Primer.html
*   http://www.ieses.fsu.edu
*   http://www.mae.ufl.edu/NasaHydrogenResearch/index.phphttp://www.fsec.ucf.edu/en/research/hydrogen/fundedRD/fundedNASA.htm
*   https://floridadep.gov/energy/
*   http://floridapec.engr.ucf.edu/index.asp
*   etc.

*   Recommendation: Fix the broken links.


#### Pages load correctly?

All visited pages loaded correctly. More testing is needed.


#### Forms testing

All forms at the site need to be tested, such as the newsletter form at <http://floridaenergy.ufl.edu/contact-us/>.


### Testing whether the site works without JavaScript support

*   Recommendation: Test whether the site works without JavaScript support; see <http://www.wikihow.com/Disable-JavaScript>.


### Ease of use (is it pleasant to use?)


#### Styling

In the Free Online Courses page (<http://floridaenergy.ufl.edu/energy-education/free-online-courses/>), the text in table cells touches the cell borders.

*   Recommendation: Add cell padding.

In the home page, the FESC logo appears twice: in the upper left and lower right.

*   Recommendation: Remove the lower right logo.

<http://floridaenergy.ufl.edu/facilities-and-resources/> has headings in Blue, Green, links in Orange (green when hover).
There are random colors in the bar at the bottom - does this have meaning in terms of energy, or is it decorative?

*   Recommendation: Remove or replace the color-segment strip along the bottom.

In the "Energy Education/ Energy Jobs" page (<http://floridaenergy.ufl.edu/energy-education/>), 
"State" and "Community Colleges" are bold and ungrammatical in mid-sentence, not hyperlinked as implied. 

*   Recommendation: Use normal subheadings "State and Community Colleges", "Universities", instead of inline bold text.


#### Navigation

The Site Map page (<http://floridaenergy.ufl.edu/sitemap/>), linked from the lower right of every page, is white space in the middle pane; all the information is in the narrow strip along the left navigation area, heavily wrapped.

*   Recommendation: Move the Site Map from the navigation column into the main content area.

The site has complex navigation, including top-level navigation in the top navigation bar, low-level navigation in the left navigation bar, Search on the top of pages, and university logos and Site Map at the bottom.

*   Recommendation: Move the Search area into the top navigation bar, and moving the university logos into a dedicated page only, linked from multiple pages.

The Search feature at top of each page of site wastes screen real estate, and lacks styling to match the site.

*   Recommendation: Move the Search feature into the top navigation bar.

In the Contact Us page (<http://floridaenergy.ufl.edu/contact-us/>), it is unexpected to have the About Us navbar on the left, which appears to be a full site map which includes much more than just About Us.

*   Recommendation: In this area of the site, use a much smaller left navigation tree focusing only on About Us.

The top-level navigation bar along the top appears to compete for attention against the lower-level navigation bar along the left: both have Home and Contact Us.

*   Recommendation: Remove the Home and Contact Us links from the left navigation bar in the home page.


<!-- ==============================================================-->
## User research (who are expected users? What do they want to accomplish?)

<!--<http://www.websitecriteria.com/website_writing_guide_before_you_begin_to_write/identify_the_intended_audience.html>-->

*   All audiences, listed below, need to be able to contact other organizations and individuals, such as other participating Florida research universities and researchers.

*   All audiences, listed below, need to learn about the Florida Energy Systems Consortium (FESC).

*   Energy experts at Florida universities; they need to collaborate.

*   University professors, and researchers at Florida universities; they need to be able to learn about each others' research, contact each other, and hire interns or other researchers.

*   Florida university students; they need to locate internship opportunities at energy companies and research departments.

*   Researchers at energy technology companies; they need to hire university interns, and find information to produce documents for public outreach.

*   Energy technology companies need to train and educate energy industry employees about obtaining, running, and maintaining new types of energy equipment.

*   People in the Florida Legislature, Executive Office of the Governor, and Florida’s Office of Energy in the Florida Department of Agriculture and Consumer Services; they need to find information about new energy approaches and technology, to decide what research to fund.

*   Energy experts within the State university system, technology incubators, industrial parks, and industry-driven research centers; they need to be able to contact each other, learn about each others' research, and learn about getting funding.

*   Energy systems analysts; they need resources for energy systems analysis.


<!-- ==============================================================-->
## Device support necessary

Based on the expected users, it is most important that the site work with the following devices and operating systems:

1.  Laptops or desktop computers on a Wi-Fi network in an energy research lab

2.  Laptops in the field, running older versions of Internet Explorer, such as IE6

3.  Mobile phones on cell towers out in the field, such as iPhone 6 and iPhone 6 Plus

4.  Tablets, such as 10" iPad


<!-- ==============================================================-->
## Recommendations

Recommendations are placed throughout the present document after each issue; find "Recommendation".

Generally, use the following, to provide responsive web design:

*  Flexible grid-based layout using relative sizing

*  Media queries to provide different CSS based on device properties such as viewport width and breakpoints

*  Dynamic resizing of images and video, and optimizing the images for load time


### Deliverables

*   A redesigned home page and site map page based on the present document's recommendations.

*   Clean link test results.

*   Clean HTML validation results.

*   Fairly good results for Google's mobile-friendliness test.

*   An update of the present document with significantly improved assessment of issues, including fixing the specific issues reported.