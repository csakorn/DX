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
            txt:"//pixel.mathtag.com/event/js?",
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
            txt:"//pixel.mathtag.com/event/js?",
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
            txt:"//pixel.mathtag.com/event/js?",
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
            txt:"//pixel.mathtag.com/event/js?",
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
            txt:"//pixel.mathtag.com/event/js?",
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
    },
    CheeseMobile_FARE:{
        elm:{
            tag:"img",
            txt:"https://track.cdn-ads.com/TG/?",
            case:"1",
            paramData:{
                cu:"TG.FARE"
            }
        }
    },
    CheeseMobile_PURC:{
        elm:{
            tag:"img",
            txt:"https://track.cdn-ads.com/TG/?",
            case:"1",
            paramData:{
                cu:"TG.PAYMENT"
            }
        }
    },
    CheeseMobile_CONF:{
        elm:{
            tag:"script",
            txt:"https://track.cdn-ads.com/TG/?",
            case:"1",
            paramData:{
                cu:"TG.COMPLETE"
            }
        }
    },
    insider:{
        elm:{
            tag:"script",
            txt:"//thaiairways.api.useinsider.com/ins.js",
            case:"1",
            paramData:{
                id:"10002369"
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


var fbpixel_SE = {
    add:function(){
        // console.log('fbpixel_SE');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr =document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;
                let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
                let currency = eBaDataLayer.currency;

                if(eBaDataLayer.page_code == "CONF"){
                    content  = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');fbq('track', 'Purchase', { content_name: '"+pnr+"', value:'"+eBaDataLayer.total_price+"',currency: '"+eBaDataLayer.currency+"' })";
                }else if(eBaDataLayer.page_code == "FPOW"){
                    content  = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');";
                }else if(eBaDataLayer.page_code == "PURC"){
                    content  = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');fbq('track', 'AddToCart', { value: "+eBaDataLayer.total_price+",currency:'"+eBaDataLayer.currency+"'})";
                }
                // console.log(content);
                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
            }else console.log('fbpixel_SE');
        },1000,6);
    }
}

var knorex = { // Knorex require by S9M
    add:function(){
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            if( (/\b^[TH_]{3}/).test(eBaDataLayer.external_id) === true){
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr =document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;
                let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
                let currency = eBaDataLayer.currency;
                let s = (eBaDataLayer.page_code == 'FPOW')?"4f1ccee6a0bcb45a90d01b374d0af04598b04b07":"8dd22d23ce0fcb0063f1385225a08e12b3044292";

                // if(eBaDataLayer.page_code == "CONF"){
                //     content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=b5e1155f912adebfeb0e8c599e8e5cd0d2128141&ord="+pnr+"&value="+eBaDataLayer.total_price+"&currency="+eBaDataLayer.currency+"&v1=%%PAGE_CATEGORY%%&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }else if(eBaDataLayer.page_code == "FPOW"){
                //     content  = "(function() { var encode = window.encodeURIComponent; var ka = document.createElement('script'); ka.type = 'text/javascript'; ka.id = '665973e202b66e6c0667';  ka.async = true; ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=4f1ccee6a0bcb45a90d01b374d0af04598b04b07&v1="+eBaDataLayer.page_code+"&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&_t=' + new Date().getTime(); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }else if(eBaDataLayer.page_code == "PURC"){
                //     content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=8dd22d23ce0fcb0063f1385225a08e12b3044292&v1="+eBaDataLayer.page_code+"&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v14="+eBaDataLayer.total_price+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }

                if(eBaDataLayer.page_code == "CONF"){
                    content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=b5e1155f912adebfeb0e8c599e8e5cd0d2128141&ord="+pnr+"&value="+eBaDataLayer.total_price+"&currency="+eBaDataLayer.currency+"&v1=%%PAGE_CATEGORY%%&v2="+window.location.href+"&v3="+eBaDataLayer.city_search_out+"&v4="+eBaDataLayer.city_search_in+"&v5="+eBaDataLayer.date_search_in+"&v6="+_Bound(eBaDataLayer.bound[1],'dep_date')+"&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                }else if(eBaDataLayer.page_code == "FPOW"){
                    content  = "(function() { var encode = window.encodeURIComponent; var ka = document.createElement('script'); ka.type = 'text/javascript'; ka.id = '665973e202b66e6c0667';  ka.async = true; ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=4f1ccee6a0bcb45a90d01b374d0af04598b04b07&v1="+eBaDataLayer.page_code+"&v2="+window.location.href+"&v3="+eBaDataLayer.city_search_out+"&v4="+eBaDataLayer.city_search_in+"&v5="+eBaDataLayer.date_search_in+"&v6="+_Bound(eBaDataLayer.bound[1],'dep_date')+"&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&_t=' + new Date().getTime(); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                }else if(eBaDataLayer.page_code == "PURC"){
                    content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=8dd22d23ce0fcb0063f1385225a08e12b3044292&v1="+eBaDataLayer.page_code+"&v2="+window.location.href+"&v3="+eBaDataLayer.city_search_out+"&v4="+eBaDataLayer.city_search_in+"&v5="+eBaDataLayer.date_search_in+"&v6="+_Bound(eBaDataLayer.bound[1],'dep_date')+"&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v14="+eBaDataLayer.total_price+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                }


                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
            }
        },1000,5);
    }
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

var fbpixel_acom = {
    add:function(){
        // console.log('fbpixel_acom');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
           // if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr =document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;
               // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
                let currency = eBaDataLayer.currency;

                if(eBaDataLayer.page_code == "CONF"){
                    content  = "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '624510897705215'); fbq('track', 'PageView');fbq('track', 'Purchase', {currency: '"+eBaDataLayer.currency+"', value: "+eBaDataLayer.total_price+"});";
                    // console.log('ACOM_CONF')
                }else{
                    content  = "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '624510897705215'); fbq('track', 'PageView');";
                    // console.log('ACOM')

                }
                // console.log(content);
                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
           // }else console.log('fbpixel_SE');
        },1000,6);
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

// function Addwebtrends(){
//     if (eBaDataLayer.page_code == "CONF") {
//         implibdx.core.updateDom("footer#main-layout-bottom", function(){
//             $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
//             $("#main-layout-bottom").append(webtrendsCreate.createElements("script",webtrendsCreate.add(""),"0"));
//             $("#main-layout-bottom").append(webtrendsCreate.createElements("script","https://www.thaiairways.com/static/common/js/webtrends.load.js","1"));
//             $("#main-layout-bottom").append(webtrendsCreate.createElements("noscript","<img alt='dcsimg' id='dcsimg' width='1' height='1' src='//statse.webtrendslive.com/dcs0s1to5100004va4434tphe_5i8v/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=10.2.55&amp;dcssip=www.thaiairways.com'>","0"));
//         },1000,3);
//     }else if(eBaDataLayer.page_code == "RTPL"){
//         $("#main-layout-bottom").append(webtrendsCreate.createElements("script","https://www.thaiairways.com/static/common/js/webtrends.load.js","1"));
//         $("#main-layout-bottom").append(webtrendsCreate.createElements("noscript","<img alt='dcsimg' id='dcsimg' width='1' height='1' src='//statse.webtrendslive.com/dcs0s1to5100004va4434tphe_5i8v/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=10.2.55&amp;dcssip=www.thaiairways.com'>","0"));
//     }
// }
// var twCreate = {
//     createElements:function(elm,txt,n){
//         var addTo = document.getElementById("main-layout-bottom");
//         var createScr = document.createElement(elm);
//         var txt_Code = "";
//         this.content = txt;
//         if(n == "1"){
//             createScr.src = this.content;
//         }else{
//             txt_Code = document.createTextNode(this.content);
//             createScr.appendChild(txt_Code);
//         }
//         return createScr;
//     },
//     add : function(name){
//         var twLoad ="";

//         if(eBaDataLayer.page_code == "CONF"){
//             return  twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_TW+";}";}
//         if(eBaDataLayer.page_code == "RTPL"){
//             return twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_ad(name)+"}";}

//     },
//     bound : function(){
//         var res = eBaDataLayer.bound[0].route;
//         $.each(eBaDataLayer.bound,function(index,value){
//             if(index != 0){
//                 res += "-"+value.route;
//             }
//         })
//         return res;
//     },
//     dcs_ad : function(name){
//         this.proName = name;
//         if(this.proName != ""){
//             var Name_ad = name.split("/");
//             var ad = "dcs.WT.ad=\"";
//             for(var i = 0; i< Name_ad.length; i++){
//                 if(checkEXP(Name_ad[i]) == true) ad += bannerTG[Name_ad[i]].ad+";";
//                 else ad += "";
//             }
//             return ad+"\"";
//         }else{
//             return "";
//         }

//     },
//     dcs_TW :"dcs.WT.totalamount = eBaDataLayer.total_price;dcs.WT.currcode = eBaDataLayer.currency;dcs.WT.paytype = eBaDataLayer.payment_method;dcs.WT.site = eBaDataLayer.site_code;dcs.WT.bookfromcity = eBaDataLayer.bound[0].dep_city;dcs.WT.booktocity = eBaDataLayer.bound[0].arr_city;dcs.WT.triptype = eBaDataLayer.trip_type;dcs.WT.rloc = eBaDataLayer.pnr_number;dcs.WT.thaicountry = eBaDataLayer.market;dcs.WT.bcabin = dataTransfer[\"AIR#1_ITINERARY#1_SEGMENT#1_CABIN#1\"];dcs.WT.ceco = dataTransfer[\"AIR#1_PNR#1_RBD#1\"];dcs.WT.flight_numbers = eBaDataLayer.bound[0].flight_numbers;dcs.WT.route = twCreate.bound();dcs.WT.office_id = eBaDataLayer.office_id;dcs.WT.external_id = eBaDataLayer.external_id;dcs.WT.depdate = eBaDataLayer.bound[0].dep_date;dcs.WT.bookconfirm  = \"Confirmed\""
// }
// var webtrendsCreate = {
//     createElements:function(elm,txt,n){
//         var addTo = document.getElementById("main-layout-bottom");
//         var createScr = document.createElement(elm);
//         var txt_Code = "";
//         this.content = txt;
//         if(n == "1"){
//             createScr.src = this.content;
//         }else{
//             txt_Code = document.createTextNode(this.content);
//             createScr.appendChild(txt_Code);
//         }
//         return createScr;
//     },
//     add : function(name){
//         var twLoad ="";

//         if(eBaDataLayer.page_code == "CONF"){
//             return  twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_TW+";}";}
//         if(eBaDataLayer.page_code == "RTPL"){
//             return twLoad = "window.webtrendsAsyncLoad = function(dcs){"+twCreate.dcs_ad(name)+"}";}

//     },
//     bound : function(){
//         var res = eBaDataLayer.bound[0].route;
//         $.each(eBaDataLayer.bound,function(index,value){
//             if(index != 0){
//                 res += "-"+value.route;
//             }
//         })
//         return res;
//     },
//     dcs_ad : function(name){
//         this.proName = name;
//         if(this.proName != ""){
//             var Name_ad = name.split("/");
//             var ad = "dcs.WT.ad=\"";
//             for(var i = 0; i< Name_ad.length; i++){
//                 if(checkEXP(Name_ad[i]) == true) ad += bannerTG[Name_ad[i]].ad+";";
//                 else ad += "";
//             }
//             return ad+"\"";
//         }else{
//             return "";
//         }

//     },
//     dcs_TW :"dcs.WT.totalamount = eBaDataLayer.total_price;dcs.WT.currcode = eBaDataLayer.currency;dcs.WT.paytype = eBaDataLayer.payment_method;dcs.WT.site = eBaDataLayer.site_code;dcs.WT.bookfromcity = eBaDataLayer.bound[0].dep_city;dcs.WT.booktocity = eBaDataLayer.bound[0].arr_city;dcs.WT.triptype = eBaDataLayer.trip_type;dcs.WT.rloc = eBaDataLayer.pnr_number;dcs.WT.thaicountry = eBaDataLayer.market;dcs.WT.bcabin = dataTransfer[\"AIR#1_ITINERARY#1_SEGMENT#1_CABIN#1\"];dcs.WT.ceco = dataTransfer[\"AIR#1_PNR#1_RBD#1\"];dcs.WT.flight_numbers = eBaDataLayer.bound[0].flight_numbers;dcs.WT.route = twCreate.bound();dcs.WT.office_id = eBaDataLayer.office_id;dcs.WT.external_id = eBaDataLayer.external_id;dcs.WT.depdate = eBaDataLayer.bound[0].dep_date;dcs.WT.bookconfirm  = \"Confirmed\""
// }

function acom_adddata(){
    window.uetq = window.uetq || [];
    window.uetq.push({ 'gv': eBaDataLayer.total_price, 'gc': eBaDataLayer.currency});
    console.log(  window.uetq.push({ 'gv': eBaDataLayer.total_price, 'gc': eBaDataLayer.currency}) )
}

/*----------------------------Widget-----------------------------------------*/

// var wt_Takeme ={
//     add:function(){
//         console.log('---------------------->takemetour');
//         let anchor = document.getElementById("main-layout-bottom");
//         let createAttr =document.createElement("script");
//         let city = eBaDataLayer.city_search_in;

//         if((eBaDataLayer.page_code == 'CONF'|| eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.city_search_in == 'BKK'|| eBaDataLayer.city_search_in == 'CNX'|| eBaDataLayer.city_search_in == 'CEI'|| eBaDataLayer.city_search_in == 'DMK'|| eBaDataLayer.city_search_in == 'HDY'|| eBaDataLayer.city_search_in == 'KKC'|| eBaDataLayer.city_search_in == 'USM'|| eBaDataLayer.city_search_in == 'KBV'|| eBaDataLayer.city_search_in == 'LPT'|| eBaDataLayer.city_search_in == 'HGN'|| eBaDataLayer.city_search_in == 'NAW'|| eBaDataLayer.city_search_in == 'HKT'|| eBaDataLayer.city_search_in == 'THS'|| eBaDataLayer.city_search_in == 'URT'|| eBaDataLayer.city_search_in == 'TDX'|| eBaDataLayer.city_search_in == 'UBP'|| eBaDataLayer.city_search_in == 'UTH')){
//             wt_Takeme.createEM();
//             createAttr.src = 'https://dlyn4t8knt1qo.cloudfront.net/thaiairways/main.v2.js';
//             implibdx.core.updateDom("footer#main-layout-bottom",function(){
//                 anchor.appendChild(createAttr);
//                 setTimeout(function(){ wt_Takeme.runWidget(city); }, 4000);
//             },1000,5);
//         }
//     },
//     createEM:function(){
//         let anchor = document.getElementById("reservation-details");
//         let createEMTag = document.createElement("section");
//         createEMTag.setAttribute('id','takemetour-widget');
//         anchor.after(createEMTag);
//     },
//     runWidget:function(city){
//         implibdx.core.updateDom("footer#main-layout-bottom",function(){
//             window.tmtWidget.initWidget(city);
//         },1000,7);
//     }
// }

var wt_booking ={
    add:function(){
        // console.log('---------------------->booking');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            let anchor = document.getElementById("main-layout-bottom");
            let createAttr =document.createElement("script");
            wt_booking.createEM();

            createAttr.setAttribute('id','sp_widget');
            createAttr.setAttribute('data-hash','_959b7e703945');
            createAttr.setAttribute('data-container','b_container');
            createAttr.setAttribute('data-size','1050x280');
            createAttr.setAttribute('data-tpncy','false');
            createAttr.src = 'https://aff.bstatic.com/static/affiliate_base/js/booking_sp_widget.js?iata='+check.depCity()+'&lang='+eBaDataLayer.language+'&iata_orr=1&checkin='+check.chkdate(eBaDataLayer.bound[0].arr_date)+'&checkout='+ check.trip_type(eBaDataLayer.trip_type);
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

var DMP_ControlTag_kxct = {
    add:function(){
        // console.log('fbpixel_acom');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
           // if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr =document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;

                createAttr.setAttribute('class','kxct');
                createAttr.setAttribute('data-id','ti1tqfxfv');
                createAttr.setAttribute('data-timing','async');
                createAttr.setAttribute('data-version','3.0');
                createAttr.setAttribute('type','text/javascript');

               // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
                let currency = eBaDataLayer.currency;

                content = "window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]); (function(){ var k=document.createElement('script');k.type='text/javascript';k.async=true; k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/ti1tqfxfv.js'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s); }());";

                // console.log(content);
                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
           // }else console.log('fbpixel_SE');
        },1000,6);
    }
}


var DMP_ControlTag_kxint = {
    add:function(){
        // console.log('fbpixel_acom');
        implibdx.core.updateDom("footer#main-layout-bottom",function(){
           // if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr =document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;

                createAttr.setAttribute('class','kxint');
                createAttr.setAttribute('data-namespace','thaiairways');                
                createAttr.setAttribute('type','text/javascript');

               // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
                let currency = eBaDataLayer.currency;

                content = "window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]); (function(){ function retrieve(n){ var k= 'kx'+'thaiairways_'+n, ls=(function(){ try { return window.localStorage; } catch(e) { return null; } })(); if (ls) { return ls[k] || ''; } else if (navigator.cookieEnabled) { var m = document.cookie.match(k+'=([^;]*)'); return (m && unescape(m[1])) || ''; } else { return ''; } } Krux.user = retrieve('user'); Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : []; })();";

                // console.log(content);
                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
           // }else console.log('fbpixel_SE');
        },1000,6);
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
        let langx = (eBaDataLayer.language == "CN")?"ZS":eBaDataLayer.language;

        let frame = document.createElement("iframe");

        frame.setAttribute("src", "https://widget.rentalcars.com/WidgetSearch.do?affiliateCode=thaiairways&preflang="+langx+"&pickupIATACode="+eBaDataLayer.bound[0].arr_airport+"&results=1&pickupMonth="+arrDate[1]+"&pickupDate="+arrDate[0]+"&pickupYear="+arrDate[2]+"&returnDate="+depDate[0]+"&returnMonth="+depDate[1]+"&returnYear="+depDate[2]+"&enabler=thaipromo5");
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


// var mastercard = function(){

//     let toDayDate = new Date();
//     let startDate = new Date().setFullYear("2018","06","23");
//     let endData = new Date().setFullYear("2018","09","31");

//     implibdx.core.updateDom("div.TGINSBannerMenu", function() {
//         if(toDayDate >= startDate && dataTransfer["EXTERNAL_ID#4"] == "mastercard" && eBaDataLayer.bound[0].arr_airport == 'SIN' && ( startDate <= toDayDate && toDayDate <= endData) ){
//             $.ajax({
//                 type: 'POST',
//                 url: 'https://www.thaiairways.com/app/form/mastercard/',
//                 data: {pnr:eBaDataLayer.pnr_number,firstname:eBaDataLayer.passengerList[0].first_name,lastname:eBaDataLayer.passengerList[0].last_name,email:eBaDataLayer.contact_information.email},
//             }).done(function(res){
//                 console.log(res.success)
//             })
//         }
//     },1000,3);
// }

// var couponBrussels = function(){

//     let toDayDate = new Date();
//     let startDate = new Date().setFullYear("2018","06","20");
//     let dataRoute = "";
//     for(k in eBaDataLayer.bound){
//         dataRoute += eBaDataLayer.bound[k].route+'-';
//     }

//     implibdx.core.updateDom("div.TGINSBannerMenu", function() {
//         if(toDayDate >= startDate && ((/[BRU]{3}/).test(dataRoute) === true) && eBaDataLayer.page_code == "CONF" && ((/[BE_]{3}/).test(eBaDataLayer.external_id) === false) && ((/(PLCC)|(CON)/).test(dataTransfer['PAYMENTTYPE']) !== true) )  {
//             $.ajax({
//                 type: 'POST',
//                 url: 'https://www.thaiairways.com/app/form/api/postdata/',
//                 data: {pnr:eBaDataLayer.pnr_number,firstname:eBaDataLayer.passengerList[0].first_name,lastname:eBaDataLayer.passengerList[0].last_name,email:eBaDataLayer.contact_information.email},
//             }).done(function(res){
//                 console.log(res.success)
//             })
//         }else console.log('unsend...');
//     },1000,3);
// }

// var couponChina = function(){
//     let toDayDate = new Date();
//     const startDate = new Date().setFullYear("2018","08","10");
//     const endData = new Date().setFullYear("2018","09","31");
//     let dataRoute = "";

//     let data = "";
//     const RBD_BC = /[C|D|J|Z]/;
//     const RBD_EC = /[Y|B|M|Q|H|T|K|S|G|V|W|L]/;
//     for(k in eBaDataLayer.bound){
//         dataRoute += eBaDataLayer.bound[k].route+'-';
//     }
//     if(checkRBD(RBD_BC,dataTransfer["AIR#1_PNR#1_RBD#1"])){
//         data = {
//             pnr: eBaDataLayer.pnr_number,
//             firstname: eBaDataLayer.passengerList[0].first_name,
//             lastname: eBaDataLayer.passengerList[0].last_name,
//             email: eBaDataLayer.contact_information.email,
//             state:"Business",
//             project:"KingPower e-voucher - China"
//         }
//     }else if(checkRBD(RBD_EC,dataTransfer["AIR#1_PNR#1_RBD#1"])){
//         data = {
//             pnr: eBaDataLayer.pnr_number,
//             firstname: eBaDataLayer.passengerList[0].first_name,
//             lastname: eBaDataLayer.passengerList[0].last_name,
//             email: eBaDataLayer.contact_information.email,
//             state:"Economy",
//             project:"KingPower e-voucher - China"
//         }
//     }

//     implibdx.core.updateDom("div.TGINSBannerMenu", function() {
//         if( (toDayDate >= startDate && toDayDate <= endData) && ((/(PLCC)|(CON)/).test(dataTransfer['PAYMENTTYPE']) !== true) && ((/[BKK|CNX|HKT]{3}/).test(dataRoute) === true) && eBaDataLayer.page_code == "CONF" && ((/[CN_]{3}/).test(eBaDataLayer.external_id) === true) && data != null) {
//             $.ajax({
//                 type: 'POST',
//                 url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
//                 data: data,
//             }).done(function(res){
//                 console.log(res.success)
//             })
//         }else console.log('err:senddata')
//     },1000,3);
// }

var sotw = {
    chkDate:function(){
        const expStart = setDatef(["2018","08","15"]),expEnd =setDatef(["2018","11","31"]), expBuy = setDatef(["2018","10","15"])
        console.log(expStart,expEnd,expBuy)
        // this.expStart = expStart;
        // this.expEnd = expEnd;
        this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
        this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
        this.today = new Date();
        this.sDate = new Date().setFullYear("2018","07","15");
        this.nDate = new Date().setFullYear("2018","08","31");

        const eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
        const eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);

        if(expStart <= this.today && this.today <= expBuy){//check Sales period
            if( expStart <= eBaDateOut && eBaDateOut <= expEnd){//Departure period
                sotw.createOBJ();
                return true;
            }else{
                console.log('err:in/out');
                return false;
            }
        }else {
            console.log('err:today');
            return false;
        }

        // if(expStart <=  eBaDateOut &&  eBaDateOut <= expEnd && expStart <=  eBaDateIn &&  eBaDateIn <= expEnd){

        //     // if(this.today >= this.sDate && this.today <= this.nDate){
        //         sotw.createOBJ();
        //         return true;
        //     // }else{
        //         // console.log("surpriseontheways date")
        //         // return false;
        //     // }
        // }else{
        //     return false;
        // }
    },
    senddata:function(){
        implibdx.core.updateDom("div.TGINSBannerMenu", function() {
            if(sotw.chkDate() === true && eBaDataLayer.page_code === "CONF" && ((/\b^[TH_]{3}/).test(eBaDataLayer.external_id) === true ) && dataTransfer.PAYMENTTYPE == "EXT" && chkSite() === true && eBaDataLayer.bound[0].dep_country == 'TH' && ((/(PLCC)|(CON)/).test(dataTransfer['PAYMENTTYPE']) !== true) ){
            // if(sotw.chkDate() === true && eBaDataLayer.page_code === "CONF"){

                chkSite()?console.log("surpriseontheways"):console.log(this.obj);
                $.ajax({
                    type : 'POST',
                    url : 'https://www.thaiairways.com/app/form/save_report',
                    data : sotw.obj,
                    dataType : 'json'
                }).done(function(result){
                    console.log(result.success);
                }).error(function(e){
                    console.log(e.statusText)
                });
            }else console.log('error : senddata')
        },1000,6);
    },
    createOBJ:function(){
        var create_sotw = {};
        create_sotw.data1 = dataTransfer['PNR#1_TITLECODE#1'];
        create_sotw.data2 = eBaDataLayer.passengerList[0].first_name;
        create_sotw.data3 = eBaDataLayer.passengerList[0].last_name;
        create_sotw.data4 = eBaDataLayer.trip_type;
        create_sotw.data5 = eBaDataLayer.contact_information.email;
        create_sotw.data6 = eBaDataLayer.pnr_number;
        create_sotw.data7 = xBound(eBaDataLayer.bound);
        create_sotw.data18 = eBaDataLayer.page_code;
        create_sotw.data19 = subscribe.check_site();
        create_sotw.data20 = "surpriseontheways";
        sotw.obj = create_sotw;
    }
}

var eMailTrigger ={
    dusit:{
        send:function(){
            // eMailTrigger.obj.project = "surprise-dusit"; eMailTrigger.dusit.condition.dateStart
            
            if( eMailTrigger.chkEXP(["2018","10","24"],["2019","00","20"],["2019","00","20"],["2018","10","24"],"surprise-dusit","NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT"){
                implibdx.core.updateDom("div.TGINSBannerMenu", function() {
                    chkSite()?console.log("surprise-dusit"):console.log(eMailTrigger.obj);
                if(eMailTrigger.chkCountry(eMailTrigger.dusit.condition_country,'eBaDataLayer',/(BLOCATIONCOUNTRYNAME)$/) === true){
                     $.ajax({
                        type : 'POST',
                        url : 'https://www.thaiairways.com/app/form/api/postdataamds/',
                        data : eMailTrigger.obj,
                        dataType : 'json'
                    }).done(function(result){
                        console.log(result.success);
                    }).error(function(e){
                        console.log(e.statusText)
                    });                   

                }                   
                },1000,6);
            }else console.log('error : senddata')
        },
        condition_country:["BKK","CNX","CEI","DMK","HDY","KKC","USM","KBV","LPT","HGN","NAW","HKT","THS","URT","TDX","UBP","UTH","PEK","CTU","CAN","HKG","KMG","PVG","TPE","XMN","CSX","CKG","KHH","CGO","CAI","MLE","MNL","DXB","ATL","ORD","DFW","HNL","IAH","LAX","MIA","JFK","SFO","SJC","SEA","IAD","HAN","SGN","DAD","PQC"]
    },
    ukBlackFriday:{
        send:function(){
            if( eMailTrigger.chkEXP(["2018","10","23"],["2018","10","26"],["2019","05","30"],["2019","04","01"],"UK-BlackFriday","YES") === true && eBaDataLayer.page_code == "CONF" && eBaDataLayer.bound["0"].dep_airport == "LHR"){
                if(eMailTrigger.chkCountry(eMailTrigger.ukBlackFriday.condition_country,'eBaDataLayer',/(BLOCATIONCOUNTRYNAME)$/) === true && dataTransfer["EXTERNAL_ID#4"] === "UK00022"){
                   implibdx.core.updateDom("div.TGINSBannerMenu", function() {

                    $.ajax({
                        type : 'POST',
                        url : 'https://www.thaiairways.com/app/form/api/postdatacheck/',
                        data : eMailTrigger.obj,
                        dataType : 'json'
                    }).done(function(result){
                        console.log(result.success);
                    }).error(function(e){
                        console.log(e.statusText)
                    });            
                   chkSite()?console.log('OK-BlackFriday'):console.log('UK-BlackFriday',eMailTrigger.obj);


                   },1000,6);
               }                
            }else console.log('error : senddata');
        },
        condition_country:["BKK","CNX","KBV","HKT","RGN","VTE","PNH","HAN","HGN","KUL","SIN","DPS","JKT","MNL","CAN","HKG","KMG","CTU","XMN","TPE","CCU","DAC","KTM","CMB","MAA","BLR","HYD","DEL","BOM","PEK","PVG","TYO","NRT","HND","KIX","NGO","FUK","CTS","ICN","PUS","BNE","MEL","PER","SYD","AKL"]
    },
    createOBJ:function(){
        let cOBJ = {
            pnr: eBaDataLayer.pnr_number,
            firstname: eBaDataLayer.passengerList[0].first_name,
            lastname: eBaDataLayer.passengerList[0].last_name,
            email: eBaDataLayer.contact_information.email          
        };
        eMailTrigger.obj = cOBJ;
    },
    chkEXP:function(C,H,E,D,K,P){
        
        const expStart = setDatef(C),expEnd =setDatef(H), expBuy = (E !== "null")?setDatef(E):"null", expBuyStart = (D !== "null")?setDatef(D):"null";
        this.postpone = P;
        this.project = K;
        this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
        this.dIn = (eBaDataLayer.bound[1] !== undefined)?(eBaDataLayer.bound[1].dep_date).split("/"):(eBaDataLayer.bound[0].dep_date).split("/");
        this.today = new Date();
        
        const eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
        const eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);

        if(expBuy == "null"){
            if(expStart <= this.today && this.today <= expEnd){//check Sales period
                eMailTrigger.createOBJ();           
                eMailTrigger.obj.project = this.project;
                return true;

            }else{ 
                // console.log(expStart,this.today,expBuy)
                return false;
            }
        }else{
            console.log(expStart,expEnd,expBuy,expBuyStart)
            if(expStart <= this.today && this.today <= expEnd && this.postpone == "NO"){                
                if(expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy){
                    eMailTrigger.createOBJ();           
                    eMailTrigger.obj.project = this.project;
                    return true;
                }else{                     
                    // console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                    return false;
                }
            }else if(expStart <= this.today && this.today <=expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES"){
                    eMailTrigger.createOBJ();           
                    eMailTrigger.obj.project = this.project;
                    console.log("ok UK")
                    return true;
            }else{ 
                // console.log(expStart,this.today,expBuy)
                // console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                // console.log("xx")
                return false;

            }
        }
    },
     chkCountry:function(c,h,k){
        const nameCountry = c, nameOBJ = window[h], rxg = k;  
        // if(eBaDataLayer == "CONF"){
            for(i in nameOBJ["bound"]){
                    if(i != "0" && nameCountry.indexOf(nameOBJ["bound"][i].dep_airport)>=0){
                        console.log('xxx')
                        console.log(nameOBJ["bound"][i].dep_airport);
                        return true;
                    }
            }
        // }          
    }
}
