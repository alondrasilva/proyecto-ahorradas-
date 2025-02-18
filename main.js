var body = document.body;
var container = document.createElement('div');
container.classList.add('wrapper', 'container-fluid', 'container', 'my-5');
var rowContainer = document.createElement('div');
rowContainer.classList.add('row', 'container-fluid', 'd-flex');
var aside = document.createElement('div');
aside.classList.add('aside', 'container-fluid', 'col-4');
var main = document.createElement('div');
main.classList.add('main', 'container-fluid', 'col-8', 'p-4', 'shadow-sm');
body.appendChild(container);
container.appendChild(rowContainer);
rowContainer.appendChild(aside);
rowContainer.appendChild(main);
var rowAside = document.createElement('div');
rowAside.classList.add('flex-row');
var divBalance = document.createElement('div');
divBalance.classList.add('col-3', 'balance', 'mb-3', 'p-4', 'shadow-sm');
var divFilter = document.createElement('div');
divFilter.classList.add('col-8', 'filter', 'p-4', 'shadow-sm');
aside.appendChild(rowAside);
rowAside.appendChild(divBalance);
rowAside.appendChild(divFilter);
// Empieza tabla de Balance
var h3 = document.createElement('h3');
var texth3 = document.createTextNode('Balance');
h3.appendChild(texth3);
divBalance.appendChild(h3);
var balanceTable = document.createElement('table');
balanceTable.classList.add('table', 'table-borderless');
var tbody = document.createElement('tbody');
var tr1 = document.createElement('tr');
var td1 = document.createElement('td');
var textTd1 = document.createTextNode('Ganancias');
var td2 = document.createElement('td');
td2.classList.add('text-end', 'color-green');
var textTd2 = document.createTextNode('+$0');
divBalance.appendChild(balanceTable);
balanceTable.appendChild(tbody);
tbody.appendChild(tr1);
tr1.appendChild(td1);
td1.appendChild(textTd1);
tr1.appendChild(td2);
td2.appendChild(textTd2);
var tr2 = document.createElement('tr');
var td3 = document.createElement('td');
// td3.setAttribute('value', '2')
var td4 = document.createElement('td');
var textTd3 = document.createTextNode('Gastos');
td4.classList.add('text-end', 'color-red');
var textTd4 = document.createTextNode('$0');
tbody.appendChild(tr2);
tr2.appendChild(td3);
td3.appendChild(textTd3);
tr2.appendChild(td4);
td4.appendChild(textTd4);
var tr3 = document.createElement('tr');
var td5 = document.createElement('td');
var textTd5 = document.createTextNode('Total');
var td6 = document.createElement('td');
td6.classList.add('text-end');
var textTd6 = document.createTextNode('$0');
tbody.appendChild(tr3);
tr3.appendChild(td5);
td5.appendChild(textTd5);
tr3.appendChild(td6);
td6.appendChild(textTd6);
// Empieza seccion de filtros
var filterTop = document.createElement('div');
filterTop.classList.add('d-flex', 'justify-content-between', 'align-items-center');
var h4 = document.createElement('h4');
var texth4 = document.createTextNode('Filtros');
h4.classList.add('m-0');
var btnOcultarFiltros = document.createElement('button');
btnOcultarFiltros.classList.add('btn', 'btn-light');
var textBtnOcultarFiltros = document.createTextNode('Ocultar filtros');
var btnMostrarFiltros = document.createElement('button');
btnMostrarFiltros.classList.add('btn', 'btn-light', 'd-none');
var textBtnMostrarFiltros = document.createTextNode('Mostrar filtros');
divFilter.appendChild(filterTop);
h4.appendChild(texth4);
filterTop.appendChild(h4);
filterTop.appendChild(btnOcultarFiltros);
btnOcultarFiltros.appendChild(textBtnOcultarFiltros);
filterTop.appendChild(btnMostrarFiltros);
btnMostrarFiltros.appendChild(textBtnMostrarFiltros);
// Comienzo form de la seccion filtros
var form = document.createElement('form');
// label tipo
var labelTypes = document.createElement('label');
var textLabelTypes = document.createTextNode('Tipo');
labelTypes.setAttribute('for', 'select-types');
labelTypes.classList.add('d-block');
// select tipo
var selectTypes = document.createElement('select');
selectTypes.setAttribute('name', 'select-types');
selectTypes.setAttribute('id', 'select-types');
//option todos
var option1 = document.createElement('option');
var textOption1 = document.createTextNode('Todos');
// option1.setAttribute('value', 'todos')
//option gastos
var option2 = document.createElement('option');
var textOption2 = document.createTextNode('Gastos');
// option2.setAttribute('value', 'gastos')
//option ganancias
var option3 = document.createElement('option');
var textOption3 = document.createTextNode('Ganancias');
// option2.setAttribute('value', 'ganancias')
divFilter.appendChild(form);
labelTypes.appendChild(textLabelTypes);
form.appendChild(labelTypes);
form.appendChild(selectTypes);
option1.appendChild(textOption1);
selectTypes.appendChild(option1);
option2.appendChild(textOption2);
selectTypes.appendChild(option2);
option3.appendChild(textOption3);
selectTypes.appendChild(option3);
//label categoria 
var labelCategory = document.createElement('label');
labelCategory.textContent = "Categorías";
labelCategory.setAttribute('for', 'categories');
var selectCategory = document.createElement('select');
selectCategory.setAttribute('name', 'categories');
selectCategory.setAttribute('id', 'filter-categories');
var optionAll = document.createElement('option');
optionAll.setAttribute('value', '0');
optionAll.setAttribute('id', 'todos');
optionAll.textContent = "Todos";
selectCategory.appendChild(optionAll);
form.appendChild(labelCategory);
form.appendChild(selectCategory);
//label "desde", fecha
var labelDate = document.createElement('label');
var textLabelDate = document.createTextNode('Desde');
labelDate.setAttribute('for', 'input-date');
labelDate.classList.add('d-block');
//input date, fecha
var inputDate = document.createElement('input');
inputDate.setAttribute('name', 'input-date');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('value', '2022-01-01');
inputDate.setAttribute('id', 'input-date');
form.appendChild(labelDate);
form.appendChild(inputDate);
labelDate.appendChild(textLabelDate);
//label ordenar
var labelOrder = document.createElement('label');
var textLabelOrder = document.createTextNode('Ordenar por');
labelOrder.setAttribute('for', 'select-order');
labelOrder.classList.add('d-block');
//select ordernar por
var selectOrder = document.createElement('select');
selectOrder.setAttribute('name', 'select-category');
selectOrder.setAttribute('id', 'select-category');
//option más reciente
var optionO1 = document.createElement('option');
var textOptionO1 = document.createTextNode('Más reciente');
optionO1.setAttribute('value', 'recent');
//option menos reciente
var optionO2 = document.createElement('option');
var textOptionO2 = document.createTextNode('Menos reciente');
optionO2.setAttribute('value', 'least recent');
//option mayor monto
var optionO3 = document.createElement('option');
var textOptionO3 = document.createTextNode('Mayor monto');
optionO3.setAttribute('value', 'high value');
//option menor monto
var optionO4 = document.createElement('option');
var textOptionO4 = document.createTextNode('Menor monto');
optionO4.setAttribute('value', 'less value');
//option A/Z
var optionO5 = document.createElement('option');
var textOptionO5 = document.createTextNode('A/Z');
optionO5.setAttribute('value', 'a/z');
//option Z/A
var optionO6 = document.createElement('option');
var textOptionO6 = document.createTextNode('Z/A');
optionO6.setAttribute('value', 'z/a');
form.appendChild(labelOrder);
form.appendChild(selectOrder);
labelOrder.appendChild(textLabelOrder);
optionO1.appendChild(textOptionO1);
selectOrder.appendChild(optionO1);
optionO2.appendChild(textOptionO2);
selectOrder.appendChild(optionO2);
optionO3.appendChild(textOptionO3);
selectOrder.appendChild(optionO3);
optionO4.appendChild(textOptionO4);
selectOrder.appendChild(optionO4);
optionO5.appendChild(textOptionO5);
selectOrder.appendChild(optionO5);
optionO6.appendChild(textOptionO6);
selectOrder.appendChild(optionO6);
//Comienza parte de Operaciones
var divOperations = document.createElement('div');
divOperations.classList.add('d-flex', 'justify-content-between');
var operationTitle = document.createElement('h4');
var operationTitleText = document.createTextNode('Operaciones');
var a = document.createElement('a');
a.setAttribute('href', './newOperation.html');
var btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.setAttribute('id', 'btn-new-operation');
var textBtn = document.createTextNode('+ Nueva operación');
main.appendChild(divOperations);
divOperations.appendChild(operationTitle);
operationTitle.appendChild(operationTitleText);
divOperations.appendChild(a);
a.appendChild(btn);
btn.appendChild(textBtn);
var divOperationsEmpty = document.createElement('div');
divOperationsEmpty.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'margin-top');
var pEmpty = document.createElement('p');
pEmpty.classList.add('fs-3');
var textPEmpty = document.createTextNode('Sin resultados');
var pEmpty2 = document.createElement('p');
var textPEmpty2 = document.createTextNode('Cambia los filtros o agreaga operaciones');
var imgEmpty = document.createElement('img');
imgEmpty.classList.add('img');
imgEmpty.setAttribute('src', './assets/images/moneys.jpeg');
main.appendChild(divOperationsEmpty);
divOperationsEmpty.appendChild(pEmpty);
divOperationsEmpty.appendChild(pEmpty2);
divOperationsEmpty.appendChild(imgEmpty);
pEmpty.appendChild(textPEmpty);
pEmpty2.appendChild(textPEmpty2);
var divOperationsShow = document.createElement('div');
//Seccion de operaciones con contenido con tablas
var tableOperations = document.createElement('table');
tableOperations.classList.add('table');
tableOperations.setAttribute('id', 'table-operations');
var theadOperations = document.createElement('thead');
var trOperations = document.createElement('tr');
var th1Operations = document.createElement('th');
var textTh1Operations = document.createTextNode('Descripción');
var th2Operations = document.createElement('th');
var textTh2Operations = document.createTextNode('Monto');
// const th3Operations = document.createElement('th')
// const textTh3Operations = document.createTextNode('Tipo')
var th4Operations = document.createElement('th');
var textTh4Operations = document.createTextNode('Fecha');
var th5Operations = document.createElement('th');
var textTh5Operations = document.createTextNode('Categoría');
var th6Operations = document.createElement('th');
var textTh6Operations = document.createTextNode('Acciones');
th6Operations.classList.add('text-center');
main.appendChild(divOperationsShow);
divOperationsShow.appendChild(tableOperations);
tableOperations.appendChild(theadOperations);
theadOperations.appendChild(trOperations);
trOperations.appendChild(th1Operations);
trOperations.appendChild(th2Operations);
// trOperations.appendChild(th3Operations)
trOperations.appendChild(th4Operations);
trOperations.appendChild(th5Operations);
trOperations.appendChild(th6Operations);
th1Operations.appendChild(textTh1Operations);
th2Operations.appendChild(textTh2Operations);
// th3Operations.appendChild(textTh3Operations)
th4Operations.appendChild(textTh4Operations);
th5Operations.appendChild(textTh5Operations);
th6Operations.appendChild(textTh6Operations);
var tbodyOperations = document.createElement('tbody');
tbodyOperations.setAttribute('id', 'table-body');
var balance = function () {
    td2.textContent = 0;
    td4.textContent = 0;
    var totalGastos = 0;
    var totalGanancias = 0;
    var totalBalance = 0;
    var ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    var gastos = function () {
        ls_Storage.operations.forEach(function (operation) {
            if (operation.type == "Gasto") {
                totalGastos = totalGastos + parseInt(operation.amount);
                td4.textContent = totalGastos;
            }
        });
        return totalGastos;
    };
    var ganancias = function () {
        ls_Storage.operations.forEach(function (operation) {
            if (operation.type == "Ganancia") {
                totalGanancias = totalGanancias + parseInt(operation.amount);
                td2.textContent = totalGanancias;
            }
        });
        return totalGanancias;
    };
    var total = function () {
        td6.textContent = totalGanancias - totalGastos;
    };
    gastos();
    ganancias();
    total();
};
balance();
var getNameCategory = function (id) {
    var ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    return ls_Storage.categories.find(function (category) { return category.id == id; }).name;
};
var loadOperations = function () {
    tbodyOperations.innerHTML = "";
    var ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    var operations = ls_Storage.operations;
    var params = new URLSearchParams(window.location.search);
    if (params.get('category')) {
        operations = operations.filter(function (op) { return op.categoryID === params.get('category'); });
    }
    operations = operations.filter(function (op) {
        var desdeDate = new Date(params.get('date'));
        var opDate = new Date(op.date);
        return desdeDate.getTime() <= opDate.getTime();
    });
    // operations = operations.filter(op => op.type === params.get('type'));
    // operations = operations.filter
    operations.forEach(function (operation) {
        var tr = document.createElement('tr');
        tr.setAttribute('value', operation.id);
        for (var prop in operation) {
            if ((prop !== "id") && (prop !== "categoryID") && (prop !== "type")) {
                var td_1 = document.createElement('td');
                td_1.appendChild(document.createTextNode(operation[prop]));
                tr.appendChild(td_1);
            }
        }
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(getNameCategory(operation.id)));
        tr.appendChild(td);
        var tdBtn = document.createElement('td');
        tdBtn.classList.add('text-end');
        var aBtnEditCategory = document.createElement('a');
        aBtnEditCategory.setAttribute('href', "./edit-operations.html?id=".concat(operation.id));
        var btnEdit = document.createElement('button');
        btnEdit.setAttribute('id', 'btn-edit-category');
        btnEdit.classList.add('btn', 'me-1');
        btnEdit.textContent = "Editar";
        var btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'me-1');
        btnDelete.textContent = "Eliminar";
        tr.appendChild(tdBtn);
        tdBtn.appendChild(aBtnEditCategory);
        aBtnEditCategory.appendChild(btnEdit);
        tdBtn.appendChild(btnDelete);
        tableOperations.appendChild(tbodyOperations);
        tbodyOperations.appendChild(tr);
        // Boton que elimina categorias en el local storage y en el documento
        btnDelete.addEventListener('click', function (e) {
            var lStorage = JSON.parse(localStorage.getItem('ahorradas-data'));
            var findIndex = lStorage.operations.findIndex(function (operation) { return operation.id == e.target.value; });
            lStorage.operations.splice(findIndex, 1);
            localStorage.setItem('ahorradas-data', JSON.stringify(lStorage));
            balance();
            window.location.reload();
            showOrEmpty();
        });
    });
};
loadOperations();
//Local Storage//
var createCategoryFilter = function () {
    var ls_storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    ls_storage.categories.forEach(function (category) {
        for (var prop in category) {
            if (prop == "name") {
                var option = document.createElement('option');
                option.setAttribute('value', "".concat(category.id));
                option.setAttribute('id', "".concat(category.name));
                option.textContent = "".concat(category.name);
                selectCategory.appendChild(option);
            }
        }
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(ls_storage));
};
createCategoryFilter();
// Boton agregar y remover filtros
btnOcultarFiltros.addEventListener('click', function () {
    btnMostrarFiltros.classList.remove('d-none');
    btnOcultarFiltros.classList.add('d-none');
    form.classList.add('d-none');
});
btnMostrarFiltros.addEventListener('click', function () {
    btnMostrarFiltros.classList.add('d-none');
    btnOcultarFiltros.classList.remove('d-none');
    form.classList.remove('d-none');
});
var showOrEmpty = function () {
    var ls_Storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (ls_Storage.operations.length == 0) {
        tableOperations.classList.add('d-none');
        divOperationsEmpty.classList.remove('d-none');
    }
    else if (ls_Storage.operations.length >= 1) {
        divOperationsEmpty.classList.add('d-none');
        tableOperations.classList.remove('d-none');
    }
};
showOrEmpty();
selectCategory.addEventListener('change', function (e) {
    var params = new URLSearchParams(window.location.search);
    params.set('category', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
    // selectCategory.value = ""
});
inputDate.addEventListener('change', function (e) {
    var params = new URLSearchParams(window.location.search);
    params.set('date', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
});
