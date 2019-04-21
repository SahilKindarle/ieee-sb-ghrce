/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery( document ).ready(function($){


    var member_height = $('#sc_our_team.grid_circles .sc_team_member').width();
    $('#sc_our_team.grid_circles .sc_team_member').each(function(){
        $(this).css({
            height: member_height
        });
    });    

    var member_height = $('#sc_our_team.grid_circles2 .sc_team_member').width();
    $('#sc_our_team.grid_circles2 .sc_team_member').each(function(){
        $(this).css({
            height: member_height
        });
    });    
    
    $(document).click( function(event) {
        if( $('#sc_our_team_lightbox').hasClass('show') ){
            $('.sc_our_team_lightbox').slideUp(300, function(){
                $('#sc_our_team_lightbox').fadeOut(300);
            });
            $('#sc_our_team_lightbox').removeClass('show');
        }	
    });
    
    $('.sc_team_single_popup').click( function(e){
        
        var item = null;
        
        if( $(this).hasClass('sc_team_member') ){
            item = $(this);
        }else{
            item = $(this).parents('.sc_team_member');
        }
        
        
        build_popup( item );
        e.stopPropagation();
        e.preventDefault();
        
        
    });
    
    function build_popup( item ){
        
        $('.sc_our_team_lightbox .name').html($('.sc_team_member_name a', item).html());
        $('.sc_our_team_lightbox .skills').html($('.sc_team_skills', item).html());
        $('.sc_our_team_lightbox .sc-content').html($('.sc_team_content', item).html());
        $('.sc_our_team_lightbox .social').html($('.icons', item).html());
        $('.sc_our_team_lightbox .title').html($('.sc_team_member_jobtitle', item).html());
        $('.sc_our_team_lightbox .image').attr('src', $('.wp-post-image', item).attr('src'));


        $('#sc_our_team_lightbox').fadeIn(350, function () {
            $('.sc_our_team_lightbox').slideDown(350, function () {
                $('#sc_our_team_lightbox').addClass('show');
            });
        });
        
    }
    
    $('#sc_our_team .sc_team_member').hover(function(){
        $('.sc_team_member_overlay',this).stop(true,false).fadeIn(440);
        $('.wp-post-image',this).addClass('zoomIn');
        $('.sc_team_more',this).addClass('show');
        
    },function(){
       $('.sc_team_member_overlay',this).stop(true,false).fadeOut(440)       
       $('.wp-post-image',this).removeClass('zoomIn');
       $('.sc_team_more',this).removeClass('show');
       
    });

});
