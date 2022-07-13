function sortFunction(a, b, columnIndex) {
    if (Number.isFinite(+(a.cells[columnIndex].textContent)) && Number.isFinite(+(b.cells[columnIndex].textContent))) {
        return +(a.cells[columnIndex].textContent) - +(b.cells[columnIndex].textContent);
    }

    if (a.cells[columnIndex].textContent > b.cells[columnIndex].textContent) {
        return 1;
    }
    return -1;
};


function sortTableByColumn(table, columnIndex) {
    let rowsArray = Array.from(table.rows).slice(1);

    rowsArray.sort((row1, row2) => sortFunction(row1, row2, columnIndex));

    table.querySelector('tbody').append(...rowsArray);
};