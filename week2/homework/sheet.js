//Bu script dosyası sadece index.html'e verileri çekmek için oluşturulmuştur. odev.js'de kullanılan fonksiyonlardaki console.log fonksiyonları return olarak güncellenmiş; ek olarak call kullanılan fonksiyonlar bind olarak güncellenmiştir.
let car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function() {
        return this.registrationNumber + " " + this.brand;
    }
}
let myCarDetails = () => car.displayDetails();

function isValidName(name) {
    return typeof(name) === "string" && name.replace(/\s/g, "").length > 1;
}
const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
}

function summary(genre, year) {
    return `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`;
}
let summaryF = summary.bind(book, 'dystopian', '1932')

//DOM Operations
const answerOne = document.querySelector('#q1_answer');
const answerTwo = document.querySelector('#q2_answer');
const answerThree = document.querySelector('#q3_answer');
const testButton = document.getElementById("add_test");

document.getElementById("add_test").addEventListener("click", () => {
    newTest(document.getElementById('test_case').value)
});

answerOne.innerText = myCarDetails();
answerThree.innerText = summaryF();

function newTest(content) {
    if (Array.isArray(content)) {
        content.forEach((item) => {
            answerTwo.append(createTestNode(`'${item}' => ${isValidName(item)}`));
        })
    } else {
        answerTwo.append(createTestNode(`'${content}' => ${isValidName(content)}`));
    }
    document.getElementById('test_case').value = "";
}

function createTestNode(content) {
    let li = document.createElement('li');
    li.textContent = content;
    return li;
}

//Question2 Automated Test
newTest(["Ahmet", false, null, undefined, "", "  \t\n", "X"]);