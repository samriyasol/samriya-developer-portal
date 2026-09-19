
function copy(id){navigator.clipboard.writeText(document.getElementById(id).innerText);alert('Copied')}
document.addEventListener('DOMContentLoaded',()=>{
 const q=document.getElementById('search');
 if(q) q.addEventListener('input',e=>{
  const t=e.target.value.toLowerCase();
  document.querySelectorAll('.searchable').forEach(x=>x.style.display=x.innerText.toLowerCase().includes(t)?'block':'none');
 });
});
