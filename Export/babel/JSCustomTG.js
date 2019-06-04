"use strict";

/*
 Modifide Date :: Tue Jun 04 2019 10:26:48 GMT+0700 (Indochina Time)
 Modifide By :: Chalermpol Sakorn
 */
var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);
var dataTransfer = {};

var datatransferForm = function datatransferForm(item, arr) {
  dataTransfer[item.name] = item.value;
};

var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function encode(e) {
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
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }

      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
    }

    return t;
  },
  decode: function decode(e) {
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
        t = t + String.fromCharCode(r);
      }

      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }

    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function _utf8_encode(e) {
    e = e.replace(/rn/g, "n");
    var t = "";

    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);

      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode(r >> 6 | 192);
        t += String.fromCharCode(r & 63 | 128);
      } else {
        t += String.fromCharCode(r >> 12 | 224);
        t += String.fromCharCode(r >> 6 & 63 | 128);
        t += String.fromCharCode(r & 63 | 128);
      }
    }

    return t;
  },
  _utf8_decode: function _utf8_decode(e) {
    var t = "";
    var n = 0;
    var r = c1 = c2 = 0;

    while (n < e.length) {
      r = e.charCodeAt(n);

      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
        n += 2;
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        n += 3;
      }
    }

    return t;
  }
};

var emailencrypt = function emailencrypt(email) {
  return '"' + Base64.encode(email) + '"';
};

var bannerTG = {
  eServe: {
    image: {
      URL: {
        GB: "http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_EN.jpg",
        TH: "http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_TH.jpg"
      },
      alt: "Web Satisfaction Survey",
      linkURL: {
        GB: "http://www.thaiairways.com/en_TH/satisfaction_survey/survey_form_pnr.page",
        TH: "http://www.thaiairways.com/th_TH/satisfaction_survey/survey_form_pnr.page"
      }
    },
    target: "_blank",
    "class": "box_TGINSBannerMenu",
    ADisplay: "",
    onClick: {
      CONF: "onclick=\"_gaq.push(['_trackEvent', 'TH', 'eServey-CONF', 'eServey'])\"",
      RTPL: "onclick=\"_gaq.push(['_trackEvent', 'TH', 'eServey-RTPL', 'eServey'])\""
    },
    param: {
      pnr: "pnr_nbr"
    },
    condition: {
      start: "",
      end: "",
      displaycon: "",
      chk: null,
      pagecode: ['CONF', 'RTPL'],
      market: ['All']
    }
  },
  HotelsBestOffers: {
    image: {
      URL: {
        GB: "http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_EN_CONF.jpg",
        TH: "http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_TH_CONF.jpg"
      },
      alt: "Fly With Thai | Get Hotels Best Offers",
      linkURL: {
        GB: "javascript:void(0)",
        TH: "javascript:void(0)"
      }
    },
    target: "_blank",
    "class": "box_TGINSBannerMenu HotelsOffers",
    ADisplay: "",
    onClick: {
      CONF: "onclick=\"\"",
      RTPL: "onclick=\"\""
    },
    param: "",
    condition: {
      start: "",
      end: "",
      displaycon: "",
      chk: null,
      pagecode: ['CONF', 'RTPL'],
      market: ['TH', 'XX', 'YY']
    }
  },
  BaliTreat: {
    image: {
      URL: {
        GB: "http://www.thaiairways.com/static/common/imgscontent/banner/baliTreatPrivilege_banner.jpg"
      },
      alt: "Bali Treat is special privilege",
      linkURL: {
        GB: "https://www.thaiairways.com/en_ID/offer/privileges/Privilege.page?utm_source=&utm_medium=website&utm_campaign=click-BaliTreat-ConfirmationPage"
      }
    },
    target: "_blank",
    "class": "box_TGINSBannerMenu BaliTreat",
    ADisplay: "",
    onClick: {
      CONF: "onclick=\"_gaq.push(['_trackEvent', 'ID', 'Offers-CONF', 'BaliTreat'])\"",
      RTPL: "onclick=\"_gaq.push(['_trackEvent', 'ID', 'Offers-RTPL', 'BaliTreat'])\""
    },
    param: "",
    condition: {
      start: ["2019", "04", "3"],
      end: ["2019", "11", "31"],
      displaycon: "ticketing",
      chk: {
        rex: '[DPS]{3}',
        data: ['bound', 'route']
      },
      pagecode: ['CONF', 'RTPL'],
      market: ['TH', 'XX', 'YY']
    }
  },
  HolidayTaxis: {
    image: {
      URL: {
        GB: "http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisGB.png",
        TH: "http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisTH.png"
      },
      alt: "HolidayTaxis",
      linkURL: {
        GB: "https://www.holidaytaxis.com/en/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page",
        TH: "https://www.holidaytaxis.com/th/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page"
      }
    },
    target: "_blank",
    "class": "box_TGINSBannerMenu",
    ADisplay: "",
    onClick: {
      CONF: "onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
      RTPL: "onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\')\""
    },
    param: "",
    condition: {
      start: "",
      end: "",
      displaycon: "",
      chk: null,
      pagecode: ['CONF', 'RTPL'],
      market: ['TH', 'XX', 'YY']
    }
  },
  Bellugg: {
    image: {
      URL: {
        GB: "http://www.thaiairways.com/static/common/imgscontent/banner/Bellugg-bag.jpg",
        TH: "http://www.thaiairways.com/static/common/imgscontent/banner/Bellugg-bag.jpg"
      },
      alt: "Bellugg",
      linkURL: {
        GB: "https://www.bellugg.com/thaiairways/",
        TH: "https://www.bellugg.com/thaiairways/"
      }
    },
    target: "_blank",
    "class": "box_TGINSBannerMenu",
    ADisplay: "",
    onClick: {
      CONF: "onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Bellugg\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
      RTPL: "onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Bellugg\')\""
    },
    param: "",
    condition: {
      start: ["2018", "07", "6"],
      end: ["2018", "10", "16"],
      displaycon: "Departure",
      chk: null,
      pagecode: ['CONF', 'RTPL'],
      market: ['TH', 'XX', 'YY']
    }
  }
};

var runWidget = function runWidget(x) {
  var mkt = x !== "" ? x : "DD";
  var market = {
    AU: function AU() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    AT: function AT() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    BE: function BE() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    KH: function KH() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    CA: function CA() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    CN: function CN() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    DK: function DK() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    FR: function FR() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    DE: function DE() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    HK: function HK() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    IN: function IN() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    ID: function ID() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    IE: function IE() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    IT: function IT() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        displayTeaser.add();
        console.log('NO-Widget');
      }, 1000, 5);
    },
    JP: function JP() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        displayTeaser.add();
        console.log('NO-Widget');
      }, 1000, 5);
    },
    KR: function KR() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    LA: function LA() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    MY: function MY() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    MM: function MM() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    NZ: function NZ() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    NO: function NO() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    OM: function OM() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    PK: function PK() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    PH: function PH() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    RU: function RU() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    SG: function SG() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    ES: function ES() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        displayTeaser.add();
        console.log('NO-Widget');
      }, 1000, 5);
    },
    LK: function LK() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    SE: function SE() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        removePinkbanner('#PinkBanner_1');
        removePinkbanner('#PinkBanner_4');
        displayTeaser.add();
        console.log('NO-Widget');
      }, 1000, 5);
    },
    CH: function CH() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    TW: function TW() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    TH: function TH() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    AE: function AE() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    GB: function GB() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    US: function US() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    VN: function VN() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    YY_DOMESTIC: function YY_DOMESTIC() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    YY: function YY() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    WW: function WW() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        rentalCar.add();
        wt_booking.add();
        ROH.sendData();
        displayTeaser.add();
      }, 1000, 5);
    },
    DD: function DD() {
      implibdx.core.updateDom("div#TGINSBanner", function () {
        displayTeaser.add();
        removePinkbanner('#PinkBanner_1');
        removePinkbanner('#PinkBanner_4');
        console.log('NO-Widget--NO');
      }, 1000, 5);
    }
  };
  return market[mkt]();
};

function pinkbanner_remove() {
  var market = {
    CH: {
      r_pinkbanner: ['#PinkBanner_1', '#PinkBanner_4']
    }
  };
  implibdx.core.updateDom("div#pinkbanner", function () {
    if (chkMarket(eBaDataLayer.market) == true) {
      for (x in market.CH.r_pinkbanner) {
        removePinkbanner(market.CH.r_pinkbanner[x]);
      }
    } else console.log(eBaDataLayer.market);
  }, 1000, 5);
}

var displayTeaser = {
  add: function add() {
    var href = "";
    var img = "";

    for (keys in bannerTG) {
      implibdx.core.updateDom("div.TGINSBanner", function () {
        $("#TGINSBannerMenu").append(displayTeaser.cHTML(keys));
      }, 1000, 5);
    }
  },
  chkMarket: function chkMarket(m) {
    console.log(m);

    for (keys in m) {
      var s = new RegExp("[" + m[keys] + "]{2}");

      if (m[keys] === 'All') {
        console.log("All");
        return true;
      } else if (s.test(eBaDataLayer.market) == true) {
        console.log(m + "------" + eBaDataLayer.market);
        return true;
      } else return false;
    }
  },
  chkCity: function chkCity(city) {
    var chkCity = eBaDataLayer[city.data[0]];
    var regx = new RegExp(city.rex);
    var citylist = "";
    Object.keys(chkCity).forEach(function (key) {
      citylist += chkCity[key][city.data[1]] + "-";
    });
    return regx.test(citylist);
  },
  EXP: function EXP(name) {
    if (bannerTG[name].condition.displaycon != "") {
      console.log('displaycon != Null', name);
      this.conEnd = bannerTG[name].condition.end !== undefined ? setDatef(bannerTG[name].condition.end) : "";
      this.conStart = bannerTG[name].condition.start !== undefined ? setDatef(bannerTG[name].condition.start) : "";

      if (bannerTG[name].condition.displaycon == "Departure") {
        this.dOut = eBaDataLayer.bound[0].dep_date.split("/");
        this.dIn = eBaDataLayer.bound[1] !== undefined ? eBaDataLayer.bound[1].dep_date.split("/") : "";
        this.today = new Date();
        this.eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
        this.eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

        if (this.conStart <= this.eBaDateOut && this.eBaDateOut <= this.conEnd && this.conStart <= this.eBaDateIn && this.eBaDateIn <= this.conEnd) {
          return bannerTG[name].condition.chk !== null ? displayTeaser.chkCity(bannerTG[name].condition.chk) : true;
        } else {
          return false;
        }
      }

      if (bannerTG[name].condition.displaycon == "ticketing") {
        this.toDay = new Date();

        if (this.toDay <= this.conEnd && this.conStart <= this.toDay) {
          return bannerTG[name].condition.chk !== null ? displayTeaser.chkCity(bannerTG[name].condition.chk) : true;
        } else {
          return false;
        }
      }
    } else {
      if (displayTeaser.chkMarket(bannerTG[name].condition.market) == true) {
        console.log('displaycon == Null', name);
        return true;
      } else {
        console.log('....');
        return false;
      }
    }
  },
  cHTML: function cHTML(name) {
    var objname = name;
    var href = "";
    var img = "";
    console.log("cHTML", name);

    if (bannerTG[objname].condition.pagecode.indexOf(eBaDataLayer.page_code) >= 0 && displayTeaser.EXP(objname) == true) {
      href = bannerTG[objname].image.linkURL[eBaDataLayer.language] !== undefined ? bannerTG[objname].image.linkURL[eBaDataLayer.language] : bannerTG[objname].image.linkURL['GB'];
      img = bannerTG[objname].image.URL[eBaDataLayer.language] !== undefined ? bannerTG[objname].image.URL[eBaDataLayer.language] : bannerTG[objname].image.URL['GB'];
      return "<aside class=\"" + bannerTG[objname]["class"] + "\"><a href=\"" + href + displayTeaser.param_obj(bannerTG[objname].param) + "\" target=\"" + bannerTG[objname].target + "\" " + bannerTG[objname].onClick[eBaDataLayer.page_code] + "><img src=\"" + img + "\" alt=\"" + bannerTG[objname].image.alt + "\"></a></aside>";
    }
  },
  param_obj: function param_obj(obj) {
    var result = {};

    for (key in obj) {
      if (obj !== '') {
        result[key] = eBaDataLayer[obj[key]];
      } else {
        return '';
      }
    }

    return '?' + $.param(result);
  }
};
var addTGBanner = {
  creHTML: function creHTML(name, param) {
    this.banner = name;
    this.param = param;
    this.htmlBN = "";
    this.code = eBaDataLayer.page_code;

    if (checkEXP(this.banner) == true) {
      this.htmlBN = "<aside class=\"" + bannerTG[this.banner]["class"] + "\"><a href=\"" + bannerTG[this.banner].link + this.param + "\" target=\"" + bannerTG[this.banner].target + "\" " + bannerTG[this.banner].onClick[this.code] + "><img src=\"" + bannerTG[this.banner].image + "\" alt=\"" + bannerTG[this.banner].alt + "\"></a></aside>";
    } else {
      return this.htmlBN = "";
    }

    return this.htmlBN;
  }
};
var travellerAlert = {
  GB: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Traveller Alert</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">For THAI flight bookings created via travel agents or other intermediaries other than via thaiairways.com, please note that the feature to pre-select seating or view pre-selected seating is temporarily unavailable.  We recommend you contact your travel agent or your nearest THAI office for more information and assistance.  We apologise for any inconvenience caused.</p>',
  FR: '<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Alerte voyageur !</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">Pour toutes réservations sur THAI créées par l\'intermédiaire d\'agents de voyages ou des intermédiaires autres que thaiairways.com, veuillez noter que la fonctionnalité permettant de présélectionner les sièges ou de voir les sièges présélectionnés est momentanément indisponible. Contactez votre agent de voyage ou le bureau THAI le plus proche pour plus d\'informations et d\'assistance. Veuillez nous excuser pour tout inconvénient causé.</p>',
  TH: "<header style=\"font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;\">\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23</header><p style=\"font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;\">\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E44\u0E21\u0E48\u0E2A\u0E30\u0E14\u0E27\u0E01 \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E14\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E0B\u0E37\u0E49\u0E2D\u0E1A\u0E31\u0E15\u0E23\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E19\u0E2D\u0E01\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E08\u0E32\u0E01\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C<a href=\"http://www.thaiairways.com\">thaiairways.com</a> \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E34\u0E19\u0E44\u0E17\u0E22</p>",
  JP: "<header style=\"font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;\">\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23</header><p style=\"font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;\">\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u306EWEB\u30B5\u30A4\u30C8 (<a href=\"http://www.thaiairways.com\">thaiairways.com</a>) \u4EE5\u5916\u306E\u3001\u65C5\u884C\u4F1A\u793E\u3084\u4ED6\u306E\u7B2C\u4E09\u8005\u306B\u3066\u4E88\u7D04\u3055\u308C\u305F\u5F0A\u793E\u306E\u8A18\u9332\u3067\u306F\u5EA7\u5E2D\u306E\u9078\u629E\u3084\u9078\u629E\u6E08\u306E\u5EA7\u5E2D\u306E\u8868\u793A\u304C\u4E00\u6642\u7684\u306B\u3067\u304D\u306A\u304F\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002 <br>\u4E88\u7D04\u5143\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u3054\u4E0D\u4FBF\u304A\u304B\u3051\u3044\u305F\u3057\u307E\u3059\u304C\u3001\u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u4E0B\u3055\u3044\u3002\n</p>"
};
var _extraServiceOBJ = {
  seat: {
    CN: "<p class=\"box_service\">\u4E58\u5BA2\u53EF\u5728\u56FD\u9645\u822A\u73ED\u8D77\u98DE\u65F6\u95F4\u63D0\u524D48\u5C0F\u65F6\u5728\u7EBF\u9884\u9009\u673A\u4E0A\u5EA7\u4F4D</p>",
    DE: "<p class=\"box_service\">Sitzplatzreservierungen k\xF6nnen bei internationalen Fl\xFCgen bis 48 Stunden vor Abflug vorgenommen werden.</p>",
    ES: "<p class=\"box_service\">La reserva de asientos online es posible en vuelos internacionales hasta 48 horas antes de la salida. Aplicable solamente para los vuelos de TG de 3 d\xEDgitos.</p>",
    FR: "<p class=\"box_service\">R\xE9serverz votre si\xE8ge en ligne jusqu'\xE0 48 heures avant le d\xE9part de votre vol.</p>",
    GB: "<p class=\"box_service\">Online seat reservation is possible on international flights until 48 hours before departure of TG 3 digits flight only.</p>",
    IT: "<p class=\"box_service\">La prenotazione online del posto, solo sui voli internazionali TG a 3 cifre,  \xE8 possibile fino a 48 ore prima della partenza.</p>",
    JP: "<p class=\"box_service\">\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u904B\u822A\uFF08TG3\u6841\u4FBF\uFF09\u306E\u56FD\u969B\u7DDA\u3067\u306F\u3001\u3054\u51FA\u767A48\u6642\u9593\u524D\u307E\u3067\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u3066\u5EA7\u5E2D\u3092\u3054\u6307\u5B9A\u3044\u305F\u3060\u3051\u307E\u3059\u3002\n</p>",
    KO: "<p class=\"box_service\">\uC6F9\uC0AC\uC774\uD2B8\uB97C \uD1B5\uD55C \uC88C\uC11D \uC120\uD0DD\uC740 \uD0C0\uC774\uD56D\uACF5 \uC6B4\uD56D\uD3B8 TGxxx(3\uC790\uB9AC \uC22B\uC790 \uD3B8\uBA85) \uAD6D\uC81C\uC120\uC5D0 \uD55C\uD558\uC5EC \uCD9C\uBC1C 48\uC2DC\uAC04 \uC804\uAE4C\uC9C0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>",
    RU: "<p class=\"box_service\">\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0441\u0442 \u0432 \u0441\u0430\u043B\u043E\u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 48 \u0447\u0430\u0441\u043E\u0432 \u0434\u043E \u0432\u044B\u043B\u0435\u0442\u0430 \u043D\u0430 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445 (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 3-\u0445 \u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0440\u0435\u0439\u0441\u043E\u0432)</p>",
    TH: "<p class=\"box_service\">\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E14\u0E49 \u0E08\u0E19\u0E16\u0E36\u0E07\u0E40\u0E27\u0E25\u0E32 48 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E2D\u0E01</p>",
    TW: "<p class=\"box_service\">\u7DDA\u4E0A\u9810\u9078\u5EA7\u4F4D\u50C5\u9650\u65BC\u6CF0\u822A\u71DF\u904B\u4E4B3\u78BC\u822A\u73ED\u3002\u570B\u969B\u7DDA\u822A\u73ED\u8D77\u98DB\u524D48\u5C0F\u6642\u53EF\u80FD\u63D0\u4F9B\u7DDA\u4E0A\u9810\u9078\u5EA7\u4F4D\u670D\u52D9\u3002</p>",
    SE: "<p class=\"box_service\">Du kan v\xE4lja din sittplats online p\xE5 internationella flygningar fram till 48h innan avg\xE5ng p\xE5 TG flyg med tre siffror.</p>"
  },
  meal: {
    CN: "<p class=\"box_service\">\u7531\u66FC\u8C37\u51FA\u767C\u4E4B\u570B\u969B\u7DDA\u822A\u73ED\u53EF\u65BC\u8D77\u98DB24\u5C0F\u6642\u4E4B\u524D\u9810\u8A02\u9910\u81B3\uFF0C\u800C\u524D\u5F80\u66FC\u8C37\u4E4B\u570B\u969B\u7DDA\u822A\u73ED\u8ACB\u65BC48\u5C0F\u6642\u4EE5\u4E0A\u9810\u8A02\u9910\u81B3 \u3002(\u53EA\u9069\u7528TG 3\u4F4D\u6578\u5B57\u4E4B\u6CF0\u822A\u71DF\u904B\u822A\u73ED)</p>",
    DE: "<p class=\"box_service\">Sondermen\xFC k\xF6nnen bei internationalen Fl\xFCgen bis 24 Stunden vor Abflug vorgenommen werden.</p>",
    ES: "<p class=\"box_service\">La selecci\xF3n de comida es posible en vuelos internacionales saliendo desde Bangkok hasta 24 horas antes de la salida y para vuelos internacionales hacia Bangkok, debe realizarse 48 horas antes de la salida del vuelo. Aplicable solo a vuelos TG de 3 d\xEDgitos.</p>",
    FR: "<p class=\"box_service\">Le choix d\u2019un repas peut \xEAtre fait sur un vol international, 24 heures avant le d\xE9part du vol.</p>",
    GB: "<p class=\"box_service\">Meal selection is possible on International flight until 24 hrs for outbound from Bangkok and 48hrs for inbound to Bangkok before departure of TG 3 digits flight only.</p>",
    IT: "<p class=\"box_service\">La selezione online dei pasti, sui voli internazionali TG a 3 cifre, \xE8 possibile fino a 48 ore prima della partenza per voli verso Bangkok e fino a 24 ore prima della partenza per i voli da Bangkok.</p>",
    JP: "<p class=\"box_service\">\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u904B\u822A\uFF08TG3\u6841\u4FBF\uFF09\u306E\u56FD\u969B\u7DDA\u3067\u306F\u3001\u3054\u51FA\u767A48\u6642\u9593\u524D\u307E\u3067\uFF08\u30D0\u30F3\u30B3\u30AF\u767A\u306F24\u6642\u9593\u524D\u307E\u3067\uFF09\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u3066\u7279\u5225\u6A5F\u5185\u98DF\u3092\u304A\u7533\u3057\u8FBC\u307F\u3044\u305F\u3060\u3051\u307E\u3059\u3002\n</p>",
    KO: "<p class=\"box_service\">\uAE30\uB0B4\uC2DD \uC120\uD0DD\uC740 \uD0C0\uC774\uD56D\uACF5 \uC6B4\uD56D\uD3B8 TGxxx(3\uC790\uB9AC \uC22B\uC790 \uD3B8\uBA85) \uAD6D\uC81C\uC120\uC5D0 \uD55C\uD558\uC5EC \uBC29\uCF55 \uCD9C\uBC1C\uC758 \uACBD\uC6B0 \uCD9C\uBC1C 24\uC2DC\uAC04 \uC804\uAE4C\uC9C0 \uAC00\uB2A5\uD558\uC9C0\uB9CC \uADF8\uC774\uC678 \uC9C0\uC5ED\uC5D0\uC11C \uCD9C\uBC1C\uC758 \uACBD\uC6B0 (\uB300\uD55C\uBBFC\uAD6D \uD3EC\uD568) \uCD9C\uBC1C 48\uC2DC\uAC04 \uC804\uAE4C\uC9C0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>",
    RU: "<p class=\"box_service\">\u0412\u044B\u0431\u043E\u0440 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 24  \u0447\u0430\u0441\u043E\u0432 \u0434\u043E \u0432\u044B\u043B\u0435\u0442\u0430 \u0434\u043B\u044F \u0440\u0435\u0439\u0441\u043E\u0432, \u0432\u044B\u043B\u0435\u0442\u0430\u044E\u0449\u0438\u0445 \u0438\u0437 \u0411\u0430\u043D\u0433\u043A\u043E\u043A\u0430, \u0438 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 48 \u0447\u0430\u0441\u043E\u0432 \u0434\u043E \u0432\u044B\u043B\u0435\u0442\u0430 \u0434\u043B\u044F \u0440\u0435\u0439\u0441\u043E\u0432, \u0432\u044B\u043B\u0435\u0442\u0430\u044E\u0449\u0438\u0445 \u0432 \u0411\u0430\u043D\u0433\u043A\u043E\u043A (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 3-\u0445 \u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0440\u0435\u0439\u0441\u043E\u0432)\n</p>",
    TH: "<p class=\"box_service\">\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E2D\u0E07\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E43\u0E19\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E16\u0E36\u0E07\u0E40\u0E27\u0E25\u0E32 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F \u0E41\u0E25\u0E30 48 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E2A\u0E39\u0E48\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F</p>",
    TW: "<p class=\"box_service\">\u9810\u9078\u6A5F\u4E0A\u9910\u98DF\u670D\u52D9\u50C5\u9650\u65BC\u6CF0\u822A\u71DF\u904B\u4E4B3\u78BC\u822A\u73ED\u3002\u5F9E\u66FC\u8C37\u767C\u51FA\u4E4B\u570B\u969B\u7DDA\u822A\u73ED\u8D77\u98DB\u524D24\u5C0F\u6642\uFF0C\u53CA\u5F9E\u5916\u7AD9\u98DB\u5F80\u66FC\u8C37\u4E4B\u822A\u73ED\u8D77\u98DB\u524D48\u5C0F\u6642\uFF0C\u53EF\u80FD\u63D0\u4F9B\u9810\u9078\u9910\u98DF\u670D\u52D9\u3002</p>",
    SE: "<p class=\"box_service\">Du kan v\xE4lja m\xE5ltid p\xE5 internationella flyg fram till 24h innan utresa fr\xE5n Bangkok och 48h innan avresa f\xF6r inresa i Bangkok. Detta g\xE4ller endast p\xE5 TG flyg med tre siffor.</p>"
  },
  baggage: {
    CN: "<p class=\"box_service\">\u4E58\u5BA2\u53EF\u5728\u822A\u73ED\u8D77\u98DE\u65F6\u95F4\u63D0\u524D24\u5C0F\u65F6\u5728\u7EBF\u8D2D\u4E70\u989D\u5916\u6258\u8FD0\u884C\u674E\u914D\u989D</p>",
    DE: "<p class=\"box_service\">Zusatzgep\xE4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.</p>",
    ES: "",
    FR: "<p class=\"box_service\">L\u2019achat en ligne de bagage suppl\xE9mentaire, peut \xEAtre effectu\xE9 jusqu\u2019\xE0 24 heures avant le d\xE9part du vol.</p>",
    GB: "<p class=\"box_service\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only.</p>",
    IT: "<p class=\"box_service\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \xE8 possibile fino a 24 ore prima della partenza.</p>",
    JP: "<p class=\"box_service\">\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u904B\u822A\uFF08TG3\u6841\u4FBF\uFF09\u306E\u56FD\u969B\u7DDA\u3067\u306F\u3001\u3054\u51FA\u767A24\u6642\u9593\u524D\u307E\u3067\u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u3066\u53D7\u8A17\u624B\u8377\u7269\u91CD\u91CF\u67A0\u3092\u6709\u6599\u3067\u8FFD\u52A0\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u3002</p>",
    KO: "<p class=\"box_service\">\uCD08\uACFC \uC218\uD558\uBB3C \uC120\uC9C0\uBD88 \uAE30\uB2A5\uC740 \uD0C0\uC774\uD56D\uACF5 \uC6B4\uD56D\uD3B8 TGxxx(3\uC790\uB9AC \uC22B\uC790 \uD3B8\uBA85) \uAD6D\uC81C\uC120\uC5D0 \uD55C\uD558\uC5EC \uCD9C\uBC1C 24\uC2DC\uAC04 \uC804\uAE4C\uC9C0\uB9CC \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>",
    RU: "<p class=\"box_service\">\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0430\u0433\u0430\u0436\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 24 \u0447\u0430\u0441\u043E\u0432 \u0434\u043E \u0432\u044B\u043B\u0435\u0442\u0430 \u043D\u0430 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445 (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 3-\u0445 \u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0440\u0435\u0439\u0441\u043E\u0432).</p>",
    TH: "<p class=\"box_service\">\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E14\u0E49 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E2D\u0E01 </p>",
    TW: "<p class=\"box_service\"> \u7DDA\u4E0A\u9810\u8CFC\u984D\u5916\u8D85\u91CD\u884C\u674E\u91CD\u91CF\u50C5\u9650\u65BC\u6CF0\u822A\u71DF\u904B\u4E4B3\u78BC\u822A\u73ED\u3002\u570B\u969B\u7DDA\u822A\u73ED\u8D77\u98DB\u524D24\u5C0F\u6642\u53EF\u80FD\u63D0\u4F9B\u7DDA\u4E0A\u9810\u8CFC\u984D\u5916\u8D85\u91CD\u884C\u674E\u91CD\u91CF\u670D\u52D9\u3002</p>",
    SE: "<p class=\"box_service\">Att k\xF6pa extra bagage \xE4r m\xF6jligt p\xE5 internationella flyg fram till 24h innan avresa p\xE5 TG flyg med tre siffror.</p>"
  }
};
var dialog_baggage = {
  CN: "<p class=\"box_service-dialog\">\u4E58\u5BA2\u53EF\u5728\u822A\u73ED\u8D77\u98DE\u65F6\u95F4\u63D0\u524D24\u5C0F\u65F6\u5728\u7EBF\u8D2D\u4E70\u989D\u5916\u6258\u8FD0\u884C\u674E\u914D\u989D <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_CN.html\">More information </a></p>",
  DE: "<p class=\"box_service-dialog\">Zusatzgep\xE4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.<a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_DE.html\">More information </a></p>",
  ES: "",
  FR: "<p class=\"box_service-dialog\">L\u2019achat en ligne de bagage suppl\xE9mentaire, peut \xEAtre effectu\xE9 jusqu\u2019\xE0 24 heures avant le d\xE9part du vol. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_FR.html\">More information </a></p>",
  GB: "<p class=\"box_service-dialog\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>",
  IT: "<p class=\"box_service-dialog\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \xE8 possibile fino a 24 ore prima della partenza. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">Ulteriori Informazioni </a></p>",
  JP: "<p class=\"box_service-dialog\">\u4E8B\u524D\u652F\u6255\u306B\u3088\u308B\u53D7\u8A17\u624B\u8377\u7269\u91CD\u91CF\u67A0\u306E\u8FFD\u52A0\uFF08\u56FD\u969B\u7DDA\u306B\u9650\u308B\uFF09\u306F\u3001\u51FA\u767A24\u6642\u9593\u524D\u307E\u3067\u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u3066\u53EF\u80FD\u3067\u3059\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_JP.html\">More information </a></p>",
  KO: "<p class=\"box_service-dialog\">\uCD08\uACFC \uC218\uD558\uBB3C \uC120\uC9C0\uBD88 \uAE30\uB2A5\uC740 \uD0C0\uC774\uD56D\uACF5 \uC6B4\uD56D\uD3B8 TGxxx(3\uC790\uB9AC \uC22B\uC790 \uD3B8\uBA85) \uAD6D\uC81C\uC120\uC5D0 \uD55C\uD558\uC5EC \uCD9C\uBC1C 24\uC2DC\uAC04 \uC804\uAE4C\uC9C0\uB9CC \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_KO.html\">\uC790\uC138\uD788 \uBCF4\uAE30</a></p>",
  RU: "",
  TH: "<p class=\"box_service-dialog\">\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E14\u0E49 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E2D\u0E01 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con.html\">\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21</a></p>",
  TW: "<p class=\"box_service-dialog\"> \u7DDA\u4E0A\u9810\u8CFC\u984D\u5916\u8D85\u91CD\u884C\u674E\u91CD\u91CF\u50C5\u9650\u65BC\u6CF0\u822A\u71DF\u904B\u4E4B3\u78BC\u822A\u73ED\u3002\u570B\u969B\u7DDA\u822A\u73ED\u8D77\u98DB\u524D24\u5C0F\u6642\u53EF\u80FD\u63D0\u4F9B\u7DDA\u4E0A\u9810\u8CFC\u984D\u5916\u8D85\u91CD\u884C\u674E\u91CD\u91CF\u670D\u52D9\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_TW.html\">More information </a></p>",
  SE: "<p class=\"box_service-dialog\">Att k\xF6pa extra bagage \xE4r tillg\xE4ngligt p\xE5 internationella flyg fram till 24 timmar innan avresa p\xE5 TG flyg med 3 siffror. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>"
};
var FYIHtml = {
  GB: "<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. Collection of personal information</h3> <p>The Company collects the following personal information:</p> <p>The Company only collects the necessary information created automatically through reservation, ticketing, consultations and service requests. Required Information: gender, name (Korean/English), email address and contact information (i.e. telephone, mobile phone), ticket number or reservation number</p> <ol> <li>1-1. Optional Information: mileage membership number, urgent contact number, meal request and seat assignment.</li> <li>1-2. Additional Information: The following additional information is required to make payment when you purchase our products and service ncluding tickets [ credit card type, number, expiration date, cvv (Card Verification Value) number, ownerÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s name, bank name and account number ] </li> <li>1-3. How your personal information is collected: Via the Thai Airways website, Call center</li> </ol> <h3>2. Collection and use of personal information</h3> <p>The Company uses the personal information we collect for the following purposes:</p> <p>Settlement of Payment for Execution of Agreement and Providing Service: providing contents, booking/ticketing, delivery of products including tickets, sending bills, certification for banking service, purchase and fee payment, and collecting fee.</p> <h3>3. Term for Retaining and Using Personal Information</h3> <p>We will destroy all your personal information in our possession immediately when it is no longer necessary for the purposes for which it was collected if: </p> <p>However, we may retain personal information for a specified period of time if deemed required in accordance with the applicable provisions of the Consumer Protection Act in Commercial Law and E-Commerce Act even after it becomes no longer necessary for the purposes for which it was collected.</p> <p>In this case, we will not use your personal information for purpose other than it was collected and it will be retained for the following period:</p> <ol> <li>3-1. Collected information: Name, Email address, Contact number</li> <li>3-2. Retention basis: We retain personal information if customers make an agreement. If it is refused, we will destroy all personal nformation immediately </li> <li>3-3. Retention Period: 5 years</li> </ol> </div>",
  KO: "<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9</h3><p>\uC218\uC9D1\uD558\uB294 \uAC1C\uC778 \uC815\uBCF4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. </p> <p>\uD0C0\uC774\uD56D\uACF5 \uD56D\uACF5\uAD8C \uC608\uC57D, \uBC1C\uAD8C, \uAD6C\uB9E4\uC0C1\uB2F4 \uBC0F \uC11C\uBE44\uC2A4 \uC2E0\uCCAD\uC73C\uB85C \uC778\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uB294\uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uC815\uBCF4\uB9CC\uC744 \uC218\uC9D1\uD558\uAC8C \uB429\uB2C8\uB2E4.</p> <ol> <li>1-1. \uC218\uC9D1\uD56D\uBAA9 \uC911 \uD544\uC218\uD56D\uBAA9: \uC131\uBCC4, \uC774\uB984, \uC774\uBA54\uC77C, \uC804\uD654\uBC88\uD638, \uD2F0\uCF13\uBC88\uD638 \uB610\uB294 \uC608\uC57D\uBC88\uD638</li> <li>1-2. \uC218\uC9D1\uD56D\uBAA9 \uC911 \uC120\uD0DD\uD56D\uBAA9: \uB9C8\uC77C\uB9AC\uC9C0 \uCE74\uB4DC\uBC88\uD638, \uAE34\uAE09\uC5F0\uB77D\uCC98, \uC88C\uC11D \uBC0F \uC2DD\uC0AC\uC694\uCCAD</li> <li>1-3. \uCD94\uAC00\uC785\uB825\uC815\uBCF4 : \uD56D\uACF5\uAD8C \uAD6C\uB9E4 \uB4F1 \uB2F9\uC0AC\uC758 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uB300\uAE08\uACB0\uC81C \uC2DC\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uCD94\uAC00\uC815\uBCF4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.\n <br>[\uCE74\uB4DC\uC885\uB958, \uCE74\uB4DC\uBC88\uD638, \uC720\uD6A8\uAE30\uAC04, cvv ( Card Verification Value )\uBC88\uD638, \uCE74\uB4DC\uC0C1 \uC18C\uC720\uC8FC\uC774\uB984, \uACC4\uC88C\uBC88\uD638]</li> <li>1-4. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\uBC29\uBC95 : \uD0C0\uC774\uD56D\uACF5 \uD648\uD398\uC774\uC9C0, \uCF5C\uC13C\uD130\uB97C \uD1B5\uD55C \uC720\uC120\uC0C1\uB2F4</li> </ol> <h3>2. \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801</h3> <p>\uD0C0\uC774\uD56D\uACF5\uC740 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uD65C\uC6A9\uD569\uB2C8\uB2E4.</p> <p>\uC11C\uBE44\uC2A4\uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D\uC774\uD589 \uBC0F \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uB530\uB978 \uC694\uAE08\uC815\uC0B0 : \uCF58\uD150\uCE20 \uC81C\uACF5, \uD56D\uACF5\uAD8C \uC608\uC57D\u318D\uBC1C\uAD8C, \uD56D\uACF5\uAD8C \uB4F1 \uAC01\uC885 \uBB3C\uD488\uBC30\uC1A1 \uB610\uB294 \uCCAD\uAD6C\uC11C \uBC1C\uC1A1, \uAD6C\uB9E4 \uBC0F \uC694\uAE08\uACB0\uC7AC</p> <h3>3. \uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</h3> <p>\uC6D0\uCE59\uC801\uC73C\uB85C, \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4\uC5D0\uB294 \uD574\uB2F9 \uC815\uBCF4\uB97C \uC9C0\uCCB4 \uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E8, </p> <p>\uAD00\uACC4\uBC95\uB839\uC758 \uADDC\uC815\uC5D0 \uC758\uD558\uC5EC \uBCF4\uC874\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uAD00\uACC4\uBC95\uB839\uC5D0\uC11C \uC815\uD55C \uC77C\uC815</p> <p>\uD55C \uAE30\uAC04 \uB3D9\uC548 \uD68C\uC6D0\uC815\uBCF4\uB97C \uBCF4\uAD00\uD569\uB2C8\uB2E4.</p> <ol> <li>3-1. \uBCF4\uC874 \uD56D\uBAA9 : \uC774\uB984 , \uC774\uBA54\uC77C , \uC804\uD654\uBC88\uD638</li> <li>3-2. \uBCF4\uC874 \uADFC\uAC70 : \uD68C\uC6D0\uB4E4\uC758 \uB3D9\uC758\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC218\uB839\uD558\uBA70 \uAC70\uBD80\uC2DC \uC0AD\uC81C</li> <li>3-3. \uBCF4\uC874 \uAE30\uAC04 : 5\uB144</li> </ol></div>"
};
var labelPlstick = {
  GB: "Please tick this box to accept and agree as following.",
  KO: "\uC544\uB798 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\uACFC \uD65C\uC6A9 \uBC0F \uAE30\uD0C0 \uADDC\uC815\uC5D0 \uB300\uD55C \uCD94\uAC00 \uB3D9\uC758\uB97C \uC704\uD558\uC5EC \uCCB4\uD06C \uBC15\uC2A4\uB97C \uD074\uB9AD\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624."
};
var updateHTML = {
  hilight_Content: {
    add: function add(d, i, v) {
      implibdx.core.updateDom(d, function () {
        $(i).css("color", v);
      }, 1000, 5);
    },
    content_FARE: function content_FARE() {
      updateHTML.hilight_Content.add("div.flight-info-cabin", ".flight-info-cabin div.flight-info-right", "#ce0058");
      implibdx.core.updateDom("div.flight-info-airline", function () {
        $.each($("div.flight-info-airline").find("bdo"), function (key, value) {
          if (/[TG]{2}/.test($("span.flight-info-airline-flight").find("bdo")[key].innerText) == false) {
            $(this.offsetParent).css("color", "#ce0058");
          }
        });
      }, 1000, 5);
    }
  },
  extraService: function extraService(SIT, MEA, BAG, idbox) {
    implibdx.core.updateDom(idbox, function () {
      setTimeoutBAG();
      console.log(SIT, BAG, MEA);
      $(SIT).append(check.defaultLang(_extraServiceOBJ.seat, eBaDataLayer.language, "GB"));
      $(BAG).append(check.defaultLang(_extraServiceOBJ.baggage, eBaDataLayer.language, "GB"));
      $(MEA).append(check.defaultLang(_extraServiceOBJ.meal, eBaDataLayer.language, "GB"));
    }, 1000, 4);
  },
  remove_content: {
    price_RTPL: function price_RTPL() {
      implibdx.core.updateDom("div.pnrd-view.row", function () {
        $('.price-details').remove();
      }, 1000, 5);
    },
    servicesbreakdown: function servicesbreakdown(p) {
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
    additional_services: function additional_services() {
      implibdx.core.updateDom("section#reservation-details", function () {
        $("#services-breakdown footer").remove();
      }, 1000, 5);
    }
  },
  Passengerinfo: function Passengerinfo() {
    implibdx.core.updateDom("section.traveller-panel-body.panel-body", function () {
      $('select[id $= \'_ADT-FREQ_Airline_0\']>option[value=\'AI\']').html('Air India');
    }, 1000, 5);

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
  clickConfirm: function clickConfirm() {
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
};

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

function setTimeoutBAG() {
  $("#tpl7_BAG").on("click", function (e) {
    window.setTimeout(function () {
      console.log("setTimeout");
      $("div.service-container.col-xs-24").append(check.defaultLang(dialog_baggage, eBaDataLayer.language, "GB"));
    }, 600);
  });
  $("#tpl3_BAG").on("click", function (e) {
    window.setTimeout(function () {
      console.log("setTimeout");
      $("div.service-container.col-xs-24").append(check.defaultLang(dialog_baggage, eBaDataLayer.language, "GB"));
    }, 600);
  });
}

function lowest() {
  if (eBaDataLayer.page_code == '') implibdx.core.updateDom("div#matrix-second-row", function () {
    $("#calendar-matrix-inner>table tbody tr>td>div>div>div i[title='Lowest Fares']").parents('div.calendarmatrix-inner-cell').css('border', '2px solid #259800');
  }, 1000, 5);

  if (eBaDataLayer.page_code == 'FPOW') {
    implibdx.core.updateDom("div#matrix-second-row", function () {
      $("div.bound-table-flightline div>header>i[title='Lowest Fares']").parents('div.bound-table-cell-reco-available').css('border', '2px solid #259800');
    }, 1000, 5);
  }
}

function _addClass(x, y) {
  var _Start = document.getElementById(x);

  var _Desti = y;
  implibdx.core.updateDom("div#matrix-second-row", function () {
    _Start.classList.add(_Desti);
  }, 1000, 5);
}

var clickConfirm_KOR = function clickConfirm_KOR() {
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
};

var xbagSet = {
  set: function set() {
    implibdx.core.updateDom("div#pinkbanner", function () {
      $("#link_baggage").attr('href', '');
      $("#link_baggage").attr('atdelegate', xbagSet.getService());
      $("#link_car").attr('href', 'http://www.hertzasia.com/thaiairways/');
      $("#link_insure").attr('href', 'https://www.thaiairways.com/' + siteLang(eBaDataLayer.language) + '/book/moreservices.page?#insurance');
    }, 1000, 6);
  },
  getService: function getService() {
    return $("#services-breakdown footer>button").attr('atdelegate');
  }
};

var GOV = function GOV() {
  implibdx.core.updateDom(".fop-menu-wrapper", function () {
    $("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],.fop-icon icon-office").on('click', function (event) {
      if (eBaDataLayer.language === "GB") {
        window.setTimeout(function () {
          dataTransfer['EXTERNAL_ID#4'] === 'GOV' ? $("div[id $='_fopTemplate_custom-pickup']").html('Contact at THAI ticket office in the country where the journey') : console.log('no');
        }, 200);
      }

      if (eBaDataLayer.language === "TH") {
        window.setTimeout(function () {
          dataTransfer['EXTERNAL_ID#4'] === 'GOV' ? $("div[id $='_fopTemplate_custom-pickup']").html("\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E31\u0E15\u0E23\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23 \u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07") : console.log('no');
        }, 200);
      }
    });
  }, 1000, 6);
};

var govApim = function govApim() {
  if (eBaDataLayer.page_code === 'APIM') {
    implibdx.core.updateDom("section.traveller-panel-body.panel-body", function () {
      if (eBaDataLayer.language === "GB") {
        $("label[for $=\"PSPT_DocumentNumber\"]").html("Document number* (Please fill in the form as following pattern, 001/2517 as 0012517)");
        $("label[for $=\"PSPT_DocumentType\"]").html("Document type:<br>&nbsp");
      }

      if (eBaDataLayer.language === "TH") {
        $("label[for $=\"PSPT_DocumentNumber\"]").html("\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23* (\u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 001/2517 - 0012517)");
        $("label[for $=\"PSPT_DocumentType\"]").html("\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23:<br>&nbsp");
      }
    }, 1000, 5);
  }
};

var contactInfo = {
  phone: function phone() {
    for (i = 0; i < $(".phoneCode").length; i++) {
      if (i !== 0 && i !== 3) {
        console.log(i);
        $(".phoneCode")[i].style.display = "none";
        $(".phoneNumber")[i].style.display = "none";
      }
    }
  },
  click_phone: function click_phone() {
    implibdx.core.updateDom("section.traveller-contact-information-panel", function () {
      contactInfo.add_idPhone();
      contactInfo.phone();
      $('#BusinessPhone').on('click', function () {
        $('.traveller-contact-information-panel-body .phoneNumber')[2].style.display = "block";
        $('.traveller-contact-information-panel-body .phoneCode')[2].style.display = "block";
      });
      $('#HomePhone').on('click', function () {
        $('.traveller-contact-information-panel-body .phoneNumber')[1].style.display = "block";
        $('.traveller-contact-information-panel-body .phoneCode')[1].style.display = "block";
      });
    }, 1000, 7);
  },
  add_idPhone: function add_idPhone() {
    $(".traveller-contact-information-panel-body .control-label")[8].setAttribute("id", "BusinessPhone");
    $(".traveller-contact-information-panel-body .control-label")[5].setAttribute("id", "HomePhone");
  }
};
var removeXbag = {
  check: function check() {
    return eBaDataLayer.contact_information.email === undefined ? true : false;
  },
  remove: function remove(r) {
    implibdx.core.updateDom("#pinkbanner", function () {
      if (r === true) $("#PinkBanner_3")[0].parentElement.remove();else return false;
    }, 1000, 5);
  }
};

var removePinkbanner = function removePinkbanner(id) {
  var pinkID = id;
  implibdx.core.updateDom("#pinkbanner", function () {
    $(pinkID)[0].parentElement.remove();
  }, 1000, 5);
};

function chkMarket(m) {
  var xMaket = m;
  var _market = ['CH_NORMAL'];

  for (i = 0; i <= _market.length; i++) {
    return xMaket == _market[i];
  }
}

var createEM = {
  create: function create(tag, txt, sta) {
    if (tag != "") {
      this.tag = tag;
      this.content = txt;
      this.status = sta;
      var anchor = document.createElement(this.tag);
      var txtNode = '';

      switch (this.status) {
        case '0':
          txtNode = document.createTextNode(this.content);
          anchor.appendChild(txtNode);
          break;

        case '1':
          anchor.src = this.content;
          break;
      }

      return anchor;
    } else return false;
  }
};

function limitDate(xdate) {
  var _date = setDatef(xdate);

  return new Date() >= _date;
}

var widgetScript = {
  destination: function destination(objName, idName, elmName, attrName, src) {
    this._Anchor = objName[idName];
    this._Elm = objName[elmName];
    this._Attr = objName[attrName];
    this._Src = objName[src];

    var _anchor = document.getElementById(this._Anchor);

    var createAttr = document.createElement(this._Elm);
    this._Src ? createAttr.src = this._Src : '';

    for (key in this._Attr) {
      createAttr.setAttribute(key, this._Attr[key]);
      console.log('--------------------------------->Run2');
    }

    console.log('widgetScript');

    _anchor.appendChild(createAttr);
  }
};

var xBound = function xBound(xb) {
  var bound = '';

  for (k in xb) {
    bound += xb[k].route + '-';
  }

  return bound;
};

var _Bound = function _Bound(b, o) {
  this.arr = o;
  this.bound = b;

  for (k in this.bound) {
    if (k === this.arr) return this.bound[k];
  }
};

var checkRBD = function checkRBD(reg, rbd) {
  return reg.test(rbd);
};

function ExpandCarSearch(argument) {}

var checkDate = function checkDate(tdate, expdate) {
  this.tdate = tdate.split("/");
  this.expdate = expdate.split("/");
  this.travel = new Date(this.tdate[2], this.tdate[1] - 1, this.tdate[0]);
  this.expEnd = new Date(this.expdate[2], this.expdate[1] - 1, this.expdate[0]);
  if (this.travel <= this.expEnd) return true;else return false;
};

var teaserEXP = function teaserEXP(name) {
  if (bannerTG[name].condition.displaycon != "") {
    this.expStart = setDatef(bannerTG[name].condition.start);
    this.expEnd = setDatef(bannerTG[name].condition.end);

    if (bannerTG[name].condition.displaycon == "Departure") {
      this.dOut = eBaDataLayer.bound[0].dep_date.split("/");
      this.dIn = eBaDataLayer.bound[1].dep_date.split("/");
      this.today = new Date();
      this.eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
      this.eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

      if (this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd) {
        return true;
      } else {
        return false;
      }
    }

    if (bannerTG[name].condition.displaycon == "ticketing") {
      this.toDay = new Date();

      if (this.toDay <= this.expEnd && this.expStart <= this.toDay) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
};

var checkEXP = function checkEXP(name) {
  if (bannerTG[name].exp.condition != "") {
    this.expStart = setDatef(bannerTG[name].exp.start);
    this.expEnd = setDatef(bannerTG[name].exp.end);

    if (bannerTG[name].exp.condition == "Departure") {
      this.dOut = eBaDataLayer.bound[0].dep_date.split("/");
      this.dIn = eBaDataLayer.bound[1].dep_date.split("/");
      this.today = new Date();
      this.eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
      this.eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

      if (this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd) {
        return true;
      } else {
        return false;
      }
    }

    if (bannerTG[name].exp.condition == "ticketing") {
      this.toDay = new Date();

      if (this.toDay <= this.expEnd && this.expStart <= this.toDay) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
};

var setDatef = function setDatef(arr) {
  return new Date(arr[0], arr[1], arr[2]);
};

var check = {
  period: function period(d, a, t, e) {
    var toDate = new Date();
    var chkInDate, chkOutDate, toDaydate;
    this.d = d.split("-");
    this.a = a;
    this.t = t.split("-");
    this.e = e;
    chkInDate = new Date(this.d[0], this.d[1], this.d[2]);
    chkOutDate = new Date(this.t[0], this.t[1], this.t[2]);
    toDaydate = new Date();

    if (this.e == 0) {
      if (chkInDate >= new Date(toDaydate.setDate(toDaydate.getDate() + this.a))) return true;else return false;
    } else {
      if (chkOutDate <= new Date(chkInDate.setDate(chkInDate.getDate() + this.a))) return true;else return false;
    }
  },
  lang: function lang(l) {
    this.l = l;
    this.result;
    if (this.l == "TH") return this.result = ['1', 'b2cth', 'th'];else return this.result = ['7', 'b2c', ''];
  },
  currency: function currency(c) {
    this.c = c;

    if (this.c == "THB" || this.c == "EUR" || this.c == "USD" || this.c == "AUD" || this.c == "JPY" || this.c == "NZD" || this.c == "DKK" || this.c == "HKD" || this.c == "GBP" || this.c == "SGD" || this.c == "SEK" || this.c == "CHF" || this.c == "CNY" || this.c == "TWD" || this.c == "KRW" || this.c == "LKR" || this.c == "AED" || this.c == "PKR" || this.c == "ZAR" || this.c == "OMR" || this.c == "MYR" || this.c == "NOK" || this.c == "KWD") {
      return this.c;
    } else return "THB";
  },
  ADT: function ADT(atxt) {
    this.atxt = atxt;
    this.sumAdt = 0;

    for (key in eBaDataLayer.passengers) {
      if (eBaDataLayer.passengers[key]["pax_type"] == this.atxt) this.sumAdt++;
    }

    return this.sumAdt;
  },
  chkdate: function chkdate(d) {
    this.d = d;
    this.spl;
    this.spl = this.d.split("/");
    return this.spl[2] + "-" + this.spl[1] + "-" + this.spl[0];
  },
  date_travel: function date_travel(d) {
    this.date = d.split("-");
    return this.date[2] + " " + check.months[eBaDataLayer.language][this.date[1] - 1] + " " + this.date[0];
  },
  trip_type: function trip_type(t) {
    this.t = t;
    this.vDate;

    if (this.t == "OW" || this.t === undefined) {
      this.vDate = check.chkdate(eBaDataLayer.bound[0].arr_date).split("-");
      this.vDate[2] = parseInt(this.vDate[2]) + 1;
      return this.vDate[0] + "-" + this.vDate[1] + "-" + this.vDate[2];
    } else return check.chkdate(eBaDataLayer.bound[1].dep_date);
  },
  depCity: function depCity() {
    if (typeof eBaDataLayer.city_search_in != "undefined") return eBaDataLayer.city_search_in;else return eBaDataLayer.bound.slice(-1)[0].dep_city;
  },
  extid: function extid(val) {
    this.eid = val;
    var data_extid = ["KH00015", "IN00018", "ID00024", "LO00007", "MY00017", "MM00024", "PH00029", "SG00023", "VN00037", "AU00036", "PK00011", "LK00005"];

    for (i = 0; i <= data_extid.length; i++) {
      if (this.eid == data_extid[i]) return true;
    }

    return false;
  },
  months: {
    GB: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    TH: ["\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"]
  },
  defaultLang: function defaultLang(o, l, d) {
    this.obj = o;
    this.language = l;
    this.defLang = d;
    return this.obj[this.language] !== "" ? this.obj[this.language] : this.obj[this.defLang];
  }
};

var modpnr = function modpnr(pnr) {
  var modDate = new Date();
  var mergeDate = modDate.getFullYear() + '' + (modDate.getMonth() + 1) + '' + modDate.getDate() + '' + modDate.getHours() + '' + modDate.getMinutes() + '' + modDate.getSeconds() + '' + modDate.getMilliseconds();
  return mergeDate + '' + pnr.match(/[a-zA-Z0-9]{1}$/)[0];
};

var chkSite = function chkSite() {
  return window.location.hostname === "book.thaiairways.com" ? true : false;
};

var siteLang = function siteLang(language) {
  var lang = {
    CN: "zh_CN",
    DE: "de_DE",
    ES: "en",
    FR: "fr_FR",
    GB: "en",
    IT: "it_IT",
    JP: "ja_JP",
    KO: "ko_KR",
    RU: "en",
    SE: "en",
    TH: "en_TH",
    TW: "zh_TW"
  };
  return lang[language];
};

var goodservice_india = {
  txtHTML: {
    header: {
      GB: 'Good & Service Tax for India',
      TH: "\u0E20\u0E32\u0E29\u0E35\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22"
    },
    txtBody: {
      TH: "\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E43\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22 \u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 GST tax invoice <a id=\"gstax\" target=\"_blank\" href=\"javascript:void(0);\">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E14</a>",
      GB: 'Passenger who start traveling flight from India and require GST tax invoice. <a id="gstax" target="_blank" href="javascript:void(0);">Please click.</a>'
    }
  },
  cHTML: function cHTML(x) {
    this.lang = x;
    var result = '<div class="box-goodservice_india"><header class="panel-heading services-policy-heading"><i class="icon-ticket" aria-hidden="true"></i>' + goodservice_india.txtHTML.header[this.lang] + '</header><p>' + goodservice_india.txtHTML.txtBody[this.lang] + '</p></div>';
    return result;
  },
  AddData: function AddData() {
    if (eBaDataLayer.page_code == "PURC" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {
      implibdx.core.updateDom("div#purc_afterPayment", function () {
        $(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#purc_afterPayment");
        $("#gstax").on('click', function () {
          window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr=' + eBaDataLayer.pnr_number + ' ', 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
        });
      }, 1000, 6);
    } else if (eBaDataLayer.page_code == "CONF" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {
      implibdx.core.updateDom("#reservation-details", function () {
        $(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#reservation-details");
        $("#gstax").on('click', function () {
          window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr=' + eBaDataLayer.pnr_number + ' ', 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
        });
      }, 1000, 6);
    }
  }
};
var objNamescript = {
  jetradar: {
    elm1: {
      tag: "img",
      txt: "http://pixel.aviasales.ru/ThaiAirways?",
      "case": "1",
      paramData: {
        PNR: 'pnr_nbr'
      }
    }
  },
  fbpixel_it: {
    elm1: {
      tag: "script",
      txt: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '154899338410823');",
      "case": "0"
    },
    elm2: {
      tag: "noscript",
      txt: "<img height=\"1\" width=\"1\" style=\"display:none\"src=\"https://www.facebook.com/tr?id=154899338410823&ev=PageView&noscript=1\"/>",
      "case": "0"
    }
  },
  everymundo_FareNet: {
    elm1: {
      tag: "script",
      txt: "https://www.securitytrfx.com/js/tg.js",
      "case": "1"
    }
  },
  fbpixel_sg_pageview: {
    elm1: {
      tag: "script",
      txt: "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'PageView');",
      "case": "0"
    },
    elm2: {
      tag: "noscript",
      txt: "<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
      "case": "0"
    }
  },
  fbpixel_sg_purchase: {
    elm1: {
      tag: "script",
      txt: "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1044567329035354'); fbq('track', 'Purchase');",
      "case": "0"
    },
    elm2: {
      tag: "noscript",
      txt: "<img height=\"1\" width=\"1\" style=\"display:none;\" src=\"https://www.facebook.com/tr?id=1044567329035354&ev=PageView&noscript=1\">",
      "case": "0"
    }
  },
  pixel_SG_FPOW: {
    elm: {
      tag: "script",
      txt: "//pixel.mathtag.com/event/js?",
      "case": '1',
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
      "case": '1',
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
      "case": '1',
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
      "case": '1',
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
      "case": '1',
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
      "case": "1",
      paramData: {
        cu: "TG.FARE"
      }
    }
  },
  CheeseMobile_PURC: {
    elm: {
      tag: "img",
      txt: "https://track.cdn-ads.com/TG/?",
      "case": "1",
      paramData: {
        cu: "TG.PAYMENT"
      }
    }
  },
  CheeseMobile_CONF: {
    elm: {
      tag: "script",
      txt: "https://track.cdn-ads.com/TG/?",
      "case": "1",
      paramData: {
        cu: "TG.COMPLETE"
      }
    }
  },
  insider: {
    elm: {
      tag: "script",
      txt: "//thaiairways.api.useinsider.com/ins.js",
      "case": "1",
      paramData: {
        id: "10002369"
      }
    }
  }
};

var addScript = function addScript(objName, elmID, updateID, fn) {
  var anchor = document.getElementById(elmID);
  implibdx.core.updateDom(updateID, function () {
    for (x in objNamescript[objName]) {
      anchor.appendChild(createEM.create(objNamescript[objName][x].tag, objNamescript[objName][x].paramData ? pathData(objNamescript[objName][x].paramData, objNamescript[objName][x].txt) : objNamescript[objName][x].txt, objNamescript[objName][x]["case"]));
    }

    fn;
  }, 1000, 5);
};

var fbpixel_SE = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      if (/\b^[SE_]{3}/.test(eBaDataLayer.external_id) === true) {
        var addTo = document.getElementById('main-layout-bottom');
        var createAttr = document.createElement("script");
        var txtNode = '';
        var content = '';
        var lang = eBaDataLayer.language;
        var exID = eBaDataLayer.external_id;
        var pnr = eBaDataLayer.page_code == "CONF" ? modpnr(eBaDataLayer.pnr_nbr) : "";
        var currency = eBaDataLayer.currency;

        if (eBaDataLayer.page_code == "CONF") {
          content = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');fbq('track', 'Purchase', { content_name: '" + pnr + "', value:'" + eBaDataLayer.total_price + "',currency: '" + eBaDataLayer.currency + "' })";
        } else if (eBaDataLayer.page_code == "FPOW") {
          content = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');";
        } else if (eBaDataLayer.page_code == "PURC") {
          content = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '270700370143865');fbq('track', 'PageView');fbq('track', 'AddToCart', { value: " + eBaDataLayer.total_price + ",currency:'" + eBaDataLayer.currency + "'})";
        }

        txtNode = document.createTextNode(content);
        createAttr.appendChild(txtNode);
        addTo.appendChild(createAttr);
      } else console.log('fbpixel_SE');
    }, 1000, 6);
  }
};
var spa_allsite = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var addTo = document.getElementById('main-layout-bottom');
      var createAttr = document.createElement("script");
      var txtNode = '';
      var content = '';
      var price = eBaDataLayer.total_price;
      var currency = eBaDataLayer.currency;

      if (eBaDataLayer.page_code == "CONF") {
        content = "!function(f,b,e,v,n,t,s)  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?  n.callMethod.apply(n,arguments):n.queue.push(arguments)};  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';  n.queue=[];t=b.createElement(e);t.async=!0;  t.src=v;s=b.getElementsByTagName(e)[0];  s.parentNode.insertBefore(t,s)}(window, document,'script',  'https://connect.facebook.net/en_US/fbevents.js');  fbq('init', '369060826977725');  fbq('track', 'PageView');fbq('track', 'Purchase', { value: '" + price + "',currency: '" + currency + "'});";
      } else {
        content = "!function(f,b,e,v,n,t,s)  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?  n.callMethod.apply(n,arguments):n.queue.push(arguments)};  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';  n.queue=[];t=b.createElement(e);t.async=!0;  t.src=v;s=b.getElementsByTagName(e)[0];  s.parentNode.insertBefore(t,s)}(window, document,'script',  'https://connect.facebook.net/en_US/fbevents.js');  fbq('init', '369060826977725');  fbq('track', 'PageView');";
      }

      txtNode = document.createTextNode(content);
      createAttr.appendChild(txtNode);
      addTo.appendChild(createAttr);
    }, 1000, 6);
  }
};
var knorex = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      if (/\b^[TH_]{3}/.test(eBaDataLayer.external_id) === true) {
        var addTo = document.getElementById('main-layout-bottom');
        var createAttr = document.createElement("script");
        var txtNode = '';
        var content = '';
        var lang = eBaDataLayer.language;
        var exID = eBaDataLayer.external_id;
        var pnr = eBaDataLayer.page_code == "CONF" ? modpnr(eBaDataLayer.pnr_nbr) : "";
        var currency = eBaDataLayer.currency;
        var s = eBaDataLayer.page_code == 'FPOW' ? "4f1ccee6a0bcb45a90d01b374d0af04598b04b07" : "8dd22d23ce0fcb0063f1385225a08e12b3044292";

        if (eBaDataLayer.page_code == "CONF") {
          content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=b5e1155f912adebfeb0e8c599e8e5cd0d2128141&ord=" + pnr + "&value=" + eBaDataLayer.total_price + "&currency=" + eBaDataLayer.currency + "&v1=%%PAGE_CATEGORY%%&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v15=" + eBaDataLayer.language + "&v16=" + eBaDataLayer.external_id + "&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
        } else if (eBaDataLayer.page_code == "FPOW") {
          content = "(function() { var encode = window.encodeURIComponent; var ka = document.createElement('script'); ka.type = 'text/javascript'; ka.id = '665973e202b66e6c0667';  ka.async = true; ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=4f1ccee6a0bcb45a90d01b374d0af04598b04b07&v1=" + eBaDataLayer.page_code + "&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v15=" + eBaDataLayer.language + "&_t=' + new Date().getTime(); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
        } else if (eBaDataLayer.page_code == "PURC") {
          content = "(function() {  var encode = window.encodeURIComponent;  var ka = document.createElement('script');  ka.type = 'text/javascript';  ka.id = '665973e202b66e6c0667';  ka.async = true;  ka.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.brand-display.com/tr/knx15122/665973e202b66e6c06671f4a7ddac1d0b996186f.js?s=8dd22d23ce0fcb0063f1385225a08e12b3044292&v1=" + eBaDataLayer.page_code + "&v2=" + window.location.href + "&v3=" + eBaDataLayer.city_search_out + "&v4=" + eBaDataLayer.city_search_in + "&v5=" + eBaDataLayer.date_search_in + "&v6=" + _Bound(eBaDataLayer.bound[1], 'dep_date') + "&v7=" + eBaDataLayer.trip_type + "&v8=%%TICKET_CLASS%%&v9=%%ADULTS%%&v10=%%CHILDREN%%&v11=%%IS_MEMBER%%&v12=%%PROMO_CODE%%&v13=" + eBaDataLayer.currency + "&v14=" + eBaDataLayer.total_price + "&v15=" + eBaDataLayer.language + "&v16=" + eBaDataLayer.external_id + "&_t=' + new Date().getTime();  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ka, s);})();";
        }

        console.log(content);
        txtNode = document.createTextNode(content);
        createAttr.appendChild(txtNode);
        addTo.appendChild(createAttr);
      }
    }, 1000, 5);
  }
};
var skyscanner = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      if (dataTransfer["EXTERNAL_ID#4"] === "SKYSCANNER") {
        var addTo = document.getElementById('main-layout-bottom');
        var txt_code = '';
        var cost = eBaDataLayer.total_price;
        var ord = modpnr(eBaDataLayer.pnr_nbr);
        var createAttr = document.createElement("img");
        createAttr.src = 'https://pubads.g.doubleclick.net/activity;xsp=4380767;qty=1;cost=' + cost + ';ord=' + ord + '?';
        addTo.appendChild(createAttr);
      }
    }, 1000, 5);
  }
};
var tripadvisor = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var addTo = document.getElementById('main-layout-bottom');
      var txt_code = '';
      var cost = eBaDataLayer.total_price;
      var ord = modpnr(eBaDataLayer.pnr_nbr);
      var createAttr = document.createElement("img");
      createAttr.src = 'https://pubads.g.doubleclick.net/activity;xsp=4371151;qty=1;cost' + cost + ';ord=' + ord + '?';
      addTo.appendChild(createAttr);
    }, 1000, 5);
  }
};

var pathData = function pathData(obj, url) {
  var path = {};

  for (keys in obj) {
    if (obj[keys] == 'pnr_nbr') {
      path[keys] = modpnr(eBaDataLayer[obj[keys]]);
    } else {
      path[keys] = obj[keys];
    }
  }

  return url + jQuery.param(path);
};

function acom_adddata() {
  window.uetq = window.uetq || [];
  window.uetq.push({
    'gv': eBaDataLayer.total_price,
    'gc': eBaDataLayer.currency
  });
  console.log(window.uetq.push({
    'gv': eBaDataLayer.total_price,
    'gc': eBaDataLayer.currency
  }));
}

var wt_booking = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var anchor = document.getElementById("main-layout-bottom");
      var createAttr = document.createElement("script");
      wt_booking.createEM();
      createAttr.setAttribute('id', 'sp_widget');
      createAttr.setAttribute('data-hash', '_959b7e703945');
      createAttr.setAttribute('data-container', 'b_container');
      createAttr.setAttribute('data-size', '1050x280');
      createAttr.setAttribute('data-tpncy', 'false');
      createAttr.src = 'https://aff.bstatic.com/static/affiliate_base/js/booking_sp_widget.js?iata=' + check.depCity() + '&lang=' + eBaDataLayer.language + '&iata_orr=1&checkin=' + check.chkdate(eBaDataLayer.bound[0].arr_date) + '&checkout=' + check.trip_type(eBaDataLayer.trip_type);
      anchor.appendChild(createAttr);
    }, 1000, 10);
  },
  createEM: function createEM() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var anchor = document.getElementById("reservation-details");
      var createEMTag = document.createElement("section");
      createEMTag.setAttribute('id', 'b_container');
      anchor.after(createEMTag);
    }, 1000, 5);
  }
};
var DMP_ControlTag_kxct = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var addTo = document.getElementById('main-layout-bottom');
      var createAttr = document.createElement("script");
      var txtNode = '';
      var content = '';
      var lang = eBaDataLayer.language;
      var exID = eBaDataLayer.external_id;
      createAttr.setAttribute('class', 'kxct');
      createAttr.setAttribute('data-id', 'ti1tqfxfv');
      createAttr.setAttribute('data-timing', 'async');
      createAttr.setAttribute('data-version', '3.0');
      createAttr.setAttribute('type', 'text/javascript');
      var currency = eBaDataLayer.currency;
      content = "window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]); (function(){ var k=document.createElement('script');k.type='text/javascript';k.async=true; k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/ti1tqfxfv.js'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s); }());";
      txtNode = document.createTextNode(content);
      createAttr.appendChild(txtNode);
      addTo.appendChild(createAttr);
    }, 1000, 6);
  }
};
var DMP_ControlTag_kxint = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var addTo = document.getElementById('main-layout-bottom');
      var createAttr = document.createElement("script");
      var txtNode = '';
      var content = '';
      var lang = eBaDataLayer.language;
      var exID = eBaDataLayer.external_id;
      createAttr.setAttribute('class', 'kxint');
      createAttr.setAttribute('data-namespace', 'thaiairways');
      createAttr.setAttribute('type', 'text/javascript');
      var currency = eBaDataLayer.currency;
      content = "window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]); (function(){ function retrieve(n){ var k= 'kx'+'thaiairways_'+n, ls=(function(){ try { return window.localStorage; } catch(e) { return null; } })(); if (ls) { return ls[k] || ''; } else if (navigator.cookieEnabled) { var m = document.cookie.match(k+'=([^;]*)'); return (m && unescape(m[1])) || ''; } else { return ''; } } Krux.user = retrieve('user'); Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : []; })();";
      txtNode = document.createTextNode(content);
      createAttr.appendChild(txtNode);
      addTo.appendChild(createAttr);
    }, 1000, 6);
  }
};
var rentalCar = {
  add: function add() {
    var anchor = document.getElementById("reservation-details");
    var ctrlTag = document.createElement("section");
    var createTag = document.createElement('iframe');
    ctrlTag.setAttribute('id', 'rentalCar');
    anchor.after(ctrlTag);
    rentalCar.createFrame();
  },
  createFrame: function createFrame() {
    var arrDate = eBaDataLayer.bound[0].arr_date.split('/');
    var depDate = !eBaDataLayer.bound[1] !== true ? eBaDataLayer.bound[1].dep_date.split('/') : arrDate;
    var langx = eBaDataLayer.language == "CN" ? "ZS" : eBaDataLayer.language;
    var frame = document.createElement("iframe");
    frame.setAttribute("src", "https://widget.rentalcars.com/WidgetSearch.do?affiliateCode=thaiairways&preflang=" + langx + "&pickupIATACode=" + eBaDataLayer.bound[0].arr_airport + "&results=2&pickupMonth=" + arrDate[1] + "&pickupDate=" + arrDate[0] + "&pickupYear=" + arrDate[2] + "&returnDate=" + depDate[0] + "&returnMonth=" + depDate[1] + "&returnYear=" + depDate[2] + "&enabler=thaipromo5");
    frame.setAttribute("name", "rentalCar");
    frame.setAttribute("id", "rentalCarframe");
    frame.style.width = 100 + "%";
    frame.style.height = 280 + "px";
    frame.style.border = "none";
    document.getElementById("rentalCar").appendChild(frame);
  }
};
var eMailTrigger = {
  lineVillage: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "05", "04"], ["2019", "06", "15"], ["2019", "07", "31"], ["2019", "06", "04"], "HK-Line_Village", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          chkSite() ? console.log("HK-Line_Village") : console.log(eMailTrigger.obj);

          if (eMailTrigger.chkAirportArr(eBaDataLayer.bound, eMailTrigger.lineVillage.conditionArrAirport) === true && eBaDataLayer.bound[0].dep_airport == "HKG") {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/postdataamds_trigger',
              data: eMailTrigger.crOBJ("HK-Line_Village"),
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
    conditionArrAirport: ["BKK"]
  },
  createOBJ: function createOBJ() {
    var cOBJ = {
      pnr: eBaDataLayer.pnr_number,
      firstname: eBaDataLayer.passengerList[0].first_name,
      lastname: eBaDataLayer.passengerList[0].last_name,
      email: eBaDataLayer.contact_information.email,
      lang: eBaDataLayer.language
    };
    eMailTrigger.obj = cOBJ;
  },
  crOBJ: function crOBJ(pj) {
    return {
      pnr: eBaDataLayer.pnr_number,
      firstname: eBaDataLayer.passengerList[0].first_name,
      lastname: eBaDataLayer.passengerList[0].last_name,
      email: eBaDataLayer.contact_information.email,
      lang: eBaDataLayer.language,
      project: pj
    };
  },
  chkEXP: function chkEXP(C, H, E, D, K, P) {
    var expStart = setDatef(C),
        expEnd = setDatef(H),
        expBuy = E !== "null" ? setDatef(E) : "null",
        expBuyStart = D !== "null" ? setDatef(D) : "null";
    this.postpone = P;
    this.project = K;
    this.dOut = eBaDataLayer.bound[0].dep_date.split("/");
    this.dIn = eBaDataLayer.bound[1] !== undefined ? eBaDataLayer.bound[1].dep_date.split("/") : eBaDataLayer.bound[0].dep_date.split("/");
    this.today = new Date();
    var eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
    var eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);

    if (expBuy == "null") {
      if (expStart <= this.today && this.today <= expEnd) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log(expStart, expEnd, expBuy, expBuyStart);

      if (expStart <= this.today && this.today <= expEnd && this.postpone == "NO") {
        if (expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy) {
          return true;
        } else {
          return false;
        }
      } else if (expStart <= this.today && this.today <= expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES") {
        console.log("ok UK");
        return true;
      } else {
        return false;
      }
    }
  },
  chkCountry: function chkCountry(c, h, k) {
    var nameCountry = c,
        nameOBJ = window[h],
        rxg = k;

    for (i in nameOBJ["bound"]) {
      if (i != "0" && nameCountry.indexOf(nameOBJ["bound"][i].dep_airport) >= 0) {
        console.log('xxx');
        console.log(nameOBJ["bound"][i].dep_airport);
        return true;
      }
    }
  },
  chkAirportArr: function chkAirportArr(obj, arr) {
    return obj.map(function (obj) {
      return arr.indexOf(obj.arr_airport) >= 0;
    }).includes(true);
  }
};
var objTagScript = {
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
};

function addScriptTG(nameOBJ) {
  var obj = objTagScript[nameOBJ];

  var _date = new Date();

  if (_date >= setDatef(obj.limitdate.start) && _date <= setDatef(obj.limitdate.end)) {
    var st1 = document.getElementById(obj.desElement_ID);
    var st2 = Object.keys(obj.txtScript);
    var pix_pageCode = eBaDataLayer.page_code === 'CONF' ? 'Purchase' : eBaDataLayer.page_code === 'PURC' ? 'AddToCart' : "";
    var createAttr, txtNode;
    var dataBooking = eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? "fbq('track', '" + pix_pageCode + "'," + objDataBooking() + ")" : "";
    st2.forEach(function (item) {
      createAttr = document.createElement(item);
      txtNode = document.createTextNode(obj['txtScript'][item]['txt'] + (item === 'script' ? dataBooking : ''));
      createAttr.appendChild(txtNode);
      st1.appendChild(createAttr);
    });
  }
}

var objDataBooking = function objDataBooking() {
  return JSON.stringify({
    connect_name: eBaDataLayer.page_code === 'CONF' ? modpnr(eBaDataLayer.pnr_nbr) : "",
    varlue: eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC' ? eBaDataLayer.total_price : "",
    currency: eBaDataLayer.currency
  });
};

var subscribe = {
  HTML: {
    txt_header: {
      GB: 'FOR YOUR FUTURE INFORMATION',
      TH: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23"
    },
    txt_checkbox: {
      GB: '<input type="checkbox" name="subscribe" id="subscribe" value="subscribe"> <label for="subscribe">Check this box keep with special offers and important information based on your journey</label>',
      TH: "<input type=\"checkbox\" name=\"subscribe\" id=\"subscribe\" value=\"subscribe\"> <label for=\"subscribe\">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E4A\u0E01\u0E16\u0E39\u0E01 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19</label>"
    },
    txt_info: {
      GB: '<i class="icon-info-sign heading-icon" aria-hidden="true"></i><span> Click here to <button id="box-btn_subscribe" type="button">Subscribe</button> to THAI UPDATE for regular mailings with the latest special fares, promotions, services and news from the THAI network.<span>',
      TH: "<i class=\"icon-info-sign heading-icon\" aria-hidden=\"true\"></i><span> \u0E01\u0E23\u0E38\u0E13\u0E32\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 <button id=\"box-btn_subscribe\" type=\"button\">Subscribe</button> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E17\u0E38\u0E01\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19 \u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E41\u0E19\u0E30 \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E21\u0E48\u0E46 \u0E41\u0E25\u0E30 \u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E1A\u0E34\u0E19\u0E44\u0E17\u0E22 \u0E14\u0E49\u0E27\u0E22\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 THAI UPDATES<span>"
    },
    tagHTML: function tagHTML() {
      return '<div class="box-subsrcibe"><header class="panel-heading services-policy-heading"><i class="icon-ticket main-icon" aria-hidden="true"></i>' + subscribe.HTML.txt_header[eBaDataLayer.language] + '</header><p>' + subscribe.HTML.txt_info[eBaDataLayer.language] + '</p></div>';
    }
  },
  sbbAdd: function sbbAdd() {
    implibdx.core.updateDom("#fare-review-price", function () {
      subscribe.createOBJ();

      switch (eBaDataLayer.page_code) {
        case 'CONF':
        case 'RTPL':
          if (eBaDataLayer.language == 'GB' || eBaDataLayer.language == 'TH') {
            $("#fare-review-price").before(subscribe.HTML.tagHTML);
            $("button#box-btn_subscribe").on('click', function (event) {
              event.preventDefault();
              var dataGet = 'first_name=' + subscribe.obj.data2 + '&last_name=' + subscribe.obj.data3 + '&email=' + subscribe.obj.data9;
              if (eBaDataLayer.currency == "AUD") window.open('http://www.pages04.net/thaiairways/Thaiairways/ ', '_blank');else window.open('http://www.thaiairways.com/en/subscribe/subscribe.page?' + dataGet, '_blank');
            });
          }

          break;
      }
    }, 1000, 6);
  },
  watch_checkbox: function watch_checkbox() {
    if ($(this).prop("checked") === true) {
      console.log($(this).prop("checked"));
      $(this).attr('disabled', 'disabled');
      subscribe.save_data();
      return true;
    }

    return false;
  },
  save_data: function save_data() {
    $.ajax({
      type: 'POST',
      url: 'https://www.thaiairways.com/app/form/save_report',
      data: this.obj,
      dataType: 'json'
    }).done(function (result) {
      console.log(result.success);
    }).error(function (e) {
      console.log(e.statusText);
    });
  },
  createOBJ: function createOBJ() {
    var passengerInfo = {};
    passengerInfo.data1 = dataTransfer['PNR#1_TITLECODE#1'];
    passengerInfo.data2 = eBaDataLayer.passengerList[0].first_name;
    passengerInfo.data3 = eBaDataLayer.passengerList[0].last_name;
    passengerInfo.data4 = eBaDataLayer.passengerList[0].pax_type;
    passengerInfo.data5 = eBaDataLayer.trip_type;
    passengerInfo.data6 = subscribe.check(eBaDataLayer.bound, 'route').toString();
    passengerInfo.data7 = eBaDataLayer.date_search_out;
    passengerInfo.data8 = eBaDataLayer.date_search_in;
    passengerInfo.data9 = eBaDataLayer.contact_information.email !== undefined ? emailencrypt(eBaDataLayer.contact_information.email) : "null";
    passengerInfo.data10 = eBaDataLayer.pnr_nbr;
    passengerInfo.data18 = eBaDataLayer.page_code;
    passengerInfo.data19 = subscribe.check_site();
    passengerInfo.data20 = "subscribe";
    subscribe.obj = passengerInfo;
  },
  check: function check(obj, txt) {
    this.objkey = obj;
    this.txtkey = txt;
    this.result = [];

    for (i in this.objkey) {
      this.result[i] = this.objkey[i][this.txtkey];
    }

    return this.result;
  },
  check_site: function check_site() {
    this.url = window.location.hostname.split('.');
    return this.url[1];
  }
};
var passengerROH = {};
var ROH = {
  createOBJ: function createOBJ() {
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
      GB: ['Hotel Offers', 'Need a Hotel? - Find great deals from Royal Orchid Holidays'],
      TH: ["\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21", "\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E08\u0E32\u0E01 Royal Orchid Holidays"]
    },
    des: {
      GB: ['Destination', 'Period :'],
      TH: ["\u0E08\u0E38\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07", '']
    }
  },
  display_logo: function display_logo(st) {
    this.st = st;

    if (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") {
      this.htmlDis = '<section id="roh" class="box-roh"><h3>' + ROH.txt.errorTXT[eBaDataLayer.language][0] + '<img src="https://www.thaiairways.com/static/common/imgscontent/banner/rohlogo-w.png" style="width: 105px;float: right;"></h3><h4>' + ROH.txt.errorTXT[eBaDataLayer.language][1] + '</h4><a target="_blank" href="https://www.royalorchidholidays.com/' + check.lang(eBaDataLayer.language)[2] + '"><img class="box-roh_logoROH" src="http://www.thaiairways.com/static/common/imgscontent/banner/ROH_Logos_Thai.png"></a></section>';
      return this.htmlDis;
    }
  },
  sendData: function sendData() {
    console.log('----------------------------ROH');

    if ((eBaDataLayer.page_code == "CONF" || eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {
      var urlROH = window.location.hostname == "book.thaiairways.com" ? 'https://www.thaiairways.com/app/roh/' : 'https://uat.thaiairways.com/app/roh/';
      var idST = 'reservation-details';
      implibdx.core.updateDom("div.TGINSBannerMenu", function () {
        ROH.createOBJ();

        if (check.period(passengerROH.CheckinDate, 4, passengerROH.CheckoutDate, 0) === true && check.period(passengerROH.CheckinDate, 30, passengerROH.CheckoutDate, 1) === true) {
          $.ajax({
            type: 'POST',
            url: urlROH,
            data: passengerROH,
            dataType: 'json'
          }).done(function (result) {
            console.log(result.success);

            if (result.success != false) {
              jumper();
              $("#" + idST).append(result.data);
              $(".box-roh>h4").after('<p style="padding-left: 0.7em;padding-right: 0.7em;">' + ROH.txt.des[eBaDataLayer.language][0] + ' : ' + eBaDataLayer.bound[0].arr_city + ' <br> ' + ROH.txt.des[eBaDataLayer.language][1] + ' ' + check.date_travel(passengerROH.CheckinDate) + ' - ' + check.date_travel(passengerROH.CheckoutDate) + '</p>');
            } else {
              $(".HotelsOffers").hide();
              $("#" + idST).append(ROH.display_logo());
            }
          }).error(function (e) {
            console.log(e.statusText);

            switch (e.statusText) {
              case "parsererror":
                $("#" + idST).append(ROH.display_logo("No Room"));
                $(".HotelsOffers").hide();
                break;

              case "error":
                $("#" + idST).append(ROH.display_logo("Err : 504"));
                $(".HotelsOffers").hide();
                break;
            }
          });
        } else {
          $("#" + idST).append(ROH.display_logo("No Room"));
        }
      }, 1000, 3);
    } else {
      console.log('ROH - false');
    }
  },
  test: function test() {
    console.log('test');

    if (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") {
      console.log('-------------------------------', eBaDataLayer.language);
      var urlROH;

      if (window.location.hostname == "book.thaiairways.com") {
        urlROH = 'https://www.thaiairways.com/app/roh/';
      } else {
        urlROH = 'https://uat.thaiairways.com/app/roh/';
      }

      console.log('------------------------------hostname', urlROH);
      implibdx.core.updateDom("div.TGINSBannerMenu", function () {
        console.log('-----------------------------Run');
      }, 1000, 3);
    }
  }
};

var jumper = function jumper() {
  $(".HotelsOffers").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#roh").offset().top
    }, 2000);
  });
};

var abandon_consent = {
  add: function add() {
    var tagHTML = document.createElement("div");
    tagHTML.setAttribute('id', 'boxAbandon');
    implibdx.core.updateDom("#terms-and-conditions", function () {
      $('div[id $= \'_termsAndConditions\']').before(tagHTML);
      $("div#boxAbandon").html(abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']);
      abandon_consent.watch();
    }, 1000, 5);
    abandon_consent.createOBJ();
  },
  txtCheckbox: {
    CN: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>\u6211\u540C\u610F\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u6536\u5230\u6CF0\u56FD\u56FD\u9645\u822A\u7A7A\u516C\u53F8\u5411\u6211\u53D1\u9001\u5173\u4E8E\u6B64\u6B21\u9884\u8BA2\u7684\u8D44\u8BAF\u548C\u4F18\u60E0\u4FE1\u606F\u3002\u6211\u77E5\u9053\u6211\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u7535\u5B50\u90AE\u4EF6\u4E2D\u7684\u4E0D\u63A5\u6536\u4FE1\u606F\u7684\u94FE\u63A5\u6765\u64A4\u9500\u6211\u7684\u540C\u610F\u3002<br>\u5982\u9700\u4E86\u89E3\u6CF0\u56FD\u56FD\u9645\u822A\u7A7A\u516C\u53F8\u5982\u4F55\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u6570\u636E\uFF0C\u8BF7\u53C2\u9605\u6211\u4EEC\u7684 <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">\u9690\u79C1\u653F\u7B56\u901A\u77E5\u3002</a></span></label>",
    DE: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>Ich m\xF6chte mit dem THAI Newsletter \xFCber aktuelle Flugangebote und weitere Services informiert werden und<br>stimme der Nutzung meiner E-Mail-Adresse im Rahmen des Newsletters und zugeh\xF6rigen Angeboten gem\xE4\xDF<br>den <a target=\"_blank\" href=\"https://www.thaiairways.com/fr_FR/terms_of_use/privacy_policy.page\">Datenschutzbestimmungen (Privacy Notice)</a> zu. (Sie k\xF6nnen den Newsletter in jeder Ausgabe abbestellen.)</span></label>",
    ES: '',
    FR: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>J\u2019accepte de recevoir de la part de THAI, par courrier \xE9lectronique, des informations et des offres promotionnelles. Ce consentement peut \xEAtre librement retir\xE9 \xE0 tout moment en cliquant, directement dans l\u2019email  sur le lien \u201Cne plus recevoir d\u2019email\u201D.<br>Pour savoir comment THAI utilise vos donn\xE9es personnelles, veuillez consulter notre  <a target=\"_blank\" href=\"https://www.thaiairways.com/fr_FR/terms_of_use/privacy_policy.page\">politique de confidentialit\xE9.</a></span></label>",
    GB: '<input type="checkbox" name="abandon" id="abandon" value="abandon"><label for="abandon"> <span>I consent to receive news and promotions offers related to this booking from THAI by email. I acknowledge that consent can be withdrawn anytime by clicking <i style="text-decoration: underline;font-style: inherit;">prefer not to receive</i> link in the email.<br>To learn how THAI use your personal data, please see our <a target="_blank" href="https://www.thaiairways.com/en/terms_of_use/privacy_policy.page">Privacy Notice.</a></span></label>',
    IT: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>Fornisco il mio consenso a ricevere da THAI, sulla mia casella di posta elettronica, materiale informativo e promozionale relativo a questa prenotazione. Sono a conoscenza di poter in ogni momento ritirare il mio consenso cliccando sul link \u201Cpreferisco non ricevere\u201D riportato negli stessi messaggi email.<br>Per conoscere come THAI utilizza i tuoi dati personali, consultate la nostra Informativa sulla <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">Protezione dei Dati Personali.</a></span></label>",
    JP: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>\u65B0\u7740\u60C5\u5831\u3084\u30D7\u30ED\u30E2\u30FC\u30B7\u30E7\u30F3\u60C5\u5831\u3092\u3001\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u304B\u3089e-mail\uFF08\u82F1\u6587\uFF09\u306B\u3066\u53D7\u3051\u53D6\u308B\u3053\u3068\u306B\u540C\u610F\u3057\u307E\u3059\u3002<br>e-mail\u4E0A\u306E\u30EA\u30F3\u30AF\u304B\u3089\u3044\u3064\u3067\u3082\u914D\u4FE1\u505C\u6B62\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002<br>\u30BF\u30A4\u56FD\u969B\u822A\u7A7A\u306E\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066\u3001\u8A73\u3057\u304F\u306F\n <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">\"Privacy Notice.\"</a>\uFF08\u82F1\u6587\uFF09\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</span></label>",
    KO: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>\uD0C0\uC774\uD56D\uACF5\uC73C\uB85C\uBD80\uD130 \uC774\uC608\uC57D\uACFC \uAD00\uB828\uD558\uC5EC \uD504\uB85C\uBAA8\uC158 \uC81C\uACF5\uC5D0 \uB300\uD55C  \uC18C\uC2DD\uB4E4\uC744 \uC774\uBA54\uC77C\uB85C \uBC1B\uACA0\uC73C\uBA70, \uC774\uBA54\uC77C \uBC1B\uAE30\uB97C \uC6D0\uCE58 \uC54A\uB294 \uACBD\uC6B0 \uC774\uBA54\uC77C\uC5D0 \uC788\uB294 \uC774\uBA54\uC77C \uBC1B\uC9C0 \uC54A\uAE30 \uB9C1\uD06C\uB97C \uC774\uC6A9\uD558\uC5EC \uBCF8 \uB3D9\uC758\uB97C \uCCA0\uD68C \uD560 \uC218 \uC788\uC74C\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.<br>\uD0C0\uC774\uD56D\uACF5\uC758 \uAC1C\uC778 \uC815\uBCF4 \uC774\uC6A9 \uBC29\uCE68\uC740 <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">\uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638 \uC815\uCC45 </a>\uC73C\uB85C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.</span></label>",
    RU: '',
    TH: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" vlue=\"abandon\"><label for=\"abandon\"> <span>\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23 \u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E2D\u0E07\u0E1A\u0E31\u0E15\u0E23\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E1A\u0E34\u0E19\u0E44\u0E17\u0E22 \u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23 \u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E40\u0E27\u0E25\u0E32 \u0E42\u0E14\u0E22\u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C <i style=\"text-decoration: underline;font-style: inherit;\">\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</i>\u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C <br>\u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E01\u0E32\u0E23\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25</a></span></label>",
    TW: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>\u6211\u540C\u610F\u6536\u5230\u8207\u6B64\u6CF0\u822A\u7DB2\u7AD9\u9810\u8A02\u76F8\u95DC\u7684\u65B0\u805E\u53CA\u4FC3\u92B7\u512A\u60E0\u7684\u96FB\u5B50\u90F5\u4EF6\u3002\u6211\u5145\u5206\u77AD\u89E3, \u53EF\u4EE5\u5728\u4EFB\u4F55\u6642\u5019, \u9EDE\u64CA\u5728\u96FB\u5B50\u90F5\u4EF6\u4E0A <i style=\"text-decoration: underline;font-style: inherit;\">\"\u4E0D\u60F3\u6536\u5230\"</i> \u7684\u9023\u7D50, \u4EE5\u64A4\u56DE\u6B64\u540C\u610F<br>\u6B32\u77AD\u89E3\u6CF0\u822A\u5982\u4F55\u4F7F\u7528\u60A8\u7684\u500B\u4EBA\u8CC7\u6599, \u8ACB\u53C3\u95B1\u6211\u5011\u7684<a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">\u96B1\u79C1\u6B0A\u8072\u660E</a></span></label>",
    SE: "<input type=\"checkbox\" name=\"abandon\" id=\"abandon\" value=\"abandon\"><label for=\"abandon\"> <span>Jag samtycker till att f\xE5 nyheter och kampanjpriser relaterade till denna bokning fr\xE5n THAI p\xE5 mail. Jag bekr\xE4ftar att samtycket kan \xE5tertas n\xE4r som helst genom att klicka p\xE5 helst inte mottaga l\xE4nken i mailet. F\xF6r att l\xE4ra mer om hur THAI anv\xE4nder din personliga data, v\xE4nligen se <a target=\"_blank\" href=\"https://www.thaiairways.com/en/terms_of_use/privacy_policy.page\">v\xE5rt integritetsmeddelande.</a></span></label>"
  },
  save_data: function save_data() {
    $.ajax({
      type: 'POST',
      url: 'https://www.thaiairways.com/app/form/save_report',
      data: this.obj,
      dataType: 'json'
    }).done(function (result) {
      console.log(result.success);
    }).error(function (e) {
      console.log(e.statusText);
    });
  },
  watch: function watch() {
    $('button.tripSummary-btn-continue,button#bottom-continue-button').on('click', function (event) {
      event.preventDefault();

      if ($('#abandon').prop("checked") === true && $('input[id $="-input-purchaseForm-termsConditionsForm-termsAndCondition"]').prop("checked") === true && ($("input[id $='_radio_EXT']").prop("checked") === true || $("input[id $='_radio_EXT']").prop("checked") == undefined)) {
        abandon_consent.obj["data7"] = "Y";
        abandon_consent.save_data();
      }
    });
    $("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],#tpl5_radio_PLCC,li[id $='_li_PLCC'],label[for $='_radio_PLCC'],input[id $='_radio_PLCC']").on('click', function (event) {
      event.preventDefault();
      abandon_consent.remove();
    });
    $("li[id $='_li_EXT'],label[for $='_radio_EXT'],input[id $='_radio_EXT'],#tpl5_radio_EXT, label[for='tpl5_radio_EXT'], li#tpl5_li_EXT").on('click', function (event) {
      event.preventDefault();
      $("div#boxAbandon").html(abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']);
    });
  },
  createOBJ: function createOBJ() {
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
  remove: function remove() {
    $("#abandon").remove();
    $("label[for='abandon']").remove();
  }
};
var passenger = {};

var promocode = function promocode() {
  passenger.passenger = [];
  passenger.total_passenger = eBaDataLayer.passengerList.length;
  passenger.promocode = dataTransfer["EXTERNAL_ID#10"];
  passenger.PNR = eBaDataLayer.pnr_number;
  passenger.bound = [];
  $.each(eBaDataLayer.passengerList, listPassenger);
  $.each(eBaDataLayer.bound, bound);

  function bound(r, i) {
    this.item = i;
    this.r = r;
    this.b = {};

    for (x in this.item) {
      if (x == "flight_numbers" || x == "route" || x == "arr_date" || x == "dep_date") {
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
      if (x == 'first_name' || x == "last_name") {
        this.b[x] = this.item[x];
      }
    }

    passenger.passenger[this.k] = this.b;
  }

  $.ajax({
    type: 'POST',
    url: 'https://www.thaiairways.com/app/bookingbox/promocode_usage',
    data: passenger,
    dataType: 'json',
    encode: true
  }).done(function (d) {
    console.log(d.success);
  }).error(function (e) {
    console.log(e);
  });
};

var sendProCode = function sendProCode() {
  if (dataTransfer["EXTERNAL_ID#10"] != "") {
    implibdx.core.updateDom("div.TGINSBannerMenu", function () {
      promocode();
    }, 1000, 6);
  }
};

var objInsurance = function objInsurance(c, l) {
  var _objInsurance = {
    HK: {
      GB: {
        titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
        insurance_txt: "<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited (\"Liberty\"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers\u2019 (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>",
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
        titlepanel: "\u4FDD\u969C\u60A8\u7684\u65C5\u7A0B \u4EE5\u4E0B\u65C5\u904A\u4FDD\u96AA\u8CC7\u8A0A\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B",
        insurance_txt: "<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class=\"icon-check title-icon\"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class=\"icon-check title-icon\"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class=\"icon-check title-icon\"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul><p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p> \u8ACB\u7D30\u95B1\u65C5\u904A\u4FDD\u96AA\u4FDD\u969C\u8868, \u4FDD\u55AE\u689D\u6B3E\u53CA\u8072\u660E\u3002\u5982\u9078\u8CFC\u672C\u65C5\u904A\u4FDD\u96AA\uFF0C\u5373\u8868\u793A\u95A3\u4E0B\u78BA\u8A8D\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u4FDD\u55AE\u689D\u6B3E\u7684\u689D\u6B3E\u3001\u7D30\u5247\u53CA\u4E0D\u53D7\u4FDD\u4E8B\u9805\u53CA\u8072\u660E\u7684\u5167\u5BB9\u3002 \u672C\u65C5\u904A\u4FDD\u96AA\u53EA\u9069\u7528\u65BC\u9999\u6E2F\u5C45\u6C11\u4E26\u5F9E\u9999\u6E2F\u51FA\u767C\u7684\u65C5\u7A0B\u3002\u672C\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u627F\u4FDD\uFF08\u4E0B\u7A31\u300C\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u300D\uFF09\uFF0C\u4E26\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B\u670D\u52D9\u3002 \u5B89\u806F\u65C5\u884C\u70BA Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6A19\uFF0C\u70BA\u4E00\u5BB6\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u59D4\u4EFB\u7684\u4FDD\u96AA\u4EE3\u7406\u5546\u3002 \u95A3\u4E0B\u8CFC\u8CB7\u7684\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u63D0\u4F9B\uFF0C\u800C\u4E26\u975E\u7531\u6CF0\u822A\u63D0\u4F9B\u3002\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u70BA\u672C\u65C5\u904A\u4FDD\u96AA\u7684\u627F\u4FDD\u516C\u53F8\u4E26\u5C07\u8CA0\u8CAC\u7E55\u767C\u6709\u95DC\u7684\u4FDD\u55AE\u3002\u6CF0\u822A\u4E26\u975E\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u7684\u4FDD\u96AA\u4EE3\u7406\u4EA6\u4E0D\u662F\u4FDD\u96AA\u92B7\u552E\u7D93\u7D00\u3002\u6CF0\u822A\u4E0D\u6703\u4EE3\u8868\u95A3\u4E0B\u5B89\u6392\u65C5\u904A\u4FDD\u96AA\uFF0C\u4EA6\u7121\u9808\u5C0D\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u53CA\u5B89\u806F\u65C5\u884C\u5C31\u672C\u65C5\u904A\u4FDD\u96AA\u6240\u63D0\u4F9B\u4E4B\u4EFB\u4F55\u8CC7\u6599\u8CA0\u8CAC\u3002 \u95A3\u4E0B\u540C\u610F\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u53CA\u5B89\u806F\u65C5\u884C\u4F7F\u7528\u95A3\u4E0B\u53CA\u540C\u4E00\u8A02\u7968\u4EA4\u6613\u7684\u5176\u4ED6\u65C5\u5BA2\u4E4B\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u8655\u7406\u6295\u4FDD\u65C5\u904A\u4FDD\u96AA\u7684\u7533\u8ACB\u4EE5\u53CA\u7BA1\u7406\u4FDD\u55AE\uFF0C\u4E26\u63D0\u4F9B\u7D22\u8CE0\u53CA\u6551\u63F4\u670D\u52D9\u3002 </p></div></div>",
        radio_1: {
          txt_1: "\u662F\uFF0C\u6211\u8981\u70BA\u65C5\u7A0B\u6295\u4FDD\xA0\xA0 \u4EE5\u4FDD\u969C\u6BCF\u4E00\u4F4D\u65C5\u5BA2",
          txt_2: " ",
          linkPolicy: "http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
          txtPolicy: "\u672C\u4EBA\u540C\u610F\u4FDD\u55AE\u689D\u6B3E\u53CA\u8072\u660E\u3002"
        },
        radio_2: {
          txt_1: "<span class=\"\">\u5426\uFF0C\u6211\u62D2\u7D55\u70BA\u65C5\u7A0B\u6295\u4FDD\xA0 \u4EE5\u4FDD\u969C\u6BCF\u4E00\u4F4D\u65C5\u5BA2</span>",
          txt_2: " "
        }
      }
    },
    GB: {
      GB: {
        titlepanel: "Protect your flight (Recommended)",
        insurance_txt: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li> <li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li> <li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li> </ul> <p>For more information please <a target=\"_blank\" href=\"http://www.magroup-online.com/TGA/TH/EN/TG_Product_and_Plans.pdf\">click here.</a></p> <br> <div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div> <div class=\"box-insurance_detail-content\"> <p>This travel insurance is managed by AWP Services (Thailand) Co., Ltd. Trading as Allianz Global Assistance, and is underwritten by Muang Thai Insurance Public Company Limited. In purchasing the policy, you agree to receive confirmation and future communications via email. If passengers would like to change the contact method, please call +66(0)2 305 8492</p> </div> </div>",
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
        radio_1: {
          txt_1: "Yes, I want to protect my trip",
          txt_2: "for all passengers",
          linkPolicy: "https://magroup-webservice.com/TGA/SG/EN/policy-wording.pdf",
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
        titlepanel: "\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 (\u0E41\u0E19\u0E30\u0E19\u0E33)",
        insurance_txt: "<p>THAI Travel Safe <br>\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E23\u0E31\u0E01 \u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 </p><ul> <li><i class=\"icon-check title-icon\"></i>\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07</li><li><i class=\"icon-check title-icon\"></i>\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E23\u0E30\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E2A\u0E39\u0E0D\u0E2B\u0E32\u0E22 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22</li><li><i class=\"icon-check title-icon\"></i>\u0E04\u0E48\u0E32\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22</li></ul> <p>\u0E01\u0E23\u0E38\u0E13\u0E32\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E08\u0E32\u0E01\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p>\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2F \u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A \u0E43\u0E0A\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22 \u0E02\u0E49\u0E2D\u0E40\u0E17\u0E47\u0E08\u0E08\u0E23\u0E34\u0E07\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E15\u0E48\u0E2D\u0E04\u0E13\u0E30\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\n\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E42\u0E14\u0E22 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E2D \u0E14\u0E31\u0E1A\u0E40\u0E1A\u0E34\u0E25\u0E22\u0E39 \u0E1E\u0E35 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22) \u0E08\u0E33\u0E01\u0E31\u0E14 \u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 \u0E2D\u0E25\u0E34\u0E2D\u0E31\u0E19\u0E0B\u0E4C \u0E42\u0E01\u0E25\u0E1A\u0E2D\u0E25 \u0E41\u0E2D\u0E2A\u0E0B\u0E34\u0E2A\u0E41\u0E17\u0E19\u0E17\u0E4C \u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E42\u0E14\u0E22\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E21\u0E37\u0E2D\u0E07\u0E44\u0E17\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E08\u0E33\u0E01\u0E31\u0E14 (\u0E21\u0E2B\u0E32\u0E0A\u0E19) \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E19\u0E35\u0E49\u0E17\u0E48\u0E32\u0E19\u0E15\u0E01\u0E25\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E1C\u0E48\u0E32\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E32\u0E01\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48 +66(0)2 305 8492</p></div></div>",
        radio_1: {
          txt_1: "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07",
          txt_2: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
          linkPolicy: "http://www.magroup-online.com/TGA/TH/TH/TG_TCs_Domestic&Outbound_TH.pdf",
          txtPolicy: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21"
        },
        radio_2: {
          txt_1: "\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07",
          txt_2: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
        }
      }
    }
  };
  return _objInsurance[c] !== undefined ? _objInsurance[c][l] : _objInsurance['GB']['GB'];
};

function insurance(xcountry, xlanguage) {
  implibdx.core.updateDom("#insurance-select", function () {
    if (document.getElementById('insurance-select') !== null) {
      var lc = x_objInsurance(xcountry, xlanguage) != undefined ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB');
      $(".title-panel-text").html("<i class=\"icon-aid title-icon\" aria-hidden=\"true\"></i>" + lc.titlepanel);
      $(".box-insurance").html(lc.insurance_txt);
      $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>span.bold').html(lc.radio_1.txt_1);
      $("label[for='tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1']")[0].childNodes[2].textContent = lc.radio_1.txt_2;
      $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').html(lc.radio_1.txtPolicy);
      $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').attr('href', lc.radio_1.linkPolicy);
      $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup2"]').html(lc.radio_2.txt_1 + " " + lc.radio_2.txt_2);
    }
  }, 1000, 5);
  var lcx = x_objInsurance(xcountry, xlanguage) != undefined ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB');
  implibdx.core.updateDom("#terms-and-conditions", function () {
    $("#tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1").click(function () {
      var insurances_tc = "";
      setTimeout(function () {
        var inshref = chkSite() ? $('.checkbox a')[1] : $('.checkbox a')[2];
        var inshref_GB = chkSite() ? $('.checkbox a')[3] : $('.checkbox a')[4];

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
    $(".contract-detail>div a").css('display', 'none');
  }, 1000, 5);
}

var startFNJS = function startFNJS() {
  $("#datatransferForm>input").serializeArray().forEach(datatransferForm);

  switch (eBaDataLayer.page_code) {
    case "FPOW":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "FDCS":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      lowest();

      _addClass('main-layout-header', 'page-template-section');

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "SDAI":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "FDFF":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "FARE":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.hilight_Content.content_FARE();

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      if (/\b^[CN_]{3}/.test(eBaDataLayer.external_id) === true) {
        addScript('CheeseMobile_FARE', "main-layout-bottom", "footer#main-layout-bottom");
      }

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "ALPI":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.Passengerinfo();
      updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'div.catalogServices-teasers-container');

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "APIM":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.Passengerinfo();
      updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'div.catalogServices-teasers-container');

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_APIM');
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      expanded_adult();
      govApim();
      contactInfo.click_phone();
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "AAS":
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'catalogServices-teasers-container');
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "PURC":
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_PURC", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_PURC');
        chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
      }

      if (/\b^[CN_]{3}/.test(eBaDataLayer.external_id) === true) {
        addScript('CheeseMobile_PURC', "main-layout-bottom", "footer#main-layout-bottom");
      }

      updateHTML.clickConfirm();
      abandon_consent.add();
      goodservice_india.AddData();

      if (dataTransfer['EXTERNAL_ID#4'] === 'GOV') {
        GOV();
      }

      if (new Date() >= setDatef(['2019', '03', '3']) === true) {
        insurance(eBaDataLayer.bound[0].dep_country, eBaDataLayer.language);
      }

      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "CONF":
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.remove_content.additional_services();
      goodservice_india.AddData();

      if (/\b^[IT_]{3}/.test(eBaDataLayer.external_id) === true) {
        addScript('fbpixel_it', "main-layout-bottom", "footer#main-layout-bottom");
      }

      if (/\b^[SG_]{3}/.test(eBaDataLayer.external_id) === true) {
        chkSite() ? addScript("pixel_SG_CONF", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_CONF');
        chkSite() ? addScript("fbpixel_sg_purchase", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_purchase');
      }

      if (/\b^[CN_]{3}/.test(eBaDataLayer.external_id) === true) {
        addScript('CheeseMobile_CONF', "main-layout-bottom", "footer#main-layout-bottom");
      }

      if (dataTransfer["EXTERNAL_ID#4"] == 'JETRADAR') {
        addScript('jetradar', "main-layout-bottom", "footer#main-layout-bottom");
      } else {
        console.log('Run JETRADAR');
      }

      sendProCode();
      subscribe.sbbAdd();
      chkSite() ? skyscanner.add() : console.log("skyscanner");
      chkSite() ? tripadvisor.add() : console.log("tripadvisor");
      chkSite() ? fbpixel_SE.add() : console.log("fbpixel_SE");
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      xbagSet.set();
      removePinkbanner('#PinkBanner_3');
      runWidget(eBaDataLayer.bound[0].dep_country);
      pinkbanner_remove();
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "RTPL":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.remove_content.price_RTPL();
      subscribe.sbbAdd();
      eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR" ? xbagSet.set() : console.log("xbagSet");
      runWidget(eBaDataLayer.bound[0].dep_country);
      removeXbag.remove(removeXbag.check());
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;

    case "MDFSR":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      chkSite() ? spa_allsite.add() : console.log("star_tag");
      chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
      updateHTML.extraService('div.catalogServices-teaser-SIT', 'div.catalogServices-teaser-MEA', 'div.catalogServices-teaser-BAG', 'div.catalogServices-teasers-container');
      chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
      chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
      break;
  }

  implibdx.core.updateDom("footer#main-layout-bottom", function () {
    console.log('ALL PAGE');
    /\b^[DK]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_DK') : console.log('ignore-script');
    /\b^[AT]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_AT') : console.log('ignore-script');
  }, 1000, 6);
};

jQuery(document).on("plnext:customData:ready", startFNJS);