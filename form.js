// JavaScript source code
const fullname = getElementById('fullname')
const maidename = getElementById('maidename')
const age = getElementById('age')
const phone = getElementById('phone')
const email = getElementById('email')
const afm = getElementById('afm')
const amka = getElementById('amka')
const credit = getElementById('credit')
const expiration = getElementById('expiration')
const address = getElementById('address')
const comment = getElementById('comment')
const form = getElementById('form')
const errorElement = getElementById('error')

symbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyy;

function containsNumbers(str) {
    return /\d/.test(str);
}//function that checks if a string contains numbers

function countLeadingSpaces(str) {
    return (str.match(/^(\s*)/)[1].length);
}//function that checks the number of spaces

form.addEventListener('submit', (e) => { //all possible errors
    let messages = []
    if (containsNumbers(fullname) == true) {

        messages.push('Το Ονοματεπώνυμο Δεν μπορεί να έχει νούμερα')
    }
    if (countLeadingSpaces(fullname) !== 1) {
        messages.push('Το Ονοματεπώνυμο πρέπει να έχει ένα ΜΟΝΟ κενό ανάμεσα στο όνομα και το Επώνυμο')
    }
    if (symbols.test(fullname) = true) {
        messages.push('Το Ονοματεπώνυμο Δεν μπορεί να έχει σύμβολα')
    }
    if (symbols.test(maidename) = true) {
        messages.push('Το Πατρώνυμο Δεν μπορεί να έχει σύμβολα')
    }
    if (countLeadingSpaces(maidename) !== 0) {
        messages.push('Το Πατρώνυμο Δεν μπορεί να έχει σύμβολα')
    }
    if (containsNumbers(maidename) == true) {

        messages.push('Το Πατρώνυμο Δεν μπορεί να έχει νούμερα')
    }
    if (phone.value.length !== 10) {
        messages.push('Ο αριθμός τηλεφώνου πρέπει να έχει 10 ψηφία')
    }
    if (afm.value.length !== 9) {
        messages.push('Ο αριθμός AFM πρέπει να έχει 9 ψηφία')
    }
    if (amka.value.length !== 11) {
        messages.push('Ο αριθμός ΑΜΚΑ πρέπει να έχει 11 ψηφία')
    }
    if (credit.value.length !== 16) {
        messages.push('Ο αριθμός κάρτας πρέπει να έχει 16 ψηφία')
    }
    if (expiration < today) {
        messages.push('Η κάρτα σας έχει λήξει')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})