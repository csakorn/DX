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
let objInsurance = (c, l) => {
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
                insurance_txt: "<p>\u7D9C\u5408\u65C5\u904A\u4FDD <br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class=\"icon-check title-icon\"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class=\"icon-check title-icon\"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class=\"icon-check title-icon\"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul> <p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p>\u672C\u4FDD\u96AA\u53EA\u9069\u7528\u65BC\u9999\u6E2F\u5C45\u6C11\u4E26\u5F9E\u9999\u6E2F\u51FA\u767C\u7684\u65C5\u7A0B\u3002\u672C\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u627F\u4FDD\uFF08\u4E0B\u7A31\u300C\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u300D\uFF09\uFF0C\u4E26\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B\u670D\u52D9\u3002 \u5B89\u806F\u65C5\u884C\u70BA Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6A19\uFF0C\u70BA\u4E00\u5BB6\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u59D4\u4EFB\u7684\u4FDD\u96AA\u4EE3\u7406\u5546\u3002 \u95A3\u4E0B\u8CFC\u8CB7\u7684\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u63D0\u4F9B\uFF0C\u800C\u4E26\u975E\u7531\u6CF0\u822A\u63D0\u4F9B\u3002\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u70BA\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u7684\u627F\u4FDD\u516C\u53F8\u4E26\u5C07\u8CA0\u8CAC\u7E55\u767C\u6709\u95DC\u7684\u4FDD\u55AE\u3002\u6CF0\u822A\u4E26\u975E\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u7684\u4FDD\u96AA\u4EE3\u7406\u4EA6\u4E0D\u662F\u4FDD\u96AA\u92B7\u552E\u7D93\u7D00\u3002\u6CF0\u822A\u4E0D\u6703\u4EE3\u8868\u95A3\u4E0B\u5B89\u6392\u65C5\u904A\u4FDD\u96AA\uFF0C\u4EA6\u7121\u9808\u5C0D\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u5C31\u300C\u7D9C\u5408\u65C5\u904A\u4FDD\u300D\u6240\u63D0\u4F9B\u4E4B\u4EFB\u4F55\u8CC7\u6599\u8CA0\u8CAC\u3002</p></div></div>",
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
    implibdx.core.updateDom("#terms-and-conditions", function() {
        let insurances_tc ="";
        if(eBaDataLayer.bound[0].dep_country === "HK"){ 
            insurances_tc = $('.checkbox a')[2].textContent;
        }else{
            insurances_tc = $('.checkbox a')[4].textContent;
        }
        // let insurances_tc = $('.checkbox a')[4] != undefined ? $('.checkbox a')[4].textContent: $('.checkbox a')[2] !== undefined ? $('.checkbox a')[2];

        if(insurances_tc.length  === 10 && eBaDataLayer.bound[0].dep_country == 'HK'){
            $('.checkbox a')[2].href = lcx.radio_1.linkPolicy;
        }else{
            $('.checkbox a')[4].href = lcx.radio_1.linkPolicy;
        }
        
   }, 1000, 8);
}

function remove_linkPolicy(){
    implibdx.core.updateDom(".contract-detail", function() {
    $(".contract-detail>div a").remove();
    $(".contract-detail>div a").css('display','none')
    }, 1000, 5);
}