const body = document.body

const container = document.createElement('div')
container.classList.add('wrapper','container', 'my-5')

const rowContainer = document.createElement('div')
rowContainer.classList.add('row', 'd-flex')

const aside = document.createElement('div')
aside.classList.add('aside', 'col-4')

const main = document.createElement('div')
main.classList.add('main','col-8', 'p-4', 'shadow-sm')

body.appendChild(container)
container.appendChild(rowContainer)
rowContainer.appendChild(aside)
rowContainer.appendChild(main)

const rowAside = document.createElement('div')
rowAside.classList.add('flex-row')

const divBalance = document.createElement('div')
divBalance.classList.add('col-3', 'balance', 'mb-3', 'p-4', 'shadow-sm')

const divFilter = document.createElement('div')
divFilter.classList.add('col-8', 'filter', 'p-4', 'shadow-sm')

aside.appendChild(rowAside)
rowAside.appendChild(divBalance)
rowAside.appendChild(divFilter)

// Empieza tabla de Balance

const h3 = document.createElement('h3')
const texth3 = document.createTextNode('Balance')

h3.appendChild(texth3)
divBalance.appendChild(h3)

const balanceTable = document.createElement('table')
balanceTable.classList.add('table','table-borderless')

const tbody = document.createElement('tbody')
const tr1 = document.createElement('tr')
const td1 = document.createElement('td')
const textTd1 = document.createTextNode('Ganancias')
const td2 = document.createElement('td')
td2.classList.add('text-end')
const textTd2 = document.createTextNode('+$0')

divBalance.appendChild(balanceTable)
balanceTable.appendChild(tbody)
tbody.appendChild(tr1)
tr1.appendChild(td1)
td1.appendChild(textTd1)
tr1.appendChild(td2)
td2.appendChild(textTd2)

const tr2 = document.createElement('tr')
const td3 = document.createElement('td')
const textTd3 = document.createTextNode('Gastos')
const td4 = document.createElement('td')
td4.classList.add('text-end')
const textTd4 = document.createTextNode('-$0')

tbody.appendChild(tr2)
tr2.appendChild(td3)
td3.appendChild(textTd3)
tr2.appendChild(td4)
td4.appendChild(textTd4)

const tr3 = document.createElement('tr')
const td5 = document.createElement('td')
const textTd5 = document.createTextNode('Total')
const td6 = document.createElement('td')
td6.classList.add('text-end')
const textTd6 = document.createTextNode('$0')

tbody.appendChild(tr3)
tr3.appendChild(td5)
td5.appendChild(textTd5)
tr3.appendChild(td6)
td6.appendChild(textTd6)

// Empieza seccion de filtros

const filterTop = document.createElement('div')
filterTop.classList.add('d-flex', 'justify-content-between', 'align-items-center')

const h4 = document.createElement('h4')
const texth4 = document.createTextNode('Filtros')
h4.classList.add('m-0')

const p = document.createElement('p')
p.classList.add('m-0')
const textP = document.createTextNode('Ocultar filtros')

divFilter.appendChild(filterTop)
h4.appendChild(texth4)
p.appendChild(textP)
filterTop.appendChild(h4)
filterTop.appendChild(p)


// Comienzo form de la seccion filtros

const form = document.createElement('form')

// label tipo
const labelTypes = document.createElement('label')
const textLabelTypes = document.createTextNode('Tipo')
labelTypes.setAttribute('for', 'select-types')
labelTypes.classList.add('d-block')

// select tipo
const selectTypes = document.createElement('select')
selectTypes.setAttribute('name', 'select-types')
selectTypes.setAttribute('id', 'select-types')

//option todos
const option1 = document.createElement('option')
const textOption1 = document.createTextNode('Todos')
option1.setAttribute('value', 'all')

//option gastos
const option2 = document.createElement('option')
const textOption2 = document.createTextNode('Gastos')
option2.setAttribute('value', 'expenses')

//option ganancias
const option3 = document.createElement('option')
const textOption3 = document.createTextNode('Ganancias')
option2.setAttribute('value', 'revenues')

divFilter.appendChild(form)

labelTypes.appendChild(textLabelTypes)

form.appendChild(labelTypes)
form.appendChild(selectTypes)

option1.appendChild(textOption1)
selectTypes.appendChild(option1)

option2.appendChild(textOption2)
selectTypes.appendChild(option2)

option3.appendChild(textOption3)
selectTypes.appendChild(option3)

//label categoria 
const labelCategory = document.createElement('label')
labelCategory.textContent = "Categorías"
labelCategory.setAttribute('for', 'categories')
const selectCategory = document.createElement('select')
selectCategory.setAttribute('name', 'categories')
selectCategory.setAttribute('id', 'categories')

form.appendChild(labelCategory)
form.appendChild(selectCategory)

const categories = ['Comida', 'Educación', 'Transporte', 'Hola'] 

for (let category of categories) {

    const option = document.createElement('option')
    option.setAttribute('value', `${category}`)
    option.setAttribute('id', `${category}`)
    option.textContent = `${category}`

    selectCategory.appendChild(option)

}

console.log(categories)

//label "desde", fecha
const labelDate = document.createElement('label')
const textLabelDate = document.createTextNode('Desde')
labelDate.setAttribute('for', 'input-date')
labelDate.classList.add('d-block')

//input date, fecha
const input = document.createElement('input')
input.setAttribute('name', 'input-date')
input.setAttribute('type', 'date')
input.setAttribute('value', '2022-05-02')
input.setAttribute('id', 'input-date')

form.appendChild(labelDate)
form.appendChild(input)

labelDate.appendChild(textLabelDate)

//label ordenar
const labelOrder = document.createElement('label')
const textLabelOrder = document.createTextNode('Ordenar por')
labelOrder.setAttribute('for', 'select-order')
labelOrder.classList.add('d-block')

//select ordernar por
const selectOrder = document.createElement('select')
selectOrder.setAttribute('name', 'select-category')
selectOrder.setAttribute('id', 'select-category')

//option más reciente
const optionO1 = document.createElement('option')
const textOptionO1 = document.createTextNode('Más reciente')
optionO1.setAttribute('value', 'recent')

//option menos reciente
const optionO2 = document.createElement('option')
const textOptionO2 = document.createTextNode('Menos reciente')
optionO2.setAttribute('value', 'least recent')

//option mayor monto
const optionO3 = document.createElement('option')
const textOptionO3 = document.createTextNode('Mayor monto')
optionO3.setAttribute('value', 'high value')

//option menor monto
const optionO4 = document.createElement('option')
const textOptionO4 = document.createTextNode('Menor monto')
optionO4.setAttribute('value', 'less value')

//option A/Z
const optionO5 = document.createElement('option')
const textOptionO5 = document.createTextNode('A/Z')
optionO5.setAttribute('value', 'a/z')

//option Z/A
const optionO6 = document.createElement('option')
const textOptionO6 = document.createTextNode('Z/A')
optionO6.setAttribute('value', 'z/a')

form.appendChild(labelOrder)
form.appendChild(selectOrder)

labelOrder.appendChild(textLabelOrder)

optionO1.appendChild(textOptionO1)
selectOrder.appendChild(optionO1)

optionO2.appendChild(textOptionO2)
selectOrder.appendChild(optionO2)

optionO3.appendChild(textOptionO3)
selectOrder.appendChild(optionO3)

optionO4.appendChild(textOptionO4)
selectOrder.appendChild(optionO4)

optionO5.appendChild(textOptionO5)
selectOrder.appendChild(optionO5)

optionO6.appendChild(textOptionO6)
selectOrder.appendChild(optionO6)

//Comienza parte de Operaciones

const divOperations = document.createElement('div')
divOperations.classList.add('d-flex', 'justify-content-between')
const operationTitle = document.createElement('h4')
const operationTitleText = document.createTextNode('Operaciones')

const a = document.createElement('a')
a.setAttribute('href', './newOperation.html')

const btn = document.createElement('button')
btn.classList.add('btn', 'btn-primary')
btn.setAttribute('id', 'btn-new-operation')
const textBtn = document.createTextNode('+ Nueva operacion')

main.appendChild(divOperations)
divOperations.appendChild(operationTitle)
operationTitle.appendChild(operationTitleText)

divOperations.appendChild(a)
a.appendChild(btn)
btn.appendChild(textBtn)

const divOperationsEmpty = document.createElement('div')
divOperationsEmpty.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'margin-top')

const imgEmpty = document.createElement('img')
imgEmpty.setAttribute('src', './assets/images/cash_left.png')
imgEmpty.setAttribute('width', '390px')

const pEmpty = document.createElement('p')
pEmpty.classList.add('fs-3')
const textPEmpty = document.createTextNode('Sin resultados')

const pEmpty2 = document.createElement('p')
const textPEmpty2 = document.createTextNode('Cambia los filtros o agreaga operaciones')

main.appendChild(divOperationsEmpty)

divOperationsEmpty.appendChild(imgEmpty)
divOperationsEmpty.appendChild(pEmpty)
pEmpty.appendChild(textPEmpty)
divOperationsEmpty.appendChild(pEmpty2)
pEmpty2.appendChild(textPEmpty2)

const divOperationsShow = document.createElement('div')

//Seccion de operaciones con contenido con tablas

const tableOperations = document.createElement('table')
tableOperations.classList.add('table')
tableOperations.setAttribute('id', 'table-operations')
const theadOperations = document.createElement('thead')
const trOperations = document.createElement('tr')

const th1Operations = document.createElement('th')
const textTh1Operations = document.createTextNode('Descripcion')

const th2Operations = document.createElement('th')
const textTh2Operations = document.createTextNode('Categoría')

const th3Operations = document.createElement('th')
const textTh3Operations = document.createTextNode('Fecha')

const th4Operations = document.createElement('th')
const textTh4Operations = document.createTextNode('Monto')

const th5Operations = document.createElement('th')
const textTh5Operations = document.createTextNode('Acciones')

main.appendChild(divOperationsShow)

divOperationsShow.appendChild(tableOperations)
tableOperations.appendChild(theadOperations)
theadOperations.appendChild(trOperations)

trOperations.appendChild(th1Operations)
trOperations.appendChild(th2Operations)
trOperations.appendChild(th3Operations)
trOperations.appendChild(th4Operations)
trOperations.appendChild(th5Operations)

th1Operations.appendChild(textTh1Operations)
th2Operations.appendChild(textTh2Operations)
th3Operations.appendChild(textTh3Operations)
th4Operations.appendChild(textTh4Operations)
th5Operations.appendChild(textTh5Operations)

const tbodyOperations = document.createElement('tbody')
tbodyOperations.setAttribute('id', 'table-body')
const trOperations2 = document.createElement('tr')

const tdOperations1 = document.createElement('td')
const tdOperations2 = document.createElement('td')
const tdOperations3 = document.createElement('td')
const tdOperations4 = document.createElement('td')
const tdOperations5 = document.createElement('td')

const textTdOperations1 = document.createTextNode('Bebida')
const textTdOperations2 = document.createTextNode('Bebida')
const textTdOperations3 = document.createTextNode('2/5/2022')
const textTdOperations4 = document.createTextNode('+45')

tableOperations.appendChild(tbodyOperations)
tbodyOperations.appendChild(trOperations2)

trOperations2.appendChild(tdOperations1)
trOperations2.appendChild(tdOperations2)
trOperations2.appendChild(tdOperations3)
trOperations2.appendChild(tdOperations4)
trOperations2.appendChild(tdOperations5)

tdOperations1.appendChild(textTdOperations1)
tdOperations2.appendChild(textTdOperations2)
tdOperations3.appendChild(textTdOperations3)
tdOperations4.appendChild(textTdOperations4)

const btnEditOp = document.createElement('button')
btnEditOp.classList.add('btn', 'btn-secondary', 'btn-sm', 'me-1')
btnEditOp.textContent = "Editar"

const btnDeleteOp = document.createElement('button')
btnDeleteOp.classList.add('btn', 'btn-secondary','btn-sm')
btnDeleteOp.textContent = "Eliminar"

tdOperations5.appendChild(btnEditOp)
tdOperations5.appendChild(btnDeleteOp)