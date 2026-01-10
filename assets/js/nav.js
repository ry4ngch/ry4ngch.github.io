window.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelector('.resume-contents');
    const sidebar_navItems = document.querySelector('#sidebar__nav-items');
    const sidebar_maindiv = document.querySelector('#js_sidebar');
    
    if (!contents || !sidebar_navItems) return;

    const contents_elements = contents.querySelectorAll('[id]');
    const profile_elements = contents.querySelectorAll('.resume-profile [id]');
    const showProfile = sidebar_navItems.dataset.showProfile === "true";
    const profileSet = new Set(profile_elements);

    const fragment = document.createDocumentFragment();

    contents_elements.forEach((ob) => {
        // Skip elements inside the sidebar itself or profile items if hidden
        if (sidebar_maindiv.contains(ob)) return;
        if (!showProfile && profileSet.has(ob)) return;

        const content_header = ob.textContent.trim();
        const content_id = ob.id;

        if (content_header && content_id) {
            const li = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `#${content_id}`;
            anchor.innerHTML = `<span class="nav__sub-title">${content_header}</span>`;
            
            li.appendChild(anchor);
            fragment.appendChild(li);
        }
    });

    // Clear and batch append (Performance boost)
    sidebar_navItems.innerHTML = '';
    sidebar_navItems.appendChild(fragment);
    sidebar_navItems.style.minHeight = 'auto';

    // Event Delegation (Add listener ONCE outside the loop)
    sidebar_navItems.addEventListener('click', (e) => {
        const clickedLi = e.target.closest('li');
        if (clickedLi) {
            // Remove active class from all sibling LIs
            const siblings = sidebar_navItems.querySelectorAll('li');
            siblings.forEach(li => li.classList.remove('active-toc'));
            
            // Add to the one clicked
            clickedLi.classList.add('active-toc');
        }
    });
});