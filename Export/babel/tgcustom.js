"use strict";

var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

var x_objInsurance = function x_objInsurance(c, l) {
  var _objInsurance = {
    HK: {
      GB: {
        titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
        insurance_txt: "<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited (\"Liberty\"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers\u2019 (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>",
        insurance_txt_mobile: "<p><br>Leave your worry behind and make sure that you're protected</p>",
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
        titlepanel: "\u4FDD\u969C\u60A8\u7684\u65C5\u7A0B \u4EE5\u4E0B\u65C5\u904A\u4FDD\u96AA\u8CC7\u8A0A\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B",
        insurance_txt: "<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul> <li><i class=\"icon-check title-icon\"></i>\u822A\u73ED\u5EF6\u8AA4,\u822A\u73ED\u53D6\u6D88</li><li><i class=\"icon-check title-icon\"></i>\u907A\u5931\u884C\u674E\u6216\u884C\u674E\u5EF6\u8AA4</li><li><i class=\"icon-check title-icon\"></i>\u9580\u8A3A/\u4F4F\u9662\u91AB\u7642\u8CBB\u7528</li></ul><p>\u689D\u6B3E\u53CA\u7D30\u5247\u9069\u7528*</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p> \u8ACB\u7D30\u95B1\u65C5\u904A\u4FDD\u96AA\u4FDD\u969C\u8868, \u4FDD\u55AE\u689D\u6B3E\u53CA\u8072\u660E\u3002\u5982\u9078\u8CFC\u672C\u65C5\u904A\u4FDD\u96AA\uFF0C\u5373\u8868\u793A\u95A3\u4E0B\u78BA\u8A8D\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u4FDD\u55AE\u689D\u6B3E\u7684\u689D\u6B3E\u3001\u7D30\u5247\u53CA\u4E0D\u53D7\u4FDD\u4E8B\u9805\u53CA\u8072\u660E\u7684\u5167\u5BB9\u3002 \u672C\u65C5\u904A\u4FDD\u96AA\u53EA\u9069\u7528\u65BC\u9999\u6E2F\u5C45\u6C11\u4E26\u5F9E\u9999\u6E2F\u51FA\u767C\u7684\u65C5\u7A0B\u3002\u672C\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u627F\u4FDD\uFF08\u4E0B\u7A31\u300C\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u300D\uFF09\uFF0C\u4E26\u7531\u5B89\u806F\u65C5\u884C\u63D0\u4F9B\u670D\u52D9\u3002 \u5B89\u806F\u65C5\u884C\u70BA Allianz Worldwide Partners (Hong Kong) Limited \u7684\u5546\u6A19\uFF0C\u70BA\u4E00\u5BB6\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u59D4\u4EFB\u7684\u4FDD\u96AA\u4EE3\u7406\u5546\u3002 \u95A3\u4E0B\u8CFC\u8CB7\u7684\u65C5\u904A\u4FDD\u96AA\u662F\u7531\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u6709\u9650\u516C\u53F8\u63D0\u4F9B\uFF0C\u800C\u4E26\u975E\u7531\u6CF0\u822A\u63D0\u4F9B\u3002\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u70BA\u672C\u65C5\u904A\u4FDD\u96AA\u7684\u627F\u4FDD\u516C\u53F8\u4E26\u5C07\u8CA0\u8CAC\u7E55\u767C\u6709\u95DC\u7684\u4FDD\u55AE\u3002\u6CF0\u822A\u4E26\u975E\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u7684\u4FDD\u96AA\u4EE3\u7406\u4EA6\u4E0D\u662F\u4FDD\u96AA\u92B7\u552E\u7D93\u7D00\u3002\u6CF0\u822A\u4E0D\u6703\u4EE3\u8868\u95A3\u4E0B\u5B89\u6392\u65C5\u904A\u4FDD\u96AA\uFF0C\u4EA6\u7121\u9808\u5C0D\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u53CA\u5B89\u806F\u65C5\u884C\u5C31\u672C\u65C5\u904A\u4FDD\u96AA\u6240\u63D0\u4F9B\u4E4B\u4EFB\u4F55\u8CC7\u6599\u8CA0\u8CAC\u3002 \u95A3\u4E0B\u540C\u610F\u5229\u5BF6\u570B\u969B\u4FDD\u96AA\u53CA\u5B89\u806F\u65C5\u884C\u4F7F\u7528\u95A3\u4E0B\u53CA\u540C\u4E00\u8A02\u7968\u4EA4\u6613\u7684\u5176\u4ED6\u65C5\u5BA2\u4E4B\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u8655\u7406\u6295\u4FDD\u65C5\u904A\u4FDD\u96AA\u7684\u7533\u8ACB\u4EE5\u53CA\u7BA1\u7406\u4FDD\u55AE\uFF0C\u4E26\u63D0\u4F9B\u7D22\u8CE0\u53CA\u6551\u63F4\u670D\u52D9\u3002 </p></div></div>",
        insurance_txt_mobile: "<p><br>\u5B89\u5FC3\u51FA\u767C\uFF0C\u70BA\u60A8\u7684\u65C5\u7A0B\u6DFB\u52A0\u4FDD\u969C </p><ul>",
        radio_1: {
          txt_1: "\u662F\uFF0C\u6211\u8981\u70BA\u65C5\u7A0B\u6295\u4FDD\xA0\xA0 \u4EE5\u4FDD\u969C\u6BCF\u4E00\u4F4D\u65C5\u5BA2",
          txt_2: " ",
          linkPolicy: "http://www.magroup-online.com/TGA/HK/ZH/OnlineTravelProtector_TC.pdf",
          txtPolicy: "\u672C\u4EBA\u540C\u610F\u4FDD\u55AE\u689D\u6B3E\u53CA\u8072\u660E\u3002"
        },
        radio_2: {
          txt_1: "<span class=\"\">\u5426\uFF0C\u6211\u62D2\u7D55\u70BA\u65C5\u7A0B\u6295\u4FDD\xA0 \u4EE5\u4FDD\u969C\u6BCF\u4E00\u4F4D\u65C5\u5BA2</span>",
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
        insurance_txt_mobile: "<p>THAI Travel Safe <br>Leave your worry behind and make sure that you're protected </p>",
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
        titlepanel: "\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 (\u0E41\u0E19\u0E30\u0E19\u0E33)",
        insurance_txt: "<p>THAI Travel Safe <br>\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E23\u0E31\u0E01 \u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 </p><ul> <li><i class=\"icon-check title-icon\"></i>\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07</li><li><i class=\"icon-check title-icon\"></i>\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E23\u0E30\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E2A\u0E39\u0E0D\u0E2B\u0E32\u0E22 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22</li><li><i class=\"icon-check title-icon\"></i>\u0E04\u0E48\u0E32\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22</li></ul> <p>\u0E01\u0E23\u0E38\u0E13\u0E32\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E08\u0E32\u0E01\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p>\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2F \u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A \u0E43\u0E0A\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22 \u0E02\u0E49\u0E2D\u0E40\u0E17\u0E47\u0E08\u0E08\u0E23\u0E34\u0E07\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E15\u0E48\u0E2D\u0E04\u0E13\u0E30\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\n\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E42\u0E14\u0E22 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E2D \u0E14\u0E31\u0E1A\u0E40\u0E1A\u0E34\u0E25\u0E22\u0E39 \u0E1E\u0E35 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22) \u0E08\u0E33\u0E01\u0E31\u0E14 \u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 \u0E2D\u0E25\u0E34\u0E2D\u0E31\u0E19\u0E0B\u0E4C \u0E42\u0E01\u0E25\u0E1A\u0E2D\u0E25 \u0E41\u0E2D\u0E2A\u0E0B\u0E34\u0E2A\u0E41\u0E17\u0E19\u0E17\u0E4C \u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E42\u0E14\u0E22\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E21\u0E37\u0E2D\u0E07\u0E44\u0E17\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E08\u0E33\u0E01\u0E31\u0E14 (\u0E21\u0E2B\u0E32\u0E0A\u0E19) \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E19\u0E35\u0E49\u0E17\u0E48\u0E32\u0E19\u0E15\u0E01\u0E25\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E1C\u0E48\u0E32\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E32\u0E01\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48 +66(0)2 305 8492</p></div></div>",
        insurance_txt_mobile: "<p>THAI Travel Safe <br>\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E23\u0E31\u0E01 \u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 </p>",
        radio_1: {
          txt_1: "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07",
          txt_2: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
          linkPolicy: "http://www.magroup-online.com/TGA/TH/TH/TG_TCs_Domestic&Outbound_TH.pdf",
          txtPolicy: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21"
        },
        radio_2: {
          txt_1: "\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07",
          txt_2: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
        }
      }
    }
  };
  return _objInsurance[c] !== undefined ? _objInsurance[c][l] : _objInsurance['GB']['GB'];
};

var iNetasia_Tealium = {
  add: function add() {
    implibdx.core.updateDom("footer#main-layout-bottom", function () {
      var addTo = document.getElementById('main-layout-bottom');
      var createAttr = document.createElement("script");
      var txtNode = '';
      createAttr.setAttribute('type', 'text/javascript');
      var content = "utag_cfg_ovrd={},a=\"//tags.tiqcdn.com/utag/thai-airways/main/prod/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,d.onerror=function(){utag_cfg_ovrd.path=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/\",a=\"//tags.tiqcdn.cn/utag/thai-airways/main/prod/utag.js\",b=document,c=\"script\",d=b.createElement(c),d.src=a,d.type=\"text/java\"+c,d.async=!0,a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a)},a=b.getElementsByTagName(c)[0],a.parentNode.insertBefore(d,a);";
      txtNode = document.createTextNode(content);
      createAttr.appendChild(txtNode);
      addTo.appendChild(createAttr);
    }, 1000, 6);
  }
};

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

var sendEmail = {
  jdCentral: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "06", "15"], ["2019", "07", "31"], "null", "null", "JD-Central", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          chkSite() ? console.log("JD-Centrale") : console.log(eMailTrigger.obj);

          if (eBaDataLayer.bound[0].dep_airport == "BKK") {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
              data: eMailTrigger.crOBJ("JD-Central"),
              dataType: 'json'
            }).done(function (result) {
              console.log(result.success);
            }).error(function (e) {
              console.log(e.statusText);
            });
          }
        }, 1000, 6);
      } else console.log('error : senddata');
    },
    conditionArrAirport: ['BKK']
  },
  lineVillage: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "07", "05"], ["2019", "09", "31"], ["2020", "01", "31"], ["2019", "06", "16"], "HK-Line_Village", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          if (eMailTrigger.chkAirportArr(eBaDataLayer.bound, eMailTrigger.lineVillage.conditionArrAirport) === true && eBaDataLayer.bound[0].dep_airport == "HKG" && dataTransfer["EXTERNAL_ID#4"] === "Line Village") {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/postdataamds_trigger',
              data: eMailTrigger.crOBJ("HK-Line_Village"),
              dataType: 'json'
            }).done(function (result) {
              console.log(result.success);
            }).error(function (e) {
              console.log(e.statusText);
            });
          }
        }, 1000, 6);
      } else console.log('error : senddata');
    },
    conditionArrAirport: ["BKK"]
  },
  SG_Halloween: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "08", "02"], ["2019", "09", "31"], ["2019", "09", "31"], ["2019", "08", "02"], "SG_Halloween", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          if (eBaDataLayer.bound[0].dep_airport == "BKK" && eBaDataLayer.bound[0].arr_airport == "SIN" && dataTransfer["EXTERNAL_ID#4"] == "HHN9" && eBaDataLayer.trip_type == "RT") {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/api/mastercard/',
              data: eMailTrigger.crOBJ("SG_Halloween_2020"),
              dataType: 'json'
            }).done(function (result) {
              console.log(result.success);
            }).error(function (e) {
              console.log(e.statusText);
            });
          }
        }, 1000, 6);
      } else console.log('error : senddata');
    },
    conditionArrAirport: ['BKK']
  },
  Samitivej: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "08", "01"], ["2019", "11", "25"], "null", "null", "Samitivej", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          if (eBaDataLayer.bound[0].dep_airport == "BKK" && isDom(eBaDataLayer.bound[0].arr_airport) == false) {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
              data: eMailTrigger.crOBJ("Samitivej-coupon"),
              dataType: 'json'
            }).done(function (result) {
              console.log(result.success);
            }).error(function (e) {
              console.log(e.statusText);
            });
          }
        }, 1000, 6);
      } else console.log('error : senddata');
    },
    conditionArrAirport: ['BKK']
  },
  Brusselsvoucher: {
    send: function send() {
      if (eMailTrigger.chkEXP(["2019", "07", "29"], ["2019", "11", "29"], ["2019", "11", "31"], ["2019", "07", "29"], "Brusselsvoucher", "NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT") {
        implibdx.core.updateDom("div.TGINSBannerMenu", function () {
          if (eBaDataLayer.bound[0].dep_airport !== "BRU" && arrAirport('BRU') == true) {
            $.ajax({
              type: 'POST',
              url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
              data: eMailTrigger.crOBJ("Brussels-voucher"),
              dataType: 'json'
            }).done(function (result) {
              console.log(result.success);
            }).error(function (e) {
              console.log(e.statusText);
            });
          }
        }, 1000, 6);
      } else console.log('error : senddata');
    },
    conditionArrAirport: ['BKK']
  }
};

function remove_linkPolicy() {
  implibdx.core.updateDom(".contract-detail", function () {
    $(".contract-detail>div a").remove();
    $(".contract-detail>div a").css('display', 'none');
  }, 1000, 5);
}

var arrDom = ["CNX", "CEI", "DMK", "HDY", "KKC", "USM", "KBV", "LPT", "HGN", "NAW", "HKT", "THS", "URT", "TDX", "UBP"];

var isDom = function isDom(city) {
  return arrDom.find(function (key) {
    return key == city;
  }) ? true : false;
};

var arrAirport = function arrAirport(airport) {
  return eBaDataLayer.search.flights.map(function (k) {
    return k.arrival.location_code;
  }).find(function (k) {
    return k == airport;
  }) ? true : false;
};

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

      if (chkSite()) {
        sendEmail.jdCentral.send();
        sendEmail.lineVillage.send();
        sendEmail.SG_Halloween.send();
        sendEmail.Samitivej.send();
        sendEmail.Brusselsvoucher.send();
        addScriptTGX('pixelSG');
      }

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
    chkSite() ? console.log('tealium') : iNetasia_Tealium.add();
    /\b^[SG]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true ? addScriptTGX('pixelSG') : console.log('pixel_SG');
    /\b^[DK]{2}/.test(eBaDataLayer.external_id) === true && chkSite() === true && eBaDataLayer.page_code == "CONF" ? dkPixel_log() : console.log('ignore-script');
  }, 1000, 6);
};

jQuery(document).on("plnext:customData:ready", startFNJS);