const form = document.querySelector('form');
const input = document.querySelector('#note');
const ul = document.querySelector('#notes');

let notes = [];

function addNote() {
  const note = input.value;
  if (note.trim() === '') {
    return;
  }
  notes.push(note);
  input.value = '';
  renderNotes();
}

function renderNotes() {
  ul.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <button class="delete" onclick="deleteNote(${index})">X</button>
      <div class="note-content">${note}</div>
      <span class="dots" style="display: ${
        note.length > 30 ? 'inline' : 'none'
      };">...</span>
      <span class="more" style="display: none;">${note}</span>
      ${
        note.length > 30
          ? '<button class="read-more" onclick="toggleNoteContent(this)">Read More</button>'
          : ''
      }
    `;
    ul.appendChild(li);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function toggleNoteContent(button) {
  const dots = button.previousElementSibling.previousElementSibling;
  const moreText = dots.nextElementSibling;
  dots.style.display = 'none';
  moreText.style.display = 'inline';
  button.textContent = 'Read Less';
  button.onclick = function () {
    dots.style.display = 'inline';
    moreText.style.display = 'none';
    button.textContent = 'Read More';
    button.onclick = function () {
      toggleNoteContent(button);
    };
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNote();
});
