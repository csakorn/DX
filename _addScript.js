var objNamescript = {
    jetradar: { //Request by S9P // done on tea
        elm1: {
            tag: "img",
            txt: "http://pixel.aviasales.ru/ThaiAirways?",
            case: "1", // 0 = create node | 1
            paramData: {
                PNR: 'pnr_nbr'
            }
        }
    },
    fbpixel_it: { //done on tea
        elm1: {
            tag: "script",
            txt: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '154899338410823');",
            case: "0"
        },
        elm2: {
            tag: "noscript",
            txt: "<img height=\"1\" width=\"1\" style=\"display:none\"src=\"https://www.facebook.com/tr?id=154899338410823&ev=PageView&noscript=1\"/>",
            case: "0"
        }
    },
    everymundo_FareNet: { //Request by S9N (Nahathai Keerakajinda)  //done on tea
        elm1: {
            tag: "script",
            txt: "https://www.securitytrfx.com/js/tg.js",
            case: "1"
        }
    },
    // acom:{ // ACOM
    //     elm1:{
    //         tag:"script",
    //         txt:'(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[] ,f=function(){var o={ti:" 5425047 "}; o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")} ,n=d.createElement(t),n.src=r,n.async=1,n.onload=n .onreadystatechange=function() {var s=this.readyState;s &&s!=="loaded"&& s!=="complete"||(f(),n.onload=n. onreadystatechange=null)},i= d.getElementsByTagName(t)[0],i. parentNode.insertBefore(n,i)})(window,document,"script"," //bat.bing.com/bat.js","uetq");',
    //         case:"0"
    //     },
    //     elm2:{
    //         tag:"noscript",
    //         txt:'<img src="//bat.bing.com/action/0?ti= 5425047 & Ver=2" height="0" width="0" style="display:none ; visibility: hidden;" />',
    //         case:'0'
    //     }
    // }, 
    // startax_allsite:{ // ACOM
    //     elm1:{
    //         tag:"noscript",
    //         txt:'<img height="1" width="1" style="display:none"  src="https://www.facebook.com/tr?id=369060826977725&ev=PageView&noscript=1"/>',
    //         case:'0'
    //     }
    // },
    fbpixel_sg_pageview: {
        elm1: {
            tag: "script",
            txt: "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'PageView');",
            case: "0"
        },
        elm2: {
            tag: "noscript",
            txt: "<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
            case: "0"
        }
    },
    fbpixel_sg_purchase: {
        elm1: {
            tag: "script",
            txt: "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'Purchase');",
            case: "0"
        },
        elm2: {
            tag: "noscript",
            txt: "<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
            case: "0"
        }
    },
    pixel_SG_FPOW: { //Request by Station Singapore
        elm: {
            tag: "script",
            txt: "//pixel.mathtag.com/event/js?",
            case: '1',
            paramData: {
                mt_id: '1328163',
                mt_adid: '211029',
                mt_exem: '',
                mt_excl: '',
                v1: '',
                v2: '',
                v3: '',
                s1: '',
                s2: '',
                s3: ''

            }
        }
    },
    pixel_SG_FARE: { //Request by Station Singapore
        elm: {
            tag: "script",
            txt: "//pixel.mathtag.com/event/js?",
            case: '1',
            paramData: {
                mt_id: '1328164',
                mt_adid: '211029',
                mt_exem: '',
                mt_excl: '',
                v1: '',
                v2: '',
                v3: '',
                s1: '',
                s2: '',
                s3: ''

            }
        }
    },
    pixel_SG_ALPI: { //Request by Station Singapore
        elm: {
            tag: "script",
            txt: "//pixel.mathtag.com/event/js?",
            case: '1',
            paramData: {
                mt_id: '1328165',
                mt_adid: '211029',
                mt_exem: '',
                mt_excl: '',
                v1: '',
                v2: '',
                v3: '',
                s1: '',
                s2: '',
                s3: ''

            }
        }
    },
    pixel_SG_PURC: { //Request by Station Singapore
        elm: {
            tag: "script",
            txt: "//pixel.mathtag.com/event/js?",
            case: '1',
            paramData: {
                mt_id: '1328166',
                mt_adid: '211029',
                mt_exem: '',
                mt_excl: '',
                v1: '',
                v2: '',
                v3: '',
                s1: '',
                s2: '',
                s3: ''

            }
        }
    },
    pixel_SG_CONF: { //Request by Station Singapore
        elm: {
            tag: "script",
            txt: "//pixel.mathtag.com/event/js?",
            case: '1',
            paramData: {
                mt_id: '1328168',
                mt_adid: '211029',
                mt_exem: '',
                mt_excl: '',
                v1: '',
                v2: '',
                v3: '',
                s1: '',
                s2: '',
                s3: ''

            }
        }
    },
    CheeseMobile_FARE: {//done on tea
        elm: {
            tag: "img",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.FARE"
            }
        }
    },
    CheeseMobile_PURC: {//done on tea
        elm: {
            tag: "img",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.PAYMENT"
            }
        }
    },
    CheeseMobile_CONF: {//done on tea
        elm: {
            tag: "script",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.COMPLETE"
            }
        }
    },
    insider: {// done on tea
        elm: {
            tag: "script",
            txt: "//thaiairways.api.useinsider.com/ins.js",
            case: "1",
            paramData: {
                id: "10002369"
            }
        }
    }
}
var addScript = function (objName, elmID, updateID, fn) {
    var anchor = document.getElementById(elmID);

    implibdx.core.updateDom(updateID, function () {
        try {
            for (var x in objNamescript[objName]) {
                // console.log(objNamescript[objName][x].paramData,objNamescript[objName][x].txt)
                // anchor.append( createEM.create(objNamescript[objName][x].tag,(objNamescript[objName][x].paramData)?pathData(objNamescript[objName][x].paramData,objNamescript[objName][x].txt):objNamescript[objName][x].txt,objNamescript[objName][x].case) )
                anchor.appendChild(
                    createEM.create(
                        objNamescript[objName][x].tag,
                        (objNamescript[objName][x].paramData) ?
                            pathData(objNamescript[objName][x].paramData, objNamescript[objName][x].txt) :
                            objNamescript[objName][x].txt,
                        objNamescript[objName][x].case))
            }
            fn;
        } catch{
            console.log('Err--- Addscript' + objName);

        }

    }, 1000, 5);
}

var iNetasia_Tealium = {
    add: function add() {
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            var addTo = document.getElementById('main-layout-bottom');
            var createAttr = document.createElement("script");
            var txtNode = '';
            createAttr.setAttribute('type', 'text/javascript');
            var content = "utag_cfg_ovrd={},a=\"//tags.tiqcdn.com/utag/thai-airways/main/prod/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,d.onerror=function(){utag_cfg_ovrd.path=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/\",a=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a)},a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a);";
            txtNode = document.createTextNode(content);
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
        }, 1000, 4);
    }
};

var iNetasia_Tealium_qa = {
    add: function add() {
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            var addTo = document.getElementById('main-layout-bottom');
            var createAttr = document.createElement("script");
            var txtNode = '';
            createAttr.setAttribute('type', 'text/javascript');
            var content = "utag_cfg_ovrd={},a=\"//tags.tiqcdn.com/utag/thai-airways/main/qa/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,d.onerror=function(){utag_cfg_ovrd.path=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/\",a=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a)},a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a);";
            txtNode = document.createTextNode(content);
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
        }, 1000, 4);
    }
};

var knorex = { // Knorex require by S9M
    add: function () {
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            if ((/\b^[TH_]{3}/).test(eBaDataLayer.external_id) === true) {
                let addTo = document.getElementById('main-layout-bottom');
                let createAttr = document.createElement("script");
                let txtNode = ''
                let content = ''
                let lang = eBaDataLayer.language;
                let exID = eBaDataLayer.external_id;
                let pnr = (eBaDataLayer.page_code == "CONF") ? modpnr(eBaDataLayer.pnr_nbr) : "";
                let currency = eBaDataLayer.currency;
                let s = (eBaDataLayer.page_code == 'FPOW') ? "4f1ccee6a0bcb45a90d01b374d0af04598b04b07" : "8dd22d23ce0fcb0063f1385225a08e12b3044292";

                // if(eBaDataLayer.page_code == "CONF"){
                //     content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=b5e1155f912adebfeb0e8c599e8e5cd0d2128141&ord="+pnr+"&value="+eBaDataLayer.total_price+"&currency="+eBaDataLayer.currency+"&v1=%%PAGE_CATEGORY%%&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }else if(eBaDataLayer.page_code == "FPOW"){
                //     content  = "(function() { var encode = window.encodeURIComponent; var ka = document.createElement('script'); ka.type = 'text/javascript'; ka.id = '665973e202b66e6c0667';  ka.async = true; ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=4f1ccee6a0bcb45a90d01b374d0af04598b04b07&v1="+eBaDataLayer.page_code+"&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v15="+eBaDataLayer.language+"&_t=' + new Date().getTime(); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }else if(eBaDataLayer.page_code == "PURC"){
                //     content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=8dd22d23ce0fcb0063f1385225a08e12b3044292&v1="+eBaDataLayer.page_code+"&v2=' + encode('%%PAGE_URL%%') + '&v3="+eBaDataLayer.city_search_in+"&v4=%%DESTINATION_CITY%%&v5="+eBaDataLayer.date_search_in+"&v6=%%RETURN_DATE%%&v7="+eBaDataLayer.trip_type+"&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13="+eBaDataLayer.currency+"&v14="+eBaDataLayer.total_price+"&v15="+eBaDataLayer.language+"&v16="+eBaDataLayer.external_id+"&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                // }

                if (eBaDataLayer.page_code == "CONF") {
                    content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=b5e1155f912adebfeb0e8c599e8e5cd0d2128141&ord=" + pnr + "&value=" + eBaDataLayer.total_price + "&currency=" + eBaDataLayer.currency + "&v1=%%PAGE_CATEGORY%%&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v15=" + eBaDataLayer.language + "&v16=" + eBaDataLayer.external_id + "&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                } else if (eBaDataLayer.page_code == "FPOW") {
                    content = "(function() { var encode = window.encodeURIComponent; var ka = document.createElement('script'); ka.type = 'text/javascript'; ka.id = '665973e202b66e6c0667';  ka.async = true; ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=4f1ccee6a0bcb45a90d01b374d0af04598b04b07&v1=" + eBaDataLayer.page_code + "&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v15=" + eBaDataLayer.language + "&_t=' + new Date().getTime(); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                } else if (eBaDataLayer.page_code == "PURC") {
                    content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=8dd22d23ce0fcb0063f1385225a08e12b3044292&v1=" + eBaDataLayer.page_code + "&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v14=" + eBaDataLayer.total_price + "&v15=" + eBaDataLayer.language + "&v16=" + eBaDataLayer.external_id + "&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
                }

                console.log(content)
                txtNode = document.createTextNode(content)
                createAttr.appendChild(txtNode);
                addTo.appendChild(createAttr);
            }
        }, 1000, 5);
    }
}



var pathData = function (obj, url) {
    var path = {};
    for (keys in obj) {
        if (obj[keys] == 'pnr_nbr') {
            path[keys] = modpnr(eBaDataLayer[obj[keys]]);
        } else {
            path[keys] = obj[keys];
        }
    }
    return url + jQuery.param(path);
}



var wt_booking = {
    add: function () {
        // console.log('---------------------->booking');
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            let anchor = document.getElementById("main-layout-bottom");
            let createAttr = document.createElement("script");
            wt_booking.createEM();

            createAttr.setAttribute('id', 'sp_widget');
            createAttr.setAttribute('data-hash', '_959b7e703945');
            createAttr.setAttribute('data-container', 'b_container');
            createAttr.setAttribute('data-size', '1050x280');
            createAttr.setAttribute('data-tpncy', 'false');
            createAttr.src = 'https://aff.bstatic.com/static/affiliate_base/js/booking_sp_widget.js?iata=' + eBaDataLayer.bound[0].arr_airport + '&lang=' + eBaDataLayer.language + '&iata_orr=1&checkin=' + check.chkdate(eBaDataLayer.bound[0].arr_date) + '&checkout=' + check.trip_type(eBaDataLayer.trip_type);
            // console.log(createAttr.src);
            anchor.appendChild(createAttr);

        }, 1000, 10);


    },
    createEM: function () {
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            let anchor = document.getElementById("reservation-details");
            let createEMTag = document.createElement("section");
            createEMTag.setAttribute('id', 'b_container');
            anchor.after(createEMTag);
        }, 1000, 5)
    }
}

var DMP_ControlTag_kxct = {
    add: function () {
        // console.log('fbpixel_acom');
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            // if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
            let addTo = document.getElementById('main-layout-bottom');
            let createAttr = document.createElement("script");
            let txtNode = ''
            let content = ''
            let lang = eBaDataLayer.language;
            let exID = eBaDataLayer.external_id;

            createAttr.setAttribute('class', 'kxct');
            createAttr.setAttribute('data-id', 'ti1tqfxfv');
            createAttr.setAttribute('data-timing', 'async');
            createAttr.setAttribute('data-version', '3.0');
            createAttr.setAttribute('type', 'text/javascript');

            // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
            let currency = eBaDataLayer.currency;

            content = "window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]); (function(){ var k=document.createElement('script');k.type='text/javascript';k.async=true; k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/ti1tqfxfv.js'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s); }());";

            // console.log(content);
            txtNode = document.createTextNode(content)
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
            // }else console.log('fbpixel_SE');
        }, 1000, 6);
    }
}


var DMP_ControlTag_kxint = {
    add: function () {
        // console.log('fbpixel_acom');
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            // if( (/\b^[SE_]{3}/).test(eBaDataLayer.external_id) === true){
            let addTo = document.getElementById('main-layout-bottom');
            let createAttr = document.createElement("script");
            let txtNode = ''
            let content = ''
            let lang = eBaDataLayer.language;
            let exID = eBaDataLayer.external_id;

            createAttr.setAttribute('class', 'kxint');
            createAttr.setAttribute('data-namespace', 'thaiairways');
            createAttr.setAttribute('type', 'text/javascript');

            // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
            let currency = eBaDataLayer.currency;

            content = "window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]); (function(){ function retrieve(n){ var k= 'kx'+'thaiairways_'+n, ls=(function(){ try { return window.localStorage; } catch(e) { return null; } })(); if (ls) { return ls[k] || ''; } else if (navigator.cookieEnabled) { var m = document.cookie.match(k+'=([^;]*)'); return (m && unescape(m[1])) || ''; } else { return ''; } } Krux.user = retrieve('user'); Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : []; })();";

            // console.log(content);
            txtNode = document.createTextNode(content)
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
            // }else console.log('fbpixel_SE');
        }, 1000, 6);
    }
}

var rentalCar = {
    add: function () {
        let anchor = document.getElementById("reservation-details");
        let ctrlTag = document.createElement("section");
        let createTag = document.createElement('iframe');
        ctrlTag.setAttribute('id', 'rentalCar');
        anchor.after(ctrlTag);
        rentalCar.createFrame();
    },
    createFrame: function () {
        let arrDate = eBaDataLayer.bound[0].arr_date.split('/');
        let depDate = (!eBaDataLayer.bound[1] !== true ? eBaDataLayer.bound[1].dep_date.split('/') : arrDate);
        let langx = (eBaDataLayer.language == "CN") ? "ZS" : eBaDataLayer.language == 'GB' ? "EN" : eBaDataLayer.language;

        let frame = document.createElement("iframe");

        frame.setAttribute("src", "https://secure.rentalcarsconnect.com/WidgetSearch.do?affiliateCode=thaiairways&preflang=" + langx + "&pickupIATACode=" + eBaDataLayer.bound[0].arr_airport + "&results=2&pickupMonth=" + arrDate[1] + "&pickupDate=" + arrDate[0] + "&pickupYear=" + arrDate[2] + "&returnDate=" + depDate[0] + "&returnMonth=" + depDate[1] + "&returnYear=" + depDate[2] + "&enabler=thaipromo&serverName=www.rentalcars.com");
        // frame.setAttribute("src", "https://secure.rentalcars.com/ELBanner.do?iataCode="+eBaDataLayer.bound[0].arr_city+"&display=city-night&affiliateCode=thaiairways&puDay="+arrDate[0]+"&puMonth="+arrDate[1]+"&puYear="+arrDate[2]+"&puHour=&puMinute=&doDay="+depDate[0]+"&doMonth="+depDate[1]+"&doYear="+depDate[2]+"&doHour=&doMinute=&driversAge=&preflang="+eBaDataLayer.language+"&serverName=www.rentalcars.com&prefcurrency=thb&adplat=elb");

        frame.setAttribute("name", "rentalCar");
        frame.setAttribute("id", "rentalCarframe");
        frame.style.width = 100 + "%";
        frame.style.height = 280 + "px";
        frame.style.border = "none";
        document.getElementById("rentalCar").appendChild(frame);
        // console.log("https://widget.rentalcars.com/WidgetSearch.do?affiliateCode=thaiairways&preflang="+eBaDataLayer.language+"&pickupIATACode="+eBaDataLayer.bound[0].arr_city+"&results=1&pickupMonth="+arrDate[1]+"&pickupDate="+arrDate[0]+"&pickupYear="+arrDate[2]+"&returnDate="+depDate[0]+"&returnMonth="+depDate[1]+"&returnYear="+depDate[2]);

    }
}



var eMailTrigger = {
    createOBJ: function () {
        const cOBJ = {
            pnr: eBaDataLayer.pnr_number,
            firstname: eBaDataLayer.passengerList[0].first_name,
            lastname: eBaDataLayer.passengerList[0].last_name,
            email: eBaDataLayer.contact_information.email,
            lang: eBaDataLayer.language
        };
        eMailTrigger.obj = cOBJ;
    },
    crOBJ: (pj) => ({
        pnr: eBaDataLayer.pnr_number,
        firstname: eBaDataLayer.passengerList[0].first_name,
        lastname: eBaDataLayer.passengerList[0].last_name,
        email: eBaDataLayer.contact_information.email,
        lang: eBaDataLayer.language,
        project: pj
    }),
    chkEXP: function (C, H, E, D, K, P) {

        const expStart = setDatef(C),
            expEnd = setDatef(H),
            expBuy = (E !== "null") ? setDatef(E) : "null",
            expBuyStart = (D !== "null") ? setDatef(D) : "null";
        this.postpone = P;
        this.project = K;
        this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
        this.dIn = (eBaDataLayer.bound[1] !== undefined) ? (eBaDataLayer.bound[1].dep_date).split("/") : (eBaDataLayer.bound[0].dep_date).split("/");
        this.today = new Date();

        const eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
        const eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

        if (expBuy == "null") {
            if (expStart <= this.today && this.today <= expEnd) { //check Sales period
                return true;
            } else {
                // console.log(expStart,this.today,expBuy)
                return false;
            }
        } else {
            console.log(expStart, expEnd, expBuy, expBuyStart)
            if (expStart <= this.today && this.today <= expEnd && this.postpone == "NO") {
                if (expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy) {
                    return true;
                } else {
                    // console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                    return false;
                }
            } else if (expStart <= this.today && this.today <= expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES") {
                console.log("ok UK")
                return true;
            } else {
                // console.log(expStart,this.today,expBuy)
                // console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                // console.log("xx")
                return false;
            }
        }
    },
    chkCountry: function (c, h, k) {
        const nameCountry = c,
            nameOBJ = window[h],
            rxg = k;
        // if(eBaDataLayer == "CONF"){
        for (i in nameOBJ["bound"]) {
            if (i != "0" && nameCountry.indexOf(nameOBJ["bound"][i].dep_airport) >= 0) {
                console.log('xxx')
                console.log(nameOBJ["bound"][i].dep_airport);
                return true;
            }
        }
        // }          
    },
    chkAirportArr: (obj, arr) => obj.map(obj => arr.indexOf(obj.arr_airport) >= 0).includes(true)
}

const objTagScript = {
    fbpixel_DK: {
        desElement_ID: 'main-layout-bottom',
        txtScript: {
            script: {
                txt: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '2242330416020074');fbq('track', 'PageView');"
            },
            noscript: {
                txt: "<img height=\"1\" width=\"1\"src=\"https://www.facebook.com/tr?id=2242330416020074&ev=PageView&noscript=1\"/>"
            }
        },
        limitdate: {
            start: ['2019', '02', '01'],
            end: ['2019', '11', '31']
        },
        typetag: 'fbpixel'
    },
    fbpixel_AT: {
        desElement_ID: 'main-layout-bottom',
        txtScript: {
            script: {
                txt: "!function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version='2.0',o.queue=[],(a=t.createElement(n)).async=!0,a.src='https://connect.facebook.net/en_US/fbevents.js',(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,'script'),fbq('init','1993859664250182'),fbq('track','PageView');"
            },
            noscript: {
                txt: "<img height=\"1\" width=\"1\"src=\"https://www.facebook.com/tr?id=1993859664250182&ev=PageView&noscript=1\"/>"
            }
        },
        limitdate: {
            start: ['2019', '02', '12'],
            end: ['2019', '11', '31']
        },
        typetag: 'fbpixel'
    },
    pixel_SG: { // done on tea
        desElement_ID: 'main-layout-bottom',
        txtScript: {
            script: {
                txt: `//pixel.mathtag.com/event/js?mt_id=1328156&mt_adid=211029&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=`
            }
        },
        limitdate: {
            start: ['2019', '02', '12'],
            end: ['2019', '11', '31']
        },
        typetag: 'pixel'
    }
}

function addScriptTG(nameOBJ) {
    let obj = objTagScript[nameOBJ];
    const _date = new Date();

    if (_date >= setDatef(obj.limitdate.start) && _date <= setDatef(obj.limitdate.end)) {

        let st1 = document.getElementById(obj.desElement_ID);
        let st2 = Object.keys(obj.txtScript);
        let pix_pageCode = eBaDataLayer.page_code === 'CONF' ? 'Purchase' : eBaDataLayer.page_code === 'PURC' ? 'AddToCart' : "";
        let createAttr, txtNode;
        let dataBooking = eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? "fbq('track', '" + pix_pageCode + "'," + objDataBooking() + ")" : "";
        st2.forEach((item) => {
            createAttr = document.createElement(item)
            if (obj['typetag'] == 'fbpixel') {
                txtNode = document.createTextNode(obj['txtScript'][item]['txt'] + ((item === 'script') ? dataBooking : ''))
                createAttr.appendChild(txtNode)
            } else {
                createAttr.setAttribute('async', 'async');
                createAttr.src = obj['txtScript'][item]['txt'];
            }
            st1.appendChild(createAttr)
        })
    }
}


const objDataBooking = () => JSON.stringify({
    connect_name: eBaDataLayer.page_code === 'CONF' ? modpnr(eBaDataLayer.pnr_nbr) : "",
    value: eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? eBaDataLayer.total_price : "",
    currency: eBaDataLayer.currency
})
const objSearch = () => datasearch = {
    location_code: eBaDataLayer['search']["flights"].map(x => x.departure.location_code + '-' + x.arrival.location_code).toString(),
    destination: eBaDataLayer.trip_type !== "RT" ? eBaDataLayer['search']["flights"].map(x => x.arrival.location_code).slice(-1).toString() : eBaDataLayer['search']["flights"].map(x => x.arrival.location_code)[0],
    origin: eBaDataLayer['search']["flights"].map(x => x.departure.location_code)[0]
}

const sendEmail = {
    jdCentral: {
        send: () => {
            if (eMailTrigger.chkEXP(["2019", "06", "15"], ["2019", "07", "31"], "null", "null", "JD-Central", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    chkSite() ? console.log("JD-Centrale") : console.log(eMailTrigger.obj);
                    // if (eMailTrigger.chkCountry(eMailTrigger.lineVillage.condition_country, 'eBaDataLayer', /(BLOCATIONCOUNTRYNAME)$/) === true) {
                    // if(eMailTrigger.chkAirportDep(eBaDataLayer.bound,eMailTrigger.lineVillage.conditionArrAirport) === true && eBaDataLayer.bound[0].dep_airport == "HKG"){
                    if (eBaDataLayer.bound[0].dep_airport == "BKK") {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: eMailTrigger.crOBJ("JD-Central"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText)
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata')
        },
        conditionArrAirport: ['BKK'] /*<------------- Departure*/
    },
    lineVillage: {
        send: function () {
            if (eMailTrigger.chkEXP(["2019", "07", "05"], ["2019", "11", "31"], ["2020", "01", "31"], ["2019", "06", "16"], "HK-Line_Village", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    // chkSite() ? console.log("HK-Line_Village") : console.log(eMailTrigger.obj);
                    // if (eMailTrigger.chkCountry(eMailTrigger.lineVillage.condition_country, 'eBaDataLayer', /(BLOCATIONCOUNTRYNAME)$/) === true) {
                    if (eMailTrigger.chkAirportArr(eBaDataLayer.bound, eMailTrigger.lineVillage.conditionArrAirport) === true && eBaDataLayer.bound[0].dep_airport == "HKG" && dataTransfer["EXTERNAL_ID#4"] === "Line Village") {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/postdataamds_trigger',
                            data: eMailTrigger.crOBJ("HK-Line_Village"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText)
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata')
        },
        conditionArrAirport: ["BKK"] /*<--- destination*/
    },
    SG_Halloween: {
        send: function send() {
            if (eMailTrigger.chkEXP(["2019", "08", "02"], ["2019", "09", "31"], ["2019", "09", "31"], ["2019", "08", "02"], "SG_Halloween", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    if (eBaDataLayer.bound[0].dep_airport == "BKK" && eBaDataLayer.bound[0].arr_airport == "SIN" && dataTransfer["EXTERNAL_ID#4"] == "HHN9" && eBaDataLayer.trip_type == "RT") {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/mastercard/',
                            data: eMailTrigger.crOBJ("SG_Halloween_2020"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText);
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata');
        },
        conditionArrAirport: ['BKK']
    },
    Samitivej: {
        send: function send() {
            if (eMailTrigger.chkEXP(["2019", "08", "01"], ["2019", "11", "25"], "null", "null", "Samitivej", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    if (eBaDataLayer.bound[0].dep_airport == "BKK" && isDom(eBaDataLayer.bound[0].arr_airport) == false) {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: eMailTrigger.crOBJ("Samitivej-coupon"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText);
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata');
        },
        conditionArrAirport: ['BKK']
    },
    Brusselsvoucher: {
        send: function send() {
            if (eMailTrigger.chkEXP(["2019", "07", "29"], ["2019", "11", "29"], ["2019", "11", "31"], ["2019", "07", "29"], "Brusselsvoucher", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    if (eBaDataLayer.bound[0].dep_airport !== "BRU" && arrAirport('BRU') == true) {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: eMailTrigger.crOBJ("Brussels-voucher"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText);
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata');
        },
        conditionArrAirport: ['BKK']
    },
    Anantaravoucher: {
        send: function send() {
            if (eMailTrigger.chkEXP(["2019", "10", "7"], ["2019", "10", "30"], ["2019", "11", "19"], ["2019", "10", "7"], "Anantaravoucher", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    const isFirstBus = eBaDataLayer.bound.map(x => x.flights[0].cabin).find(k => /F|B/.test(k)) ? true : false;
                    if (eBaDataLayer.bound[0].dep_country == "AU" && eBaDataLayer.bound[1].dep_city == "BKK" && isFirstBus == true && dataTransfer["EXTERNAL_ID#4"] === "TGANANTARA" && (eBaDataLayer.trip_type == 'RT' || eBaDataLayer.trip_type == 'OW')) {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: eMailTrigger.crOBJ("TG_Anantara"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText);
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata');
        },
        conditionArrAirport: ['BKK']
    },
    kyotobus: {
        send: function send() {
            if (eMailTrigger.chkEXP(["2019", "10", "7"], ["2020", "2", "31"], ["2020", "2", "31"], ["2019", "10", "7"], "Anantaravoucher", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
                    if (eBaDataLayer.bound[0].dep_airport == "BKK" && eBaDataLayer.bound[1].dep_airport == "NGO" && eBaDataLayer.trip_type == 'RT') {
                        $.ajax({
                            type: 'POST',
                            url: urlSendemail.all_send,
                            data: eMailTrigger.crOBJ("KyotoExpressBus"),
                            dataType: 'json'
                        }).done(function (result) {
                            console.log(result.success);
                        }).error(function (e) {
                            console.log(e.statusText);
                        });
                    }
                }, 1000, 6);
            } else console.log('error : senddata');
        },
        conditionArrAirport: ['BKK']
    }
}
const urlSendemail = {
    all_send: "https://www.thaiairways.com/app/form/api/postdataamds/",
    limit_send: "https://www.thaiairways.com/app/form/api/mastercard/",
    limit_cont_send: "https://www.thaiairways.com/app/form/postdataamds_trigger"
}
const arrDom = ["CNX", "CEI", "DMK", "HDY", "KKC", "USM", "KBV", "LPT", "HGN", "NAW", "HKT", "THS", "URT", "TDX", "UBP"];
const isDom = (city) => { return arrDom.find(key => (key == city)) ? true : false }
const arrAirport = (airport) => eBaDataLayer.search.flights.map(k => k.arrival.location_code).find(k => (k == airport)) ? true : false;


//----- Err 18-19 DEC 19
const hidepaynow = () => {
    implibdx.core.updateDom("div#reservation-menu", function () {
        if ((/BKK-ARN/).test(eBaDataLayer.bound[0].route) == true) {
            $('#reservation-menu').addClass('xARR');
            $('.pay-now-btn').remove();
        } else {
            $('.pay-now-btn').css('display', 'block');
        }
    }, 1000, 4);
}
const hidemodflight = () => { // <-- Pls. Remove this script after NOV 2020
    const errDateE = [new Date(2019, 11, 18), new Date(2019, 11, 20)]; //new Date(eBaDataLayer.pnr_creation_date);
    const bDate = new Date(eBaDataLayer.pnr_creation_date);
    const errDate = bDate >= errDateE[0] && bDate < errDateE[1]
    const errClass = eBaDataLayer.bound.map(x => x.flights).map(x => x[0].cabin == 'B').every(x => x);
    implibdx.core.updateDom("div#fare-review-bounds", function () {
        if ((/BKK-ARN/).test(eBaDataLayer.bound[0].route) == true && errDate && errClass) {
            $('div#fare-review-bounds button').remove();
        }
    }, 1000, 4);
}
// ------- Hide Meal // 08 Jan 2020
const _hideMEA = () => {
    if (eBaDataLayer.bound.every(x => x.dep_country == 'TH') &&  eBaDataLayer.bound[0].arr_country == 'TH') {
        implibdx.core.updateDom(".catalogServices-teasers-container", function () {
            $("#tpl7_MEA").css('display', 'none');
            $("div.catalogServices-teaser-column-MEA").css('display', 'none');
            $("div.catalogServices-column-MEA").css('display', 'none');

        }, 1000, 4);
    }
}
// ------ New line in Terms Condition on PURC // 17JAN2020
const isLang = () => {
    return eBaDataLayer.language == "GB" ? "en" : eBaDataLayer.language.toLowerCase();;
}
let _fareCondi = {
    CN: "",
    DE: "",
    ES: "",
    FR: "",
    GB: "I acknowledge after review the refund policy for ",
    IT: "",
    JP: "",
    KO: "",
    RU: "",
    TH: "",
    TW: "",
    SE: ""
}
const fare_condi_purc = (lang) => {
    implibdx.core.updateDom(".purchase-conditions", function () {
        let _fareCondiLang = _fareCondi[lang] !== "" ? _fareCondi[lang] : _fareCondi["GB"];
        let fareCondi = document.getElementById('fare_condi');
        let boxCondi = $("div[id$=termsAndConditions] ul>li").length !== 0 ? $("div[id$=termsAndConditions] ul>li") : $(".checkbox");
        let _tripsummaty_fare = "";
        let extIconlink = `<i class="icon icon-external-link" aria-hidden="true" title="Open new window"></i>`;
        let _purchase_fare_condi = Object.keys(boxCondi[0].children).filter(x => (/(Purchase conditions)|(Fare Conditions)/).test(boxCondi[0].children[x].text));
        $("#link_dangerous").on("click", () => {
            $('#button-tripsummary-baggage-policy').click()
        })
        if (typeof eBaDataLayer.bound[0].selected_ff_code !== "undefined") {
            eBaDataLayer.bound.map(x => _tripsummaty_fare += `<a href="https://www.thaiairways.com/booking/flexpricer/` + isLang() + '/' + x.selected_ff_code + `.html" target="_blank">` + x.selected_ff_name + extIconlink + `</a> `);
        }
        if ($("div[id$=termsAndConditions] ul>li").length !== 0) {
            // _purchase_fare_condi.map( x => x)
            // gg.map( x => dd[0].children[x].outerHTML)
            _purchase_fare_condi.map(x => _tripsummaty_fare += boxCondi[0].children[x].outerHTML);
            fareCondi.innerHTML = _fareCondiLang + "" + _tripsummaty_fare;
            fareCondi.classList.remove("hide");
        } else {
            boxCondi.append('<ul><li>' + _fareCondiLang + "" + _tripsummaty_fare + "</li></ul>")
        }




    }, 1000, 4);
}


// ----- check box insurance on PURC // 17JAN2020
const xcheckbox_cf = (dep_country) => {
    try {
        //         if(dep_country == "FR" || dep_country == "IT"){
        $("#consent_ins").html('sdasdasdasdasdasdasdasd');
        $("#consent_ins").appendTo($('.insurance-radio-selection'));
        $("#consent_ins").removeClass($('ins_hide'));
        //         }
    } catch (error) {
        console.log('no checkbox');
    }
}

// --- Hide services-table-footer - FARE
const services_tablefooter = (city) => {
    if (city == "TWD") {
        implibdx.core.updateDom(".availability-container", function () {
            $(".availability-bound ").addClass('tw_city');
        }, 1000, 4);
    }
}

// --- identification doc
const iden_doc_apim = (ex4) => {
    let _idenDoc = document.getElementsByName('PSPT_DocumentType')[0];
    if (ex4 = 'STU') {
        _idenDoc.options[0].remove()
        _idenDoc.setAttribute('disabled', 'disabled')
    }
}

/* ----- test -----  */
const testobj = {
    namePri:{
        conditions:{
            date_dep:new Date(['2020','01','25']), 
            date_arr:new Date(['2020','11','25']), 
            sale_start:new Date(['2020','02','25']), // *
            sale_end:new Date(['2020','11','25']), // *
            city_trav:"BKK-CDG", // *
            flight_dep:["TG610"] ,
            maket:new RegExp(/^(TH)/) // *
        }
    }
}
const chk_conditions = ({conditions}) =>{
    let toDay = new Date();
    let _Trvel = eBaDataLayer.bound.map(x => new Date(x.dep_date.slice(6)+x.dep_date.slice(2,6)+x.dep_date.slice(0,2)) )
    // let isMaket = conditions.maket !== null && typeof conditions.maket !== "undefined" ? conditions.maket.test(eBaDataLayer.maket):false;
    // let flightDep = conditions.flight_dep !== null && typeof conditions.flight_dep !== "undefined"? eBaDataLayer.bound.find( x => conditions.flight_dep.find(k => k === x.flight_numbers) )?true:false:true
    // let isSale = toDay <= conditions.sale_start && toDay <= conditions.sale_end;
    // let isRoute = eBaDataLayer.bound.find(x=>x.route == testobj.namePri.conditions.city_trav)?true:false;
    
    let obj ={
        isRoute:eBaDataLayer.bound.find(x=>x.route == testobj.namePri.conditions.city_trav)?true:false,
        isSale:toDay <= conditions.sale_start && toDay <= conditions.sale_end,
        flightDep:conditions.flight_dep !== null && typeof conditions.flight_dep !== "undefined"? eBaDataLayer.bound.find( x => conditions.flight_dep.find(k => k === x.flight_numbers) )?true:false:true,
        isMaket:conditions.maket !== null && typeof conditions.maket !== "undefined" ? conditions.maket.test(eBaDataLayer.maket):false
    }
    return obj;
}




/* 
check: ({ start, end, except_maket, is_page, chk_bound }) => {
		let nowDate = new Date();
		let excMaket = except_maket !== null ? except_maket.test(eBaDataLayer.market) !== true : true;
		let isPage = is_page.find(x => x === eBaDataLayer.page_code) ? true : false;
		let chkOpt = chk_bound !== null? Object.keys(chk_bound).map( key => chk_bound[key].test(eBaDataLayer.bound.map(x => x[key]).toString()))[0]:true;
		return (nowDate >= start && nowDate <= end && excMaket && isPage && chkOpt) ? true : false;
	}
*/
