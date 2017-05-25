const attachEvent = (user, repo) => {
  let button = document.querySelector(`a[href="/${user}/${repo}/compare"]`)
  if(button) {
    button.addEventListener("click", function(e) {
      if(!window.confirm("作者にPull Requestを作成する許可を取りましたか？")) {
        e.preventDefault();
      }
    });
  }
};

let [_, user, repo] = /^\/([^\/]+?)\/([^\/]+)\/{0,1}/.exec(location.pathname);
attachEvent(user, repo);

let mo = new MutationObserver(function() {
  let [_, user, repo] = /^\/([^\/]+?)\/([^\/]+)\/{0,1}/.exec(location.pathname);
  attachEvent(user, repo);
});

mo.observe(document.body, {childList: true, subtree:true})
