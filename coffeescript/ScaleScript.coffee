init = ->
	htmlTag = document.getElementsByTagName("html")[0]
	htmlTagStyle = htmlTag.style

	htmlTagStyle.margin = "0"
	htmlTagStyle.padding = "0"
	htmlTagStyle.width = "100%"
	htmlTagStyle.height = "100%"
	htmlTagStyle.overflow = "hidden"

	bodyTag = document.body
	bodyTagStyle = bodyTag.style

	bodyTagStyle.width = "100%"
	bodyTagStyle.height = "auto"
	bodyTagStyle.margin = "0"
	bodyTagStyle.padding = "0"
	bodyTagStyle.transformOrigin = "left top 0"

	null

resizeInit = (W, H, Limitless, Moodle) -> 
	
	parentWindow = window.parent.window
	parentWindow.onresize = ->
		resize(W, H, Limitless, Moodle)
		null

	parentWindow.onload = ->
		resize(W, H, Limitless, Moodle)
		null

	window.setInterval () ->

		if Moodle
			lheight = window.parent.document.getElementById('scorm_content').offsetHeight

			lwidth = window.parent.document.getElementById('scorm_content').offsetWidth
		else
			lheight = window.innerHeight
			lwidth = window.innerWidth

		if Math.min(lheight/H, lwidth/W, 1) != window.zoomScale
			resize(W, H, Limitless, Moodle)
        
		null
	, 2000


	null

resize = (W, H, Limitless, Moodle) ->

	if Moodle
		height = window.parent.document.getElementById("scorm_content").offsetHeight
		width = window.parent.document.getElementById("scorm_content").offsetWidth
	else
		height = window.innerHeight;
		width = window.innerWidth;

	scale = if Limitless then Math.min(height/H,width/W) else Math.min(height/H,width/W, 1)

	document.body.style['-webkit-transform'] = 'scale('+scale+')';
	document.body.style['-ms-transform'] = 'scale('+scale+')';
	document.body.style['-moz-transform'] = 'scale('+scale+')';
	document.body.style['transform'] = 'scale('+scale+')';       
	document.body.style.width = ((width/scale).toString()+"px");
	document.body.style.height =  ((height/scale).toString()+"px");
	document.getElementsByTagName('html')[0].style.width = width+"px";
	document.getElementsByTagName('html')[0].style.height = height+"px";
	window.zoomScale = scale;

	null

init()