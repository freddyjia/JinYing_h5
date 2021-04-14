export function FullScreenJS() { 

}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

FullScreenJS.launchFullScreen = function(){
    console.log("##### launchFullScreen");
    var doc = window.document;
    var element = doc.documentElement;
    if (element.requestFullscreen) {

        console.log("11111");
        element.requestFullscreen();
     
      } else if (element.mozRequestFullScreen) {
        console.log("22222");
        element.mozRequestFullScreen();
     
      } else if (element.webkitRequestFullscreen) {
        console.log("33333");
        element.webkitRequestFullscreen();
     
      } else if (element.msRequestFullscreen) {
        console.log("44444");
        element.msRequestFullscreen();
     
      }
}

FullScreenJS.cancelFullScreen = function(){
    console.log("##### cancelFullScreen");

    var doc = window.document;
    var element = doc.documentElement;
    if (document.exitFullscreen) {
       
        document.exitFullscreen();
     
      } else if (document.mozCancelFullScreen) {
     
        document.mozCancelFullScreen();
     
      } else if (document.webkitExitFullscreen) {
     
        document.webkitExitFullscreen();
     
     }
}

FullScreenJS.windowScroll = function(){
    window.scrollTo(0,1);
}