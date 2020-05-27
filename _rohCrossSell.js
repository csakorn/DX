var passengerROH = {}
var ROH = {
    createOBJ: function() {
        passengerROH.LanguageId = check.lang(eBaDataLayer.language)[0];
        passengerROH.Cobrand = check.lang(eBaDataLayer.language)[1];
        passengerROH.Currency = check.currency(eBaDataLayer.price_details.currency_code);
        passengerROH.CheckinDate = check.chkdate(eBaDataLayer.bound[0].arr_date);
        passengerROH.CheckoutDate = check.trip_type(eBaDataLayer.trip_type);
        passengerROH.Location = check.depCity();
        passengerROH.adults = check.ADT("ADT");
        passengerROH.children = check.ADT("CHD");
        passengerROH.Infant = check.ADT("INF");
        passengerROH.pnr = eBaDataLayer.pnr_number;
    },
    txt: {
        errorTXT: {
            GB: ['Hotel Offers', 'Need a Hotel? - Find great deals from Royal Orchid Holidays', ],
            TH: ['\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21', '\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e08\u0e32\u0e01 Royal Orchid Holidays', ],
        },
        des: {
            GB: ['Destination', 'Period :'],
            TH: ['\u0e08\u0e38\u0e14\u0e2b\u0e21\u0e32\u0e22\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07', '']
        }
    },
    display_logo: function(st) {
        this.st = st;
        if (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") {
            this.htmlDis = '<section id="roh" class="box-roh"><h3>' + ROH.txt.errorTXT[eBaDataLayer.language][0] + '<img src="https://www.thaiairways.com/static/common/imgscontent/banner/rohlogo-w.png" style="width: 105px;float: right;"></h3><h4>' + ROH.txt.errorTXT[eBaDataLayer.language][1] + '</h4><a target="_blank" href="https://www.royalorchidholidays.com/' + check.lang(eBaDataLayer.language)[2] + '"><img class="box-roh_logoROH" src="http://www.thaiairways.com/static/common/imgscontent/banner/ROH_Logos_Thai.png"></a></section>';
            return this.htmlDis;
        }
    },
    sendData: function() {
    	console.log('----------------------------ROH');
        if ((eBaDataLayer.page_code == "CONF"|| eBaDataLayer.page_code == "RTPL") && (eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB")) {

            let urlROH = (window.location.hostname == "book.thaiairways.com")?'https://www.thaiairways.com/app/roh/':'https://uat.thaiairways.com/app/roh/';
            let idST = 'reservation-details';            

            implibdx.core.updateDom("div.TGINSBannerMenu", function() {



                ROH.createOBJ();

                if ((check.period(passengerROH.CheckinDate, 4, passengerROH.CheckoutDate, 0) === true) && (check.period(passengerROH.CheckinDate, 25, passengerROH.CheckoutDate, 1) === true)) {

                    $.ajax({
                            type: 'POST',
                            url: urlROH,
                            data: passengerROH,
                            dataType: 'json'
                        })
                        .done(function(result) {
                            console.log(result.success);

                            if (result.success != false) {
                                // $("#TGINSBannerMenu").append(addTGBanner.creHTML("HotelsBestOffers_" + eBaDataLayer.language, ""));
                                jumper();

                                // $("#b_container").before(result.data);
                               // $("#car-search").before(result.data);
                               $("#"+idST).append(result.data);

                               
                                $(".box-roh>h4").after('<p style="padding-left: 0.7em;padding-right: 0.7em;">' + ROH.txt.des[eBaDataLayer.language][0] + ' : ' + eBaDataLayer.bound[0].arr_city + ' <br> ' + ROH.txt.des[eBaDataLayer.language][1] + ' ' + check.date_travel(passengerROH.CheckinDate) + ' - ' + check.date_travel(passengerROH.CheckoutDate) + '</p>');
                            } else {
                                $(".HotelsOffers").hide();
                               $("#"+idST).append(ROH.display_logo());

                                // $("#car-search").before(ROH.display_logo());
                                // $("#b_container").before(ROH.display_logo());

                            }

                        })
                        .error(function(e) {
                            console.log(e.statusText)
                            switch (e.statusText) {
                                case "parsererror":
                                     $("#"+idST).append(ROH.display_logo("No Room"));

                                    // $("#car-search").before(ROH.display_logo("No Room"));
                                    // $("#b_container").before(ROH.display_logo("No Room"));

                                    $(".HotelsOffers").hide();
                                    break;
                                case "error":
                                    $("#"+idST).append(ROH.display_logo("Err : 504"));

                                    // $("#car-search").before(ROH.display_logo("Err : 504"));
                                    // $("#b_container").before(ROH.display_logo("Err : 504"));

                                    $(".HotelsOffers").hide();
                                    break;
                            }
                        });
                } else {
                     $("#"+idST).append(ROH.display_logo("No Room"));

                    // $("#car-search").before(ROH.display_logo("No Room"));
                    // $("#b_container").before(ROH.display_logo("No Room"));
                }
            }, 1000, 3);
        } else {
            console.log('ROH - false');
        }
    },
    test:function(){
        console.log('test');
        if(eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB"){
            console.log('-------------------------------',eBaDataLayer.language)

            let urlROH;
            if (window.location.hostname == "book.thaiairways.com") { urlROH = 'https://www.thaiairways.com/app/roh/' } else { urlROH = 'https://uat.thaiairways.com/app/roh/' }
                console.log('------------------------------hostname',urlROH);
            implibdx.core.updateDom("div.TGINSBannerMenu", function() {
                console.log('-----------------------------Run');

            },1000,3);
        }
    }
}

var jumper = function(){
    $(".HotelsOffers").on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#roh").offset().top
        }, 2000);
    })
}