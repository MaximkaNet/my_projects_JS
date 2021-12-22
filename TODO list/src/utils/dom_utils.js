export function createTask(){
  return `<div class="block task-wrap uncomplete-task">
  <div class="content">Test</div>
  <div class="controls">
    <input type="checkbox" name="complete-task" id="complete-task">
    <button id="remove-task"></button>
  </div>
</div>`;
}