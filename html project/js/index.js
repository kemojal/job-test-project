$(document).on('ready', function () {
    // getting the windows width and height
    const size  = $(window);
    let body  = $('body');
    
    
    /** toggle popover menu */
    if( size.width() < 1200){
        let popover  =  $('.popover-content');
        let pop_close_btn =  $('.job-list-bt-close')
        // show JOB LIST POPOVER menu
        $(".popover-nav-item").click(()=>{
        popover.addClass("push");
        pop_close_btn.css({
                zIndex: 2,
                opacity: 1
            });
        });
        // hide JOB LIST POPOVER menu
        pop_close_btn.click(
            ()=>{
                popover.removeClass("push");
                $('.job-list-bt-close').css({
                    zIndex: 0,
                    opacity: 0
                });
            }
        )
        $('body').css('overflow-x', 'hidden');

    }

    // toggle popover tabs
    let tab_list = $('.popover-tabs li');
    $(tab_list).click(
        function(){
            //tab_list.addClass('active');
            $(this).addClass('active')
            .siblings('.active')
            .removeClass('active'); 

             // show and hide current and future jobs
            if($(this).attr('id') =='current-job-btn'){
                console.log('current')
                $('#future-job').css('display', 'none');
                $('#current-job').css('display', 'inline');
            }else
            if($(this).attr('id') =='future-job-btn '){
                console.log('future')
                $('ul#future-job').css('display', 'inline');
                $('ul#current-job').css('display', 'none');
            }
        }
    )

    /** toggle job details checkbox */
    let checkbox = $('.checkbox-td .checkbox-icon');
    let  all_checkbox = $('.tabs-content .checkbox-container .checkbox-icon');
    let full_checkbox = $('.checkbox-icon');
    let btn_container = $('.btn-container');
    let m_btnjobSubmit = $('.submit-btn');


    if ($(this).hasClass('check')) {
        btn_container.show();
    }else{
        btn_container.hide();
    }

   // btn_container.hide();
   checkbox.click(function(){
    $(this).toggleClass('check');
    btn_container.show();

    if ($(this).hasClass('check')) {
        btn_container.show();
        $('.customcheckbox').addClass('check')
    }else{
        btn_container.hide();
        $('.customcheckbox').removeClass('check')
    }
    
   })




   //handle cart job list delete
   $(document).on("click", ".add-delete", function(){
    $(this).parent().parent().parent().parent().parent().parent().parent().remove();
    numAddedToCart -= 1;
        $('.num-added-to-cart').text(numAddedToCart.toString())
   })

   $(document).on("click", ".add-delete-all", function(){
    $('ul.job-container').empty();
    checkbox.removeClass('check');
    btn_container.hide();
    numAddedToCart  = 0;
    $('.num-added-to-cart').text(numAddedToCart.toString())
   })
   
   // toggle sign in menu
   let mobile_menu  = $('.mobile-menu');
   let sign_in_menu  = $('.m-sign');

   mobile_menu.click(()=>{
      sign_in_menu.addClass('active')
   });
   $('.close-menu').click(
       ()=>{
        sign_in_menu.removeClass('active')
       }
   )
  

   // toggle search popover
   $('.search-bar-container').click(
       () =>{
           $('.search-popover-container').addClass('current');
       }
   );

   $('.mobile-popover-close').click(
       ()=>{
        $('.search-popover-container').removeClass('current');  
       }
   )

   $('.btn-red-add').click(
       function(){
        $('.search-popover-container').addClass('move');
       }
   )
   $('.m-searchBar-return').click(
       ( ) =>{
        $('.search-popover-container').removeClass('move');
        $('#go-m-area-tags').css('display', 'inline');
       }
   )

   
});

$(window).click(function () {
    $('.input-wrapper ').removeClass('current')
});



$(document).on('click', '.add_btn',
    function(e){
        e.preventDefault();
        e.stopPropagation();

        var type = $(this).closest('.Benchmark').data('id');
        var str = $(this).closest('.Benchmark').find('.condition-tag-content').text();
        var ids = $(this).closest('.Benchmark').find('.ids').text();
       // console.log(" type = " + type + " \n String = " + str + "\n ids = " + ids);


        var tag = '<li class="Benchmark del_btn" data-id=' + type + '>\
                        <a class="condition-tag select">\
                            <span class="ids" style="display: none">' + ids + '</span>\
                            <span class="condition-tag-content">' + str + '</span>\
                            <span class="toggle-tag">\
                                <img src="/assets/Icons/Tags_x/White.png" alt="">\
                            </span>\
                        </a>\
                    </li>';

        
        if (type == 'job-type') {
            $('#job-type-list').append(tag);
        }else if( type = 'pos'){
            $('#job-position-list').append(tag);
        }else if(type == 'jept'){
            $('#add_jept_list').append(tag);
        }

        $( this ).empty();
        
        
    }
    
)
    
// deleting the tags
$(document).on('click','.Benchmark.del_btn', function (e) {

  
    var type = $(this).closest('.Benchmark').data('id');
    var str = $(this).closest('.Benchmark').find('.condition-tag-content').text();
    var ids = $(this).closest('.Benchmark').find('.ids').text();
    var tag = '<li class="Benchmark add_btn" data-id=' + type + '>\
    <a class="condition-tag select">\
    <span class="ids" style="display: none">' + ids + '</span>\
    <span class="condition-tag-content">' + str + '</span>\
    <span class="toggle-tag">\
    <img src="/assets/Icons/Tags_x/White.png" alt="">\
    </span>\
    </a></li>';

    if (type == 'job-type') {
        $('#add-opening-list').append(tag);
        
    }else if( type = 'pos'){
        $('#add-area-list').append(tag);
        //$('#wrapper-1').removeClass('current')
    }else if(type == 'jep'){
        $('check_jept_list3').add(tag);
    }

    $( this ).empty();
 }
 )


 $('.input-wrapper').on('click',
     function(e){
        if ($(this).hasClass('wrapper-1')){
            $('.wrapper-2').removeClass('current');
            $('.wrapper-3').removeClass('current');
        }else if($(this).hasClass('wrapper-2')){
            $('.wrapper-1').removeClass('current');
            $('.wrapper-3').removeClass('current');
        }else if ($(this).hasClass('wrapper-3')){
            $('.wrapper-1').removeClass('current');
            $('.wrapper-2').removeClass('current');
        }
        
         if ($(this).hasClass('current')){
          
         }else{
            $(this).addClass('current')
            $(this).parent().find('.input-pop').addClass('translate')
         }

         e.stopPropagation();
     } 
 )

 $('.checkbox-icon').on('click', function(){
     //alert("checked");
 }
 )



