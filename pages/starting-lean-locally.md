title: Starting Lean Locally
previous: build-measure-learn-project-management
next: collaborating-partners

A common misconception when comes to applying **Lean** principles and ideas in an
organization and in our particular case, libraries, is that in order to start
seeing benefits the entire library must adopt all of these ideas by restructure
all of its existing departments, and reporting lines. You can start small with **Lean**
in various sub-divisions of the library with my experiencing being with library 
systems and cataloging being good
candidates to start transforming into a **Lean** learning library.


## Library Systems and Technology

    What tools are available to allow libraries to respond to the specific demands
    of their patrons? 

Our current catalogs and collections represent more than just physical or digital
objects but a rich source of relationships and information that although this
is currently and overwhelming encoding as [MARC21]() or other variants across the 
world. The theory and practice of lean libraries has driven a very iterative 
development cycle in my own research and work towards unlocking and expanding
this knowledge in our current library catalogs into the form of Linked Data.


## RDF or Library Linked Data
Libraries and cultural heritage organizations are shifting from MARC21 and XML 
metadata standards to Linked-Data vocabularies. Library Linked Data is an 
international effort to bring machine-readable data to the web. 

Based on RDF (Resource Description Framework) graphs, Library Linked Data is 
made up a series of statements, called triples, that take the form of 
**subject** - **predicate** - **object**.

<img alt="Triples Illustration" src="/static/img/triple.svg">

Linked Data is about representing information in RDF Triples i.e. 
**subject-predicate-object** like [BIBFRAME]() and [Schema.org](). 
[RDA]() and [MARC]() can 
also be reformulated into Linked Data triples as well.
Linked data is a way to structure information more consumable and  with
other systems.

I personally believe we have an increasingly important role as a respected authority regarding
the local intellectual and scholarly output of creative works by our communities. Books, blog posts,
social network postings, photos and video that is being consumed and produced by 
our communities. Through linked-data we now become the local and likely regional and national
authority and verification of People, Places, and objects being created and produced by
our patrons and staff.

## Colorado College's Electronic Thesis Submission Application

![Colorado College Logo](/static/img/cc-logo.png)

While it is great if your library's administration wants a radical **Lean** make-over
of the library, you can start seeing modest improvements by applying as much
or as little of these **Lean** ideas in your department's projects and services. To 
illustrate, I will draw from my experiences of iteratively developing of the past six years an
web application for Colorado College's Seniors to self-submit their thesis and
any accompanying datasets, audio, or video fill to Colorado College's [digital repository][DIGITALCC]
as a permanent, stable intellectual property of the college and the student.

Every year, we go through a BML loop, starting with improving the existing application
during the fall **Build** phase which moves into the **Measure** phase when student's start
submitting their theses in the fall and the **Measure** phase continues to the spring 
semester when we have the most usage by seniors self-submitting their work as the academic
year end approaches. As the academic year winds down we start the **Learn** phase, when
we reflect on the experiences of the past year both the successes and failures which 
then drives the **Pull** requirements for the next year's BML loop.

In the latest 2016-2017 academic year, the CCETD app added a new login process that used
the campus LDAP servers instead of what we were using before. Which I will show
now by clicking on [https://discovery.coloradocollege.edu/etd/](https://discovery.coloradocollege.edu/etd/)

The second major improvement
was to change how department specific information like faculty lists would be loaded into
the app's web forms. Instead of configuration files, we used RDF graphs to represent the
college and the relationships between departments and faculty that we can leverage in
other uses in the library, like enhancing our digital repository and online catalog.

### Lessons from CCETD
Three lessons from my experiences developing the CCETD

<h4>Start Small</h4>
Your first project doesn't have to big.

<h4>Iterate Often</h4> Build upon your small project and incremental add functionality
       when it is required by your sources of pull.

<h4>Continual Feedback</h4> Allways talk and communicate with the users of your product
or service.

Colorado College's ETD application's open source code repository is 
available at [https://github.com/Tutt-Library/ccetd](https://github.com/Tutt-Library/ccetd).
[DIGITALCC]: https://digitalccbeta.coloradocollege.edu
