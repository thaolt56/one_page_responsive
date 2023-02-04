const modal = document.querySelector('.modal')
const buy_tickets = document.querySelectorAll('.buy-ticket');
const btn_close = document.querySelector('.modal-close')
const modal_container = document.querySelector('.modal-container')
    // console.log(modal);
function open() {
    modal.classList.add('open');
}

function close() {
    modal.classList.remove('open')
}
for (const buy_ticket of buy_tickets) {
    buy_ticket.addEventListener('click', open)
};

btn_close.addEventListener('click', close)
modal.addEventListener('click', close)

//e.target
modal_container.addEventListener('click', function(event) {
    event.stopPropagation();
})

//use jquery