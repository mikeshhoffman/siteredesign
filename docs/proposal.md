# Proposal for site redesign of floridaenergy.ufl.edu

Author: Michael Hoffman

April 6, 2018

This is a proposal for the responsive redesign of <http://floridaenergy.ufl.edu>.

[Asana project for redesign](https://app.asana.com/0/622197888656195/list)

[Detailed ticket for this task/assignment](https://app.asana.com/0/622197888656195/622197888656197)


<!-- ==============================================================-->
## Objectives/purpose of the redesign

*   Make the website run better on small screens on slow networks, with older browsers.

*   Make the website easier to navigate and easier to read.

*   Make the website more responsive and increase its accessibility.

*   Tune the website for its various audiences, including research universities, students, industry, and government energy agencies.

*   Responsive, modern redesign of civic website

*   Add interactivity with Javascript libraries

*   Build visualizations of public data from web API


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

accessibility:
*   <http://a11yproject.com/checklist.html>
*   <https://www.w3.org/WAI/intro/accessibility.php>

The website has a variety of layout and presentation issues; a sampling of issues and recommendations follows:

The page "Demonstrations" (<http://floridaenergy.ufl.edu/energy-education/demonstrations/>) has alt text of "alternatively_fueled_vehicle".
Recommend consistent clean alt text on all images.

The site is non-responsive; when the viewport is narrow, images are cut off; text eg <http://floridaenergy.ufl.edu/about/> is cut off when narrower than 2/3 of 1058 px.

On all pages, the top navigation bar items are concatenated together at some viewport widths, and the right hand items become non-visible when the viewport is narrower than 730 px.
Recommend flexible grid layout with breakpoints.

The site has complex navigation, including top-level navigation in the top navigation bar, low-level navigation in the left navigation bar, Search on the top of pages, and university logos and Site Map at the bottom.
Recommend folding the Search area into the top navigation bar, and moving the university logos into a dedicated page only, linked from multiple pages.

In the "Energy Education/ Energy Jobs" page (<http://floridaenergy.ufl.edu/energy-education/>), 
the right side of the text is cut off when the viewport is narrower than 1236px.
Recommend flexible grid layout with breakpoints.

In the "Energy Education/ Energy Jobs" page (<http://floridaenergy.ufl.edu/energy-education/>), 
"State" and "Community Colleges" are bold and ungrammatical in mid-sentence, not hyperlinked as implied. 
Recommend using normal subheadings instead: "State and Community Colleges", "Universities".

In the Free Online Courses page (<http://floridaenergy.ufl.edu/energy-education/free-online-courses/>), the text in table cells touches the cell borders.
Recommend adding cell padding.

The Search feature at top of each page of site wastes screen real estate, and lacks styling to match the site.
Recommend folding the Search feature into the top navigation bar.

In the page "Nuclear Training Reactor at UF" (<http://floridaenergy.ufl.edu/energy-education/nuclear-training-reactor-at-uf/>), the right-side text cuts off when viewport narrower than 1361px.

In the Contact Us page (<http://floridaenergy.ufl.edu/contact-us/>), it is unexpected to have the About Us navbar on the left, which appears to be a full site map which includes much more than just About Us.
Recommend a much smaller left navigation focusing only on About Us.

The home page layout is too heavyweight for mobile - <http://floridaenergy.ufl.edu/fl-energy-industry/>.
Recommend a streamlined, mobile-first primary design, keeping the central content that is unique for each page, but removing some elements from the top, bottom (12 universities' logos), and left).

The FESC logo appears twice in home page: upper left and lower right.
Recommend removing the lower right logo.

The top-level navigation bar along the top appears to compete for attention against the lower-level navigation bar along the left: both have Home and Contact Us.
Recommend removing the Home and Contact Us links from the left navigation bar in the home page.

<http://floridaenergy.ufl.edu/facilities-and-resources/> has headings in Blue, Green, links in Orange (green when hover).
There are strange colors in the bar at the bottom - does this have meaning in terms of energy, or is it decorative?
Recommend removing or replacing the color-segment strip along the bottom.

The Site Map link, at the lower right of each page, takes a long time to load.
The Site Map page (<http://floridaenergy.ufl.edu/sitemap/>) is white space in the middle pane; all the information is in the narrow strip along the left navigation area, heavily wrapped.
Recommend moving the Site Map from the navigation column into the main content area.

In the footer, in "Design by sjulien.com", the URL isn't linked.
Recommend linking the domain name.

The copyright year is outdated ("Copyright © 2008-2015"), at the bottom of every page.
Recommend updating the copyright to 2018 or automatically showing the Current Year, and restyling it for more subtle formatting.


<!--html100 deck 6, UX slides-->
*   Discoverability 
*   Learnability
*   Efficiency
*   Consistency
*   Delight


todo: html100 deck 7 describes how to define user stories.

html200 deck 4 slides 50-56 describes testing.

<!--html200 deck 4 slides 50-56-->
Usability factors to assess:
*   Ease of use- instructions, navigation
*   General appearance
*   Content is free of typos, grammar errors
*   Subjective user satisfaction

<!--html200 deck 4 slides 50-56-->
Functionality factors to assess:
*   HTML and CSS is valid
*   All links work
*   All pages load correctly
*   All forms work correctly


### Performance measured at webpagetest.org

<https://www.webpagetest.org>

The First View of the home page <http://floridaenergy.ufl.edu> requires around 4 seconds (tested over 3 runs).

There are likely opportunities to reduce bandwidth needed for image and JavaScript:
*   Images: 55% of requests, 43% of bytes
*   JS: 22% of requests, 45% of bytes


### Performance measured at pingdom.com

<https://tools.pingdom.com>

The home page <http://floridaenergy.ufl.edu> measured as follows:

*   Performance grade: B (82).  

*   Load time: 4.5 seconds 

*   Faster than 35% of tested sites.

*   Page size: 1.2MB

*   Distinct Requests needed to load the page: 61


### Testing whether the site works without JavaScript support

*   <http://www.wikihow.com/Disable-JavaScript>




Browser/OS compatibility: 
*   <https://www.browserling.com>
Chrome dev console device options


Currently a variety of purposes on home page; mobile-first redesign for a smaller screen might force clearer prioritization of content.


*  Flexible grid-based layout using relative sizing

*  Media queries to provide different CSS based on device properties such as viewport width and breakpoints

*  Dynamic resizing of images and video



HTML200 deck 9  -  testing responsivity, becoming responsive


### Mobile friendliness

Evaluation of current site's responsiveness

+<http://responsivedesignchecker.com/>

todo: see HTML200 slides about evaluating responsiveness/ mobile friendliness


### Performance (how quickly does it load?)

todo: Stats/numbers

todo: load times

todo: percentages


+<https://www.webpagetest.org>
 
<https://tools.pingdom.com/>

<https://developers.google.com/speed/pagespeed/insights/>


### Functionality (does it work?)

todo: find bugs and design-weaknesses.


### Ease of use (is it pleasant to use?

Needs more consistent thematic styling.

todo: find ease-of-use issues.


<!-- ==============================================================-->
## User research (who are expected users? What do they want to accomplish?)


<http://www.websitecriteria.com/website_writing_guide_before_you_begin_to_write/identify_the_intended_audience.html>


*   All audiences (listed below): they need to be able to contact other organizations and individuals, such as other participating Florida research universities and researchers.

*   All audiences (listed below): they need to learn about the Florida Energy Systems Consortium (FESC).

*   Energy experts at Florida universities; they need to collaborate.

*   University professors, and researchers at Florida universities.

*   Florida university students; they need to locate internship opportunities at energy companies and research departments.

*   Researchers at energy technology companies; they need to hire university interns, and find information to produce documents for public outreach.

*   Energy technology companies need to train and educate energy industry employees about obtaining, running, and maintaining new types of energy equipment.

*   People in the Florida Legislature, Executive Office of the Governor, and Florida’s Office of Energy in the Florida Department of Agriculture and Consumer Services; they need to find information about new energy approaches and technology, to decide what research to fund.

*   Energy experts within the State university system, technology incubators, industrial parks, and industry-driven research centers.

*   Energy systems analysts; they need resources for energy systems analysis.


<!-- ==============================================================-->
## Device support necessary

Support devices including the following:

*   Mobile phones, including iPhone 6 and iPhone 6 Plus

*   Laptopcs running older Internet Explorer, such as IE6

*   Tablets, such as 10" iPad


<!-- ==============================================================-->
## Recommendations

### Deliverables- each with description

Recommendations based on user research and modern best practices

nav redesign, alt text on images, optzm images for load time, rwd for multiple devices