if(!localStorage.fromod){localStorage.setItem('fromod','1')}
//alert('hi')
function resetd () {
 var odcount=1+Number(localStorage.clickcount)-Number(localStorage.fromod);
 if(odcount){
    let per1 = prompt("Please enter 'ok' to download from "+localStorage.fromod+" to "+localStorage.clickcount);
    if (per1==="ok") {
      let fromod1=Number(localStorage.fromod);
      const shod2={"p":"2","od":{'Stock Not Updated from Order No':(1+Number(localStorage.clickcount))}};
        couttot(fromod1,selg).then(()=>{
          sendd(urli, shod2,'reset');
        })
        
        
        setTimeout(function(){
        tabletcsv('testTable',odcount+'('+localStorage.fromod+'-'+localStorage.clickcount+')');
        localStorage.setItem('fromod',1+Number(localStorage.clickcount));
document.getElementById('tre6').innerHTML='';
document.getElementById('p781').click();
        },5000)

    }
}else{alert("No data to download ")}

 
}
//color: #8fbc8f;
function delod () {
 if(Object.entries(selod5)[0]){
  let r=Object.keys(selod5)[Object.keys(selod5).length-1];
  let text = "Want to delete? order No."+r.split('od')[1];
  console.log('hdhjd',selg)
  if (confirm(text) == true) {

  // let r=Object.keys(selod5)[Object.keys(selod5).length-1];
   let st = new Localbase('st');
   st.collection(selg).doc(r).get().then(doc => {
    od=doc.it;
    var an5=doc;an5.tot=0;an5.it={};an5.gst=false;an5.tch=0;an5.och=0;
   
      
(async () => {
  const shod11={"p":"1","g":selg,"od":{...an5}};
    const rawResponse = await fetch(urli, {
       method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache', 
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow', 
        body:JSON.stringify(shod11) 
      })
       .then((response) => {
        console.log(response)
        })
        .catch((error) => {
         console.log('error',error);
        let kl=JSON.parse(localStorage.getItem('pend'));
        kl['od'+shod11.od.id]=shod11.od.id;
        localStorage.setItem("pend", JSON.stringify(kl));  

});
})();
       console.log(an5);
    // stort(-1);
    od={};an5={};
  
})

 st.collection(selg).doc(r).update({
  tot: 0,it:{},gst:false //,tch:0,och:0
})
   .then(response => {
    selod5={};
    document.querySelector('[name='+selg+']').click();
  })
  .catch(error => {
    console.log('There was an error, do something else.')
  })
 
  }

} else {alert('Bhai order select ker pahle !!')}}
var pk8;var oldod;
var instg={Delhi:'ods',Tiruppur:'odt',Kolkata:'odk',PD:'odpd'}
function editod(tp) {
  let st = new Localbase('st');
  pk8=tp.id.split('b')[1];// order id od34
  st.collection(selg).doc(pk8).get().then(doc => {
    let ht=doc.cn;
    oldod=doc;

   (oldod.tch) ? document.getElementById('tch').value=oldod.tch :'';
   (oldod.och) ? document.getElementById('och').value=oldod.och :'';


    document.getElementById('frt').innerHTML="<strong>"+ht+"</strong>";
    if(doc.gst){document.getElementById('gst').checked=true;}
    if (selg=='inst') {
      document.getElementById("gsel").value=instg[ht.trim()];
    } else {
      document.getElementById("gsel").value=selg;
    }
    

    // console.log(doc.it)
  })
 
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
                    let ty6=document.querySelector('#'+wer5+' #'+wer6.replace(/\s+/, "")+' td:nth-child('+(i+1)+') input');
                   ty6.value=jk[i];triggerInput(ty6);
                }
                
            }
        }
        
        
    }
    
}
// stort(-1);
document.getElementById('id01').style.display='';
document.querySelector("div.bar button.tablink[onclick]").click();
 document.getElementById('btn_convert').style.display='none';
document.getElementById('upd5').style.display='';
function triggerInput(v) {
let event = new Event('input', {'bubbles': true,'cancelable': true});
v.dispatchEvent(event);
}}

function updateod() {
 // console.log(pk8,od);//var po5;
 if (selg=='inst') {
  document.getElementById("alltab").click();
  saveinst(0);
 setTimeout(()=>{document.getElementById("instb").click()},100); 
 }else{
document.getElementById('alltab').click();
var id55=pk8.split('od')[1];let tot55=document.getElementById('u23').innerText.split('-')[1];
zsr.id = Number(id55);
zsr.cn = document.getElementById('u13').innerText;
zsr.tot = Number(tot55);
zsr.gst = document.getElementById('gst').checked;
zsr.dt = oldod.dt; 
zsr.it = od; 
zsr.tch=Number(document.getElementById('tch').value)
zsr.och=Number(document.getElementById('och').value)

const gsel=document.getElementById("gsel").value;
var shod1={};
if(!(selg==gsel)){
  const moveunpin = async () => {
  for (let u in selod5) {document.getElementById(u).checked=false;};
   selod5={};selod5[pk8]=pk8;unpin();selod5={};
}
  async function mych() {
    await moveunpin();
      shod1={"p":"4","g":selg,"gl":gsel,"od":{...zsr}};
     await moveod(selg,gsel,'od'+id55);
  }
  mych();
 // alert('g change'); // move order ////{p:4,g:'odt',gl:'odk',od:{}}

}else{
 // alert('g normal')
  shod1={"p":"1","g":gsel,"od":{...zsr}};
}


(async () => {
  await fetch(urli, {
       method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache', 
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow', 
        body:JSON.stringify(shod1) 
      })
    .then((response) => {
  console.log(response)
     })
        .catch((error) => {
         console.log('error',error);
        let kl=JSON.parse(localStorage.getItem('pend'));
        kl['od'+shod1.od.id]=shod1.od.id;
        localStorage.setItem("pend", JSON.stringify(kl));  

});
})();
    
   
let st = new Localbase('st');
st.collection(selg).doc(pk8).set(zsr)
 .then(response => {
    document.getElementById("html33").style.width='455px';
        html2canvas(document.getElementById("html33"),
            {
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
            // var ji33=document.getElementById("u13").innerText;
            //    let po5;
            //    if(kli){po5='-GST'}else{po5=''}
              // downl(canvas.toDataURL(),zxc+'-'+ji33+po5+'.jpg');
             // localStorage.setItem('imgf',canvas.toDataURL()+',,,'+zxc+'-'+ji33+po5+'.jpg')
            //imgzx=canvas.toDataURL();
            // canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));
            var imglastod=JSON.parse(localStorage.imglastod);
            //console.log('zsr',zsr,'sho',shod1);
            imglastod['cn']=shod1.od.id+'.'+shod1.od.cn;imglastod['im5']=canvas.toDataURL();
            document.getElementById('lastodimg').src=canvas.toDataURL();
            document.getElementById('lastodcn').innerHTML=shod1.od.id+'.'+shod1.od.cn;
            localStorage.setItem('imglastod',JSON.stringify(imglastod));
           // canvas.toBlob(blob => {});
       
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
}}

//{p:4,g:'odt',gl:'odk',od:{id:34,first:"Jake",phone:"312-000-1212", last:"Newperson"}}; // move order from odt to odk
//moveod('odk','odpd','od82');
async function moveod(gf,gt,idf) {
  let st = new Localbase('st');
   var docft={};
 await st.collection(gf).doc(idf).get().then(doc => {
     docft=doc;
 })
 await st.collection(gf).doc(idf).delete()
 await st.collection(gt).doc(idf).set(docft)
}

// document.getElementById('alltab').onclick=function() {
//   html2canvas(document.querySelector("#html33")).then(canvas => canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})])))
// };

document.getElementById("seldt").valueAsDate = new Date();
document.getElementById("instock").onclick=()=>{
 // .classList.toggle("mystyle"); this.parentElement.style.display='none'
  document.getElementById("incn").classList.toggle("hide");
  document.getElementById("gst1").parentElement.classList.toggle("hide");
  document.getElementById("seldt").parentElement.classList.toggle("hide");
}

function saveinst(v) {
  let pkx={};
  // pkx.id = (Number(zxc)+1);
   pkx.cn = document.getElementById('gsel').options[document.getElementById('gsel').selectedIndex].innerText;
   pkx.tot = Number(document.getElementById('u23').innerText.split('-')[1]);
   pkx.gst = false;
   let d0 = new Date(document.getElementById("seldt").value);
   let ye0 = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d0);
   let mo0 = new Intl.DateTimeFormat('en', { month: 'short' }).format(d0);
   let da0 = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d0);
   pkx.dt = `${da0}/${mo0}/${ye0}`;
   pkx.it = od;
  
   (async () => {
     let st = new Localbase('st');
     if (v===0) {
      pkx.id=oldod.id;
     } else {
      await st.collection('inst').get().then((e) => e.length).then((id) => pkx.id=id+1);
     }
     console.log('incv',v);
     await st.collection('inst').add(pkx, 'od' +pkx.id);
     await sendd(urli, { "p": "5", "g": 'inst', "od": { ...pkx } });
    

     
   })();
  newc();
  if (v===0) {
    document.getElementById('btn_convert').style.display = '';
    document.getElementById('upd5').style.display = 'none';
   }
}

function expt(v) {
 // console.log(Number(v.parentElement.innerText.split('.')[0]))
  couttot(Number(v.parentElement.innerText.split('.')[0]),selg,Number(v.parentElement.innerText.split('.')[0]))
  setTimeout(()=>{
    tabletcsv('testTable',new Date());
  },3000)
}

function pc(v,a,b,c) { // a(36-42), b(44), c(46)
  let prc=JSON.parse(localStorage.pc);
 
  let svc='';let sva='';let svbc='';let svab='';let svpls1='';let svpls2='';
  svbc= ((b+c)!=0) ? svbc=(b+c)+'×'+prc.pc[v][1] : svbc='';
  svab= ((a+b)!=0) ? svab=(a+b)+'×'+prc.pc[v][0] : svab='';
  svc = (c!=0) ? svc=c+'×'+prc.pc[v][1] : svc='';
  sva = (a!=0) ? sva=a+'×'+prc.pc[v][0] : sva='';

  svpls1 = ((a!=0) && ((b+c)!=0)) ? svpls1='+' : svpls1='';
  svpls2 = ((c!=0) && ((a+b)!=0)) ? svpls2='+' : svpls2='';

  let pj1=0;
  if ((v=='Bio') || (v=='NBio')) { //console.log('BN')
    let pj1=(a*prc.pc[v][0]+(b+c)*prc.pc[v][1]);
    pctt+=pj1;pcwt+=(a+b+c)*Number(prc.wt[v]);
    return "<td colspan='2'><b>"+(a+b+c)+' '+v+"</b><b class='sa2'>"+sva+svpls1+svbc+" = </b></td><td class='sb3'><b>"+pj1+'₹</b></td>'
  }else if (v=='OverS') { //console.log('O')
    pj1=((a+b+c)*prc.pc[v][0]);
    pctt+=pj1;pcwt+=(a+b+c)*Number(prc.wt[v]);
    return "<td colspan='2'><b>"+(a+b+c)+' '+v+"</b><b class='sa2'>"+(a+b+c)+'×'+prc.pc[v][0]+" = </b></td><td class='sb3'><b>"+pj1+'₹</b></td>'
  }else if ((v=='Polo') || (v=='Hood') || (v=='Sweat')) { //console.log('PHS')
    pj1=((a+b)*prc.pc[v][0]+c*prc.pc[v][1]);
    pctt+=pj1;pcwt+=(a+b+c)*Number(prc.wt[v]);
    return "<td colspan='2'><b>"+(a+b+c)+' '+v+"</b><b class='sa2'>"+svab+svpls2+svc+" = </b></td><td class='sb3'><b>"+pj1+'₹</b></td>'
  }else{   }
  
  
}

// sms 
let sms='Hi Ankit, An update Transport charge aur Other charge ab se save hoga';
if (!localStorage.sms) {localStorage.setItem('sms',sms);alert(sms);}
else if((localStorage.sms!=sms)){
alert(sms);localStorage.setItem('sms',sms);
}

// on paste mobile no.
function pastin(v){
  if((v.value.includes('+91'))||(v.value.includes(' '))){
  let nm=v.value.replace(/ /g,'');
  if((nm.length==13)||nm.includes('+91')){
    v.value=nm.split('+91')[1];
   }else {
   v.value=nm.slice(-10);
  }
}

}

// pincode check
// https://api.postalpincode.in/pincode/272153
function pincode(v) {
  if(v.value.trim().length==6){
    fetch('https://api.postalpincode.in/pincode/'+v.value.trim())
   .then((response) => response.json())
   .then((data) => {
    if(data[0].Message!="No records found"){
    console.log(data[0]);
    let p=data[0].PostOffice[0];
    let t=`${p.State}, ${p.Region}, ${p.District}`; //${p.Region}${p.Division}, 
    document.getElementById('ptplace').innerHTML=t;
  }else{
    document.getElementById('ptplace').innerHTML="<b style='color:red'>"+data[0].Message+"</b>";
  }
  });
  }
  
}

// GST state code and Verify

function gststc(v) { //let text = "07BBNPG0866M2Z7";g.match(/^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/g)
  let g=v.value.replace(/ /g,'').trim().toUpperCase();
 // console.log(`hi ${g}`);
if((g.length==15)&&(checksum(g))){

document.getElementById('ptst').innerHTML="<b style='color:#008001'>"+g.substr(0, 2)+'-'+gststate[Number(g.substr(0, 2))]+" <b></b>"+"</b>";
// fetch('https://services.gst.gov.in/services/api/search/goodservice?gstin='+g)
// .then((r) => r.json())
// .then((data) => {
// if(data['bzgddtls']){document.getElementById('ptst').innerHTML="Ok"}
// if(data['errorCode']){document.getElementById('ptst').innerHTML="<b style='color:red'>Error!</b>";}
// })

}else if((g.length<15)){
  document.getElementById('ptst').innerHTML="<b style='color:red'>Error! less than 15 character</b>";
}else if((g.length>15)){
  document.getElementById('ptst').innerHTML="<b style='color:red'>Error! more than 15 character</b>";
}else{
  document.getElementById('ptst').innerHTML="<b style='color:red'>Ohhh! Something Wrong</b>";
}

}

function checksum(g){
  let regTest = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(g)
   if(regTest){
      let a=65,b=55,c=36;
      return Array['from'](g).reduce((i,j,k,g)=>{ 
         p=(p=(j.charCodeAt(0)<a?parseInt(j):j.charCodeAt(0)-b)*(k%2+1))>c?1+(p-c):p;
         return k<14?i+p:j==((c=(c-(i%c)))<10?c:String.fromCharCode(c+b));
      },0); 
  }
  return regTest
}

//End GST state code and Verify

// address
function address(v) {
//   let p1=document.getElementById('ptp');
//   p1.value=v.value.match(/(\d{6})/g);
//  // p1.value=v.value.match(/\D[1-9][0-9]{5}\s|\s[1-9][0-9]{5}\s|\S[1-9][0-9]{5}$|[1-9][0-9]{5}$/g)[0].match(/\d+/g);

//   p1.dispatchEvent(new Event('input'));
}

// add party button
function addpt() {
  let p9=document.querySelector('#injk9 label');
  (p9.innerHTML==="+ Add")?p9.innerHTML='<b style=" font-size: 18px; position: absolute; margin: 0 0 0 -7px; ">×</b>':p9.innerHTML='+ Add';
  document.querySelector('#injk9 label').classList.toggle('w3-teal');
  document.getElementById('ptd').classList.toggle('w3-show');
  document.getElementById('instaa').classList.toggle('w3-hide');
  document.getElementById('gall').classList.toggle('w3-hide');
  document.getElementById('gstaa').classList.toggle('w3-hide');
  document.getElementById('cnm1').classList.toggle('w3-show');
  document.getElementById('cnm').classList.toggle('w3-hide');
}

// save and next
document.getElementById('cnm1').addEventListener('click', (v) => {
  console.log('hi')
})