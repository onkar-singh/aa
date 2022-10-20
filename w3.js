
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

