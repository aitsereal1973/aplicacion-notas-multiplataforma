const app = new Vue({
    el: '#app',
    data: {
        notes: [],
        newNote: ''
    },
    methods: {
        addNote() {
            if (this.newNote) {
                this.notes.push(this.newNote);
                this.newNote = '';
            }
        },
        deleteNote(index) {
            this.notes.splice(index, 1);
        }
    }
});
