function addACard(event) {
    const cards=document.querySelectorAll('.create-card');
    cards.forEach((card)=>{
        card.classList.remove('hidden');
        document.querySelectorAll('.creating-new-card').forEach((form)=>{
         form.remove();
     })
    });

const form=document.createElement('form');
form.classList.add('creating-new-card');
const input=document.createElement('input');
input.classList.add('input-field');
input.placeholder='Enter a title for this card';
const addBtn=document.createElement('button');
addBtn.classList.add('add-btn');
addBtn.innerText='Add Card';
const cancelBtn=document.createElement('button');
cancelBtn.classList.add('cancel-btn');
cancelBtn.innerText='X';
const moreBtn=document.createElement('button');
moreBtn.classList.add('more-btn');
moreBtn.innerHTML='<i class="fas fa-ellipsis-h"></i>';

form.append(input,addBtn,cancelBtn,moreBtn);
event.target.parentElement.classList.add('hidden');
event.target.parentElement.parentElement.append(form);

    cancelBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        document.querySelectorAll('.create-card').forEach((card)=>{
            card.classList.remove('hidden');
        });
        event.target.parentElement.remove();
    });
}

const boardBtn= document.querySelectorAll('.add-card');
boardBtn.forEach((btn)=>{
    btn.addEventListener('click',addACard);
});
/******************************************************************************************/
const boards = document.querySelectorAll('.board');
boards.forEach(board => {
    board.ondrop = event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        event.target.append(
            document.getElementById(data)
        );
    };
    board.ondragover = event => {
        event.preventDefault();
    };
});
const card = document.querySelector('.card');
card.ondragstart = event => {
    event.dataTransfer.setData("text/plain", event.target.id);
};