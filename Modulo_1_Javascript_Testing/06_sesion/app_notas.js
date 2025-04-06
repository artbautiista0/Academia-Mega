// Función para cargar las notas desde el localStorage
function loadNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

// Función para guardar las notas en el localStorage
function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Función para mostrar las notas y el mensaje correspondiente
function displayNotes() {
  const notesList = document.getElementById('notesList');
  const notesMessage = document.getElementById('notesMessage');
  notesList.innerHTML = ''; // Limpiar la lista actual
  const notes = loadNotes();
  
  if (notes.length === 0) {
    notesMessage.textContent = "No hay notas guardadas";
  } else {
    notesMessage.textContent = "Lista de notas";
    notes.forEach((note, index) => {
      const li = document.createElement('li');
      li.textContent = note;
      
      // Botón para eliminar la nota
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.addEventListener('click', () => {
        deleteNote(index);
      });
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }
}

// Función para agregar una nueva nota
function addNote() {
  const noteInput = document.getElementById('noteInput');
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const notes = loadNotes();
    notes.push(noteText);
    saveNotes(notes);
    noteInput.value = '';
    displayNotes();
  }
}

// Función para eliminar una nota según su índice
function deleteNote(index) {
  const notes = loadNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

// Función para eliminar todas las notas
function deleteAllNotes() {
  saveNotes([]);
  displayNotes();
}

// Evento para guardar la nota al hacer clic en el botón
document.getElementById('saveBtn').addEventListener('click', addNote);

// Evento para borrar todas las notas
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllNotes);

// Cargar y mostrar las notas cuando se carga la página
window.onload = displayNotes;
