jQuery( document ).ready( function() {
		jQuery('table.leden a').click(function(){ 
			windowOpener(this.href, 'popup', 'width=500,height=500' );  
			return false; 
		});
	}
)



function windowOpener(url, name, args) {
	if (typeof(popupWin) != "object"){
		popupWin = window.open(url,name,args);
	} else {
		if (!popupWin.closed){
			popupWin.location.href = url;
		} else {
			popupWin = window.open(url, name,args);
		}
	}
	
	popupWin.focus();
}