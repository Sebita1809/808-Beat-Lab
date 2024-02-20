const input = document.getElementById('datoEmail');

input.addEventListener('input', function() {
    if (this.value.trim() != '') {
        this.classList.add('Lleno');
    } else {
        this.classList.remove('Lleno');
    }
});