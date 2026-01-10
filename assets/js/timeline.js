const toggleDetail = (event, contentId) => {
  const parentEl = document.getElementById(contentId).parentElement;
  console.log(event.target);
  event.target.classList.toggle('close');
  const detailInfoEl = parentEl.querySelector('.section-info');
  detailInfoEl.classList.toggle('expand-section');
}