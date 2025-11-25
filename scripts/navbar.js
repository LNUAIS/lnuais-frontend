document.addEventListener("DOMContentLoaded", function() {
    // 1. Check if user is logged in
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            
            // 2. Find the "Join Us" link using its link address
            // We search for the specific <a> tag that points to signup.html
            const joinUsLink = document.querySelector('a[href="signup.html"]');

            if (joinUsLink) {
                // Get the parent <li> element so we can modify its content
                const parentLi = joinUsLink.parentElement;

                // 3. Determine Avatar URL
                // Use Google's picture if available, otherwise generate initials
                const avatarUrl = user.picture 
                    ? user.picture 
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`;

                // 4. Replace "Join Us" with Avatar + Name
                parentLi.innerHTML = `
                    <a href="dashboard.html" class="nav-profile-link" title="Go to Dashboard">
                        <img src="${avatarUrl}" alt="Profile" class="nav-avatar">
                        <span class="nav-username">${user.name.split(' ')[0]}</span>
                    </a>
                `;
            }
        } catch (e) {
            console.error("Error parsing user data:", e);
            // If data is corrupt, clear it so they can login again
            localStorage.removeItem('user');
        }
    }
});