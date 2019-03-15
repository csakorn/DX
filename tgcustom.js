
var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

const objTagScript = {
  fbpixel_DK:{
    desElement_ID:'main-layout-bottom',   
    txtScript:{
      script:{
        txt:"!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '2242330416020074');fbq('track', 'PageView');"     
      },
      noscript:{
        txt:"<img height=\"1\" width=\"1\"src=\"https://www.facebook.com/tr?id=2242330416020074&ev=PageView&noscript=1\"/>"
      }
    }
  }
}

function addScriptTG(nameOBJ){
  let obj = objTagScript[nameOBJ];
  let st1 = document.getElementById(obj.desElement_ID);
  let st2 = Object.keys(obj.txtScript);
  let createAttr,txtNode;
  let dataBooking = eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC'?"fbq('track', 'Purchase',"+objDataBooking()+")":'';
  st2.forEach((item)=>{
    createAttr = document.createElement(item)
    txtNode = document.createTextNode(obj['txtScript'][item]['txt']+dataBooking)
    createAttr.appendChild(txtNode)
    st1.appendChild(createAttr)
  })
}

const objDataBooking = ()=>{
  return JSON.stringify({
      connect_name: eBaDataLayer.page_code === 'CONF'?modpnr(eBaDataLayer.pnr_nbr):"",
      varlue: eBaDataLayer.page_code === 'CONF' || eBaDataLayer.page_code === 'PURC'?eBaDataLayer.total_price:"",
      currency:eBaDataLayer.currency
  })
}

var _eMailTrigger ={
	baliprivilege:{
        send:function(){           
            
            if( _eMailTrigger.chkEXP(["2019","02","13"],["2019","02","17"],"null","null","baliprivilege","NO") === true && eBaDataLayer.page_code == "CONF" && dataTransfer.PAYMENTTYPE == "EXT"){
            	implibdx.core.updateDom("div.TGINSBannerMenu", function() {
                    chkSite()?console.log("baliprivilege"):console.log(_eMailTrigger.obj);
                
                    if (_eMailTrigger.chkCountry(_eMailTrigger.baliprivilege.condition_country,'eBaDataLayer',/[DPS]/) === true && ["BKK","CNX","CEI","HDY","KKC","USM","KBV","LPT","HGN","NAW","HKT","THS","URT","TDX","UBP","UTH"].indexOf(eBaDataLayer.bound["0"].dep_airport) >= 0){
                        $.ajax({
                            type: 'POST',
                            url: 'https://www.thaiairways.com/app/form/api/postdataamds/',
                            data: _eMailTrigger.obj,
                            dataType: 'json'
                        }).done(function(result) {
                            console.log(result.success);
                        }).error(function(e) {
                            console.log(e.statusText)
                        });

                    }else console.log('country!=');              
            	},1000,6);

            }else console.log('error : senddata')
        },
        condition_country:["DPS"]
    },
    createOBJ:function(){
        let cOBJ = {
            pnr: eBaDataLayer.pnr_number,
            firstname: eBaDataLayer.passengerList[0].first_name,
            lastname: eBaDataLayer.passengerList[0].last_name,
            email: eBaDataLayer.contact_information.email          
        };
        _eMailTrigger.obj = cOBJ;
    },
    chkEXP:function(C,H,E,D,K,P){
        
        const expStart = setDatef(C),expEnd =setDatef(H), expBuy = (E !== "null")?setDatef(E):"null", expBuyStart = (D !== "null")?setDatef(D):"null";
        this.postpone = P;
        this.project = K;
        this.dOut = (eBaDataLayer.bound[0].dep_date).split("/");
        this.dIn = (eBaDataLayer.bound[1] !== undefined)?(eBaDataLayer.bound[1].dep_date).split("/"):(eBaDataLayer.bound[0].dep_date).split("/");
        this.today = new Date();
        
        const eBaDateOut =  setDatef([this.dOut[2],this.dOut[1]-1,this.dOut[0]]);
        const eBaDateIn =  setDatef([this.dIn[2],this.dIn[1]-1,this.dIn[0]]);
        
        console.log('expStart='+expStart+'\n','eBaDateOut='+eBaDateOut,'expBuy='+expBuy,'expEnd='+expEnd,'expBuyStart='+expBuyStart)


        if(expBuy == "null"){
            if(expStart <= this.today && this.today <= expEnd){//check Sales period
                _eMailTrigger.createOBJ();           
                _eMailTrigger.obj.project = this.project;
                return true;

            }else{ 
                console.log(expStart,this.today,expBuy)
                return false;
            }
        }else{
            // console.log(expStart,expEnd,expBuy,expBuyStart)
            if(expStart <= this.today && this.today <= expEnd && this.postpone == "NO"){                
                if(expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && eBaDateIn <= expBuy){
                    _eMailTrigger.createOBJ();           
                    _eMailTrigger.obj.project = this.project;
                    return true;
                }else{                     
                    console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                    return false;
                }
            }else if(expStart <= this.today && this.today <=expEnd && expBuyStart <= eBaDateOut && eBaDateOut <= expBuy && this.postpone == "YES"){
                    _eMailTrigger.createOBJ();           
                    _eMailTrigger.obj.project = this.project;
                    console.log("ok UK")
                    return true;
            }else{ 
                // console.log(expStart,this.today,expBuy)
                console.log(expStart,eBaDateOut,expBuy,expEnd,expBuyStart)
                // console.log("xx")
                return false;

            }
        }
    },
    chkCountry:function(c,h,k){
        const nameCountry = c, nameOBJ = window[h], rxg = k;  
        // if(eBaDataLayer == "CONF"){
            for(i in nameOBJ["bound"]){
                    if(nameCountry.indexOf(nameOBJ["bound"][i].dep_airport)>=0){
                        console.log('xxx')
                        console.log(nameOBJ["bound"][i].dep_airport);
                        return true;
                    }
            }
        // }          
    }
}

var startFNJS = function startFNJS() {
    
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
              // implibdx.core.updateDom("footer#main-layout-bottom",function(){
              //   (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
              // },1000,6);
          break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            // implibdx.core.updateDom("footer#main-layout-bottom",function(){
            //     (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
            //   },1000,6);
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
            // implibdx.core.updateDom("footer#main-layout-bottom",function(){
            //     (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
            //   },1000,6);
            
            break;
        case "CONF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
            chkSite() === true?_eMailTrigger.baliprivilege.send():console.log('baliprivilege');
           
            break;

        case "RTPL":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);

            break;
        case "MDFSR":

            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code);
          
            break;
    }

	implibdx.core.updateDom("footer#main-layout-bottom",function(){
		console.log('ALL PAGE');
        (/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
	},1000,6);
};

jQuery(document).on("plnext:customData:ready", startFNJS);

// const fnScript = () =>{	
// 	const objStart = {
// 		FDCS:()=>{
// 			(/\b^[DK]{2}/).test(eBaDataLayer.external_id) === true && chkSite() === true? addScriptTG('fbpixel_DK'):console.log('ignore-script')
// 		}
// 	}
// 	return objStart[eBaDataLayer.page_code]();
// }

// jQuery(document).on("plnext:customData:ready", fnScript);

