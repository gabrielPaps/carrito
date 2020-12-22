document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('./js/api.json');
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const conteinerProductos = document.getElementById('conteinerProductos');

const showProductos = (data) => {
    const template = document.getElementById('template-productos').content;
    const fragment = document.createDocumentFragment();

    data.forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    conteinerProductos.appendChild(fragment);
}