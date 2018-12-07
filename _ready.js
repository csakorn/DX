var startFNJS = function() {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }            
            knorex.add();
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1 Calendar matrix
            lowest();
            _addClass('main-layout-header', 'page-template-section');
            break;
        case "SDAI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            // Step 1 Multi City
            break;
        case "FDFF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1 COMPARISON
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');

            break;
        case "FARE":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 2 DETAILS
            updateHTML.hilight_Content.content_FARE()           

            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_FARE', "main-layout-bottom", "footer#main-layout-bottom"); }
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            break;
        case "ALPI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 2 FILL IN DETAILS
            updateHTML.Passengerinfo()
            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'a#tpl7_SIT');
            
            updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'div.catalogServices-teasers-container');            
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            break;

        case "APIM":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
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

            break;
        case "AAS":
            // Step 2 CHOOSE SERVICES
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'catalogServices-teasers-container');
            chkSite()?fbpixel_acom.add():console.log('fbpixel_acom');
            break;
        case "PURC":
            // Step 3 PAYMENT
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

            break;
        case "CONF":
            // Step 3 CONFIRMED BOOKING
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
            Addwebtrends();
            sendProCode();
            // (dataTransfer["EXTERNAL_ID#4"] === "mastercard") ? mastercard(): console.log("mastercard");
            (dataTransfer["EXTERNAL_ID#4"] === "UK00022") ? eMailTrigger.ukBlackFriday.send(): console.log("ukBlackFriday");
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
            break;

        case "RTPL":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // Step 3
            // updateHTML.service.travellerAlert_RTPL()
            updateHTML.remove_content.price_RTPL()
            // updateHTML.remove_content.servicesbreakdown('RTPL')
            Addwebtrends();
            subscribe.sbbAdd();
            // (eBaDataLayer.language == "GB") ? xbagSet.set(): console.log("xbagSet");
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set(): console.log("xbagSet");
            runWidget();            
            removeXbag.remove(removeXbag.check())

            break;
        case "MDFSR":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // extraService
            updateHTML.extraService('div.catalogServices-teaser-SIT', 'div.catalogServices-teaser-MEA', 'div.catalogServices-teaser-BAG', 'div.catalogServices-teasers-container');
            break;
    }

}

jQuery(document).on("plnext:customData:ready", startFNJS);