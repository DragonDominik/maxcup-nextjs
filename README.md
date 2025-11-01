# MaxCup Website 🌐

**Status:** Under Development 🚧
The site is not officially live yet, but coming soon!

The official **MaxCup** website offers a modern, user-friendly interface, providing easy navigation and an engaging browsing experience for all visitors.

## Key Features

- Multilingual content (Hungarian, English, option to add more later)  
- Contact form for fast and direct customer communication  
- Responsive and mobile-friendly design  
- Fast, interactive user experience built on React/Next.js  
- SEO optimized for better discoverability  

## Technology

- **Next.js + React + TypeScript**  
- **Style:** Modern, clean, responsive design using **Tailwind CSS**
- **Animations:** Using USAL.JS for smooth scroll animatons

### Installation

1. Clone the repository:

```sh
git clone https://github.com/DragonDominik/maxcup-nextjs.git
cd your-repo
```

2. Install dependecies
```npm
npm install
```

3. (Optional) The contact form uses **Google SMTP**. To enable it, create a `.env.local` file in the project root with the following content:
```env
GMAIL_USER=sender@gmail.com
GMAIL_PASS=sender_gmail_smtp_pass
EMAIL_TO=send_to@gmail.com
```
(skip this step if you don't want to test the contact form)

4. Run development server
```sh
npm run dev
```

5 Open ```http://localhost:3000``` in your browser of choice
