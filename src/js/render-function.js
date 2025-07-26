function renderCategories(categories) {
    const categoriesList = document.querySelector(".categories");
    const markup = categories.map(category => {
        return `<li class="categories__item">
   <button class="categories__btn" type="button"></button>
 </li>;`
    }).join('');
    categoriesList.innerHTML = markup;
}