// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Toggle icon between bars and times (X)
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Comment Form Handling (Frontend Demo Only)
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');
    const commentCount = document.getElementById('comment-count');

    if (commentForm && commentsList && commentCount) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const textarea = commentForm.querySelector('textarea');
            const commentText = textarea.value.trim();
            
            if (commentText) {
                // Get current date/time
                const now = new Date();
                const dateStr = now.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                const timeStr = now.toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit',
                    hour12: true 
                });

                // Create new comment element
                const newComment = document.createElement('div');
                newComment.className = 'comment-item';
                newComment.innerHTML = `
                    <div class="comment-author">You (Admin)</div>
                    <div class="comment-date">${dateStr} at ${timeStr}</div>
                    <div class="comment-text">${escapeHtml(commentText)}</div>
                `;

                // Add to comments list (newest first)
                commentsList.insertBefore(newComment, commentsList.firstChild);

                // Update comment count
                const currentCount = parseInt(commentCount.textContent);
                commentCount.textContent = currentCount + 1;

                // Clear form
                textarea.value = '';

                // Show success message
                alert('Comment posted successfully! (Note: This is a static demo. Comments will not persist after page refresh.)');
            }
        });
    }

    // Helper function to escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Optional: Add reading progress bar on single post pages
window.addEventListener('scroll', () => {
    const postBody = document.querySelector('.post-body-single');
    if (!postBody) return;

    const postTop = postBody.offsetTop;
    const postHeight = postBody.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;

    // Calculate progress (0 to 1)
    let progress = 0;
    if (scrolled > postTop) {
        progress = Math.min((scrolled - postTop) / (postHeight - windowHeight), 1);
    }

    // You could add a visual progress indicator here if desired
    // For now, we'll just log it for debugging
    // console.log(`Reading progress: ${(progress * 100).toFixed(0)}%`);
});
