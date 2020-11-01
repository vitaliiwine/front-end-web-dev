document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('register');
   const input = form.querySelector('input');

   const mainDiv = document.querySelector('.main');
   const ul = document.getElementById('invited-list');

   const div = document.createElement('div');
   const filterLabel = document.createElement('label');
   const filterCheckBox = document.createElement('input');

   filterLabel.textContent = "Hide those who haven't responded";
   filterCheckBox.type = 'checkbox';
   div.appendChild(filterLabel);
   div.appendChild(filterCheckBox);
   mainDiv.insertBefore(div, ul);
   filterCheckBox.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      const lis = ul.children;
      if (isChecked) {
          for (let i = 0; i < lis.length; i+=1) {
              let li = lis[i];
              if (li.classList.contains('responded')) {
                  li.style.display = '';
              } else {
                  li.style.display = 'none';
              }
          }
      } else {
          for (let i = 0; i < lis.length; i+=1) {
              let li = lis[i];
              li.style.display = '';
          }
      }
   });
});
