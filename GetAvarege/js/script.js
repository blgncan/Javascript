
document.addEventListener("DOMContentLoaded", function() {
let txtName = document.getElementById("txtName");
let txtPoint = document.getElementById("txtPoint");
let btnAdd = document.querySelector("#btnAdd");
let averageEl = document.getElementById("average");
let tbody = document.querySelector("tbody");


let average = 0;
// Butonları dinamik olarak oluştırduk
let myButtons = `<button id="btnEdit" type="button" class="editButton">
<i class="fa-solid fa-pencil"></i>

</button> <button id="btnDelete" type="button" class="deleteButton"><i class="fa-solid fa-trash-can"></i></button>`;



btnAdd.addEventListener("click", () => {   
    // name ve point değerlerini değişkene atadık
    let txtNameValue = txtName.value;
    let txtPointValue = Number(txtPoint.value);
    
    if(txtNameValue==""||txtNameValue==null){
    alert("Please enter name and surname");
    txtName.focus();
    return;
    }else if(txtPointValue==""||txtPointValue==null){
      alert("Please enter point value");
      txtPoint.focus();
      return;
    }

    // yeni bir satır oluşturduk
    let newTr = document.createElement("tr");  
    
    //oluşturduğumuz satırı tbody içerisine ekledik
    document.querySelector("tbody").appendChild(newTr);
    // yeni bir sütün oluşturduk
    let newTd1 = document.createElement("td");   
    //oluşturduğumuz sütünu satırın içerisine ekledik
    newTr.appendChild(newTd1);

    //ikinci sütün
    let newTd2 = document.createElement("td");
    newTd2.textContent = txtNameValue;
    newTd2.id="nameEl";
    
    newTr.appendChild(newTd2);

    //üçüncü sütun
    let newTd3 = document.createElement("td");
    newTd3.textContent = txtPointValue;
    newTd3.id="pointEl";
    newTr.appendChild(newTd3);

    //dördüncü sütun
    let newTd4 = document.createElement("td");
    //dördüncü sutuna butonları ekledik
    newTd4.innerHTML = myButtons; 
    newTr.appendChild(newTd4); 
    
    
    //ortalamayı hesaplattırıp averageEl id li hücreye yazdıkdık
    averageEl.textContent = getAverage();
    txtName.value = "";
    txtPoint.value = "";
    txtName.focus();

    updateRowNumbers();
    editButtonClick();
    deleteButtonClick();    
});


function updateRowNumbers() {
  // Tabloyu is değeri ile seçtik
  let table = document.querySelector("#tablo");

  // Tablonun tbody bölümünü seçtik
  let tbody = table.querySelector("#tbody");

  // Tablonun tbody'sindeki tüm satırları seçtik
  let rows = tbody.querySelectorAll("tr");
  
  // Her satır için satır numarasını döngü ile güncelledik
  rows.forEach((row, index) => {     
      let rowNumberCell = row.querySelector("td:first-child");
      
      rowNumberCell.textContent = index + 1;
  });
}




function getAverage() {    
    
   // Tüm td elementlerini seçtik
    let tdList = tbody.querySelectorAll("td:nth-child(3)");
    
    // Toplam değeri tutmak için bir değişken oluşturduk
    let totalPoint = 0;

    // Her td elementinin içeriğini topladık
    tdList.forEach(td => {
    // Her td elemanının içeriğini sayıya dönüştürüp totalPoint değişkenine ekledik
    totalPoint += parseInt(td.textContent);
    });
    // Ortalamayı hesapladık     
    average=(totalPoint/tdList.length).toFixed(2);
    //fonksiyonun çağrıldığı yere ortalamayı gönderdik
    return average;

}

const editButtonClick = () => {    
   //Bütün btnEdit elemanlarını bulup listeledik
    let btnEditList = document.querySelectorAll("#btnEdit");
   
    //btnEditList in son elemanına clickledik.
    btnEditList[btnEditList.length - 1].addEventListener("click", editEvents);
    
  };

  const editEvents = (e) => {
    //butonun simhesini değiştirdik
    let changeEditBtn = e.target.closest("td").querySelector("i").classList.toggle("fa-check")

    // Tıklanan düğmenin bulunduğu satırı bulduk
    let row = e.target.closest("tr");
    
    // Satır içindeki nameEl ve pointEl elemanlarını bulduk
    let nameEl = row.querySelector("#nameEl");
    let pointEl = row.querySelector("#pointEl");
    
    // contentEditable özelliğini true veya false olarak değiştirdik
    nameEl.contentEditable = true;
    pointEl.contentEditable = true;

    //Yeniden ortalama hesaplattık.
    if(!changeEditBtn){
      averageEl.textContent = getAverage();
      //editable olayını false çektik
      nameEl.contentEditable = false;
      pointEl.contentEditable = false;
    }
}


const deleteButtonClick = () => {    
  //Bütün btnDelete elemanlarını bulup listeledik
   let btnDeleteList = document.querySelectorAll("#btnDelete");
  
   //btnEditList in son elemanına clickledik.
   btnDeleteList[btnDeleteList.length - 1].addEventListener("click", deleteEvents);
   
 };


 const deleteEvents = (e) => {   

  // Tıklanan düğmenin bulunduğu satırı bulduk
  let row = e.target.closest("tr");
  console.log(row);
  // Satır içindeki ismi bulup value değerini değişkene atadık
  let name = row.querySelector("#nameEl").textContent;
  
  console.log(name);

  //emin misin mesajı verdik
  let message=confirm(`Are you sure you want to delete ${name}`);

  if(message){
    e.target.closest("tr").remove();
  }
  //satır numaralarını güncelledik.
  updateRowNumbers();
  averageEl.textContent = getAverage();  
 
}

});



