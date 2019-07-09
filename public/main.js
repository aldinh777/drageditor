!function() {
  const editor = document.querySelector('#paper');
  const filesave = document.querySelector('#save-input');
  const filetext = document.querySelector('#save-text');
  const items = document.querySelectorAll('.item');

  items.forEach((item) => {
    item.setAttribute('draggable', true);
    item.ondragstart = function(ev) {
      ev.dataTransfer.setData('Value', ev.target.innerText);
    };
  });

  editor.ondragover = function(ev) {
    ev.preventDefault();
  };
  editor.ondrop = function(ev) {
    const value = ev.dataTransfer.getData('Value');
    ev.preventDefault();
    switch (value) {
      case 'Enter':
        editor.append(document.createElement('br'));
        filetext.value += '\n';
        break;
      case 'Space':
        editor.append(' ');
        filetext.value += ' ';
        break;
      case 'Tab':
        editor.append('\t');
        filetext.value += '\t';
        break;
      case 'Backspace':
        editor.lastChild.remove();
        filetext.value = filetext.value.slice(0, filetext.value.length - 1);
        break;
      default:
        editor.append(value);
        filetext.value += value;
        break;
    };
  };

  filesave.ondragover = function(ev) {
    ev.preventDefault();
  };
  filesave.ondrop = function(ev) {
    const value = ev.dataTransfer.getData('Value');
    ev.preventDefault();
    switch (value) {
      case 'Space':
        filesave.value += ' ';
        break;
      case 'Backspace':
        filesave.value = filesave.value.slice(0, filesave.value.length - 1);
        break;
      default:
        filesave.value += value;
        break;
    };    
  };
}();