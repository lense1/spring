$(document).ready(function () {
	$(".mySlideDiv2").not(".active2").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
	
	setInterval(nextSlide2, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide2() {
	$(".mySlideDiv2").hide(); //모든 div 숨김
	var allSlide2 = $(".mySlideDiv2"); //모든 div 객체를 변수에 저장
	var currentIndex2 = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".mySlideDiv2").each(function(index,item){ 
		if($(this).hasClass("active2")) {
			currentIndex2 = index;
		}
        
	});
	
	//새롭게 나타낼 div의 index
	var newIndex2 = 0;
    
	if(currentIndex2 <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex2 = allSlide2.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex2 = currentIndex2-1;
	}

	//모든 div에서 active 클래스 제거
	$(".mySlideDiv2").removeClass("active2");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".mySlideDiv2").eq(newIndex2).addClass("active2");
	$(".mySlideDiv2").eq(newIndex2).show();

}

//다음 슬라이드
function nextSlide2() {
	$(".mySlideDiv2").hide();
	var allSlide2 = $(".mySlideDiv2");
	var currentIndex2 = 0;
	
	$(".mySlideDiv2").each(function(index,item){
		if($(this).hasClass("active2")) {
			currentIndex2 = index;
		}
        
	});
	
	var newIndex2 = 0;
	
	if(currentIndex2 >= allSlide2.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex2 = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex2 = currentIndex2+1;
	}

	$(".mySlideDiv2").removeClass("active2");
	$(".mySlideDiv2").eq(newIndex2).addClass("active2");
	$(".mySlideDiv2").eq(newIndex2).show();
	
}