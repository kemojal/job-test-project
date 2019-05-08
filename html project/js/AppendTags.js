
let numAddedToCart  = 0;
let jobTypeTags = [
    "鮿넓䊨玑䌌" , 
    "禺窡笪騟䊨玑䌌", 
    "美工/設計/製圖", 
    "貿易/物流/運輸", 
    "⵹畮笪갤䊨玑䌌", 
    "行銷/企劃/廣告/公關",
    "財務/會計/稅務",
    "秘書/人資/總務/助理",
    "國內外業務/FAE",
    "經營管理/中高階",
    "其他技術人員/工程師",
    "電子/機械工程師",
    "前端/網頁工程師",
    "系統/網路工程師",
]

let positionTags  = [ 
    "台灣" , 
    "其它", 
    '韓國',
    '美國',
    "日本", 
    
];


var japTags  = [
    "t1",
    "t2",
    "t3",
    "t4",
    "t5",
    "t6",
    "t7"
]



let inHTML = "";
let layerHTMl  = ""

$.each(positionTags, function(index, value){
    var newItem = '<li class="Benchmark add_btn"><a class ="condition-tag"><span class="condition-tag-content">'+ positionTags[index] + '</span></a></li>'
    inHTML += newItem;  
});

//$("#m_add_opening_list").html(inHTML);

let append_layer = function(){
    
    var appendItem =  '<li class="Benchmark add_tag" data-id="AREA">\
        <a class="condition-tag">\
            <span class="condition-tag-content">台中</span>\
            <span class="toggle-tag">\
                <img src="/assets/Icons/Tags_%2B/White.png" alt="">\
            </span>\
        </a>\
    </li>\
    <li class="Benchmark add_tag" data-id="AREA">\
        <a class="condition-tag">\
            <span class="condition-tag-content">台中</span>\
            <span class="toggle-tag">\
                <img src="/assets/Icons/Tags_%2B/White.png" alt="">\
            </span>\
        </a>\
    </li>\
    <li class="Benchmark add_tag" data-id="AREA">\
        <a class="condition-tag">\
            <span class="condition-tag-content">台中</span>\
            <span class="toggle-tag">\
                <img src="/assets/Icons/Tags_%2B/White.png" alt="">\
            </span>\
        </a>\
    </li>\
'
layerHTMl += appendItem;
$('.tager').append(layerHTMl);
}

append_layer();

$(document).on('click', '.item01',
    
    function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.item01').toggleClass('toggle');
        $('.item02').removeClass('toggle');
        $('.item03').removeClass('toggle');
    
       // $(this).toggleClass('toggle');
        if( $('.item01').hasClass('toggle')){
            $('.mobile-list1').css('display', 'inline-block');
            $('li.Benchmark.add_tag').css('display', 'inline');
        }else{
            $('.mobile-list1').css('display', 'none')
        }
        

        
    }

    
)

$(document).on('click', '.item02',
    
    function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.item02').toggleClass('toggle');
        $('.item01').removeClass('toggle');
        $('.item03').removeClass('toggle');
    
       // $(this).toggleClass('toggle');
        if( $('.item02').hasClass('toggle')){
            $('.mobile-list2').css('display', 'inline-block');
            $('li.Benchmark.add_tag').css('display', 'inline');
        }else{
            $('.mobile-list2').css('display', 'none')
        }
        

        
    }

    
)

$(document).on('click', '.item03',
    
    function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.item03').toggleClass('toggle');
        $('.item01').removeClass('toggle');
        $('.item02').removeClass('toggle');
    
       // $(this).toggleClass('toggle');
        if( $('.item03').hasClass('toggle')){
            $('.mobile-list3').css('display', 'inline-block');
            $('li.Benchmark.add_tag').css('display', 'inline');
        }else{
            $('.mobile-list3').css('display', 'none')
        }
        

        
    }

    
)
$(document).on('click','.add_tag',function (e) {
    let text = $(this).text()
    
    let mtag = '<li class="Benchmark del_tag" data-id="Job-cat">\
    <a class="condition-tag select">\
        <span class="ids" style="display: none">\
            <font style="vertical-align: inherit;">\
            <font style="vertical-align: inherit;">76ee0e16-ee43-400f-b65b-c9f7dd22217aOther </font>\
        </font>\
    </span>\
    <span class="condition-tag-content">\
            <font style="vertical-align: inherit;">\
                <font style="vertical-align: inherit;">'+ text +'</font>\
            </font>\
        </span>\
        <span class="toggle-tag">\
        <img src="/assets/Icons/Tags_x/White.png" alt="">\
        </span>\
    </a>\
</li>'

    $('#area-tags-list').append(mtag);
    $(this).find('a').toggleClass('select')

});

$(document).on('click','a.condition-tag.del_tag', function(e){
    e.preventDefault();
    e.stopPropagation();
    alert('delered')
    $(this).empty()
})



// append the first wrapper input 1
let jobHTML = "";
$.each(jobTypeTags, function(index, value){
    var jobTag = '<li class="Benchmark add_btn" data-id="job-type">\
    <a class ="condition-tag select">\
    <span class="condition-tag-content">'+ jobTypeTags[index] + '</span>\
    <span class="toggle-tag"><img src="/assets/Icons/Tags_%2B/White.png"alt="">\
        </span>\
    </a>\
    </li>'
    jobHTML += jobTag;  
    $("#add-opening-list").html(jobHTML);
});


// append the first wrapper input  2

var posHTML = "";
$.each(positionTags, function(index, value){
    var PosTag = '<li class="Benchmark add_btn" data-id="pos">\
    <a class ="condition-tag select">\
    <span class="condition-tag-content">'+ positionTags[index] + '</span>\
    <span class="toggle-tag"><img src="/assets/Icons/Tags_%2B/White.png"alt="">\
        </span>\
    </a>\
    </li>'
    posHTML += PosTag;  
    $("#add-area-list").html(posHTML);
});



var japHTML = "";
$.each(japTags, function(index, value){
    var japTag = '<li class="Benchmark add_btn" data-id="jep">\
    <a class ="condition-tag select">\
    <span class="condition-tag-content">'+ japTags[index] + '</span>\
    <span class="toggle-tag"><img src="/assets/Icons/Tags_%2B/White.png"alt="">\
        </span>\
    </a>\
    </li>'
    japHTML += japTag;  
    $("#add_jept_list").html(japHTML);
});




// add the job list to the job collection 

$('.send-mail').click(
    function(){
        let jobTitle = $(this).parent().parent().parent().parent().parent().find('div').find('a.job-title').find('h4').text();
        let jobCompany = $(this).parent().parent().parent().parent().parent().find('div').find('a.job-company').find('h4').text();
        let workPlaceCountry  = $(this).parent().parent().parent().parent().find('ul').find('li.workplace').find('ul').find('li').find('a').find('h6.country').text();
        let workPlaceCity  = $(this).parent().parent().parent().parent().find('ul').find('li.workplace').find('ul').find('li').find('a').find('h6.city').text();
        var jobcollected = '<li>\
            <table class="prodetail_table">\
                <tbody>\
                    <tr class="row no-gutters align-items-center">\
                        <td class="col-auto prodetail_table_checkbox-td">\
                            <input class="popover-checkbox " type="checkbox">\
                            <label>\
                                <span class="checkbox-icon customcheckbox"></span>\
                            </label>\
                        </td>\
                        <td class="col prodetail_table_jobBrief medium-font">\
                            <a class="jobName" href="" target="_blank">\
                                <h5>'+ jobTitle + '</h5></a>\
                                <ul class="info">\
                                    <li class="company">\
                                        <a href="" target="_blank"> '+ jobCompany + ' </a>\
                                    </li>\
                                    <li class="jobLocation">\
                                        <ul>\
                                            <li>\
                                                <div href="" class="area">'+ workPlaceCountry + '</div>\
                                            </li>\
                                            <li>\
                                                <div href="" class="city">'+ workPlaceCity + '</div>\
                                            </li>\
                                        </ul>\
                                    </li>\
                                </ul>\
                            </td>\
                            <td class="col-auto prodetail_table_btns">\
                                <ul class="jobManage_btns">\
                                    <input class="company_id" type="text" value="73baa771-595c-4065-bcc8-a909cf149394" style="display: none">\
                                    <li>\
                                        <input class="next_ids" type="text" value="f51e2ff0-3e8c-4cbe-bb07-0d04e563d58d" style="display: none">\
                                        <button type="button" class="btn-style btn1-style btn-small hearted-btn  btn-collect add-hearted">\
                                            <span class="icon heart-collection"></span>\
                                            <span>收藏</span>\
                                        </button>\
                                    </li>\
                                    <li>\
                                        <input class="del_ids" type="text" value="f51e2ff0-3e8c-4cbe-bb07-0d04e563d58d" style="display: none">\
                                        <button type="button" class="btn-style btn1-style btn-small deleted-btn add-delete">\
                                            <span class="icon delete-icon"></span>\
                                            <span>刪除</span>\
                                        </button>\
                                    </li>\
                                </ul>\
                            </td>\
                        </tr>\
                    </tbody>\
                </table>\
            </li>'


        $('#current-job').append(jobcollected);
        numAddedToCart += 1;
        $('.num-added-to-cart').text(numAddedToCart.toString())

        
        
    }
)

// add job to heart collection

$(document).on("click", ".add-hearted", function(){
    var element = $(this).parent().parent().parent().parent().parent().parent().parent().detach();
    $('#future-job').append(element);
   })

   //add all collected job to heart collection
$(document).on("click", ".add-heart-all", function(){
    //alert("hearted all")
 var li = $(this).parent().parent().parent().parent().find('div.form-container').find('#current-job').find('li').detach();
 $('ul#future-job').append(li);
})