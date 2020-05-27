var startFNJS = function () {
    $("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            // Step 1

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");


            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
          //  chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_FPOW", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FPOW');
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }

            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            services_tablefooter(eBaDataLayer.currency)
            break;
        case "FDCS":
            // Step 1 Calendar matrix

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            lowest();
            _addClass('main-layout-header', 'page-template-section');
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "SDAI":
            // Step 1 Multi City

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');

            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "FDFF":
            // Step 1 COMPARISON

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
           // chkSite() ? addScript("everymundo_FareNet", "main-layout-bottom", "footer#main-layout-bottom") : console.log('everymundo_FareNet');
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }


            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "FARE":
            // Step 2 DETAILS

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.hilight_Content.content_FARE()

            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_FARE", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_FARE');
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }
            // if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_FARE', "main-layout-bottom", "footer#main-layout-bottom"); }

            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "ALPI":
            // Step 2 FILL IN DETAILS

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.Passengerinfo()

            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'divdiv.div.catalogServices-teasers-container');
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            updateHTML.extraService('catalogServices-teaser-WCH','div.catalogServices-teasers-container','wheelchair');
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_ALPI');
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }
            _hideMEA();

            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            if(eBaDataLayer.language === "FR"){
                placeholder();
            }
            break;

        case "APIM":
            // Step 2 PASSENGER INFORMATION

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.Passengerinfo()
            // updateHTML.extraService('#tpl7_SIT>article', '#tpl7_MEA>article', '#tpl7_BAG>article', 'divdiv.div.catalogServices-teasers-container');
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            updateHTML.extraService('catalogServices-teaser-WCH','div.catalogServices-teasers-container','wheelchair');
            updateHTML.addseat_class();
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_ALPI", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_APIM');
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }
            _hideMEA();
            // ms_icon();
            xeBag();
            // iden_doc_apim()

            expanded_adult();
            govApim();
            contactInfo.hide_phone();
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            if(eBaDataLayer.language === "FR"){
                placeholder();
            }
            break;
        case "AAS":
            // Step 2 CHOOSE SERVICES
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // updateHTML.extraService('#tpl7_SIT', '#tpl7_MEA', '#tpl7_BAG', 'div.catalogServices-teasers-container');
            // updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            // updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            // updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            updateHTML.extraService('catalogServices-teaser-SIT','div.catalogServices-teasers-container','seat');
            updateHTML.extraService('catalogServices-teaser-MEA','div.catalogServices-teasers-container','meal');
            updateHTML.extraService('catalogServices-teaser-BAG','div.catalogServices-teasers-container','baggage');
            _hideMEA();
            xeBag();
            // setTimeoutBAG();

            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
        case "PURC":
            // Step 3 PAYMENT

            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_PURC", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_PURC');
            //     chkSite() ? addScript("fbpixel_sg_pageview", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_pageview');
            // }
            // if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) { addScript('CheeseMobile_PURC', "main-layout-bottom", "footer#main-layout-bottom"); }
            passenger_list.addHtml();
            updateHTML.clickConfirm();
            abandon_consent.add();
            goodservice_india.AddData();
            fare_condi_purc(eBaDataLayer.language); // --> add fare condition in Terms and condition checkbox

            if (dataTransfer['EXTERNAL_ID#4'] === 'GOV') {
                GOV();
            }
            
            insurance(eBaDataLayer.bound[0].dep_country, eBaDataLayer.language)
            
            // chkSite() ? insurance(eBaDataLayer.bound[0].dep_country,eBaDataLayer.language):console.log('insurance');
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            linkDangerous(isMobile);
            changeClassPagmentbox();
            break;
        case "CONF":
            // Step 3 CONFIRMED BOOKING

            
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.remove_content.additional_services();
            goodservice_india.AddData();
            
            /* Bali */
            // if(/(TG431)/.test(eBaDataLayer.bound.map(x => x.flight_numbers).toString()) ){
            //     if(eBaDataLayer.bound[0].dep_airport !== "DPS"){
            //         displayTeaser.add();
            //     }
            // }
            tgBanner.add();
            
            /*! Remove Modify traveller details*/
            implibdx.core.updateDom("#fare-review-travellers", function () {
                document.querySelector('#fare-review-travellers button').remove()
            }, 1000, 3);

            // if ((/\b^[IT_]{3}/).test(eBaDataLayer.external_id) === true) {chkSite() ? addScript('fbpixel_it', "main-layout-bottom", "footer#main-layout-bottom"):console.log('pixel_IT_CONF') }
            // if ((/\b^[SG_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     chkSite() ? addScript("pixel_SG_CONF", "main-layout-bottom", "footer#main-layout-bottom") : console.log('pixel_SG_CONF');
            //     chkSite() ? addScript("fbpixel_sg_purchase", "main-layout-bottom", "footer#main-layout-bottom") : console.log('fbpixel_sg_purchase');
            // }
            // if ((/\b^[CN_]{3}/).test(eBaDataLayer.external_id) === true) {
            //     addScript('CheeseMobile_CONF', "main-layout-bottom", "footer#main-layout-bottom");
            // }
            // if (dataTransfer["EXTERNAL_ID#4"] == 'JETRADAR') {
            //     chkSite() ? addScript('jetradar', "main-layout-bottom", "footer#main-layout-bottom"): console.log('JETRADAR');
            // } else { console.log('Run JETRADAR'); }
            sendProCode();
            subscribe.sbbAdd();
            
            /* Send Email Privilege */
            if (chkSite()) {
                // sendEmail.jdCentral.send();
                // sendEmail.lineVillage.send();
                // sendEmail.SG_Halloween.send();
                // sendEmail.Samitivej.send();
                // sendEmail.Brusselsvoucher.send();
                // sendEmail.Anantaravoucher.send();
                // sendEmail.kyotobus.send();
                // addScriptTGX('pixelSG');
            }

            
            // chkSite() ? knorex.add():console.log("knorex");
            // chkSite() ? skyscanner.add() : console.log("skyscanner");
            // chkSite() ? tripadvisor.add() : console.log("tripadvisor");
            // chkSite() ? fbpixel_SE.add() : console.log("fbpixel_SE");
            // chkSite() ? spa_allsite.add() : console.log("star_tag");

            xbagSet.set();
            removePinkbanner('#PinkBanner_3');// REMOVE 

            // runWidget( (eBaDataLayer.market).split('_')[0] );
            // runWidget(eBaDataLayer.bound[0].dep_country);
            runWidget(eBaDataLayer.external_id.substring(0,2));
            pinkbanner_remove();
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');

            break;

        case "RTPL":
            // Step 3

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            updateHTML.remove_content.price_RTPL()
            subscribe.sbbAdd();
            (eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR") ? xbagSet.set() : console.log("xbagSet");
            // runWidget( (eBaDataLayer.market).split('_')[0] );
            //-----> REQ Remove by NA <-----//
            // runWidget(eBaDataLayer.bound[0].dep_country);
            // runWidget(eBaDataLayer.language);
            // runWidget(eBaDataLayer.language)
             //----->END REQ Remove by NA <-----//
            removeXbag.remove(removeXbag.check())
            // hidepaynow(); ---> Req remove by P'Piyawan
            // hidemodflight(); -->Req remove by P'Piyawan
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            
            break;
        case "MDFSR":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // chkSite() ? spa_allsite.add() : console.log("star_tag");
            // chkSite() ? addScript("insider", "main-layout-bottom", "footer#main-layout-bottom") : console.log('insider');
            _hideMEA();
            xeBag();
            updateHTML.extraService('divdiv.catalogServices-teaser-SIT', 'divdiv.catalogServices-teaser-MEA', 'divdiv.catalogServices-teaser-BAG', 'divdiv.div.catalogServices-teasers-container');
            // chkSite() ? DMP_ControlTag_kxct.add() : console.log('DMP_ControlTag_kxct');
            // chkSite() ? DMP_ControlTag_kxint.add() : console.log('DMP_ControlTag_kxint');
            break;
    }

    // implibdx.core.updateDom("footer#main-layout-bottom", function () {
        console.log('ALL PAGE');
        // objSearch();
        // chkSite() ? iNetasia_Tealium.add() : console.log('Tealium');
        chkSite() ? iNetasia_Tealium.add() : iNetasia_Tealium_qa.add();
        // (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_DK') : console.log('ignore-script');
        // (/\b^[AT]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTG('fbpixel_AT') : console.log('ignore-script');

    // }, 1000, 6);

}

//var trav_amount = Object.keys(dataTransfer).filter( x => /(PNR#1_TRAVID)/.test(x)).filter( x =>  dataTransfer[`FARE#1_TRAVELLERTYPE#${x.slice(-1)}_TRAVELLER#1_ID`] != undefined).map(x => x.slice(-1)).map( x=>({'TOTALAMOUNT':parseFloat(dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_PRICE#1_TOTALAMOUNT`]),'TOTALTAX':parseFloat(dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_PRICE#1_TOTALTAX`]),'TOTALAIR': (dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_PRICE#1_TOTALAMOUNT`]-dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_PRICE#1_TOTALTAX`])+ parseFloat(dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_PRICE#1_TAX#1_AMOUNT`]),"TRAVID":x,"PAXCODE":dataTransfer[`FARE#1_TRAVELLERTYPE#${x}_CODE`]}))
// trav_fuel.find( x => x.PAXCODE == 'ADT' ).fuel
jQuery(document).on("plnext:customData:ready", startFNJS);