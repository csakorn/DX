/*
 Modifide Date :: Tue Jul 17 2018 14:03:37 GMT+0700 (SE Asia Standard Time)
 Modifide By :: Chalermpol Sakorn
 ADD :: Abandon 
 */ 
var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

var dataTransfer = {};
var datatransferForm = function(item,arr){
  dataTransfer[item.name] = item.value;
}

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

var emailencrypt = function(email){
    return '"'+Base64.encode(email)+'"';
}

var bannerTG = {
    eServe:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_EN.jpg",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_TH.jpg"
            },
            alt:"Web Satisfaction Survey",
            linkURL:{
                GB:"http://www.thaiairways.com/en_TH/satisfaction_survey/survey_form_pnr.page",
                TH:"http://www.thaiairways.com/th_TH/satisfaction_survey/survey_form_pnr.page"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\')\""
        },
        param:{
            pnr:"pnr_nbr"
        },
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL']
        }
    },
    HotelsBestOffers:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_EN_CONF.jpg",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_TH_CONF.jpg"
            },
            alt:"Fly With Thai | Get Hotels Best Offers",
            linkURL:{
                GB:"javascript:void(0)",
                TH:"javascript:void(0)"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu HotelsOffers",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\')\""
        },
        param:"",
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL']
        }
    },
    BaliTreat:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/baliTreatPrivilege_banner.jpg"              
            },
            alt:"Bali Treat is special privilege",
            linkURL:{
                GB:"https://www.thaiairways.com/en_ID/plan_my_trip/Special_fare/Offers_Booking/Privilege.page"              
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'BaliTreat\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'BaliTreat\')\""
        },
        param:"",
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:{
                rex:'[DPS]{3}',
                data:['bound','0','route']
            },
            pagecode:['CONF','RTPL']
        }
    },
    HolidayTaxis:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisGB.png",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisTH.png"          
            },
            alt:"HolidayTaxis",
            linkURL:{
                GB:"https://www.holidaytaxis.com/en/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page",
                TH:"https://www.holidaytaxis.com/th/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\')\""
        },
        param:"",
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL']
        }
    }
}









function runWidget(){
	implibdx.core.updateDom("div#TGINSBanner", function(){

				wt_Takeme.add();
		rentalCar.add()
		wt_booking.add();
        teaserDisplay.addTeaser();
		ROH.sendData();

        	},1000,5)
}



var teaserDisplay = {
	objData:bannerTG,
	addTeaser:function(){		
           implibdx.core.updateDom("div.TGINSBanner", function() {		
			for(keys in teaserDisplay.objData){
				if( teaserDisplay.check(keys) === true){
					console.log('add',keys);					
					$("#TGINSBannerMenu").append("<aside class=\""+teaserDisplay.objData[keys].class+"\"><a href=\""+teaserDisplay.objData[keys].image.linkURL[eBaDataLayer.language]+teaserDisplay.param_obj(teaserDisplay.objData[keys].param)+"\" target=\""+teaserDisplay.objData[keys].target+"\" "+teaserDisplay.objData[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+teaserDisplay.objData[keys].image.URL[eBaDataLayer.language]+"\" alt=\""+teaserDisplay.objData[keys].image.alt+"\"></a></aside>");
				}
			}
		},1000,5);
	},
	check:function(n){
		if(	(teaserDisplay.objData[n].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && teaserEXP(n) === true ){
			if(teaserDisplay.objData[n].condition.chk === null){
				return true;
			}else{ 
				console.log(eBaDataLayer[teaserDisplay.objData[n].condition.chk.data[0]][teaserDisplay.objData[n].condition.chk.data[1]])
			}
		}else{
			console.log('NO');
			return false;
		}
	},
	param_obj:function(obj){
		let result = {};
		for(key in obj){
				if(obj !== ''){
					result[key] = eBaDataLayer[obj[key]];
				}else{
					return '';
				}
		}
		return '?'+$.param(result)
	}
}

var addBanner = function(objName,market,param,lang){

	if(eBaDataLayer.external_id.match(market) && eBaDataLayer.language == lang){
		implibdx.core.updateDom("div#TGINSBanner", function(){

						$("#TGINSBannerMenu").append(addTGBanner.creHTML(objName,param));			
		},1000,5);
	}else return false;


	implibdx.core.updateDom("div#TGINSBanner", function(){






	},1000,5);
}



var addTGBanner = {
	creHTML: function(name,param){
		this.banner = name;
		this.param = param;
		this.htmlBN = "";
		this.code = eBaDataLayer.page_code;
		if(checkEXP(this.banner) == true ){
			this.htmlBN = "<aside class=\""+bannerTG[this.banner].class+"\"><a href=\""+bannerTG[this.banner].link+this.param+"\" target=\""+bannerTG[this.banner].target+"\" "+bannerTG[this.banner].onClick[this.code]+"><img src=\""+bannerTG[this.banner].image+"\" alt=\""+bannerTG[this.banner].alt+"\"></a></aside>";
		}else{
			return this.htmlBN = "";
		}
		return this.htmlBN;
	}
}




var travellerAlert = {
	GB:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Traveller Alert</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">For THAI flight bookings created via travel agents or other intermediaries other than via thaiairways.com, please note that the feature to pre-select seating or view pre-selected seating is temporarily unavailable.  We recommend you contact your travel agent or your nearest THAI office for more information and assistance.  We apologise for any inconvenience caused.</p>',
	FR:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Alerte voyageur !</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">Pour toutes réservations sur THAI créées par l\'intermédiaire d\'agents de voyages ou des intermédiaires autres que thaiairways.com, veuillez noter que la fonctionnalité permettant de présélectionner les sièges ou de voir les sièges présélectionnés est momentanément indisponible. Contactez votre agent de voyage ou le bureau THAI le plus proche pour plus d\'informations et d\'assistance. Veuillez nous excuser pour tout inconvénient causé.</p>',
	TH:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22\u0e43\u0e19\u0e04\u0e27\u0e32\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e30\u0e14\u0e27\u0e01 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e23\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e14\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e0a\u0e31\u0e48\u0e27\u0e04\u0e23\u0e32\u0e27\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e0b\u0e37\u0e49\u0e2d\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c<a href="http://www.thaiairways.com">thaiairways.com</a> \u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22</p>',
	JP:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u306eWEB\u30b5\u30a4\u30c8 (<a href="http://www.thaiairways.com">thaiairways.com</a>) \u4ee5\u5916\u306e\u3001\u65c5\u884c\u4f1a\u793e\u3084\u4ed6\u306e\u7b2c\u4e09\u8005\u306b\u3066\u4e88\u7d04\u3055\u308c\u305f\u5f0a\u793e\u306e\u8a18\u9332\u3067\u306f\u5ea7\u5e2d\u306e\u9078\u629e\u3084\u9078\u629e\u6e08\u306e\u5ea7\u5e2d\u306e\u8868\u793a\u304c\u4e00\u6642\u7684\u306b\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002 <br>\u4e88\u7d04\u5143\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u3054\u4e0d\u4fbf\u304a\u304b\u3051\u3044\u305f\u3057\u307e\u3059\u304c\u3001\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u4e0b\u3055\u3044\u3002\n</p>'
}
var _extraServiceOBJ = {
	seat:{
		CN:"<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u56fd\u9645\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d48\u5c0f\u65f6\u5728\u7ebf\u9884\u9009\u673a\u4e0a\u5ea7\u4f4d</p>",
		DE:"<p class=\"box_service\">Sitzplatzreservierungen k\u00f6nnen bei internationalen Fl\u00fcgen bis 48 Stunden vor Abflug vorgenommen werden.</p>",
		ES:"",
		FR:"<p class=\"box_service\">R\u00e9server votre si\u00e8ge en ligne jusqu\'\u00e0 48 heures avant le d\u00e9part de votre vol</p>",
		GB:"<p class=\"box_service\">Online seat reservation is possible on international flights until 48 hours before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">La prenotazione online del posto, solo sui voli internazionali TG a 3 cifre,  \u00e8possibile fino a 48 ore prima della partenza.</p>",
		JP:"<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u5ea7\u5e2d\u3092\u3054\u6307\u5b9a\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n</p>",
		KO:"<p class=\"box_service\">\uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud55c \uc88c\uc11d \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 \u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01</p>",
		TW:"<p class=\"box_service\">\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u670d\u52d9\u3002</p>",
		SE:"<p class=\"box_service\">Du kan v\u00e4lja din sittplats online p\u00e5 internationella flyg fram till 48 timmar innan avg\u00e5ng p\u00e5 TG flyg med tre siffror.</p>"

	},
	meal:{
		CN:"<p class=\"box_service\">\u7531\u66fc\u8c37\u51fa\u767c\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u53ef\u65bc\u8d77\u98db24\u5c0f\u6642\u4e4b\u524d\u9810\u8a02\u9910\u81b3\uff0c\u800c\u524d\u5f80\u66fc\u8c37\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8acb\u65bc48\u5c0f\u6642\u4ee5\u4e0a\u9810\u8a02\u9910\u81b3 \u3002(\u53ea\u9069\u7528TG 3\u4f4d\u6578\u5b57\u4e4b\u6cf0\u822a\u71df\u904b\u822a\u73ed)</p>",
		DE:"<p class=\"box_service\">Sondermen\u00fc k\u00f6nnen bei internationalen Fl\u00fcgen bis 24 Stunden vor Abflug vorgenommen werden.</p>",
		ES:"",
		FR:"<p class=\"box_service\">Le choix d\u2019un repas peut \u00eatre fait sur un vol international, 24 heures avant le d\u00e9part du vol</p>",
		GB:"<p class=\"box_service\">Meal selection is possible on International flight until 24 hrs for outbound from Bangkok and 48hrs for inbound to Bangkok before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">La selezione online dei pasti, sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 48 ore prima della partenza per voli versoBangkok e fino a 24 ore prima della partenza per i voli da Bangkok.</p>",
		JP:"<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\uff08\u30d0\u30f3\u30b3\u30af\u767a\u306f24\u6642\u9593\u524d\u307e\u3067\uff09\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u7279\u5225\u6a5f\u5185\u98df\u3092\u304a\u7533\u3057\u8fbc\u307f\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n</p>",
		KO:"<p class=\"box_service\">\uae30\ub0b4\uc2dd \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ubc29\ucf55 \ucd9c\ubc1c\uc758 \uacbd\uc6b0 \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0 \uac00\ub2a5\ud558\uc9c0\ub9cc \uadf8\uc774\uc678 \uc9c0\uc5ed\uc5d0\uc11c \ucd9c\ubc1c\uc758 \uacbd\uc6b0 (\ub300\ud55c\ubbfc\uad6d \ud3ec\ud568) \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"<p class=\"box_service\">\u0412\u044b\u0431\u043e\u0440 \u043f\u0438\u0442\u0430\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u043d\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 \u0437\u0430 24 \u0447\u0430\u0441\u0430 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u043d\u0430 \u0440\u0435\u0439\u0441\u0430\u0445 \u0438\u0437 \u0411\u0430\u043d\u0433\u043a\u043e\u043a\u0430 \u0438 \u0437\u0430 48 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u0432 \u0411\u0430\u043d\u0433\u043a\u043e\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0440\u0435\u0439\u0441\u043e\u0432 \u0441 \u0442\u0440\u0435\u0445\u0437\u043d\u0430\u0447\u043d\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438.</p>",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e2d\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e43\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f \u0e41\u0e25\u0e30 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2a\u0e39\u0e48\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f</p>",
		TW:"<p class=\"box_service\">\u9810\u9078\u6a5f\u4e0a\u9910\u98df\u670d\u52d9\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u5f9e\u66fc\u8c37\u767c\u51fa\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\uff0c\u53ca\u5f9e\u5916\u7ad9\u98db\u5f80\u66fc\u8c37\u4e4b\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\uff0c\u53ef\u80fd\u63d0\u4f9b\u9810\u9078\u9910\u98df\u670d\u52d9\u3002</p>",
        SE:"<p class=\"box_service\">Du kan v\u00e4lja m\u00e5ltid p\u00e5 internationella flyg framtill 24 timmar innan utresa fr\u00e5n Bangkok och 48 timmar innan avresa f\u00f6r inresa till Bangkok. Detta g\u00e4ller endast p\u00e5 TG flyg med 3 siffror. </p>"
	},
	baggage:{
		CN:"<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d</p>",
		DE:"<p class=\"box_service\">Zusatzgep\u00e4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.</p>",
		ES:"",
		FR:"<p class=\"box_service\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol.</p>",
		GB:"<p class=\"box_service\">Online Additional baggage purchase is possible oninternational flights operated until 24 hours before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza.</p>",
		JP:"<p class=\"box_service\">\u5065\u5eb7\u30fb\u5b97\u6559\u4e0a\u306e\u7279\u5225\u6a5f\u5185\u98df\u306e\u30ea\u30af\u30a8\u30b9\u30c8\uff08\u56fd\u969b\u7dda\u306b\u9650\u308b\uff09\u306f\u3001\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53ef\u80fd\u3067\u3059\u3002</p>",
		KO:"<p class=\"box_service\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 </p>",
		TW:"<p class=\"box_service\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002</p>",
        SE:"<p class=\"box_service\">Att k\u00f6pa extra bagage \u00e4r tillg\u00e4ngligt p\u00e5 internationella flyg fram till 24 timmar innan avresa p\u00e5 TG flyg med 3 siffror. </p>"
	}
}
var dialog_baggage ={
	CN:"<p class=\"box_service-dialog\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_CN.html\">More information </a></p>",
	DE:"<p class=\"box_service-dialog\">Zusatzgepäck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>",
	ES:"",
	FR:"<p class=\"box_service-dialog\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_FR.html\">More information </a></p>",
	GB:"<p class=\"box_service-dialog\">Online Additional baggage purchase is possible oninternational flights operated until 24 hours before departure of TG 3 digits flight only. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>",
	IT:"<p class=\"box_service-dialog\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">Ulteriori Informazioni </a></p>",
	JP:"<p class=\"box_service-dialog\">\u4e8b\u524d\u652f\u6255\u306b\u3088\u308b\u53d7\u8a17\u624b\u8377\u7269\u91cd\u91cf\u67a0\u306e\u8ffd\u52a0\uff08\u56fd\u969b\u7dda\u306b\u9650\u308b\uff09\u306f\u3001\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53ef\u80fd\u3067\u3059\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_JP.html\">More information </a></p>",
	KO:"<p class=\"box_service-dialog\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_KO.html\">\uc790\uc138\ud788 \ubcf4\uae30</a></p>",
	RU:"",
	TH:"<p class=\"box_service-dialog\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con.html\">\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21</a></p>",
	TW:"<p class=\"box_service-dialog\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_TW.html\">More information </a></p>",
	SE:"<p class=\"box_service-dialog\">Att k\u00f6pa extra bagage \u00e4r tillg\u00e4ngligt p\u00e5 internationella flyg fram till 24 timmar innan avresa p\u00e5 TG flyg med 3 siffror. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>"
}
var FYIHtml = {
	GB:"<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. Collection of personal information</h3> <p>The Company collects the following personal information:</p> <p>The Company only collects the necessary information created automatically through reservation, ticketing, consultations and service requests. Required Information: gender, name (Korean/English), email address and contact information (i.e. telephone, mobile phone), ticket number or reservation number</p> <ol> <li>1-1. Optional Information: mileage membership number, urgent contact number, meal request and seat assignment.</li> <li>1-2. Additional Information: The following additional information is required to make payment when you purchase our products and service ncluding tickets [ credit card type, number, expiration date, cvv (Card Verification Value) number, ownerÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s name, bank name and account number ] </li> <li>1-3. How your personal information is collected: Via the Thai Airways website, Call center</li> </ol> <h3>2. Collection and use of personal information</h3> <p>The Company uses the personal information we collect for the following purposes:</p> <p>Settlement of Payment for Execution of Agreement and Providing Service: providing contents, booking/ticketing, delivery of products including tickets, sending bills, certification for banking service, purchase and fee payment, and collecting fee.</p> <h3>3. Term for Retaining and Using Personal Information</h3> <p>We will destroy all your personal information in our possession immediately when it is no longer necessary for the purposes for which it was collected if: </p> <p>However, we may retain personal information for a specified period of time if deemed required in accordance with the applicable provisions of the Consumer Protection Act in Commercial Law and E-Commerce Act even after it becomes no longer necessary for the purposes for which it was collected.</p> <p>In this case, we will not use your personal information for purpose other than it was collected and it will be retained for the following period:</p> <ol> <li>3-1. Collected information: Name, Email address, Contact number</li> <li>3-2. Retention basis: We retain personal information if customers make an agreement. If it is refused, we will destroy all personal nformation immediately </li> <li>3-3. Retention Period: 5 years</li> </ol> </div>",
	KO:"<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9</h3><p>\uc218\uc9d1\ud558\ub294 \uac1c\uc778 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. </p> <p>\ud0c0\uc774\ud56d\uacf5 \ud56d\uacf5\uad8c \uc608\uc57d, \ubc1c\uad8c, \uad6c\ub9e4\uc0c1\ub2f4 \ubc0f \uc11c\ube44\uc2a4 \uc2e0\uccad\uc73c\ub85c \uc778\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294\ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uc815\ubcf4\ub9cc\uc744 \uc218\uc9d1\ud558\uac8c \ub429\ub2c8\ub2e4.</p> <ol> <li>1-1. \uc218\uc9d1\ud56d\ubaa9 \uc911 \ud544\uc218\ud56d\ubaa9: \uc131\ubcc4, \uc774\ub984, \uc774\uba54\uc77c, \uc804\ud654\ubc88\ud638, \ud2f0\ucf13\ubc88\ud638 \ub610\ub294 \uc608\uc57d\ubc88\ud638</li> <li>1-2. \uc218\uc9d1\ud56d\ubaa9 \uc911 \uc120\ud0dd\ud56d\ubaa9: \ub9c8\uc77c\ub9ac\uc9c0 \uce74\ub4dc\ubc88\ud638, \uae34\uae09\uc5f0\ub77d\ucc98, \uc88c\uc11d \ubc0f \uc2dd\uc0ac\uc694\uccad</li> <li>1-3. \ucd94\uac00\uc785\ub825\uc815\ubcf4 : \ud56d\uacf5\uad8c \uad6c\ub9e4 \ub4f1 \ub2f9\uc0ac\uc758 \uc0c1\ud488 \ubc0f \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub300\uae08\uacb0\uc81c \uc2dc\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ucd94\uac00\uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n \x3Cbr\x3E[\uce74\ub4dc\uc885\ub958, \uce74\ub4dc\ubc88\ud638, \uc720\ud6a8\uae30\uac04, cvv ( Card Verification Value )\ubc88\ud638, \uce74\ub4dc\uc0c1 \uc18c\uc720\uc8fc\uc774\ub984, \uacc4\uc88c\ubc88\ud638]</li> <li>1-4. \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\ubc29\ubc95 : \ud0c0\uc774\ud56d\uacf5 \ud648\ud398\uc774\uc9c0, \ucf5c\uc13c\ud130\ub97c \ud1b5\ud55c \uc720\uc120\uc0c1\ub2f4</li> </ol> <h3>2. \uac1c\uc778\uc815\ubcf4\uc758 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801</h3> <p>\ud0c0\uc774\ud56d\uacf5\uc740 \uc218\uc9d1\ud55c \uac1c\uc778\uc815\ubcf4\ub97c \ub2e4\uc74c\uc758 \ubaa9\uc801\uc744 \uc704\ud574 \ud65c\uc6a9\ud569\ub2c8\ub2e4.</p> <p>\uc11c\ube44\uc2a4\uc81c\uacf5\uc5d0 \uad00\ud55c \uacc4\uc57d\uc774\ud589 \ubc0f \uc11c\ube44\uc2a4 \uc81c\uacf5\uc5d0 \ub530\ub978 \uc694\uae08\uc815\uc0b0 : \ucf58\ud150\uce20 \uc81c\uacf5, \ud56d\uacf5\uad8c \uc608\uc57d\u318d\ubc1c\uad8c, \ud56d\uacf5\uad8c \ub4f1 \uac01\uc885 \ubb3c\ud488\ubc30\uc1a1 \ub610\ub294 \uccad\uad6c\uc11c \ubc1c\uc1a1, \uad6c\ub9e4 \ubc0f \uc694\uae08\uacb0\uc7ac</p> <h3>3. \uac1c\uc778\uc815\ubcf4\uc758 \ubcf4\uc720 \ubc0f \uc774\uc6a9\uae30\uac04</h3> <p>\uc6d0\uce59\uc801\uc73c\ub85c, \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801\uc774 \ub2ec\uc131\ub41c \ud6c4\uc5d0\ub294 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc9c0\uccb4 \uc5c6\uc774 \ud30c\uae30\ud569\ub2c8\ub2e4. \ub2e8, </p> <p>\uad00\uacc4\ubc95\ub839\uc758 \uaddc\uc815\uc5d0 \uc758\ud558\uc5ec \ubcf4\uc874\ud560 \ud544\uc694\uac00 \uc788\ub294 \uacbd\uc6b0 \ud68c\uc0ac\ub294 \uc544\ub798\uc640 \uac19\uc774 \uad00\uacc4\ubc95\ub839\uc5d0\uc11c \uc815\ud55c \uc77c\uc815</p> <p>\ud55c \uae30\uac04 \ub3d9\uc548 \ud68c\uc6d0\uc815\ubcf4\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4.</p> <ol> <li>3-1. \ubcf4\uc874 \ud56d\ubaa9 : \uc774\ub984 , \uc774\uba54\uc77c , \uc804\ud654\ubc88\ud638</li> <li>3-2. \ubcf4\uc874 \uadfc\uac70 : \ud68c\uc6d0\ub4e4\uc758 \ub3d9\uc758\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc218\ub839\ud558\uba70 \uac70\ubd80\uc2dc \uc0ad\uc81c</li> <li>3-3. \ubcf4\uc874 \uae30\uac04 : 5\ub144</li> </ol></div>"
}
var labelPlstick ={
	GB : "Please tick this box to accept and agree as following.",
	KO : "\uc544\ub798 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uacfc \ud65c\uc6a9 \ubc0f \uae30\ud0c0 \uaddc\uc815\uc5d0 \ub300\ud55c \ucd94\uac00 \ub3d9\uc758\ub97c \uc704\ud558\uc5ec \uccb4\ud06c \ubc15\uc2a4\ub97c \ud074\ub9ad\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624."
}
var updateHTML = {
	hilight_Content:{
		add:function(d,i,v){
			implibdx.core.updateDom(d,function(){
				$(i).css("color",v);
			},1000,5);
		},
		content_FARE:function(){
			updateHTML.hilight_Content.add("div.flight-info-cabin",".flight-info-cabin div.flight-info-right","#ce0058");
			implibdx.core.updateDom("div.flight-info-airline",function(){
				$.each($("div.flight-info-airline").find("bdo"),function(key,value){
					if((/[TG]{2}/).test( $("span.flight-info-airline-flight").find("bdo")[key].innerText ) == false){
						$(this.offsetParent).css("color","#ce0058")
					}
				});
			},1000,5);
		}
	},
	service:{
		travellerAlert_RTPL:function(){
			implibdx.core.updateDom("section#services-breakdown", function(){
				if(eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR" || eBaDataLayer.language == "TH"){
					$(".servicesbreakdown-panel-body").after(travellerAlert[eBaDataLayer.language]);
				}else{
					$(".servicesbreakdown-panel-body").after(travellerAlert["GB"]);
				}
			},1000,3);
		}
	},
	extraService:function(SIT,MEA,BAG,idbox){
		implibdx.core.updateDom(idbox, function(){
			setTimeoutBAG();
			console.log(SIT,BAG,MEA)
			$(SIT).append( check.defaultLang(_extraServiceOBJ.seat,eBaDataLayer.language,"GB") );
			$(BAG).append( check.defaultLang(_extraServiceOBJ.baggage,eBaDataLayer.language,"GB") );
			$(MEA).append( check.defaultLang(_extraServiceOBJ.meal,eBaDataLayer.language,"GB") );


		},1000,4);
	},
	remove_content:{
		price_RTPL:function(){
			implibdx.core.updateDom("div.pnrd-view.row", function() {
				$('.price-details').remove();
			}, 1000, 5);
		},
		servicesbreakdown:function(p){
			if(eBaDataLayer.page_code == p){
				implibdx.core.updateDom("section#services-breakdown", function() {
					var a = eBaDataLayer.bound.length;
					for (var i = 0; i < a; i++) {
						var b = eBaDataLayer.bound[i].flight_numbers.slice(2);
						if (b < 300) {
							jQuery("section#services-breakdown").css("display", "none");
						} else {
							jQuery("section#services-breakdown").css("display", "block");
							break;
						}
					}
				}, 1000, 5);
			}
		},
		additional_services:function(){
			 implibdx.core.updateDom("section#reservation-details", function() {
                $("#services-breakdown footer").remove();
            }, 1000, 5)
		}
	},
	Passengerinfo:function(){

		implibdx.core.updateDom("section.traveller-panel-body.panel-body",function(){
			$('select[id $= \'_ADT-FREQ_Airline_0\']>option[value=\'AI\']').html('Air India');
		},1000,5);


		if (eBaDataLayer.currency == "SGD") {
			implibdx.core.updateDom("section.traveller-panel-body.panel-body",function(){
				$("label[for $=\"_ADT-IDEN_TitleCode\"]").append(" (as in passport)");
				$("label[for $=\"_ADT-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_CHD-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");

								$("label[for $=\"_YTH-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_YTH-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");

							},1000,5);
		}
	},
	clickConfirm:function(){
		if(eBaDataLayer.currency == "KRW" && ( eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")){
			implibdx.core.updateDom("div.purchase-conditions",function(){
				var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
				$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">"+ labelPlstick[eBaDataLayer.language] +"</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
				$("#showCondition").on("click",function(){
					if($(this).attr('data-toggled') == 'off') {
						$(this).attr('data-toggled','on');
						$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
						$("#FYIHtml>div#TAC").html(clickConfirm).show();
					}else if($(this).attr('data-toggled') == 'on'){
						$(this).attr('data-toggled','off');
						$("#FYIHtml").remove();
					}
				});
			},1000,6);
		}
	}
}

function setTimeoutBAG(){
	$("#tpl7_BAG").on("click", function(e) {
		window.setTimeout(function(){
			console.log("setTimeout")
			$("div.service-container.col-xs-24").append( check.defaultLang(dialog_baggage,eBaDataLayer.language,"GB") );
		},600)
	});
	$("#tpl3_BAG").on("click", function(e) {
		window.setTimeout(function(){
			console.log("setTimeout")
			$("div.service-container.col-xs-24").append( check.defaultLang(dialog_baggage,eBaDataLayer.language,"GB") );
		},600)
	});
}

function lowest(){
	if(eBaDataLayer.page_code == '')
		implibdx.core.updateDom("div#matrix-second-row",function(){
			$("#calendar-matrix-inner>table tbody tr>td>div>div>div i[title='Lowest Fares']").parents('div.calendarmatrix-inner-cell').css('border','2px solid #259800')
		},1000,5);
	if(eBaDataLayer.page_code == 'FPOW'){
		implibdx.core.updateDom("div#matrix-second-row",function(){
			$("div.bound-table-flightline div>header>i[title='Lowest Fares']").parents('div.bound-table-cell-reco-available').css('border','2px solid #259800')
		},1000,5);
	}
}
function _addClass(x,y){
	let _Start = document.getElementById(x)
	let _Desti = y
	implibdx.core.updateDom("div#matrix-second-row",function(){
		_Start.classList.add(_Desti);
	},1000,5);
}


var clickConfirm_KOR = function(){
	if(eBaDataLayer.currency == "KRW" && ( eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")){
		implibdx.core.updateDom("div.purchase-conditions",function(){
			var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
			$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">"+ labelPlstick[eBaDataLayer.language] +"</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
			$("#showCondition").on("click",function(){
				if($(this).attr('data-toggled') == 'off') {
					$(this).attr('data-toggled','on');
					$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
					$("#FYIHtml>div#TAC").html(clickConfirm).show();
				}else if($(this).attr('data-toggled') == 'on'){
					$(this).attr('data-toggled','off');
					$("#FYIHtml").remove();
				}
			});
		},1000,6);
	}
}

var createEM ={
	create:function(tag,txt,sta){
		if(tag != ""){
			this.tag = tag;
			this.content = txt;
			this.status = sta;
			let anchor = document.createElement(this.tag);
			let txtNode = '';

			switch(this.status){
				case '0' : 	
				txtNode = document.createTextNode(this.content);
				anchor.appendChild(txtNode);
				break;
				case '1': anchor.src = this.content;
				break;			
			}
			return anchor;
		}else return false;
	}
}

var widgetScript = {
    destination:function(objName,idName,elmName,attrName,src){         
       this._Anchor = objName[idName];
       this._Elm = objName[elmName];
       this._Attr = objName[attrName];
       this._Src = objName[src];

        let _anchor = document.getElementById(this._Anchor);
        let createAttr = document.createElement(this._Elm);

        (this._Src)?createAttr.src = this._Src:'';

        for(key in this._Attr){
           createAttr.setAttribute(key,this._Attr[key]);
           console.log('--------------------------------->Run2')
        }
        console.log('widgetScript');       
        _anchor.appendChild(createAttr);            
    }
}
function ExpandCarSearch (argument) {

	}
var checkDate = function(tdate,expdate){
	this.tdate = tdate.split("/");
	this.expdate = expdate.split("/");
	this.travel = new Date(this.tdate[2],(this.tdate[1]-1),this.tdate[0]);  
	this.expEnd = new Date(this.expdate[2],(this.expdate[1]-1),this.expdate[0])
	console.log( this.travel + "----"+ this.expEnd);

	if (this.travel <= this.expEnd) return true;
	else return false;

}
var teaserEXP = function(name){
	if(bannerTG[name].condition.displaycon != ""){
		this.expStart =  setDatef(bannerTG[name].condition.start);
		this.expEnd =  setDatef(bannerTG[name].condition.end);
		if(bannerTG[name].condition.displaycon == "Departure") {
			this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
			this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
			this.today = new Date();
			this.eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
			this.eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);
			if(this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd){
				return true;
			}else{
				return false;
			}
		}
		if(bannerTG[name].condition.displaycon == "ticketing") {
			this.toDay = new Date();
			if(this.toDay <= this.expEnd &&  this.expStart <= this.toDay){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}else{
		return true;
	}
}

var checkEXP = function(name){


	if(bannerTG[name].exp.condition != ""){
		this.expStart =  setDatef(bannerTG[name].exp.start);
		this.expEnd =  setDatef(bannerTG[name].exp.end);

		if(bannerTG[name].exp.condition == "Departure") {

			this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
			this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
			this.today = new Date();

			this.eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
			this.eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);

			if(this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd){
				console.log(name+"=>OK"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
				return true;
			}else{
				console.log(name+"=>exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn);
				return false;
			}
		}
		if(bannerTG[name].exp.condition == "ticketing") {
			this.toDay = new Date();
			console.log(this.expStart+'-------------'+this.expEnd);
			if(this.toDay <= this.expEnd &&  this.expStart <= this.toDay){
				console.log(name+"=>OK"+"---date"+this.toDay+"---"+this.expEnd)
				return true;
			}else{
				console.log(name+"=>exp"+"---date"+this.toDay+"---"+this.expEnd);
				return false;
			}
		}


	}else{
		console.log(name+"=>no exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
		return true;
	}
}
var setDatef = function(arr){
	var setDatef ="";
	var toDay = new Date();
	setDatef = toDay.setFullYear(arr[0],arr[1],arr[2]);
	return setDatef;
}

var check = {
	period:function(d,a,t,e){
		let toDate = new Date();
		let chkInDate,chkOutDate,toDaydate;
		this.d = d.split("-"); 
		this.a =a; 
		this.t = t.split("-") 
		this.e = e; 
		chkInDate = new Date(this.d[0],this.d[1],this.d[2]);
		chkOutDate = new Date(this.t[0],this.t[1],this.t[2]);
		toDaydate = new Date();


		if(this.e == 0){
			if(chkInDate >= new Date(toDaydate.setDate(toDaydate.getDate()+this.a))) return true;
			else return false;

		}else{
			if(chkOutDate <= new Date(chkInDate.setDate(chkInDate.getDate()+this.a))) return true;
			else return false;
		}

	},

	lang:function(l){
		this.l = l;
		this.result;
		if(this.l == "TH") return this.result = ['1','b2cth','th'];
		else return this.result = ['7','b2c',''];
	},

	currency:function(c){
		this.c = c;
		if( this.c == "THB" || this.c == "EUR" || this.c == "USD" || this.c == "AUD" || this.c == "JPY" || this.c == "NZD" || this.c == "DKK" || this.c == "HKD" || this.c == "GBP" || this.c == "SGD" || this.c == "SEK" || this.c == "CHF" || this.c == "CNY" || this.c == "TWD" || this.c == "KRW" || this.c == "LKR" || this.c == "AED" || this.c == "PKR" || this.c == "ZAR" || this.c == "OMR" || this.c == "MYR" || this.c == "NOK" || this.c == "KWD"){
			return this.c;
		}else return "THB";
	},
	ADT:function(atxt){
		this.atxt = atxt;
		this.sumAdt = 0;

		for(key in eBaDataLayer.passengers){
			if(eBaDataLayer.passengers[key]["pax_type"] == this.atxt) this.sumAdt++;
		}
		return this.sumAdt;
	},
	chkdate:function(d){
		this.d = d;
		this.spl ;
		this.spl = this.d.split("/");
		console.log(this.spl);
		return this.spl[2]+"-"+this.spl[1]+"-"+this.spl[0];
	},
	date_travel:function(d){
		this.date = d.split("-");
		return this.date[2]+" "+check.months[eBaDataLayer.language][this.date[1]-1]+" "+this.date[0];
	},
	trip_type:function(t){
		this.t = t;
		this.vDate ;
		if(this.t == "OW"){
			this.vDate = check.chkdate(eBaDataLayer.bound[0].arr_date).split("-");
			this.vDate[2] = parseInt(this.vDate[2])+1;
			console.log(this.vDate);
			return this.vDate[0]+"-"+this.vDate[1]+"-"+this.vDate[2];
		}else return check.chkdate(eBaDataLayer.bound[1].dep_date);
	},
	depCity:function(){
		if(typeof(eBaDataLayer.city_search_in) != "undefined")  return eBaDataLayer.city_search_in; else return eBaDataLayer.bound.slice(-1)[0].dep_city;
	},
	extid:function(val){
		this.eid = val;
		let data_extid = ["KH00015","IN00018","ID00024","LO00007","MY00017","MM00024","PH00029","SG00023","VN00037","AU00036","PK00011","LK00005"];

		for(i = 0;i<= data_extid.length; i++){
			if(this.eid == data_extid[i]) return true;
		}
		return false;
	},
	months:{
		GB:["January","February","March","April","May","June","July","August","September",	"October",	"November",	"December"],
		TH:["\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"]
	},
	defaultLang:function(o,l,d){
		this.obj = o;
		this.language = l;
		this.defLang = d;

		return (this.obj[this.language] !== "" ? this.obj[this.language] : this.obj[this.defLang]);
	}

}
var modpnr = function(pnr){
	var modDate = new Date();
	var mergeDate = modDate.getFullYear()+''+(modDate.getMonth()+1)+''+modDate.getDate()+''+modDate.getHours()+''+modDate.getMinutes()+''+modDate.getSeconds()+''+modDate.getMilliseconds();
	return mergeDate+''+pnr.match(/[a-zA-Z0-9]{1}$/)[0];
}

function chkSite(x){
	if(window.location.hostname != 'wav.bibi.amadeus.com'){
		return true;
	}
	return false;
}
var goodservice_india = {
	txtHTML:{
		header:{
			GB:'Good & Service Tax for India',
			TH:'\u0e20\u0e32\u0e29\u0e35\u0e01\u0e32\u0e23\u0e02\u0e32\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22'
		},
		txtBody:{
			TH :'\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e43\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22 \u0e41\u0e25\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 GST tax invoice <a id="gstax" target="_blank" href="javascript:void(0);">\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e14</a>',
			GB : 'Passenger who start traveling flight from India and require GST tax invoice. <a id="gstax" target="_blank" href="javascript:void(0);">Please click.</a>'
		}		
	},
	cHTML:function(x){
		this.lang = x;
		let result = '<div class="box-goodservice_india"><header class="panel-heading services-policy-heading"><i class="icon-ticket" aria-hidden="true"></i>'+goodservice_india.txtHTML.header[this.lang]+'</header><p>'+goodservice_india.txtHTML.txtBody[this.lang]+'</p></div>'
		return result;
	},
	AddData:function(){		
		if( eBaDataLayer.page_code == "PURC" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' &&( eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB" )) {
			implibdx.core.updateDom("div#purc_afterPayment",function(){
				$(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#purc_afterPayment");
				$("#gstax").on('click',function(){
					window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr='+eBaDataLayer.pnr_number+' ','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
				})
			},1000,6);									
		}else if(eBaDataLayer.page_code == "CONF" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' &&( eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") ){

			implibdx.core.updateDom("#reservation-details",function(){
				$(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#reservation-details");
				$("#gstax").on('click',function(){
					window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr='+eBaDataLayer.pnr_number+' ','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
				})
			},1000,6);
		}
	}
}


var objNamescript ={
    jetradar :{ 
        elm1:{
            tag:"img",
            txt:"http://pixel.aviasales.ru/ThaiAirways?",
            case:"1", 
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
    everymundo_FareNet:{ 
        elm1:{
            tag:"script",
            txt:"https://www.securitytrfx.com/js/tg.js",
            case:"1"
        }
    },
    acom:{ 
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

    pixel_SG_FPOW:{ 
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
    pixel_SG_FARE:{ 
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
    pixel_SG_ALPI:{
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
    pixel_SG_PURC:{
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
    pixel_SG_CONF:{
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
        anchor.appendChild( createEM.create(objNamescript[objName][x].tag,(objNamescript[objName][x].paramData)?pathData(objNamescript[objName][x].paramData,objNamescript[objName][x].txt):objNamescript[objName][x].txt,objNamescript[objName][x].case) )         
        }
        fn;
    },1000,5);

}

var tripAdvisor ={ 
    add:function(){

        implibdx.core.updateDom("footer#main-layout-bottom",function(){
            let addTo = document.getElementById('main-layout-bottom');
            let txt_code = '';
            let cost = eBaDataLayer.total_price;
            let ord = modpnr(eBaDataLayer.pnr_nbr);
            let createAttr =document.createElement("img");
            createAttr.src = 'https://pubads.g.doubleclick.net/activity;xsp=4380767;qty=1;cost='+cost+';ord='+ord+'?';
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

        frame.setAttribute("name", "rentalCar");
        frame.setAttribute("id", "rentalCarframe");        
        frame.style.width = 100 + "%";   
        frame.style.height = 280+"px";
        frame.style.border = "none";
        document.getElementById("rentalCar").appendChild(frame);  

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



var subscribe = {
	HTML:{
		txt_header : {
			GB:'FOR YOUR FUTURE INFORMATION',
			TH:'\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23'
		},
		txt_checkbox:{
			GB:'<input type="checkbox" name="subscribe" id="subscribe" value="subscribe"> <label for="subscribe">Check this box keep with special offers and important information based on your journey</label>',
			TH:'<input type="checkbox" name="subscribe" id="subscribe" value="subscribe"> <label for="subscribe">\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e4a\u0e01\u0e16\u0e39\u0e01 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19</label>'
		},
		txt_info:{
			GB:'<i class="icon-info-sign heading-icon" aria-hidden="true"></i><span> Click here to <button id="box-btn_subscribe" type="button">Subscribe</button> to THAI UPDATE for regular mailings with the latest special fares, promotions, services and news from the THAI network.<span>',
			TH:'<i class="icon-info-sign heading-icon" aria-hidden="true"></i><span> \u0e01\u0e23\u0e38\u0e13\u0e32\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 <button id="box-btn_subscribe" type="button">Subscribe</button> \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e17\u0e38\u0e01\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19 \u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u0e41\u0e25\u0e30 \u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22 \u0e14\u0e49\u0e27\u0e22\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 THAI UPDATES<span>'
		},
		tagHTML:function(){
			return '<div class="box-subsrcibe"><header class="panel-heading services-policy-heading"><i class="icon-ticket main-icon" aria-hidden="true"></i>'+ subscribe.HTML.txt_header[eBaDataLayer.language]+'</header><p>'+subscribe.HTML.txt_info[eBaDataLayer.language]+'</p></div>'
		}
	},
	sbbAdd:function(){		
		implibdx.core.updateDom("#fare-review-price",function(){
			subscribe.createOBJ();
			switch(eBaDataLayer.page_code){
				case 'CONF' :
				case 'RTPL' :
				if(eBaDataLayer.language == 'GB' || eBaDataLayer.language == 'TH'){

										$("#fare-review-price").before(subscribe.HTML.tagHTML);
					$("button#box-btn_subscribe").on('click', function(event) {
						event.preventDefault();
						let dataGet = 'first_name='+subscribe.obj.data2+'&last_name='+subscribe.obj.data3+'&email='+subscribe.obj.data9;
						if(eBaDataLayer.currency == "AUD") window.open('http://www.pages04.net/thaiairways/Thaiairways/ ','_blank');
						else window.open('http://www.thaiairways.com/en/subscribe/subscribe.page?'+dataGet,'_blank');
					});
				}				
				break;
			}
		},1000,6);
	},
	watch_checkbox:function(){	
		if($(this).prop( "checked" ) === true){		
			console.log($(this).prop( "checked" ))
			$(this).attr('disabled','disabled');			
			subscribe.save_data();
			return true;
		}
		return false;
	},
	save_data:function(){
		$.ajax({ 
			type : 'POST', 
			url : 'https://www.thaiairways.com/app/form/save_report', 					                                                 
			data : this.obj, 
			dataType : 'json'				
		}).done(function(result){
			console.log(result.success);
		}).error(function(e){
			console.log(e.statusText)
		});

	},
	createOBJ:function(){
		var passengerInfo = {};
		passengerInfo.data1 = dataTransfer['PNR#1_TITLECODE#1'];     		
		passengerInfo.data2 = eBaDataLayer.passengerList[0].first_name;     		
		passengerInfo.data3 = eBaDataLayer.passengerList[0].last_name;     		
		passengerInfo.data4 = eBaDataLayer.passengerList[0].pax_type;     		
		passengerInfo.data5 = eBaDataLayer.trip_type;     		
		passengerInfo.data6 = subscribe.check(eBaDataLayer.bound,'route').toString();     		
		passengerInfo.data7 = eBaDataLayer.date_search_out;     		
		passengerInfo.data8 = eBaDataLayer.date_search_in;     		
		passengerInfo.data9 = emailencrypt(eBaDataLayer.contact_information.email);     		
		passengerInfo.data10 = eBaDataLayer.pnr_nbr;
		passengerInfo.data18 = eBaDataLayer.page_code;
		passengerInfo.data19 = subscribe.check_site();
		passengerInfo.data20 = "subscribe";
		subscribe.obj = passengerInfo;
	},
	check:function(obj,txt){
			this.objkey = obj;
			this.txtkey = txt;
			this.result = [];

			for(i in this.objkey){
				console.log(i+'/////'+this.objkey[i][this.txtkey]);
				this.result[i] = this.objkey[i][this.txtkey];
			}
		return this.result;
	},
	check_site:function(){
		this.url = (window.location.hostname).split('.');
		return this.url[1];
	}
}
var passengerROH = {}
var ROH = {
    createOBJ: function() {
        passengerROH.LanguageId = check.lang(eBaDataLayer.language)[0];
        passengerROH.Cobrand = check.lang(eBaDataLayer.language)[1];
        passengerROH.Currency = check.currency(eBaDataLayer.price_details.currency_code);
        passengerROH.CheckinDate = check.chkdate(eBaDataLayer.bound[0].arr_date);
        passengerROH.CheckoutDate = check.trip_type(eBaDataLayer.trip_type);
        passengerROH.Location = check.depCity();
        passengerROH.adults = check.ADT("ADT");
        passengerROH.children = check.ADT("CHD");
        passengerROH.Infant = check.ADT("INF");
        passengerROH.pnr = eBaDataLayer.pnr_number;
    },
    txt: {
        errorTXT: {
            GB: ['Hotel Offers', 'Need a Hotel? - Find great deals from Royal Orchid Holidays', ],
            TH: ['\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21', '\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e08\u0e32\u0e01 Royal Orchid Holidays', ],
        },
        des: {
            GB: ['Destination', 'Period :'],
            TH: ['\u0e08\u0e38\u0e14\u0e2b\u0e21\u0e32\u0e22\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07', '']
        }
    },
    display_logo: function(st) {
        this.st = st;
        if (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") {
            this.htmlDis = '<section id="roh" class="box-roh"><h3>' + ROH.txt.errorTXT[eBaDataLayer.language][0] + '</h3><h4>' + ROH.txt.errorTXT[eBaDataLayer.language][1] + '</h4><a target="_blank" href="https://www.royalorchidholidays.com/' + check.lang(eBaDataLayer.language)[2] + '"><img class="box-roh_logoROH" src="http://www.thaiairways.com/static/common/imgscontent/banner/ROH_Logos_Thai.png"></a></section>';
            return this.htmlDis;
        }
    },
    sendData: function() {
    	console.log('----------------------------ROH');
        if ((eBaDataLayer.page_code == "CONF"|| eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {

            let urlROH;
            let idST = 'reservation-details';

            if (window.location.hostname == "book.thaiairways.com") { urlROH = 'https://www.thaiairways.com/app/roh/' } else { urlROH = 'https://uat.thaiairways.com/app/roh/' }

            implibdx.core.updateDom("div.TGINSBannerMenu", function() {



                ROH.createOBJ();

                if ((check.period(passengerROH.CheckinDate, 3, passengerROH.CheckoutDate, 0) === true) && (check.period(passengerROH.CheckinDate, 30, passengerROH.CheckoutDate, 1) === true)) {

                    $.ajax({
                            type: 'POST',
                            url: urlROH,
                            data: passengerROH,
                            dataType: 'json'
                        })
                        .done(function(result) {
                            console.log(result.success);

                            if (result.success != false) {
                                jumper();

                               $("#"+idST).append(result.data);


                                                               $(".box-roh>h4").after('<p style="padding-left: 0.7em;padding-right: 0.7em;">' + ROH.txt.des[eBaDataLayer.language][0] + ' : ' + eBaDataLayer.bound[0].arr_city + ' <br> ' + ROH.txt.des[eBaDataLayer.language][1] + ' ' + check.date_travel(passengerROH.CheckinDate) + ' - ' + check.date_travel(passengerROH.CheckoutDate) + '</p>');
                            } else {
                                $(".HotelsOffers").hide();
                               $("#"+idST).append(ROH.display_logo());


                            }

                        })
                        .error(function(e) {
                            console.log(e.statusText)
                            switch (e.statusText) {
                                case "parsererror":
                                     $("#"+idST).append(ROH.display_logo("No Room"));


                                    $(".HotelsOffers").hide();
                                    break;
                                case "error":
                                    $("#"+idST).append(ROH.display_logo("Err : 504"));


                                    $(".HotelsOffers").hide();
                                    break;
                            }
                        });
                } else {
                     $("#"+idST).append(ROH.display_logo("No Room"));

                }
            }, 1000, 3);
        } else {
            console.log('ROH - false');
        }
    },
    test:function(){
        console.log('test');
        if(eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB"){
            console.log('-------------------------------',eBaDataLayer.language)

            let urlROH;
            if (window.location.hostname == "book.thaiairways.com") { urlROH = 'https://www.thaiairways.com/app/roh/' } else { urlROH = 'https://uat.thaiairways.com/app/roh/' }
                console.log('------------------------------hostname',urlROH);
            implibdx.core.updateDom("div.TGINSBannerMenu", function() {
                console.log('-----------------------------Run');

            },1000,3);
        }
    }
}

var jumper = function(){
    $(".HotelsOffers").on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#roh").offset().top
        }, 2000);
    })
}
var abandon_consent = {
    add:function(){
        console.log('-------------------------->Add Abandon1')
        let tagHTML = document.createElement("div");
        tagHTML.setAttribute('id','boxAbandon');

            implibdx.core.updateDom(".terms-and-conditions",function(){
                console.log('-------------------------->Add Abandon');

                $("div.title-text").append(tagHTML);

                $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );

                abandon_consent.watch();

            },1000,5);



                abandon_consent.createOBJ();
    },
    txtCheckbox:{
        CN:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>\u6211\u540c\u610f\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u6536\u5230\u6cf0\u56fd\u56fd\u9645\u822a\u7a7a\u516c\u53f8\u5411\u6211\u53d1\u9001\u5173\u4e8e\u6b64\u6b21\u9884\u8ba2\u7684\u8d44\u8baf\u548c\u4f18\u60e0\u4fe1\u606f\u3002\u6211\u77e5\u9053\u6211\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u7535\u5b50\u90ae\u4ef6\u4e2d\u7684\u4e0d\u63a5\u6536\u4fe1\u606f\u7684\u94fe\u63a5\u6765\u64a4\u9500\u6211\u7684\u540c\u610f\u3002<br>\u5982\u9700\u4e86\u89e3\u6cf0\u56fd\u56fd\u9645\u822a\u7a7a\u516c\u53f8\u5982\u4f55\u4f7f\u7528\u60a8\u7684\u4e2a\u4eba\u6570\u636e\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684 <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">\u9690\u79c1\u653f\u7b56\u901a\u77e5\u3002</a></span></label>',
        DE:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>Ich m\u00f6chte mit dem THAI Newsletter \u00fcber aktuelle Flugangebote und weitere Services informiert werden und<br>stimme der Nutzung meiner E-Mail-Adresse im Rahmen des Newsletters und zugeh\u00f6rigen Angeboten gem\u00e4\u00df<br>den <a target="_blank" href="https://www.thaiairways.com/fr_FR/terms_of_use/privacy_policy.page">Datenschutzbestimmungen (Privacy Notice)</a> zu. (Sie k\u00f6nnen den Newsletter in jeder Ausgabe abbestellen.)</span></label>',
        ES:'',
        FR:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>J\u2019accepte de recevoir de la part de THAI, par courrier \u00e9lectronique, des informations et des offres promotionnelles. Ce consentement peut \u00eatre librement retir\u00e9 \u00e0 tout moment en cliquant, directement dans l\u2019email  sur le lien \u201cne plus recevoir d\u2019email\u201d.<br>Pour savoir comment THAI utilise vos donn\u00e9es personnelles, veuillez consulter notre  <a target="_blank" href="https://www.thaiairways.com/fr_FR/terms_of_use/privacy_policy.page">politique de confidentialit\u00e9.</a></span></label>',
        GB:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>I consent to receive news and promotions offers related to this booking from THAI by email. I acknowledge that consent can be withdrawn anytime by clicking <i style="text-decoration: underline;font-style: inherit;">prefer not to receive</i> link in the email.<br>To learn how THAI use your personal data, please see our <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">Privacy Notice.</a></span></label>',
        IT:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>Do il mio consenso a ricevere da THAI, sulla mia casella di posta elettronica, materiale informativo e promozionale relativo a questa prenotazione. Sono a conoscenza di poter in ogni momento ritirare il mio consenso cliccando sul link \u201cpreferisco non ricevere\u201d riportato negli stessi messaggi email.<br>Per conoscere come THAI utilizza i tuoi dati personali, consultate la nostra Informativa sulla <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">Protezione dei Dati Personali.</a></span></label>',
        JP:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>\u65b0\u7740\u60c5\u5831\u3084\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u60c5\u5831\u3092\u3001\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u304b\u3089e-mail\uff08\u82f1\u6587\uff09\u306b\u3066\u53d7\u3051\u53d6\u308b\u3053\u3068\u306b\u540c\u610f\u3057\u307e\u3059\u3002<br>e-mail\u4e0a\u306e\u30ea\u30f3\u30af\u304b\u3089\u3044\u3064\u3067\u3082\u914d\u4fe1\u505c\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002<br>\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u306e\u500b\u4eba\u60c5\u5831\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066\u3001\u8a73\u3057\u304f\u306f\n <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">"Privacy Notice."</a>\uff08\u82f1\u6587\uff09\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002</span></label>',
        KO:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>\ud0c0\uc774\ud56d\uacf5\uc73c\ub85c\ubd80\ud130 \uc774\uc608\uc57d\uacfc \uad00\ub828\ud558\uc5ec \ud504\ub85c\ubaa8\uc158 \uc81c\uacf5\uc5d0 \ub300\ud55c  \uc18c\uc2dd\ub4e4\uc744 \uc774\uba54\uc77c\ub85c \ubc1b\uaca0\uc73c\uba70, \uc774\uba54\uc77c \ubc1b\uae30\ub97c \uc6d0\uce58 \uc54a\ub294 \uacbd\uc6b0 \uc774\uba54\uc77c\uc5d0 \uc788\ub294 \uc774\uba54\uc77c \ubc1b\uc9c0 \uc54a\uae30 \ub9c1\ud06c\ub97c \uc774\uc6a9\ud558\uc5ec \ubcf8 \ub3d9\uc758\ub97c \ucca0\ud68c \ud560 \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.<br>\ud0c0\uc774\ud56d\uacf5\uc758 \uac1c\uc778 \uc815\ubcf4 \uc774\uc6a9 \ubc29\uce68\uc740 <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">\uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638 \uc815\ucc45 </a>\uc73c\ub85c \ud655\uc778\ud558\uc2ed\uc2dc\uc624.</span></label>',
        RU:'',
        TH:'<input type="checkbox" name="abandon" id="abandon" vlue="abandon"><label for="abandon"> <span>\u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e22\u0e34\u0e19\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23 \u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e2d\u0e07\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e32\u0e07\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22 \u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23 \u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e42\u0e14\u0e22\u0e04\u0e25\u0e34\u0e01\u0e25\u0e34\u0e49\u0e07\u0e04\u0e4c <i style="text-decoration: underline;font-style: inherit;">\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25</i>\u0e43\u0e19\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c <br>\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e01\u0e32\u0e23\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25</a></span></label>',
        TW:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>\u6211\u540c\u610f\u6536\u5230\u8207\u6b64\u6cf0\u822a\u7db2\u7ad9\u9810\u8a02\u76f8\u95dc\u7684\u65b0\u805e\u53ca\u4fc3\u92b7\u512a\u60e0\u7684\u96fb\u5b50\u90f5\u4ef6\u3002\u6211\u5145\u5206\u77ad\u89e3, \u53ef\u4ee5\u5728\u4efb\u4f55\u6642\u5019, \u9ede\u64ca\u5728\u96fb\u5b50\u90f5\u4ef6\u4e0a <i style="text-decoration: underline;font-style: inherit;">\"\u4e0d\u60f3\u6536\u5230\"</i> \u7684\u9023\u7d50, \u4ee5\u64a4\u56de\u6b64\u540c\u610f<br>\u6b32\u77ad\u89e3\u6cf0\u822a\u5982\u4f55\u4f7f\u7528\u60a8\u7684\u500b\u4eba\u8cc7\u6599, \u8acb\u53c3\u95b1\u6211\u5011\u7684<a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">\u96b1\u79c1\u6b0a\u8072\u660e</a></span></label>',
        SE:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>Jag samtycker till att f\u00e5 nyheter och kampanjpriser relaterade till denna bokning fr\u00e5n THAI p\u00e5 mail. Jag bekr\u00e4ftar att samtycket kan \u00e5tertas n\u00e4r som helst genom att klicka p\u00e5 helst inte mottaga l\u00e4nken i mailet. F\u00f6r att l\u00e4ra mer om hur THAI anv\u00e4nder din personliga data, v\u00e4nligen se <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">v\u00e5rt integritetsmeddelande.</a></span></label>'
    },
    save_data:function(){
        $.ajax({
            type : 'POST',
            url : 'https://www.thaiairways.com/app/form/save_report',
            data : this.obj,
            dataType : 'json'
        }).done(function(result){
            console.log(result.success);
        }).error(function(e){
            console.log(e.statusText)
        });

    },
    watch:function(){
         $('button.tripSummary-btn-continue,button#bottom-continue-button').on('click', function(event) {
             event.preventDefault();
              console.log('-------------------------------->watch')           
            if($('#abandon').prop("checked") === true && $('input[id $="-input-purchaseForm-termsConditionsForm-termsAndCondition"]').prop("checked") === true && ($("input[id $='_radio_EXT']").prop("checked") === true || $("input[id $='_radio_EXT']").prop("checked") == undefined) ){
                console.log('-------------------------------->save data')
                abandon_consent.obj["data7"] = "Y";
                abandon_consent.save_data();
            }
         });

                           $("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],#tpl5_radio_PLCC,li[id $='_li_PLCC'],label[for $='_radio_PLCC'],input[id $='_radio_PLCC']").on('click', function(event) {            
             event.preventDefault();
             abandon_consent.remove();
             console.log('-------------------------------->remove')
         });

         $("li[id $='_li_EXT'],label[for $='_radio_EXT'],input[id $='_radio_EXT'],#tpl5_radio_EXT, label[for='tpl5_radio_EXT'], li#tpl5_li_EXT").on('click', function(event) {
             event.preventDefault();
             $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );
             console.log('-------------------------------->add')

         });
    },
    createOBJ:function(){
        var abandonInfo = {};
        abandonInfo.data1 = dataTransfer['PNR#1_TITLECODE#1'];
        abandonInfo.data2 = eBaDataLayer.passengerList[0].first_name;
        abandonInfo.data3 = eBaDataLayer.passengerList[0].last_name;
        abandonInfo.data4 = eBaDataLayer.trip_type;
        abandonInfo.data5 = eBaDataLayer.contact_information.email;
        abandonInfo.data6 = eBaDataLayer.pnr_number;
        abandonInfo.data18 = eBaDataLayer.page_code;
        abandonInfo.data19 = subscribe.check_site();
        abandonInfo.data20 = "abandon";
        abandon_consent.obj = abandonInfo;
    },
    remove:function(){
        $("#abandon").remove();
        $("label[for='abandon']").remove();
    }
}
var passenger = {};
var promocode = function(){

			passenger.passenger =[];
			passenger.total_passenger = eBaDataLayer.passengerList.length;
			passenger.promocode = dataTransfer["EXTERNAL_ID#10"];
			passenger.PNR = eBaDataLayer.pnr_number;
			passenger.bound = [];

			$.each(eBaDataLayer.passengerList, listPassenger);
			$.each(eBaDataLayer.bound,bound);

			function bound(r,i){
				this.item = i;
				this.r = r;
				this.b = {};
				for(x in this.item){
					if(x == "flight_numbers" || x == "route" || x == "arr_date" || x =="dep_date"){
						this.b[x] = this.item[x];
					}
				}
				passenger.bound[this.r] = this.b;

							}

			function listPassenger(key, val) {
				this.item = val;
				this.k = key;
				this.b = {};
				for (x in this.item) {
					if (x == 'first_name' || x == "last_name"){
						this.b[x] = this.item[x]
					}
				}
				passenger.passenger[this.k] = this.b;
			}


					$.ajax({
				type : 'POST',
				url : 'https://www.thaiairways.com/app/bookingbox/promocode_usage',
				data : passenger,
				dataType : 'json',
				encode : true
			})
			.done(function(d) {console.log(d.success)})
			.error(function(e){console.log(e)});
}

var sendProCode = function(){
	if(dataTransfer["EXTERNAL_ID#10"] != ""){
		implibdx.core.updateDom("div.TGINSBannerMenu",function(){
		promocode();

		},1000,6);
	}
}
var startFNJS = function() {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            lowest();
            _addClass('main-layout-header', 'page-template-section');
            break;
        case "SDAI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            break;
        case "FDFF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            break;
        case "FARE":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.hilight_Content.content_FARE()
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');

            }

            break;
        case "ALPI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.Passengerinfo()
            updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'a#tpl7_SIT');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            break;

        case "APIM":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.Passengerinfo()
            updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'a#tpl7_SIT');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_APIM');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');

            }
            break;
        case "AAS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'catalogServices-teasers-container');
            break;
        case "PURC":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_PURC", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_PURC');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            updateHTML.clickConfirm();
            abandon_consent.add();
            goodservice_india.AddData();
            break;

        case "CONF":


            updateHTML.remove_content.servicesbreakdown('CONF');
            updateHTML.remove_content.additional_services();
            goodservice_india.AddData();

            if ((/\b^[IT_]{3}/).test(eBaDataLayer.external_id) === true) {  addScript('fbpixel_it', "main-layout-bottom", "footer#main-layout-bottom");    }
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {   
                chkSite() ? addScript("pixel_SG_CONF", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_CONF');
                chkSite() ? addScript("fbpixel_sg_purchase", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_purchase');
            }
            if (dataTransfer["EXTERNAL_ID#4"] == 'JETRADAR') {
                addScript('jetradar', "main-layout-bottom", "footer#main-layout-bottom")
            } else { console.log('Run JETRADAR'); }

            addScript('acom', "main-layout-bottom", "footer#main-layout-bottom", acom_adddata());
            Addwebtrends();
            sendProCode();
            (dataTransfer["EXTERNAL_ID#4"] === "mastercard") ? mastercard(): false;
            chkSite()?couponBrussels():console.log("couponBrussels")

            subscribe.sbbAdd();
            tripAdvisor.add();
            runWidget();
        break;

            case "RTPL":
        console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
        updateHTML.service.travellerAlert_RTPL()
        updateHTML.remove_content.price_RTPL()
        updateHTML.remove_content.servicesbreakdown('RTPL')
        Addwebtrends();
        subscribe.sbbAdd();

        runWidget();

        break;
    case "MDFSR":
        console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
        updateHTML.extraService('div.catalogServices-teaser-SIT', 'div.catalogServices-teaser-MEA', 'div.catalogServices-teaser-BAG', 'div.catalogServices-teasers-container');
        break;
}

}

jQuery(document).on("plnext:customData:ready", startFNJS);