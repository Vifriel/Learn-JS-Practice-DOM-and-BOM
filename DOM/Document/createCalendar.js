function _getNumberOfRows(dayCount) {
    return Math.ceil(dayCount / 7);
};

function _getNumbersOfSkippedDaysforStartRow(year, month) {
    let dayOfWeek = new Date(year, month - 1).getDay();
    dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
    return dayOfWeek - 1;
};

function _getCalendarHeaderRow() {
    let row = document.createElement('tr');

    let arrayOfWeekDayNames = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    for (const iterator of arrayOfWeekDayNames) {
        let day = document.createElement('th');
        day.textContent = iterator;
        day.style.color = 'white';
        row.append(day);
    }

    row.style.background = 'gray';

    return row;
};

function _recolorHolydaysBackground(table) {
    let cellsArray = Array.from(table.querySelectorAll('td'))
                        .filter(element => +element.cellIndex === 5 || +element.cellIndex === 6)
                        .filter(element => element.textContent != '');
    for (const cell of cellsArray) {
        cell.style.background = 'red';
    }
}

function createCalendar(elem, year, month) {
    let numberOfDaysInTheMonth = new Date(year, month, 0).getDate();

    let table = document.createElement('table');

    table.append(_getCalendarHeaderRow());
    
    let currentNumber = 1 - _getNumbersOfSkippedDaysforStartRow(year, month);
    
    while (true) {

        if (currentNumber > numberOfDaysInTheMonth) {
            break;
        }

        let newRow = document.createElement('tr');
        for (let i = 0; i < 7; i++, currentNumber++) {
            let cell = document.createElement('td');
            if (currentNumber > 0 && currentNumber <= numberOfDaysInTheMonth) {
                cell.textContent = currentNumber;
                cell.style.background = 'cyan';
            }
            newRow.append(cell);
        }
        table.append(newRow);
    }

    _recolorHolydaysBackground(table);
    elem.append(table);
};