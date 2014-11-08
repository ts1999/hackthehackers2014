hackthehackers2014
==================

repo for hack the hackers 2014 hackathon

Current status:
	Unable to access anything related to filesystem from content extension, so, placeholders for now.
	May have content extension rewrite urls to be externalized, and then handle that from another extension.
	
	Firefox profile bundles work.

Features:
	Creates semi-temporary firefox profile, using the -profile parameter from native firefox binary, using external helper program.
	Intercepts navigation to different pages, and redirects to external instances of firefox.
	
	Each time a profile is activated, files may be wiped and regenerated, to anonymize browsing.
	
	Connects to facebook over tor
	