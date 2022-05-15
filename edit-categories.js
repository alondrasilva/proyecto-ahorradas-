var params = new URLSearchParams(window.location.search);
var body = document.body;
var container = document.createElement('div');
container.classList.add('container', 'my-5', 'p-0', 'radius');
body.appendChild(container);
var divEditCategory = document.createElement('div');
divEditCategory.classList.add('p-4', 'shadow-sm');
var h2Edit = document.createElement('h2');
var textH2Edit = document.createTextNode('Editar categoría');
container.appendChild(divEditCategory);
divEditCategory.appendChild(h2Edit);
h2Edit.appendChild(textH2Edit);
var formEdit = document.createElement('form');
formEdit.classList.add('d-flex', 'flex-column', 'form-edit');
formEdit.setAttribute('id', 'add-category');
var labelEdit = document.createElement('label');
labelEdit.textContent = "Nombre";
var inputEdit = document.createElement('input');
inputEdit.setAttribute('id', 'input-add-category');
divEditCategory.appendChild(formEdit);
formEdit.appendChild(labelEdit);
formEdit.appendChild(inputEdit);
var divBtn = document.createElement('div');
divBtn.classList.add('text-end');
var btnCancelCategory = document.createElement('button');
btnCancelCategory.classList.add('btn', 'btn-secondary', 'me-1');
// btnEdit.setAttribute('value', `${category.id}`)
btnCancelCategory.textContent = "Cancelar";
var btnEditCategory = document.createElement('button');
btnEditCategory.classList.add('btn', 'btn-primary');
// btnDelete.setAttribute('value', `${category.id}`)
btnEditCategory.textContent = "Editar";
divEditCategory.appendChild(divBtn);
divBtn.appendChild(btnCancelCategory);
divBtn.appendChild(btnEditCategory);
