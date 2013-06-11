PPC personalify
===============

PPC Personalify

Requisitos:
- jquery (Powered by Captain Obvious)
- jquery.cookie
	
Opciones:
- clases:				array con las clases en las que se va a ejecutar la personalizacion
- original:				html original del elemento
- final:				html final del elemento
- duracion (opcional):	numero de dÃ­as para la duracion de las cookies
- onCookieSave:			funcion callback para "afterCookieCreate"

Variables:
- ved:					tipo de resultado en la busqueda en google
- referrer:				guarda el tipo de referrer
- search_string:		cadena de busqueda en google
- opc:					opciones del plugin
- opc_default:			opciones por defecto del plugin
	
Metodos:
- limpiaCookies:		elimina las cookies generadas por el plugin
- isPPC:				devuelve true si el referrer trae el parametro adurl
- isGoogle:				devuelve true si el referrer es google
- hasGclid:				devuelve true si la url tiene el parametro gclid
- changeElements(var):	sustituye el html de los objetos seleccionados con la opcion clases por el html de la opcion final si 'var' es 'ppc'
- getRefParams(url):	devuelve un objeto con todos los parÃ¡metros de la 'url'. Si no se pasa una url, devuelve los parametros del referrer.
- unvedlievable:		MAGIC! devuelve el tipo de click en los resultados de busqueda si esta disponible :D EPIC FUCK YEAH
- cookieCreate:			Guarda cookies
