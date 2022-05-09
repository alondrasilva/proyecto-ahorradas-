var body = document.body;
var container = document.createElement('div');
container.classList.add('container', 'my-5', 'p-0', 'radius');
var divCategory = document.createElement('div');
divCategory.classList.add('p-4', 'shadow-sm');
body.appendChild(container);
container.appendChild(divCategory);
var h2 = document.createElement('h2');
var textH2 = document.createTextNode('Categorías');
divCategory.appendChild(h2);
h2.appendChild(textH2);
var form = document.createElement('form');
form.classList.add('d-flex');
var div = document.createElement('div');
div.classList.add('input-categories', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-end');
var div2 = document.createElement('div');
div2.classList.add('d-flex', 'flex-column', 'input-categories2');
var label = document.createElement('label');
label.textContent = "Nombre";
var input = document.createElement('input');
input.setAttribute('id', 'input-add-category');
var btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.setAttribute('id', 'btn-add-category');
btn.textContent = "Agregar";
divCategory.appendChild(form);
form.appendChild(div);
div.appendChild(div2);
div.appendChild(btn);
div2.appendChild(label);
div2.appendChild(input);
var select = document.getElementById('categories');
// Crear nueva categorías
// guardar en el local storage
var categoriesList = document.createElement('div');
// De acá hacia abajo hay meterlo en un for para que reconozca las 
// categories que estan en el localStorage y las agregue dinámicamente
var categoryItem = document.createElement('div');
categoryItem.classList.add('d-flex', 'justify-content-between', 'category-item');
var categoryName = document.createElement('p');
var textCategoryName = document.createTextNode('Comida');
var categoryButtons = document.createElement('div');
var btnEdit = document.createElement('button');
btnEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'me-1');
btnEdit.textContent = "Editar";
var btnDelete = document.createElement('button');
btnDelete.classList.add('btn', 'btn-secondary', 'btn-sm');
btnDelete.textContent = "Eliminar";
divCategory.appendChild(categoriesList);
categoriesList.appendChild(categoryItem);
categoryItem.appendChild(categoryName);
categoryName.appendChild(textCategoryName);
categoryItem.appendChild(categoryButtons);
categoryButtons.appendChild(btnEdit);
categoryButtons.appendChild(btnDelete);
//Btn para agregar nueva categoria 
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var prueba = JSON.parse(localStorage.getItem('ahorradas-data'));
    var addCategory = function () {
        // if(localStorage.getItem('ahorradas-data')) {
        // JSON.parse(localStorage.getItem('ahorradas-data'))
        prueba.categories.push("".concat(input.value));
        localStorage.setItem('ahorradas-data', JSON.stringify(prueba));
        input.value = " ";
        // }
    };
    addCategory();
});
