Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#student-list-example',
  data: {
    // newTodoName: '',
    todos: [
    ],
    nextTodoId: 1
  },
  methods: {
    addNewStudent: function () {
      this.todos.push({
        // id: this.nextTodoId++,
        title:
        "ID" + this.nextTodoId++ +"/"+
        "名前" + this.newName +"/"+
        "コース" + this.newCourse +"/"+
        "受講期" + this.newTerm
      })
      this.newName = ''
      this.newCourse = ''
      this.newTerm = ''
    }
  }
})


