/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
   "use strict";

   ////////////////////////////////////////////////////
   // Mobile Menu Js
   $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fal fa-plus"></i>'],
   });

   // Header Middle Logo
   var minWidth = window.matchMedia("(min-width: 992px)");
   if ($(".move_logo_wrap").length > 0 && minWidth) {
      // Function to dynamically move .header-logo to the middle of top-level li elements
      function moveLogoToMiddle() {
         var container = document.querySelector(".move_logo_wrap");
         var mainMenu = container.querySelector(".mainmenu");
         var siteLogo = container.querySelector(".header-logo");
         var listItems = Array.from(mainMenu.querySelectorAll("li"));

         // Filter out child li elements
         var topLevelListItems = listItems.filter(function (item) {
            return item.parentElement === mainMenu.querySelector("ul");
         });

         var middleIndex = Math.floor(topLevelListItems.length / 2);

         if (topLevelListItems.length > 0) {
            // Calculate the middle index

            // Insert the siteLogo in the middle of top-level list items
            topLevelListItems[middleIndex].insertAdjacentElement("beforebegin", siteLogo);
         }
      }

      // windowOn.on("load resize", function () {
      if (minWidth) {
         // Call the function when the document is fully loaded
         window.addEventListener("load", moveLogoToMiddle);
      }
   }
})(jQuery);
