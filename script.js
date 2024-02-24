const setOfWords=[
    "My name is Arnav shah and I am a Web developer",
    "Hope u are doing Fine",
  ];
  const msg=document.getElementById('msg');
  const TypeWords=document.getElementById('myWords');
  const btn=document.getElementById('btn');
  let startTime,endTime;
  
  const playGames=()  =>{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
  }
  const endPlay=() => {
      let date=new Date();
      endTime=date.getTime();
      let totalTime =((endTime-startTime)/1000);

      let totalStr=TypeWords.value;
      let wordCount=WordCounter(totalStr);

      let speed=Math.round((wordCount / totalTime)*60);

      let finalmsg="Your Typed Speed is " + speed + "words per minute";
      finalmsg+=compareWords(msg.innerText,totalStr);

      msg.innerText=finalmsg;

  }
  const compareWords=(str1,str2)=> {
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;

    //array name then foreach loop then it will take whole function with value and index no of that array
    words1.forEach(function(item,index) {
         if(item==words2[index]){
            cnt++;

         }

    })
    let errorWords=(words1.length-cnt);
    return (cnt + "correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
    

  }
  const WordCounter=(str)=>{
    let respone=str.split(" ").length;
    console.log(respone);
    return respone;

  }

  btn.addEventListener('click',function () {
     if(this.innerText=='Start'){
       TypeWords.disabled=false;
       playGames();
       
     }
     else if(this.innerText=="Done"){
        TypeWords.disabled=true;
        btn.innerText="Start";
        endPlay();

     }
  })