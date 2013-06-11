PPC Personalify
===============

v.1.4

This is a plugin created to change html elements depending on referrer (such as contact phone or images) storing the rendered elements in cookies to show the same elements in new visits from the same browser.

Example: a google search returns an ad. User click on it and came into our page ppc personalified. Same user came again after several days through direct traffic but he'll always see the same personalified page.

## Requirements ##

- jquery 1.4.2+
- jquery.cookie ([http://github.com/carhartl/jquery-cookie](http://github.com/carhartl/jquery-cookie "jQuery Cookie"))
	
## Options ##
- class:				selector css
- original:				html original del elemento
- ppc:					html del elemento para ppc
- seo:					html del elemento para seo
- expires:				numero de días para la duracion de las cookies
- onCookieSave:			funcion callback para "afterCookieCreate"
	
## Methods ##
- clearCookies:			elimina las cookies generadas por el plugin
- isPPC:				devuelve true si el referrer trae el parametro adurl
- isGoogle:				devuelve true si el referrer es google
- hasGclid:				devuelve true si la url tiene el parametro gclid
- changeElements(var):	sustituye el html de los objetos seleccionados con la opcion clases por el html de la opcion final si 'var' es 'ppc'