# 🚀 Premium Developer Portfolio

Zamonaviy, interaktiv va yuqori darajadagi (Senior-level) frontend dasturchi portfel-sayti. Ushbu loyiha React va Vite asosida qurilgan bo'lib, o'zida ilg'or UI/UX tajribalarini, yuqori sifatli animatsiyalarni va xalqaro standartlarga mos dizaynni jamlagan.

## ✨ Asosiy Imkoniyatlar (Features)

- 🌓 **Dark & Light Mode**: Premium dizayndagi mavzular (React Context API va LocalStorage orqali boshqariladi). Light mode maxsus "Vercel/Stripe" uslubidagi chuqur soyalar va oq fondan iborat.
- 🌍 **Ko'p tillilik (i18n)**: O'zbek (UZ), Ingliz (EN) va Rus (RU) tillarini to'liq qo'llab-quvvatlaydi. Matnlar markazlashtirilgan holda boshqariladi.
- 💫 **Framer Motion Animatsiyalar**: Sahifalararo silliq o'tishlar (Page Transitions), elementlarning ketma-ket paydo bo'lishi (Stagger effects) va interaktiv hover effektlar.
- 🎨 **Premium UI**: Tailwind CSS orqali Utility-first yondashuv. Custom RGB CSS o'zgaruvchilari yordamida dinamik xiralashtirish (opacity) va Glassmorphism effektlari.
- 🖱️ **Custom Cursor**: Foydalanuvchi harakatiga ergashuvchi maxsus animatsiyali kursor.
- 📊 **Scroll Progress**: Sahifani o'qish jarayonini ko'rsatuvchi yuqori indikator.
- 🎭 **Lottie Animatsiyalar**: Saytni jonlantiruvchi yuqori sifatli, yengil vektor animatsiyalar (`@lottiefiles/react-lottie-player`).
- 🔍 **SEO Optimizatsiya**: Har bir sahifa uchun dinamik meta teglar va sarlavhalar (`react-helmet-async`).
- 📝 **Blog Bo'limi**: Maqolalarni qidirish tizimiga ega maxsus blog sahifasi.
- 📱 **To'liq Responsive**: Barcha turdagi ekranlar (mobil, planshet, noutbuk, monitor) uchun mukammal moslashtirilgan grid/flex layout.

---

## 🛠 Texnologiyalar Steki (Tech Stack)

**Asosiy (Core):**
- [React 18](https://reactjs.org/) - UI kutubxonasi
- [Vite](https://vitejs.dev/) - Tezkor build tool
- [React Router DOM](https://reactrouter.com/) - Sahifalararo navigatsiya

**Dizayn va Animatsiya:**
- [Tailwind CSS](https://tailwindcss.com/) - Stil berish uchun (Utility-first)
- [Framer Motion](https://www.framer.com/motion/) - Murakkab va silliq animatsiyalar
- [@lottiefiles/react-lottie-player](https://lottiefiles.com/) - Lottie JSON animatsiyalari
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) - SVG ikonkalar

**Infratuzilma (Ecosystem):**
- `react-i18next` & `i18next` - Tarjimalar tizimi
- `react-helmet-async` - SEO boshqaruvi

---

## 📂 Papkalar Strukturasi (Folder Structure)

```text
d:\projects\portfolio\
├── public/                 # Ochiq fayllar (favicon, h.k.)
├── src/
│   ├── assets/             # Rasmlar, ikonkalar va boshqa statik resurslar
│   ├── components/         # Qayta ishlatiluvchi React komponentlar
│   │   ├── AboutMe.jsx     # Men haqimda sahifasi (Tajriba xronologiyasi bilan)
│   │   ├── Blog.jsx        # Maqolalar va qidiruv
│   │   ├── Contact.jsx     # Bog'lanish formasi va aloqa ma'lumotlari
│   │   ├── CustomCursor.jsx# Maxsus sichqoncha kursori
│   │   ├── Home.jsx        # Asosiy kirish sahifasi
│   │   ├── PageTransition.jsx # Sahifalar o'zgarishidagi animatsiya wrapperni
│   │   ├── Project.jsx     # Loyihalar galereyasi va filtrlash
│   │   ├── SEO.jsx         # Dinamik meta teglar komponenti
│   │   └── Sidebar.jsx     # Yon panel (Profil va tezkor linklar)
│   ├── context/            # React Context (Masalan: ThemeContext.jsx)
│   ├── utils/              # Yordamchi funksiyalar (animations.js)
│   ├── App.jsx             # Asosiy routing va Layout
│   ├── i18n.js             # Tarjimalar konfiguratsiyasi va lug'atlar
│   ├── index.css           # Global stillar va Tailwind bazasi (RGB o'zgaruvchilar)
│   └── main.jsx            # Dasturning kirish nuqtasi (Entry point)
├── tailwind.config.js      # Tailwind sozlamalari (ranglar, soyalar)
├── package.json            # Loyiha kutubxonalari va skriptlari
└── README.md               # Ushbu hujjat
```

---

## ⚙️ O'rnatish va Ishga tushirish (Installation & Setup)

Loyihani o'z kompyuteringizda ishga tushirish uchun quyidagi qadamlarni bajaring:

### 1. Loyihani yuklab olish
```bash
git clone <repository-url>
cd portfolio
```

### 2. Kutubxonalarni o'rnatish (Dependencies)
```bash
npm install
# yoki
yarn install
```

### 3. Dasturni ishga tushirish (Development)
```bash
npm run dev
# yoki
yarn dev
```
Dastur odatda `http://localhost:5173` manzilida ishga tushadi.

### 4. Ishlab chiqarish uchun tayyorlash (Production Build)
```bash
npm run build
```
Build qilingan tayyor fayllar `dist/` papkasiga saqlanadi.

---

## 🔌 API va Integratsiyalar (Integrations)

### Aloqa Formasi (Contact Form)
`Contact.jsx` faylida foydalanuvchilar xabar yuborishi uchun forma mavjud. Hozirda forma quyidagi manzilga `POST` so'rovini yuboradi:
- **Endpoint:** `http://localhost:3000/api/contact`
- **Method:** `POST`
- **Body:** `{ "name": "...", "email": "...", "message": "..." }`

> **Eslatma (TODO):** Dasturni serverga (Production) yuklashdan oldin backend URL manzilini haqiqiy server manziliga o'zgartirish yoki `EmailJS` kabi uchinchi tomon xizmatlariga ulash kerak bo'ladi. (.env faylidan foydalanish tavsiya etiladi).

### Lottie Animatsiyalar
Animatsiyalar tashqi manbadan (CDN) yuklanadi:
- `https://assets3.lottiefiles.com/packages/...`
CORS yoki xavfsizlik muammolarini oldini olish uchun fayllar `lottie.host` o'rniga ishonchli `assets3.lottiefiles.com` serveridan chaqirilmoqda.

---

## 🎨 Arxitektura va Dizayn Patternlari

1. **Utility-First CSS (Tailwind):** Barcha stillar to'g'ridan-to'g'ri `className` orqali berilgan.
2. **CSS Variables for Theming:** `index.css` faylida `:root` (Light mode) va `.dark` (Dark mode) uchun ranglar raw RGB formatida berilgan (masalan, `--primary: 59 130 246`). Bu Tailwind'ning opacity modifikatorlari (`bg-primary/50`) to'g'ri ishlashini ta'minlaydi.
3. **Framer Motion Variants:** Kodni toza saqlash uchun barcha animatsiya logikalari `utils/animations.js` fayliga chiqarilgan va kerakli joyda import qilinadi.
4. **HOC (Higher Order Components):** `PageTransition.jsx` barcha sahifalarni o'rab oladi (wrap qiladi) va marshrut (route) o'zgarganda silliq kirish/chiqish effektini ta'minlaydi.

---

## 💡 Kelajakdagi Rejalar (TODOs)

- [ ] Loyihalar uchun "Live Preview" (Iframe) oynasini qo'shish.
- [x] Blog maqolalarini to'liq o'qish uchun alohida sahifa (`/blog/:id`) yaratish.
- [ ] Aloqa formasini haqiqiy Backend yoki EmailJS xizmatiga ulash.
- [ ] Backend sozlamalari uchun `.env` faylini qo'shish.

---
*Ushbu portfolio sifatli va zamonaviy veb-dasturlash standartlari asosida yaratilgan bo'lib, kelajakda oson kengaytirilishi (scalable) uchun qulay arxitekturaga ega.*