var goodservice_india = {
	txtHTML:{
		header:{
			GB:'Good & Service Tax for India',
			TH:'\u0e20\u0e32\u0e29\u0e35\u0e01\u0e32\u0e23\u0e02\u0e32\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22'
		},
		txtBody:{
			TH :'\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e43\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22 \u0e41\u0e25\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 GST tax invoice <a id="gstax" target="_blank" href="javascript:void(0);">\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e14</a>',
			GB : 'Passenger who start traveling flight from India and require GST tax invoice. <a id="gstax" target="_blank" href="javascript:void(0);">Please click.</a>'
		}		
	},
	cHTML:function(x){
		this.lang = x;
		let result = '<div class="box-goodservice_india"><header class="panel-heading services-policy-heading"><i class="icon-ticket" aria-hidden="true"></i>'+goodservice_india.txtHTML.header[this.lang]+'</header><p>'+goodservice_india.txtHTML.txtBody[this.lang]+'</p></div>'
		return result;
	},
	AddData:function(){		
		if( eBaDataLayer.page_code == "PURC" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' &&( eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB" )) {
			implibdx.core.updateDom("div#purc_afterPayment",function(){
				$(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#purc_afterPayment");
				$("#gstax").on('click',function(){
					window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr='+eBaDataLayer.pnr_number+' ','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
				})
			},1000,6);									
		}else if(eBaDataLayer.page_code == "CONF" && eBaDataLayer.bound[0].dep_country == "IN" && eBaDataLayer.currency == 'INR' &&( eBaDataLayer.language == "TH" || eBaDataLayer.language == "GB") ){

			implibdx.core.updateDom("#reservation-details",function(){
				$(goodservice_india.cHTML(eBaDataLayer.language)).insertAfter("#reservation-details");
				$("#gstax").on('click',function(){
					window.open('https://www.thaiairways.com/booking/gsttax/gsttax_en.html?pnr='+eBaDataLayer.pnr_number+' ','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=870,height=600');
				})
			},1000,6);
		}
	}
}
