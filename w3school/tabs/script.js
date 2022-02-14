let tabList = document.querySelectorAll('.tabList li');
let tabcontant = document.getElementsByClassName('tabcontants');
let panelQuestion = document.getElementsByClassName('panel-qustion');

console.log(panelQuestion);

//해당 컨텐츠 내용이 노출되도록 하기
function showContent(num){

    //tabcontant 각각의 내용을 tc로 받아오기
    for(tc of tabcontant){
        tc.style.display = 'none';
    }
    //tabcontant[num]은 idx 들어갈 위치이다.
    tabcontant[num].style.display = 'block';
}
showContent(0);

//forEach는 각각의 내용과 인덱스를 대리고 올 수 있다.
tabList.forEach(function(menu, idx){
    //console.log(idx);
    menu.addEventListener('click',function(){
        this.classList.add('active');

        //sibilngs은 menu의 각각의 내용이다. 클릭을 했을시 그 클릭한 li를 siblings로 대리고 오는것이다.
        for(let sibilngs of  this.parentNode.children){
            if(this !== sibilngs){
                sibilngs.classList.remove('active');
            }
            console.log(sibilngs);
        }
        showContent(idx);
    });
});

/** 아코디언 **/

//다 삭제하기 
function hideAll(){
    for(pq of panelQuestion){
        pq.classList.remove('active');
    }
}

for(pq of panelQuestion){
    pq.addEventListener('click',function(){
        hideAll();
        this.classList.add('active');
    });
}

/** 이미지 모달 팝업 **/
let galleryLink = document.querySelectorAll('.gallery a');
let lightBox = document.getElementById('lightbox-overlay');
let target = lightBox.querySelector('img');


//galleryLink각각인 item을 클릭시 lightBox가 열리고 galleryLink안에 있는 이미지 data-lightBox를 가져와라
galleryLink.forEach(function(item){
    item.addEventListener('click',function(e){
       // console.log(this); 클릭한 a값
        e.preventDefault();
        let targetImgsrc =  this.children[0].getAttribute('data-lightBox');
        //console.log(targetImgsrc);
        target.setAttribute('src',targetImgsrc);
        lightBox.classList.add('visible');
    });
});
lightBox.addEventListener('click',function(){
    lightBox.classList.remove('visible');
    target.setAttribute('src','');
});

