# Site Redesign multi-week project for UW HTML300 class

## Week 1 Assignment: Write proposal for site redesign

From <https://canvas.uw.edu/courses/1188625/assignments/4210866>

This is the first assignment of our larger course project. 
You will put together a proposal for the responsive redesign of <http://floridaenergy.ufl.edu>.

Done.  Proposal: <https://github.com/mikeshhoffman/siteredesign/blob/master/docs/proposal.md>

This proposal should include: 

*   objectives/purpose of the redesign
*   state of the current site
    *   accessibility audit
    *   mobile friendliness
    *   performance (how quickly does it load?)
    *   functionality (does it work?)
    *   ease of use (is it pleasant to use?
*   user research (who are expected users? What do they want to accomplish?)
*   device support necessary
*   recommendations
    *   deliverables- each with description & acceptance terms

Use the tools and strategies we've learned so far to do this research. 
You will not be responsible for completing all of your recommendations for the redesign.
This will be a document to demonstrate your understanding of the domain.

*   done: Set up a Github repository and [Asana board for this project](https://app.asana.com/0/622197888656195/622197888656197). 
*   done: Create a ticket in Asana for this work item/assignment, with necessary details, steps, links to resources, etc. 
*   done: Invite cherimallen@... and pakk@... to join your Asana team so we can view your board. 

We will be working on the same Github repository for this entire project, over several assignments.

done: Your proposal document should be uploaded to the Github repo, inside a "docs" directory. 
Submit a link to the repo.
 
Grading: 
*   Created an Asana project for redesign, and detailed ticket for this task/assigment -- 2 points
*   Proposal includes evaluation of current site's responsiveness, performance, and accessibility -- 3 points
*   Proposal includes recommendations based on user research and modern best practices -- 3 points


## Week 2 Assignment: Initial reimplementation of top-level pages

From <https://canvas.uw.edu/courses/1188625/assignments/4210867?module_item_id=8367432>

*   Create an Asana ticket for this week's assignment.

*   Decide which pages of http://floridaenergy.ufl.edu/ you want to rebuild. One should be the homepage, the others should be pages that are available from the top level navigation (like http://floridaenergy.ufl.edu/energy-education/ or http://floridaenergy.ufl.edu/public-outreach/). 

Chosen pages: Home, Public Outreach, Site Map.

*   Create html files in your final project repo, one for each page you'll build. Homepage should be named index.html. Each file needs a valid structure. Start building out the content in the body, as you see fit.

Initial stub pages uploaded/published: <https://mikeshhoffman.github.io/siteredesign/>

*   Add meta tags for rich social media sharing to the head of each file.

Done.

*   Publish the site to Github Pages. I know, it's not very impressive yet, but we want to get the live URL.

Done.

*   Using that live URL, generate share button for at least one social media platform (Twitter, Facebook, or Tumblr). Insert the button in the body of index.html. It's ok if it's sort of randomly placed right now. After you build out the structure of the page more completely, you can move it. We just want it generated now so it's ready.

TBD

*   Submit a link to the live site for this assignment.

Will submit: <https://mikeshhoffman.github.io/siteredesign/>

Grading:
*   3 valid HTML files added to project repo     	 2
*   All necessary social media meta tags in head of each HTML file  	 3
*   At least one social media share button generated and used correctly  	 3
*   Some page content built out	 2


## Week 3 Assignment: Design Plan, Finish Base HTML

From <https://canvas.uw.edu/courses/1188625/assignments/4210869>

Planning: 

*   Create an Asana ticket for this week's assignment.

URL: https://app.asana.com/0/622197888656195/646572170293771

*   Plan your site’s design: colors.

*   Plan your site’s design: typography.

*   Plan your site’s design: layout.

*   Plan what design components you’ll need.
    Some design components will be on every page, such as navigation and footer.
    Some design components will be a reused design but with different contents, like an article or form.

*   Come up with a visual design plan for each module, and overall pages (combinations of modules). 

*   In the "docs" folder of your repo, add a file with a writeup of your design plan (.pdf or MarkDown format).
    Your design plan can include notes on colors, typography, layout, and modules needed. 
    Include (in that file or as their own files) screenshots of at least 4 website designs you find inspiring.
    Include any other supporting documents that will help you in styling (mocks and sketches are great, but not required).

*   No need to write CSS yet.
    Focus your energy on thoughtfully planning your design.
    You'll build your design next week.
    
    
Coding:

*   Finish up the site's base HTML, with the new modular designs in mind.
    As you style, the HTML may change, but the HTML should be functional, valid, and as complete as possible after this assignment.
    
    
## Week 4 Assignment: 

From <https://canvas.uw.edu/courses/1188625/assignments/4210870>
    
Continue the FESC Redesign Project.

Start coding the styles you planned in the previous assignment.
Write Sass, use Koala to compile it to CSS.

Commit and push all of the files (.scss, .css, .css.map) to Github so they can be reviewed.

You'll have time next week to finish styling, but try to get it about 75% done this week.

Use at least 2 Sass features (variables, mixins, nesting).

Grading:
*   Write functional, valid Sass: 4
*   Use at least 2 Sass features (variables, mixins, nesting): 3
*   Style of live site is visibly improved: 1


## Week 7 Assignment: Google Charts

Add two charts to redesign project, using the data provided in the .txt files.

These charts can be added to an existing page in your site where they would make sense, or you can add a new page (/data maybe?) to hold the charts.
If you add an additional page, it should share basic design with the rest of the site, e.g. header, nav, footer.
  
Select the chart type you feel best suits data. Use at least 3 configuration options to customize charts' appearances.


### Chart of annual renewable energy production in Florida

Add a chart that shows *annual renewable energy production in Florida*.
"renewable-energy-production-florida.txt"

That provided text file contains two columns: the year, like a key; and the BTU count, a value:

Year,Billion Btu
2015,234192
2014,226863
2013,229666
...
1962,35826
1961,34417
1960,35680

The data is from <https://www.eia.gov/opendata/qb.php?sdid=SEDS.REPRB.FL.A>.


### Chart of annual total electricity consumption in Florida

Add a chart that shows *annual total electricity consumption in Florida*.
"electricity-total-consumption-florida.txt"

That provided text file contains two columns: the year, like a key; and the BTU count, a value:

Year,Billion Btu
2016,804283
2015,803865
2014,771379
...
1962,71216
1961,62705
1960,57344

The data is from <https://www.eia.gov/opendata/qb.php?sdid=SEDS.ESTCB.FL.A>.


### Charting Library Used

I used the Google Charts charting library: https://developers.google.com/chart/


I used the Line Chart type for both charts, because there are around 57 data points -- too many data points for a bar chart.
I want to see an even plotted graph line like stock values.

<https://developers.google.com/chart/interactive/docs/gallery/linechart>






