var abandon_consent = {
    add:function(){
        // console.log('-------------------------->Add Abandon1')
        let tagHTML = document.createElement("div");
        tagHTML.setAttribute('id','boxAbandon');

        // if($("div.title-text").length != 0){
            implibdx.core.updateDom("#terms-and-conditions",function(){
                // console.log('-------------------------->Add Abandon');

                // $("div.title-text").append(tagHTML);
                // $("div#w17_termsAndConditions").before(tagHTML);
                $('div[id $= \'_termsAndConditions\']').before(tagHTML);
                $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );

                abandon_consent.watch();

            },1000,5); 

        // }else{
        //     implibdx.core.updateDom("div.terms-conditions-container",function(){
        //         $("div.terms-conditions-header").append(tagHTML);
        //         $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );
        //         abandon_consent.watch();

        //     },1000,5);
        // }

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
             /* Act on the event */
              // console.log('-------------------------------->watch')
            if($('#abandon').prop("checked") === true && $('input[id $="-input-purchaseForm-termsConditionsForm-termsAndCondition"]').prop("checked") === true && ($("input[id $='_radio_EXT']").prop("checked") === true || $("input[id $='_radio_EXT']").prop("checked") == undefined) ){
                // console.log('-------------------------------->save data')
                abandon_consent.obj["data7"] = "Y";
                abandon_consent.save_data();
            }
            // else if($('#abandon').prop("checked") === false && $('input[id $="-input-purchaseForm-termsConditionsForm-termsAndCondition"]').prop("checked") === true && ($("input[id $='_radio_EXT']").prop("checked") === true || $("input[id $='_radio_EXT']").prop("checked") == undefined) ){
            //    console.log('-------------------------------->save data N');
            //    abandon_consent.obj["data7"] = "N";
            //    abandon_consent.save_data();
            // }
         });

         $("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],#tpl5_radio_PLCC,li[id $='_li_PLCC'],label[for $='_radio_PLCC'],input[id $='_radio_PLCC']").on('click', function(event) {
             event.preventDefault();
             abandon_consent.remove();
             // console.log('-------------------------------->remove')
         });

         $("li[id $='_li_EXT'],label[for $='_radio_EXT'],input[id $='_radio_EXT'],#tpl5_radio_EXT, label[for='tpl5_radio_EXT'], li#tpl5_li_EXT").on('click', function(event) {
             event.preventDefault();
             $("div#boxAbandon").html( (abandon_consent.txtCheckbox[eBaDataLayer.language] !== "" ? abandon_consent.txtCheckbox[eBaDataLayer.language] : abandon_consent.txtCheckbox['GB']) );
             // console.log('-------------------------------->add')

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