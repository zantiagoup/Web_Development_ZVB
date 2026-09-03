// grab the form fields and the table body we are going to write into
const scheduleForm = document.getElementById('schedule-form');
const dateInput = document.getElementById('date-input');
const startInput = document.getElementById('start-input');
const endInput = document.getElementById('end-input');
const activityInput = document.getElementById('activity-input');
const placeInput = document.getElementById('place-input');
const typeSelect = document.getElementById('type-select');
const notesInput = document.getElementById('notes-input');
const flagInput = document.getElementById('flag-input');
const busyCheck = document.getElementById('busy-check');
const formFeedback = document.getElementById('form-feedback');
const scheduleBody = document.getElementById('schedule-body');

// textContent and not innerHTML, otherwise anything typed into the form runs as HTML
const createCell = (text) => {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
};

// the free/busy column is an image instead of text
// innerHTML is fine here, both strings are written by us and nothing comes from the form
const createStatusCell = (isBusy) => {
    const td = document.createElement('td');
    td.innerHTML = isBusy
        ? '<img src="images/busy.png" alt="Busy">'
        : '<img src="images/free.png" alt="Free">';
    return td;
};

const createScheduleRow = (entry) => {
    const tr = document.createElement('tr');

    // the colour flag rides along in the date cell so the table keeps 8 columns
    const dateCell = document.createElement('td');
    const flagDot = document.createElement('span');
    flagDot.classList.add('flag-dot');
    flagDot.style.backgroundColor = entry.flag;

    // dot first, then the date, so they end up side by side
    const dateText = document.createElement('span');
    dateText.textContent = entry.date;
    dateCell.appendChild(flagDot);
    dateCell.appendChild(dateText);

    tr.appendChild(dateCell);
    tr.appendChild(createCell(entry.start));
    tr.appendChild(createCell(entry.end));
    tr.appendChild(createCell(entry.activity));
    tr.appendChild(createCell(entry.place));
    tr.appendChild(createCell(entry.type));
    tr.appendChild(createCell(entry.notes));
    tr.appendChild(createStatusCell(entry.busy));

    return tr;
};

// the required attributes already block empty fields, this is the rest
const validateEntry = (entry) => {
    if (entry.activity === '') return 'Write an activity.';
    if (entry.place === '') return 'Write a place.';
    if (entry.end <= entry.start) return 'The end time has to be after the start time.';
    return '';
};

scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const entry = {
        date: dateInput.value,
        start: startInput.value,
        end: endInput.value,
        activity: activityInput.value.trim(),
        place: placeInput.value.trim(),
        type: typeSelect.value,
        notes: notesInput.value.trim(),
        flag: flagInput.value,
        busy: busyCheck.checked
    };

    // sanity check
    const error = validateEntry(entry);
    if (error !== '') {
        formFeedback.textContent = error;
        formFeedback.style.color = '#b3261e';
        return;
    }

    scheduleBody.appendChild(createScheduleRow(entry));

    // clear the fields one by one, leaving the flag colour alone so a few
    // related entries can share it
    dateInput.value = '';
    startInput.value = '';
    endInput.value = '';
    activityInput.value = '';
    placeInput.value = '';
    notesInput.value = '';
    busyCheck.checked = false;

    // the new row can be way below the fold, so say something
    formFeedback.textContent = `Added "${entry.activity}" to the schedule.`;
    formFeedback.style.color = '';
});
