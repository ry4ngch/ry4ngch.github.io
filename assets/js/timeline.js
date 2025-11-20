const loadTimelineLine = () => {
  const timelines = document.querySelectorAll('.resume_wrapper .timeline');
    
  if (timelines) {
    timelines.forEach(function(ob) {
      let divHeight = 0;
      const current_timeline_line = ob.querySelector('.line');
      const timeline_childEl = ob.querySelectorAll('.timeline-item:not(:last-child)');
      
      if (timeline_childEl.length > 0) {
        timeline_childEl.forEach(function(item) {
          const itemRect = item.getBoundingClientRect();
          const itemComputedStyle = window.getComputedStyle(item);
          
          // Get the height of the element including its padding and border
          let itemHeight = itemRect.height;

          // Add the bottom margin to the height
          itemHeight += parseFloat(itemComputedStyle.marginBottom);
          
          divHeight += itemHeight + 7;
        });

        current_timeline_line.style.height = divHeight + 'px';
      }
    });
  }
}

const toggleDetail = (event, contentId) => {
  const parentEl = document.getElementById(contentId).parentElement;
  console.log(event.target);
  event.target.classList.toggle('close');
  const detailInfoEl = parentEl.querySelector('.section-info');
  detailInfoEl.classList.toggle('expand-section');
}

window.addEventListener('DOMContentLoaded', function() {
  loadTimelineLine();
});

window.addEventListener('resize', (event) => {
  loadTimelineLine();
})