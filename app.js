const inputs=document.querySelectorAll("input")
function countDown(){
    setInterval(function (){
        let dest=new Date("december 31,2023 12:00:00").getTime();
        let cur=new Date().getTime();
        let diff=(dest-cur)/1000;
       inputs[0].value=Math.floor(diff / 3600 / 24);
       inputs[1].value=Math.floor(diff/3600 )%24;

       inputs[2].value=Math.floor(diff/60)%60;
       inputs[3].value=Math.floor(diff)%60;
},1000)
}
countDown();
