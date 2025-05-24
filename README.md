<h1 align="center">
  amirabbas.dev - v1
</h1>

<p align="center">
  My personal developer portfolio, built using <a href="https://nextjs.org/" target="_blank">Next.js</a>, styled with <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.
</p>

---

This is my custom portfolio site showcasing my work, skills, and projects. Built with performance and modern aesthetics in mind using Next.js, Tailwind CSS, and Framer Motion. The project includes dynamic API routes and playful UX elements like a fake error page effect to add humor.

### 🚀 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Node.js
- Google API
- Vercel

Dependencies are listed in `package.json`.

---

### 🔧 Getting Started

To run the project locally:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
yarn install
yarn dev
```

You can create a `.env` file and add your Google API key:

```bash
touch .env
```

```env
NEXT_PUBLIC_KEY_GOOGLE_API=your_api_key
```

---

### 🧪 API Endpoints

- `/api/userInfoByIP/[ip]` — Get geolocation and ISP info from IP
- `/api/userInfoByLatLon/[lat]/[lon]` — Get ZIP code from lat/lon
- `/api/typing/[minLength]` — Get a random quote with `minLength` characters

---

### 📜 License

This project is licensed under the [MIT License](./LICENSE).

### ⚠️ Attribution

This project is a heavily modified version of a portfolio originally created by [Abdellatif Anaflous](https://anaflous.com).

```
Copyright (c) 2022 Abdellatif Anaflous
```

---

### 🙋 Author

**Amir Abbas**

- Website: [amirabbas.dev](https://amirabbas.dev)

---
