
$("input.btnQulity").on("click", function(){
  window.location.replace("http://localhost:3000/qulity"); //Need to change at deployment
});

$("input.btnJar").on("click", function(){
  window.location.replace("http://localhost:3000/jar"); //Need to change at deployment
});

$("input.btnRunHours").on("click", function(){
  window.location.replace("http://localhost:3000/motor"); //Need to change at deployment
});

$("input.btnProductionWtp").on("click", function(){
  window.location.replace("http://localhost:3000/productionWtp"); //Need to change at deployment
});

$("input.btnProductionRes").on("click", function(){
  window.location.replace("http://localhost:3000/productionRes"); //Need to change at deployment
});

$("select.selectSite").change (function () {
     var siteName = $(this).children("option:selected").val();

     switch (siteName){
       case "KSWTP":
        $("label.accountNo").text("Account No : 1770100989");
       break;

       case "Madarangoda":
        $("label.accountNo").text("Account No : 1770101020");
       break;

       case "Maligathanna":
        $("label.accountNo").text("Account No : 1711040703");
       break;

       case "Kandakaduwa":
        $("label.accountNo").text("Account No : 1770101012");
       break;

       case "Kehelwala":
        $("label.accountNo").text("Account No : 1710340207");
       break;

       case "Mahakanda":
        $("label.accountNo").text("Account No : 1711040800");
       break;

       case "MobrayI":
        $("label.accountNo").text("Account No : 1710340304");
       break;

       case "Augustawatta":
        $("label.accountNo").text("Account No : 7770101360");
       break;

       case "Daulagala":
        $("label.accountNo").text("Account No : 1713114801");
       break;

       default:
       alert("Invalid account!")

     }

     if(siteName === "Maligathanna"||siteName === "Kehelwala"||siteName === "Mahakanda"||siteName === "MobrayI"||siteName === "Daulagala"){
       $("input").attr("disabled", false);
       $("input.kwh-d").attr("placeholder", " ");
       $("input.nonI2I3").attr("disabled", true);
       $("input.nonI2I3").attr("placeholder", "N/A");
     } else {
       $("input").attr("disabled", false);
       $("input.kva").attr("placeholder", " ");
       $("input.kwh-d").attr("placeholder", " ");
       $("input.kwh-p").attr("placeholder", " ");
       $("input.kwh-op").attr("placeholder", " ");
     }

     if(siteName === "KSWTP"){
       $("input").attr("disabled", false);
       $("input.prod").attr("placeholder", " ");
     } else {
       $("input.prod").attr("disabled", true);
       $("input.prod").attr("placeholder", "N/A");
     }

 });
