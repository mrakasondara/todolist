const container = document.querySelector("div.container");
const tambah = document.querySelector("button.tambah");
const info = document.querySelector(".info");
tambah.addEventListener("click", () => {
  let todo = document.getElementById("isian");
  if (todo.value.length < 1) {
    setTimeout(() => {
      info.style.display = "inline";
    }, 500);
  } else {
    setTimeout(() => {
      info.style.display = "none";
      const list = document.querySelector("div.list");
      const listItem = document.createElement("div");
      listItem.setAttribute("class", "list-item");
      list.appendChild(listItem);

      const value = document.createElement("span");
      value.setAttribute("class", "list-value");
      value.innerHTML = todo.value;
      listItem.appendChild(value);

      const hapus = document.createElement("button");
      hapus.setAttribute("class", "hapus");
      hapus.innerHTML = "X";
      listItem.appendChild(hapus);
      todo.value = "";
      hapus.addEventListener("click", (e) => {
        e.target.parentElement.remove();
      });

      value.addEventListener("click", (e) => {
        e.target.classList.toggle("selesai");
      });
    }, 500);
  }
});
