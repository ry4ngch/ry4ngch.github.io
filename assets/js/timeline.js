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
          
          divHeight += itemHeight + 19;
        });

        current_timeline_line.style.height = divHeight + 'px';
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', function() {
  loadTimelineLine();
});

window.addEventListener('resize', (event) => {
  loadTimelineLine();
})