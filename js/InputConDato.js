const input = document.getElementById('datoNombre');

input.addEventListener('input', function() {
    if (this.value.trim() != '') {
        this.classList.add('Lleno');
    } else {
        this.classList.remove('Lleno');
    }
});