window.addEventListener('DOMContentLoaded', () => {
    const writingEl = document.querySelector('.typewriter');
    if(writingEl){
        const text = writingEl.textContent.trim();
        writingEl.innerHTML = '';
        let index = 0
    
        const interval = setInterval(function(){
            writingEl.innerHTML = text.substring(0,index++);
            if(index == text.length + 1){
                clearInterval(interval);
                writingEl.classList.remove('typewriter');
            }
        }, 300);
    }
});