title: Starting Lean Locally
previous: build-measure-learn-project-management
next: collaborating-partners

A common misconception when comes to applying **Lean** principles and ideas in an
organization and in our particular case, libraries, is that in order to start
seeing benefits the entire library must adopt all of these ideas by restructure
all of its existing departments, and reporting lines. You can start small with **Lean**
in various sub-divisions of the library. In my own experience,  library 
systems and cataloging are good
candidates to start transforming into a **Lean** learning library.


## Library Systems and Technology

    What tools are available to allow libraries to respond to the specific demands
    of their patrons? 

Our current catalogs and collections represent more than just physical or digital
objects but a rich source of relationships and information that although this
is currently and overwhelming encoding as [MARC21]() or other variants across the 
world. The theory and practice of lean libraries has driven a very iterative 
development cycle in my own research and development of the [Catalog Pull Platform]()
which is moving towards unlocking and expanding
this knowledge in our current library catalogs into the form of Linked Data

Linked Data is about representing information in RDF Triples i.e. 
**subject-predicate-object** like [BIBFRAME]() and [Schema.org](). 
[RDA]() and [MARC]() can 
also be reformulated into Linked Data triples as well.
Linked data is a way to structure information more consumable and interoperability with
other systems.

## Colorado College's Electronic Thesis Submission Application

![Colorado College Logo](/static/img/cc-logo.png)

This **Lean** example draws from my experiences of iteratively developing over the past six years a
web application for Colorado College's Seniors. This application allows Senior to self-submit their thesis and
any accompanying datasets, audio, or video into Colorado College's [digital repository][DIGITALCC]
as a permanent, stable intellectual property of both the college and the student. You 
can see the application at 
[https://discovery.coloradocollege.edu/etd/](https://discovery.coloradocollege.edu/etd/)


Every year, we go through a BML loop, starting with improving the existing application
during the fall **Build** phase, which moves into the **Measure** phase when student's start
submitting their theses with the **Learn** phase in finishing in the spring and summer. 

In the latest 2016-2017 academic year, the CCETD app added a new login process that used
the campus LDAP servers instead of what we were using before. 
The second major improvement was to the app's web forms. Instead of configuration files, 
we now uses RDF graphs to represent the facts about the
college and the relationships between departments and faculty that we can leverage in
other uses in the library, like enhancing our digital repository and online catalog.

Colorado College's ETD application's open source code repository is 
available at [https://github.com/Tutt-Library/ccetd](https://github.com/Tutt-Library/ccetd).
[DIGITALCC]: https://digitalccbeta.coloradocollege.edu
