// 1. Uuid
const uuidChar = "0123456789abcdef";
const uuidCharUp = "0123456789ABCDEF";
let uuidLower = true;

// DOM
const uuidCase = document.getElementById('uuid-case');
const uuidGene = document.getElementById('uuid-gene')
const uuidDivide = document.getElementById('uuid-divide')
const uuidRes = document.getElementById('uuid-result')

function randItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

uuidGene.addEventListener('click', () => {
    const divide = uuidDivide.value;
    let res = [];
    for (let i = 1; i <= 32; i++) {
        // Case-sensitive
        res.push(randItem(uuidLower ? uuidChar : uuidCharUp));
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            res.push(divide);
        }
    }
    // Concat
    uuidRes.textContent = res.join('');
});

uuidCase.addEventListener('click', () => {
    // Switch
    uuidLower = !uuidLower;
    const text = uuidLower ? "Lower" : "Upper";
    uuidCase.textContent = `Now case: ${text}`;
});