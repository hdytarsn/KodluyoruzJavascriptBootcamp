/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function() {
        console.log(this.registrationNumber + " " + this.brand);
    }
}

//Seçenek1 -> Bind
//var myCarDetails = car.displayDetails.bind(car);

//Seçenek2 -> Arrow Funtion
var myCarDetails = () => car.displayDetails();

myCarDetails();


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {

    return typeof(name) === "string" && name.replace(/\s/g, "").length > 1;

    // Gelen değerin string olup olmadığı kontrol edilir, ardından name değerindeki tüm boşluk karakterleri silinir ve kalan değerin uzunluğununun 1'den büyük olup olmadığına bakılır (>=2). 
    // RegEx'teki \s ->boşluk karakterleri ile eşleştirme ; g -> global search(tüm string'i tarama) için kullanılır.

}



/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
}

function summary(genre, year) {
    console.log(
        `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
    )
}

summary.call(book, 'dystopian', '1932')