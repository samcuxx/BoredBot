




document.getElementById("btn").addEventListener("click" , function(){
  fetch("https://apis.scrimba.com/bored/api/activity/")
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("ideas").textContent = data.activity;
    });

})

