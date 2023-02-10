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

        messages.push('�� ������������� ��� ������ �� ���� �������')
    }
    if (countLeadingSpaces(fullname) !== 1) {
        messages.push('�� ������������� ������ �� ���� ��� ���� ���� ������� ��� ����� ��� �� �������')
    }
    if (symbols.test(fullname) = true) {
        messages.push('�� ������������� ��� ������ �� ���� �������')
    }
    if (symbols.test(maidename) = true) {
        messages.push('�� ��������� ��� ������ �� ���� �������')
    }
    if (countLeadingSpaces(maidename) !== 0) {
        messages.push('�� ��������� ��� ������ �� ���� �������')
    }
    if (containsNumbers(maidename) == true) {

        messages.push('�� ��������� ��� ������ �� ���� �������')
    }
    if (phone.value.length !== 10) {
        messages.push('� ������� ��������� ������ �� ���� 10 �����')
    }
    if (afm.value.length !== 9) {
        messages.push('� ������� AFM ������ �� ���� 9 �����')
    }
    if (amka.value.length !== 11) {
        messages.push('� ������� ���� ������ �� ���� 11 �����')
    }
    if (credit.value.length !== 16) {
        messages.push('� ������� ������ ������ �� ���� 16 �����')
    }
    if (expiration < today) {
        messages.push('� ����� ��� ���� �����')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})