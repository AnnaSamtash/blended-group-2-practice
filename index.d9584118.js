const t=document.querySelector(".header-form"),e=document.querySelector(".tasks-list");function a(){var t;const a=(null!==(t=JSON.parse(localStorage.getItem("notes")))&&void 0!==t?t:[]).map((({nameTask:t,textTask:e,id:a})=>`<li class="task-list-item" data-id="${a}" >\n      <button type="button" class="task-list-item-btn">Видалити</button>\n      <h3>${t}</h3>\n      <p>${e}</p>\n  </li>`)).join("");e.innerHTML=a}t.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.taskName.value.trim(),n=t.currentTarget.elements.taskText.value.trim();if(console.log(e,n),""===e||""===n)return void alert("Please, fill all fields");var s;const o=null!==(s=JSON.parse(localStorage.getItem("notes")))&&void 0!==s?s:[],r={nameTask:e,textTask:n,id:Date.now()};o.push(r);const l=JSON.stringify(o);localStorage.setItem("notes",l),t.currentTarget.reset(),a()})),e.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;const e=t.target.closest("[ data-id ]").dataset.id;var n;const s=(null!==(n=JSON.parse(localStorage.getItem("notes")))&&void 0!==n?n:[]).filter((t=>t.id!==Number(e))),o=JSON.stringify(s);localStorage.setItem("notes",o),a()})),a();
//# sourceMappingURL=index.d9584118.js.map