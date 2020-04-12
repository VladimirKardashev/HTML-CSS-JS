"use strict";

function showTableRows() {
  let tBodyRows = document.querySelector("tbody").rows;
  for (let i = 1; i < tBodyRows.length; i++) {
    if (tBodyRows[i].style.display !== "table-row") {
      tBodyRows[i].style.display = "table-row";
    } else {
      tBodyRows[i].style.display = "none";
    }
  }
}

function changeBtnName() {
  let btnName = document.querySelector("#btn-show_more-id > span");
  let btnIcon = document.querySelector("#btn-show_more-id > i").classList;
  btnIcon.toggle("rotate-180");
  if (btnName.innerText !== "Скрыть") {
    btnName.innerText = "Скрыть";
  } else {
    btnName.innerText = "Показать всё";
  }
}

function tableTrigger() {
  showTableRows();
  changeBtnName();
}
