# How to Post as Admin (Static Site Guide)

Since this is a **static website** (no database or backend), there are two approaches to adding new posts:

## Option 1: Manual HTML Method (Simple)

### Step 1: Create a New Post File
1. Go to the `/posts/` folder
2. Copy `post-1.html` and rename it (e.g., `post-3.html`)
3. Open the new file in a text editor

### Step 2: Edit the Content
Update these sections:
- **Title tag**: `<title>Your Post Title - My Modern Blog</title>`
- **Post title**: `<h1 class="post-title-single">Your Post Title</h1>`
- **Meta info**: Change date, read time, and updated date
- **Featured image**: Replace the image URL
- **Post body**: Write your content in the `.post-body-single` div

### Step 3: Add to Homepage
1. Open `index.html`
2. Copy an existing `<article class="post-card">` block
3. Paste it at the top of the `.posts-grid`
4. Update the link to point to your new post file

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Added new post: Your Post Title"
git push
```

---

## Option 2: Use a Static Site Generator (Recommended for Frequent Posting)

For a more admin-like experience, consider migrating to:

### **Jekyll** (GitHub Pages Native)
- Write posts in Markdown
- Automatic date/read-time calculation
- Built-in deployment to GitHub Pages

**Structure:**
```
_posts/
  2023-11-20-my-new-post.md
  2023-11-15-another-post.md
```

**Example Markdown Post:**
```markdown
---
layout: post
title: "My New Post"
date: 2023-11-20 10:00:00
updated: 2023-11-21 14:30:00
image: /images/post-image.jpg
tags: [javascript, web]
---

Write your content here in **Markdown**!

## Heading
Regular paragraph text.

\`\`\`javascript
// Code blocks work too
console.log("Hello!");
\`\`\`
```

### Other Popular Options:
- **Hugo** (Fastest, Go-based)
- **Eleventy (11ty)** (Flexible, JavaScript-based)
- **Next.js** (React-based, more complex)

---

## Adding Comments (Real Backend Required)

The current comment system is **frontend-only demo**. For real comments that persist:

### Option A: Disqus (Easiest)
1. Sign up at [disqus.com](https://disqus.com)
2. Get your embed code
3. Replace the comment section with Disqus embed

### Option B: Giscus (GitHub-Based, Free)
1. Install Giscus app on your GitHub repo
2. Add the script to your post pages
3. Comments stored as GitHub Discussions

### Option C: Commento/Utterances
Similar to Giscus, uses GitHub issues for storage.

---

## Quick Reference: Read Time Calculation

To calculate reading time manually:
- Average reading speed: ~200 words per minute
- Count words in your post
- Divide by 200 and round up

**Example:**
- 800 words ÷ 200 = **4 min read**
- 1200 words ÷ 200 = **6 min read**

---

## File Structure Summary

```
/workspace/
├── index.html          (Homepage - update when adding posts)
├── css/
│   └── style.css       (All styling)
├── js/
│   └── main.js         (Mobile menu, comments demo)
├── posts/
│   ├── post-1.html     (First post)
│   ├── post-2.html     (Second post)
│   └── post-3.html     (Your new posts here)
└── README.md           (This file)
```

---

## Need More Help?

1. **Edit colors**: Change CSS variables in `css/style.css`
2. **Change fonts**: Update Google Fonts links in HTML `<head>`
3. **Add social links**: Edit footer in each HTML file
4. **Deploy**: Push to GitHub and enable GitHub Pages in repo settings

Happy blogging! 🎉
