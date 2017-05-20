class ScaleScript{

  constructor(){
    var htmlStyle:any = document.getElementsByTagName("html")[0].style;
    var bodyStyle:any = document.body.style;

    htmlStyle.margin = "0";
    htmlStyle.padding = "0";
    htmlStyle.width = "100%";
    htmlStyle.height = "100%";
    htmlStyle.overflow = "hidden";

    bodyStyle.width = "100%";
    bodyStyle.height = "auto";
    bodyStyle.margin = "0";
    bodyStyle.padding = "0";
    bodyStyle.transformOrigin = "left top 0";


  }

  static resizeInit(W,H, Limitless,moodle):void {

    window.parent.window.onresize = window.parent.window.onload = function(){ ScaleScript.resize(W,H,Limitless,moodle)}

    window.setInterval(function(){
          if(moodle){
                var lheight = window.parent.document.getElementById("scorm_content").offsetHeight;
                var lwidth = window.parent.document.getElementById("scorm_content").offsetWidth;
          } else {
                var lheight = window.innerHeight;
                var lwidth = window.innerWidth;
          }

          if(Math.min(lheight/H,lwidth/W, 1) != window.zoomScale)
                ScaleScript.resize(W,H, Limitless,moodle);
    }, 2000);

  }

  static resize(W,H, Limitless,moodle):void{

    if(moodle){

            height = window.parent.document.getElementById("scorm_content").offsetHeight,
            width = window.parent.document.getElementById("scorm_content").offsetWidth;
      } else {
            height = window.innerHeight,
            width = window.innerWidth;
      }

      scale = (Limitless ? Math.min(height/H,width/W):Math.min(height/H,width/W, 1));
      //scale = Math.min(height/H,width/W, 1);
      document.body.style['-webkit-transform'] = 'scale('+scale+')';
      document.body.style['-ms-transform'] = 'scale('+scale+')';
      document.body.style['-moz-transform'] = 'scale('+scale+')';
      document.body.style['transform'] = 'scale('+scale+')';       
      document.body.style.width = ((width/scale).toString()+"px");
      document.body.style.height =  ((height/scale).toString()+"px");
      document.getElementsByTagName('html')[0].style.width = width+"px";
      document.getElementsByTagName('html')[0].style.height = height+"px";
      window.zoomScale = scale;

  }


}