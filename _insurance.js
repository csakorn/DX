let objInsurance = (c, l) => {
    const _objInsurance = {
        HK: {
            GB: {
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul> <p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>This travel insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited (\"Liberty\"), with services provided by Allianz Assistance. Allianz Assistance, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this travel insurance. You are purchasing Comprehensive Plan from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing Comprehensive Plan. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this insurance on your behalf and is not responsible for any information provided by Liberty about Comprehensive Plan.</p></div></div>",
                radio_1: {
                    txt_1: "Yes, I want to protect my trip",
                    txt_2: "for all passengers",
                    linkPolicy: " http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
                    txtPolicy: "For Policy Wording"
                },
                radio_2: {
                    txt_1: "<span class=\"\">No, I don\'t want to protect my trip<span>",
                    txt_2: "for all passengers"
                }
            },
            TW: {
                titlepanel: "\u4fdd\u969c\u60a8\u7684\u65c5\u7a0b",
                insurance_txt: "<p>\u7d9c\u5408\u65c5\u904a\u4fdd <br>\u5b89\u5fc3\u51fa\u767c\uff0c\u70ba\u60a8\u7684\u65c5\u7a0b\u6dfb\u52a0\u4fdd\u969c </p><ul> <li><i class=\"icon-check title-icon\"></i>\u822a\u73ed\u5ef6\u8aa4,\u822a\u73ed\u53d6\u6d88</li><li><i class=\"icon-check title-icon\"></i>\u907a\u5931\u884c\u674e\u6216\u884c\u674e\u5ef6\u8aa4</li><li><i class=\"icon-check title-icon\"></i>\u9580\u8a3a\x2F\u4f4f\u9662\u91ab\u7642\u8cbb\u7528</li></ul> <p>\u689d\u6b3e\u53ca\u7d30\u5247\u9069\u7528*</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>\u672c\u4fdd\u96aa\u53ea\u9069\u7528\u65bc\u9999\u6e2f\u5c45\u6c11\u4e26\u5f9e\u9999\u6e2f\u51fa\u767c\u7684\u65c5\u7a0b\u3002\u672c\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u627f\u4fdd\uff08\u4e0b\u7a31\u300c\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u300d\uff09\uff0c\u4e26\u7531\u5b89\u806f\u6551\u63f4\u63d0\u4f9b\u670d\u52d9\u3002 \u5b89\u806f\u6551\u63f4\u70baAllianz Worldwide Partners (Hong Kong) Limited\u7684\u5546\u6a19\uff0c\u70ba\u4e00\u5bb6\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u59d4\u4efb\u7684\u4fdd\u96aa\u4ee3\u7406\u5546\u3002 \u95a3\u4e0b\u8cfc\u8cb7\u7684\u300c\u7d9c\u5408\u65c5\u904a\u4fdd\u300d\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u63d0\u4f9b\uff0c\u800c\u4e26\u975e\u7531\u6cf0\u822a\u63d0\u4f9b\u3002\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u70ba\u300c\u7d9c\u5408\u65c5\u904a\u4fdd\u300d\u7684\u627f\u4fdd\u516c\u53f8\u4e26\u5c07\u8ca0\u8cac\u7e55\u767c\u6709\u95dc\u7684\u4fdd\u55ae\u3002\u6cf0\u822a\u4e26\u975e\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u7684\u4fdd\u96aa\u4ee3\u7406\u4ea6\u4e0d\u662f\u4fdd\u96aa\u92b7\u552e\u7d93\u7d00\u3002\u6cf0\u822a\u4e0d\u6703\u4ee3\u8868\u95a3\u4e0b\u5b89\u6392\u65c5\u904a\u4fdd\u96aa\uff0c\u4ea6\u7121\u9808\u5c0d\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u5c31\u300c\u7d9c\u5408\u65c5\u904a\u4fdd\u300d\u6240\u63d0\u4f9b\u4e4b\u4efb\u4f55\u8cc7\u6599\u8ca0\u8cac\u3002</p></div></div>",
                radio_1: {
                    txt_1: "\u662f\uff0c\u6211\u8981\u70ba\u65c5\u7a0b\u6295\u4fdd\u00a0\u00a0 \u4ee5\u4fdd\u969c\u6bcf\u4e00\u4f4d\u65c5\u5ba2",
                    txt_2: " ",
                    linkPolicy: "http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
                    txtPolicy: "\u689d\u6b3e\u53ca\u7d30\u5247\u8a73\u60c5"
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
                    linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
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
    return _objInsurance[c][l];
}
// var addinsurance = function(xcountry){
// 	let langx = "";
// 	for(x in _objInsurance){
// 		if(x == xcountry){
// 			langx = [x,eBaDataLayer.language]
//         }
//     }
// return langx;
// }

function insurance(xcountry, xlanguage) {
    implibdx.core.updateDom("#insurance-select", function() {
        if (document.getElementById('insurance-select') !== null) {
            let lc = (objInsurance(xcountry, xlanguage) != undefined) ? objInsurance(xcountry, xlanguage) : objInsurance(xcountry, 'GB')
            $(".title-panel-text").html("<i class=\"icon-aid title-icon\" aria-hidden=\"true\"></i>" + lc.titlepanel)
            $(".box-insurance").html(lc.insurance_txt)
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>span.bold').html(lc.radio_1.txt_1)
            $("label[for='tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1']")[0].childNodes[2].textContent = lc.radio_1.txt_2;
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').html(lc.radio_1.txtPolicy)
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup1"]>a').attr('href', lc.radio_1.linkPolicy);
            $('label[for="tpl3_widget-input-purchaseForm-insuranceForm-insuranceRadioGroup-insuranceRadioGroup2"]').html(lc.radio_2.txt_1 + " " + lc.radio_2.txt_2);
        } else {
            return false;
        }
    }, 1000, 5);
}