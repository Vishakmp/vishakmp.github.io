function calculateProduct() {
    const number = parseFloat(document.getElementById('number').value);
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(number) || isNaN(length) || isNaN(width)) {
        alert("Please enter valid numbers.");
        return;
    }

    const product = number * length * width;
    document.getElementById('result').innerHTML = `Product: ${product}`;
}
