PPC Personalify
===============

v.1.6

This is a plugin created to change html elements depending on referrer (such as contact phone or images) storing the rendered elements in cookies to show the same elements in new visits from the same browser.

Example: a google search returns an ad. User click on it and came into our page ppc personalified. Same user came again after several days through direct traffic but he'll always see the same personalified page.

## Requirements ##

- jquery 1.4.2+
- jquery.cookie ([http://github.com/carhartl/jquery-cookie](http://github.com/carhartl/jquery-cookie "jQuery Cookie"))
	
## Options ##
- direct:				html in default (direct) case
- ppc:					html in ppc case
- seo:					html in seo case
- expires:				days to expire
- onCookieSave:			function to execute after cookie create (not on refresh)
	
## Methods ##
- clearCookies:			delete generated cookies