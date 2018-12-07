// check date Exp
var checkDate = function(tdate,expdate){
	this.tdate = tdate.split("/");
	this.expdate = expdate.split("/");
	this.travel = new Date(this.tdate[2],(this.tdate[1]-1),this.tdate[0]);  // YYYY/MM/DD/H:M:S
	this.expEnd = new Date(this.expdate[2],(this.expdate[1]-1),this.expdate[0])
	// console.log( this.travel + "----"+ this.expEnd);

	if (this.travel <= this.expEnd) return true;
	else return false;

}
var teaserEXP = function(name){
	if(bannerTG[name].condition.displaycon != ""){
		this.expStart =  setDatef(bannerTG[name].condition.start);
		this.expEnd =  setDatef(bannerTG[name].condition.end);
		if(bannerTG[name].condition.displaycon == "Departure") {
			this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
			this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
			this.today = new Date();
			this.eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
			this.eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);
			if(this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd){
				// console.log(name+"=>OK"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
				return true;
			}else{
				// console.log(name+"=>exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn);
				return false;
			}
		}
		if(bannerTG[name].condition.displaycon == "ticketing") {
			this.toDay = new Date();
			// console.log(this.expStart+'-------------'+this.expEnd);
			if(this.toDay <= this.expEnd &&  this.expStart <= this.toDay){
				// console.log(name+"=>OK"+"---date"+this.toDay+"---"+this.expEnd)
				return true;
			}else{
				// console.log(name+"=>exp"+"---date"+this.toDay+"---"+this.expEnd);
				return false;
			}
		}else{
			// console.log(name+"=>no exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
			return true;
		}
	}else{
		// console.log(name+"=>no exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
		return true;
	}
}

var checkEXP = function(name){


	if(bannerTG[name].exp.condition != ""){
		this.expStart =  setDatef(bannerTG[name].exp.start);
		this.expEnd =  setDatef(bannerTG[name].exp.end);

		if(bannerTG[name].exp.condition == "Departure") {

			this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
			this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
			this.today = new Date();

			this.eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
			this.eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);

			if(this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd){
				// console.log(name+"=>OK"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
				return true;
			}else{
				// console.log(name+"=>exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn);
				return false;
			}
		}
		if(bannerTG[name].exp.condition == "ticketing") {
			this.toDay = new Date();
			// console.log(this.expStart+'-------------'+this.expEnd);
			if(this.toDay <= this.expEnd &&  this.expStart <= this.toDay){
				// console.log(name+"=>OK"+"---date"+this.toDay+"---"+this.expEnd)
				return true;
			}else{
				// console.log(name+"=>exp"+"---date"+this.toDay+"---"+this.expEnd);
				return false;
			}
		}


	}else{
		// console.log(name+"=>no exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
		return true;
	}
}
//setDatef
var setDatef = function(arr){
	var setDatef ="";
	var toDay = new Date();
	setDatef = toDay.setFullYear(arr[0],arr[1],arr[2]);
	//console.log(setDatef+"----"+arr);
	return setDatef;
}

var check = {
	period:function(d,a,t,e){
		let toDate = new Date();
		let chkInDate,chkOutDate,toDaydate;
		this.d = d.split("-"); //XXXX-XX-XX
		this.a =a; //Day
		this.t = t.split("-") //
		this.e = e; //optton
		chkInDate = new Date(this.d[0],this.d[1],this.d[2]);
		chkOutDate = new Date(this.t[0],this.t[1],this.t[2]);
		toDaydate = new Date();

		// console.log(chkInDate+'----'+chkOutDate+'-----'+chkInDate.getDate()+this.a)

		if(this.e == 0){
			if(chkInDate >= new Date(toDaydate.setDate(toDaydate.getDate()+this.a))) return true;
			else return false;

		}else{
			if(chkOutDate <= new Date(chkInDate.setDate(chkInDate.getDate()+this.a))) return true;
			else return false;
		}

	},

	lang:function(l){
		this.l = l;
		this.result;
		if(this.l == "TH") return this.result = ['1','b2cth','th'];
		else return this.result = ['7','b2c',''];
	},

	currency:function(c){
		this.c = c;
		if( this.c == "THB" || this.c == "EUR" || this.c == "USD" || this.c == "AUD" || this.c == "JPY" || this.c == "NZD" || this.c == "DKK" || this.c == "HKD" || this.c == "GBP" || this.c == "SGD" || this.c == "SEK" || this.c == "CHF" || this.c == "CNY" || this.c == "TWD" || this.c == "KRW" || this.c == "LKR" || this.c == "AED" || this.c == "PKR" || this.c == "ZAR" || this.c == "OMR" || this.c == "MYR" || this.c == "NOK" || this.c == "KWD"){
			return this.c;
		}else return "THB";
	},
	ADT:function(atxt){
		this.atxt = atxt;
		this.sumAdt = 0;

		for(key in eBaDataLayer.passengers){
			if(eBaDataLayer.passengers[key]["pax_type"] == this.atxt) this.sumAdt++;
		}
		return this.sumAdt;
	},
	chkdate:function(d){
		this.d = d;
		this.spl ;
		this.spl = this.d.split("/");
		// console.log(this.spl);
		return this.spl[2]+"-"+this.spl[1]+"-"+this.spl[0];
	},
	date_travel:function(d){
		this.date = d.split("-");
		return this.date[2]+" "+check.months[eBaDataLayer.language][this.date[1]-1]+" "+this.date[0];
	},
	trip_type:function(t){
		this.t = t;
		this.vDate ;
		if(this.t == "OW" || this.t === undefined){
			this.vDate = check.chkdate(eBaDataLayer.bound[0].arr_date).split("-");
			this.vDate[2] = parseInt(this.vDate[2])+1;
			// console.log(this.vDate);
			return this.vDate[0]+"-"+this.vDate[1]+"-"+this.vDate[2];
		}else return check.chkdate(eBaDataLayer.bound[1].dep_date);
	},
	depCity:function(){
		if(typeof(eBaDataLayer.city_search_in) != "undefined")  return eBaDataLayer.city_search_in; else return eBaDataLayer.bound.slice(-1)[0].dep_city;
	},
	extid:function(val){
		this.eid = val;
		let data_extid = ["KH00015","IN00018","ID00024","LO00007","MY00017","MM00024","PH00029","SG00023","VN00037","AU00036","PK00011","LK00005"];

		for(i = 0;i<= data_extid.length; i++){
			if(this.eid == data_extid[i]) return true;
		}
		return false;
	},
	months:{
		GB:["January","February","March","April","May","June","July","August","September",	"October",	"November",	"December"],
		TH:["\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"]
	},
	defaultLang:function(o,l,d){
		this.obj = o;
		this.language = l;
		this.defLang = d;

		return (this.obj[this.language] !== "" ? this.obj[this.language] : this.obj[this.defLang]);
	}
	// market:function(obj){
	// 	this.market;
	// 	$.each(obj,function(index, el) {
	// 		if( eBaDataLayer.external_id.match(el) ){
	// 			this.market = eBaDataLayer.external_id
	// 		}
	// 	});
		
	// }
}
var modpnr = function(pnr){
	var modDate = new Date();
	//YYYYMMDDhhmmsscccc
	var mergeDate = modDate.getFullYear()+''+(modDate.getMonth()+1)+''+modDate.getDate()+''+modDate.getHours()+''+modDate.getMinutes()+''+modDate.getSeconds()+''+modDate.getMilliseconds();
	return mergeDate+''+pnr.match(/[a-zA-Z0-9]{1}$/)[0];
}

function chkSite(x){
	if(window.location.hostname != 'wav.bibi.amadeus.com'){
		return true;
	}
	return false;
}

var siteLang = function(l){

	switch (eBaDataLayer.language){
		case "CN": return "zh_CN";
				break;
		case "DE": return "de_DE";
				break;
		case "ES": return "en";
				break;
		case "FR": return "fr_FR";
				break;
		case "GB": return "en";
				break;
		case "IT": return "it_IT";
				break;
		case "JP": return "ja_JP";
				break;
		case "KO": return "ko_KR";
				break;
		case "RU": return "en";
				break;
		case "SE": return "en";
				break;
		case "TH": return "en_TH";
				break;
		case "TW": return "zh_TW";
				break;
		default: return "en";
	}
}