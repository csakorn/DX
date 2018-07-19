var passenger = {};
var promocode = function(){

			passenger.passenger =[];
			passenger.total_passenger = eBaDataLayer.passengerList.length;
			passenger.promocode = dataTransfer["EXTERNAL_ID#10"];
			passenger.PNR = eBaDataLayer.pnr_number;
			passenger.bound = [];

			$.each(eBaDataLayer.passengerList, listPassenger);
			$.each(eBaDataLayer.bound,bound);

			function bound(r,i){
				this.item = i;
				this.r = r;
				this.b = {};
				for(x in this.item){
					if(x == "flight_numbers" || x == "route" || x == "arr_date" || x =="dep_date"){
						this.b[x] = this.item[x];
					}
				}
				passenger.bound[this.r] = this.b;

							}

			function listPassenger(key, val) {
				this.item = val;
				this.k = key;
				this.b = {};
				for (x in this.item) {
					if (x == 'first_name' || x == "last_name"){
						this.b[x] = this.item[x]
					}
				}
				passenger.passenger[this.k] = this.b;
			}


					$.ajax({
				type : 'POST',
				url : 'https://www.thaiairways.com/app/bookingbox/promocode_usage',
				data : passenger,
				dataType : 'json',
				encode : true
			})
			.done(function(d) {console.log(d.success)})
			.error(function(e){console.log(e)});
}

var sendProCode = function(){
	if(dataTransfer["EXTERNAL_ID#10"] != ""){
		implibdx.core.updateDom("div.TGINSBannerMenu",function(){
		promocode();

		},1000,6);
	}
}