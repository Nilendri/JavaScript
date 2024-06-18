const key = document.querySelector(".key");
window.addEventListener("keydown", (e) => {
  key.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.Keycode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
    </div>
    `;
});
