var subscribe = {
	HTML:{
		txt_header : {
			GB:'FOR YOUR FUTURE INFORMATION',
			TH:'\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23'
		},
		txt_checkbox:{
			GB:'<input type="checkbox" name="subscribe" id="subscribe" value="subscribe"> <label for="subscribe">Check this box keep with special offers and important information based on your journey</label>',
			TH:'<input type="checkbox" name="subscribe" id="subscribe" value="subscribe"> <label for="subscribe">\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e4a\u0e01\u0e16\u0e39\u0e01 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19</label>'
		},
		txt_info:{
			GB:'<i class="icon-info-sign heading-icon" aria-hidden="true"></i><span> Click here to <button id="box-btn_subscribe" type="button">Subscribe</button> to THAI UPDATE for regular mailings with the latest special fares, promotions, services and news from the THAI network.<span>',
			TH:'<i class="icon-info-sign heading-icon" aria-hidden="true"></i><span> \u0e01\u0e23\u0e38\u0e13\u0e32\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 <button id="box-btn_subscribe" type="button">Subscribe</button> \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e17\u0e38\u0e01\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19 \u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u0e41\u0e25\u0e30 \u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22 \u0e14\u0e49\u0e27\u0e22\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 THAI UPDATES<span>'
		},
		tagHTML:function(){
			return '<div class="box-subsrcibe"><header class="panel-heading services-policy-heading"><i class="icon-ticket main-icon" aria-hidden="true"></i>'+ subscribe.HTML.txt_header[eBaDataLayer.language]+'</header><p>'+subscribe.HTML.txt_info[eBaDataLayer.language]+'</p></div>'
		}
	},
	sbbAdd:function(){		
		implibdx.core.updateDom("#fare-review-price",function(){
			subscribe.createOBJ();
			switch(eBaDataLayer.page_code){
				case 'CONF' :
				case 'RTPL' :
				if(eBaDataLayer.language == 'GB' || eBaDataLayer.language == 'TH'){

										$("#fare-review-price").before(subscribe.HTML.tagHTML);
					$("button#box-btn_subscribe").on('click', function(event) {
						event.preventDefault();
						let dataGet = 'first_name='+subscribe.obj.data2+'&last_name='+subscribe.obj.data3+'&email='+subscribe.obj.data9;
						if(eBaDataLayer.currency == "AUD") window.open('http://www.pages04.net/thaiairways/Thaiairways/ ','_blank');
						else window.open('http://www.thaiairways.com/en/subscribe/subscribe.page?'+dataGet,'_blank');
					});
				}				
				break;
			}
		},1000,6);
	},
	watch_checkbox:function(){	
		if($(this).prop( "checked" ) === true){		
			console.log($(this).prop( "checked" ))
			$(this).attr('disabled','disabled');			
			subscribe.save_data();
			return true;
		}
		return false;
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
	createOBJ:function(){
		var passengerInfo = {};
		passengerInfo.data1 = dataTransfer['PNR#1_TITLECODE#1'];     		
		passengerInfo.data2 = eBaDataLayer.passengerList[0].first_name;     		
		passengerInfo.data3 = eBaDataLayer.passengerList[0].last_name;     		
		passengerInfo.data4 = eBaDataLayer.passengerList[0].pax_type;     		
		passengerInfo.data5 = eBaDataLayer.trip_type;     		
		passengerInfo.data6 = subscribe.check(eBaDataLayer.bound,'route').toString();     		
		passengerInfo.data7 = eBaDataLayer.date_search_out;     		
		passengerInfo.data8 = eBaDataLayer.date_search_in;     		
		passengerInfo.data9 = emailencrypt(eBaDataLayer.contact_information.email);     		
		passengerInfo.data10 = eBaDataLayer.pnr_nbr;
		passengerInfo.data18 = eBaDataLayer.page_code;
		passengerInfo.data19 = subscribe.check_site();
		passengerInfo.data20 = "subscribe";
		subscribe.obj = passengerInfo;
	},
	check:function(obj,txt){
			this.objkey = obj;
			this.txtkey = txt;
			this.result = [];

			for(i in this.objkey){
				console.log(i+'/////'+this.objkey[i][this.txtkey]);
				this.result[i] = this.objkey[i][this.txtkey];
			}
		return this.result;
	},
	check_site:function(){
		this.url = (window.location.hostname).split('.');
		return this.url[1];
	}
}