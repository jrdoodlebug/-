//run the function whenever the page loads
window.onload = function() {
    Initialize();
    setInterval(doMouseStuff, INTERVAL);
  };

  document.body.style.cursor = 'none';
  
  
  function Initialize() {
    //declare global variables
    MOUSE_DOWN = false;
    MOUSE_IN = true;
    MOUSE_X = 0;
    MOUSE_Y = 0;
    INTERVAL = 24;
  
    //check which browser we're in.
    //NOTE: the "pointer-events: none;" in the CSS doesn't work in IE before 11.
    //So you'll just be clicking on your picture
    if (document.all) BROWSER = "IE";
    else if (window.opera) BROWSER = "Opera";
    else if (NavCheck("Chrome")) BROWSER = "Chrome";
    else if (NavCheck("Safari")) BROWSER = "Safari";
    else if (NavCheck("Gecko")) BROWSER = "Firefox";
  
    //set mouse events
    document.onmouseout = function() {
      MOUSE_IN = false;
    };
    document.onmouseover = function() {
      MOUSE_IN = true;
    };
    document.onmouseup = function() {
      MOUSE_DOWN = false;
    };
    document.onmousedown = function() {
      MOUSE_DOWN = true;
    };
    document.onmousemove = CaptureMouse;
    document.onscroll = CaptureMouse;
    document.onmousewheel = CaptureMouse;
  
    //check browser
    function NavCheck(check) {
      return navigator.userAgent.indexOf(check) != -1;
    }
  }
  
  //determine browser and set mouse tracking accordingly
  function CaptureMouse(e) {
    if (BROWSER == "IE") {
      SCROLL_X = document.documentElement.scrollLeft;
      SCROLL_Y = document.documentElement.scrollTop;
      MOUSE_X = window.event.clientX + SCROLL_X;
      MOUSE_Y = window.event.clientY + SCROLL_Y;
    } else {
      SCROLL_X = window.pageXOffset;
      SCROLL_Y = window.pageYOffset;
      MOUSE_X = e.pageX;
      MOUSE_Y = e.pageY;
    }
    return true;
  }
  
  //position the cursor image on the current mouse position
  function doMouseStuff() {
    document.getElementById("cursor").style.left = MOUSE_X + "px";
    document.getElementById("cursor").style.top = MOUSE_Y + "px";
  }