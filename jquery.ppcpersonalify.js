(function(jQuery) {
	jQuery.unvedlievable = function(options,callback){
		if(typeof(options)=='function'){
			var t = callback;
			callback = options;
			options = t;
		}
		jQuery.unvedlievable.opc = jQuery.extend( jQuery.unvedlievable.opc_default, options );
		var ved = jQuery.unvedlievable.getRefParams(jQuery.unvedlievable.opc.url).ved;
		if(ved){
			for(i in jQuery.unvedlievable.veds()){
				if(ved.indexOf(i)!=-1){
					return jQuery.unvedlievable.returning(callback,jQuery.unvedlievable.veds()[i]);
				}
			}
			return jQuery.unvedlievable.returning(callback,'No VED transcription found');
		}
		return jQuery.unvedlievable.returning(callback,'No VED param found');
	};
	jQuery.unvedlievable.returning = function(callback,data){
		if(callback){
			callback(data);
		} else {
			return data;
		}
	};
	jQuery.unvedlievable.opc;
	
	jQuery.unvedlievable.opc_default = {
		url:document.referrer,
		texts:{
			organic_search:						'Organic search',
			news_onebox_link:					'News OneBox (link)',
			news_onebox_image:					'News OneBox (image)',
			image_onebox:						'Image OneBox',
			video_onebox_link:					'Video OneBox (link)',
			video_onebox_image:					'Video OneBox (image)',
			organic_search_sitelink:			'Organic search - Sitelink',
			knowledge_graph_image_leading:		'Knowledge Graph image (leading)',
			knowledge_graph_image_nonleading:	'Knowledge Graph image (non-leading)'
		}
	};
	
	jQuery.unvedlievable.veds = function(){
		return {
			QFj:	jQuery.unvedlievable.opc.texts.organic_search,
			QqQlw:	jQuery.unvedlievable.opc.texts.news_onebox_link,
			Qpwl:	jQuery.unvedlievable.opc.texts.news_onebox_image,
			Q9QEw:	jQuery.unvedlievable.opc.texts.image_onebox,
			Qtwlw:	jQuery.unvedlievable.opc.texts.video_onebox_link,
			QuAlw:	jQuery.unvedlievable.opc.texts.video_onebox_image,
			Qjb:	jQuery.unvedlievable.opc.texts.organic_search_sitelink,
			BEPwd:	jQuery.unvedlievable.opc.texts.knowledge_graph_image_leading,
			BEP4d:	jQuery.unvedlievable.opc.texts.knowledge_graph_image_nonleading
		};
	};
	jQuery.unvedlievable.getRefParams = function(url){
		if(!url) url = document.referrer;
		var url_params = new Object();
		if(typeof(url.split('?')[1])=='string'){
			for (i in url.split('?')[1].split('&')){
				if(typeof(url.split('?')[1].split('&')[i])=='string'){
					url_params[url.split('?')[1].split('&')[i].split('=')[0]] = url.split('?')[1].split('&')[i].split('=')[1];
				}
			}
		}
		return url_params;
	};
})(jQuery);