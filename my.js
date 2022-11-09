// if (!localStorage.gr5) {for (;;) {}}
// if (!localStorage.gr5) {while (1){}}

async function getods(gd) {
  try {
    let st = new Localbase('st');
    let allods1 = await st.collection(gd).get();
    let doc = await allods1;
    
    doc.sort(function(a,b) { // sort by id
    return b.id - a.id;
    });
      for (let i in doc) {
          //console.log(doc[i])
          
          if(Number(doc[i].tot)){ifz="ndelt"}else{ifz="delt"};
          if(doc[i].gst){ gstr="<span class='w3-tag w3-amber gst55' style='border-radius: 7px;'>GST</span>"}else{ gstr="<span class='w3-tag w3-amber' style='padding: 0 1.55em'></span>"};

          let inp="<input onclick='selod(this)' id='"+'od'+doc[i].id+"' class='w3-check' type='checkbox'>";let lid='';
          let exio='';let funex='';
          if (gd == 'inst') {lid='data-gd='+doc[i].cn;exio='Export';funex="onclick='expt(this)'";inp='';} 
          vtag="<span id='vtag' "+funex+"><span name="+'od'+doc[i].id+" class='w3-tag w3-red'>"+exio+"</span></span>";

          document.getElementById('oderli').innerHTML+="<li "+lid+" class='w3-display-container "+ifz+"'>"+inp+' '+doc[i].id+'. '+doc[i].cn+vtag+"<span onclick='opodli(this)'  "+"for='"+'od'+doc[i].id+"' class='w3-button w3-transparent w3-display-right'>"+doc[i].tot+' '+ gstr+' '+doc[i].dt.split('/20')[0]+"</span></li>";
      }
  }
  catch(error) {
    console.log('error: getods()', error)
  }
}


var selod5={};
//var pd2;

var om=document.getElementById("tb").innerHTML;
var od={};var zxc=0; if (localStorage.clickcount) {zxc=localStorage.clickcount;}
//if (!localStorage.gstc) {localStorage.setItem("gstc", "{}");}
var urli = "https://script.google.com/macros/s/"+localStorage.gr5+"/exec";
var ods1={Bio:{Black:{36:0,38:0,40:0,42:0,44:0,46:0},White:{36:0,38:0,40:0,42:0,44:0,46:0},Maroon:{36:0,38:0,40:0,42:0,44:0,46:0},Navy:{36:0,38:0,40:0,42:0,44:0,46:0},"Mustard Yellow":{36:0,38:0,40:0,42:0,44:0,46:0},Red:{36:0,38:0,40:0,42:0,44:0,46:0},"Bottle Green":{36:0,38:0,40:0,42:0,44:0,46:0},Beige:{36:0,38:0,40:0,42:0,44:0,46:0},"Royal Blue":{36:0,38:0,40:0,42:0,44:0,46:0},Lavender:{36:0,38:0,40:0,42:0,44:0,46:0},Sky:{36:0,38:0,40:0,42:0,44:0,46:0},Grey:{36:0,38:0,40:0,42:0,44:0,46:0}},NBio:{Black:{36:0,38:0,40:0,42:0,44:0,46:0},White:{36:0,38:0,40:0,42:0,44:0,46:0},Navy:{36:0,38:0,40:0,42:0,44:0,46:0},Grey:{36:0,38:0,40:0,42:0,44:0,46:0},Mint:{36:0,38:0,40:0,42:0,44:0,46:0},Charcol:{36:0,38:0,40:0,42:0,44:0,46:0},Olive:{36:0,38:0,40:0,42:0,44:0,46:0}},Polo:{Black:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},White:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Navy:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Grey:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Maroon:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Anthra:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Red:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Charcol:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Royal:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Orange:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},"Sky Blue":{XS:0,S:0,M:0,L:0,XL:0,XXL:0},"Flag Green":{XS:0,S:0,M:0,L:0,XL:0,XXL:0},"Reliance Green":{XS:0,S:0,M:0,L:0,XL:0,XXL:0},"Golden Yellow":{XS:0,S:0,M:0,L:0,XL:0,XXL:0}},OverS:{Black:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},White:{XS:0,S:0,M:0,L:0,XL:0,XXL:0}},Hood:{Black:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},White:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Navy:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Grey:{XS:0,S:0,M:0,L:0,XL:0,XXL:0}},Sweat:{Black:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},White:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Navy:{XS:0,S:0,M:0,L:0,XL:0,XXL:0},Grey:{XS:0,S:0,M:0,L:0,XL:0,XXL:0}}};

if (!localStorage.pend2) {localStorage.setItem('pend2','{}');}

if (!localStorage.imglastod) {localStorage.setItem('imglastod',JSON.stringify({cn:'',im5:''}));}
//if (!localStorage.ods) {localStorage.setItem("ods", JSON.stringify(ods1));}
if (!localStorage.fromod) {localStorage.setItem('fromod', '1');}
var pki={"types":[{"type":"Bio","color":["Black","White","Maroon","Navy","Mustard Yellow","Red","Bottle Green","Beige","Royal Blue","Lavender","Sky","Grey"],"size":[36,38,40,42,44,46],"price":155},{"type":"NBio","color":["Black","White","Navy","Grey","Mint","Charcol","Olive"],"size":[36,38,40,42,44,46],"price":105},{"type":"Polo","color":["Black","White","Navy","Grey","Maroon","Anthra","Red","Charcol","Royal","Orange","Sky Blue","Flag Green","Reliance Green","Golden Yellow"],"size":["XS","S","M","L","XL","XXL"],"price":190},{"type":"OverS","color":["Black","White"],"size":["XS","S","M","L","XL","XXL"],"price":190},{"type":"Hood","color":["Black","White","Navy","Grey"],"size":["XS","S","M","L","XL","XXL"],"price":190},{"type":"Sweat","color":["Black","White","Navy","Grey"],"size":["XS","S","M","L","XL","XXL"],"price":190}]};
// console.log(pki.types[0]);
// console.log(pki.types[0].type);
// console.log(pki.types[0].color[0]);
// console.log(pki.types[0].size[0]);

var intp;
if((navigator.platform)==='iPhone'){intp="pattern='[0-9]*' type='text'";
}else{intp="type='number'";}1
      
//console.log('intp:',intp);

// change type name
const typep7={"Bio":"RN Bio","NBio":"RN Non Bio","Polo":"Polo","OverS":"Oversize","Hood":"Hoodie","Sweat":"Sweatshirt"};
// typep7[variable] //console.log(typep7["Bio"]);

//gen. table start
function gentbl(m) {
 let c11=pki.types[m].type;
 let tb1="<table id='tbl"+m+"' class='w3-table-all pky w3-centered'><thead>"; 

 var size="";var tk="";
  for (let i = 0; i < pki.types[m].size.length; i++) {
    size+="<th>"+pki.types[m].size[i]+"</th>";
   tk+="<th>"+"</th>";
  }
 
 var sizel='';
for (let l in pki.types[m].size) {
    sizel+="<td>"+"<input class='w3-input' oninput='inclick(this)'"+intp+">"+"</td>";
}

var colorl='';
for (let i in pki.types[m].color) {

    colorl+="<tr id='"+pki.types[m].color[i].replace(/\s+/, "")+"' "+"class='oj'"+"><th>"+pki.types[m].color[i]+"</th>"+sizel+"</tr>";
}
 //console.log(c11);
 
  let tblo=tb1+"<tr class='w3-blue-grey'><th>Total</th>"+tk+"</tr>"+"<tr id='trth' class='w3-red'>"+"</th>"+"<th  class='w3-blue'>"+c11+"</th>"+size+"</tr></thead><tbody id='"+c11+"'>"+colorl+"</tbody></table>";
   //console.log(colorl,"mymymy",tblo);
document.getElementById("type"+m).innerHTML=tblo;

 /// make table contentEditable
//  let olo=document.querySelectorAll("#tbl"+m+" td");
// for (let i = 0; i < olo.length; i++) {
//     olo[i].contentEditable=true;
//     } 
}
//gen. table End


//gen. table for Each tab on load
window.onload = function(){
  document.querySelectorAll('.bar button').forEach(
 function(e, i, a) {
  gentbl(i);
});
  };

/// onclick full screen
let kl=document.getElementById("full");
var elem = document.documentElement;
function openFullscreen(c) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  c.outerHTML="<button class='w3-button w3-teal w3-right' onclick='closeFullscreen(this)'>Exit</button>";
}

function closeFullscreen(s) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  s.outerHTML="<button class='w3-button w3-teal w3-right' onclick='openFullscreen(this)'>Full</button>";
}
/// tab layout
let curtab="type0";
function openCity(evt, cityName) {
 document.getElementById('odert').style.display='';
 document.getElementById('odert').innerText="Total";
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
var jk12=0;
 let jk100=document.getElementById(cityName).querySelectorAll("thead > tr.w3-blue-grey th");
 for (let r = 1; r < jk100.length; r++) {
   let njh113=jk100[r].innerText;
   let njh123=Number(njh113);
   jk12+=njh123;//console.log(r,'lelolelo',jk12,njh113,njh123)
 }
 document.getElementById('odert').innerText="Total-"+jk12;
 let lkp1=document.querySelectorAll("tr.oj");
 for (let p = 0; p < lkp1.length; p++) {
    lkp1[p].style.display="";
}

 let uy= document.querySelectorAll('.city thead tr:nth-child(1)');
for (let v = 0; v < uy.length; v++) {
 uy[v].style.display='';
}
 document.getElementById('tot').style.display='none';

}
// // display all tab 
 document.getElementById('alltab').onclick = function(){
  // document.getElementById('btn_convert').style.display="";
   x1 = document.getElementsByClassName("city");
    for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "block";
  }
  tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x1.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
// remove 0 value table
let ytl=document.querySelectorAll(".city td .w3-input");
let lkp=document.querySelectorAll(".city tr.oj");

for (let k = 0; k < lkp.length; k++) {
    lkp[k].style.display="none";
}

for (let i = 0; i < lkp.length; i++) {
   let pkz= lkp[i].getElementsByTagName('td');
    
    for (let j = 0; j < pkz.length; j++) {
     let zo=lkp[i].querySelectorAll('tr input')[j].value==="";
       let jkp=[];
   if(!zo){
       //console.log(lkp[i],'y');
      lkp[i].style.display="";
   }else{}
}
}

let gf=document.querySelectorAll(".city");
for (let d = 0; d < gf.length; d++) {

  let hyt= gf[d].querySelectorAll('td input');
var fhall=1;
   for (let g = 0; g <hyt.length; g++) {
     fhall+=hyt[g].value;
   }
  if(fhall==="1"){
    gf[d].style.display="none";
  }
   //console.log("gghgh",fhall);
  }
tot();
}

//  toggle in sample/bulk oder
function oderc(y) {
  let x = y.innerText;
  if (x === "Sample") {
    y.innerText = "Bulk";
  } else {
    y.innerText = "Sample";//console.log(x);
  }
}

///each oninput table cell
function inclick(zx) {
 //macin();
 console.log(Number(zx.value))
 let tbid=zx.parentElement.parentElement.parentElement.parentElement.id;

 let xn=Array.from(zx.parentNode.parentNode.children).indexOf(zx.parentNode);

let pk1=document.getElementById(tbid).rows;
var jk=0;
for (let i = 2; i < pk1.length; i++) {
   let njh=pk1[i].cells[xn].querySelector('input').value;
   let njh1=Number(njh);
   jk+=njh1;
   
}
 let ihj=document.querySelectorAll("#"+tbid+" > thead > tr.w3-red > th")[xn].innerText;
 let ihj1=zx.parentElement.parentElement;
 let ihj2=document.querySelectorAll("#"+tbid+" > thead > tr.w3-red > th")[0].innerText;
 //console.log('kjkj',ihj2,ihj1.querySelector('th').innerText,ihj,zx.value);
 let ihjk=Number(zx.value);
//  
 stork(ihj2,ihj1.querySelector('th').innerText,ihj,ihjk);
 //console.log(od);
document.querySelectorAll("#"+tbid+" > thead > tr.w3-blue-grey > th")[xn].innerText=jk;
 let uy=document.querySelectorAll("#"+tbid+" > thead > tr.w3-blue-grey > th");
 var rt=0;
 for (let u = 1; u < uy.length; u++) {
  let yt12=uy[u].innerText;
  let yt3= Number(yt12);
  rt+=yt3;
  //console.log('gggtttt',rt,yt12);
 }//console.log('ffftttt',rt);
 document.getElementById('odert').innerText="Total-"+rt;
}

//// Display Total table
var kli;var pctt;var pcwt;
function tot() {
let d0 = new Date();
let mo0 = new Intl.DateTimeFormat('en', { month: 'short' }).format(d0);
let da0 = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d0);
let dtt=`${da0} ${mo0}`;
let tch=document.getElementById('tch').value;let och=document.getElementById('och').value;
let dptch='';let dpoch='';
tch = (tch=='') ? tch=0 : tch=tch; och = (och=='') ? och=0 : och=och;
dptch = (tch=='') ? dptch='display:none': dptch='';
dpoch = (och=='') ? dpoch='display:none': dpoch='';

  kli=document.getElementById('gst').checked;
let pw=new Date();
document.getElementById('u13').innerText=document.getElementById('frt').innerText;   
 //document.getElementById('u33').innerHTML=new Date().toLocaleString().slice(0,-3);
//  pw.getDate()+"/"+(pw.getMonth()+1)+"/"+pw.getFullYear()+', '+pw.getHours().toString().padStart(2,"0")+':'+pw.getMinutes().toString().padStart(2,"0");
let dtt2=', '+pw.getHours().toString().padStart(2,"0")+':'+pw.getMinutes().toString().padStart(2,"0");

document.getElementById('u33').innerHTML=pw.getDate()+"/"+(pw.getMonth()+1)+"/"+pw.getFullYear()+dtt2;
//document.getElementById('u33').innerHTML=pw.split(" ")[0]+':'+pw.split(":")[1];//+pw.slice(-2);
document.getElementById('tot').style.display='';
document.getElementById('odert').style.display='none';
 var tote=0;pctt=0;pcwt=0;
let uy= document.querySelectorAll('.city thead tr:nth-child(1)');
for (let v = 0; v < uy.length; v++) {
 uy[v].style.display='none';
}
 
let tg=document.querySelectorAll('.city');
var sd0='';let cot=0;
for (let b = 0; b < tg.length; b++) {
let sd2=document.querySelectorAll("#trth .w3-blue")[b].innerText.trim();
  let sd1=tg[b].querySelectorAll("thead > tr.w3-blue-grey > th");
  //console.log('ffffff',sd1);
  let cta=0;let ctb=0;let ctc=0;
  for (let h = 1; h< sd1.length; h++) {
   let njh=sd1[h].innerText;
   let njh1=Number(njh);
   tote+=njh1;
   if (h<=4) {
    cta+=njh1;
   } else if(h==5) {
     ctb=njh1;
   }else if(h==6) {
    ctc=njh1;
  }}
  let ctt=(cta+ctb+ctc);
  if(ctt!=0){
    sd0+="<tr>"+pc(sd2,cta,ctb,ctc)+"</tr>";
   
  }
}//console.log(sd0);
let pctt1="<tr><td colspan='3' style='padding: 1px 4px 1px 2px!important'><div><b class='sc1'>"+tote+" PCS Total</b><b class='sc1' style='margin-left: 2px;background: #2e2effd6'>"+Math.ceil(pcwt)+"kg</b><b class='sa2'>"+pctt+'₹ + 5% Tax</b></div></td>'+'</tr>';
let pctt2="<tr style="+dptch+"><td colspan='2'><b class='sa2'>Transport Charge -</b></td><td>"+"<b>"+tch+'₹'+'</b></td></tr>';
let pctt3="<tr style="+dpoch+"><td colspan='2'><b class='sa2'>Other Charges -</b></td><td>"+"<b>"+och+'₹'+'</b></td></tr>';
let pctt4="<tr><td colspan='2'><b style='font-size: 12px; font-weight: 500;'>"+dtt+dtt2+"</b><b class='sa2'>Total Amount -</b></td><td>"+"<b class='sc1'>"+Math.ceil(((Number(pctt)*0.05)+Number(pctt)+Number(tch)+Number(och))).toLocaleString('en-IN')+'₹'+'</b></td></tr>';
document.querySelector('#tot table tbody').innerHTML=sd0+pctt1+pctt2+pctt3+pctt4;
 document.querySelector('#tot thead tr #u13').contentEditable=true;
 document.querySelector('#tot thead tr #u23').innerText='Total-'+tote;
}

// store in od var 
 function stork(t,c,s,v) { // type color size value
  //console.log(v);
  if(v!=0){
   if (t in od){//alert('type available') // check type available
                  
       if (c in od[t]){//alert('color available') // check color available
        od[t][c][s]=v; // add or update value
        }
        else{ //alert('color not available') // if color not available
         od[t][c]={}; // add color
         od[t][c][s]=v; // add value
        }
                
 }else{ //alert('type not available') // if type not available
  od[t]={}; /// add type
  od[t][c]={};
  od[t][c][s]=v; // add value
  
   }
  }else{
    // remove zero value and empty color
    //console.log(od[t][c][s],v);
    delete od[t][c][s]
    //console.log((Object.keys(od[t][c]).length === 0))
   if(Object.keys(od[t][c]).length === 0){delete od[t][c]}
   if(Object.keys(od[t]).length === 0){delete od[t]}

  }
 }
// end stork

// create new, clear old input 
function newc(){
  document.querySelector('#gall input').click();
 let hjk=document.querySelectorAll('.city table td input');

for (let t of hjk) {
    if(t.value){t.setAttribute('value','')}
}
// this.disabled = true;
// document.getElementById('btn_convert').disabled = true;
let ty=document.querySelectorAll(".city tbody > tr > td> input");
 ty.forEach(clewr);
function clewr(v, i, a) {
  ty[i].value='';
}

 let ty1=document.querySelectorAll(".city thead > tr.w3-blue-grey>th");
 for (let q = 0; q < ty1.length; q++) {
  ty1[q].innerText='';
 } 
 let ty2=document.querySelectorAll("thead > tr.w3-blue-grey>th:nth-child(1)");
  for (let q = 0; q < ty2.length; q++) {
  ty2[q].innerText='Total';
 } 
 document.querySelector("body > div.bar > div.w3-bar.w3-purple > button:nth-child(1)").click();
document.getElementById('id01').style.display='block';
 document.getElementById('incn').value='';
 document.getElementById('gst1').checked=0;
 document.getElementById('tch').value='';
 document.getElementById('och').value='';
 od={}; zsr={};//ods={};
}

// clickCounter for customer id
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
    zxc=localStorage.clickcount;
 
}

// generate countinious oder list for print pdf
function gentbls() {
let hjk=document.querySelectorAll('.city table td input');
for (let t of hjk) {
    if(t.value){t.setAttribute('value',t.value)}
}

let zxc1= document.querySelectorAll('#tb [id]');
for (let t of zxc1) {
    t.id='';
    
}

let uy3=document.getElementById('tot').outerHTML;
var tbt="<table class='w3-table-all w3-centered'>";
let uy=document.querySelectorAll('.city');
for (let e = 0; e < uy.length; e++) {
    if(!(uy[e].style.display === '') && (uy[e].style.display === 'block')){
        //console.log('true',uy[e]);
      let uy1=uy[e].querySelectorAll('tbody tr');
       let uy2=uy[e].querySelector('thead tr.w3-red').outerHTML;
        tbt+=uy2;
        for (let e1 = 0; e1 < uy1.length; e1++) {
               if((uy1[e1].style.display === '') || (uy1[e1].style.display === 'block')){
                //console.log(uy1[e1]);
                let yui=uy1[e1].outerHTML;
                tbt+=yui;
            }
            
        }
    }else{//console.log('false',uy[e]);
         }
    
}
 
let zh1="<div class='w3-quarter w3-tag'>"+(Number(zxc)+1)+"</div>";
document.getElementById('tb').innerHTML+="<div class='pb' style='border: 2px solid'>"+zh1+uy3+tbt+"</table></div><div style='break-after:always'></div>";
//document.querySelector('#tb .w3-tag').style.display='';
//document.querySelector('#tb #tot :last-child .w3-tag').innerHTML=zxc;
//console.log(uy3+tbt+"</table>");
}// End //s generate countinious oder list for print pdf

// store customer name and Total Qt. 
// var getu={};
// var kli;
// function stry() {
//  kli=document.getElementById('gst').checked;
//  //console.log(kli);
//  if (!localStorage.gstc) {alert('GST clear');localStorage.setItem("gstc", "{}");}
// if(kli){


// // getu = ;
// var getu=JSON.parse(localStorage.getItem('gstc'));  //alert('ffffff');
// let rty=(Number(zxc)+1)+document.getElementById('u13').innerText.trim();
// let rty1=document.getElementById('u23').innerText;
//  //console.log(rty,rty1);
// getu[rty]=rty1;
//  localStorage.setItem("gstc", JSON.stringify(getu));
//   //console.log('gstc:',cdt,getu1,this.checked);
//  }

// } // End store customer name and Total Qt.

// onload model get Customer Name and gst
function gonext() {
		
   // alert(document.getElementById('instock').checked);
   if (document.getElementById('instock').checked) {
    document.getElementById("incn").value=document.querySelector('#gall input[type="radio"]:checked').labels[0].innerText;
   }
   let ur=document.getElementById("incn").value;
		if(ur){
    document.getElementById('u13').innerHTML=ur;
    document.getElementById('frt').innerHTML='<strong>'+ur+'</strong>';
    document.getElementById('gst').checked=document.getElementById('gst1').checked;

   let val5=document.querySelector('#gall input[type="radio"]:checked').value;
   document.getElementById("gsel").options[val5].selected=true;

   document.getElementById('id01').style.display='none';
    // let ge5 = document.getElementById("gsel");
    // let ovalue=ge5.options[ge5.selectedIndex].value;
  //e.options[2].selected=true
  
         
		 }else{alert('Customer Name Koun Likhega?');}
		}
// change title
// document.title='A';
// document.title+=zxc+'-';

// Total stock store in localStorage
// var ods={};
// function stort(z) {
 
// let retrievedObject = localStorage.getItem('ods');
//  ods=JSON.parse(retrievedObject)
// //console.log('retrievedObject: ', ods);

// Object.keys(od).forEach(function(t) {
//   //  type loop
//  Object.keys(od[t]).forEach(function(c) {
//   // color loop
//    Object.keys(od[t][c]).forEach(function(s) {
//     // size loop
//     if(z===1){ods[t][c][s]=od[t][c][s];}
//      if(z===(-1)){ods[t][c][s]-=od[t][c][s];}
//     else{ods[t][c][s]+=od[t][c][s];}
//     localStorage.setItem('ods', JSON.stringify(ods));
//  // console.log( t,c,s, od[t][c][s]); 
//   });
//  });
// }); 
// }// End Total stock store in localStorage

// Print
function omprint() {
 // document.title+=zxc+',';
 // window.print();
if(Object.keys(selod5).length){
///console.log(selod5);

    var myW;var tyu5;
document.getElementById('uyt4').innerHTML='';
  myW = window.open("", "_blank");
  myW.document.body.setAttribute('onclick','print()');
myW.document.body.innerHTML+="<style>body{margin: 0 8px}table tbody:last-child {display:none}div {padding: 5px;margin: 5px 0;overflow: auto;font-size: 18px;font-family: sans-serif;font-weight: 600;}table, th, td {border: 1px solid black;border-collapse: collapse;text-align: center;font-weight: 600;}#tblom1 {width: 100%;}#tblom1  tbody tr:first-child{color:blue;background: #ffdfdd;}</style><div id='my56'></div>";
let st = new Localbase('st');
for (const p in selod5) {
 // console.log(`${property}: ${object[property]}`);
st.collection(selg).doc(p).get().then(doc => {
 // console.log(doc);
odtbl2(doc.it,'tblom1','uyt4',p,doc);
      tyu5=document.getElementById('uyt4').innerHTML;
     myW.document.body.innerHTML+=tyu5;
     //my56
});  

   }

 // table gen for oder
function odtbl2(jk,b,c1,or,doc) {
document.getElementById(c1).innerHTML="<div><span style='float: left'>"+"Bill To: "+doc.cn+"<br/>Total: "+doc.tot+"</span><span style='float: right'>"+"Invoice No.: "+doc.id+"<br/>Date: "+doc.dt+"</span></div><div id='"+or+"' style='break-after:page;border-style: dashed;border-width: 0.5px;'><table id='"+b+"'><tbody></tbody></table>";
var sd1=document.querySelector('#'+or+' #'+b);
  
Object.keys(jk).forEach(function(t) {
  //  type loop
  if((t==='Bio')||(t==='NBio')){
    sd1.innerHTML+="<tbody id='"+t.replace(/\s+/, "")+"' style=''><tr> <th>"+typep7[t]+"</th> <th>36</th> <th>38</th> <th>40</th> <th>42</th> <th>44</th> <th>46</th> </tr></tbody><table><tr><td style='border: none; background: white'><br></td></tr></table>";
  }else{sd1.innerHTML+="<tbody id='"+t.replace(/\s+/, "")+"' style=''><tr> <th>"+typep7[t]+"</th> <th>XS</th> <th>S</th> <th>M</th> <th>L</th> <th>XL</th> <th>XXL</th> </tr></tbody><table><tr><td style='border: none; background: white'><br></td></tr></table>";
}
  
 Object.keys(jk[t]).forEach(function(c) {
  // color loop
   sd1.querySelector('#'+t).innerHTML+="<tr id='"+c.replace(/\s+/, "")+"'> <th>"+c+"</th> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>"
   Object.keys(jk[t][c]).forEach(function(s) {
    // size loop

  switch (s) {
  case "36":
  case "XS":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(2)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(2)').setAttribute("id", s);
    break;
  case "38":
  case "S":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(3)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(3)').setAttribute("id", s);
    break;
  case "40":
  case "M":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(4)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(4)').setAttribute("id", s);
    break;
  case "42":
  case "L":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(5)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(5)').setAttribute("id", s);
    break;
  case "44":
  case "XL":
   sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(6)').innerHTML=jk[t][c][s];
   sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(6)').setAttribute("id", s);
    break;
  case "46":
  case "XXL":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(7)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(7)').setAttribute("id", s);

}
     
//console.log( t,c,s, jk[t][c][s]); 
  });
 });
});
}// End table gen for oder

 for (let u in selod5) {document.getElementById(u).checked=false;}
 selod5={};
}else{alert('Kya timepass ker raha h!\nPahle order select ker le')}
}

function pky7() {
  // document.querySelector('#id01 span').style.display='none';
    document.getElementById('id01').style.display='none';
    document.getElementById('gstall').innerHTML='';
   document.getElementById('bnm7').style.display='block';
}


// get all gst Customer name 
// function getgstall() {
//   let ty7 = localStorage.getItem('gstc');
// let ty8=JSON.parse(ty7);
// document.getElementById('id01').style.display='block';
// document.getElementById('bnm7').style.display='none';
// document.getElementById('gstall').style.display='block';
// // document.querySelector('#id01 span').style.display='';
// let gstli="<div><ul class='w3-ul w3-border w3-hoverable'>";

// for (let i = Object.entries(ty8).length-1; i>=0 ; i--) {
// //console.log(Object.entries(ty8).length,Object.entries(ty8)[i])
//   gstli+="<li class='w3-display-container'>"+'<b>'+ Object.entries(ty8)[i][0]+" "+Object.entries(ty8)[i][1]+"<span onclick='remgst(this)' class='w3-button w3-display-right'>&times;</span></b></li>";
//    //console.log(i,ty[i]);  
// }
// document.getElementById('gstall').innerHTML=gstli+'</ul></div>';
// }

// view and download all stock
//  function stockv() {
// let tfv17="<button class='w3-button w3-blue' id='wer7'>Export</button><button class='w3-button w3-blue' id='wer8'>Reset</button><button class='w3-button w3-blue' id='wer9'>Edit</button><button onclick='save1()' class='w3-button w3-blue' id='wer10'>Save</button><div class='w3-panel' style='padding: 0;margin: 0'><table id='testTable' class='w3-table-all w3-bordered w3-centered w3-striped w3-border test' style='color:#000'><tr class='w3-green'><th>Type</th><th>Color</th><th>Size</th><th>QT.</th></tr>";
// //document.getElementById('gstall').innerHTML='';
// document.getElementById('id01').style.display='block';
// document.getElementById('bnm7').style.display='none';
// document.getElementById('gstall').style.display='block';
// // document.querySelector('#id01 span').style.display='';

// var ods={};
// let retrievedObject = localStorage.getItem('ods');
// ods=JSON.parse(retrievedObject)
// //console.log('lllloooolllll: ', ods);

// var tfv27='';
// Object.keys(ods).forEach(function(t) {
//   //  type loop
//  Object.keys(ods[t]).forEach(function(c) {
//   // color loop
//    Object.keys(ods[t][c]).forEach(function(s) {
//     // size loop
//    // ods[t][c][s];
//     tfv27+="<tr><td>"+t+"</td><td>"+c+"</td><td>"+s+"</td><td>"+ods[t][c][s]+"</td></tr>";
//  // console.log( t,c,s, ods[t][c][s]); 
//   });
//  });
// });

// document.getElementById('gstall').innerHTML=tfv17+tfv27+'</table></div>';
//   let oj= document.querySelectorAll('#testTable tr td:last-child');
//   let jk7=0; function mrt(v){jk7+=Number(v.innerText)}
//   oj.forEach(mrt)
//   document.querySelector('#testTable tr th:last-child').innerHTML='Qt. '+jk7;
  
//  document.getElementById('wer7').onclick= function () {
//   let bn9=document.querySelectorAll("#testTable > tbody > tr > td:nth-child(1)");
// bn9.forEach(fgh7);
// function fgh7(v) {
//   let cbv=v.innerText;
//    v.innerText=typep7[cbv];
// }
//  tabletcsv('testTable','L-Until.'+localStorage.clickcount);stockv();
//  }
//   // Reset localStorage.ods 
//  document.getElementById('wer8').onclick= function () {
//     let per = prompt("Please enter 'ok' to reset all data");
//   if (per==="ok") {
//    //console.log('fgrfrrr',per);
//    tabletcsv('testTable');
//  localStorage.setItem("ods", JSON.stringify(ods1));
//  document.getElementById('gstall').innerHTML='';
//   stockv(); 
//   }
//  }
// // Edit stock and save
// document.getElementById('wer9').onclick=function () {
// // console.log(this.parentElement);
//  document.getElementById('wer9').setAttribute('style', 'background:red!important');
//  od={};
// document.querySelectorAll('#testTable tr').forEach(ust);
// function ust(it, i, ar) {
//  ar[i].onclick=function () {
// // let z7=this.parentElement;
//   this.style.color="blue";
//   this.style.background="yellow";
//    this.querySelector("td:last-child").contentEditable=true; 
//  }
// }}
  
// }// End view and download all stock

// remove gst
// function remgst(h) {
//  let kl7=h.parentElement.innerText;
//  let kl8=kl7.split(' Total-')[0].trim();
//  let kl9=JSON.parse(localStorage.getItem('gstc'));
// // localStorage.gstc
//  delete kl9[kl8];
// localStorage.setItem("gstc", JSON.stringify(kl9));
//  h.parentElement.parentElement.outerHTML='';
// // getgstall();
//  //console.log(h.parentElement.parentElement,localStorage.gstc);
// }


// for Total download new
function totaldownloadnew() {
 document.getElementById("alltab").click();
 document.getElementById("btn_convert").click();
 newc();
}

// onclick New
function newocb() {
 document.getElementById('bnm7').style.display='block';
  document.getElementById('p78').style.display='none';
 document.getElementById('gstall').innerHTML='';
 newc();
}



/// save 
// function save1() {
 
//  let bn7=document.querySelectorAll("#testTable tr [contentEditable]");
// bn7.forEach(bhjk);
// function bhjk(v, i, a) {
//  //console.log(v,i,a);
//  let vb7=v.parentElement.innerText;
//  let vb8=vb7.split("\t");
//  //console.log(vb8);
//  stork(vb8[0],vb8[1],vb8[2],Number(vb8[3]));
// //s console.log(od);
// }
// //stort(1);
// stockv();ods={};
// }

// var time = new Date();
// console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );

///each oninput table cell

function inclick(zx) {
 //macin();

 let tbid=zx.parentElement.parentElement.parentElement.parentElement.id;

 let xn=Array.from(zx.parentNode.parentNode.children).indexOf(zx.parentNode);
//console.log('cvbnmkkk',tbid,xn);
let pk1=document.getElementById(tbid).rows;
var jk=0;
for (let i = 2; i < pk1.length; i++) {
   let njh=pk1[i].cells[xn].querySelector('input').value;
   let njh1=Number(njh);
   jk+=njh1;
   
}//console.log(zx,zx.value,'asd');
 let ihj=document.querySelectorAll("#"+tbid+" > thead > tr.w3-red > th")[xn].innerText;
 let ihj1=zx.parentElement.parentElement;
 let ihj2=document.querySelectorAll("#"+tbid+" > thead > tr.w3-red > th")[0].innerText;
 //console.log('kjkj',ihj2,ihj1.querySelector('th').innerText,ihj,zx.value);
 let ihjk=Number(zx.value);
 stork(ihj2,ihj1.querySelector('th').innerText,ihj,ihjk);
 //console.log(od);
document.querySelectorAll("#"+tbid+" > thead > tr.w3-blue-grey > th")[xn].innerText=jk;
 let uy=document.querySelectorAll("#"+tbid+" > thead > tr.w3-blue-grey > th");
 var rt=0;
 for (let u = 1; u < uy.length; u++) {
  let yt12=uy[u].innerText;
  let yt3= Number(yt12);
  rt+=yt3;
  //console.log('gggtttt',rt,yt12);
 }//console.log('fghjkk',rt);
 document.getElementById('odert').innerText="Total-"+rt;
}

// Download for customer oder .json file
 var zsr={}
function corj() {
 //let 'od'+localStorage.clickcount = {};
 
zsr.id = (Number(zxc)+1);
zsr.cn = document.getElementById('u13').innerText;
zsr.tot = Number(document.getElementById('u23').innerText.split('-')[1]);
zsr.gst = document.getElementById('gst').checked;
//zsr.dt = document.getElementById('u33').innerText.split(',')[0]; 
let d0 = new Date();
let ye0 = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d0);
let mo0 = new Intl.DateTimeFormat('en', { month: 'short' }).format(d0);
let da0 = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d0);
zsr.dt=`${da0}/${mo0}/${ye0}`;
//zsr.dt=new Date().toLocaleDateString("en-US", {day:'numeric',month:'short',year: 'numeric'});
//.split(' ').reverse().join(' ');
zsr.it = od; 
zsr.tch=Number(document.getElementById('tch').value)
zsr.och=Number(document.getElementById('och').value)
 //console.log('json:',zsr)
 //var obj = {a: 123, b: "4 5 6"};
// var data5 = "text/json;charset=utf-8," + encodeURIComponent('od'+(Number(zxc)+1)+'='+JSON.stringify(zsr));

// let a = document.createElement('a');
// a.href = 'data:' + data5;
// a.download = 'od'+(Number(zxc)+1)+'.json';
// a.innerHTML = 'download JSON';
// document.body.appendChild(a);
// a.click();a.remove();
}


//save each odered stock
// var st = new Localbase('st');
// function savsto(v) {

//  st.collection('ods')
//   .add(v, 'od'+(Number(zxc)+1))
//   .then(response => {
//     console.log('Add successful')
//   })
//   .catch(error => {
//     console.log('There was an error')
//   })
 
// }

// get document by key
// st.collection('ods').doc('od97').get().then(document => {console.log(document)})

// update document by key
//st.collection('ods').doc('mykey-1').update({name: 'William'})

// delete a document by key
//st.collection('ods').doc('mykey-1').delete()

// 

function stockm() {
 document.getElementById('p78').style.display='block'
 document.getElementById('bnm7').style.display='none';
 setTimeout(function () {document.getElementById('p781').click()}, 100);
 //document.getElementById('p781').click()
}

function indb(d) {
selg=d.name;
document.getElementById('gstall').style.display='block';

selgo(selg)
if (selg=='inst') {
  document.getElementById('gstall').innerHTML="<div id='tre6'><ul id='oderli' class='w3-ul w3-hoverable'></ul></div>";
  getods(d.name);
  document.getElementById('bnm7').style.display='none';
  document.getElementById('p78').style.display='none';
}else{
document.getElementById('gstall').innerHTML="<div class='w3-bar w3-blue-gray'><div class='w3-bar-item w3-button w3-border-right' onclick='delod()'>Del</div><div id='cout6' class='w3-bar-item w3-button w3-border-right'>Total</div><div onclick='resetd()' class='w3-bar-item w3-button w3-border-right'>Reset</div><button class='w3-button w3-bar-item w3-border-right' onclick='omprint()'>Print</button>"+"<div id='st91' class='w3-dropdown-hover'> <button class='w3-button'>Status</button> <div id='st92' class='w3-hide w3-bar-block w3-border'> <a href='#' onclick='unpin()' class='w3-bar-item w3-button'>None</a> <a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>Payment Pending</a> <a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>Under Production</a> <a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>Printing</a><a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>Part Quantity</a> <a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>Pending</a> <a href='#' onclick='chnot(0,this)' class='w3-bar-item w3-button'>In Transit</a> <input onchange='chnot(1,this)' id='inp5' name='od84' class='w3-border w3-bar-item' type='text' style='padding:5px;display:none' placeholder='Write other...'></div></div></div>"+"<div id='tre6'><ul id='oderli' class='w3-ul w3-hoverable'></ul></div>";
document.getElementById('st91').addEventListener('click', (v) => {
  document.getElementById('st92').classList.toggle('w3-show')
})
getods(d.name);

selod5=JSON.parse(pinloc);
setTimeout(function(){pint(0,pinloc);selod5={};console.log('onkar')},350);

document.getElementById('cout6').addEventListener("click", function() {
 let fromod1=Number(localStorage.fromod);
 if(1+Number(localStorage.clickcount)-Number(localStorage.fromod)){couttot(fromod1,selg)}
 else{alert("No data to count total ")}
})

}}

function chnot(b,v) {
  //alert(v.value)// set pin sms
  if(Object.keys(selod5).length){
    var lastsel=Object.keys(selod5)[Object.keys(selod5).length-1];
  selpin(selg);selgo(selg);pint(1)
  ///op5[v.name]=v.value;
  //b==='1' ?  op5[lastsel]=v.value :  op5[lastsel]=v.innerText;
  op5= JSON.parse(pinloc);
  if (b===1) {
    op5[lastsel]=v.value;
    document.querySelector('#vtag [name='+lastsel+']').innerHTML=v.value;
  } else {
    op5[lastsel]=v.innerText;
    document.querySelector('#vtag [name='+lastsel+']').innerText=v.innerText;
  }
  localStorage.setItem(pinz,JSON.stringify(op5));

 v.value='';for (let u in selod5) {document.getElementById(u).checked=false;}selod5={};

}else{alert('Select order first. \nBakchoodi na ker')}}
var clickh=0;
function opodli(b) {
    //console.log(b.getAttribute("for"));
    let st = new Localbase('st');
  //  op5= JSON.parse(pinloc);
   // console.log('1',op5)
    let qwe5=b.getAttribute("for");
    st.collection(selg).doc(qwe5).get().then(doc=> {
      //  console.log("data:",uio=doc.it)
        //gentblo(doc.it,qwe5);
     clickh+=1;
if((clickh % 2 == 0)) {
  
  //if(document.getElementById('my55')){}
  if(document.getElementById('aa5')){document.getElementById('my55').remove();document.getElementById('aa5').remove()}
  //b.click();
}else{
  // if (op5.hasOwnProperty(b.getAttribute("for"))) {
  //    kk5="<input onchange='chnot(this)' id='inp5' name='"+b.getAttribute("for")+"' class='w3-border w3-input' type='text' style='padding:0 5px' placeholder=' Write Notes...'>"
  
  // }else{ kk5=''}
  if(!document.getElementById('my55')){b.parentElement.insertAdjacentHTML('afterend', "<div id='aa5' style='font-weight: 600;display: flex;'><div class='w3-small w3-button w3-border-right w3-dark-grey' id='b"+qwe5+"' onclick='editod(this)'>Edit</div></div></div>"+"<div id='my55'>Sample Div</div>")}
     odtbl(doc.it,'tblom1','my55'); 
     }
    
    })
  //  setTimeout(()=>{
  //   if((op5.hasOwnProperty(b.getAttribute("for"))&&(op5[b.getAttribute("for")])===b.getAttribute("for"))){
  //    // alert('note1')
  //   }else{//alert('note2')
  //     if(document.getElementById('inp5')){
  //       console.log('2',op5)
  //     document.getElementById('inp5').value=op5[b.getAttribute("for")]
    
  //     }
  //   }},40);
      // localStorage.setItem('pin',JSON.stringify(mer5))//JSON.stringify(mer5)//JSON.parse()
      // selod5={};
      // let vkz5={ p: "3", od:{...JSON.parse(localStorage.pin)}};

}

// table gen for oder
function odtbl(jk,b,c2) {
document.getElementById(c2).innerHTML="<table id='"+b+"'></table>";
var sd1=document.getElementById(b);
  
Object.keys(jk).forEach(function(t) {
  //  type loop
  if((t==='Bio')||(t==='NBio')){
    sd1.innerHTML+="<tbody id='"+t.replace(/\s+/, "")+"'><tr> <th>"+t+"</th> <th>36</th> <th>38</th> <th>40</th> <th>42</th> <th>44</th> <th>46</th> </tr></tbody>";
  }else{sd1.innerHTML+="<tbody id='"+t.replace(/\s+/, "")+"'><tr> <th>"+t+"</th> <th>XS</th> <th>S</th> <th>M</th> <th>L</th> <th>XL</th> <th>XXL</th> </tr></tbody>";
}
  
 Object.keys(jk[t]).forEach(function(c) {
  // color loop
   sd1.querySelector('#'+t).innerHTML+="<tr id='"+c.replace(/\s+/, "")+"'> <th>"+c+"</th> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>"
   Object.keys(jk[t][c]).forEach(function(s) {
    // size loop

  switch (s) {
  case "36":
  case "XS":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(2)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(2)').setAttribute("id", s);
    break;
  case "38":
  case "S":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(3)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(3)').setAttribute("id", s);
    break;
  case "40":
  case "M":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(4)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(4)').setAttribute("id", s);
    break;
  case "42":
  case "L":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(5)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(5)').setAttribute("id", s);
    break;
  case "44":
  case "XL":
   sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(6)').innerHTML=jk[t][c][s];
   sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(6)').setAttribute("id", s);
    break;
  case "46":
  case "XXL":
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(7)').innerHTML=jk[t][c][s];
    sd1.querySelector('#'+t.replace(/\s+/, "")+' #'+c.replace(/\s+/, "")+' '+'td:nth-child(7)').setAttribute("id", s);

}
     
//console.log( t,c,s, jk[t][c][s]); 
  });
 });
});
}// End table gen for oder

// 

function selod(h) {
 let er5=h.id;
 if(h.checked){selod5[er5]=er5;}else if(!h.checked){delete selod5[er5]; }
 
 console.log(selod5);
}
 // count total and make table
//alert('',xc)
    var pd2;
  async function couttot(xc,gd,till) {  
    let st = new Localbase('st');
  pd2=structuredClone(ods1);//{...ods1}
  console.log(pd2)
 let tyn5=Number(localStorage.clickcount);
 var doc5;
 if (till) {
  tyn5=till;
 }
for (let v = xc; v <= tyn5; v++) {   

st.collection(gd).doc('od'+v).get().then(doc => {
 // console.log(doc.it)
if (typeof doc.it != "undefined") {
  doc5=doc.it;
}else{doc5={}}

})
 .then(response => {
 
  //console.log(doc5)
   lelo(doc5);
  })
  }   
 }

//
 
function lelo(kk) {
    Object.keys(kk).forEach(function(t) {
  //  type loop
 Object.keys(kk[t]).forEach(function(c) {
  // color loop
   Object.keys(kk[t][c]).forEach(function(s) {
    // size loop
    pd2[t][c][s]+=kk[t][c][s];
    //console.log(pd2[t][c][s],kk[t][c][s]);
 // console.log( t,c,s, od[t][c][s]); 
  });
 });
}); 

//<input class='w3-border w3-input' type='text' style='padding: 0' placeholder='Write Notes...'></div>
  
let tfv17="<div class='w3-panel' style='padding: 0;margin: 0'><table id='testTable' class='w3-table-all w3-bordered w3-centered w3-striped w3-border test' style='color:#000'><tr class='w3-green'><th>Type</th><th>Color</th><th>Size</th><th>QT.</th></tr>";
//document.getElementById('gstall').innerHTML='';
document.getElementById('id01').style.display='block';
document.getElementById('bnm7').style.display='none';
document.getElementById('gstall').style.display='block';
// document.querySelector('#id01 span').style.display='';

var tfv27=''; var qt5=0;// console.log(pd2)
Object.keys(pd2).forEach(function(t) {
  //  type loop
 Object.keys(pd2[t]).forEach(function(c) {
  // color loop
   Object.keys(pd2[t][c]).forEach(function(s) {
    // size loop
   
    if(!(pd2[t][c][s]===0)){
     qt5+=pd2[t][c][s];
    tfv27+="<tr><td>"+typep7[t]+"</td><td>"+c+"</td><td>"+s+"</td><td>"+pd2[t][c][s]+"</td></tr>";}
 // console.log( t,c,s, od[t][c][s]); 
  });
 });
});

document.getElementById('tre6').innerHTML=tfv17+tfv27+'</table></div>';
 tfv27='';
  document.querySelector('#testTable tr th:last-child').innerHTML='Qt. '+qt5;

 
}

var dfg6=0;
let tyg=document.querySelectorAll('#id01 .w3-modal-content button');
tyg.forEach(omak)
function omak(n,i,a){  
 
 n.addEventListener("click", function() {
  let idrr='';
  if(n.id==='ghy99'||n.id==='p781'||n.id==='p782'||n.id==='p783'||n.id==='p784'){idrr='#'+n.id+','+'#ghy99,'}
   
  
  if(n.id){
   document.getElementById('i88').innerHTML="<style>"+idrr+"#"+n.id+"{color: #fff!important; background-color: #000!important;}</style>"}
  else{
   dfg6++;
   n.setAttribute('id','ghy'+dfg6)
  document.getElementById('i88').innerHTML="<style>#ghy"+dfg6+"{color: #fff!important; background-color: #000!important;}</style>";
 }
})
}

// export tabletocsv
 function tabletcsv(table_id,oderno,separator = ',') {
    // Select rows from table_id
    var rows = document.querySelectorAll('table#' + table_id + ' tr');
    // Construct csv
    var csv = [];
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');
        for (var j = 0; j < cols.length; j++) {
            // Clean innertext to remove multiple spaces and jumpline (break csv)
            var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')

            data = data.replace(/"/g, '""');
            // Push escaped string
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }
    var csv_string = csv.join('\n');
    // Download it
    var filename = oderno+ '.csv';
    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  // Download image
    
function downl(imgurl,imgnm){
let htl="<a id='link55' href='"+imgurl+"' download='"+imgnm+"'>hjhj</a>";
let iframe = document.createElement('iframe');
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(htl);
iframe.contentWindow.document.getElementById('link55').click();
iframe.contentWindow.document.close();
 setTimeout(function(){ iframe.remove()}, 5000);
}


  
// pin 
// var moveItem=function(){};
if(!localStorage.pin){localStorage.setItem('pin','{}')}
if(!localStorage.pint){localStorage.setItem('pint','{}')}
if(!localStorage.pink){localStorage.setItem('pink','{}')}
if(!localStorage.pinpd){localStorage.setItem('pinpd','{}')}
if(!localStorage.pinpd){localStorage.setItem('inst','{}')}
function pint(v,p) {
  selgo(selg)
  for (const t in selod5) {
  let px=document.getElementById(t);
  let xm=Array.from(px.parentNode.parentNode.children).indexOf(px.parentNode);
  //console.log(xm,px)
  if(t!=selod5[t]){document.querySelector('#vtag [name='+t+']').innerText=selod5[t];}
  //document.querySelector().innerText=selod5[t];
  moveItem(xm,0);
  px.parentNode.style.background='#ffeb3b';
  document.getElementById(t).checked=false;
 // console.log(xm)
  }
  let mer5 = {...JSON.parse(pinloc), ...selod5};
  selpin(selg)
  localStorage.setItem(pinz,JSON.stringify(mer5))//JSON.stringify(mer5)//JSON.parse()
  selod5={};
  let vkz5={ p: "3","g":selg, od:{...mer5}};
  if(v===1){sendd(urli,vkz5,'pins')}
  
}
var moveItem = (from, to) => {
  const aul=document.getElementById('oderli');
  const items = [...aul.querySelectorAll('li')];
  if (to > items.length - 1 || to < 0) return;
  
  const item = items[from];
  if (!item) return;
  
  aul.removeChild(item);
  aul.insertBefore(item, aul.children[to]);
}

function unpin(p){
  //
  for (const t in selod5) {
    let px1=document.getElementById(t);
    px1.parentNode.style.background='';selgo(selg);
   let mk5=JSON.parse(pinloc);
   document.querySelector('#vtag [name='+t+']').innerText='';
   delete mk5[t];
   selpin(selg)
    localStorage.setItem(pinz,JSON.stringify(mk5));
  document.getElementById(t).checked=false;
  }
  selod5={};
  let vkz6={ p: "3","g":selg,od:{...JSON.parse(pinloc)}};
  sendd(urli, vkz6,'unpin');
}

// save in sheet

// function sinsh(v,g) {
//   let pkl5=localStorage.gr5; 
//   let netb1 = 'https://script.google.com/macros/s/'+pkl5+'/dev?t55='+g+'&nm5='+JSON.stringify(v);  

//   let myWindow1=window.open(netb1 , '_blank'); // script
//   //let myWindow2=window.open(location.href , '_blank');  // webapp

//   let readyStateCheckInterval = setInterval(function() {
//     if (myWindow1.document.readyState === "complete") {
//         clearInterval(readyStateCheckInterval);
//         setTimeout(function() {
//            myWindow1.close();
//            //window.close();
//           }, 1000);
//     }
//      }, 50);
// }


/// sync
if (!localStorage.pend) {localStorage.setItem("pend", '{}')}
var vk35=JSON.parse(localStorage.getItem('pend'));
if(!(Object.keys(vk35).length === 0)){
  let st1 = new Localbase('st');
    for (let r in vk35) {
       // console.log(r);
st1.collection('ods').doc(r).get().then(doc => {
  console.log('sync:',r);
  //sinsh(doc,'0');

    delete vk35[r];
    localStorage.setItem("pend", JSON.stringify(vk35))
})
 }
}
var pinloc='{}';
function selgo(g) {
  switch (g) {
    case 'ods':
      pinloc=localStorage.pin;
      break;
    case 'odt':
      pinloc=localStorage.pint;
      break;
    case 'odk':
      pinloc=localStorage.pink;
      break;
    case 'odpd':
      pinloc=localStorage.pinpd;
      break;
    case 'inst':
        pinloc=localStorage.inst;
        break;
  }
}

function selpin(g) {
  switch (g) {
    case 'ods':
      pinz='pin'
      break;

    case 'odt':
      pinz='pint'
      break;

    case 'odk':
      pinz='pink'
      break;

    case 'odpd':
      pinz='pinpd'
      break;

    case 'inst':
        pinz='inst'
        break;
    default:
      break;
  }
}


// set last image

  let tt5=JSON.parse(localStorage.imglastod);
  document.getElementById('lastodimg').src=tt5.im5;
  document.getElementById('lastodcn').innerHTML=tt5.cn;

  // 









   





