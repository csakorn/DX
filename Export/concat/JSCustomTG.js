/*
 Modifide Date :: Fri May 22 2020 14:05:57 GMT+0700 (Indochina Time)
 Modifide By :: Chalermpol Sakorn
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









let runWidget = (x) => {
	let mkt = (x !== "") ? x : "DD";
	const market = {
		AU: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {
				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		AT: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		BE: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		KH: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		CA: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		CN: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		DK: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		FR: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {
				$('#pinkbanner').remove();
				$('#rentalCar').remove();
				$('#b_container').remove();
				$('.box_TGINSBannerMenu').remove();
				console.log('NO..!! Teaser Display')
			}, 1000, 5)
		},
		DE: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		HK: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		IN: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		ID: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		IE: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		IT: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				console.log('NO-Widget')
			}, 1000, 5)
		},
		JP: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				console.log('NO-Widget')
			}, 1000, 5)
		},
		KR: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		LA: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		MY: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		MM: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		NZ: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		NO: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		OM: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		PK: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		PH: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		RU: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		SG: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		ES: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				console.log('NO-Widget')
			}, 1000, 5)
		},
		LK: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		SE: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				removePinkbanner('#PinkBanner_1');
				removePinkbanner('#PinkBanner_4');
				console.log('NO-Widget')
			}, 1000, 5)
		},
		CH: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		TW: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		TH: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {
				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		AE: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		GB: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		US: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		VN: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		YY_DOMESTIC: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();

			}, 1000, 5)
		},
		YY: () => { 
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		WW: () => { 
			implibdx.core.updateDom("div#TGINSBanner", function () {

				wt_booking.add();
				ROH.sendData();
			}, 1000, 5)
		},
		DD: () => {
			implibdx.core.updateDom("div#TGINSBanner", function () {
				removePinkbanner('#PinkBanner_1');
				removePinkbanner('#PinkBanner_4');
				console.log('NO-Widget--NO');
			}, 1000, 5)
		}
	}
	try {
		return market[mkt]();
	} catch (error) {
		console.log('Err:', error)
		return market.DD();
	}
}


function pinkbanner_remove() {

	var market = {
		CH: {
			r_pinkbanner: ['#PinkBanner_1', '#PinkBanner_4']
		}
	}

	implibdx.core.updateDom("div#pinkbanner", function () {
		if (chkMarket(eBaDataLayer.market) == true) {
			for (x in market.CH.r_pinkbanner) {
				removePinkbanner(market.CH.r_pinkbanner[x]);
			}
		} else console.log(eBaDataLayer.market);
	}, 1000, 5)
}







var displayTeaser = {
	add: function () {
		let href = "";
		let img = "";

		for (keys in bannerTG) {

			implibdx.core.updateDom("div.TGINSBanner", function () {
				$("#TGINSBannerMenu").append(displayTeaser.cHTML(keys));
			}, 1000, 5);

		}
	},
	chkMarket: function (m) {
		console.log(m)

		for (keys in m) {
			var s = new RegExp("[" + m[keys] + "]{2}");
			if (m[keys] === 'All') {
				console.log("All")
				return true;
			} else if (s.test(eBaDataLayer.market) == true) {
				console.log(m + "------" + eBaDataLayer.market);
				return true;
			} else return false;
		}
	},
	chkCity: function (city) {
		const chkCity = eBaDataLayer[city.data[0]];
		const regx = new RegExp(city.rex);
		let citylist = "";

		Object.keys(chkCity).forEach((key) => {
			citylist += chkCity[key][city.data[1]] + "-";
		});
		if (typeof bannerTG.BaliTreat.condition.chk.status !== "undefined") {
			if (regx.test(chkCity[0].dep_airport)) {
				return bannerTG.BaliTreat.condition.chk.status;
			} else {
				return true;
			}
		} else {
			return regx.test(citylist);
		}
	},
	EXP: function (name) {

		if (bannerTG[name].condition.displaycon != "") {
			console.log('displaycon != Null', name);
			this.conEnd = bannerTG[name].condition.end !== undefined ? setDatef(bannerTG[name].condition.end) : "";
			this.conStart = bannerTG[name].condition.start !== undefined ? setDatef(bannerTG[name].condition.start) : "";

			if (bannerTG[name].condition.displaycon == "Departure") {
				this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
				this.dIn = eBaDataLayer.bound[1] !== undefined ? (eBaDataLayer.bound[1].dep_date).split("/") : "";
				this.today = new Date();
				this.eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
				this.eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

				if (this.conStart <= this.eBaDateOut && this.eBaDateOut <= this.conEnd && this.conStart <= this.eBaDateIn && this.eBaDateIn <= this.conEnd) {
					return (bannerTG[name].condition.chk !== null) ? displayTeaser.chkCity(bannerTG[name].condition.chk) : true;
				} else {
					return false;
				}
			}
			if (bannerTG[name].condition.displaycon == "ticketing") {
				this.toDay = new Date();

				if (this.toDay <= this.conEnd && this.conStart <= this.toDay) {
					return (bannerTG[name].condition.chk !== null) ? displayTeaser.chkCity(bannerTG[name].condition.chk) : true;
				} else {
					return false;
				}
			}
		} else {

			if (displayTeaser.chkMarket(bannerTG[name].condition.market) == true) {
				console.log('displaycon == Null', name);
				return true;
			} else {
				console.log('....')
				return false;
			}
		}
	},
	cHTML: function (name) {
		let objname = name;
		let href = "";
		let img = "";
		console.log("cHTML", name);
		if ((bannerTG[objname].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && displayTeaser.EXP(objname) == true) {
			href = (bannerTG[objname].image.linkURL[eBaDataLayer.language] !== undefined) ? bannerTG[objname].image.linkURL[eBaDataLayer.language] : bannerTG[objname].image.linkURL['GB'];
			img = (bannerTG[objname].image.URL[eBaDataLayer.language] !== undefined) ? bannerTG[objname].image.URL[eBaDataLayer.language] : bannerTG[objname].image.URL['GB'];
			return "<aside class=\"" + bannerTG[objname].class + "\"><a href=\"" + href + displayTeaser.param_obj(bannerTG[objname].param) + "\" target=\"" + bannerTG[objname].target + "\" " + bannerTG[objname].onClick[eBaDataLayer.page_code] + "><img src=\"" + img + "\" alt=\"" + bannerTG[objname].image.alt + "\"></a></aside>";

		}
	},
	param_obj: function (obj) {
		let result = {};
		for (key in obj) {
			if (obj !== '') {
				result[key] = eBaDataLayer[obj[key]];
			} else {
				return '';
			}
		}
		return '?' + $.param(result)
	}
}










var addTGBanner = {
	creHTML: function (name, param) {
		this.banner = name;
		this.param = param;
		this.htmlBN = "";
		this.code = eBaDataLayer.page_code;
		if (checkEXP(this.banner) == true) {
			this.htmlBN = "<aside class=\"" + bannerTG[this.banner].class + "\"><a href=\"" + bannerTG[this.banner].link + this.param + "\" target=\"" + bannerTG[this.banner].target + "\" " + bannerTG[this.banner].onClick[this.code] + "><img src=\"" + bannerTG[this.banner].image + "\" alt=\"" + bannerTG[this.banner].alt + "\"></a></aside>";
		} else {
			return this.htmlBN = "";
		}
		return this.htmlBN;
	}
}


var tgTeaser = {
	eServe: {
		img_url: {
			GB: "http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_EN.jpg",
			TH: "http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_TH.jpg"
		},
		link_url: {
			GB: "http://www.thaiairways.com/en_TH/satisfaction_survey/survey_form_pnr.page",
			TH: "http://www.thaiairways.com/th_TH/satisfaction_survey/survey_form_pnr.page"
		},
		img_alt: "Web Satisfaction Survey",
		target: "_blank",
		style: "box_TGINSBannerMenu",
		onClick: {
			CONF: "onclick=\"\"",
			RTPL: "onclick=\"\""
		},
		condition: {
			start: new Date(["2020", "01", "4"]),
			end: new Date(["2020", "11", "31"]),
			chk_bound: null,
			is_page: ['CONF', 'RTPL'],
			except_maket: new RegExp(/^(FR)|^(IT)/)
		}
	},
	BaliTreat: {
		img_url: {
			GB: "http://www.thaiairways.com/static/common/imgscontent/banner/baliTreatPrivilege_banner.jpg"
		},
		link_url: {
			GB: "https://www.thaiairways.com/en_ID/offer/privileges/Privilege.page?utm_source=&utm_medium=website&utm_campaign=click-BaliTreat-ConfirmationPage"
		},
		img_alt: "BaliTreat",
		target: "_blank",
		style: "box_TGINSBannerMenu",
		onClick: {
			CONF: "onclick=\"\"",
			RTPL: "onclick=\"\""
		},
		condition: {
			start: new Date(["2020", "01", "4"]),
			end: new Date(["2020", "11", "31"]),
			chk_bound: {
				flight_numbers: new RegExp(/(TG431)/)
			},
			is_page: ['CONF', 'RTPL'],
			except_maket: new RegExp(/^(ID)/)
		}
	}
}

const tgBanner = {
	add: () => {
		implibdx.core.updateDom("div#pinkbanner", function () {
			Object.keys(tgTeaser).forEach(key => {
				if (tgBanner.check(tgTeaser[key].condition)) {
					$("#TGINSBannerMenu").append(tgBanner.createEliment(tgTeaser[key]));
				}
			})
		}, 1000, 3)
	},
	createEliment: ({ img_url, link_url, img_alt, target, style }) => {
		let _lang = typeof tgTeaser.eServe.img_url[eBaDataLayer.language] !== "undefined" ? eBaDataLayer.language : "GB";
		return _aside = `<aside class="${style}"><a href="${link_url[_lang]}" target="${target}"> <img src="${img_url[_lang]}" alt="${img_alt}"> </a></aside>`;
	},
	check: ({ start, end, except_maket, is_page, chk_bound }) => {
		let nowDate = new Date();
		let excMaket = except_maket !== null ? except_maket.test(eBaDataLayer.market) !== true : true;
		let isPage = is_page.find(x => x === eBaDataLayer.page_code) ? true : false;
		let chkOpt = chk_bound !== null? Object.keys(chk_bound).map( key => chk_bound[key].test(eBaDataLayer.bound.map(x => x[key]).toString()))[0]:true;
		return (nowDate >= start && nowDate <= end && excMaket && isPage && chkOpt) ? true : false;
	}
}



var travellerAlert = {
	GB: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Traveller Alert</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">For THAI flight bookings created via travel agents or other intermediaries other than via thaiairways.com, please note that the feature to pre-select seating or view pre-selected seating is temporarily unavailable.  We recommend you contact your travel agent or your nearest THAI office for more information and assistance.  We apologise for any inconvenience caused.</p>',
	FR: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Alerte voyageur !</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">Pour toutes réservations sur THAI créées par l\'intermédiaire d\'agents de voyages ou des intermédiaires autres que thaiairways.com, veuillez noter que la fonctionnalité permettant de présélectionner les sièges ou de voir les sièges présélectionnés est momentanément indisponible. Contactez votre agent de voyage ou le bureau THAI le plus proche pour plus d\'informations et d\'assistance. Veuillez nous excuser pour tout inconvénient causé.</p>',
	TH: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22\u0e43\u0e19\u0e04\u0e27\u0e32\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e30\u0e14\u0e27\u0e01 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e23\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e14\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e0a\u0e31\u0e48\u0e27\u0e04\u0e23\u0e32\u0e27\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e0b\u0e37\u0e49\u0e2d\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c<a href="http://www.thaiairways.com">thaiairways.com</a> \u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22</p>',
	JP: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u306eWEB\u30b5\u30a4\u30c8 (<a href="http://www.thaiairways.com">thaiairways.com</a>) \u4ee5\u5916\u306e\u3001\u65c5\u884c\u4f1a\u793e\u3084\u4ed6\u306e\u7b2c\u4e09\u8005\u306b\u3066\u4e88\u7d04\u3055\u308c\u305f\u5f0a\u793e\u306e\u8a18\u9332\u3067\u306f\u5ea7\u5e2d\u306e\u9078\u629e\u3084\u9078\u629e\u6e08\u306e\u5ea7\u5e2d\u306e\u8868\u793a\u304c\u4e00\u6642\u7684\u306b\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002 <br>\u4e88\u7d04\u5143\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u3054\u4e0d\u4fbf\u304a\u304b\u3051\u3044\u305f\u3057\u307e\u3059\u304c\u3001\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u4e0b\u3055\u3044\u3002\n</p>'
}
var _extraServiceOBJ = {
	seat: {
		CN: "<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u56fd\u9645\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d48\u5c0f\u65f6\u5728\u7ebf\u9884\u9009\u673a\u4e0a\u5ea7\u4f4d <span class='txt-b hide'>\u51fa\u7968\u540e\u53ef\u8d2d\u4e70\u4f18\u9009\u5ea7\u4f4d</span></p>",
		DE: "<p class=\"box_service\">Sitzplatzreservierungen k\u00f6nnen bei internationalen Fl\u00fcgen bis 48 Stunden vor Abflug vorgenommen werden.</p>",
		ES: "<p class=\"box_service\">La reserva de asientos online es posible en vuelos internacionales hasta 48 horas antes de la salida. Aplicable solamente para los vuelos de TG de 3 d\u00edgitos.</p>",
		FR: "<p class=\"box_service\">R\u00e9serverz votre si\u00e8ge en ligne jusqu\'\u00e0 48 heures avant le d\u00e9part de votre vol.<span class='txt-b hide'>Le si\u00e8ge pr\u00e9f\u00e9rentiel peut \u00eatre achet\u00e9 apr\u00e8s l\'\u00e9mission du billet</span></p>",
		GB: "<p class=\"box_service\">Online seat reservation is possible on international flights until 48 hours before departure of TG 3 digits flight only. <span class='txt-b hide'>Preferred Seat can be purchased after ticket has been issued.</span></p>",
		IT: "<p class=\"box_service\">La prenotazione online del posto, solo sui voli internazionali TG a 3 cifre,  \u00e8 possibile fino a 48 ore prima della partenza. <span class='txt-b hide'>Il posto preferenziale pu\u00f2 essere acquistato dopo l\u2019emissione del biglietto</span></p>",
		JP: "<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u5ea7\u5e2d\u3092\u3054\u6307\u5b9a\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n <span class='txt-b hide'>\u822a\u7a7a\u5238\u3054\u8cfc\u5165\u5f8c\u304b\u3089TG\u512a\u5148\u5ea7\u5e2d\uff08\u6709\u6599\uff09\u3092\u304a\u7533\u8fbc\u307f\u9802\u3051\u307e\u3059</span></p>",
		KO: "<p class=\"box_service\">\uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud55c \uc88c\uc11d \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4. <span class='txt-b hide'>\uc120\ud638 \uc88c\uc11d \uc11c\ube44\uc2a4\ub294 \ud56d\uacf5\uad8c \uad6c\ub9e4(\ubc1c\uad8c) \ud6c4\uc5d0 \uad6c\uc785\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4</span></p>",
		RU: "<p class=\"box_service\">\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442 \u0432 \u0441\u0430\u043b\u043e\u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u043d\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432) <span class='txt-b hide'>\u0423\u0441\u043b\u0443\u0433\u0430 \u00ab\u0432\u044b\u0431\u043e\u0440 \u043c\u0435\u0441\u0442\u0430\u00bb \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043a \u0437\u0430\u043a\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0431\u0438\u043b\u0435\u0442\u0430</span></p>",
		TH: "<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 \u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 <span class='txt-b hide'> \u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d Preferred Seat \u0e44\u0e14\u0e49\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e15\u0e31\u0e4b\u0e27\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22\u0e41\u0e25\u0e49\u0e27</p>",
		TW: "<p class=\"box_service\">\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u670d\u52d9\u3002 <span class='txt-b hide'>\u6a5f\u7968\u767c\u51fa\u5f8c\uff0c\u5373\u53ef\u8cfc\u8cb7\u9996\u9078\u5ea7\u4f4d\u3002</span></p>",
		SE: "<p class=\"box_service\">Du kan v\u00e4lja din sittplats online p\u00e5 internationella flygningar fram till 48h innan avg\u00e5ng p\u00e5 TG flyg med tre siffror. <span class='txt-b hide'>Platsreservation med extra benutrymme kan köpas efter att biljetten är bekräftad</span></p>"

	},
	meal: {
		CN: "<p class=\"box_service\">\u7531\u66fc\u8c37\u51fa\u767c\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u53ef\u65bc\u8d77\u98db24\u5c0f\u6642\u4e4b\u524d\u9810\u8a02\u9910\u81b3\uff0c\u800c\u524d\u5f80\u66fc\u8c37\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8acb\u65bc48\u5c0f\u6642\u4ee5\u4e0a\u9810\u8a02\u9910\u81b3 \u3002(\u53ea\u9069\u7528TG 3\u4f4d\u6578\u5b57\u4e4b\u6cf0\u822a\u71df\u904b\u822a\u73ed)</p>",
		DE: "<p class=\"box_service\">Sondermen\u00fc k\u00f6nnen bei internationalen Fl\u00fcgen bis 24 Stunden vor Abflug vorgenommen werden.</p>",
		ES: "<p class=\"box_service\">La selecci\u00f3n de comida es posible en vuelos internacionales saliendo desde Bangkok hasta 24 horas antes de la salida y para vuelos internacionales hacia Bangkok, debe realizarse 48 horas antes de la salida del vuelo. Aplicable solo a vuelos TG de 3 d\u00edgitos.</p>",
		FR: "<p class=\"box_service\">Le choix d\u2019un repas peut \u00eatre fait sur un vol international, 24 heures avant le d\u00e9part du vol.</p>",
		GB: "<p class=\"box_service\">Meal selection is only necessary for passengers requiring special meals. Special meal selection is possible on International flights until 24hrs for outbound from Bangkok and 48hrs for inbound to Bangkok (before departure). Only on TG 3 digit flights.</p>",
		IT: "<p class=\"box_service\">La selezione online dei pasti, sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 48 ore prima della partenza per voli verso Bangkok e fino a 24 ore prima della partenza per i voli da Bangkok.</p>",
		JP: "<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\uff08\u30d0\u30f3\u30b3\u30af\u767a\u306f24\u6642\u9593\u524d\u307e\u3067\uff09\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u7279\u5225\u6a5f\u5185\u98df\u3092\u304a\u7533\u3057\u8fbc\u307f\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n</p>",
		KO: "<p class=\"box_service\">\uae30\ub0b4\uc2dd \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ubc29\ucf55 \ucd9c\ubc1c\uc758 \uacbd\uc6b0 \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0 \uac00\ub2a5\ud558\uc9c0\ub9cc \uadf8\uc774\uc678 \uc9c0\uc5ed\uc5d0\uc11c \ucd9c\ubc1c\uc758 \uacbd\uc6b0 (\ub300\ud55c\ubbfc\uad6d \ud3ec\ud568) \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU: "<p class=\"box_service\">\u0412\u044b\u0431\u043e\u0440 \u043f\u0438\u0442\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 24  \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u0434\u043b\u044f \u0440\u0435\u0439\u0441\u043e\u0432, \u0432\u044b\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u0438\u0437 \u0411\u0430\u043d\u0433\u043a\u043e\u043a\u0430, \u0438 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u0434\u043b\u044f \u0440\u0435\u0439\u0441\u043e\u0432, \u0432\u044b\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u0432 \u0411\u0430\u043d\u0433\u043a\u043e\u043a (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432)\n</p>",
		TH: "<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e2d\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e43\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f \u0e41\u0e25\u0e30 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2a\u0e39\u0e48\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f</p>",
		TW: "<p class=\"box_service\">\u9810\u9078\u6a5f\u4e0a\u9910\u98df\u670d\u52d9\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u5f9e\u66fc\u8c37\u767c\u51fa\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\uff0c\u53ca\u5f9e\u5916\u7ad9\u98db\u5f80\u66fc\u8c37\u4e4b\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\uff0c\u53ef\u80fd\u63d0\u4f9b\u9810\u9078\u9910\u98df\u670d\u52d9\u3002</p>",
		SE: "<p class=\"box_service\">Du beh\u00f6ver inte v\u00e4lja m\u00e5ltid om du inte beh\u00f6ver specialkost. Specialkost g\u00e5r att best\u00e4lla p\u00e5 internationella flyg fram till 24h innan utresa fr\u00e5n Bangkok och 48h innan avresa f\u00f6r inresa i Bangkok. Detta g\u00e4ller endast f\u00f6r TG flyg med tre siffror.</p>"
	},
	baggage: {
		CN: "<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d</p>",
		DE: "<p class=\"box_service\">Zusatzgep\u00e4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.</p>",
		ES: "",
		FR: "<p class=\"box_service\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol.</p>",
		GB: "<p class=\"box_service\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only.</p>",
		IT: "<p class=\"box_service\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza.</p>",
		JP: "<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53d7\u8a17\u624b\u8377\u7269\u91cd\u91cf\u67a0\u3092\u6709\u6599\u3067\u8ffd\u52a0\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u3059\u3002</p>",
		KO: "<p class=\"box_service\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU: "<p class=\"box_service\">\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0430\u0433\u0430\u0436\u0430 \u043e\u043d\u043b\u0430\u0439\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 24 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u043d\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432).</p>",
		TH: "<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 </p>",
		TW: "<p class=\"box_service\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002</p>",
		SE: "<p class=\"box_service\">Att k\u00f6pa extra bagage \u00e4r m\u00f6jligt p\u00e5 internationella flyg fram till 24h innan avresa p\u00e5 TG flyg med tre siffror.</p>"
	},
	wheelchair: {
		CN: "",
		DE: "",
		ES: "",
		FR: "",
		GB: `Wheelchair (WCHR) service is available at no extra charge for passengers who find walking inconvenient, but can ascend and descend stairs of the aircraft by themselves. Request this special assistance at least 48 hours before your departure time.`,
		IT: "",
		JP: "",
		KO: "",
		RU: "",
		TH: `\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e23\u0e16\u0e40\u0e02\u0e47\u0e19 (WCHR) \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e14\u0e34\u0e19\u0e23\u0e30\u0e22\u0e30\u0e44\u0e01\u0e25\u0e44\u0e14\u0e49 \u0e41\u0e15\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e36\u0e49\u0e19\x2F\u0e25\u0e07\u0e1a\u0e31\u0e19\u0e44\u0e14\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19\u0e41\u0e25\u0e30\u0e40\u0e14\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19\u0e40\u0e2d\u0e07\u0e44\u0e14\u0e49 \u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e33\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e23\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d THAI Contact Center 02-356-1111`,
		TW: "",
		SE: ""
	}
}
var dialog_baggage = {
	CN: "<p class=\"box_service-dialog\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_CN.html\">More information </a></p>",
	DE: "<p class=\"box_service-dialog\">Zusatzgep\u00e4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.<a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_DE.html\">More information </a></p>",
	ES: "",
	FR: "<p class=\"box_service-dialog\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_FR.html\">More information </a></p>",
	GB: "<p class=\"box_service-dialog\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>",
	IT: "<p class=\"box_service-dialog\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">Ulteriori Informazioni </a></p>",
	JP: "<p class=\"box_service-dialog\">\u4e8b\u524d\u652f\u6255\u306b\u3088\u308b\u53d7\u8a17\u624b\u8377\u7269\u91cd\u91cf\u67a0\u306e\u8ffd\u52a0\uff08\u56fd\u969b\u7dda\u306b\u9650\u308b\uff09\u306f\u3001\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53ef\u80fd\u3067\u3059\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_JP.html\">More information </a></p>",
	KO: "<p class=\"box_service-dialog\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_KO.html\">\uc790\uc138\ud788 \ubcf4\uae30</a></p>",
	RU: "",
	TH: "<p class=\"box_service-dialog\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con.html\">\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21</a></p>",
	TW: "<p class=\"box_service-dialog\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_TW.html\">More information </a></p>",
	SE: "<p class=\"box_service-dialog\">Att k\u00f6pa extra bagage \u00e4r tillg\u00e4ngligt p\u00e5 internationella flyg fram till 24 timmar innan avresa p\u00e5 TG flyg med 3 siffror. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>"
}
var FYIHtml = {
	GB: "<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. Collection of personal information</h3> <p>The Company collects the following personal information:</p> <p>The Company only collects the necessary information created automatically through reservation, ticketing, consultations and service requests. Required Information: gender, name (Korean/English), email address and contact information (i.e. telephone, mobile phone), ticket number or reservation number</p> <ol> <li>1-1. Optional Information: mileage membership number, urgent contact number, meal request and seat assignment.</li> <li>1-2. Additional Information: The following additional information is required to make payment when you purchase our products and service ncluding tickets [ credit card type, number, expiration date, cvv (Card Verification Value) number, ownerÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s name, bank name and account number ] </li> <li>1-3. How your personal information is collected: Via the Thai Airways website, Call center</li> </ol> <h3>2. Collection and use of personal information</h3> <p>The Company uses the personal information we collect for the following purposes:</p> <p>Settlement of Payment for Execution of Agreement and Providing Service: providing contents, booking/ticketing, delivery of products including tickets, sending bills, certification for banking service, purchase and fee payment, and collecting fee.</p> <h3>3. Term for Retaining and Using Personal Information</h3> <p>We will destroy all your personal information in our possession immediately when it is no longer necessary for the purposes for which it was collected if: </p> <p>However, we may retain personal information for a specified period of time if deemed required in accordance with the applicable provisions of the Consumer Protection Act in Commercial Law and E-Commerce Act even after it becomes no longer necessary for the purposes for which it was collected.</p> <p>In this case, we will not use your personal information for purpose other than it was collected and it will be retained for the following period:</p> <ol> <li>3-1. Collected information: Name, Email address, Contact number</li> <li>3-2. Retention basis: We retain personal information if customers make an agreement. If it is refused, we will destroy all personal nformation immediately </li> <li>3-3. Retention Period: 5 years</li> </ol> </div>",
	KO: "<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9</h3><p>\uc218\uc9d1\ud558\ub294 \uac1c\uc778 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. </p> <p>\ud0c0\uc774\ud56d\uacf5 \ud56d\uacf5\uad8c \uc608\uc57d, \ubc1c\uad8c, \uad6c\ub9e4\uc0c1\ub2f4 \ubc0f \uc11c\ube44\uc2a4 \uc2e0\uccad\uc73c\ub85c \uc778\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294\ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uc815\ubcf4\ub9cc\uc744 \uc218\uc9d1\ud558\uac8c \ub429\ub2c8\ub2e4.</p> <ol> <li>1-1. \uc218\uc9d1\ud56d\ubaa9 \uc911 \ud544\uc218\ud56d\ubaa9: \uc131\ubcc4, \uc774\ub984, \uc774\uba54\uc77c, \uc804\ud654\ubc88\ud638, \ud2f0\ucf13\ubc88\ud638 \ub610\ub294 \uc608\uc57d\ubc88\ud638</li> <li>1-2. \uc218\uc9d1\ud56d\ubaa9 \uc911 \uc120\ud0dd\ud56d\ubaa9: \ub9c8\uc77c\ub9ac\uc9c0 \uce74\ub4dc\ubc88\ud638, \uae34\uae09\uc5f0\ub77d\ucc98, \uc88c\uc11d \ubc0f \uc2dd\uc0ac\uc694\uccad</li> <li>1-3. \ucd94\uac00\uc785\ub825\uc815\ubcf4 : \ud56d\uacf5\uad8c \uad6c\ub9e4 \ub4f1 \ub2f9\uc0ac\uc758 \uc0c1\ud488 \ubc0f \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub300\uae08\uacb0\uc81c \uc2dc\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ucd94\uac00\uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n \x3Cbr\x3E[\uce74\ub4dc\uc885\ub958, \uce74\ub4dc\ubc88\ud638, \uc720\ud6a8\uae30\uac04, cvv ( Card Verification Value )\ubc88\ud638, \uce74\ub4dc\uc0c1 \uc18c\uc720\uc8fc\uc774\ub984, \uacc4\uc88c\ubc88\ud638]</li> <li>1-4. \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\ubc29\ubc95 : \ud0c0\uc774\ud56d\uacf5 \ud648\ud398\uc774\uc9c0, \ucf5c\uc13c\ud130\ub97c \ud1b5\ud55c \uc720\uc120\uc0c1\ub2f4</li> </ol> <h3>2. \uac1c\uc778\uc815\ubcf4\uc758 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801</h3> <p>\ud0c0\uc774\ud56d\uacf5\uc740 \uc218\uc9d1\ud55c \uac1c\uc778\uc815\ubcf4\ub97c \ub2e4\uc74c\uc758 \ubaa9\uc801\uc744 \uc704\ud574 \ud65c\uc6a9\ud569\ub2c8\ub2e4.</p> <p>\uc11c\ube44\uc2a4\uc81c\uacf5\uc5d0 \uad00\ud55c \uacc4\uc57d\uc774\ud589 \ubc0f \uc11c\ube44\uc2a4 \uc81c\uacf5\uc5d0 \ub530\ub978 \uc694\uae08\uc815\uc0b0 : \ucf58\ud150\uce20 \uc81c\uacf5, \ud56d\uacf5\uad8c \uc608\uc57d\u318d\ubc1c\uad8c, \ud56d\uacf5\uad8c \ub4f1 \uac01\uc885 \ubb3c\ud488\ubc30\uc1a1 \ub610\ub294 \uccad\uad6c\uc11c \ubc1c\uc1a1, \uad6c\ub9e4 \ubc0f \uc694\uae08\uacb0\uc7ac</p> <h3>3. \uac1c\uc778\uc815\ubcf4\uc758 \ubcf4\uc720 \ubc0f \uc774\uc6a9\uae30\uac04</h3> <p>\uc6d0\uce59\uc801\uc73c\ub85c, \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801\uc774 \ub2ec\uc131\ub41c \ud6c4\uc5d0\ub294 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc9c0\uccb4 \uc5c6\uc774 \ud30c\uae30\ud569\ub2c8\ub2e4. \ub2e8, </p> <p>\uad00\uacc4\ubc95\ub839\uc758 \uaddc\uc815\uc5d0 \uc758\ud558\uc5ec \ubcf4\uc874\ud560 \ud544\uc694\uac00 \uc788\ub294 \uacbd\uc6b0 \ud68c\uc0ac\ub294 \uc544\ub798\uc640 \uac19\uc774 \uad00\uacc4\ubc95\ub839\uc5d0\uc11c \uc815\ud55c \uc77c\uc815</p> <p>\ud55c \uae30\uac04 \ub3d9\uc548 \ud68c\uc6d0\uc815\ubcf4\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4.</p> <ol> <li>3-1. \ubcf4\uc874 \ud56d\ubaa9 : \uc774\ub984 , \uc774\uba54\uc77c , \uc804\ud654\ubc88\ud638</li> <li>3-2. \ubcf4\uc874 \uadfc\uac70 : \ud68c\uc6d0\ub4e4\uc758 \ub3d9\uc758\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc218\ub839\ud558\uba70 \uac70\ubd80\uc2dc \uc0ad\uc81c</li> <li>3-3. \ubcf4\uc874 \uae30\uac04 : 5\ub144</li> </ol></div>"
}
var labelPlstick = {
	GB: "Please tick this box to accept and agree as following.",
	KO: "\uc544\ub798 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uacfc \ud65c\uc6a9 \ubc0f \uae30\ud0c0 \uaddc\uc815\uc5d0 \ub300\ud55c \ucd94\uac00 \ub3d9\uc758\ub97c \uc704\ud558\uc5ec \uccb4\ud06c \ubc15\uc2a4\ub97c \ud074\ub9ad\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624."
}

var updateHTML = {
	hilight_Content: {
		add: function (d, i, v) {
			implibdx.core.updateDom(d, function () {
				$(i).css("color", v);
			}, 1000, 5);
		},
		content_FARE: function () {
			updateHTML.hilight_Content.add("div.flight-info-cabin", ".flight-info-cabin div.flight-info-right", "#ce0058");
			implibdx.core.updateDom("div.flight-info-airline", function () {
				$.each($("div.flight-info-airline").find("bdo"), function (key, value) {
					if ((/[TG]{2}/).test($("span.flight-info-airline-flight").find("bdo")[key].innerText) == false) {
						$(this.offsetParent).css("color", "#ce0058")
					}
				});
			}, 1000, 5);
		}
	},
	extraService: function (idService, idbox, nService) {
		implibdx.core.updateDom(idbox, function () {
			try {

				$('.' + idService).append(check.defaultLang(_extraServiceOBJ[nService], eBaDataLayer.language, "GB"));
				if (eBaDataLayer.bound[0].flights[0].cabin == "E") {
					$('.box_service > .txt-b').removeClass('hide')
				}
			} catch (error) {
				console.log('Err : ' + error);
			}

		}, 1000, 4);
	},
	remove_content: {
		price_RTPL: function () {
			implibdx.core.updateDom("div.pnrd-view.row", function () {
				$('.price-details').remove();
			}, 1000, 5);
		},
		servicesbreakdown: function (p) {
			if (eBaDataLayer.page_code == p) {
				implibdx.core.updateDom("section#services-breakdown", function () {
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
		additional_services: function () {
			implibdx.core.updateDom("section#reservation-details", function () {
				$("#services-breakdown footer").remove();
			}, 1000, 5)
		}
	},
	Passengerinfo: function () {



		if (eBaDataLayer.currency == "SGD") {
			implibdx.core.updateDom("section.traveller-panel-body.panel-body", function () {
				$("label[for $=\"_ADT-IDEN_TitleCode\"]").append(" (as in passport)");
				$("label[for $=\"_ADT-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_CHD-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");

				$("label[for $=\"_YTH-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_YTH-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
			}, 1000, 5);
		}
	},
	clickConfirm: function () {
		if (eBaDataLayer.currency == "KRW" && (eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")) {
			implibdx.core.updateDom("div.purchase-conditions", function () {
				var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
				$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">" + labelPlstick[eBaDataLayer.language] + "</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
				$("#showCondition").on("click", function () {
					if ($(this).attr('data-toggled') == 'off') {
						$(this).attr('data-toggled', 'on');
						$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
						$("#FYIHtml>div#TAC").html(clickConfirm).show();
					} else if ($(this).attr('data-toggled') == 'on') {
						$(this).attr('data-toggled', 'off');
						$("#FYIHtml").remove();
					}
				});
			}, 1000, 6);
		}
	},
	addseat_class: () => {
		implibdx.core.updateDom("div.catalogServices-teaser-column", function () {
			if (eBaDataLayer.bound[0].flights[0].cabin !== 'E') {
				$('#service-desc-SIT div').removeClass('class-default');
				$('#service-desc-SIT > div div.class-' + eBaDataLayer.bound[0].flights[0].cabin).addClass('class-default');
			} else if (eBaDataLayer.bound[0].flights[0].cabin == 'N' || eBaDataLayer.bound[0].flights[0].operated_by.airline_code == "WE") {
				$('#service-desc-SIT div').removeClass('class-default');
				$('#service-desc-SIT > div div.airline-WE').addClass('class-default');
			}
		}, 1000, 5)
	}
}

function expanded_adult() {
	implibdx.core.updateDom("section.traveller-form", function () {
		for (i = 0; i <= $("a[aria-labelledby*='_cardTravellerADT']").length - 1; i++) {
			if (i !== 0) {
				$("a[aria-labelledby*='_cardTravellerADT']")[i].click();
			}
		}
		for (i = 0; i <= $("a[aria-labelledby*='_cardTravellerINF']").length - 1; i++) {
			$("a[aria-labelledby*='_cardTravellerINF']")[i].click();
		}
		for (i = 0; i <= $("a[aria-labelledby*='_cardTravellerCHD']").length - 1; i++) {
			$("a[aria-labelledby*='_cardTravellerCHD']")[i].click();
		}
		for (i = 0; i <= $("a[aria-labelledby*='_cardTravellerYTH']").length - 1; i++) {
			$("a[aria-labelledby*='_cardTravellerYTH']")[i].click();
		}
		for (i = 0; i <= $("a[aria-labelledby*='_cardTravellerB15']").length - 1; i++) {
			$("a[aria-labelledby*='_cardTravellerB15']")[i].click();
		}
	}, 1000, 6);
}

$(function () {
	$('div.catalogServices-teaser-MEA').on('click', function () {

		console.log('51112')
	})
	$('div.catalogServices-teaser-SIT').on('click', function () {

		console.log('51111')
	})
});
function setTimeoutBAG() {
	console.log('sssssss')
	implibdx.core.updateDom('.catalogServices-container', function () {
		$("button[id$='-close-btn']").on('click', function () {
			if ($('.box_service').length == 0) {
				window.setTimeout(function () {
					updateHTML.extraService('catalogServices-teaser-SIT', 'div.catalogServices-teasers-container', 'seat');
					updateHTML.extraService('catalogServices-teaser-MEA', 'div.catalogServices-teasers-container', 'meal');
					updateHTML.extraService('catalogServices-teaser-BAG', 'div.catalogServices-teasers-container', 'baggage');
					console.log('xxxx')
				}, 600);
			}
		});
	}, 1000, 5);





}

function lowest() {
	if (eBaDataLayer.page_code == '')
		implibdx.core.updateDom("div#matrix-second-row", function () {
			$("#calendar-matrix-inner>table tbody tr>td>div>div>div i[title='Lowest Fares']").parents('div.calendarmatrix-inner-cell').css('border', '2px solid #259800')
		}, 1000, 5);
	if (eBaDataLayer.page_code == 'FPOW') {
		implibdx.core.updateDom("div#matrix-second-row", function () {
			$("div.bound-table-flightline div>header>i[title='Lowest Fares']").parents('div.bound-table-cell-reco-available').css('border', '2px solid #259800')
		}, 1000, 5);
	}
}
function _addClass(x, y) {
	let _Start = document.getElementById(x)
	let _Desti = y
	implibdx.core.updateDom("div#matrix-second-row", function () {
		_Start.classList.add(_Desti);
	}, 1000, 5);
}

var clickConfirm_KOR = function () {
	if (eBaDataLayer.currency == "KRW" && (eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")) {
		implibdx.core.updateDom("div.purchase-conditions", function () {
			var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
			$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">" + labelPlstick[eBaDataLayer.language] + "</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
			$("#showCondition").on("click", function () {
				if ($(this).attr('data-toggled') == 'off') {
					$(this).attr('data-toggled', 'on');
					$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
					$("#FYIHtml>div#TAC").html(clickConfirm).show();
				} else if ($(this).attr('data-toggled') == 'on') {
					$(this).attr('data-toggled', 'off');
					$("#FYIHtml").remove();
				}
			});
		}, 1000, 6);
	}
}
var xbagSet = {
	set: function () {
		implibdx.core.updateDom("div#pinkbanner", function () {
			$("#link_baggage").attr('href', '')
			$("#link_baggage").attr('atdelegate', xbagSet.getService())
			$("#link_car").attr('href', 'http://www.hertzasia.com/thaiairways/')
			$("#link_insure").attr('href', 'https://www.thaiairways.com/' + siteLang(eBaDataLayer.language) + '/book/moreservices.page?#insurance')

		}, 1000, 6);
	},
	getService: function () {
		return $("#services-breakdown footer>button").attr('atdelegate');
	}

}

var GOV = function () {
	implibdx.core.updateDom(".fop-menu-wrapper", function () {

		$("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],.fop-icon icon-office").on('click', function (event) {
			if (eBaDataLayer.language === "GB") {
				window.setTimeout(function () {
					(dataTransfer['EXTERNAL_ID#4'] === 'GOV') ? $("div[id $='_fopTemplate_custom-pickup']").html('Contact at THAI ticket office in the country where the journey') : console.log('no')
				}, 200)
			}
			if (eBaDataLayer.language === "TH") {
				window.setTimeout(function () {
					(dataTransfer['EXTERNAL_ID#4'] === 'GOV') ? $("div[id $='_fopTemplate_custom-pickup']").html('\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23 \u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e17\u0e35\u0e48\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07') : console.log('no')
				}, 200)

			}
		})
	}, 1000, 6)
}



var govApim = function () {
	if (eBaDataLayer.page_code === 'APIM') {
		implibdx.core.updateDom("section.traveller-panel-body.panel-body", function () {
			if (eBaDataLayer.language === "GB") {
				$("label[for $=\"PSPT_DocumentNumber\"]").html("Document number* (Please fill in the form as following pattern, 001/2517 as 0012517)");
				$("label[for $=\"PSPT_DocumentType\"]").html("Document type:<br>&nbsp");
			}
			if (eBaDataLayer.language === "TH") {
				$("label[for $=\"PSPT_DocumentNumber\"]").html("\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23* (\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49 001\x2F2517 - 0012517)");
				$("label[for $=\"PSPT_DocumentType\"]").html("\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23:<br>&nbsp");

			}

		}, 1000, 5);
	}
}


var contactInfo = {
	click_label: () => {
		$('#PhoneSmsNotifCode,#PhoneHomeCode,#PhoneBusinessCode').on('click', (x) => {
			$('#' + x.currentTarget.id + ' .phoneCode').show()
			$('#' + x.currentTarget.id + ' .phoneNumber').show()
		})
	},
	hide_phone: () => {
		implibdx.core.updateDom("section.traveller-contact-information-panel", function () {
			$('.phoneCode').map(x => contactInfo._hidephone($('.phoneCode')[x]))
			contactInfo.click_label();
		}, 1000, 7);
	},
	_hidephone: (x) => {
		if (/(PhoneSmsNotifCode|PhoneHomeCode|PhoneBusinessCode)$/.test(x.children[0].id) == true) {
			x.parentNode.setAttribute('id', x.children[0].id.split("-").pop())
			x.parentNode.children[1].style.display = "none";
			x.parentNode.children[2].style.display = "none";
			return x.parentNode;
		} else {
			return false;
		}
	},
	phone: function () {
		for (i = 0; i < $(".phoneCode").length; i++) {
			if (i !== 0 && i !== 3) {
				console.log(i)
				$(".phoneCode")[i].style.display = "none";
				$(".phoneNumber")[i].style.display = "none";
			}
		}
	},
	click_phone: function () {
		implibdx.core.updateDom("section.traveller-contact-information-panel", function () {
			contactInfo.add_idPhone();
			contactInfo.phone();
			$('#BusinessPhone').on('click', function () {
				$('.traveller-contact-information-panel-body .phoneNumber')[2].style.display = "block"
				$('.traveller-contact-information-panel-body .phoneCode')[2].style.display = "block"
			})

			$('#HomePhone').on('click', function () {
				$('.traveller-contact-information-panel-body .phoneNumber')[1].style.display = "block"
				$('.traveller-contact-information-panel-body .phoneCode')[1].style.display = "block"
			})
		}, 1000, 7);
	},
	add_idPhone: function () {
		$(".traveller-contact-information-panel-body .control-label")[8].setAttribute("id", "BusinessPhone");
		$(".traveller-contact-information-panel-body .control-label")[5].setAttribute("id", "HomePhone");

	}
}

var removeXbag = {
	check: function () {
		return (eBaDataLayer.contact_information.email === undefined) ? true : false;
	},
	remove: function (r) {
		implibdx.core.updateDom("#pinkbanner", function () {

			if (r === true) $("#PinkBanner_3")[0].parentElement.remove();
			else return false;
		}, 1000, 5);
	}
}
var removePinkbanner = function (id) {
	let pinkID = id;
	implibdx.core.updateDom("#pinkbanner", function () {
		$(pinkID)[0].parentElement.remove();
	}, 1000, 5);
}

const reCurrConverter = () => {
	document.getElementsByClassName('tripsummary-price-currency-converter')[0].remove()
}


function chkMarket(m) {
	var xMaket = m;
	const _market = ['CH_NORMAL'];
	for (i = 0; i <= _market.length; i++) {
		return xMaket == _market[i];
	}
}
function placeholder() {
	implibdx.core.updateDom('.traveller-panel-body', function () {
		$("input[id$=_ADT-IDEN_FirstName]").attr('placeholder', `Prénom (tel qu'indiqué sur le passeport)`)
		$("input[id$=_ADT-IDEN_LastName]").attr('placeholder', `Nom (tel qu'indiqué sur le passeport)`)
	}, 1000, 5);
}

const passenger_list = {
	addHtml: () => {
		passenger_list.passlist = "";
		passenger_list.totalpass = "";
		let paxType = { "ADT": "Adult(s)", "CHD": "Child", "B15": "Youth", "INF": "Infant" }
		eBaDataLayer.passengerList.forEach((x, i) => passenger_list.passlist += `<li> <span>${i + 1}. ${dataTransfer['PNR#1_TITLENAME#' + (i + 1)]}.${x.first_name} ${x.last_name}</span> (${x.pax_type})</li>`);
		eBaDataLayer.passengers.filter((e, i, arr) => arr.findIndex(e2 => Object.keys(e2).every(prop => e2[prop] == e[prop])) == i).forEach(x => passenger_list.totalpass += `<span class="traveller"> ${x.nb_pax_type}${paxType[x.pax_type]}</span>`)
		let newItem = document.createElement("div");
		newItem.setAttribute('id', 'passengerlist');


		let addHTML = `<header class="travellers-panel-heading ">
									<i class="icon icon-adult" aria-hidden="true"></i>
									<span class="title">${eBaDataLayer.passengers.length} Travellers</span>
									${passenger_list.totalpass}
								</header>
								<ul>
									${passenger_list.passlist}
								</ul>`;



		implibdx.core.updateDom('.ticket-delivery', () => {

			document.getElementsByClassName('ticket-delivery')[0].parentNode.insertBefore(newItem, document.getElementsByClassName('ticket-delivery')[0].nextSibling);
			document.getElementById('passengerlist').innerHTML = addHTML;

		}, 1000, 5);
	}
}
const changeClassPagmentbox = () => {
	implibdx.core.updateDom('.payment', function () {
		$('.payment div[data-placeholder-path="PURC/pageContent/payment"]').addClass('col-sm-24');
		$('.relative.fop-wrapper').removeClass('col-xs-24 col-sm-18').addClass('col-sm-16')
	}, 1000, 5);
}

const ms_icon = () => {
	implibdx.core.updateDom('#tpl4_rememberDetails', function () {
		const obj = {
			remember: {
				element: document.getElementById("message-remember-checkbox"),
				remove_class: "icon-miles",
				add_class: "icon-save",
			},
			allowemail: {
				element: document.getElementById("message-allow-data-collection"),
				remove_class: "icon-miles",
				add_class: "icon-envelope",
			}
		}
		Object.keys(obj).forEach(key => {
			obj[key].element.firstChild.classList.remove(obj[key].remove_class);
			obj[key].element.firstChild.classList.add(obj[key].add_class);
		})
	}, 1000, 3);
}
const xeBag = () => {
	const cityairport = /(CTU)/.test(eBaDataLayer.bound.map(x => x.route).toString());
	if (eBaDataLayer.page_code == 'APIM' && cityairport == true) {
		implibdx.core.updateDom('#apim_afterContactInformation', function () {
			document.getElementById("tpl7_BAG").remove();
		}, 1000, 3);
	} else if (eBaDataLayer.page_code === 'MDFSR' && cityairport == true) {
		implibdx.core.updateDom('.catalogServices-teasers-container', function () {
			document.getElementsByClassName('catalogServices-teaser-column-BAG')[0].remove();
			console.log('xxx')
		}, 1000, 3);
	} else if (eBaDataLayer.page_code == "AAS" && cityairport == true) {
		implibdx.core.updateDom('.catalogServices-teasers-container', function () {
			document.getElementsByClassName('catalogServices-teaser-BAG')[0].remove();
		}, 1000, 3);
	}
}




var createEM = {
	create: function (tag, txt, sta) {
		if (tag != "") {
			this.tag = tag;
			this.content = txt;
			this.status = sta;
			let anchor = document.createElement(this.tag);
			let txtNode = '';

			switch (this.status) {
				case '0':
					txtNode = document.createTextNode(this.content);
					anchor.appendChild(txtNode);
					break;
				case '1': anchor.src = this.content;
					break;
			}
			return anchor;
		} else return false;
	}
}

function limitDate(xdate) {
	const _date = setDatef(xdate);
	return (new Date >= _date);
}

var widgetScript = {
	destination: function (objName, idName, elmName, attrName, src) {
		this._Anchor = objName[idName];
		this._Elm = objName[elmName];
		this._Attr = objName[attrName];
		this._Src = objName[src];

		let _anchor = document.getElementById(this._Anchor);
		let createAttr = document.createElement(this._Elm);

		(this._Src) ? createAttr.src = this._Src : '';

		for (key in this._Attr) {
			createAttr.setAttribute(key, this._Attr[key]);
			console.log('--------------------------------->Run2')
		}
		console.log('widgetScript');
		_anchor.appendChild(createAttr);
	}
}

var xBound = function (xb) {
	var bound = '';
	for (k in xb) {
		bound += xb[k].route + '-';
	}
	return bound;
}

var _Bound = function (b, o) {
	this.arr = o;
	this.bound = b;

	for (k in this.bound) {
		if (k === this.arr) return this.bound[k];
	}

}

var checkRBD = function (reg, rbd) {
	return reg.test(rbd);
}

function linkDangerous(isMobile) {
	implibdx.core.updateDom("#alert-title-terms-and-conditions", function () {
		try {			
			if (isMobile) {
				document.getElementById("link_dangerous").setAttribute('href', `javascript:$('.tabs-container>ul li[data-tab-index="2"]').click()`)
			}else{
				document.getElementById('link_dangerous').addEventListener('click', () => {
					$(".tripsummary-btn").click();
				});
			}

		} catch (error) {
			console.log('Err--- Addscript' + error);
		}
	}, 1000, 5);
}

function ExpandCarSearch(argument) {

}
var checkDate = function(tdate,expdate){
	this.tdate = tdate.split("/");
	this.expdate = expdate.split("/");
	this.travel = new Date(this.tdate[2],(this.tdate[1]-1),this.tdate[0]);  
	this.expEnd = new Date(this.expdate[2],(this.expdate[1]-1),this.expdate[0])

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
				return true;
			}else{
				return false;
			}
		}
		if(bannerTG[name].exp.condition == "ticketing") {
			this.toDay = new Date();
			if(this.toDay <= this.expEnd &&  this.expStart <= this.toDay){
				return true;
			}else{
				return false;
			}
		}


	}else{
		return true;
	}
}

const setDatef = (arr) => new Date(arr[0],arr[1],arr[2]);

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
		return this.spl[2]+"-"+this.spl[1]+"-"+this.spl[0];
	},
	date_travel:function(d){
		this.date = d.split("-");
		return this.date[2]+" "+check.months[eBaDataLayer.language][this.date[1]-1]+" "+this.date[0];
	},
	trip_type:function(t){
		this.t = t;
		this.vDate ;
		if(this.t == "OW" || this.t === undefined){
			this.vDate = check.chkdate(eBaDataLayer.bound[0].arr_date).split("-");
			this.vDate[2] = parseInt(this.vDate[2])+1;
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

let modpnr = (pnr)=>{
	const modDate = new Date();
	let mergeDate = modDate.getFullYear()+''+(modDate.getMonth()+1)+''+modDate.getDate()+''+modDate.getHours()+''+modDate.getMinutes()+''+modDate.getSeconds()+''+modDate.getMilliseconds();
	return mergeDate+''+pnr.match(/[a-zA-Z0-9]{1}$/)[0];
}


const chkSite = () => (window.location.hostname === "book.thaiairways.com")?true:false;




let siteLang = (language)=>{
	const lang = {
		CN:"zh_CN",
		DE:"de_DE",
		ES:"en",
		FR:"fr_FR",
		GB:"en",
		IT:"it_IT",
		JP:"ja_JP",
		KO:"ko_KR",
		RU:"en",
		SE:"en",
		TH:"en_TH",
		TW:"zh_TW"
	}
	return lang[language];
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

var objNamescript = {
    jetradar: { 
        elm1: {
            tag: "img",
            txt: "http://pixel.aviasales.ru/ThaiAirways?",
            case: "1", 
            paramData: {
                PNR: 'pnr_nbr'
            }
        }
    },
    fbpixel_it: { 
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
    everymundo_FareNet: { 
        elm1: {
            tag: "script",
            txt: "https://www.securitytrfx.com/js/tg.js",
            case: "1"
        }
    },
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
    pixel_SG_FPOW: { 
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
    pixel_SG_FARE: { 
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
    pixel_SG_ALPI: { 
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
    pixel_SG_PURC: { 
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
    pixel_SG_CONF: { 
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
    CheeseMobile_FARE: {
        elm: {
            tag: "img",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.FARE"
            }
        }
    },
    CheeseMobile_PURC: {
        elm: {
            tag: "img",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.PAYMENT"
            }
        }
    },
    CheeseMobile_CONF: {
        elm: {
            tag: "script",
            txt: "https://track.cdn-ads.com/TG/?",
            case: "1",
            paramData: {
                cu: "TG.COMPLETE"
            }
        }
    },
    insider: {
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

var knorex = { 
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
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
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

            let currency = eBaDataLayer.currency;

            content = "window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]); (function(){ var k=document.createElement('script');k.type='text/javascript';k.async=true; k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/ti1tqfxfv.js'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s); }());";

            txtNode = document.createTextNode(content)
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
        }, 1000, 6);
    }
}


var DMP_ControlTag_kxint = {
    add: function () {
        implibdx.core.updateDom("footer#main-layout-bottom", function () {
            let addTo = document.getElementById('main-layout-bottom');
            let createAttr = document.createElement("script");
            let txtNode = ''
            let content = ''
            let lang = eBaDataLayer.language;
            let exID = eBaDataLayer.external_id;

            createAttr.setAttribute('class', 'kxint');
            createAttr.setAttribute('data-namespace', 'thaiairways');
            createAttr.setAttribute('type', 'text/javascript');

            let currency = eBaDataLayer.currency;

            content = "window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]); (function(){ function retrieve(n){ var k= 'kx'+'thaiairways_'+n, ls=(function(){ try { return window.localStorage; } catch(e) { return null; } })(); if (ls) { return ls[k] || ''; } else if (navigator.cookieEnabled) { var m = document.cookie.match(k+'=([^;]*)'); return (m && unescape(m[1])) || ''; } else { return ''; } } Krux.user = retrieve('user'); Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : []; })();";

            txtNode = document.createTextNode(content)
            createAttr.appendChild(txtNode);
            addTo.appendChild(createAttr);
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

        frame.setAttribute("name", "rentalCar");
        frame.setAttribute("id", "rentalCarframe");
        frame.style.width = 100 + "%";
        frame.style.height = 280 + "px";
        frame.style.border = "none";
        document.getElementById("rentalCar").appendChild(frame);

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
            if (expStart <= this.today && this.today <= expEnd) { 
                return true;
            } else {
                return false;
            }
        } else {
            console.log(expStart, expEnd, expBuy, expBuyStart)
            if (expStart <= this.today && this.today <= expEnd && this.postpone == "NO") {
                if (expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy) {
                    return true;
                } else {
                    return false;
                }
            } else if (expStart <= this.today && this.today <= expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES") {
                console.log("ok UK")
                return true;
            } else {
                return false;
            }
        }
    },
    chkCountry: function (c, h, k) {
        const nameCountry = c,
            nameOBJ = window[h],
            rxg = k;
        for (i in nameOBJ["bound"]) {
            if (i != "0" && nameCountry.indexOf(nameOBJ["bound"][i].dep_airport) >= 0) {
                console.log('xxx')
                console.log(nameOBJ["bound"][i].dep_airport);
                return true;
            }
        }
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
    pixel_SG: { 
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
        conditionArrAirport: ['BKK'] 
    },
    lineVillage: {
        send: function () {
            if (eMailTrigger.chkEXP(["2019", "07", "05"], ["2019", "11", "31"], ["2020", "01", "31"], ["2019", "06", "16"], "HK-Line_Village", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
                implibdx.core.updateDom("div.TGINSBannerMenu", function () {
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
        conditionArrAirport: ["BKK"] 
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
const hidemodflight = () => { 
    const errDateE = [new Date(2019, 11, 18), new Date(2019, 11, 20)]; 
    const bDate = new Date(eBaDataLayer.pnr_creation_date);
    const errDate = bDate >= errDateE[0] && bDate < errDateE[1]
    const errClass = eBaDataLayer.bound.map(x => x.flights).map(x => x[0].cabin == 'B').every(x => x);
    implibdx.core.updateDom("div#fare-review-bounds", function () {
        if ((/BKK-ARN/).test(eBaDataLayer.bound[0].route) == true && errDate && errClass) {
            $('div#fare-review-bounds button').remove();
        }
    }, 1000, 4);
}
const _hideMEA = () => {
    if (eBaDataLayer.bound.every(x => x.dep_country == 'TH') &&  eBaDataLayer.bound[0].arr_country == 'TH') {
        implibdx.core.updateDom(".catalogServices-teasers-container", function () {
            $("#tpl7_MEA").css('display', 'none');
            $("div.catalogServices-teaser-column-MEA").css('display', 'none');
            $("div.catalogServices-column-MEA").css('display', 'none');

        }, 1000, 4);
    }
}
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
            _purchase_fare_condi.map(x => _tripsummaty_fare += boxCondi[0].children[x].outerHTML);
            fareCondi.innerHTML = _fareCondiLang + "" + _tripsummaty_fare;
            fareCondi.classList.remove("hide");
        } else {
            boxCondi.append('<ul><li>' + _fareCondiLang + "" + _tripsummaty_fare + "</li></ul>")
        }




    }, 1000, 4);
}


const xcheckbox_cf = (dep_country) => {
    try {
        $("#consent_ins").html('sdasdasdasdasdasdasdasd');
        $("#consent_ins").appendTo($('.insurance-radio-selection'));
        $("#consent_ins").removeClass($('ins_hide'));
    } catch (error) {
        console.log('no checkbox');
    }
}

const services_tablefooter = (city) => {
    if (city == "TWD") {
        implibdx.core.updateDom(".availability-container", function () {
            $(".availability-bound ").addClass('tw_city');
        }, 1000, 4);
    }
}

const iden_doc_apim = (ex4) => {
    let _idenDoc = document.getElementsByName('PSPT_DocumentType')[0];
    if (ex4 = 'STU') {
        _idenDoc.options[0].remove()
        _idenDoc.setAttribute('disabled', 'disabled')
    }
}

const testobj = {
    namePri:{
        conditions:{
            date_dep:new Date(['2020','01','25']), 
            date_arr:new Date(['2020','11','25']), 
            sale_start:new Date(['2020','02','25']), 
            sale_end:new Date(['2020','11','25']), 
            city_trav:"BKK-CDG", 
            flight_dep:["TG610"] ,
            maket:new RegExp(/^(TH)/) 
        }
    }
}
const chk_conditions = ({conditions}) =>{
    let toDay = new Date();
    let _Trvel = eBaDataLayer.bound.map(x => new Date(x.dep_date.slice(6)+x.dep_date.slice(2,6)+x.dep_date.slice(0,2)) )

        let obj ={
        isRoute:eBaDataLayer.bound.find(x=>x.route == testobj.namePri.conditions.city_trav)?true:false,
        isSale:toDay <= conditions.sale_start && toDay <= conditions.sale_end,
        flightDep:conditions.flight_dep !== null && typeof conditions.flight_dep !== "undefined"? eBaDataLayer.bound.find( x => conditions.flight_dep.find(k => k === x.flight_numbers) )?true:false:true,
        isMaket:conditions.maket !== null && typeof conditions.maket !== "undefined" ? conditions.maket.test(eBaDataLayer.maket):false
    }
    return obj;
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
		passengerInfo.data9 = (eBaDataLayer.contact_information.email !== undefined)?emailencrypt(eBaDataLayer.contact_information.email):"null";     		
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
            this.htmlDis = '<section id="roh" class="box-roh"><h3>' + ROH.txt.errorTXT[eBaDataLayer.language][0] + '<img src="https://www.thaiairways.com/static/common/imgscontent/banner/rohlogo-w.png" style="width: 105px;float: right;"></h3><h4>' + ROH.txt.errorTXT[eBaDataLayer.language][1] + '</h4><a target="_blank" href="https://www.royalorchidholidays.com/' + check.lang(eBaDataLayer.language)[2] + '"><img class="box-roh_logoROH" src="http://www.thaiairways.com/static/common/imgscontent/banner/ROH_Logos_Thai.png"></a></section>';
            return this.htmlDis;
        }
    },
    sendData: function() {
    	console.log('----------------------------ROH');
        if ((eBaDataLayer.page_code == "CONF"|| eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {

            let urlROH = (window.location.hostname == "book.thaiairways.com")?'https://www.thaiairways.com/app/roh/':'https://uat.thaiairways.com/app/roh/';
            let idST = 'reservation-details';            

            implibdx.core.updateDom("div.TGINSBannerMenu", function() {



                ROH.createOBJ();

                if ((check.period(passengerROH.CheckinDate, 4, passengerROH.CheckoutDate, 0) === true) && (check.period(passengerROH.CheckinDate, 25, passengerROH.CheckoutDate, 1) === true)) {

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
        let tagHTML = document.createElement("div");
        tagHTML.setAttribute('id','boxAbandon');

            implibdx.core.updateDom("#terms-and-conditions",function(){

                $('div[id $= \'_termsAndConditions\']').before(tagHTML);
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
        IT:'<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>Fornisco il mio consenso a ricevere da THAI, sulla mia casella di posta elettronica, materiale informativo e promozionale relativo a questa prenotazione. Sono a conoscenza di poter in ogni momento ritirare il mio consenso cliccando sul link \u201cpreferisco non ricevere\u201d riportato negli stessi messaggi email.<br>Per conoscere come THAI utilizza i tuoi dati personali, consultate la nostra Informativa sulla <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">Protezione dei Dati Personali.</a></span></label>',
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
            if($('#abandon').prop("checked") === true && $('input[id $="-input-purchaseForm-termsConditionsForm-termsAndCondition"]').prop("checked") === true && ($("input[id $='_radio_EXT']").prop("checked") === true || $("input[id $='_radio_EXT']").prop("checked") == undefined) ){
                abandon_consent.obj["data7"] = "Y";
                abandon_consent.save_data();
            }
         });

         $("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],#tpl5_radio_PLCC,li[id $='_li_PLCC'],label[for $='_radio_PLCC'],input[id $='_radio_PLCC']").on('click', function(event) {
             event.preventDefault();
             abandon_consent.remove();
         });

         $("li[id $='_li_EXT'],label[for $='_radio_EXT'],input[id $='_radio_EXT'],#tpl5_radio_EXT, label[for='tpl5_radio_EXT'], li#tpl5_li_EXT").on('click', function(event) {
             event.preventDefault();
             $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );

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
const isMobile = (document.getElementsByTagName("body")[0].getAttribute("data-device-type") === "MOBILE");

let x_objInsurance = (c, l) => {
    const _objInsurance = {
        HK: {
            GB: {
                logourl:"./img/client/TravelInsuranceIcon.jpg",
                titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
                insurance_txt: `<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class="icon-check title-icon"></i> Flight delay, flight cancellation</li><li><i class="icon-check title-icon"></i> Compensation for baggage delay or loss</li><li><i class="icon-check title-icon"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited ("Liberty"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers’ (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>`,
                insurance_txt_mobile: `<p><br>Leave your worry behind and make sure that you're protected</p>`,
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers",
                    linkPolicy: " http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
                    txtPolicy: "I agree to the Policy Wording and Declaration."
                },
                radio_2: {
                    txt_1: "<span class=\"\">No, I don\'t want to protect my trip<span>",
                    txt_2: "for all passengers"
                }
            },
            TW: {
                logourl:"./img/client/TravelInsuranceIcon.jpg",
                titlepanel: "\u4fdd\u969c\u60a8\u7684\u65c5\u7a0b \u4ee5\u4e0b\u65c5\u904a\u4fdd\u96aa\u8cc7\u8a0a\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b",
                insurance_txt: `<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class="icon-check title-icon"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class="icon-check title-icon"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class="icon-check title-icon"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul><p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> \u8acb\u7d30\u95b1\u65c5\u904a\u4fdd\u96aa\u4fdd\u969c\u8868, \u4fdd\u55ae\u689d\u6b3e\u53ca\u8072\u660e\u3002\u5982\u9078\u8cfc\u672c\u65c5\u904a\u4fdd\u96aa\uff0c\u5373\u8868\u793a\u95a3\u4e0b\u78ba\u8a8d\u5df2\u95b1\u8b80\u4e26\u540c\u610f\u4fdd\u55ae\u689d\u6b3e\u7684\u689d\u6b3e\u3001\u7d30\u5247\u53ca\u4e0d\u53d7\u4fdd\u4e8b\u9805\u53ca\u8072\u660e\u7684\u5167\u5bb9\u3002 \u672c\u65c5\u904a\u4fdd\u96aa\u53ea\u9069\u7528\u65bc\u9999\u6e2f\u5c45\u6c11\u4e26\u5f9e\u9999\u6e2f\u51fa\u767c\u7684\u65c5\u7a0b\u3002\u672c\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u627f\u4fdd\uff08\u4e0b\u7a31\u300c\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u300d\uff09\uff0c\u4e26\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b\u670d\u52d9\u3002 \u5b89\u806f\u65c5\u884c\u70ba Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6a19\uff0c\u70ba\u4e00\u5bb6\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u59d4\u4efb\u7684\u4fdd\u96aa\u4ee3\u7406\u5546\u3002 \u95a3\u4e0b\u8cfc\u8cb7\u7684\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u63d0\u4f9b\uff0c\u800c\u4e26\u975e\u7531\u6cf0\u822a\u63d0\u4f9b\u3002\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u70ba\u672c\u65c5\u904a\u4fdd\u96aa\u7684\u627f\u4fdd\u516c\u53f8\u4e26\u5c07\u8ca0\u8cac\u7e55\u767c\u6709\u95dc\u7684\u4fdd\u55ae\u3002\u6cf0\u822a\u4e26\u975e\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u7684\u4fdd\u96aa\u4ee3\u7406\u4ea6\u4e0d\u662f\u4fdd\u96aa\u92b7\u552e\u7d93\u7d00\u3002\u6cf0\u822a\u4e0d\u6703\u4ee3\u8868\u95a3\u4e0b\u5b89\u6392\u65c5\u904a\u4fdd\u96aa\uff0c\u4ea6\u7121\u9808\u5c0d\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u5c31\u672c\u65c5\u904a\u4fdd\u96aa\u6240\u63d0\u4f9b\u4e4b\u4efb\u4f55\u8cc7\u6599\u8ca0\u8cac\u3002 \u95a3\u4e0b\u540c\u610f\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u4f7f\u7528\u95a3\u4e0b\u53ca\u540c\u4e00\u8a02\u7968\u4ea4\u6613\u7684\u5176\u4ed6\u65c5\u5ba2\u4e4b\u500b\u4eba\u8cc7\u6599\uff0c\u4ee5\u8655\u7406\u6295\u4fdd\u65c5\u904a\u4fdd\u96aa\u7684\u7533\u8acb\u4ee5\u53ca\u7ba1\u7406\u4fdd\u55ae\uff0c\u4e26\u63d0\u4f9b\u7d22\u8ce0\u53ca\u6551\u63f4\u670d\u52d9\u3002 </p></div></div>`,
                insurance_txt_mobile: "<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul>",
                radio_1: {
                    txt_1: "\u662f\uff0c\u6211\u8981\u70ba\u65c5\u7a0b\u6295\u4fdd\u00a0\u00a0 \u4ee5\u4fdd\u969c\u6bcf\u4e00\u4f4d\u65c5\u5ba2",
                    txt_2: " ",
                    linkPolicy: "http://www.magroup-online.com/TGA/HK/ZH/OnlineTravelProtector_TC.pdf",
                    txtPolicy: "\u672c\u4eba\u540c\u610f\u4fdd\u55ae\u689d\u6b3e\u53ca\u8072\u660e\u3002"
                },
                radio_2: {
                    txt_1: "<span class=\"\">\u5426\uff0c\u6211\u62d2\u7d55\u70ba\u65c5\u7a0b\u6295\u4fdd\u00a0 \u4ee5\u4fdd\u969c\u6bcf\u4e00\u4f4d\u65c5\u5ba2</span>",
                    txt_2: " "
                }
            }
        },
        GB: {
            GB: {
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li> <li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li> <li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li> </ul> <p>For more information please <a target=\"_blank\" href=\"http://www.magroup-online.com/TGA/TH/EN/TG_Product_and_Plans.pdf\">click here.</a></p> <br> <div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div> <div class=\"box-insurance_detail-content\"> <p>This travel insurance is managed by AWP Services (Thailand) Co., Ltd. Trading as Allianz Global Assistance, and is underwritten by Muang Thai Insurance Public Company Limited. In purchasing the policy, you agree to receive confirmation and future communications via email. If passengers would like to change the contact method, please call +66(0)2 305 8492</p> </div> </div>",
                insurance_txt_mobile: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected </p>",
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers",
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            }
        },
        SG: {
            GB: {
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul> <p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>This product is underwritten by Liberty Insurance Pte Ltd with the assistance services provided by Allianz Global Assistance. Coverage is available to Singapore citizen or Permanent Resident of Singapore or Singapore Pass Holder and/or Work Permit Holder and their dependents residing in Singapore, and whose journey must start and end in Singapore.</p></div></div>",
                insurance_txt_mobile: `<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected </p>`,
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers",
                    linkPolicy: "https://magroup-webservice.com/TGA/SG/ZH/policy-wording.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            }
        },
        TH: {
            GB: {
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul> <p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p lang=\"en\">\"I consent to the Company for storage, use and disclosure of my truly medical history and information to Office of Insurance Commission for the purpose of regulating the insurance industry. This travel insurance is managed by AWP Services (Thailand) Co., Ltd. Trading as Allianz Global Assistance, and is underwritten by Muang Thai Insurance Public Company Limited. In purchasing the policy, you agree to receive confirmation and future communications via email. If passengers would like to change the contact method, please call +66(0)2 305 8492\"</p></div></div>",
                insurance_txt_mobile: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected </p>",
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers",
                    linkPolicy: "https://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            },
            TH: {
                titlepanel: "\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 (\u0e41\u0e19\u0e30\u0e19\u0e33)",
                insurance_txt: "<p>THAI Travel Safe <br>\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e07\u0e34\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e40\u0e25\u0e47\u0e01\u0e19\u0e49\u0e2d\u0e22\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e01\u0e1b\u0e49\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e41\u0e25\u0e30\u0e04\u0e19\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e23\u0e31\u0e01 \u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07 </p><ul> <li><i class=\"icon-check title-icon\"></i>\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e25\u0e48\u0e32\u0e0a\u0e49\u0e32 \u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07</li><li><i class=\"icon-check title-icon\"></i>\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e23\u0e30\u0e25\u0e48\u0e32\u0e0a\u0e49\u0e32 \u0e2a\u0e39\u0e0d\u0e2b\u0e32\u0e22 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e2a\u0e35\u0e22\u0e2b\u0e32\u0e22</li><li><i class=\"icon-check title-icon\"></i>\u0e04\u0e48\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e2d\u0e35\u0e01\u0e21\u0e32\u0e01\u0e21\u0e32\u0e22</li></ul> <p>\u0e01\u0e23\u0e38\u0e13\u0e32\u0e28\u0e36\u0e01\u0e29\u0e32\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e08\u0e32\u0e01\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e09\u0e1a\u0e31\u0e1a\u0e40\u0e15\u0e47\u0e21</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p>\u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e22\u0e34\u0e19\u0e22\u0e2d\u0e21\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e2f \u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a \u0e43\u0e0a\u0e49 \u0e41\u0e25\u0e30\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e1c\u0e22 \u0e02\u0e49\u0e2d\u0e40\u0e17\u0e47\u0e08\u0e08\u0e23\u0e34\u0e07\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e15\u0e48\u0e2d\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e14\u0e39\u0e41\u0e25\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\n\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e42\u0e14\u0e22 \u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e40\u0e2d \u0e14\u0e31\u0e1a\u0e40\u0e1a\u0e34\u0e25\u0e22\u0e39 \u0e1e\u0e35 \u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e40\u0e0b\u0e2a (\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22) \u0e08\u0e33\u0e01\u0e31\u0e14 \u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e04\u0e49\u0e32 \u0e2d\u0e25\u0e34\u0e2d\u0e31\u0e19\u0e0b\u0e4c \u0e42\u0e01\u0e25\u0e1a\u0e2d\u0e25 \u0e41\u0e2d\u0e2a\u0e0b\u0e34\u0e2a\u0e41\u0e17\u0e19\u0e17\u0e4c \u0e41\u0e25\u0e30\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e42\u0e14\u0e22\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e40\u0e21\u0e37\u0e2d\u0e07\u0e44\u0e17\u0e22\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22 \u0e08\u0e33\u0e01\u0e31\u0e14 (\u0e21\u0e2b\u0e32\u0e0a\u0e19) \u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e19\u0e35\u0e49\u0e17\u0e48\u0e32\u0e19\u0e15\u0e01\u0e25\u0e07\u0e17\u0e35\u0e48\u0e08\u0e30\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e41\u0e25\u0e30\u0e43\u0e2b\u0e49\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e2d\u0e35\u0e40\u0e21\u0e25 \u0e2b\u0e32\u0e01\u0e17\u0e48\u0e32\u0e19\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e41\u0e08\u0e49\u0e07\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e21\u0e32\u0e17\u0e35\u0e48 +66(0)2 305 8492</p></div></div>",
                insurance_txt_mobile: "<p>THAI Travel Safe <br>\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e07\u0e34\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e40\u0e25\u0e47\u0e01\u0e19\u0e49\u0e2d\u0e22\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e01\u0e1b\u0e49\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e41\u0e25\u0e30\u0e04\u0e19\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e23\u0e31\u0e01 \u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07 </p>",
                radio_1: {
                    txt_1: "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07",
                    txt_2: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/TH/TG_TCs_Domestic&Outbound_TH.pdf",
                    txtPolicy: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e09\u0e1a\u0e31\u0e1a\u0e40\u0e15\u0e47\u0e21"
                },
                radio_2: {
                    txt_1: "\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07",
                    txt_2: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"
                }
            }
        },
        IT: {
            IT: {
                titlepanel: 'Assicurazione Viaggi',
                insurance_txt: "<header class=\"box-insurance_header\"> <img id=\"logo_ins_2\" src=\"\" alt=\"\"> <p>Servizio offerto da Allianz Global Assistance, un marchio di AWP P.&C. S.A. <a target=\"_blank\" href=\"http://www.magroup-online.com/ITA/IT/IT/AWP_Company_Data.pdf\">Maggiori Informazioni</a> </p></header> <p>Sulla base delle informazioni fin qui acquisite, dei rischi specifici relativi al tipo di servizio richiesto e tenuto conto delle caratteristiche dei servizi turistici prescelti, il prodotto che la compagnia ritiene adeguato rispetto alle vostre esigenze assicurative ha le seguenti caratteristiche:</p><p class=\"txtregular\">Informiamo che, in considerazione delle caratteristiche del prodotto di cui alla presente offerta, rivolto a clientela digital, l'acquisto della polizza avviene interamente on-line. Pertanto, se non si dispone di un indirizzo e-mail, l'acquisto non potr\xE0 essere finalizzato. In tal caso, La invitiamo a consultare i nostri prodotti tramite differenti canali.\u201D</p><p>COPERTURA MULTIRISCHI CON ANNULLAMENTO</p><ul> <li><i class=\"icon-check title-icon\"></i>Rinuncia al viaggio \u2013 Rimborso penale <span>Rimborso fino a \u20AC 2.500,00 per persona della penale per la rinuncia o la modifica della prenotazione con l'applicazione di una franchigia fino al 10% con un minimo di \u20AC 10,00</span></li><li><i class=\"icon-check title-icon\"></i>Viaggio sicuro - Assistenza in viaggio - vedi dettaglio </li><li><i class=\"icon-check title-icon\"></i>Spese mediche <p>Pagamento diretto spese ospedaliere</p><ol> <li>- fino a \u20AC 1.500,00 per persona per viaggi in Italia</li><li>- fino a \u20AC 150.000,00 per persona per viaggi all'Estero</li><li>- limite rette di degenza : \u20AC 100,00 per persona al giorno fino a massimo \u20AC 1.250,00 </li></ol> <p>Rimborso spese mediche e farmaceutiche</p><ol> <li>- fino a \u20AC \u20AC 1.250,00 per persona per viaggi in Italia e all'Estero</li><li>- franchigia fissa applicata \u20AC 100,00 per persona</li></ol> </li><li><i class=\"icon-check title-icon\"></i>Bagaglio ed effetti personali <span>Rimborso fino a \u20AC 1.000,00 per persona in caso di furto, incendio, rapina, scippo, smarrimento, danneggiamento </span><ol> <li>- limite per oggetto di \u20AC 150,00 </li><li>- franchigia del 10% con un minimo di \u20AC 10,00</li></ol> </li></ul> <p><a target=\"_blank\" href=\"http://www.magroup-online.com/TGA/IT/IT/TGA_IT_it_IPID_INT_Multirischi_con_Annullamento.pdf\"> Consulta il set informativo precontrattuale </a></p><p>La presente polizza assicurativa copre solo i residenti in Italia</p>",
                radio_1: {
                    txt_1: "Desidero acquistare",
                    txt_2: "l\u2019Assicurazione viaggio - Premio totale: ",
                    linkPolicy: "",
                    txtPolicy: "",
                    description: "<br><span class=\"box-insurance_desc\">Selezionando questo prodotto assicurativo:</span><ul class=\"box-insurance_desc\">    <li>- confermo di aver letto e accettato il set informativo precontrattuale (composto da condizioni di assicurazione, DIP e DIP Aggiuntivo) e l'informativa privacy in formato digitale </li>    <li>- confermo che la polizza corrisponde alle mie richieste ed esigenze</li>    <li>Sono consapevole che, in considerazione delle caratteristiche del prodotto che mi \xE8 stato offerto, in quanto rivolto a clientela digital, per finalizzare l'acquisto della polizza \xE8 necessario disporre di un indirizzo email.</li></ul>"
                },
                radio_2: {
                    txt_1: "Intendo proseguire",
                    txt_2: "senza Assicurazione"
                }
            }
        },
        FR: {
            FR: {
                titlepanel: 'Votre assurance voyage (Recommand\u00E9e)',
                insurance_txt: "",
                radio_1: {
                    txt_1: "Assurance Multirisque",
                    txt_2: " ",
                    linkPolicy: "",
                    txtPolicy: "",
                    description: "<br><ul class=\"box-insurance_desc\">\n<li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Annulation / Modification</span><br>\n                       <p> Si vous rencontrez un impr\xE9vu : maladie, accident, modification de cong\xE9 par votre employeur.Billet rembours\xE9 \xE0 hauteur de 2500\u20AC par personne assur\xE9e, en cas d'annulation.Remboursement des \xE9ventuels frais li\xE9s \xE0 une modification \xE0 hauteur de 30\u20AC par personne assur\xE9e. </p></li>\n                    <li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Dommages aux bagages</span><br>\n                        <p>Vous endommagez et/ou perdez vos bagages :<br>\n                        Indemnisation par personne assur\xE9e \xE0 haueur de 1000\u20AC. </p></li>\n                    <li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Interruption de s\xE9jour</span><br>\n                        <p>Remboursement des \xE9ventuels frais suite \xE0 l'interruption de votre voyage.</p>\n                    </li>\n                    <li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Assistance aux voyageurs</span><br>\n                        <p>En cas d'urgence :<br>\n                Profitez d'une assistance m\xE9dicale totale.\n                Organisation et prise en charge du rapatriement, du retour de vos proches.</p>\n                    </li>\n                    <li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Rapatriement et frais m\xE9dicaux</span><br>\n                        <p>Prise en charge jusqu'\xE0 75 000\u20AC.<br>\n                        Pour en savoir plus, <a target=\"_blank\" href=\"http://www.magroup-online.com/TGA/FR/FR/TGA_FR_fr_TCs.pdf\">cliquez ici</a>. </p>\n                    </li>\n                </ul>"
                },
                radio_2: {
                    txt_1: "Assurance Annulation",
                    txt_2: " ",
                    description: "<br><ul class=\"box-insurance_desc\">\n<li><i class=\"icon-check title-icon\"></i><span class=\"bold\">Annulation / Modification</span><br>\n                        <p>Si vous rencontrez un impr\xE9vu : maladie, accident, modification de cong\xE9 par votre employeur.\n                        Billet rembours\xE9 \xE0 hauteur de 2500\u20AC par personne assur\xE9e, en cas d'annulation.\n                        Remboursement des \xE9ventuels frais li\xE9s \xE0 une modification \xE0 hauteur de 30\u20AC par personne assur\xE9e.</p>\n                    </li>\n                </ul>"
                },
                radio_3: {
                    txt_1: "Je ne souhaite pas \xEAtre couvert et en cas ",
                    txt_2: "d'impr\xE9vus tous les frais resteront \xE0 ma charge.",
                    description: "<br><span class=\"box-insurance_desc\">En s\xE9lectionnant un produit d'assurance :</span>\n<p class=\"box-insurance_desc\">Je d\xE9clare avoir pris connaissance du document d\u2019information pr\xE9alablement \xE0 la souscription du contrat d\u2019assurance ainsi que des Conditions G\xE9n\xE9rales et de la d\xE9claration de confidentialit\xE9. Je reconnais que le produit propos\xE9 correspond \xE0 mes besoins.</p>\n<p class=\"box-insurance_desc\">Je confirme avoir ma r\xE9sidence en France. Ce contrat d'assurance garantit uniquement les r\xE9sidents en France.</p>"
                }
            }
        },
        MY:{
            GB:{
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: `<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class="icon-check title-icon"></i> Flight delay, flight cancellation</li> <li><i class="icon-check title-icon"></i> Compensation for baggage delay or loss</li> <li><i class="icon-check title-icon"></i> Medical expenses for in/out patient</li> </ul> <p>For more information, please refer to Policy Wording.</p> <br>  <div class="box-insurance_detail-content"> <p>Note: This insurance service is provided by CIMB Howden. Please read the Policy Wording and the <a target="_blank" href="http://www.magroup-online.com/TGA/MY/EN/TGMY_Service_Booklet.pdf">Service Booklet</a> for complete details on coverage terms.</p> </div> </div>`,
                insurance_txt_mobile:"<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected </p>",
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers ",
                    linkPolicy: "http://www.magroup-online.com/TGA/MY/EN/Comprehensive_TGMY_V1.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            }
        },
        BE:{
            GB: {
                titlepanel: "The following Travel Insurance information is provided by Allianz Assistance.",
                insurance_txt: "<p>Protect yourself against unexpected with Travel Insurance from Allianz.<br>Our Policy covers :</p> <ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li> <li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li> <li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li> </ul> <p>For more information, please refer to Policy Wording.</p> <br>  <div class=\"box-insurance_detail-content\"> <p><b>Please read the Product Information Document (IPID), the Privacy Document and the general conditions. By selecting and purchasing this Travel Insurance, you confirm that you have read and that you agree with the Product Information Document (IPID), the Privacy Document and the general conditions.</b><br>\n                This Travel Insurance is for residents from Belgium and Luxembourg only with journey starting from Belgium or Luxembourg. It is underwritten by <b>Liberty International Insurance Limited (\"Liberty\")</b>, with services provided by <b>Allianz Assistance.</b> Allianz Assistance, a trading name of <b>Allianz Partners (Belgian Branch)</b>, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Assistance about this Travel Insurance.<br>\n                <b>You consent Liberty and Allianz Assistance to use your and any other passengers (under this booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </b></p> </div> </div>",
                insurance_txt_mobile: "<p>Protect yourself against unexpected with Travel Insurance from Allianz.<br>Our Policy covers :</p>",
                radio_1: {
                    txt_1: "I agree to the Product Information Document (IPID) and the general conditions.",
                    txt_2: "",
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
                    txtPolicy: "For Policy Wording",
                    description:`<br><span>By selecting this insurance product:</span><ul class="box-insurance_desc"><li>- I confirm that I have read and I accept the Insurance Product Information Document, the Terms & Conditions and the Privacy Statement, provided in a digital format</li><li>I confirm I have verified that product chosen corresponds to my needs</li><li>I confirm having my residence in Belgium</li></ul>`
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            },
            FR:{
                titlepanel: "Protect your flight",
                insurance_txt: `<p>The following Travel Insurance information is provided by Allianz Assistance<br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class="icon-check title-icon"></i> Flight delay, flight cancellation</li> <li><i class="icon-check title-icon"></i> Compensation for baggage delay or loss</li> <li><i class="icon-check title-icon"></i> Medical expenses for in/out patient</li> </ul> <p>For more information, please refer to Policy Wording.</p> <br>  <div class="box-insurance_detail-content"> <p><b>Veuillez lire le document d\'information sur les produits d\'assurance, l\'avis de confidentialit\u00e9, les modalit\u00e9s et conditions des produits d\'assurance. En choisissant et en souscrivant la pr\u00e9sente assurance voyage, vous confirmez que vous avez lu et que vous acceptez l\'ensemble des modalit\u00e9s, conditions et exclusions du libell\u00e9 et l\'avis de confidentialit\u00e9. Vous confirmez avoir v\u00e9rifi\u00e9 que le produit choisi correspond \u00e0 vos besoins. Cette assurance voyage est r\u00e9serv\u00e9e aux r\u00e9sidents belges ou luxembourgeois dont le voyage commence en Belgique ou au Luxembourg. Elle est souscrite par Liberty International Insurance Limited (\" Liberty \"), avec des services fournis par Allianz Assistance. Allianz Assistance, nom commercial d\'Allianz Partners (Belux), est enregistr\u00e9e en tant qu\'agence d\'assurance de Liberty pour cette assurance voyage. Vous achetez cette assurance voyage de Liberty et non de Thai Airways. Liberty est l\'assureur et le responsable de l\'\u00e9mission de cette assurance voyage. Thai Airways n\'est pas un agent d\'assurance de Liberty et n\'agit pas en tant que courtier d\'assurance. Thai Airways n\'organisera pas cette assurance voyage en votre nom et n\'est pas responsable des informations fournies par Liberty et Allianz Assistance concernant cette assurance voyage.</b><br>Vous consentez \u00e0 ce que Liberty et Allianz Assistance utilisent vos donn\u00e9es personnelles et celles de tout autre passager (dans le cadre de cette r\u00e9servation) pour l\'application et l\'administration de cette assurance voyage et la fourniture de services d\'assistance et de r\u00e9clamation. La prime est la prime totale pour toutes les personnes assur\u00e9es.<br>
              </p> </div> </div>`,
                insurance_txt_mobile:"<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected </p>",
                radio_1: {
                    txt_1: "I agree to the Product Information Document (IPID) and the general conditions.",
                    txt_2: "for all passengers",
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            },
            DE: {
                titlepanel: "Protect your flight",
                insurance_txt: "<p>The following Travel Insurance information is provided by Allianz Assistance<br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li> <li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li> <li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li> </ul> <p>For more information, please refer to Policy Wording.</p> <br>  <div class=\"box-insurance_detail-content\"> <p><b>Gelieve het Product Informatie Document (IPID), het Privacy Document en de Algemene Voorwaarden te lezen. Door deze reisverzekering te kiezen en aan te kopen bevestig ik dat ik de Algemene Voorwaarden, het Product Informatie Document en het Privacy Document heb gelezen en goedgekeurd. U heft nagegaan dat het gekozen verzekeringsproduct passend is voor uw behoeften.</b>start in Belgi\u00eb of Luxemburg. Het is onderschreven door Liberty International Insurance Limited (\"Liberty\"), met diensten die voorzien zijn door Allianz Assistance. Allianz Assistance, een merknaam van Allianz Partners (Belux), is geregistreerd als een verzekeringsmaatschappij van Liberty toeziend op deze reisverzekering. U koopt de reisverzekering aan van Liberty en niet van Thai Airways. Liberty is de verzekeraar en verantwoordelijk voor de opmaak van deze reisverzekering. Thai Airways is geen verzekeringsagent van Liberty en handelt niet als verzekeringsmakelaar. Thai Airways handelt deze reisverzekering niet af in naam van de klant en is niet verantwoordelijk voor welke informatie dan ook die gegeven werd door Liberty en Allianz Assistance mbt deze reisverzekering.<br><b>U stemt ermee in dat Liberty en Allianz Assistance uw, en deze van de andere passagiers (onder deze boeking), persoonlijke gegevens aanwendt voor de toepassing en de administratie van deze reisverzekering en de afhandeling van schadegevallen en bijstandsdiensten. De premie is de totale premie voor alle verzekerde personen.</b><br>\n</p> </div> </div>",
                insurance_txt_mobile: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected </p>",
                radio_1: {
                    txt_1: "Ik ben het eens met de Product Informatie Document (IPID) en de algemene voorwaarden.",
                    txt_2: "for all passengers",
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "No, I don\'t want to protect my trip",
                    txt_2: "for all passengers"
                }
            }
        }
    }
    return _objInsurance[c] !== undefined ? _objInsurance[c][l] : _objInsurance['GB']['GB'];
}


function insurance(xcountry, xlanguage) {
        implibdx.core.updateDom("#insurance-select", function () {
            if (document.getElementById('insurance-select') !== null) {
                let lc = (x_objInsurance(xcountry, xlanguage) != undefined) ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB')
                $(".title-panel-text").html("<i class=\"icon-aid title-icon\" aria-hidden=\"true\"></i>" + lc.titlepanel)

                                $(".box-insurance").html(lc.insurance_txt);
                $('label[for$="insuranceRadioGroup-insuranceRadioGroup1"]>span.bold').html(lc.radio_1.txt_1)
                $("label[for$='insuranceRadioGroup-insuranceRadioGroup1']")[0].childNodes[1].textContent = lc.radio_1.txt_1;
                $("label[for$='insuranceRadioGroup-insuranceRadioGroup1']")[0].childNodes[2].textContent = lc.radio_1.txt_2;
                $('label[for$="insuranceRadioGroup-insuranceRadioGroup1"]>a').html(lc.radio_1.txtPolicy)
                $('label[for$="insuranceRadioGroup-insuranceRadioGroup1"]>a').attr('href', lc.radio_1.linkPolicy);
                $('label[for$="insuranceRadioGroup-insuranceRadioGroup2"]').html(lc.radio_2.txt_1 + " " + lc.radio_2.txt_2);

                if(typeof lc.logourl !== "undefined"){
                    document.querySelector('.insurance-banner img').src = lc.logourl;
                }
                if(typeof lc.radio_1.description !== "undefined" ){
                    $("label[for$='insuranceRadioGroup-insuranceRadioGroup1']").append(lc.radio_1.description)
                }
                if(typeof lc.radio_2.description !== "undefined" ){
                    $("label[for$='insuranceRadioGroup-insuranceRadioGroup2']").append(lc.radio_2.description)
                }
                if(typeof lc.radio_3 !== "undefined" ){
                    $('label[for$="insuranceRadioGroup-insuranceRadioGroup3"]').html(lc.radio_3.txt_1 + " " + lc.radio_3.txt_2);
                    if( typeof lc.radio_3.description !== "undefined"){
                        $("label[for$='insuranceRadioGroup-insuranceRadioGroup3']").append(lc.radio_3.description)    
                    }
                }
                checkbox_cf(xcountry)
            }

        }, 1000, 5);
    let lcx = (x_objInsurance(xcountry, xlanguage) != undefined) ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB')
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
                    inshref.href = lcx.radio_1.linkPolicy;
                } else {
                    inshref_GB.href = lcx.radio_1.linkPolicy;
                }

            }, 2 * 1000);
        });

    }, 1000, 8);


}

function remove_linkPolicy() {
    implibdx.core.updateDom(".contract-detail", function () {
        $(".contract-detail>div a").remove();
        $(".contract-detail>div a").css('display', 'none')
    }, 1000, 5);
}
const checkbox_cf = (dep_country)=>{
    try {
        if(dep_country == "FR" || dep_country == "IT"){
            $("#consent_ins").appendTo($('.insurance-radio-selection'));
            $("#consent_ins").removeClass($('ins_hide'));
        }
    } catch (error) {
        console.log('no checkbox');
    }
}

var startFNJS = function () {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)



            services_tablefooter(eBaDataLayer.currency)
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


            break;
        case "FARE":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.hilight_Content.content_FARE()


            break;
        case "ALPI":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.Passengerinfo()

            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            updateHTML.extraService('catalogServices-teaser-WCH','div.catalogServices-teasers-container','wheelchair');
            _hideMEA();

            if(eBaDataLayer.language === "FR"){
                placeholder();
            }
            break;

        case "APIM":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.Passengerinfo()
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            updateHTML.extraService('catalogServices-teaser-WCH','div.catalogServices-teasers-container','wheelchair');
            updateHTML.addseat_class();
            _hideMEA();
            xeBag();

            expanded_adult();
            govApim();
            contactInfo.hide_phone();
            if(eBaDataLayer.language === "FR"){
                placeholder();
            }
            break;
        case "AAS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            _hideMEA();
            xeBag();

            break;
        case "PURC":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            passenger_list.addHtml();
            updateHTML.clickConfirm();
            abandon_consent.add();
            goodservice_india.AddData();
            fare_condi_purc(eBaDataLayer.language); 

            if (dataTransfer['EXTERNAL_ID#4'] === 'GOV') {
                GOV();
            }

                        insurance(eBaDataLayer.bound[0].dep_country, eBaDataLayer.language)

            linkDangerous(isMobile);
            changeClassPagmentbox();
            break;
        case "CONF":


            updateHTML.remove_content.additional_services();
            goodservice_india.AddData();

            tgBanner.add();

            implibdx.core.updateDom("#fare-review-travellers", function () {
                document.querySelector('#fare-review-travellers button').remove()
            }, 1000, 3);

            sendProCode();
            subscribe.sbbAdd();

            if (chkSite()) {
            }



            xbagSet.set();
            removePinkbanner('#PinkBanner_3');

            runWidget(eBaDataLayer.external_id.substring(0,2));
            pinkbanner_remove();

            break;

        case "RTPL":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            updateHTML.remove_content.price_RTPL()
            subscribe.sbbAdd();
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set() : console.log("xbagSet");
            removeXbag.remove(removeXbag.check())

                        break;
        case "MDFSR":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            _hideMEA();
            xeBag();
            updateHTML.extraService('divdiv.catalogServices-teaser-SIT', 'divdiv.catalogServices-teaser-MEA', 'divdiv.catalogServices-teaser-BAG', 'divdiv.div.catalogServices-teasers-container');
            break;
    }

        console.log('ALL PAGE');
        chkSite() ? iNetasia_Tealium.add() : iNetasia_Tealium_qa.add();


}

jQuery(document).on("plnext:customData:ready", startFNJS);