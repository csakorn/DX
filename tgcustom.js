var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

/*const objTagScript = {
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
        }
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
        }
    }
}*/

/*function addScriptTG(nameOBJ) {
    let obj = objTagScript[nameOBJ];
    const _date = new Date();

    if (_date >= setDatef(obj.limitdate.start) && _date <= setDatef(obj.limitdate.end) ){

        let st1 = document.getElementById(obj.desElement_ID);
        let st2 = Object.keys(obj.txtScript);
        let pix_pageCode = eBaDataLayer.page_code === 'CONF' ? 'Purchase' : eBaDataLayer.page_code === 'PURC' ? 'AddToCart' : "";
        let createAttr, txtNode;
        let dataBooking = eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? "fbq('track', '" + pix_pageCode + "'," + objDataBooking() + ")" : "";
        st2.forEach((item) => {
            createAttr = document.createElement(item)
            txtNode = document.createTextNode(obj['txtScript'][item]['txt'] + ((item === 'script') ? dataBooking : ''))
            createAttr.appendChild(txtNode)
            st1.appendChild(createAttr)
        })
    }
}

const objDataBooking = () => {
    return JSON.stringify({
        connect_name: eBaDataLayer.page_code === 'CONF' ? modpnr(eBaDataLayer.pnr_nbr) : "",
        varlue: eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? eBaDataLayer.total_price : "",
        currency: eBaDataLayer.currency
    })
}*/

/*var _eMailTrigger = {
    baliprivilege: {
        send: function() {

            if (_eMailTrigger.chkEXP(["2019", "02", "13"], ["2019", "02", "17"], "null", "null", "baliprivilege", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function() {
                    chkSite() ? console.log("baliprivilege") : console.log(_eMailTrigger.obj);

                    if (_eMailTrigger.chkCountry(_eMailTrigger.baliprivilege.condition_country, 'eBaDataLayer', /[DPS]/) === true && ["BKK", "CNX", "CEI", "HDY", "KKC", "USM", "KBV", "LPT", "HGN", "NAW", "HKT", "THS", "URT", "TDX", "UBP", "UTH"].indexOf(eBaDataLayer.bound["0"].dep_airport) >= 0) {
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: _eMailTrigger.obj,
                            dataType: 'json'
                        }).done(function(result) {
                            console.log(result.success);
                        }).error(function(e) {
                            console.log(e.statusText)
                        });

                    } else console.log('country!=');
                }, 1000, 6);

            } else console.log('error : senddata')
        },
        condition_country: ["DPS"]
    },
    createOBJ: function() {
        let cOBJ = {
            pnr: eBaDataLayer.pnr_number,
            firstname: eBaDataLayer.passengerList[0].first_name,
            lastname: eBaDataLayer.passengerList[0].last_name,
            email: eBaDataLayer.contact_information.email
        };
        _eMailTrigger.obj = cOBJ;
    },
    chkEXP: function(C, H, E, D, K, P) {

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

        console.log('expStart=' + expStart + '\n', 'eBaDateOut=' + eBaDateOut, 'expBuy=' + expBuy, 'expEnd=' + expEnd, 'expBuyStart=' + expBuyStart)


        if (expBuy == "null") {
            if (expStart <= this.today && this.today <= expEnd) { //check Sales period
                _eMailTrigger.createOBJ();
                _eMailTrigger.obj.project = this.project;
                return true;

            } else {
                console.log(expStart, this.today, expBuy)
                return false;
            }
        } else {
            // console.log(expStart,expEnd,expBuy,expBuyStart)
            if (expStart <= this.today && this.today <= expEnd && this.postpone == "NO") {
                if (expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy) {
                    _eMailTrigger.createOBJ();
                    _eMailTrigger.obj.project = this.project;
                    return true;
                } else {
                    console.log(expStart, eBaDateOut, expBuy, expEnd, expBuyStart)
                    return false;
                }
            } else if (expStart <= this.today && this.today <= expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES") {
                _eMailTrigger.createOBJ();
                _eMailTrigger.obj.project = this.project;
                console.log("ok UK")
                return true;
            } else {
                // console.log(expStart,this.today,expBuy)
                console.log(expStart, eBaDateOut, expBuy, expEnd, expBuyStart)
                // console.log("xx")
                return false;

            }
        }
    },
    chkCountry: function(c, h, k) {
        const nameCountry = c,
            nameOBJ = window[h],
            rxg = k;
        // if(eBaDataLayer == "CONF"){
        for (i in nameOBJ["bound"]) {
            if (nameCountry.indexOf(nameOBJ["bound"][i].dep_airport) >= 0) {
                console.log('xxx')
                console.log(nameOBJ["bound"][i].dep_airport);
                return true;
            }
        }
        // }          
    }
}*/

/*function limitDate(xdate) {
    const _date = setDatef(xdate);
    return (new Date >= _date);
}
*/



// var iNetasia_Tealium = {
//     add: function () {
//         // console.log('fbpixel_acom');
//         implibdx.core.updateDom("footer#main-layout-bottom", function () {

//             const addTo = document.getElementById('main-layout-bottom');
//             const createAttr = document.createElement("script");
//             let txtNode = ''
//             // let content = ''
//             // let lang = eBaDataLayer.language;
//             // let exID = eBaDataLayer.external_id;

//             // createAttr.setAttribute('class', 'kxint');
//             // createAttr.setAttribute('data-namespace', 'thaiairways');
//             createAttr.setAttribute('type', 'text/javascript');

//             // let pnr = (eBaDataLayer.page_code == "CONF")?modpnr(eBaDataLayer.pnr_nbr):"";
//             // let currency = eBaDataLayer.currency;            
//             const content = `utag_cfg_ovrd={},a="//tags.tiqcdn.com/utag/thai-airways/main/prod/utag.js",b=document,c="script",d=b.createElement(c),d.src=a,d.type="text/java"+c,d.async=!0,d.onerror=function(){utag_cfg_ovrd.path="//tags.tiqcdn.cn/utag/thai-airways/main/prod/",a="//tags.tiqcdn.cn/utag/thai-airways/main/prod/utag.js",b=document,c="script",d=b.createElement(c),d.src=a,d.type="text/java"+c,d.async=!0,a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a)},a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a);`

//             // console.log(content);
//             txtNode = document.createTextNode(content)
//             createAttr.appendChild(txtNode);
//             addTo.appendChild(createAttr);
//             // }else console.log('fbpixel_SE');
//         }, 1000, 6);
//     }
// }

function _insurance(xcountry, xlanguage) {
    implibdx.core.updateDom("#insurance-select", function () {
        if (document.getElementById('insurance-select') !== null) {
            let lc = (x_objInsurance(xcountry, xlanguage) != undefined) ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB')
            $(".title-panel-text").html("<i class=\"icon-aid title-icon\" aria-hidden=\"true\"></i>" + lc.titlepanel)
            $(".box-insurance").html(lc.insurance_txt)
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>span.bold').html(lc.radio_1.txt_1)
            $("label[for='tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1']")[0].childNodes[2].textContent = lc.radio_1.txt_2;
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').html(lc.radio_1.txtPolicy)
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').attr('href', lc.radio_1.linkPolicy);
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup2"]').html(lc.radio_2.txt_1 + " " + lc.radio_2.txt_2);
        }
    }, 1000, 5);
    let lcx = (x_objInsurance(xcountry, xlanguage) != undefined) ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB')
    console.log(lcx);
    implibdx.core.updateDom("#terms-and-conditions", function () {
        $("#tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1").click(() => {
            let insurances_tc = "";
            setTimeout(() => {
                let inshref = chkSite() ? $('.checkbox a')[1] : $('.checkbox a')[2];
                let inshref_GB = chkSite() ? $('.checkbox a')[3] : $('.checkbox a')[4];
                if (eBaDataLayer.bound[0].dep_country === "HK") {
                    insurances_tc = eBaDataLayer.language === 'TW' ? inshref.textContent : inshref_GB.textContent;
                } else {
                    insurances_tc = inshref_GB.textContent;
                }

                if (insurances_tc.length === 10 && eBaDataLayer.bound[0].dep_country == 'HK') {
                    console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country)
                    inshref.href = lcx.radio_1.linkPolicy;
                } else {
                    console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country)
                    inshref_GB.href = lcx.radio_1.linkPolicy;
                }

            }, 2 * 1000);
        });

    }, 1000, 8);
}

function addFontAwesome() {
    const addTo = document.getElementsByTagName('head');
    const createAttr = document.createElement('link');
    createAttr.setAttribute('rel', 'stylesheet');
    createAttr.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');

    implibdx.core.updateDom("footer#main-layout-bottom", function () {
        addTo[0].appendChild(createAttr);
    }, 1000, 5)
}

$(".BaliTreat").on('click', function (event) {
    event.preventDefault();
    const infoBooking = {};
    infoBooking.data1 = dataTransfer['PNR#1_TITLECODE#1'];
    infoBooking.data2 = eBaDataLayer.passengerList[0].first_name;
    infoBooking.data3 = eBaDataLayer.passengerList[0].last_name;
    infoBooking.data4 = eBaDataLayer.trip_type;
    infoBooking.data5 = eBaDataLayer.contact_information.email;
    infoBooking.data6 = eBaDataLayer.pnr_number !== undefined ? eBaDataLayer.pnr_number : eBaDataLayer.pnr_nbr;
    infoBooking.data18 = eBaDataLayer.page_code;
    infoBooking.data19 = subscribe.check_site();
    infoBooking.data20 = "BaliTreat";

    onClickBanner(infoBooking);
})

function onClickBanner(obj) {

    $.ajax({
        type: 'POST',
        url: 'https://www.thaiairways.com/app/form/save_report',
        data: obj,
        dataType: 'json'
    }).done(function (result) {
        console.log(result.success);
    }).error(function (e) {
        console.log(e.statusText)
    });
}
function addObjTag() {
    objTagScript.pixelSG = {
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
function addScriptTGX(nameOBJ) {
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
            if(obj['typetag'] == 'fbpixel'){
                txtNode = document.createTextNode(obj['txtScript'][item]['txt'] + ((item === 'script') ? dataBooking : ''))
                createAttr.appendChild(txtNode)
            }else{
                createAttr.setAttribute('async', 'async');
                createAttr.src = obj['txtScript'][item]['txt'];
            }
            st1.appendChild(createAttr)
        })
    }
}
var dkPixel_log = () => {
    if ((/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && eBaDataLayer.page_code == "CONF") {
        const obj = {}
        obj.data1 = modpnr(eBaDataLayer.pnr_nbr);
        obj.data2 = eBaDataLayer.total_price;
        obj.data3 = eBaDataLayer.currency;
        obj.data4 = eBaDataLayer.external_id;
        obj.data5 = eBaDataLayer.market;
        obj.data6 = eBaDataLayer.pnr_nbr;
        obj.data7 = chkSite();
        obj.data19 = "thaiairways-DK";
        obj.data20 = "fbpixel_DK";

        $.ajax({
            type: 'POST',
            url: 'https://www.thaiairways.com/app/form/save_report',
            data: obj,
            dataType: 'json'
        }).done(function (result) {
            console.log(result.success);
        }).error(function (e) {
            console.log(e.statusText)
        });
    }
}



function remove_linkPolicy() {
    implibdx.core.updateDom(".contract-detail", function () {
        $(".contract-detail>div a").remove();
        $(".contract-detail>div a").css('display', 'none')
    }, 1000, 5);
}

// function linkDangerous(isMobile){
//     $("#link_dangerous").on('click',()=>{
//         $(".tripsummary-btn").click();
//     })
//     if(isMobile){
//         document.getElementById("link_dangerous").setAttribute('href',`javascript:$('.tabs-container>ul li[data-tab-index="2"]').click()`)
//     }
// }
var startFNJS = function startFNJS() {

    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // implibdx.core.updateDom("footer#main-layout-bottom",function(){
            //   (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
            // },1000,6);
            break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // implibdx.core.updateDom("footer#main-layout-bottom",function(){
            //     (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
            //   },1000,6);
            break;
        case "SDAI":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
        case "FDFF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
        case "FARE":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);


            break;
        case "ALPI":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;

        case "APIM":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
        case "AAS":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
        case "PURC":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            // chkSite() ? _insurance(eBaDataLayer.bound[0].dep_country,eBaDataLayer.language):console.log('insurance');
            // if (new Date() <= setDatef(['2019', '03', '5']) === true) {
            //     _insurance(eBaDataLayer.bound[0].dep_country, eBaDataLayer.language);
            // }

            // implibdx.core.updateDom("footer#main-layout-bottom",function(){
            //     (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
            //   },1000,6);

            break;
        case "CONF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // chkSite() === true ? _eMailTrigger.baliprivilege.send() : console.log('baliprivilege');
            // runWidget( (eBaDataLayer.market).split('_')[0] );            
            // chkSite() && dataTransfer['EXTERNAL_ID#4'] === "Line Village" && eBaDataLayer.trip_type === "RT" && eBaDataLayer.market === "HK" ? sendEmail.lineVillage.send() : false;
            addFontAwesome();
            // chkSite()?sendEmail.jdCentral.send():console.log('jdCentral');
            
            
            break;

        case "RTPL":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // runWidget( (eBaDataLayer.market).split('_')[0] );
            addFontAwesome();

            break;
        case "MDFSR":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
    }

    implibdx.core.updateDom("footer#main-layout-bottom", function () {
        console.log('ALL PAGE-2');
        addObjTag();
        // chkSite() ? console.log('tealium') : iNetasia_Tealium.add();
        // /\b^[SG]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTGX('pixelSG'):console.log('pixel_SG');
        // /\b^[DK]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true && eBaDataLayer.page_code == "CONF" ? dkPixel_log() : console.log('ignore-script');
        // /\b^[AT]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_AT') : console.log('ignore-script');
    }, 1000, 6);
};

jQuery(document).on("plnext:customData:ready", startFNJS);

// const fnScript = () =>{  
//  const objStart = {
//      FDCS:()=>{
//          (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
//      }
//  }
//  return objStart[eBaDataLayer.page_code]();
// }

// jQuery(document).on("plnext:customData:ready", fnScript);