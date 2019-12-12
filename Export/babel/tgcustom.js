"use strict";

var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

function _insurance(xcountry, xlanguage) {
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
  console.log(lcx);
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
          console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country);
          inshref.href = lcx.radio_1.linkPolicy;
        } else {
          console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country);
          inshref_GB.href = lcx.radio_1.linkPolicy;
        }
      }, 2 * 1000);
    });
  }, 1000, 8);
}

function addFontAwesome() {
  var addTo = document.getElementsByTagName('head');
  var createAttr = document.createElement('link');
  createAttr.setAttribute('rel', 'stylesheet');
  createAttr.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');
  implibdx.core.updateDom("footer#main-layout-bottom", function () {
    addTo[0].appendChild(createAttr);
  }, 1000, 5);
}

$(".BaliTreat").on('click', function (event) {
  event.preventDefault();
  var infoBooking = {};
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
});

function onClickBanner(obj) {
  $.ajax({
    type: 'POST',
    url: 'https://www.thaiairways.com/app/form/save_report',
    data: obj,
    dataType: 'json'
  }).done(function (result) {
    console.log(result.success);
  }).error(function (e) {
    console.log(e.statusText);
  });
}

function addObjTag() {
  objTagScript.pixelSG = {
    desElement_ID: 'main-layout-bottom',
    txtScript: {
      script: {
        txt: "//pixel.mathtag.com/event/js?mt_id=1328156&mt_adid=211029&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3="
      }
    },
    limitdate: {
      start: ['2019', '02', '12'],
      end: ['2019', '11', '31']
    },
    typetag: 'pixel'
  };
}

function addScriptTGX(nameOBJ) {
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

      if (obj['typetag'] == 'fbpixel') {
        txtNode = document.createTextNode(obj['txtScript'][item]['txt'] + (item === 'script' ? dataBooking : ''));
        createAttr.appendChild(txtNode);
      } else {
        createAttr.setAttribute('async', 'async');
        createAttr.src = obj['txtScript'][item]['txt'];
      }

      st1.appendChild(createAttr);
    });
  }
}

var dkPixel_log = function dkPixel_log() {
  if (/\b^[DK]{2}/.test(eBaDataLayer.external_id) === true && eBaDataLayer.page_code == "CONF") {
    var obj = {};
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
      console.log(e.statusText);
    });
  }
};

function remove_linkPolicy() {
  implibdx.core.updateDom(".contract-detail", function () {
    $(".contract-detail>div a").remove();
    $(".contract-detail>div a").css('display', 'none');
  }, 1000, 5);
}

var startFNJS = function startFNJS() {
  switch (eBaDataLayer.page_code) {
    case "FPOW":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      break;

    case "FDCS":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
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
      break;

    case "CONF":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      addFontAwesome();
      break;

    case "RTPL":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      addFontAwesome();
      break;

    case "MDFSR":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      break;
  }

  implibdx.core.updateDom("footer#main-layout-bottom", function () {
    console.log('ALL PAGE-2');
    addObjTag();
  }, 1000, 6);
};

jQuery(document).on("plnext:customData:ready", startFNJS);