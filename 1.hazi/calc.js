export const calc = todos => 
  todos.filter(t => t.isCompleted).length / todos.length;