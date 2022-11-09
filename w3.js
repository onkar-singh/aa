let gststate={01:"JAMMU AND KASHMIR",02:"HIMACHAL PRADESH",03:"PUNJAB",04:"CHANDIGARH",05:"UTTARAKHAND",06:"HARYANA",07:"DELHI",08:"RAJASTHAN",09:"UTTAR PRADESH",10:"BIHAR",11:"SIKKIM",12:"ARUNACHAL PRADESH",13:"NAGALAND",14:"MANIPUR",15:"MIZORAM",16:"TRIPURA",17:"MEGHALAYA",18:"ASSAM",19:"WEST BENGAL",20:"JHARKHAND",21:"ODISHA",22:"CHATTISGARH",23:"MADHYA PRADESH",24:"GUJARAT",26:"DADRA AND NAGAR HAVELI AND DAMAN AND DIU (NEWLY MERGED UT)",27:"MAHARASHTRA",28:"ANDHRA PRADESH(BEFORE DIVISION)",29:"KARNATAKA",30:"GOA",31:"LAKSHADWEEP",32:"KERALA",33:"TAMIL NADU",34:"PUDUCHERRY",35:"ANDAMAN AND NICOBAR ISLANDS",36:"TELANGANA",37:"ANDHRA PRADESH (NEWLY ADDED)",38:"LADAKH (NEWLY ADDED)",97:"OTHER TERRITORY",99:"CENTRE JURISDICTION"}

// let readyStateCheckInterval1 = setInterval(function() {
//   if (document.readyState === "complete") {
//       if (localStorage.imgf) {
//        // alert('hi222');
//         clearInterval(readyStateCheckInterval1);
//         let imgf5=localStorage.imgf;
//        // downl(imgf5.split(',,,')[0],imgf5.split(',,,')[1]); 
//         let htl="<a id='link55' href='"+imgf5.split(',,,')[0]+"' download='"+imgf5.split(',,,')[1]+"'>hjhj</a>";
//       let iframe = document.createElement('iframe');
//       document.getElementById("imgf").appendChild(iframe);
//       // document.body.appendChild(iframe);
//       iframe.contentWindow.document.open();
//       iframe.contentWindow.document.write(htl);
//       iframe.contentWindow.document.getElementById('link55').click();
//       iframe.contentWindow.document.close();
//       setTimeout(function(){ iframe.remove()}, 5000);
//         localStorage.removeItem("imgf");
//       }
//   }
// }, 50);

//sendd(urli,vkz5,'pins')
async function sendd(urld,d9) {
  const resp = await fetch(urld, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(d9)
  })
    .then(function (res) {
      console.log('data send',res)
    })
    .catch((error) => {
      console.log('error', error);
      let kl=JSON.parse(localStorage.getItem('pend2'));
      kl['pendingPinData']=d9;
      localStorage.setItem("pend2", JSON.stringify(kl));  
    });
}

