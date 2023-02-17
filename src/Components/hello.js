const elmt = document.getElementById("#root")
const items = ["a", "b"]
// backtrick
items.map(item=>{
 elmt.innerHTML += `
<div>
  <img src=${item} alt="descri-link-img" />
</div>
`;
})