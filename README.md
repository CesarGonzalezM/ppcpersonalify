PPC Personalify
===============

v.1.4

This is a plugin created to change html elements depending on referrer (such as contact phone or images) storing the rendered elements in cookies to show the same elements in new visits from the same browser.

Example: a google search returns an ad. User click on it and came into our page ppc personalified. Same user came again after several days through direct traffic but he'll always see the same personalified page.

## Requirements ##

- jquery 1.4.2+
- jquery.cookie (http://github.com/carhartl/jquery-cookie)
	
## Options ##
- clases:				array con las clases en las que se va a ejecutar la personalizacion
- original:				html original del elemento
- final:				html final del elemento
- duracion (opcional):	numero de días para la duracion de las cookies
- onCookieSave:			funcion callback para "afterCookieCreate"

## Variables ##
- ved:					tipo de resultado en la busqueda en google
- referrer:				guarda el tipo de referrer
- search_string:		cadena de busqueda en google
- opc:					opciones del plugin
- opc_default:			opciones por defecto del plugin
	
## Methods ##
- clearCookies:			elimina las cookies generadas por el plugin
- isPPC:				devuelve true si el referrer trae el parametro adurl
- isGoogle:				devuelve true si el referrer es google
- hasGclid:				devuelve true si la url tiene el parametro gclid
- changeElements(var):	sustituye el html de los objetos seleccionados con la opcion clases por el html de la opcion final si 'var' es 'ppc'
- getRefParams(url):	devuelve un objeto con todos los parametros de la 'url'. Si no se pasa una url, devuelve los parametros del referrer.
- unvedlievable:		MAGIC! devuelve el tipo de click en los resultados de busqueda si esta disponible :D EPIC FUCK YEAH
- cookieCreate:			Guarda cookies
