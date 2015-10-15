(function() {
  var banner = document.getElementById("bitnami-banner");
  var closeButton = document.getElementById("bitnami-close-banner-button");

  var toggleCloseButton = function toggleCloseButton(open) {
   if (closeButton){
      if(open && banner && banner.style.display != "none") {
        closeButton.style.display="block";
      } else {
        closeButton.style.display="none";
      }
   }
    return false;
  };
  var closeBanner = function closeBanner(open) {
    if (banner) {
      banner.style.display = "none";
    }
    return false;
  }; 

  banner.onmouseover = function() { return toggleCloseButton(1); };
  banner.onmouseout = function() { return toggleCloseButton(0); }; 
  closeButton.onclick = closeBanner;
}());
