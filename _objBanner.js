
var bannerTG = {
    eServe:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_EN.jpg",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_TH.jpg"
            },
            alt:"Web Satisfaction Survey",
            linkURL:{
                GB:"http://www.thaiairways.com/en_TH/satisfaction_survey/survey_form_pnr.page",
                TH:"http://www.thaiairways.com/th_TH/satisfaction_survey/survey_form_pnr.page"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"_gaq.push(['_trackEvent', 'TH', 'eServey-CONF', 'eServey'])\"",
            RTPL:"onclick=\"_gaq.push(['_trackEvent', 'TH', 'eServey-RTPL', 'eServey'])\""
        },
        param:{
            pnr:"pnr_nbr"
        },
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL'],
            market:['All']
        }
    },
    HotelsBestOffers:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_EN_CONF.jpg",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_TH_CONF.jpg"
            },
            alt:"Fly With Thai | Get Hotels Best Offers",
            linkURL:{
                GB:"javascript:void(0)",
                TH:"javascript:void(0)"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu HotelsOffers",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"\"",
            RTPL:"onclick=\"\""
        },
        param:"",
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL'],
            market:['TH','XX','YY']
        }
    },
    BaliTreat:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/baliTreatPrivilege_banner.jpg"              
            },
            alt:"Bali Treat is special privilege",
            linkURL:{
                GB:"https://www.thaiairways.com/en_ID/offer/privileges/Privilege.page?utm_source=&utm_medium=website&utm_campaign=click-BaliTreat-ConfirmationPage"                  
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu BaliTreat",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"_gaq.push(['_trackEvent', 'ID', 'Offers-CONF', 'BaliTreat'])\"",
            RTPL:"onclick=\"_gaq.push(['_trackEvent', 'ID', 'Offers-RTPL', 'BaliTreat'])\""
            
        },
        param:"",
        condition:{
            start:["2019","04","3"],
            end:["2019","11","31"],
            displaycon:"ticketing",          
            chk:{
                rex:'[DPS]{3}',
                data:['bound','route']
            },
            pagecode:['CONF','RTPL'],
            market:['TH','XX','YY']
        }
    },
    HolidayTaxis:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisGB.png",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/HolidayTaxisTH.png"          
            },
            alt:"HolidayTaxis",
            linkURL:{
                GB:"https://www.holidaytaxis.com/en/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page",
                TH:"https://www.holidaytaxis.com/th/?ref=THAI&currency=THB&utm_source=ThaiAiways.com&utm_medium=banner&utm_campaign=confirmation-page"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'HolidayTaxis\')\""
        },
        param:"",
        condition:{
            start:"",
            end:"",
            displaycon:"",          
            chk:null,
            pagecode:['CONF','RTPL'],
            market:['TH','XX','YY']
        }
    },
    Bellugg:{
        image:{
            URL:{
                GB:"http://www.thaiairways.com/static/common/imgscontent/banner/Bellugg-bag.jpg",
                TH:"http://www.thaiairways.com/static/common/imgscontent/banner/Bellugg-bag.jpg"
            },
            alt:"Bellugg",
            linkURL:{
                GB:"https://www.bellugg.com/thaiairways/",
                TH:"https://www.bellugg.com/thaiairways/"
            }           
        },
        target:"_blank",
        class:"box_TGINSBannerMenu",
        ADisplay:"",
        onClick:{
            CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Bellugg\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
            RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Bellugg\')\""
        },
        param:"",
        condition:{
            start:["2018","07","6"],
            end:["2018","10","16"],
            displaycon:"Departure",          
            chk:null,
            pagecode:['CONF','RTPL'],
            market:['TH','XX','YY']
        }
    }
}



// var bannerTG = {
// 	eServe_GB:{
// 		image:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_EN.jpg",
// 		alt:"Web Satisfaction Survey",
// 		link:"http://www.thaiairways.com/en_TH/satisfaction_survey/survey_form_pnr.page",
// 		onClick:{
//  	    	CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\')\""
// 		},
// 		target:"_blank",
// 		class:"box_TGINSBannerMenu",
// 		ad:"",
// 		exp:{
// 			start:"",
//  			end:"",
//  			condition:""
// 		}
// 	},
// 	eServe_TH:{
// 		image:"http://www.thaiairways.com/static/common/imgscontent/banner/survey_banne_TH.jpg",
// 		alt:"Web Satisfaction Survey",
// 		link:"http://www.thaiairways.com/th_TH/satisfaction_survey/survey_form_pnr.page",
// 		onClick:{
//  	    	CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'WebSatisfactionSurvey\')\""
// 		},
// 		target:"_blank",
// 		class:"box_TGINSBannerMenu",
// 		ad:"",
// 		exp:{
// 			start:"",
// 			end:"",
// 			condition:""
// 		}
// 	},

//  	Allianz_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/insurance/AGA.jpg",
//  		alt:"Allianz",
//  		link:"https://www.magroup-online.com/wl/TGA/TH/en/travel-insurance-quote/",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\', \'99\', \'WT.ac\', \'Travel_Insurance_en:Allianz_completebooking\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\', \'99\', \'WT.ac\', \'Travel_Insurance_en:Allianz_completebooking\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBanner--3box",
//  		ad:"Travel_Insurance_en:Allianz_completebooking",
//  		exp : {
//  			start:"",
//  			end:"",
//  			condition:""
//  		}
//  	},
//  	bangkok_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/insurance/BKK.jpg",
//  		alt:"bangkokinsurance",
//  		link:"http://www.bangkokinsurance.com/online/indexTG.asp?language=eng",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack( \'WT.dl\',\'99\', \'WT.ac\', \'Travel_Insurance_en:Bangkok_completebooking\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack( \'WT.dl\',\'99\', \'WT.ac\', \'Travel_Insurance_en:Bangkok_completebooking\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBanner--3box",
//  		ad:"Travel_Insurance_en:Bangkok_completebooking",
//  		exp : {
//  			start:"",
//  			end:"",
//  			condition:""
//  		}
//  	},
//  	FlyWithThai_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/GetFreeLimousineService_en.jpg",
//  		alt:"Fly With Thai | Get Free Limousine Service",
//  		link:"http://blacktie-limousine.com/tgpromo ",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'blacktie\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'blacktie\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  				start:["2017","04","1"],
//  				end:["2017","06","31"],
//  				condition:"Departure"
//  			}
//  	},
//  	FlyWithThai_TH:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/GetFreeLimousineService_th.jpg",
//  		alt:"Fly With Thai | Get Free Limousine Service",
//  		link:"http://blacktie-limousine.com/tgpromo ",
//  		onClick:{
//  	    	CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'blacktie\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
// 			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'blacktie\')\""
// 		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  				start:["2017","04","1"],
//  				end:["2017","06","31"],
//  				condition:"Departure"
//  			}
//  	},
//  	HotelsBestOffers_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_EN_CONF.jpg",
//  		alt:"Fly With Thai | Get Hotels Best Offers",
//  		link:"javascript:void(0)",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\')\""
//  		},
//  		target:"",
//  		class:"box_TGINSBannerMenu HotelsOffers",
//  		ad:"",
//  		exp : {
//  				start:"",
//  				end:"",
//  				condition:""
//  			}
//  	},
//  	HotelsBestOffers_TH:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/ExclusiveROH_TH_CONF.jpg",
//  		alt:"Fly With Thai | Get Hotels Best Offers",
//  		link:"javascript:void(0)",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Flights and Hotels\')\""
//  		},
//  		target:"",
//  		class:"box_TGINSBannerMenu HotelsOffers",
//  		ad:"",
//  		exp : {
//  				start:"",
//  				end:"",
//  				condition:""
//  			}
//  	},THAI_Anniversary_VISA:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/VISA2017_280X180.jpg",
//  		alt:"THAI57 Anniversary | VISA",
//  		link:"https://www.vppreservation.com/",
//  		onClick:{
//  	    	CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'THAIAnniversary57 VISA\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
// 			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'THAIAnniversary57 VISA\')\""
// 		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  				start:["2017","08",'15'],
//  				end:["2017","11","31"],
//  				condition:"ticketing"
//  			}
//  	},
//  	HappyTourist_sim_TG_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/TG-Collaborate-280x180px-eng.jpg",
//  		alt:"HAPPY TOURIST SIM - THAILAND",
//  		link:"http://www.dtac.co.th/en/camp/prepaid/happy-tourist-sim-tg.html",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  			start:["2017","04",'8'],
//  			end:["2017","06","31"],
//  			condition:"ticketing"
//  		}
//  	},
//  	HappyTourist_sim_TG_CN:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/TG-Collaborate-280x180px-chinese.jpg",
//  		alt:"HAPPY TOURIST SIM - THAILAND",
//  		link:"http://www.dtac.co.th/cn/camp/prepaid/happy-tourist-sim-tg.html",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  			start:["2017","04",'8'],
//  			end:["2017","06","31"],
//  			condition:"ticketing"
//  		}
//  	},
//  	HappyTourist_sim_TG_KO:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/TG-Collaborate-280x180px-korean.jpg",
//  		alt:"HAPPY TOURIST SIM - THAILAND",
//  		link:"http://www.dtac.co.th/kr/camp/prepaid/happy-tourist-sim-tg.html",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Happy Tourist SIM\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  			start:["2017","04",'8'],
//  			end:["2017","06","31"],
//  			condition:"ticketing"
//  		}
//  	},
//  	Rentalcars_GB:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/conf-page-EN.jpg",
//  		alt:"Rentalcars : 5% discount",
//  		link:"https://www.rentalcars.com/?affiliateCode=thaiairways&enabler=thaiairways",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Rentalcars\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Rentalcars\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  			start:["2017","09",'31'],
//  			end:["2017","10","30"],
//  			condition:"ticketing"
//  		}
//  	},
//  	Rentalcars_TH:{
//  		image:"http://www.thaiairways.com/static/common/imgscontent/banner/conf-page-TH.jpg",
//  		alt:"Rentalcars : 5% discount",
//  		link:"https://www.rentalcars.com/?affiliateCode=thaiairways&enabler=thaiairways",
//  		onClick:{
//  			CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Rentalcars\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//  			RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Rentalcars\')\""
//  		},
//  		target:"_blank",
//  		class:"box_TGINSBannerMenu",
//  		ad:"",
//  		exp : {
//  			start:["2017","09",'31'],
//  			end:["2017","10","30"],
//  			condition:"ticketing"
//  		}
//  	},
//     MAYAMusic:{
//         image:"http://www.thaiairways.com/static/common/imgscontent/banner/MAYA-TA-Webbanner.jpg",
//         alt:"MAYA Mucis Festival",
//         link:"http://www.thaiairways.com/en_SG/form/form_maya_music.page",
//         onClick:{
//             CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'MAYAMucisFestival\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//             RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'MAYAMucisFestival\')\""
//         },
//         target:"_blank",
//         class:"box_TGINSBannerMenu",
//         ad:"",
//         exp : {
//             start:["2017","10",'07'],
//             end:["2017","11","11"],
//             condition:"Departure"
//         }
//     },
//     // voucher_BRU:{
//     //     image:"http://www.thaiairways.com/static/common/imgscontent/banner/MAYA-TA-Webbanner.jpg",
//     //     alt:"MAYA Mucis Festival",
//     //     link:"http://www.thaiairways.com/en_SG/form/form_maya_music.page",
//     //     onClick:{
//     //         CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Voucher_BRU\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//     //         RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'Voucher_BRU\')\""
//     //     },
//     //     target:"_blank",
//     //     class:"box_TGINSBannerMenu",
//     //     ad:"",
//     //     exp : {
//     //         start:["2018","05",'25'],
//     //         end:["2018","11","31"],
//     //         condition:"Departure"
//     //     }
//     // },
//    	BaliTreat:{
//         image:"http://www.thaiairways.com/static/common/imgscontent/banner/baliTreatPrivilege_banner.jpg",
//         alt:"Bali Treat is special privilege",
//         link:"https://www.thaiairways.com/en_ID/plan_my_trip/Special_fare/Offers_Booking/Privilege.page",
//         onClick:{
//             CONF:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'BaliTreat\',\'WT.totalamount\',\'\',\'WT.currcode\',\'\',\'WT.bookconfirm\',\'\',\'WT.bookfromcity\',\'\',\'WT.booktocity\',\'\',\'WT.thaicountry\',\'\',\'WT.triptype\',\'\',\'WT.bcabin\',\'\',\'WT.ceco\',\'\',\'WT.flight_numbers\',\'\',\'WT.route\',\'\',\'WT.office_id\',\'\',\'WT.rloc\',\'\',\'WT.external_id\',\'\',\'WT.paytype\',\'\',\'WT.site\',\'\',\'WT.depdate\',\'\')\"",
//             RTPL:"onclick=\"dcsMultiTrack(\'WT.dl\',\'99\',\'WT.ac\',\'BaliTreat\')\""
//         },
//         target:"_blank",
//         class:"box_TGINSBannerMenu",
//         ad:"",
//         exp : {
//             start:"",
//             end:"",
//             condition:""
//         }
//     }

// }

