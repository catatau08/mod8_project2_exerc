const tableResult = document.getElementById('table')
const formResult = document.querySelector('.c-block-form')
const FormTable = document.getElementById('formTabela')

function addTable () {
    const createName = document.createElement('tr')
    const formName = document.getElementById('assignName')
    const telForm = document.getElementById('assignTel')
    FormTable.appendChild(createName)
    createName.innerHTML += `<td>${formName.value}</td><td>${telForm.value}</td>`
    

}

formResult.addEventListener('submit', function (e) {
    e.preventDefault();

    addTable()
})
