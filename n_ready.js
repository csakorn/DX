
var startFNJS = function() {
$("#datatransferForm>input").serializeArray().forEach(datatransferForm);
    switch (eBaDataLayer.page_code) {
        case "FPOW":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)            
            // Step 1
            
            break;
        case "FDCS":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1 Calendar matrix
            
           
            break;
        case "SDAI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1 Multi City
           
        case "FDFF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 1 COMPARISON
           
            break;
        case "FARE":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 2 DETAILS           

            break;
        case "ALPI":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 2 FILL IN DETAILS
           
            break;
        case "APIM":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
            // Step 2 PASSENGER INFORMATION
           
            break;
        case "AAS":
        	// Step 2 CHOOSE SERVICES
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)
           
            break;
        case "PURC":
            // Step 3 PAYMENT
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)  
           
            break;
        case "CONF":
            console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)        
            // Step 3 CONFIRMED BOOKING

            break;
        case "RTPL":
        	console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code); 
            // Step 3
            
            break;
        case "MDFSR":
        	console.log("eBaDataLayer.page_code = " + eBaDataLayer.page_code)            
            // extraService
            
            break;
    }

}

jQuery(document).on("plnext:customData:ready", startFNJS);
