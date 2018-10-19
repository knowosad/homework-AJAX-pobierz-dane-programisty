let btn = $(".btn");
btn.on("click", executeTask);

function getData(){
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", (response => addDataToBox(response)));
}

function addBoxForData(){
    btn.after($("<div></div>").attr("id", "dane-programisty"));
}

function addDataToBox(data){
    $("#dane-programisty").html(`<p>Imię: ${data.imie}, nazwisko: ${data.nazwisko}, zawód: ${data.zawod}, firma: ${data.firma}.`);
}

function executeTask(){
    addBoxForData();
    getData();
}