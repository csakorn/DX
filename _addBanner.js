function runWidget(){
	implibdx.core.updateDom("div#TGINSBanner", function(){

		// wt_Takeme.add();
		// if( ['IT'].indexOf(eBaDataLayer.bound[0].arr_country)>0 ){
		// 	console.log('NODISPLAY');
		// }else{

		// 	rentalCar.add()
		// 	wt_booking.add();
		// 	ROH.sendData();
		// }

		switch (eBaDataLayer.bound[0].dep_country){
			case "CN": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "DE": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "ES": 
				// rentalCar.add()
				// wt_booking.add();
				// ROH.sendData();
			break;
			case "FR": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "GB": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "IT": 				
			break;
			case "JP": 				
			break;
			case "KO": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "RU": 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			case "SE": 
				//rentalCar.add()
				//wt_booking.add();
				//ROH.sendData();
				if(chkMarket(eBaDataLayer.market) == true){
					removePinkbanner('#PinkBanner_1');
					removePinkbanner('#PinkBanner_4');
				}
				
			break;
			case "TH": 
				rentalCar.add()			
				wt_booking.add();
				ROH.sendData();
			break;
			case "TW": 
				// rentalCar.add()
				wt_booking.add();
				ROH.sendData();
			break;
			default: 
				rentalCar.add()
				wt_booking.add();
				ROH.sendData();
		}
        // teaserDisplay.addTeaser();
        displayTeaser.add();		

	},1000,5)
}

function pinkbanner_remove(){

	var market = {
		CH_NORMAL:{
			r_pinkbanner:['#PinkBanner_1','#PinkBanner_4']
		}
	}

	implibdx.core.updateDom("div#pinkbanner", function(){
		if(chkMarket(eBaDataLayer.market) == true){
			for(x in market.CH_NORMAL.r_pinkbanner){
				removePinkbanner(market.CH_NORMAL.r_pinkbanner[x]);
			}
		}else console.log(eBaDataLayer.market);
	},1000,5)
}

var displayTeaser = {
	add:function(){
		let href = "";
		let img ="";

		for(keys in bannerTG){
			// (keys != undefined)?console.log(keys):console.log("xxx")

			implibdx.core.updateDom("div.TGINSBanner", function() {
				$("#TGINSBannerMenu").append(displayTeaser.cHTML(keys));
			},1000,5);

				// console.log(displayTeaser.cHTML(keys))
			// if((bannerTG[keys].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && displayTeaser.EXP(keys) == true){
			// 	console.log("OK addTeaser",displayTeaser.EXP(keys))
			// 	// href = (bannerTG[keys].image.linkURL[eBaDataLayer.language] !== undefined) ? bannerTG[keys].image.linkURL[eBaDataLayer.language]:bannerTG[keys].image.linkURL['GB'];
			// 	// img = (bannerTG[keys].image.URL[eBaDataLayer.language] !== undefined)? bannerTG[keys].image.URL[eBaDataLayer.language]:bannerTG[keys].image.URL['GB'];
			// 	// console.log('-------------------->',href,img);
			// }
		}
	},
	chkMarket:function(m){
		console.log(m)
		
		for(keys in  m){
		var s = new RegExp("["+m[keys]+"]{2}");
		// console.log(m[keys])
			if(m[keys] === 'All'){
				console.log("All")
				return true;
			}else if(s.test(eBaDataLayer.market) == true){
				console.log(m +"------"+ eBaDataLayer.market);
				return true;
			}else return false;
		}
	},
	EXP:function(name){			
		
		if(bannerTG[name].condition.displaycon != ""){
			console.log('displaycon != Null',name);
			// return name;

			if (bannerTG[name].condition.displaycon == "Departure") {
				this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
				this.dIn = (eBaDataLayer.bound[1].dep_date).split("/");
				this.today = new Date();
				this.eBaDateOut = setDatef([this.dOut[2], this.dOut[1] - 1, this.dOut[0]]);
				this.eBaDateIn = setDatef([this.dIn[2], this.dIn[1] - 1, this.dIn[0]]);
				if (this.expStart <= this.eBaDateOut && this.eBaDateOut <= this.expEnd && this.expStart <= this.eBaDateIn && this.eBaDateIn <= this.expEnd && chkMarket(bannerTG[name].condition.market) === true) {
        			// console.log(name+"=>OK"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
       				if(displayTeaser.chkMarket(bannerTG[name].condition.market) == true){
       					return true;
       				}else return false;
    			} else {
    				console.log(name + "=>exp" + "---date" + this.eBaDateOut + "---" + this.eBaDateIn);
    				return false;
    			}
			}
			if (bannerTG[name].condition.displaycon == "ticketing") {
			    this.toDay = new Date();
			    // console.log(this.expStart+'-------------'+this.expEnd);
			    if (this.toDay <= this.expEnd && this.expStart <= this.toDay && chkMarket(bannerTG[name].condition.market) === true) {
			        // console.log(name+"=>OK"+"---date"+this.toDay+"---"+this.expEnd)
			        if(displayTeaser.chkMarket(bannerTG[name].condition.market) == true){
			        	return true;
			        }else return false;
			    } else {
			        console.log(name + "=>exp" + "---date" + this.toDay + "---" + this.expEnd);
			        return false;
			    }
			} else {
			    // console.log(name+"=>no exp"+"---date"+this.eBaDateOut+"---"+this.eBaDateIn)
			    // (chkMarket(bannerTG[name].condition.market) === true)? return true: return false;
			    if (chkMarket(bannerTG[name].condition.market) === true) {
			        return true;
			    } else {
			        return false;
			    }
			}
        }else{
			
			if(displayTeaser.chkMarket(bannerTG[name].condition.market) == true){
				console.log('displaycon == Null',name);
				return true;
            }else{
				console.log('....')
				return false;
            }
        }
	},
	cHTML:function(name){
		let objname = name;
		let href = "";
		let img ="";
		console.log("cHTML",name);
		if((bannerTG[objname].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && displayTeaser.EXP(objname) == true){
			 // console.log('-----cHTML-------->',displayTeaser.EXP(objname),(bannerTG[objname].condition.pagecode).indexOf(eBaDataLayer.page_code));
			 href = (bannerTG[objname].image.linkURL[eBaDataLayer.language] !== undefined) ? bannerTG[objname].image.linkURL[eBaDataLayer.language]:bannerTG[objname].image.linkURL['GB'];
			 img = (bannerTG[objname].image.URL[eBaDataLayer.language] !== undefined)? bannerTG[objname].image.URL[eBaDataLayer.language]:bannerTG[objname].image.URL['GB'];
			 // console.log('-------------------->',href,img);
			 return "<aside class=\""+bannerTG[objname].class+"\"><a href=\""+href+displayTeaser.param_obj(bannerTG[objname].param)+"\" target=\""+bannerTG[objname].target+"\" "+bannerTG[objname].onClick[eBaDataLayer.page_code]+"><img src=\""+img+"\" alt=\""+bannerTG[objname].image.alt+"\"></a></aside>";

		}
	},
	param_obj:function(obj){
		let result = {};
		for(key in obj){
				if(obj !== ''){
					result[key] = eBaDataLayer[obj[key]];
				}else{
					return '';
				}
		}
		return '?'+$.param(result)
	}
}



// var addTeaser = function(){
// 	//implibdx.core.updateDom("div#TGINSBanner", function(){

// 		for(keys in bannerTG){
// 			if( teaserDisplay.check(keys) === true){
// 				console.log('add',keys)
// 				$("#TGINSBannerMenu").append("<aside class=\""+bannerTG[keys].class+"\"><a href=\""+bannerTG[keys].image.linkURL[eBaDataLayer.language]+bannerTG[keys].param+"\" target=\""+bannerTG[keys].target+"\" "+bannerTG[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+bannerTG[keys].image.URL[eBaDataLayer.language]+"\" alt=\""+bannerTG[keys].image.alt+"\"></a></aside>");
// 				// $("#TGINSBannerMenu").append("<aside class=\""+bannerTG[keys].class+"\"><a href=\""+bannerTG[keys].image.linkURL+bannerTG[keys].param+"\" target=\""+bannerTG[keys].target+"\" "+bannerTG[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+bannerTG[keys].image.URL[eBaDataLayer.language]+"\" alt=\""+bannerTG[keys].image.alt+"\"></a></aside>");
// 			}
// 		}

// }
// var teaserDisplay = {
// 	objData:bannerTG,
// 	addTeaser:function(){

//            implibdx.core.updateDom("div.TGINSBanner", function() {
// 			for(keys in teaserDisplay.objData){

// 				if( teaserDisplay.check(keys) === true){
// 					let href = (teaserDisplay.objData[keys].image.linkURL[eBaDataLayer.language] !== undefined)	?teaserDisplay.objData[keys].image.linkURL[eBaDataLayer.language]:teaserDisplay.objData[keys].image.linkURL['GB'];
// 					let img = (teaserDisplay.objData[keys].image.URL[eBaDataLayer.language] !== undefined)? teaserDisplay.objData[keys].image.URL[eBaDataLayer.language]:teaserDisplay.objData[keys].image.URL['GB'];
// 					// console.log('add',keys);
// 					// console.log(href,img);
// 					$("#TGINSBannerMenu").append("<aside class=\""+teaserDisplay.objData[keys].class+"\"><a href=\""+href+teaserDisplay.param_obj(teaserDisplay.objData[keys].param)+"\" target=\""+teaserDisplay.objData[keys].target+"\" "+teaserDisplay.objData[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+img+"\" alt=\""+teaserDisplay.objData[keys].image.alt+"\"></a></aside>");
// 				// $("#TGINSBannerMenu").append("<aside class=\""+bannerTG[keys].class+"\"><a href=\""+bannerTG[keys].image.linkURL+bannerTG[keys].param+"\" target=\""+bannerTG[keys].target+"\" "+bannerTG[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+bannerTG[keys].image.URL[eBaDataLayer.language]+"\" alt=\""+bannerTG[keys].image.alt+"\"></a></aside>");
// 				}
// 			}
// 		},1000,5);
// 	},
// 	check:function(n){
// 		if(	(teaserDisplay.objData[n].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && teaserEXP(n) === true ){
// 			if(teaserDisplay.objData[n].condition.chk === null){
// 				return true;
// 			}else{
// 				// console.log(eBaDataLayer[teaserDisplay.objData[n].condition.chk.data[0]][teaserDisplay.objData[n].condition.chk.data[1]])
// 				//console.log('EXPDATE');
// 				// if( (/teaserDisplay.objData[n].condition.chk.rex/).test(eBaDataLayer[teaserDisplay.objData[n].condition.chk.data[0]][teaserDisplay.objData[n].condition.chk.data[1]][teaserDisplay.objData[n].condition.chk.data[2]]) ){
// 				// 	return true;
// 				// }
// 			}
// 		}else{
// 			console.log('NO');
// 			return false;
// 		}
// 	},
// 	param_obj:function(obj){
// 		let result = {};
// 		for(key in obj){
// 			// if(typeof obj[key] === "object"){
// 			// 	console.log('5555');
// 			// }else{
// 				// console.log(eBaDataLayer[obj[key]]);
// 				if(obj !== ''){
// 					result[key] = eBaDataLayer[obj[key]];
// 				}else{
// 					return '';
// 				}
// 			// }
// 		}
// 		// console.log($.param(result));
// 		return '?'+$.param(result)
// 	}
// }


// $("#TGINSBannerMenu").append()

var addTGBanner = {
	creHTML: function(name,param){
		this.banner = name;
		this.param = param;
		this.htmlBN = "";
		this.code = eBaDataLayer.page_code;
		if(checkEXP(this.banner) == true ){
			this.htmlBN = "<aside class=\""+bannerTG[this.banner].class+"\"><a href=\""+bannerTG[this.banner].link+this.param+"\" target=\""+bannerTG[this.banner].target+"\" "+bannerTG[this.banner].onClick[this.code]+"><img src=\""+bannerTG[this.banner].image+"\" alt=\""+bannerTG[this.banner].alt+"\"></a></aside>";
		}else{
			return this.htmlBN = "";
		}
		return this.htmlBN;
	}
}



