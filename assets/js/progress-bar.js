window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.progress-bar').forEach(el => {
        const value = el.getAttribute('data-value');
        el.style.setProperty('--target-value', value); // animate to target
      
        // Trigger reflow to restart animation
        void el.offsetWidth;
      
        el.style.animation = 'progress-increment 2s forwards';
      });
})
