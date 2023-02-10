const btn=document.querySelector('.search-btn')
const input=document.querySelector('.input')
const url=`https://api.dictionaryapi.dev/api/v2/entries/en/`
const sound=document.querySelector('.sound')
const result=document.querySelector('.result')
btn.addEventListener('click',function(){
   searchValue=input.value
   console.log(searchValue);
   fetch(`${url}${searchValue}`).then(res=>res.json()).then(data=>{
    console.log(data[0]);
     result.innerHTML=`
     <audio class="sound"></audio>
     <div class="word">
                <h3 class="word">${data[0].word}</h3>
                <button onclick="read()"><i class="fa-light fa-volume"></i>aaa</button>
            </div>
            <div class="identify">
                <p class="identfy1">${( data[0].meanings[0].partOfSpeech)}</p>
                <p class="identify2">${( data[0].phonetic)}</p>
            </div>
            <p class="defination">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="example">${data[0].meanings[0].definitions[0].example}</p>
        </div>
     `
     if(data[0].phonetics[0].audio===''){
        sound.setAttribute("src",`${data[0].phonetics[1].audio }`)
     }else{
        sound.setAttribute("src",`${data[0].phonetics[0].audio }`)
     }
     
     console.log(sound);
   })
   .catch(()=>{
    result.innerHTML=`<h3 class="err">Could not Find the Word</h3>`
   })
})
function read(){
    sound.play()
}
