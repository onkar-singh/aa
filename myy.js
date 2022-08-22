if(!localStorage.fromod){localStorage.setItem('fromod','1')}

function resetd () {
 var odcount=1+Number(localStorage.clickcount)-Number(localStorage.fromod);
 if(odcount){
    let per1 = prompt("Please enter 'ok' to download from "+localStorage.fromod+" to "+localStorage.clickcount);
    if (per1==="ok") {
      let fromod1=Number(localStorage.fromod);
 couttot(fromod1);
        setTimeout(function(){
            tabletcsv('testTable',odcount+'('+localStorage.fromod+'-'+localStorage.clickcount+')');
         localStorage.setItem('fromod',1+Number(localStorage.clickcount));
document.getElementById('tre6').innerHTML='';
document.getElementById('p781').click();
        },800)

    }
}else{alert("No data to download ")}

 
}
//color: #8fbc8f;
function delod () {
 if(Object.entries(selod5)[0]){
  let text = "Press OK to delete or Cancel.";
  if (confirm(text) == true) {
   let r=Object.keys(selod5)[Object.keys(selod5).length-1];
   st.collection('ods').doc(r).get().then(doc => {
    od=doc.it;
     stort(-1);
    od={};
  
})
 st.collection('ods').doc(r).update({
  tot: '0',it:{},gst:false
})
   .then(response => {
    selod5={};
    document.getElementById('p781').click();
  })
  .catch(error => {
    console.log('There was an error, do something else.')
  })
 
  }

} else {alert('Bhai oder select ker pahle !!')}}
var pk8;
function editod(tp) {
    
 pk8=tp.id.split('b')[1];//alert(pk8)

    let ht=document.getElementById(pk8).parentElement.innerText.split('\n')[0].split(' ')[2];
    //console.log(ht)
    document.getElementById('frt').innerHTML="<strong>"+ht+"</strong>";
    if(document.getElementById(pk8).parentElement.querySelector('.gst55')){document.getElementById('gst').checked=true;}

document.querySelectorAll('#id01 #tblom1 tbody').forEach(kjhu)

function kjhu(v) {//alert(v.id);document.getElementById('frt').innerText=.innerText.split('\n')[0].split(' ')[2];
    let qs1=v.innerText.split('\n');
    for (let u = 0; u < qs1.length; u++) {
        var wer5;
        if(u===0){
           wer5=qs1[u].split('\t')[0];
        }else{
           let jk=qs1[u].split('\t');
            for (let i = 0; i < jk.length; i++) {
                var wer6;
                if(i===0){wer6=jk[i]}else if(jk[i]){
                   // console.log(wer5,wer6,jk[i],i); // t,c,value,index
                    let ty6=document.querySelector('#'+wer5+' #'+wer6+' td:nth-child('+(i+1)+') input');
                   ty6.value=jk[i];triggerInput(ty6);
                }
                
            }
        }
        
        
    }
    
}
 stort(-1);
document.getElementById('id01').style.display='';
document.querySelector("div.bar button.tablink[onclick]").click();
 document.getElementById('btn_convert').style.display='none';
document.getElementById('upd5').style.display='';
function triggerInput(v) {
let event = new Event('input', {'bubbles': true,'cancelable': true});
v.dispatchEvent(event);
}}

function updateod() {
 // console.log(pk8,od);
var po5;
if(document.getElementById('gst').checked){po5='-GST'}else{po5=''}
  stort();
 document.getElementById('alltab').click();
 let id55=pk8.split('od')[1];let tot55=document.getElementById('u23').innerText.split('-')[1];
zsr.id = Number(id55);
zsr.cn = document.getElementById('u13').innerText;
zsr.tot = Number(tot55);
zsr.gst = document.getElementById('gst').checked;
zsr.dt = document.getElementById('u33').innerText.split(',')[0]; 
zsr.it = od; 
 console.log('json:',zsr)
st.collection('ods').doc(pk8).set(zsr)
 .then(response => {
    document.getElementById("html33").style.width='455px';
        html2canvas(document.getElementById("html33"),
            {
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
                var anchorTag = document.createElement("a");
                document.body.appendChild(anchorTag);
                //document.getElementById("previewImg").appendChild(canvas);
            //const d = new Date();
            var ji33=document.getElementById("u13").innerText;
                
                //anchorTag.download = d.getFullYear().toString().substr(-2)+(d.getMonth()+1)+'D'+d.getDate()+ji33+".jpg";
                anchorTag.download = pk8.split('od')[1]+'-'+ji33+po5+".jpg";
    
               anchorTag.href = canvas.toDataURL();
                anchorTag.target = '_blank';
                anchorTag.click();
                anchorTag.remove();
            });
       document.getElementById("html33").style.width='';
       newc();document.getElementById('gst').checked=0;
   document.getElementById('btn_convert').style.display='';
document.getElementById('upd5').style.display='none';
document.getElementById("p781").click();
  })
  .catch(error => {
    console.log('There was an error, do something else.')
  })

 
}