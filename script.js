document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
           const newBlock = document.createElement('div');
           newBlock.innerHTML += `
              <div class="stuff" >
              <img src="${block.querySelector('img').src}" />
               <p>${block.querySelector('p').innerHTML}</p>
               <span>${block.querySelector('span').innerHTML}</span>
               <button class="remove" >X</button>
</div>
           `;

          newBlock.querySelector('button').addEventListener('click', () => {
               newBlock.innerHTML = ''
           });
          
           document.querySelector('.basketContainer').append(newBlock)
        }
    })
})