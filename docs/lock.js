
	// F12키 금지
	$(document).ready(function(){
		$(document).on('keydown',function(e){
			if ( e.keyCode == 123 || e.keyCode == 93) {  /* F12키 */
        e.preventDefault();
				e.returnValue = false;
			}
		});
	});
    // F12키 금지
	$(document).ready(function(){
		$(document).on('keydown',function(e){
			if (e.keyCode == 93) {  /* F12키 */
        alert("보안을 위해 개발자 모드를 금지시켰습니다.\n자세한 내용은 제작자에게 문의주세요.")
        e.preventDefault();
				e.returnValue = false;
			}
		});
	});
	// 마우스오른쪽 클릭방지
	document.onmousedown=disableclick;
	status="보안을 위해 개발자 모드를 금지시켰습니다.\n자세한 내용은 제작자에게 문의주세요.";
	function disableclick(event){
		if (event.button==2) {
			alert(status);
			return false;
		}
	}	
