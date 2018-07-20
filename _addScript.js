
var objNamescript ={
    jetradar :{ //Request by S9P
        elm1:{
            tag:"img",
            txt:"http://pixel.aviasales.ru/ThaiAirways?",
            case:"1", // 0 = create node | 1
            paramData:{
                PNR:'pnr_nbr'
            }
        }
    },
    fbpixel_it:{
        elm1:{
            tag:"script",
            txt:"!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '154899338410823');",
            case:"0"
        },
        elm2:{
            tag:"noscript",
            txt:"<img height=\"1\" width=\"1\" style=\"display:none\"src=\"https://www.facebook.com/tr?id=154899338410823&ev=PageView&noscript=1\"/>",
            case:"0"
        }
    },
    everymundo_FareNet:{ //Request by S9N (Nahathai Keerakajinda)
        elm1:{
            tag:"script",
            txt:"https://www.securitytrfx.com/js/tg.js",
            case:"1"
        }
    },
    acom:{ // ACOM
        elm1:{
            tag:"script",
            txt:'(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[] ,f=function(){var o={ti:" 5425047 "}; o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")} ,n=d.createElement(t),n.src=r,n.async=1,n.onload=n .onreadystatechange=function() {var s=this.readyState;s &&s!=="loaded"&& s!=="complete"||(f(),n.onload=n. onreadystatechange=null)},i= d.getElementsByTagName(t)[0],i. parentNode.insertBefore(n,i)})(window,document,"script"," //bat.bing.com/bat.js","uetq");',
            case:"0"
        },
        elm2:{
            tag:"noscript",
            txt:'<img src="//bat.bing.com/action/0?ti= 5425047 & Ver=2" height="0" width="0" style="display:none ; visibility: hidden;" />',
            case:'0'
        }
    },
    fbpixel_sg_pageview:{
        elm1:{
            tag:"script",
            txt:"!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'PageView');",
            case:"0"
        },
        elm2:{
            tag:"noscript",
            txt:"<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
            case:"0"
        }
    },
    fbpixel_sg_purchase:{
        elm1:{
            tag:"script",
            txt:"!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'Purchase');",
            case:"0"
        },
        elm2:{
            tag:"noscript",
            txt:"<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
            case:"0"
        }
    },
    pixel_SG_FPOW:{ //Request by Station Singapore
        elm:{
            tag:"script",
            txt:"//pixel.mathtag.com/event/js",
            case:'1',
            paramData:{
                mt_id:'1328163',
                mt_adid:'211029',
                mt_exem:'',
                mt_excl:'',
                v1:'',
                v2:'',
                v3:'',
                s1:'',
                s2:'',
                s3:''

            }
        }
    },
    pixel_SG_FARE:{ //Request by Station Singapore
        elm:{
            tag:"script",
            txt:"//pixel.mathtag.com/event/js",
            case:'1',
            paramData:{
                mt_id:'1328164',
                mt_adid:'211029',
                mt_exem:'',
                mt_excl:'',
                v1:'',
                v2:'',
                v3:'',
                s1:'',
                s2:'',
                s3:''

            }
        }
    },
    pixel_SG_ALPI:{//Request by Station Singapore
        elm:{
            tag:"script",
            txt:"//pixel.mathtag.com/event/js",
            case:'1',
            paramData:{
                mt_id:'1328165',
                mt_adid:'211029',
                mt_exem:'',
                mt_excl:'',
                v1:'',
                v2:'',
                v3:'',
                s1:'',
                s2:'',
                s3:''

            }
        }
    },
    pixel_SG_PURC:{//Request by Station Singapore
        elm:{
            tag:"script",
            txt:"//pixel.mathtag.com/event/js",
            case:'1',
            paramData:{
                mt_id:'1328166',
                mt_adid:'211029',
                mt_exem:'',
                mt_excl:'',
                v1:'',
                v2:'',
                v3:'',
                s1:'',
                s2:'',
                s3:''

            }
        }
    },
    pixel_SG_CONF:{//Request by Station Singapore
        elm:{
            tag:"script",
            txt:"//pixel.mathtag.com/event/js",
            case:'1',
            paramData:{
                mt_id:'1328168',
                mt_adid:'211029',
                mt_exem:'',
                mt_excl:'',
                v1:'',
                v2:'',
                v3:'',
                s1:'',
                s2:'',
                s3:''

            }
        }
    }
}
var addScript = function(objName,elmID,updateID,fn){
    var anchor = document.getElementById(elmID);

    implibdx.core.updateDom(updateID,function(){
        for(x in objNamescript[objName]){
            // console.log(objNamescript[objName][x].paramData,objNamescript[objName][x].txt)
         // anchor.append( createEM.create(objNamescript[objName][x].tag,(objNamescript[objName][x].paramData)?pathData(objNamescript[objName][x].paramData,objNamescript[objName][x].txt):objNamescript[objName][x].txt,objNamescript[objName][x].case) )
        anchor.appendChild( createEM.create(objNamescript[objName][x].tag,(objNamescript[objName][x].paramData)?pathData(objNamescript[objName][x].paramData,objNamescript[objName][x].txt):objNamescript[objName][x].txt,objNamescript[objName][x].case) )         
        }
        fn;
    },1000,5);
}
var skyscanner  ={ // skyscanner
    add:function(){

        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            if(dataTransfer["EXTERNAL_ID#4"] === "SKYSCANNER"){
                let addTo = document.getElementById('main-layout-bottom');
                let txt_code = '';
                let cost = eBaDataLayer.total_price;
                let ord = modpnr(eBaDataLayer.pnr_nbr);
                let createAttr =document.createElement("img");
                createAttr.src = 'https://pubads.g.doubleclick.net/activity;xsp=4380767;qty=1;cost='+cost+';ord='+ord+'?';            
                addTo.appendChild(createAttr);
            }            
        },1000,5);       
    }
}

var tripadvisor   ={ // tripadvisor
    add:function(){

        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            let addTo = document.getElementById('main-layout-bottom');
            let txt_code = '';
            let cost = eBaDataLayer.total_price;
            let ord = modpnr(eBaDataLayer.pnr_nbr);
            let createAttr =document.createElement("img");
            createAttr.src = 'https://pubads.g.doubleclick.net/activity;xsp=4371151;qty=1;cost'+cost+';ord='+ord+'?';
            // console.log(createAttr)
            addTo.appendChild(createAttr);
        },1000,5);       
    }
}
var pathData =function(obj,url){
    var path = {};
    for(keys in obj){
        if(obj[keys] == 'pnr_nbr'){            
            path[keys] = modpnr(eBaDataLayer[obj[keys]]);
        }else{            
            path[keys] = obj[keys];
        }
    }    
   return url+jQuery.param(path);
}

var xxx

function Addwebtrends(){
    if (eBaDataLayer.page_code == "CONF") {
        implibdx.core.updateDom("footer#main-layout-bottom", function(){
            $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
            $("#main-layout-bottom").append(webtrendsCreate.createElements("script",webtrendsCreate.add(""),"0"));
            $("#main-layout-bottom").append(webtrendsCreate.createElements("script","https://www.thaiairways.com/static/common/js/webtrends.load.js","1"));
            $("#main-layout-bottom").append(webtrendsCreate.createElements("noscript","<img alt='dcsimg' id='dcsimg' width='1' height='1' src='//statse.webtrendslive.com/dcs0s1to5100004va4434tphe_5i8v/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=10.2.55&amp;dcssip=www.thaiairways.com'>","0"));
        },1000,3);
    }else if(eBaDataLayer.page_code == "RTPL"){
        $("#main-layout-bottom").append(webtrendsCreate.createElements("script","https://www.thaiairways.com/static/common/js/webtrends.load.js","1"));
        $("#main-layout-bottom").append(webtrendsCreate.createElements("noscript","<img alt='dcsimg' id='dcsimg' width='1' height='1' src='//statse.webtrendslive.com/dcs0s1to5100004va4434tphe_5i8v/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=10.2.55&amp;dcssip=www.thaiairways.com'>","0"));
    }
}
var twCreate = {
    createElements:function(elm,txt,n){
        var addTo = document.getElementById("main-layout-bottom");
        var createScr = document.createElement(elm);
        var txt_Code = "";
        this.content = txt;
        if(n == "1"){
            createScr.src = this.content;
        }else{
            txt_Code = document.createTextNode(this.content);
            createScr.appendChild(txt_Code);
        }
        return createScr;
    },
    add : function(name){
        var twLoad ="";

        if(eBaDataLayer.page_code == "CONF"){
            return  twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_TW+";}";}
        if(eBaDataLayer.page_code == "RTPL"){
            return twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_ad(name)+"}";}

    },
    bound : function(){
        var res = eBaDataLayer.bound[0].route;
        $.each(eBaDataLayer.bound,function(index,value){
            if(index != 0){
                res += "-"+value.route;
            }
        })
        return res;
    },
    dcs_ad : function(name){
        this.proName = name;
        if(this.proName != ""){
            var Name_ad = name.split("/");
            var ad = "dcs.WT.ad=\"";
            for(var i = 0; i< Name_ad.length; i++){
                if(checkEXP(Name_ad[i]) == true) ad += bannerTG[Name_ad[i]].ad+";";
                else ad += "";
            }
            return ad+"\"";
        }else{
            return "";
        }

    },
    dcs_TW :"dcs.WT.totalamount = eBaDataLayer.total_price;dcs.WT.currcode = eBaDataLayer.currency;dcs.WT.paytype = eBaDataLayer.payment_method;dcs.WT.site = eBaDataLayer.site_code;dcs.WT.bookfromcity = eBaDataLayer.bound[0].dep_city;dcs.WT.booktocity = eBaDataLayer.bound[0].arr_city;dcs.WT.triptype = eBaDataLayer.trip_type;dcs.WT.rloc = eBaDataLayer.pnr_number;dcs.WT.thaicountry = eBaDataLayer.market;dcs.WT.bcabin = dataTransfer[\"AIR#1_ITINERARY#1_SEGMENT#1_CABIN#1\"];dcs.WT.ceco = dataTransfer[\"AIR#1_PNR#1_RBD#1\"];dcs.WT.flight_numbers = eBaDataLayer.bound[0].flight_numbers;dcs.WT.route = twCreate.bound();dcs.WT.office_id = eBaDataLayer.office_id;dcs.WT.external_id = eBaDataLayer.external_id;dcs.WT.depdate = eBaDataLayer.bound[0].dep_date;dcs.WT.bookconfirm  = \"Confirmed\""
}
var webtrendsCreate = {
    createElements:function(elm,txt,n){
        var addTo = document.getElementById("main-layout-bottom");
        var createScr = document.createElement(elm);
        var txt_Code = "";
        this.content = txt;
        if(n == "1"){
            createScr.src = this.content;
        }else{
            txt_Code = document.createTextNode(this.content);
            createScr.appendChild(txt_Code);
        }
        return createScr;
    },
    add : function(name){
        var twLoad ="";

        if(eBaDataLayer.page_code == "CONF"){
            return  twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_TW+";}";}
        if(eBaDataLayer.page_code == "RTPL"){
            return twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_ad(name)+"}";}

    },
    bound : function(){
        var res = eBaDataLayer.bound[0].route;
        $.each(eBaDataLayer.bound,function(index,value){
            if(index != 0){
                res += "-"+value.route;
            }
        })
        return res;
    },
    dcs_ad : function(name){
        this.proName = name;
        if(this.proName != ""){
            var Name_ad = name.split("/");
            var ad = "dcs.WT.ad=\"";
            for(var i = 0; i< Name_ad.length; i++){
                if(checkEXP(Name_ad[i]) == true) ad += bannerTG[Name_ad[i]].ad+";";
                else ad += "";
            }
            return ad+"\"";
        }else{
            return "";
        }

    },
    dcs_TW :"dcs.WT.totalamount = eBaDataLayer.total_price;dcs.WT.currcode = eBaDataLayer.currency;dcs.WT.paytype = eBaDataLayer.payment_method;dcs.WT.site = eBaDataLayer.site_code;dcs.WT.bookfromcity = eBaDataLayer.bound[0].dep_city;dcs.WT.booktocity = eBaDataLayer.bound[0].arr_city;dcs.WT.triptype = eBaDataLayer.trip_type;dcs.WT.rloc = eBaDataLayer.pnr_number;dcs.WT.thaicountry = eBaDataLayer.market;dcs.WT.bcabin = dataTransfer[\"AIR#1_ITINERARY#1_SEGMENT#1_CABIN#1\"];dcs.WT.ceco = dataTransfer[\"AIR#1_PNR#1_RBD#1\"];dcs.WT.flight_numbers = eBaDataLayer.bound[0].flight_numbers;dcs.WT.route = twCreate.bound();dcs.WT.office_id = eBaDataLayer.office_id;dcs.WT.external_id = eBaDataLayer.external_id;dcs.WT.depdate = eBaDataLayer.bound[0].dep_date;dcs.WT.bookconfirm  = \"Confirmed\""
}

function acom_adddata(){
    window.uetq = window.uetq || [];
    window.uetq.push({ 'gv': eBaDataLayer.total_price, 'gc': eBaDataLayer.currency});
    console.log(  window.uetq.push({ 'gv': eBaDataLayer.total_price, 'gc': eBaDataLayer.currency}) )
}

/*----------------------------Widget-----------------------------------------*/

var wt_Takeme ={
    add:function(){
        console.log('---------------------->takemetour');
        let anchor = document.getElementById("main-layout-bottom");
        let createAttr =document.createElement("script");
        let city = eBaDataLayer.city_search_in;

        if((eBaDataLayer.page_code == 'CONF'|| eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.city_search_in == 'BKK'|| eBaDataLayer.city_search_in == 'CNX'|| eBaDataLayer.city_search_in == 'CEI'|| eBaDataLayer.city_search_in == 'DMK'|| eBaDataLayer.city_search_in == 'HDY'|| eBaDataLayer.city_search_in == 'KKC'|| eBaDataLayer.city_search_in == 'USM'|| eBaDataLayer.city_search_in == 'KBV'|| eBaDataLayer.city_search_in == 'LPT'|| eBaDataLayer.city_search_in == 'HGN'|| eBaDataLayer.city_search_in == 'NAW'|| eBaDataLayer.city_search_in == 'HKT'|| eBaDataLayer.city_search_in == 'THS'|| eBaDataLayer.city_search_in == 'URT'|| eBaDataLayer.city_search_in == 'TDX'|| eBaDataLayer.city_search_in == 'UBP'|| eBaDataLayer.city_search_in == 'UTH')){
            wt_Takeme.createEM();
            createAttr.src = 'https://dlyn4t8knt1qo.cloudfront.net/thaiairways/main.v2.js';
            implibdx.core.updateDom("footer#main-layout-bottom",function(){
                anchor.appendChild(createAttr);
                setTimeout(function(){ wt_Takeme.runWidget(city); }, 4000);
            },1000,5);
        }
    },
    createEM:function(){
        let anchor = document.getElementById("reservation-details");
        let createEMTag = document.createElement("section");
        createEMTag.setAttribute('id','takemetour-widget');
        anchor.after(createEMTag);
    },
    runWidget:function(city){
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            window.tmtWidget.initWidget(city);
        },1000,7);
    }
}

var wt_booking ={
    add:function(){
        console.log('---------------------->booking');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            let anchor = document.getElementById("main-layout-bottom");
            let createAttr =document.createElement("script");
            wt_booking.createEM();

            createAttr.setAttribute('id','sp_widget');
            createAttr.setAttribute('data-hash','_959b7e703945');
            createAttr.setAttribute('data-container','b_container');
            createAttr.setAttribute('data-size','1050x280');
            createAttr.setAttribute('data-tpncy','false');
            createAttr.src = 'https://aff.bstatic.com/static/affiliate_base/js/booking_sp_widget.js?iata='+check.depCity()+'&iata_orr=1&checkin='+check.chkdate(eBaDataLayer.bound[0].arr_date)+'&checkout='+ check.trip_type(eBaDataLayer.trip_type);
            // console.log(createAttr.src);

            anchor.appendChild(createAttr);

        },1000,10);


    },
    createEM:function(){
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            let anchor = document.getElementById("reservation-details");
            let createEMTag = document.createElement("section");
            createEMTag.setAttribute('id','b_container');
            anchor.after(createEMTag);
        },1000,5)
    }
}

var rentalCar = {
    add:function(){
        let anchor = document.getElementById("reservation-details");
        let ctrlTag = document.createElement("section");
        let createTag = document.createElement('iframe');       
        ctrlTag.setAttribute('id','rentalCar');
        anchor.after(ctrlTag);
        rentalCar.createFrame();
    },
    createFrame:function(){
        let arrDate = eBaDataLayer.bound[0].arr_date.split('/');    
        let depDate = (!eBaDataLayer.bound[1] !== true ?eBaDataLayer.bound[1].dep_date.split('/') : arrDate);

        let frame = document.createElement("iframe");

        frame.setAttribute("src", "https://widget.rentalcars.com/WidgetSearch.do?affiliateCode=thaiairways&preflang="+eBaDataLayer.language+"&pickupIATACode="+eBaDataLayer.bound[0].arr_airport+"&results=1&pickupMonth="+arrDate[1]+"&pickupDate="+arrDate[0]+"&pickupYear="+arrDate[2]+"&returnDate="+depDate[0]+"&returnMonth="+depDate[1]+"&returnYear="+depDate[2]);
        // frame.setAttribute("src", "https://secure.rentalcars.com/ELBanner.do?iataCode="+eBaDataLayer.bound[0].arr_city+"&display=city-night&affiliateCode=thaiairways&puDay="+arrDate[0]+"&puMonth="+arrDate[1]+"&puYear="+arrDate[2]+"&puHour=&puMinute=&doDay="+depDate[0]+"&doMonth="+depDate[1]+"&doYear="+depDate[2]+"&doHour=&doMinute=&driversAge=&preflang="+eBaDataLayer.language+"&serverName=www.rentalcars.com&prefcurrency=thb&adplat=elb");

        frame.setAttribute("name", "rentalCar");
        frame.setAttribute("id", "rentalCarframe");        
        frame.style.width = 100 + "%";   
        frame.style.height = 280+"px";
        frame.style.border = "none";
        document.getElementById("rentalCar").appendChild(frame);  
        // console.log("https://widget.rentalcars.com/WidgetSearch.do?affiliateCode=thaiairways&preflang="+eBaDataLayer.language+"&pickupIATACode="+eBaDataLayer.bound[0].arr_city+"&results=1&pickupMonth="+arrDate[1]+"&pickupDate="+arrDate[0]+"&pickupYear="+arrDate[2]+"&returnDate="+depDate[0]+"&returnMonth="+depDate[1]+"&returnYear="+depDate[2]);     

    }
}


var mastercard = function(){

    let toDayDate = new Date();
    let startDate = new Date().setFullYear("2018","06","23");

    implibdx.core.updateDom("div.TGINSBannerMenu", function() { 
        if(toDayDate >= startDate){
            $.ajax({
                type: 'POST',      
                url: 'https://www.thaiairways.com/app/form/mastercard/',
                data: {pnr:eBaDataLayer.pnr_number,firstname:eBaDataLayer.passengerList[0].first_name,lastname:eBaDataLayer.passengerList[0].last_name,email:eBaDataLayer.contact_information.email},
            }).done(function(res){
                console.log(res.success)
            })
        }
    },1000,3);
}

var couponBrussels = function(){

    let toDayDate = new Date();
    let startDate = new Date().setFullYear("2018","06","20");
    let dataRoute = "";
    for(k in eBaDataLayer.bound){
        dataRoute += eBaDataLayer.bound[k].route+'-';
    }

    implibdx.core.updateDom("div.TGINSBannerMenu", function() { 
        if(toDayDate >= startDate && ((/[BRU]{3}/).test(dataRoute) === true) ) {
            $.ajax({
                type: 'POST',      
                url: 'https://www.thaiairways.com/app/form/api/postdata/',
                data: {pnr:eBaDataLayer.pnr_number,firstname:eBaDataLayer.passengerList[0].first_name,lastname:eBaDataLayer.passengerList[0].last_name,email:eBaDataLayer.contact_information.email},
            }).done(function(res){
                console.log(res.success)
            })
        }
    },1000,3);
}


