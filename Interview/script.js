document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.qcard h3').forEach(q=>{
    q.addEventListener('click',()=>{
      const ans = q.parentElement.querySelector('.answer');
      ans.style.display = ans.style.display==='block'?'none':'block';
    });
  });
});
