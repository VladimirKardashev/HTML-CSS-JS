"use strict";

function showTableRows() {
  let tBodyRows = document.getElementById("tbody-id").getElementsByTagName("TR");
  for (let i = 1; i < tBodyRows.length; i++) {
    if (tBodyRows[i].style.display !== "table-row") {
      tBodyRows[i].style.display = "table-row";
    } else {
      tBodyRows[i].style.display = "none";
    }
  }
}

function changeBtnName() {
  let btn = document.getElementById("btn-show_all-id");
  if (btn.getElementsByTagName("SPAN")[0].innerText === "Показать всё") {
    btn.getElementsByTagName("I")[0].getAttributeNode("class").value = "fas fa-angle-double-up";
    btn.getElementsByTagName("SPAN")[0].innerText = "Скрыть";
  } else {
    btn.getElementsByTagName("I")[0].getAttributeNode("class").value = "fas fa-angle-double-down";
    btn.getElementsByTagName("SPAN")[0].innerText = "Показать всё";
  }
}

function tableTrigger() {
  showTableRows();
  changeBtnName();
}
