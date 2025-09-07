window.addEventListener('DOMContentLoaded', (event) => {
    const contents = document.querySelector('.resume-contents');
    const sidebar_navItems = document.querySelector('#sidebar__nav-items');
    const sidebar_maindiv = document.querySelector('#js_sidebar');
    const contents_elements = contents.querySelectorAll('[id]');
    const profile_elements = contents.querySelectorAll('.resume-profile [id]');

    // filter out content element that are not inside the sidebar div
    let filtered_elements = Array.from(contents_elements).filter((ob) => !sidebar_maindiv.contains(ob));
    if(!JSON.parse(sidebar_navItems.dataset.showProfile)){
        const profile_elements_array = Array.from(profile_elements);
        filtered_elements = filtered_elements.filter(ob => !profile_elements_array.includes(ob))
    }
    if (sidebar_navItems) {
        let sidebar_content = '';
        filtered_elements.forEach((ob) => {
            const content_header = ob.textContent.trim();
            const content_id = ob.getAttribute('id');
            
            sidebar_content += `<li><a href="#${content_id}"><span class="nav__sub-title">${content_header}</span></a></li>`;
        });
        sidebar_navItems.innerHTML = sidebar_content;
    }
});