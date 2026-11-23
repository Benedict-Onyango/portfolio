# Benedict Onyango | Portfolio

My personal portfolio site. I'm a software engineering student at Multimedia University of Kenya (graduating November 2028). I build full-stack web apps and explore machine learning on the side.


**Live site:** <!-- Coming soon -->

## Features

- **Light and dark themes** with a toggle. The choice is saved in `localStorage`, and first-time visitors get their system preference.
- **Sections:** Hero, About, Skills, Projects, and Contact.
- **Skills with logos.** Inline SVG icons (from [Font Awesome](https://fontawesome.com/)) that follow the theme color, so they work in both modes.
- **Contact form** that sends messages to my inbox through a separate Django backend (see below).
- **Responsive layout** from phone to desktop, with keyboard focus styles and screen reader labels.

## Tech stack

| Area            | Tools                                                              |
| --------------- | ------------------------------------------------------------------ |
| Frontend        | React (Vite), plain CSS with CSS variables for theming             |
| Icons           | Simple Icons (inline SVG [Font Awesome](https://fontawesome.com/)) |
| Contact backend | Django (separate repository)                                       |

## Project structure

```
src/
  assets/
    me.jpeg
    Resume.pdf
  components/
    header.jsx
    home.jsx
    home.css
    about.jsx
    about.css
    skills.jsx
    skills.css
    projects.jsx
    projects.css
    contact.jsx
    contact.css
    footer.jsx
  themes/
    theme.css            # light and dark color variables
    ThemeContext.jsx      # theme state + localStorage
    ThemeToggle.jsx
  main.jsx

```

## Getting started

Requirements: Node.js 18 or newer.

```bash
# 1. Clone the repo
git clone https://github.com/Benedict-Onyango/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the address printed in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Contact form and the Django backend

The contact form does not send email by itself. It posts to a small Django service that emails me each message. That backend lives in its own repository:

**Backend repo:** `https://github.com/Benedict-Onyango/portfolio-backend`

### How the two connect

1. The form in `Contact.jsx` sends a `POST` request with the fields `name`,`subject`, `email`, and `message` as form data.
2. A hidden field named `website` acts as a spam trap. Real visitors never fill it in, and the frontend drops submissions where it has a value.
3. The Django endpoint validates the data and sends the email.
4. The form shows a success message, or an error that tells the visitor to email me directly.

### Setting the endpoint

In `src/components/Contact.jsx`, set the constant at the top of the file to your backend URL:

```js
const FORM_ENDPOINT = "https://127.0.0.1/api/contact/";
```

### What the backend needs

- **CORS** allowed for the portfolio's domain (for example with `django-cors-headers`), or the browser will block the request.
- The view should read a **JSON body**, since axios sends objects as JSON. In a DRF `APIView`, `request.data` handles this.
- The endpoint is a Django REST Framework `APIView`. DRF exempts it from CSRF checks for anonymous requests, so no extra CSRF setup is needed. If your project's default permissions require login, set `permission_classes = [AllowAny]` on this view so visitors can post.
- Email credentials and the `SECRET_KEY` stored in environment variables, never committed to either repository.
- Basic rate limiting, so the form can't be used to flood the inbox.
  See the backend repository's README for setup, environment variables, and deployment.

## Customizing

- **Colors and themes:** edit the variables in `theme.css`. Every section uses `--bg`, `--surface`, `--text`, `--muted`, `--accent`, and `--border`.
- **Skills:** edit the lists at the top of `Skills.jsx`. 
- **Projects:** add an object to the `PROJECTS` array in `Projects.jsx`
- **Personal details:** update the email, social links, and CV file in `Contact.jsx` and `About.jsx`.

## Deployment

- **Frontend:** a static host such as Vercel, Netlify, or GitHub Pages, serving the output of `npm run build`.
- **Backend:** wherever the Django service runs. Make sure `FORM_ENDPOINT` points to the deployed URL, and that the backend allows the live site's domain in its CORS settings.

## Credits

- Technology logos from [Simple Icons](https://simpleicons.org) to [Font Awsome](https://fontawesome.com/).

## License

- All rights reserved

## Contact

[Email](benedictonayngo0@gamil.com) · [GitHub](https://github.com/Benedict-Onyango) · [LinkedIn](linkedin.com/in/benedict-onyango-153958340)
