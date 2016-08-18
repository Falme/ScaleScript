(function(){

      document.getElementsByTagName("html")[0].style.margin = "0";
      document.getElementsByTagName("html")[0].style.padding = "0";
      document.getElementsByTagName("html")[0].style.width = "100%";
      document.getElementsByTagName("html")[0].style.height = "100%";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";

      document.body.style.width = "100%";
      document.body.style.height = "auto";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.transformOrigin = "left top 0";

})();

function resizeInit(W,H, Limitless,moodle){

      window.parent.window.onresize=function(){resize(W,H, Limitless,moodle)};

      window.parent.window.onload = function() {resize(W,H, Limitless,moodle);}

      window.setInterval(function(){
            if(moodle){
                  var lheight = window.parent.document.getElementById("scorm_content").offsetHeight;
                  var lwidth = window.parent.document.getElementById("scorm_content").offsetWidth;
            } else {
                  var lheight = window.innerHeight;
                  var lwidth = window.innerWidth;
            }

            if(Math.min(lheight/H,lwidth/W, 1) != window.zoomScale)
                  resize(W,H, Limitless,moodle);
      }, 2000);

}


function resize(W,H, Limitless,moodle){

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

