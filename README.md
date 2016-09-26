NetSec Website
==============

Welcome to the NetSec Website framework. The entire site is built using a program
called Jekyll. This produces a static website that originated from fairly easy to
modify and updated configuration files. These files will be documented bellow.

For information on some of the internals of how this theme was setup, you can
still reference the Agency Theme for Jekyll. This whole site is a fork of that
project with lots of automation pumped into it and plenty of css tweaks for an
imporved experience.

Building
--------

To build the site you will need to run `jekyll b` inside this directory. It will
by default output to /Netsec inside this directory. If you want to override where
the site goes or the baseurl you will want to add `--baseurl $DIR` or `-d $DIR`.
Baseurl modifies what the website should expect its root url to be. For instance,
the default expects that NetSec will be moved to an existing website and will expect
the webroot to be a directory above (all urls will have /NetSec in front). The
`-d` changes the output directory (not the baseurl!) that the website will be
generated to.

Default option:
```
jekyll b
```

Configuration
-------------

__Team__

If you would like to modify a team members info then please see team.yml

Team members can have an image, name, description, and social links (3 at most suggested)
The social links can have virtually any icon for their links, reference font awesome
for a list of available images available. A good default is "link" if you are unsure.
(fa- is added automatically, so don't add it yourself)

[Icons for social links](http://fontawesome.io/icons/#brand)

To add an image for yourself, please append a png image with a unique name to
the img/team folder. 0 is reserved for those without an image.

__Projects__

Projects are fairly new for configuration. Currently they only support name and
description, but soon I will have the ability to add as many project links
and other features as requested.

__Template__

Template configuration allows you to change the default fonts used in the project
and which colors will be used for which sections of the website. This is almost
100% inherited from Agency but I have made it so you can use rgb, rgba, common name (ex: red),
and hex value. Just use valid css color values for all entries. Use quotes if you
are using any characters that might be considered special in yml.
