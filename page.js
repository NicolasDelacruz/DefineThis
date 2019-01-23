function getSelectedParagraphText() {
    if (window.getSelection) {
        selection = window.getSelection();
    } else if (document.selection) {
        selection = document.selection.createRange();
    }
    var parent = selection.anchorNode;
    while (parent != null && parent.localName != "P") {
      parent = parent.parentNode;
    }
    if (parent == null) {
      return "";
    } else {
      return parent.innerText || parent.textContent;
    }
  }

alert(getSelectedParagraphText());