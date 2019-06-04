"use strict";

var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

var x_objInsurance = function x_objInsurance(c, l) {
  var _objInsurance = {
    HK: {
      GB: {
        titlepanel: "Protect your flight The following Travel Insurance information is provided by Allianz Travel",
        insurance_txt: "<p><br>Leave your worry behind and make sure that you're protected from </p><ul> <li><i class=\"icon-check title-icon\"></i> Flight delay, flight cancellation</li><li><i class=\"icon-check title-icon\"></i> Compensation for baggage delay or loss</li><li><i class=\"icon-check title-icon\"></i> Medical expenses for in/out patient</li></ul><p>For more information, please refer to Policy Wording.</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-content\"> <p> Please read the Travel Insurance Schedule of Benefits, Policy Wording and Declaration. By selecting and purchasing this Travel Insurance, you confirm that you have read and agree to the all of the terms, conditions and exclusions of the Policy Wording and Declaration. This Travel Insurance is for Hong Kong residents only with journey starting from Hong Kong. It is underwritten by Liberty International Insurance Limited (\"Liberty\"), with services provided by Allianz Travel. Allianz Travel, a trading name of Allianz Worldwide Partners (Hong Kong) Limited, is registered as an insurance agency of Liberty in respect of this Travel Insurance. You are purchasing this Travel Insurance from Liberty and not Thai Airways. Liberty is the insurer of and responsible for issuing this Travel Insurance. Thai Airways is not an insurance agent of Liberty and does not act as an insurance broker. Thai Airways will not be arranging this Travel Insurance on your behalf and is not responsible for any information provided by Liberty and Allianz Travel about this Travel Insurance. You consent Liberty and Allianz Travel to use your and any other passengers\u2019 (under the same booking) personal data for the application and administration of this Travel Insurance and provision of claims and assistance services. </p></div></div>",
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
        titlepanel: "\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 (\u0E41\u0E19\u0E30\u0E19\u0E33)",
        insurance_txt: "<p>THAI Travel Safe <br>\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E23\u0E31\u0E01 \u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 </p><ul> <li><i class=\"icon-check title-icon\"></i>\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E1A\u0E34\u0E19\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07</li><li><i class=\"icon-check title-icon\"></i>\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E23\u0E30\u0E25\u0E48\u0E32\u0E0A\u0E49\u0E32 \u0E2A\u0E39\u0E0D\u0E2B\u0E32\u0E22 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22</li><li><i class=\"icon-check title-icon\"></i>\u0E04\u0E48\u0E32\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22</li></ul> <p>\u0E01\u0E23\u0E38\u0E13\u0E32\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E08\u0E32\u0E01\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21</p><br><div class=\"box-insurance_detail\"> <div class=\"box-insurance_detail-img\"> <a href=\"https://www.thaiairways-insurance.com/wordpress/wp-content/themes/ovhc/images/Non-Life_Broker_License_Certificate_of_AWP_Services_Thailand.jpg\" target=\"_blank\"><img src=\"./img/client/AGA_license.jpg\" alt=\"AGA license image\" height=\"60\" width=\"60\" style=\"vertical-align: text-bottom;\"></a> </div><div class=\"box-insurance_detail-content\"> <p>\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2F \u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A \u0E43\u0E0A\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22 \u0E02\u0E49\u0E2D\u0E40\u0E17\u0E47\u0E08\u0E08\u0E23\u0E34\u0E07\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E15\u0E48\u0E2D\u0E04\u0E13\u0E30\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\n\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E42\u0E14\u0E22 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E2D \u0E14\u0E31\u0E1A\u0E40\u0E1A\u0E34\u0E25\u0E22\u0E39 \u0E1E\u0E35 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22) \u0E08\u0E33\u0E01\u0E31\u0E14 \u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 \u0E2D\u0E25\u0E34\u0E2D\u0E31\u0E19\u0E0B\u0E4C \u0E42\u0E01\u0E25\u0E1A\u0E2D\u0E25 \u0E41\u0E2D\u0E2A\u0E0B\u0E34\u0E2A\u0E41\u0E17\u0E19\u0E17\u0E4C \u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E42\u0E14\u0E22\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E21\u0E37\u0E2D\u0E07\u0E44\u0E17\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22 \u0E08\u0E33\u0E01\u0E31\u0E14 (\u0E21\u0E2B\u0E32\u0E0A\u0E19) \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E19\u0E35\u0E49\u0E17\u0E48\u0E32\u0E19\u0E15\u0E01\u0E25\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E1C\u0E48\u0E32\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E32\u0E01\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E21\u0E18\u0E23\u0E23\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48 +66(0)2 305 8492</p></div></div>",
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

function remove_linkPolicy() {
  implibdx.core.updateDom(".contract-detail", function () {
    $(".contract-detail>div a").remove();
    $(".contract-detail>div a").css('display', 'none');
  }, 1000, 5);
}

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
      chkSite() && dataTransfer['EXTERNAL_ID#4'] === "Line Village" && eBaDataLayer.trip_type === "RT" && eBaDataLayer.market === "HK" ? eMailTrigger.lineVillage.send() : false;
      addFontAwesome();
      break;

    case "RTPL":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      addFontAwesome();
      break;

    case "MDFSR":
      console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
      break;
  }
};

jQuery(document).on("plnext:customData:ready", startFNJS);