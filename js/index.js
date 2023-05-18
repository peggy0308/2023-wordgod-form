window.addEventListener('load', function() {

    let titleButton = document.querySelector('.title-button');
    let lis = titleButton.querySelectorAll('a');
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click' , function() {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'tag-active';
        })
    }
})