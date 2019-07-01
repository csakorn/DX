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

let x_objInsurance = (c, l) => {
    const _objInsurance = {
        HK: {
            GB: {
                titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
                insurance_txt: `<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class="icon-check title-icon"></i> Flight delay, flight cancellation</li><li><i class="icon-check title-icon"></i> Compensation for baggage delay or loss</li><li><i class="icon-check title-icon"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited ("Liberty"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers’ (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>`,
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
                titlepanel: "\u4fdd\u969c\u60a8\u7684\u65c5\u7a0b \u4ee5\u4e0b\u65c5\u904a\u4fdd\u96aa\u8cc7\u8a0a\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b",
                insurance_txt: `<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class="icon-check title-icon"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class="icon-check title-icon"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class="icon-check title-icon"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul><p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> \u8acb\u7d30\u95b1\u65c5\u904a\u4fdd\u96aa\u4fdd\u969c\u8868, \u4fdd\u55ae\u689d\u6b3e\u53ca\u8072\u660e\u3002\u5982\u9078\u8cfc\u672c\u65c5\u904a\u4fdd\u96aa\uff0c\u5373\u8868\u793a\u95a3\u4e0b\u78ba\u8a8d\u5df2\u95b1\u8b80\u4e26\u540c\u610f\u4fdd\u55ae\u689d\u6b3e\u7684\u689d\u6b3e\u3001\u7d30\u5247\u53ca\u4e0d\u53d7\u4fdd\u4e8b\u9805\u53ca\u8072\u660e\u7684\u5167\u5bb9\u3002 \u672c\u65c5\u904a\u4fdd\u96aa\u53ea\u9069\u7528\u65bc\u9999\u6e2f\u5c45\u6c11\u4e26\u5f9e\u9999\u6e2f\u51fa\u767c\u7684\u65c5\u7a0b\u3002\u672c\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u627f\u4fdd\uff08\u4e0b\u7a31\u300c\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u300d\uff09\uff0c\u4e26\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b\u670d\u52d9\u3002 \u5b89\u806f\u65c5\u884c\u70ba Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6a19\uff0c\u70ba\u4e00\u5bb6\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u59d4\u4efb\u7684\u4fdd\u96aa\u4ee3\u7406\u5546\u3002 \u95a3\u4e0b\u8cfc\u8cb7\u7684\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u63d0\u4f9b\uff0c\u800c\u4e26\u975e\u7531\u6cf0\u822a\u63d0\u4f9b\u3002\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u70ba\u672c\u65c5\u904a\u4fdd\u96aa\u7684\u627f\u4fdd\u516c\u53f8\u4e26\u5c07\u8ca0\u8cac\u7e55\u767c\u6709\u95dc\u7684\u4fdd\u55ae\u3002\u6cf0\u822a\u4e26\u975e\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u7684\u4fdd\u96aa\u4ee3\u7406\u4ea6\u4e0d\u662f\u4fdd\u96aa\u92b7\u552e\u7d93\u7d00\u3002\u6cf0\u822a\u4e0d\u6703\u4ee3\u8868\u95a3\u4e0b\u5b89\u6392\u65c5\u904a\u4fdd\u96aa\uff0c\u4ea6\u7121\u9808\u5c0d\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u5c31\u672c\u65c5\u904a\u4fdd\u96aa\u6240\u63d0\u4f9b\u4e4b\u4efb\u4f55\u8cc7\u6599\u8ca0\u8cac\u3002 \u95a3\u4e0b\u540c\u610f\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u4f7f\u7528\u95a3\u4e0b\u53ca\u540c\u4e00\u8a02\u7968\u4ea4\u6613\u7684\u5176\u4ed6\u65c5\u5ba2\u4e4b\u500b\u4eba\u8cc7\u6599\uff0c\u4ee5\u8655\u7406\u6295\u4fdd\u65c5\u904a\u4fdd\u96aa\u7684\u7533\u8acb\u4ee5\u53ca\u7ba1\u7406\u4fdd\u55ae\uff0c\u4e26\u63d0\u4f9b\u7d22\u8ce0\u53ca\u6551\u63f4\u670d\u52d9\u3002 </p></div></div>`,
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
        }
    }
    return _objInsurance[c] !== undefined ? _objInsurance[c][l] : _objInsurance['GB']['GB'];
}

function _insurance(xcountry, xlanguage) {
    implibdx.core.updateDom("#insurance-select", function() {
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
    implibdx.core.updateDom("#terms-and-conditions", function() {
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

    implibdx.core.updateDom("footer#main-layout-bottom", function() {
        addTo[0].appendChild(createAttr);
    }, 1000, 5)
}

$(".BaliTreat").on('click', function(event) {
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
    }).done(function(result) {
        console.log(result.success);
    }).error(function(e) {
        console.log(e.statusText)
    });
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
        }).done(function(result) {
            console.log(result.success);
        }).error(function(e) {
            console.log(e.statusText)
        });
    }
}


function remove_linkPolicy() {
    implibdx.core.updateDom(".contract-detail", function() {
        $(".contract-detail>div a").remove();
        $(".contract-detail>div a").css('display', 'none')
    }, 1000, 5);
}

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
            chkSite() && dataTransfer['EXTERNAL_ID#4'] === "Line Village" && eBaDataLayer.trip_type === "RT" && eBaDataLayer.market === "HK" ? eMailTrigger.lineVillage.send() : false;
            addFontAwesome();
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
    
    implibdx.core.updateDom("footer#main-layout-bottom", function() {
        console.log('ALL PAGE-2');

        /\b^[DK]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true && eBaDataLayer.page_code == "CONF"? dkPixel_log() : console.log('ignore-script');
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