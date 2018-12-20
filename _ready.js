var startFNJS = function() {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }            
            knorex.add();
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 1 Calendar matrix
            lowest();
            _addClass('main-layout-header', 'page-template-section');
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "SDAI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            // Step 1 Multi City
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "FDFF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 1 COMPARISON
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');

            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "FARE":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 2 DETAILS
            updateHTML.hilight_Content.content_FARE()           

            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_FARE', "main-layout-bottom", "footer#main-layout-bottom"); }
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "ALPI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 2 FILL IN DETAILS
            updateHTML.Passengerinfo()
            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'a#tpl7_SIT');
            
            updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'div.catalogServices-teasers-container');            
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;

        case "APIM":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 2 PASSENGER INFORMATION
            updateHTML.Passengerinfo()
            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'a#tpl7_SIT');
            updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'div.catalogServices-teasers-container');            
            
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_APIM');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }           
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            expanded_adult();
            govApim();  
            contactInfo.click_phone();

            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "AAS":
            // Step 2 CHOOSE SERVICES
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'catalogServices-teasers-container');
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "PURC":
            // Step 3 PAYMENT
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_PURC", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_PURC');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_PURC', "main-layout-bottom", "footer#main-layout-bottom"); }
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            updateHTML.clickConfirm();
            abandon_consent.add();
            goodservice_india.AddData();
            knorex.add();
            if(dataTransfer['EXTERNAL_ID#4'] === 'GOV'){
                GOV();
            }

            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "CONF":
            // Step 3 CONFIRMED BOOKING
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // updateHTML.remove_content.servicesbreakdown('CONF');
            // updateHTML.remove_content.additional_services();
            goodservice_india.AddData();
            if ((/\b^[IT_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('fbpixel_it', "main-layout-bottom", "footer#main-layout-bottom"); }
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_CONF", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_CONF');
                chkSite() ? addScript("fbpixel_sg_purchase", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_purchase');
            }
            // if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_CONF', "main-layout-bottom", "footer#main-layout-bottom"); }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) {  
                // chkSite() ? couponChina():console.log('couponChina');
                addScript('CheeseMobile_CONF', "main-layout-bottom", "footer#main-layout-bottom");
            }
            if (dataTransfer["EXTERNAL_ID#4"] == 'JETRADAR') {
                addScript('jetradar', "main-layout-bottom", "footer#main-layout-bottom")
            } else { console.log('Run JETRADAR'); }

            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            addScript('acom', "main-layout-bottom", "footer#main-layout-bottom", acom_adddata());
            // Addwebtrends();
            sendProCode();
            // (dataTransfer["EXTERNAL_ID#4"] === "mastercard") ? mastercard(): console.log("mastercard");
            //(dataTransfer["EXTERNAL_ID#4"] === "UK00022") ? eMailTrigger.ukBlackFriday.send(): console.log("ukBlackFriday");
            eMailTrigger.dusit.send()
            // chkSite() ? couponBrussels() : console.log("couponBrussels")
            knorex.add();
            subscribe.sbbAdd();
            skyscanner.add();
            tripadvisor.add();
            fbpixel_SE.add();
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set(): console.log("xbagSet");
            // chkSite() ? sotw.senddata() : console.log("surpriseontheways");
            runWidget();
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;

        case "RTPL":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // Step 3
            // updateHTML.service.travellerAlert_RTPL()
            updateHTML.remove_content.price_RTPL()
            // updateHTML.remove_content.servicesbreakdown('RTPL')
            // Addwebtrends();
            subscribe.sbbAdd();
            // (eBaDataLayer.language == "GB") ? xbagSet.set(): console.log("xbagSet");
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set(): console.log("xbagSet");
            runWidget();            
            removeXbag.remove(removeXbag.check())

            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
        case "MDFSR":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            addScript("insider", "main-layout-bottom", "footer#main-layout-bottom")
            // extraService
            updateHTML.extraService('div.catalogServices-teaser-SIT', 'div.catalogServices-teaser-MEA', 'div.catalogServices-teaser-BAG', 'div.catalogServices-teasers-container');
            chkSite()?console.log('DMP_ControlTag_kxct'):DMP_ControlTag_kxct.add();
            chkSite()?console.log('DMP_ControlTag_kxint'):DMP_ControlTag_kxint.add();
            break;
    }

}

jQuery(document).on("plnext:customData:ready", startFNJS);