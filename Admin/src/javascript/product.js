const modal = document.querySelector('#jsModal');
const btnAdd = document.querySelector('#btnAdd');
const category = document.querySelector('#category');
const formModal = document.querySelector('#formModal');

const CATEGORY_LOCAL = 'categories';

btnAdd.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

function renderCategory() {
    const categories = JSON.parse(localStorage.getItem(CATEGORY_LOCAL)) || [];
    let stringHTML = ``;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].status) {
            stringHTML += `
            <option value="${categories[i].id}">${categories[i].name}
            </option>
            `
        }
    }
    category.innerHTML = stringHTML;
}
renderCategory();



