(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", "#sidemenu_button", function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidemenu"));  
        });
        
        
        
        
        $(document).on("click", "#mb_page", function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $(document).on("click", "#profile_page", function(evt)
        {
         activate_subpage("#profile_page"); 
        });
        $(document).on("click", "#iom_page", function(evt)
        {
         activate_subpage("#IOM_page"); 
        });
        $(document).on("click", "#li_salat", function(evt)
        {
         activate_subpage("#salat_linkPage"); 
        });
        $(document).on("click", "#ib_page", function(evt)
        {
         activate_subpage("#ilmBase_page"); 
        });
        $(document).on("click", ".uib_w_54", function(evt)
        {
         activate_subpage("#weekly_salat_graph"); 
        });
        $(document).on("click", "#btn_weeklySalat", function(evt)
        {
         activate_subpage("#weekly_salat_graph"); 
        });
        $(document).on("click", "#btn_quranRecitaition", function(evt)
        {
         activate_subpage("#quran_meter"); 
        });
        $(document).on("click", "#chat_page", function(evt)
        {
         activate_subpage("#buddyChat_page"); 
        });
}
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
