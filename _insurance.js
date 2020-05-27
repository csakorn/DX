/*! Insurance */
/*let objInsurance = (c, l) => {
    const _objInsurance = {
        HK: {
            GB: {
                titlepanel: "Protect your flight (Recommended)",
                insurance_txt: "<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>This travel insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited (\"Liberty\"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this travel insurance. You are purchasing Comprehensive Plan from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing Comprehensive Plan. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this insurance on your behalf and is not responsible for any information provided by Liberty about Comprehensive Plan</p></div></div>",
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
                insurance_txt: "<p>\u7D9C\u5408\u65C5\u904A\u4FDD <br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class=\"icon-check title-icon\"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class=\"icon-check title-icon\"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class=\"icon-check title-icon\"></i>\u9580\u8A3Ax2F\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul> <p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>\u672C\u4FDD\u96AA\u53EA\u9069\u7528\u65BC\u9999\u6E2F\u5C45\u6C11\u4E26\u5F9E\u9999\u6E2F\u51FA\u767C\u7684\u65C5\u7A0B\u3002\u672C\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u627F\u4FDD\uFF08\u4E0B\u7A31\u300C\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u300D\uFF09\uFF0C\u4E26\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B\u670D\u52D9\u3002 \u5B89\u806F\u65C5\u884C\u70BA Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6A19\uFF0C\u70BA\u4E00\u5BB6\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u59D4\u4EFB\u7684\u4FDD\u96AA\u4EE3\u7406\u5546\u3002 \u95A3\u4E0B\u8CFC\u8CB7\u7684\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u63D0\u4F9B\uFF0C\u800C\u4E26\u975E\u7531\u6CF0\u822A\u63D0\u4F9B\u3002\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u70BA\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u7684\u627F\u4FDD\u516C\u53F8\u4E26\u5C07\u8CA0\u8CAC\u7E55\u767C\u6709\u95DC\u7684\u4FDD\u55AE\u3002\u6CF0\u822A\u4E26\u975E\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u7684\u4FDD\u96AA\u4EE3\u7406\u4EA6\u4E0D\u662F\u4FDD\u96AA\u92B7\u552E\u7D93\u7D00\u3002\u6CF0\u822A\u4E0D\u6703\u4EE3\u8868\u95A3\u4E0B\u5B89\u6392\u65C5\u904A\u4FDD\u96AA\uFF0C\u4EA6\u7121\u9808\u5C0D\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u5C31\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u6240\u63D0\u4F9B\u4E4B\u4EFB\u4F55\u8CC7\u6599\u8CA0\u8CAC\u3002</p></div></div>",
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
*/
const isMobile = (document.getElementsByTagName("body")[0].getAttribute("data-device-type") === "MOBILE");
// let objInsurance = (c, l) => {
//     const _objInsurance = {
//         HK: {
//             GB: {
//                 titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
//                 insurance_txt: `<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class="icon-check title-icon"></i> Flight delay, flight cancellation</li><li><i class="icon-check title-icon"></i> Compensation for baggage delay or loss</li><li><i class="icon-check title-icon"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited ("Liberty"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers’ (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>`,
//                 radio_1: {
//                     txt_1: "Yes, I want to protect my trip",
//                     txt_2: "for all passengers",
//                     linkPolicy: " http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
//                     txtPolicy: "I agree to the Policy Wording and Declaration."
//                 },
//                 radio_2: {
//                     txt_1: "<span class=\"\">No, I don\'t want to protect my trip<span>",
//                     txt_2: "for all passengers"
//                 }
//             },
//             TW: {
//                 titlepanel: "\u4fdd\u969c\u60a8\u7684\u65c5\u7a0b \u4ee5\u4e0b\u65c5\u904a\u4fdd\u96aa\u8cc7\u8a0a\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b",
//                 insurance_txt: `<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class="icon-check title-icon"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class="icon-check title-icon"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class="icon-check title-icon"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul><p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class="box-insurance_detail"> <div class="box-insurance_detail-content"> <p> \u8acb\u7d30\u95b1\u65c5\u904a\u4fdd\u96aa\u4fdd\u969c\u8868, \u4fdd\u55ae\u689d\u6b3e\u53ca\u8072\u660e\u3002\u5982\u9078\u8cfc\u672c\u65c5\u904a\u4fdd\u96aa\uff0c\u5373\u8868\u793a\u95a3\u4e0b\u78ba\u8a8d\u5df2\u95b1\u8b80\u4e26\u540c\u610f\u4fdd\u55ae\u689d\u6b3e\u7684\u689d\u6b3e\u3001\u7d30\u5247\u53ca\u4e0d\u53d7\u4fdd\u4e8b\u9805\u53ca\u8072\u660e\u7684\u5167\u5bb9\u3002 \u672c\u65c5\u904a\u4fdd\u96aa\u53ea\u9069\u7528\u65bc\u9999\u6e2f\u5c45\u6c11\u4e26\u5f9e\u9999\u6e2f\u51fa\u767c\u7684\u65c5\u7a0b\u3002\u672c\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u627f\u4fdd\uff08\u4e0b\u7a31\u300c\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u300d\uff09\uff0c\u4e26\u7531\u5b89\u806f\u65c5\u884c\u63d0\u4f9b\u670d\u52d9\u3002 \u5b89\u806f\u65c5\u884c\u70ba Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6a19\uff0c\u70ba\u4e00\u5bb6\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u59d4\u4efb\u7684\u4fdd\u96aa\u4ee3\u7406\u5546\u3002 \u95a3\u4e0b\u8cfc\u8cb7\u7684\u65c5\u904a\u4fdd\u96aa\u662f\u7531\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u6709\u9650\u516c\u53f8\u63d0\u4f9b\uff0c\u800c\u4e26\u975e\u7531\u6cf0\u822a\u63d0\u4f9b\u3002\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u70ba\u672c\u65c5\u904a\u4fdd\u96aa\u7684\u627f\u4fdd\u516c\u53f8\u4e26\u5c07\u8ca0\u8cac\u7e55\u767c\u6709\u95dc\u7684\u4fdd\u55ae\u3002\u6cf0\u822a\u4e26\u975e\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u7684\u4fdd\u96aa\u4ee3\u7406\u4ea6\u4e0d\u662f\u4fdd\u96aa\u92b7\u552e\u7d93\u7d00\u3002\u6cf0\u822a\u4e0d\u6703\u4ee3\u8868\u95a3\u4e0b\u5b89\u6392\u65c5\u904a\u4fdd\u96aa\uff0c\u4ea6\u7121\u9808\u5c0d\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u5c31\u672c\u65c5\u904a\u4fdd\u96aa\u6240\u63d0\u4f9b\u4e4b\u4efb\u4f55\u8cc7\u6599\u8ca0\u8cac\u3002 \u95a3\u4e0b\u540c\u610f\u5229\u5bf6\u570b\u969b\u4fdd\u96aa\u53ca\u5b89\u806f\u65c5\u884c\u4f7f\u7528\u95a3\u4e0b\u53ca\u540c\u4e00\u8a02\u7968\u4ea4\u6613\u7684\u5176\u4ed6\u65c5\u5ba2\u4e4b\u500b\u4eba\u8cc7\u6599\uff0c\u4ee5\u8655\u7406\u6295\u4fdd\u65c5\u904a\u4fdd\u96aa\u7684\u7533\u8acb\u4ee5\u53ca\u7ba1\u7406\u4fdd\u55ae\uff0c\u4e26\u63d0\u4f9b\u7d22\u8ce0\u53ca\u6551\u63f4\u670d\u52d9\u3002 </p></div></div>`,
//                 radio_1: {
//                     txt_1: "\u662f\uff0c\u6211\u8981\u70ba\u65c5\u7a0b\u6295\u4fdd\u00a0\u00a0 \u4ee5\u4fdd\u969c\u6bcf\u4e00\u4f4d\u65c5\u5ba2",
//                     txt_2: " ",
//                     linkPolicy: "http://www.magroup-online.com/TGA/HK/EN/OnlineTravelProtector.pdf",
//                     txtPolicy: "\u672c\u4eba\u540c\u610f\u4fdd\u55ae\u689d\u6b3e\u53ca\u8072\u660e\u3002"
//                 },
//                 radio_2: {
//                     txt_1: "<span class=\"\">\u5426\uff0c\u6211\u62d2\u7d55\u70ba\u65c5\u7a0b\u6295\u4fdd\u00a0 \u4ee5\u4fdd\u969c\u6bcf\u4e00\u4f4d\u65c5\u5ba2</span>",
//                     txt_2: " "
//                 }
//             }
//         },
//         GB: {
//             GB: {
//                 titlepanel: "Protect your flight (Recommended)",
//                 insurance_txt: "<p>THAI Travel Safe <br> Leave your worry behind and make sure that you're protected from </p> <ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li> <li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li> <li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li> </ul> <p>For more information please <a target=\"_blank\" href=\"http://www.magroup-online.com/TGA/TH/EN/TG_Product_and_Plans.pdf\">click here.</a></p> <br> <div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div> <div class=\"box-insurance_detail-content\"> <p>This travel insurance is managed by AWP Services (Thailand) Co., Ltd. Trading as Allianz Global Assistance, and is underwritten by Muang Thai Insurance Public Company Limited. In purchasing the policy, you agree to receive confirmation and future communications via email. If passengers would like to change the contact method, please call +66(0)2 305 8492</p> </div> </div>",
//                 radio_1: {
//                     txt_1: "Yes, I want to protect my trip",
//                     txt_2: "for all passengers",
//                     linkPolicy: "http://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
//                     txtPolicy: "For Policy Wording"
//                 },
//                 radio_2: {
//                     txt_1: "No, I don\'t want to protect my trip",
//                     txt_2: "for all passengers"
//                 }
//             }
//         },
//         SG: {
//             GB: {
//                 titlepanel: "Protect your flight (Recommended)",
//                 insurance_txt: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul> <p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>This product is underwritten by Liberty Insurance Pte Ltd with the assistance services provided by Allianz Global Assistance. Coverage is available to Singapore citizen or Permanent Resident of Singapore or Singapore Pass Holder and/or Work Permit Holder and their dependents residing in Singapore, and whose journey must start and end in Singapore.</p></div></div>",
//                 radio_1: {
//                     txt_1: "Yes, I want to protect my trip",
//                     txt_2: "for all passengers",
//                     linkPolicy: "https://magroup-webservice.com/TGA/SG/EN/policy-wording.pdf",
//                     txtPolicy: "For Policy Wording"
//                 },
//                 radio_2: {
//                     txt_1: "No, I don\'t want to protect my trip",
//                     txt_2: "for all passengers"
//                 }
//             }
//         },
//         TH: {
//             GB: {
//                 titlepanel: "Protect your flight (Recommended)",
//                 insurance_txt: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul> <p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p lang=\"en\">\"I consent to the Company for storage, use and disclosure of my truly medical history and information to Office of Insurance Commission for the purpose of regulating the insurance industry. This travel insurance is managed by AWP Services (Thailand) Co., Ltd. Trading as Allianz Global Assistance, and is underwritten by Muang Thai Insurance Public Company Limited. In purchasing the policy, you agree to receive confirmation and future communications via email. If passengers would like to change the contact method, please call +66(0)2 305 8492\"</p></div></div>",
//                 radio_1: {
//                     txt_1: "Yes, I want to protect my trip",
//                     txt_2: "for all passengers",
//                     linkPolicy: "https://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf",
//                     txtPolicy: "For Policy Wording"
//                 },
//                 radio_2: {
//                     txt_1: "No, I don\'t want to protect my trip",
//                     txt_2: "for all passengers"
//                 }
//             },
//             TH: {
//                 titlepanel: "\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 (\u0e41\u0e19\u0e30\u0e19\u0e33)",
//                 insurance_txt: "<p>THAI Travel Safe <br>\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e07\u0e34\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e40\u0e25\u0e47\u0e01\u0e19\u0e49\u0e2d\u0e22\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e01\u0e1b\u0e49\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e41\u0e25\u0e30\u0e04\u0e19\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e23\u0e31\u0e01 \u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07 </p><ul> <li><i class=\"icon-check title-icon\"></i>\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e25\u0e48\u0e32\u0e0a\u0e49\u0e32 \u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07</li><li><i class=\"icon-check title-icon\"></i>\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e23\u0e30\u0e25\u0e48\u0e32\u0e0a\u0e49\u0e32 \u0e2a\u0e39\u0e0d\u0e2b\u0e32\u0e22 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e2a\u0e35\u0e22\u0e2b\u0e32\u0e22</li><li><i class=\"icon-check title-icon\"></i>\u0e04\u0e48\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e2d\u0e35\u0e01\u0e21\u0e32\u0e01\u0e21\u0e32\u0e22</li></ul> <p>\u0e01\u0e23\u0e38\u0e13\u0e32\u0e28\u0e36\u0e01\u0e29\u0e32\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e08\u0e32\u0e01\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e09\u0e1a\u0e31\u0e1a\u0e40\u0e15\u0e47\u0e21</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p>\u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e22\u0e34\u0e19\u0e22\u0e2d\u0e21\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e2f \u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a \u0e43\u0e0a\u0e49 \u0e41\u0e25\u0e30\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e1c\u0e22 \u0e02\u0e49\u0e2d\u0e40\u0e17\u0e47\u0e08\u0e08\u0e23\u0e34\u0e07\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e02\u0e49\u0e32\u0e1e\u0e40\u0e08\u0e49\u0e32\u0e15\u0e48\u0e2d\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e14\u0e39\u0e41\u0e25\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\n\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e42\u0e14\u0e22 \u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e40\u0e2d \u0e14\u0e31\u0e1a\u0e40\u0e1a\u0e34\u0e25\u0e22\u0e39 \u0e1e\u0e35 \u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e40\u0e0b\u0e2a (\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22) \u0e08\u0e33\u0e01\u0e31\u0e14 \u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e04\u0e49\u0e32 \u0e2d\u0e25\u0e34\u0e2d\u0e31\u0e19\u0e0b\u0e4c \u0e42\u0e01\u0e25\u0e1a\u0e2d\u0e25 \u0e41\u0e2d\u0e2a\u0e0b\u0e34\u0e2a\u0e41\u0e17\u0e19\u0e17\u0e4c \u0e41\u0e25\u0e30\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e42\u0e14\u0e22\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e40\u0e21\u0e37\u0e2d\u0e07\u0e44\u0e17\u0e22\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22 \u0e08\u0e33\u0e01\u0e31\u0e14 (\u0e21\u0e2b\u0e32\u0e0a\u0e19) \u0e01\u0e32\u0e23\u0e0b\u0e37\u0e49\u0e2d\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e19\u0e35\u0e49\u0e17\u0e48\u0e32\u0e19\u0e15\u0e01\u0e25\u0e07\u0e17\u0e35\u0e48\u0e08\u0e30\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e20\u0e31\u0e22\u0e41\u0e25\u0e30\u0e43\u0e2b\u0e49\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e2d\u0e35\u0e40\u0e21\u0e25 \u0e2b\u0e32\u0e01\u0e17\u0e48\u0e32\u0e19\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e41\u0e08\u0e49\u0e07\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e21\u0e32\u0e17\u0e35\u0e48 +66(0)2 305 8492</p></div></div>",
//                 radio_1: {
//                     txt_1: "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07",
//                     txt_2: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
//                     linkPolicy: "http://www.magroup-online.com/TGA/TH/TH/TG_TCs_Domestic&Outbound_TH.pdf",
//                     txtPolicy: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e23\u0e21\u0e18\u0e23\u0e23\u0e21\u0e4c\u0e09\u0e1a\u0e31\u0e1a\u0e40\u0e15\u0e47\u0e21"
//                 },
//                 radio_2: {
//                     txt_1: "\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e32\u0e21\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07",
//                     txt_2: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"
//                 }
//             }
//         }
//     }
//     return _objInsurance[c] !== undefined ? _objInsurance[c][l] : _objInsurance['GB']['GB'];
// }

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

/*function insurance(xcountry, xlanguage) {
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
        }
    }, 1000, 5);

    let lcx = (objInsurance(xcountry, xlanguage) != undefined) ? objInsurance(xcountry, xlanguage) : objInsurance(xcountry, 'GB')
    implibdx.core.updateDom("#terms-and-conditions", function() {

        let insurances_tc = $('.checkbox a')[4] != undefined?$('.checkbox a')[4].textContent:"";

        if(insurances_tc  === 'insurance conditions Open new window' && eBaDataLayer.bound[0].dep_country === "TH"){
            $('.checkbox a')[4].href = lcx.radio_1.linkPolicy;
        }else if(insurances_tc === 'insurance conditions Open new window' && eBaDataLayer.bound[0].dep_country !== "TH"){
            insurances_tc.remove()
        }
        

    //     for (x in $('.checkbox a')) {
    //         if ($('.checkbox a')[x].textContent === 'insurance conditions Open new window' && eBaDataLayer.bound[0].dep_country === "TH") {
    //            $('.checkbox a')[x].href = lcx.radio_1.linkPolicy;

    //        }else if($('.checkbox a')[x].textContent === 'insurance conditions Open new window'){               
    //         $('.checkbox a')[x].remove()
    //     }
    // }
   }, 1000, 8);

    // if (eBaDataLayer.currency === 'THB') {

    //     implibdx.core.updateDom("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition", function() {
    //         for (x in $('.checkbox a')) {
    //             if ($('.checkbox a')[x].textContent == 'insurance conditions Open new window') {
    //                 $('.checkbox a')[x].href = 'https://www.magroup-online.com/TGA/TH/EN/TG_TCs_Domestic&Outbound_EN.pdf'
    //             }
    //         }
    //     }, 1000, 5);
    // }else{
    //     implibdx.core.updateDom("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition", function() {
    //         for (x in $('.checkbox a')) {
    //             if ($('.checkbox a')[x].textContent == 'insurance conditions Open new window') {
    //                 $('.checkbox a')[x].remove()
    //             }
    //         }
    //     }, 1000, 5);
    // }
}*/

function insurance(xcountry, xlanguage) {
    // if (/FR|IT/.test(xcountry) == false) {
        implibdx.core.updateDom("#insurance-select", function () {
            if (document.getElementById('insurance-select') !== null) {
                let lc = (x_objInsurance(xcountry, xlanguage) != undefined) ? x_objInsurance(xcountry, xlanguage) : x_objInsurance(xcountry, 'GB')
                $(".title-panel-text").html("<i class=\"icon-aid title-icon\" aria-hidden=\"true\"></i>" + lc.titlepanel)
                // $(".box-insurance").html(isMobile?lc.insurance_txt_mobile:lc.insurance_txt)
                
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
                    // $("label[for$='insuranceRadioGroup-insuranceRadioGroup3']").append(lc.radio_3.description)
                }
                checkbox_cf(xcountry)
            }

        }, 1000, 5);
    // }
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
                    //console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country)
                    inshref.href = lcx.radio_1.linkPolicy;
                } else {
                    //console.log(insurances_tc.length, insurances_tc, eBaDataLayer.bound[0].dep_country)
                    inshref_GB.href = lcx.radio_1.linkPolicy;
                }

            }, 2 * 1000);
        });

    }, 1000, 8);
    //  implibdx.core.updateDom("#terms-and-conditions", function() {
    //      let insurances_tc ="";
    //      if(eBaDataLayer.bound[0].dep_country === "HK"){ 
    //          insurances_tc = $('.checkbox a')[2].textContent;
    //      }else{
    //          insurances_tc = $('.checkbox a')[4].textContent;
    //      }
    //      // let insurances_tc = $('.checkbox a')[4] != undefined ? $('.checkbox a')[4].textContent: $('.checkbox a')[2] !== undefined ? $('.checkbox a')[2];

    //      if(insurances_tc.length  === 10 && eBaDataLayer.bound[0].dep_country == 'HK'){
    //          $('.checkbox a')[2].href = lcx.radio_1.linkPolicy;
    //      }else{
    //          $('.checkbox a')[4].href = lcx.radio_1.linkPolicy;
    //      }

    // }, 1000, 8);
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
/*! end Insurance */