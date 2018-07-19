
var createEM ={
	create:function(tag,txt,sta){
		if(tag != ""){
			this.tag = tag;
			this.content = txt;
			this.status = sta;
			let anchor = document.createElement(this.tag);
			let txtNode = '';

			switch(this.status){
				case '0' : 	
				txtNode = document.createTextNode(this.content);
				anchor.appendChild(txtNode);
				break;
				case '1': anchor.src = this.content;
				break;			
			}
			return anchor;
		}else return false;
	}
}

var widgetScript = {
    destination:function(objName,idName,elmName,attrName,src){         
       this._Anchor = objName[idName];
       this._Elm = objName[elmName];
       this._Attr = objName[attrName];
       this._Src = objName[src];

        let _anchor = document.getElementById(this._Anchor);
        let createAttr = document.createElement(this._Elm);

        (this._Src)?createAttr.src = this._Src:'';

        for(key in this._Attr){
           createAttr.setAttribute(key,this._Attr[key]);
           console.log('--------------------------------->Run2')
        }
        console.log('widgetScript');       
        _anchor.appendChild(createAttr);            
    }
}
function ExpandCarSearch (argument) {
	
}