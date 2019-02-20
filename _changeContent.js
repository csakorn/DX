/* ------------------ OBJ ----------------- */
var travellerAlert = {
	GB:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Traveller Alert</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">For THAI flight bookings created via travel agents or other intermediaries other than via thaiairways.com, please note that the feature to pre-select seating or view pre-selected seating is temporarily unavailable.  We recommend you contact your travel agent or your nearest THAI office for more information and assistance.  We apologise for any inconvenience caused.</p>',
	FR:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">Alerte voyageur !</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">Pour toutes réservations sur THAI créées par l\'intermédiaire d\'agents de voyages ou des intermédiaires autres que thaiairways.com, veuillez noter que la fonctionnalité permettant de présélectionner les sièges ou de voir les sièges présélectionnés est momentanément indisponible. Contactez votre agent de voyage ou le bureau THAI le plus proche pour plus d\'informations et d\'assistance. Veuillez nous excuser pour tout inconvénient causé.</p>',
	TH:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22\u0e43\u0e19\u0e04\u0e27\u0e32\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e30\u0e14\u0e27\u0e01 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e23\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e14\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e0a\u0e31\u0e48\u0e27\u0e04\u0e23\u0e32\u0e27\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e17\u0e35\u0e48\u0e0b\u0e37\u0e49\u0e2d\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c<a href="http://www.thaiairways.com">thaiairways.com</a> \u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e34\u0e19\u0e44\u0e17\u0e22</p>',
	JP:'<header style="font-size: 12px;color: #cd1763;padding: 0.5em 0 0 0.5em;">\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23</header><p style="font-size: 12px;color: #606060;padding: 0.5em; background-color: #ffefef;">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u306eWEB\u30b5\u30a4\u30c8 (<a href="http://www.thaiairways.com">thaiairways.com</a>) \u4ee5\u5916\u306e\u3001\u65c5\u884c\u4f1a\u793e\u3084\u4ed6\u306e\u7b2c\u4e09\u8005\u306b\u3066\u4e88\u7d04\u3055\u308c\u305f\u5f0a\u793e\u306e\u8a18\u9332\u3067\u306f\u5ea7\u5e2d\u306e\u9078\u629e\u3084\u9078\u629e\u6e08\u306e\u5ea7\u5e2d\u306e\u8868\u793a\u304c\u4e00\u6642\u7684\u306b\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002 <br>\u4e88\u7d04\u5143\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u3054\u4e0d\u4fbf\u304a\u304b\u3051\u3044\u305f\u3057\u307e\u3059\u304c\u3001\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u4e0b\u3055\u3044\u3002\n</p>'
}
var _extraServiceOBJ = {
	seat:{
		CN:"<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u56fd\u9645\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d48\u5c0f\u65f6\u5728\u7ebf\u9884\u9009\u673a\u4e0a\u5ea7\u4f4d</p>",
		DE:"<p class=\"box_service\">Sitzplatzreservierungen k\u00f6nnen bei internationalen Fl\u00fcgen bis 48 Stunden vor Abflug vorgenommen werden.</p>",
		ES:"<p class=\"box_service\">La reserva de asientos online es posible en vuelos internacionales hasta 48 horas antes de la salida. Aplicable solamente para los vuelos de TG de 3 d\u00edgitos.</p>",
		FR:"<p class=\"box_service\">R\u00e9serverz votre si\u00e8ge en ligne jusqu\'\u00e0 48 heures avant le d\u00e9part de votre vol.</p>",
		GB:"<p class=\"box_service\">Online seat reservation is possible on international flights until 48 hours before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">La prenotazione online del posto, solo sui voli internazionali TG a 3 cifre,  \u00e8 possibile fino a 48 ore prima della partenza.</p>",
		JP:"<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u5ea7\u5e2d\u3092\u3054\u6307\u5b9a\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n</p>",
		KO:"<p class=\"box_service\">\uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud55c \uc88c\uc11d \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"<p class=\"box_service\">\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442 \u0432 \u0441\u0430\u043b\u043e\u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u043d\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432)</p>",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 \u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01</p>",
		TW:"<p class=\"box_service\">\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u9078\u5ea7\u4f4d\u670d\u52d9\u3002</p>",
		SE:"<p class=\"box_service\">Du kan v\u00e4lja din sittplats online p\u00e5 internationella flygningar fram till 48h innan avg\u00e5ng p\u00e5 TG flyg med tre siffror.</p>"

	},
	meal:{
		CN:"<p class=\"box_service\">\u7531\u66fc\u8c37\u51fa\u767c\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u53ef\u65bc\u8d77\u98db24\u5c0f\u6642\u4e4b\u524d\u9810\u8a02\u9910\u81b3\uff0c\u800c\u524d\u5f80\u66fc\u8c37\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8acb\u65bc48\u5c0f\u6642\u4ee5\u4e0a\u9810\u8a02\u9910\u81b3 \u3002(\u53ea\u9069\u7528TG 3\u4f4d\u6578\u5b57\u4e4b\u6cf0\u822a\u71df\u904b\u822a\u73ed)</p>",
		DE:"<p class=\"box_service\">Sondermen\u00fc k\u00f6nnen bei internationalen Fl\u00fcgen bis 24 Stunden vor Abflug vorgenommen werden.</p>",
		ES:"<p class=\"box_service\">La selecci\u00f3n de comida es posible en vuelos internacionales saliendo desde Bangkok hasta 24 horas antes de la salida y para vuelos internacionales hacia Bangkok, debe realizarse 48 horas antes de la salida del vuelo. Aplicable solo a vuelos TG de 3 d\u00edgitos.</p>",
		FR:"<p class=\"box_service\">Le choix d\u2019un repas peut \u00eatre fait sur un vol international, 24 heures avant le d\u00e9part du vol.</p>",
		GB:"<p class=\"box_service\">Meal selection is possible on International flight until 24 hrs for outbound from Bangkok and 48hrs for inbound to Bangkok before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">La selezione online dei pasti, sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 48 ore prima della partenza per voli verso Bangkok e fino a 24 ore prima della partenza per i voli da Bangkok.</p>",
		JP:"<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a48\u6642\u9593\u524d\u307e\u3067\uff08\u30d0\u30f3\u30b3\u30af\u767a\u306f24\u6642\u9593\u524d\u307e\u3067\uff09\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u7279\u5225\u6a5f\u5185\u98df\u3092\u304a\u7533\u3057\u8fbc\u307f\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n</p>",
		KO:"<p class=\"box_service\">\uae30\ub0b4\uc2dd \uc120\ud0dd\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ubc29\ucf55 \ucd9c\ubc1c\uc758 \uacbd\uc6b0 \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0 \uac00\ub2a5\ud558\uc9c0\ub9cc \uadf8\uc774\uc678 \uc9c0\uc5ed\uc5d0\uc11c \ucd9c\ubc1c\uc758 \uacbd\uc6b0 (\ub300\ud55c\ubbfc\uad6d \ud3ec\ud568) \ucd9c\ubc1c 48\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"<p class=\"box_service\">\u0412\u044b\u0431\u043e\u0440 \u043f\u0438\u0442\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 24  \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u0434\u043b\u044f \u0440\u0435\u0439\u0441\u043e\u0432, \u0432\u044b\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u0438\u0437 \u0411\u0430\u043d\u0433\u043a\u043e\u043a\u0430, \u0438 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u0434\u043b\u044f \u0440\u0435\u0439\u0441\u043e\u0432, \u0432\u044b\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u0432 \u0411\u0430\u043d\u0433\u043a\u043e\u043a (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432)\n</p>",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e2d\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e43\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e08\u0e19\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f \u0e41\u0e25\u0e30 48 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e1a\u0e34\u0e19\u0e2a\u0e39\u0e48\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f</p>",
		TW:"<p class=\"box_service\">\u9810\u9078\u6a5f\u4e0a\u9910\u98df\u670d\u52d9\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u5f9e\u66fc\u8c37\u767c\u51fa\u4e4b\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\uff0c\u53ca\u5f9e\u5916\u7ad9\u98db\u5f80\u66fc\u8c37\u4e4b\u822a\u73ed\u8d77\u98db\u524d48\u5c0f\u6642\uff0c\u53ef\u80fd\u63d0\u4f9b\u9810\u9078\u9910\u98df\u670d\u52d9\u3002</p>",
        SE:"<p class=\"box_service\">Du kan v\u00e4lja m\u00e5ltid p\u00e5 internationella flyg fram till 24h innan utresa fr\u00e5n Bangkok och 48h innan avresa f\u00f6r inresa i Bangkok. Detta g\u00e4ller endast p\u00e5 TG flyg med tre siffor.</p>"
	},
	baggage:{
		CN:"<p class=\"box_service\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d</p>",
		DE:"<p class=\"box_service\">Zusatzgep\u00e4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.</p>",
		ES:"",
		FR:"<p class=\"box_service\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol.</p>",
		GB:"<p class=\"box_service\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only.</p>",
		IT:"<p class=\"box_service\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza.</p>",
		JP:"<p class=\"box_service\">\u30bf\u30a4\u56fd\u969b\u822a\u7a7a\u904b\u822a\uff08TG3\u6841\u4fbf\uff09\u306e\u56fd\u969b\u7dda\u3067\u306f\u3001\u3054\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53d7\u8a17\u624b\u8377\u7269\u91cd\u91cf\u67a0\u3092\u6709\u6599\u3067\u8ffd\u52a0\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u3059\u3002</p>",
		KO:"<p class=\"box_service\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.</p>",
		RU:"<p class=\"box_service\">\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0430\u0433\u0430\u0436\u0430 \u043e\u043d\u043b\u0430\u0439\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 24 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u0432\u044b\u043b\u0435\u0442\u0430 \u043d\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f 3-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0440\u0435\u0439\u0441\u043e\u0432).</p>",
		TH:"<p class=\"box_service\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 </p>",
		TW:"<p class=\"box_service\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002</p>",
        SE:"<p class=\"box_service\">Att k\u00f6pa extra bagage \u00e4r m\u00f6jligt p\u00e5 internationella flyg fram till 24h innan avresa p\u00e5 TG flyg med tre siffror.</p>"
	}
}
var dialog_baggage ={
	CN:"<p class=\"box_service-dialog\">\u4e58\u5ba2\u53ef\u5728\u822a\u73ed\u8d77\u98de\u65f6\u95f4\u63d0\u524d24\u5c0f\u65f6\u5728\u7ebf\u8d2d\u4e70\u989d\u5916\u6258\u8fd0\u884c\u674e\u914d\u989d <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_CN.html\">More information </a></p>",
	DE:"<p class=\"box_service-dialog\">Zusatzgep\u00e4ck kann online nur bis 24 Stunden vor Abflug des jeweiligen Fluges gebucht und bezahlt werden.<a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_DE.html\">More information </a></p>",
	ES:"",
	FR:"<p class=\"box_service-dialog\">L\u2019achat en ligne de bagage suppl\u00e9mentaire, peut \u00eatre effectu\u00e9 jusqu\u2019\u00e0 24 heures avant le d\u00e9part du vol. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_FR.html\">More information </a></p>",
	GB:"<p class=\"box_service-dialog\">Online Additional baggage purchase is possible on international flights operated until 24 hours before departure of TG 3 digits flight only. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>",
	IT:"<p class=\"box_service-dialog\">Il pagamento online del bagaglio supplementare, solo sui voli internazionali TG a 3 cifre, \u00e8 possibile fino a 24 ore prima della partenza. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">Ulteriori Informazioni </a></p>",
	JP:"<p class=\"box_service-dialog\">\u4e8b\u524d\u652f\u6255\u306b\u3088\u308b\u53d7\u8a17\u624b\u8377\u7269\u91cd\u91cf\u67a0\u306e\u8ffd\u52a0\uff08\u56fd\u969b\u7dda\u306b\u9650\u308b\uff09\u306f\u3001\u51fa\u767a24\u6642\u9593\u524d\u307e\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u3066\u53ef\u80fd\u3067\u3059\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_JP.html\">More information </a></p>",
	KO:"<p class=\"box_service-dialog\">\ucd08\uacfc \uc218\ud558\ubb3c \uc120\uc9c0\ubd88 \uae30\ub2a5\uc740 \ud0c0\uc774\ud56d\uacf5 \uc6b4\ud56d\ud3b8 TGxxx(3\uc790\ub9ac \uc22b\uc790 \ud3b8\uba85) \uad6d\uc81c\uc120\uc5d0 \ud55c\ud558\uc5ec \ucd9c\ubc1c 24\uc2dc\uac04 \uc804\uae4c\uc9c0\ub9cc \uc774\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_KO.html\">\uc790\uc138\ud788 \ubcf4\uae30</a></p>",
	RU:"",
	TH:"<p class=\"box_service-dialog\">\u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e2d\u0e01 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con.html\">\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21</a></p>",
	TW:"<p class=\"box_service-dialog\"> \u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u50c5\u9650\u65bc\u6cf0\u822a\u71df\u904b\u4e4b3\u78bc\u822a\u73ed\u3002\u570b\u969b\u7dda\u822a\u73ed\u8d77\u98db\u524d24\u5c0f\u6642\u53ef\u80fd\u63d0\u4f9b\u7dda\u4e0a\u9810\u8cfc\u984d\u5916\u8d85\u91cd\u884c\u674e\u91cd\u91cf\u670d\u52d9\u3002 <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_TW.html\">More information </a></p>",
	SE:"<p class=\"box_service-dialog\">Att k\u00f6pa extra bagage \u00e4r tillg\u00e4ngligt p\u00e5 internationella flyg fram till 24 timmar innan avresa p\u00e5 TG flyg med 3 siffror. <a target=\"_blank\"href=\"https://www.thaiairways.com/booking/baggage_con_GB.html\">More information </a></p>"
}
var FYIHtml = {
	GB:"<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. Collection of personal information</h3> <p>The Company collects the following personal information:</p> <p>The Company only collects the necessary information created automatically through reservation, ticketing, consultations and service requests. Required Information: gender, name (Korean/English), email address and contact information (i.e. telephone, mobile phone), ticket number or reservation number</p> <ol> <li>1-1. Optional Information: mileage membership number, urgent contact number, meal request and seat assignment.</li> <li>1-2. Additional Information: The following additional information is required to make payment when you purchase our products and service ncluding tickets [ credit card type, number, expiration date, cvv (Card Verification Value) number, ownerÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s name, bank name and account number ] </li> <li>1-3. How your personal information is collected: Via the Thai Airways website, Call center</li> </ol> <h3>2. Collection and use of personal information</h3> <p>The Company uses the personal information we collect for the following purposes:</p> <p>Settlement of Payment for Execution of Agreement and Providing Service: providing contents, booking/ticketing, delivery of products including tickets, sending bills, certification for banking service, purchase and fee payment, and collecting fee.</p> <h3>3. Term for Retaining and Using Personal Information</h3> <p>We will destroy all your personal information in our possession immediately when it is no longer necessary for the purposes for which it was collected if: </p> <p>However, we may retain personal information for a specified period of time if deemed required in accordance with the applicable provisions of the Consumer Protection Act in Commercial Law and E-Commerce Act even after it becomes no longer necessary for the purposes for which it was collected.</p> <p>In this case, we will not use your personal information for purpose other than it was collected and it will be retained for the following period:</p> <ol> <li>3-1. Collected information: Name, Email address, Contact number</li> <li>3-2. Retention basis: We retain personal information if customers make an agreement. If it is refused, we will destroy all personal nformation immediately </li> <li>3-3. Retention Period: 5 years</li> </ol> </div>",
	KO:"<div id=\"FYIHtml\"><div id=\"TAC\"></div><h3>1. \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9</h3><p>\uc218\uc9d1\ud558\ub294 \uac1c\uc778 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. </p> <p>\ud0c0\uc774\ud56d\uacf5 \ud56d\uacf5\uad8c \uc608\uc57d, \ubc1c\uad8c, \uad6c\ub9e4\uc0c1\ub2f4 \ubc0f \uc11c\ube44\uc2a4 \uc2e0\uccad\uc73c\ub85c \uc778\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294\ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uc815\ubcf4\ub9cc\uc744 \uc218\uc9d1\ud558\uac8c \ub429\ub2c8\ub2e4.</p> <ol> <li>1-1. \uc218\uc9d1\ud56d\ubaa9 \uc911 \ud544\uc218\ud56d\ubaa9: \uc131\ubcc4, \uc774\ub984, \uc774\uba54\uc77c, \uc804\ud654\ubc88\ud638, \ud2f0\ucf13\ubc88\ud638 \ub610\ub294 \uc608\uc57d\ubc88\ud638</li> <li>1-2. \uc218\uc9d1\ud56d\ubaa9 \uc911 \uc120\ud0dd\ud56d\ubaa9: \ub9c8\uc77c\ub9ac\uc9c0 \uce74\ub4dc\ubc88\ud638, \uae34\uae09\uc5f0\ub77d\ucc98, \uc88c\uc11d \ubc0f \uc2dd\uc0ac\uc694\uccad</li> <li>1-3. \ucd94\uac00\uc785\ub825\uc815\ubcf4 : \ud56d\uacf5\uad8c \uad6c\ub9e4 \ub4f1 \ub2f9\uc0ac\uc758 \uc0c1\ud488 \ubc0f \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub300\uae08\uacb0\uc81c \uc2dc\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ucd94\uac00\uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n \x3Cbr\x3E[\uce74\ub4dc\uc885\ub958, \uce74\ub4dc\ubc88\ud638, \uc720\ud6a8\uae30\uac04, cvv ( Card Verification Value )\ubc88\ud638, \uce74\ub4dc\uc0c1 \uc18c\uc720\uc8fc\uc774\ub984, \uacc4\uc88c\ubc88\ud638]</li> <li>1-4. \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\ubc29\ubc95 : \ud0c0\uc774\ud56d\uacf5 \ud648\ud398\uc774\uc9c0, \ucf5c\uc13c\ud130\ub97c \ud1b5\ud55c \uc720\uc120\uc0c1\ub2f4</li> </ol> <h3>2. \uac1c\uc778\uc815\ubcf4\uc758 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801</h3> <p>\ud0c0\uc774\ud56d\uacf5\uc740 \uc218\uc9d1\ud55c \uac1c\uc778\uc815\ubcf4\ub97c \ub2e4\uc74c\uc758 \ubaa9\uc801\uc744 \uc704\ud574 \ud65c\uc6a9\ud569\ub2c8\ub2e4.</p> <p>\uc11c\ube44\uc2a4\uc81c\uacf5\uc5d0 \uad00\ud55c \uacc4\uc57d\uc774\ud589 \ubc0f \uc11c\ube44\uc2a4 \uc81c\uacf5\uc5d0 \ub530\ub978 \uc694\uae08\uc815\uc0b0 : \ucf58\ud150\uce20 \uc81c\uacf5, \ud56d\uacf5\uad8c \uc608\uc57d\u318d\ubc1c\uad8c, \ud56d\uacf5\uad8c \ub4f1 \uac01\uc885 \ubb3c\ud488\ubc30\uc1a1 \ub610\ub294 \uccad\uad6c\uc11c \ubc1c\uc1a1, \uad6c\ub9e4 \ubc0f \uc694\uae08\uacb0\uc7ac</p> <h3>3. \uac1c\uc778\uc815\ubcf4\uc758 \ubcf4\uc720 \ubc0f \uc774\uc6a9\uae30\uac04</h3> <p>\uc6d0\uce59\uc801\uc73c\ub85c, \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801\uc774 \ub2ec\uc131\ub41c \ud6c4\uc5d0\ub294 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc9c0\uccb4 \uc5c6\uc774 \ud30c\uae30\ud569\ub2c8\ub2e4. \ub2e8, </p> <p>\uad00\uacc4\ubc95\ub839\uc758 \uaddc\uc815\uc5d0 \uc758\ud558\uc5ec \ubcf4\uc874\ud560 \ud544\uc694\uac00 \uc788\ub294 \uacbd\uc6b0 \ud68c\uc0ac\ub294 \uc544\ub798\uc640 \uac19\uc774 \uad00\uacc4\ubc95\ub839\uc5d0\uc11c \uc815\ud55c \uc77c\uc815</p> <p>\ud55c \uae30\uac04 \ub3d9\uc548 \ud68c\uc6d0\uc815\ubcf4\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4.</p> <ol> <li>3-1. \ubcf4\uc874 \ud56d\ubaa9 : \uc774\ub984 , \uc774\uba54\uc77c , \uc804\ud654\ubc88\ud638</li> <li>3-2. \ubcf4\uc874 \uadfc\uac70 : \ud68c\uc6d0\ub4e4\uc758 \ub3d9\uc758\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc218\ub839\ud558\uba70 \uac70\ubd80\uc2dc \uc0ad\uc81c</li> <li>3-3. \ubcf4\uc874 \uae30\uac04 : 5\ub144</li> </ol></div>"
}
var labelPlstick ={
	GB : "Please tick this box to accept and agree as following.",
	KO : "\uc544\ub798 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uacfc \ud65c\uc6a9 \ubc0f \uae30\ud0c0 \uaddc\uc815\uc5d0 \ub300\ud55c \ucd94\uac00 \ub3d9\uc758\ub97c \uc704\ud558\uc5ec \uccb4\ud06c \ubc15\uc2a4\ub97c \ud074\ub9ad\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624."
}

/* ------------------ FN ----------------- */
var updateHTML = {
	hilight_Content:{
		add:function(d,i,v){
			implibdx.core.updateDom(d,function(){
				$(i).css("color",v);
			},1000,5);
		},
		content_FARE:function(){
			updateHTML.hilight_Content.add("div.flight-info-cabin",".flight-info-cabin div.flight-info-right","#ce0058");
			implibdx.core.updateDom("div.flight-info-airline",function(){
				$.each($("div.flight-info-airline").find("bdo"),function(key,value){
					if((/[TG]{2}/).test( $("span.flight-info-airline-flight").find("bdo")[key].innerText ) == false){
						$(this.offsetParent).css("color","#ce0058")
					}
				});
			},1000,5);
		}
	},
	// service:{
	// 	travellerAlert_RTPL:function(){
	// 		implibdx.core.updateDom("section#services-breakdown", function(){
	// 			if(eBaDataLayer.language == "GB" || eBaDataLayer.language == "FR" || eBaDataLayer.language == "TH"){
	// 				$(".servicesbreakdown-panel-body").after(travellerAlert[eBaDataLayer.language]);
	// 			}else{
	// 				$(".servicesbreakdown-panel-body").after(travellerAlert["GB"]);
	// 			}
	// 		},1000,3);
	// 	}
	// },
	extraService:function(SIT,MEA,BAG,idbox){
		// this.SIT  = SIT;
		// this.BAG  = BAG;
		// this.MEA  = MEA;
		implibdx.core.updateDom(idbox, function(){
			setTimeoutBAG();
			console.log(SIT,BAG,MEA)
			$(SIT).append( check.defaultLang(_extraServiceOBJ.seat,eBaDataLayer.language,"GB") );
			$(BAG).append( check.defaultLang(_extraServiceOBJ.baggage,eBaDataLayer.language,"GB") );
			$(MEA).append( check.defaultLang(_extraServiceOBJ.meal,eBaDataLayer.language,"GB") );


		},1000,4);
	},
	remove_content:{
		price_RTPL:function(){
			implibdx.core.updateDom("div.pnrd-view.row", function() {
				$('.price-details').remove();
			}, 1000, 5);
		},
		servicesbreakdown:function(p){
			if(eBaDataLayer.page_code == p){
				implibdx.core.updateDom("section#services-breakdown", function() {
					var a = eBaDataLayer.bound.length;
					for (var i = 0; i < a; i++) {
						var b = eBaDataLayer.bound[i].flight_numbers.slice(2);
						if (b < 300) {
							jQuery("section#services-breakdown").css("display", "none");
						} else {
							jQuery("section#services-breakdown").css("display", "block");
							break;
						}
					}
				}, 1000, 5);
			}
		},
		additional_services:function(){
			 implibdx.core.updateDom("section#reservation-details", function() {
                $("#services-breakdown footer").remove();
            }, 1000, 5)
		}
	},
	Passengerinfo:function(){

		implibdx.core.updateDom("section.traveller-panel-body.panel-body",function(){
			$('select[id $= \'_ADT-FREQ_Airline_0\']>option[value=\'AI\']').html('Air India');
			// $("section.traveller-panel-body.panel-body").before("<p class=\"box-mandatory\">Please complete all the fields marked * . </p>")
		},1000,5);


		if (eBaDataLayer.currency == "SGD") {
			implibdx.core.updateDom("section.traveller-panel-body.panel-body",function(){
				$("label[for $=\"_ADT-IDEN_TitleCode\"]").append(" (as in passport)");
				$("label[for $=\"_ADT-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_ADT-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_CHD-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
				$("label[for $=\"_ADT_INF-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");

				$("label[for $=\"_YTH-IDEN_FirstName\"]").html("First / Given name & Middle name *(as in passport)");
				$("label[for $=\"_YTH-IDEN_LastName\"]").html("Last Name / Family Name / Surname *(as in passport)");
			},1000,5);
		}
	},
	clickConfirm:function(){
		if(eBaDataLayer.currency == "KRW" && ( eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")){
			implibdx.core.updateDom("div.purchase-conditions",function(){
				var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
				$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">"+ labelPlstick[eBaDataLayer.language] +"</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
				$("#showCondition").on("click",function(){
					if($(this).attr('data-toggled') == 'off') {
						$(this).attr('data-toggled','on');
						$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
						$("#FYIHtml>div#TAC").html(clickConfirm).show();
					}else if($(this).attr('data-toggled') == 'on'){
						$(this).attr('data-toggled','off');
						$("#FYIHtml").remove();
					}
				});
			},1000,6);
		}
	}
}

function expanded_adult(){
	implibdx.core.updateDom("section.traveller-form",function(){
		for(i=0;i<=$("a[aria-labelledby*='_cardTravellerADT']").length-1;i++){
			//console.log(i,"----expanded_adult")
			if(i !== 0){
				$("a[aria-labelledby*='_cardTravellerADT']")[i].click();
			}
		}
		for(i=0;i<=$("a[aria-labelledby*='_cardTravellerINF']").length-1;i++){
			//console.log(i,"----expanded_adult")			
			$("a[aria-labelledby*='_cardTravellerINF']")[i].click();			
		}
		for(i=0;i<=$("a[aria-labelledby*='_cardTravellerCHD']").length-1;i++){
			//console.log(i,"----expanded_adult")			
			$("a[aria-labelledby*='_cardTravellerCHD']")[i].click();			
		}
		for(i=0;i<=$("a[aria-labelledby*='_cardTravellerYTH']").length-1;i++){
			//console.log(i,"----expanded_adult")			
			$("a[aria-labelledby*='_cardTravellerYTH']")[i].click();			
		}
		for(i=0;i<=$("a[aria-labelledby*='_cardTravellerB15']").length-1;i++){
			//console.log(i,"----expanded_adult")			
			$("a[aria-labelledby*='_cardTravellerB15']")[i].click();			
		}		
	},1000,6);	
}

function setTimeoutBAG(){
	$("#tpl7_BAG").on("click", function(e) {
		window.setTimeout(function(){
			console.log("setTimeout")
			$("div.service-container.col-xs-24").append( check.defaultLang(dialog_baggage,eBaDataLayer.language,"GB") );
		},600)
	});
	$("#tpl3_BAG").on("click", function(e) {
		window.setTimeout(function(){
			console.log("setTimeout")
			// $("div.service-container.col-xs-24").parent().append( check.defaultLang(baggage,eBaDataLayer.language,"GB") );
			$("div.service-container.col-xs-24").append( check.defaultLang(dialog_baggage,eBaDataLayer.language,"GB") );
		},600)
	});
}

// Lowest Fares
function lowest(){
	if(eBaDataLayer.page_code == '')
		implibdx.core.updateDom("div#matrix-second-row",function(){
			$("#calendar-matrix-inner>table tbody tr>td>div>div>div i[title='Lowest Fares']").parents('div.calendarmatrix-inner-cell').css('border','2px solid #259800')
		},1000,5);
	if(eBaDataLayer.page_code == 'FPOW'){
		implibdx.core.updateDom("div#matrix-second-row",function(){
			$("div.bound-table-flightline div>header>i[title='Lowest Fares']").parents('div.bound-table-cell-reco-available').css('border','2px solid #259800')
		},1000,5);
	}
}
// logo header
function _addClass(x,y){
	let _Start = document.getElementById(x)
	let _Desti = y
	implibdx.core.updateDom("div#matrix-second-row",function(){
		_Start.classList.add(_Desti);
	},1000,5);
}
/*---------------------For Korean--------------------------*/

var clickConfirm_KOR = function(){
	if(eBaDataLayer.currency == "KRW" && ( eBaDataLayer.language == "GB" || eBaDataLayer.language == "KO")){
		implibdx.core.updateDom("div.purchase-conditions",function(){
			var clickConfirm = $("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition>div.checkbox").html();
			$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition").html("<section class=\"checkbox\"><label for=\"showCondition\">"+ labelPlstick[eBaDataLayer.language] +"</label> <input data-toggled=\'off\' type=\"checkbox\" id=\"showCondition\" name=\"showCondition\" value=\"\"><br></section>");
			$("#showCondition").on("click",function(){
				if($(this).attr('data-toggled') == 'off') {
					$(this).attr('data-toggled','on');
					$("#widget-group-purchaseForm-termsConditionsForm-termsAndCondition .checkbox").append(FYIHtml[eBaDataLayer.language]);
					$("#FYIHtml>div#TAC").html(clickConfirm).show();
				}else if($(this).attr('data-toggled') == 'on'){
					$(this).attr('data-toggled','off');
					$("#FYIHtml").remove();
				}
			});
		},1000,6);
	}
}
/*------------ remove line xbag on pink banner --------------------*/
var xbagSet = {
	set:function(){
		implibdx.core.updateDom("div#pinkbanner",function(){
			$("#link_baggage").attr('href','')
			$("#link_baggage").attr('atdelegate',xbagSet.getService())
			$("#link_car").attr('href','http://www.hertzasia.com/thaiairways/')
			$("#link_insure").attr('href','https://www.thaiairways.com/'+siteLang(eBaDataLayer.language)+'/book/moreservices.page?#insurance')
				
		},1000,6);
	},
	getService:function(){
		return $("#services-breakdown footer>button").attr('atdelegate');
	}

}

var GOV = function(){
	implibdx.core.updateDom(".fop-menu-wrapper",function(){

		$("li[id $='_li_CON'],label[for $='_radio_CON'],input[id $='_radio_CON'],.fop-icon icon-office").on('click', function(event) {
			if(eBaDataLayer.language === "GB" ){
				window.setTimeout(function(){
					(dataTransfer['EXTERNAL_ID#4'] === 'GOV')?$("div[id $='_fopTemplate_custom-pickup']").html('Contact at THAI ticket office in the country where the journey'):console.log('no')
				},200)
			}
			if(eBaDataLayer.language === "TH" ){
				window.setTimeout(function(){
				(dataTransfer['EXTERNAL_ID#4'] === 'GOV')?$("div[id $='_fopTemplate_custom-pickup']").html('\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e42\u0e14\u0e22\u0e2a\u0e32\u0e23 \u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e17\u0e35\u0e48\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07'):console.log('no')
				},200)

			}
		})
	},1000,6)
}



var govApim = function(){
	if(eBaDataLayer.page_code === 'APIM'){
		implibdx.core.updateDom("section.traveller-panel-body.panel-body",function(){
			if(eBaDataLayer.language === "GB"){
				$("label[for $=\"PSPT_DocumentNumber\"]").html("Document number* (Please fill in the form as following pattern, 001/2517 as 0012517)");
				$("label[for $=\"PSPT_DocumentType\"]").html("Document type:<br>&nbsp");
			}
			if(eBaDataLayer.language === "TH"){
				$("label[for $=\"PSPT_DocumentNumber\"]").html("\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23* (\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49 001\x2F2517 - 0012517)");
				$("label[for $=\"PSPT_DocumentType\"]").html("\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23:<br>&nbsp");

			}

		},1000,5);
	}
}

// hide Contact Information #Home Phone:|Business Phone

var contactInfo = {
	phone:function(){
		for(i=0;i<$(".phoneCode").length;i++){
			if(i !== 0 && i !== 3 ){
				console.log(i)
				$(".phoneCode")[i].style.display = "none";
				$(".phoneNumber")[i].style.display = "none";
			}
		}
	},
	click_phone:function(){
		implibdx.core.updateDom("section.traveller-contact-information-panel",function(){
			contactInfo.add_idPhone();
			contactInfo.phone();
			$('#BusinessPhone').on('click',function(){
				$('.traveller-contact-information-panel-body .phoneNumber')[2].style.display = "block"
				$('.traveller-contact-information-panel-body .phoneCode')[2].style.display = "block"
			})

			$('#HomePhone').on('click',function(){
				$('.traveller-contact-information-panel-body .phoneNumber')[1].style.display = "block"
				$('.traveller-contact-information-panel-body .phoneCode')[1].style.display = "block"
			})
		},1000,7);
	},
	add_idPhone:function(){
		$(".traveller-contact-information-panel-body .control-label")[8].setAttribute("id", "BusinessPhone");
		$(".traveller-contact-information-panel-body .control-label")[5].setAttribute("id", "HomePhone");

	}
}

var removeXbag ={
	check:function(){
		return (eBaDataLayer.contact_information.email === undefined)?true:false;
	},
	remove:function(r){
		implibdx.core.updateDom("#pinkbanner",function(){

			if(r === true) $("#PinkBanner_3")[0].parentElement.remove();
			else return false;
		},1000,5);
	}
}
var removePinkbanner = function(id){
	let pinkID = id;
	implibdx.core.updateDom("#pinkbanner",function(){
		$(pinkID)[0].parentElement.remove();
	},1000,5);
}

// var pinkbanner_market = function(m){
// 	// var eBaDataLayer.market
// 	this.market = m;
// 	var map1 = 	this.market.map(x => x == eBaDataLayer.market)
// }

function chkMarket(m){
	var xMaket = m;
	const _market = ['CH_NORMAL'];
	for(i=0;i<= _market.length;i++){
		return xMaket ==_market[i];
	}
}
