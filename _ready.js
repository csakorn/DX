var startFNJS = function () {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            // Step 1

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");


            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }

            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "FDCS":
            // Step 1 Calendar matrix

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            lowest();
            _addClass('main-layout-header', 'page-template-section');
            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "SDAI":
            // Step 1 Multi City

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');

            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "FDFF":
            // Step 1 COMPARISON

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }


            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "FARE":
            // Step 2 DETAILS

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.hilight_Content.content_FARE()

            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_FARE', "main-layout-bottom", "footer#main-layout-bottom"); }

            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "ALPI":
            // Step 2 FILL IN DETAILS

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.Passengerinfo()

            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'divdiv.div.catalogServices-teasers-container');
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;

        case "APIM":
            // Step 2 PASSENGER INFORMATION

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.Passengerinfo()
            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'divdiv.div.catalogServices-teasers-container');
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
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
            // Step 2 CHOOSE SERVICES
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            // updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'div.catalogServices-teasers-container');
            // updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            // updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            // updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            // setTimeoutBAG();

            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "PURC":
            // Step 3 PAYMENT

            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_PURC", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_PURC');
                chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_PURC', "main-layout-bottom", "footer#main-layout-bottom"); }

            updateHTML.clickConfirm();
            abandon_consent.add();
            goodservice_india.AddData();

            if (dataTransfer['EXTERNAL_ID#4'] === 'GOV') {
                GOV();
            }
            if (new Date() >= setDatef(['2019', '03', '3']) === true) {
                insurance(eBaDataLayer.bound[0].dep_country, eBaDataLayer.language)
            }
            // chkSite() ? insurance(eBaDataLayer.bound[0].dep_country,eBaDataLayer.language):console.log('insurance');
            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            linkDangerous(isMobile);
            break;
        case "CONF":
            // Step 3 CONFIRMED BOOKING


            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.remove_content.additional_services();
            goodservice_india.AddData();
            if ((/\b^[IT_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('fbpixel_it', "main-layout-bottom", "footer#main-layout-bottom"); }
            if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
                chkSite() ? addScript("pixel_SG_CONF", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_CONF');
                chkSite() ? addScript("fbpixel_sg_purchase", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_purchase');
            }
            if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) {
                addScript('CheeseMobile_CONF', "main-layout-bottom", "footer#main-layout-bottom");
            }
            if (dataTransfer["EXTERNAL_ID#4"] == 'JETRADAR') {
                addScript('jetradar', "main-layout-bottom", "footer#main-layout-bottom")
            } else { console.log('Run JETRADAR'); }
            sendProCode();
            subscribe.sbbAdd();
            // chkSite() ? knorex.add():console.log("knorex");
            chkSite() ? skyscanner.add() : console.log("skyscanner");
            chkSite() ? tripadvisor.add() : console.log("tripadvisor");
            chkSite() ? fbpixel_SE.add() : console.log("fbpixel_SE");
            chkSite() ? spa_allsite.add() : console.log("star_tag");

            xbagSet.set();
            removePinkbanner('#PinkBanner_3');// REMOVE 

            // runWidget( (eBaDataLayer.market).split('_')[0] );
            runWidget(eBaDataLayer.bound[0].dep_country);
            pinkbanner_remove();
            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;

        case "RTPL":
            // Step 3

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.remove_content.price_RTPL()
            subscribe.sbbAdd();
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set() : console.log("xbagSet");
            // runWidget( (eBaDataLayer.market).split('_')[0] );
            runWidget(eBaDataLayer.bound[0].dep_country);
            removeXbag.remove(removeXbag.check())

            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "MDFSR":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            chkSite() ? spa_allsite.add() : console.log("star_tag");
            chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.extraService('divdiv.catalogServices-teaser-SIT', 'divdiv.catalogServices-teaser-MEA', 'divdiv.catalogServices-teaser-BAG', 'divdiv.div.catalogServices-teasers-container');
            chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
    }

    implibdx.core.updateDom("footer#main-layout-bottom", function () {
        console.log('ALL PAGE');
        
        (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_DK') : console.log('ignore-script');
        (/\b^[AT]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_AT') : console.log('ignore-script');

    }, 1000, 6);

}

jQuery(document).on("plnext:customData:ready", startFNJS);