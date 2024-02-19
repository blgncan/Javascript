let kitap1={isim:"Suç ve Ceza",yazar:"Tolstoy",fiyat:175,rafNo:"1.2 Raf"};
let kitap2={isim:"Sahi Sen Kimsin?",yazar:"Dilara Çiftçi",fiyat:200,rafNo:"2.3 Raf"};
let kitap3={isim:"Çeyiz",yazar:"hatice Kübra Tongar",fiyat:125,rafNo:"3.4 Raf"};
let kitap4={isim:"Kırmızı Saçlı Kadın",yazar:"Orhan Pamuk",fiyat:215,rafNo:"3.1 Raf"};
let kitap5={isim:"Boğazdaki Aşiret",yazar:"Mahmut Çetin",fiyat:55,rafNo:"4.2 Raf"};
let kitap6={isim:"Gökyüzü Durağı",yazar:"Umut Güner",fiyat:75,rafNo:"5.4 Raf"};

let kitaplar=[kitap1,kitap2,kitap3,kitap4,kitap5,kitap6];

//console.log(kitaplar);

let raf11={RafNo:"1.1 Raf",visible:false};
let raf12={RafNo:"1.2 Raf",visible:false};
let raf13={RafNo:"1.3 Raf",visible:false};
let raf14={RafNo:"1.4 Raf",visible:false};
let raf15={RafNo:"1.5 Raf",visible:false};

let raf21={RafNo:"2.1 Raf",visible:false};
let raf22={RafNo:"2.2 Raf",visible:false};
let raf23={RafNo:"2.3 Raf",visible:false};
let raf24={RafNo:"2.4 Raf",visible:false};
let raf25={RafNo:"2.5 Raf",visible:false};

let raf31={RafNo:"3.1 Raf",visible:false};
let raf32={RafNo:"3.2 Raf",visible:false};
let raf33={RafNo:"3.3 Raf",visible:false};
let raf34={RafNo:"3.4 Raf",visible:false};
let raf35={RafNo:"3.5 Raf",visible:false};

let raf41={RafNo:"4.1 Raf",visible:false};
let raf42={RafNo:"4.2 Raf",visible:false};
let raf43={RafNo:"4.3 Raf",visible:false};
let raf44={RafNo:"4.4 Raf",visible:false};
let raf45={RafNo:"4.5 Raf",visible:false};

let raf51={RafNo:"5.1 Raf",visible:false};
let raf52={RafNo:"5.2 Raf",visible:false};
let raf53={RafNo:"5.3 Raf",visible:false};
let raf54={RafNo:"5.4 Raf",visible:false};
let raf55={RafNo:"5.5 Raf",visible:false};


let raflar=[
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15],
];


let kitapIsmi=prompt("Lütfen Kitap adı giriniz..!");
let rafKod=rafBul(kitapIsmi);


if(rafKod!=null){
raftaGoster(rafKod);
rafOlustur();
}
else{
    alert("Girdiğiniz kitap bulunamadı..!");
}
//..................................................................................
function raftaGoster(rafKodu){
    for(let i=0;i<raflar.length;i++){
        for(let j=0;j<5;j++){
            if(raflar[i][j].RafNo==rafKodu){                
                raflar[i][j].visible=true;                
                return;
            }
        }
    }
}
//..................................................................................

function rafBul(kitapAdi){
    let rafKod=null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapAdi.toUpperCase(),0)){          
            rafKod= kitap.rafNo
        }
    });
    return rafKod !== null ? rafKod : "Böyle bir kitap bulunamadı!";
}

//.....................................................................................

function rafOlustur(){
console.clear();
let satir="";
    for(let i=0;i<raflar.length;i++){

        for(let j=0;j<5;j++){
    
           satir=satir+" | "+(raflar[i][j].visible?raflar[i][j].RafNo:"---")+"" ;     
    
        }
        console.log(satir);
        console.log("----------------------------------------------------")
        satir="";
    }
}
rafOlustur();

//..........................................................................................





