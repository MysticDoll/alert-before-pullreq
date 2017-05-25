let button = document.querySelector(`a[href="${location.pathname.replace(/pulls/g, "compare")}"]`)

button.addEventListener("click", function(e) {
  if(!window.confirm("作者にPull Requestを作成する許可を取りましたか？")) {
    e.preventDefault();
  }
});
