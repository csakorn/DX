function runWidget(){
	implibdx.core.updateDom("div#TGINSBanner", function(){

		// wt_Takeme.add();
		if( ['IT'].indexOf(eBaDataLayer.bound[0].arr_country)>0 ){
			console.log('NODISPLAY');
		}else{
			
			rentalCar.add()
			wt_booking.add();
			ROH.sendData();
		}
		
        teaserDisplay.addTeaser();
		

	},1000,5)
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
var teaserDisplay = {
	objData:bannerTG,
	addTeaser:function(){

           implibdx.core.updateDom("div.TGINSBanner", function() {
			for(keys in teaserDisplay.objData){

				if( teaserDisplay.check(keys) === true){
					let href = (teaserDisplay.objData[keys].image.linkURL[eBaDataLayer.language] !== undefined)	?teaserDisplay.objData[keys].image.linkURL[eBaDataLayer.language]:teaserDisplay.objData[keys].image.linkURL['GB'];
					let img = (teaserDisplay.objData[keys].image.URL[eBaDataLayer.language] !== undefined)? teaserDisplay.objData[keys].image.URL[eBaDataLayer.language]:teaserDisplay.objData[keys].image.URL['GB'];
					// console.log('add',keys);
					// console.log(href,img);
					$("#TGINSBannerMenu").append("<aside class=\""+teaserDisplay.objData[keys].class+"\"><a href=\""+href+teaserDisplay.param_obj(teaserDisplay.objData[keys].param)+"\" target=\""+teaserDisplay.objData[keys].target+"\" "+teaserDisplay.objData[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+img+"\" alt=\""+teaserDisplay.objData[keys].image.alt+"\"></a></aside>");
				// $("#TGINSBannerMenu").append("<aside class=\""+bannerTG[keys].class+"\"><a href=\""+bannerTG[keys].image.linkURL+bannerTG[keys].param+"\" target=\""+bannerTG[keys].target+"\" "+bannerTG[keys].onClick[eBaDataLayer.page_code]+"><img src=\""+bannerTG[keys].image.URL[eBaDataLayer.language]+"\" alt=\""+bannerTG[keys].image.alt+"\"></a></aside>");
				}
			}
		},1000,5);
	},
	check:function(n){
		if(	(teaserDisplay.objData[n].condition.pagecode).indexOf(eBaDataLayer.page_code) >= 0 && teaserEXP(n) === true ){
			if(teaserDisplay.objData[n].condition.chk === null){
				return true;
			}else{
				// console.log(eBaDataLayer[teaserDisplay.objData[n].condition.chk.data[0]][teaserDisplay.objData[n].condition.chk.data[1]])
				//console.log('EXPDATE');
				// if( (/teaserDisplay.objData[n].condition.chk.rex/).test(eBaDataLayer[teaserDisplay.objData[n].condition.chk.data[0]][teaserDisplay.objData[n].condition.chk.data[1]][teaserDisplay.objData[n].condition.chk.data[2]]) ){
				// 	return true;
				// }
			}
		}else{
			console.log('NO');
			return false;
		}
	},
	param_obj:function(obj){
		let result = {};
		for(key in obj){
			// if(typeof obj[key] === "object"){
			// 	console.log('5555');
			// }else{
				// console.log(eBaDataLayer[obj[key]]);
				if(obj !== ''){
					result[key] = eBaDataLayer[obj[key]];
				}else{
					return '';
				}
			// }
		}
		// console.log($.param(result));
		return '?'+$.param(result)
	}
}


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



