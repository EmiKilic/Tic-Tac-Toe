let fields = [
    null,
    null,
    'circle',
    'circle',
    null,
    'cross',
    null,
    'cross',
    null
];

function init() {
    render();
}

function render() {
    let container = document.getElementById('container');
    let html = '<table>';

    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let value = fields[index];
            let cellContent = value === 'circle' ? 'o' : value === 'cross' ? 'x' : '';
            html += `<td>${cellContent}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';

    container.innerHTML = html;
}

