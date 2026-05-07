import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        blog: "Blog",
        contact: "Contact"
      },
      header: {
        name: "Umarov Asadbek",
        downloadCV: "Download CV",
        download: "Download",
        size: "Size",
        resumeFilename: "Umarov-Asadbek-CV-EN.pdf"
      },
      sidebar: {
        stats: {
          projects: "Projects",
          clients: "Clients",
          experience: "Year exp."
        },
        info: {
          location: "Location",
          locationValue: "Tashkent, Uzbekistan",
          direction: "Direction",
          directionValue: "Frontend Developer",
          workingHours: "Working Hours",
          workingHoursValue: "24/7 Online",
          level: "Level",
          levelValue: "Strong Junior"
        },
        openForProjects: "Open for new projects"
      },
      home: {
        greeting: "Hello, I am",
        name: "Umarov Asadbek",
        description: "As a web developer and designer, I strive to create effective and result-oriented solutions. My main goal is to improve the user experience and ensure product success by developing and managing websites and web applications.",
        availability: "Ready for work",
        namePrefix: "I am",
        subtitle: "Web Developer & Mobile Developer",
        shortBio: "I specialize in creating modern and effective web and mobile solutions. My priority is to improve user experience and develop quality products.",
        ctaProjects: "Projects",
        experienceLabel: "Experience",
        experienceValue: "1+ year",
        projectsLabel: "Projects",
        projectsValue: "4+ projects",
        stats: {
          projects: "Projects",
          clients: "Clients",
          experience: "Experience",
          workingHours: "Working Hours",
          expValue: "1 year"
        }
      },
      aboutme: {
        title: "About Me",
        description: "I am Asadbek. I am a web developer and I create simple, effective web projects using modern technologies. I am always open to learning and strive to apply new knowledge in practice.",
        contactBtn: "Contact",
        toolsTitle: "Tools & Technologies",
        capabilitiesTitle: "What I Can Do",
        capabilities: {
          seo: { title: "SEO", desc: "Improving site ranking in search engine results" },
          design: { title: "Design", desc: "Creating modern designs for websites and applications" },
          quality: { title: "Quality", desc: "Creating high-quality content for websites and applications" },
          fast: { title: "Fast", desc: "Offering fast solutions for websites and applications" }
        },
        clientsTitle: "Clients",
        clientLabel: "Milliy Client"
      },
      experience: {
        title: "Experience",
        items: {
          edu: {
            title: "Self-taught & Practice",
            company: "Personal Projects",
            date: "2023 - Present",
            desc: "Learning modern web technologies and building various applications to solve real-world problems."
          },
          softturtkul: {
            title: "Frontend Developer",
            company: "Soft Turtkul",
            date: "2024 - Present",
            desc: "Working on real projects like 'Darrov' delivery app, improving UI/UX and performance."
          }
        }
      },
      project: {
        title: "Projects",
        viewBtn: "View",
        filters: {
          all: "All",
          production: "Real Projects",
          personal: "Practice Projects"
        },
        telegram: {
          title: "Telegram Channel",
          desc: "You can also follow all my projects on my Telegram channel!",
          btn: "Visit Channel"
        },
        items: {
          mannhome: {
            title: "Mann Home",
            tag: "Online Furniture Store",
            desc: "Mann Home is a modern online furniture store. You can view, select, and safely purchase various furniture items through the site. It features a user-friendly interface and fully functional e-commerce features."
          },
          darrov: {
            title: "Darrov",
            tag: "Delivery & Services App",
            desc: "Darrov is a service application operating on Telegram and web platforms. Users can easily order food delivery, technical services, and other service options."
          },
          pubg: {
            title: "PUBG Tournament",
            tag: "Gaming / Platform",
            desc: "PUBG Tournament is an online tournament site covering participants from 12 regions. Users can follow the tournament schedule, results, and participation opportunities through the site."
          },
          autoquiz: {
            title: "AutoQuiz",
            tag: "Education Technology",
            desc: "AutoQuiz platform - an innovative educational tool that allows teachers to create and manage tests."
          },
          vocabapp: {
            title: "VocabApp",
            tag: "EdTech • Mobile",
            desc: "VocabApp is a mobile application designed for foreign language learners to increase their personal vocabulary. Users can quickly enter their words (batch-entry), review them daily, and strengthen their memory through smart, randomized tests."
          },
          sentences: {
            title: "Tences Bot",
            tag: "Telegram • Education",
            desc: "Tences is a Telegram bot for learning English tenses and irregular verbs in Uzbek. Through an interactive menu you can quickly find tense rules, structure, and examples."
          }
        }
      },
      blog: {
        title: "Blog",
        searchPlaceholder: "Search articles...",
        readMore: "Read more",
        noResults: "No articles found",
        backToBlog: "Back to Blog",
        posts: {
          reactQuery: {
            title: "Why use React Query?",
            desc: "The best way to manage data in React applications and why you should use it.",
            content: [
              "React Query is an amazing library for data fetching and state management in React applications. It eliminates the need for complex global state management solutions like Redux just for storing server data.",
              "It automatically handles caching, background updates, and stale data synchronization. This means your application will always show the most up-to-date information without requiring manual API calls every time a component mounts.",
              "By adopting React Query in your projects, you can significantly reduce the amount of boilerplate code and improve the overall performance and user experience of your application."
            ]
          },
          tailwindPremium: {
            title: "Premium UI with Tailwind",
            desc: "Secrets to creating high-quality, professional user interfaces using Tailwind CSS.",
            content: [
              "Tailwind CSS has revolutionized the way we style web applications. Unlike traditional component libraries, it provides utility classes that allow you to build completely custom designs without leaving your HTML.",
              "To create a truly premium UI, you need to understand how to leverage Tailwind's configuration. Using custom color palettes, fine-tuning shadows, and utilizing backdrop-blur effects can elevate your design from 'basic' to 'senior-level'.",
              "In this article, we explore the best practices for structuring your Tailwind code, creating reusable components with @apply, and implementing dark mode effectively."
            ]
          },
          cleanCode: {
            title: "Clean Code Principles",
            desc: "How to write code that is easy to read, maintain, and scale for long-term projects.",
            content: [
              "Writing clean code is not just about making it work; it's about making it readable for the next developer (which could be you in six months). Clear naming conventions and modular functions are the foundation of good software architecture.",
              "One of the core principles is DRY (Don't Repeat Yourself). If you find yourself copying and pasting the same logic, it's time to extract it into a reusable utility function or a custom React hook.",
              "Furthermore, keeping your components small and focused on a single responsibility (Single Responsibility Principle) makes testing and debugging much easier. Always strive for simplicity over cleverness."
            ]
          }
        }
      },
      blog: {
        title: "Blog",
        searchPlaceholder: "Maqolalarni qidirish...",
        readMore: "Batafsil",
        noResults: "Maqolalar topilmadi",
        backToBlog: "Blogga qaytish",
        posts: {
          reactQuery: {
            title: "Nima uchun React Query?",
            desc: "React ilovalarida ma'lumotlarni boshqarishning eng yaxshi usuli va nima uchun undan foydalanish kerak.",
            content: [
              "React Query — bu React ilovalarida server ma'lumotlarini olish (fetching) va holatni boshqarish uchun ajoyib kutubxona. U faqat server ma'lumotlarini saqlash uchun Redux kabi murakkab global state menejerlariga bo'lgan ehtiyojni yo'q qiladi.",
              "U keshlash, fonda ma'lumotlarni yangilash va eskirgan ma'lumotlarni sinxronlashtirish kabi ishlarni avtomatik ravishda bajaradi. Bu shuni anglatadiki, komponent har safar yuklanganda qo'lda API so'rovlarini yozishingiz shart emas va ilovangiz doimo eng yangi ma'lumotlarni ko'rsatadi.",
              "Loyihalaringizda React Query-ni qo'llash orqali siz takrorlanuvchi (boilerplate) kodlar hajmini sezilarli darajada kamaytirishingiz hamda dastur unumdorligi va foydalanuvchi tajribasini oshirishingiz mumkin."
            ]
          },
          tailwindPremium: {
            title: "Tailwind bilan Premium UI",
            desc: "Tailwind CSS yordamida yuqori sifatli va professional interfeyslarni yaratish sirlari.",
            content: [
              "Tailwind CSS veb-ilovalarga stil berish usulimizni tubdan o'zgartirdi. An'anaviy komponentlar kutubxonalaridan farqli o'laroq, u HTML-ni tark etmasdan turib to'liq shaxsiy dizaynlarni yaratishga imkon beruvchi utility-klasslarni taqdim etadi.",
              "Haqiqiy premium UI yaratish uchun Tailwind konfiguratsiyasidan qanday to'g'ri foydalanishni bilish muhim. Shaxsiy ranglar palitrasidan foydalanish, soyalarni aniq sozlash va backdrop-blur effektlarini qo'llash orqali dizayningizni 'oddiy' darajadan 'senior' darajaga olib chiqishingiz mumkin.",
              "Ushbu maqolada biz Tailwind kodini qanday qilib to'g'ri strukturalash, @apply yordamida qayta ishlatiluvchi komponentlar yaratish va Dark Mode (qorong'i rejim) ni samarali qo'llash bo'yicha eng yaxshi amaliyotlarni ko'rib chiqamiz."
            ]
          },
          cleanCode: {
            title: "Clean Code prinsiplari",
            desc: "Uzoq muddatli loyihalar uchun oson o'qiladigan, saqlanadigan va kengaytiriladigan kod yozish usullari.",
            content: [
              "Toza kod (Clean Code) yozish — bu shunchaki uning ishlashini ta'minlash emas, balki uni keyingi dasturchi (yoki olti oydan keyingi o'zingiz) uchun o'qilishi oson holatga keltirishdir. Aniq nomlash qoidalari va modulli funksiyalar yaxshi dasturiy arxitekturaning asosidir.",
              "Asosiy qoidalardan biri bu DRY (Don't Repeat Yourself - O'zingizni takrorlamang) tamoyilidir. Agar siz bir xil mantiqni qayta-qayta nusxalayotganingizni sezsangiz, uni qayta ishlatiluvchi yordamchi funksiya yoki maxsus React hook'iga ajratish vaqti kelgan bo'ladi.",
              "Bundan tashqari, komponentlaringizni kichik va faqat bitta vazifaga qaratilgan holatda saqlash (Single Responsibility Principle) kodni test qilish va xatolarni topishni ancha osonlashtiradi. Har doim murakkablikdan ko'ra soddalikni afzal ko'ring."
            ]
          }
        }
      },
      blog: {
        title: "Блог",
        searchPlaceholder: "Поиск статей...",
        readMore: "Подробнее",
        noResults: "Статьи не найдены",
        backToBlog: "Вернуться в блог",
        posts: {
          reactQuery: {
            title: "Зачем использовать React Query?",
            desc: "Лучший способ управления данными в приложениях React и почему его стоит использовать.",
            content: [
              "React Query — это удивительная библиотека для получения данных и управления состоянием в React-приложениях. Она устраняет необходимость в сложных решениях для глобального управления состоянием, таких как Redux, только для хранения данных сервера.",
              "Она автоматически обрабатывает кэширование, фоновые обновления и синхронизацию устаревших данных. Это означает, что ваше приложение всегда будет показывать самую свежую информацию, не требуя ручных API-запросов при каждом монтировании компонента.",
              "Используя React Query в своих проектах, вы можете значительно сократить объем шаблонного кода и улучшить общую производительность и пользовательский опыт вашего приложения."
            ]
          },
          tailwindPremium: {
            title: "Премиальный UI с Tailwind",
            desc: "Секреты создания высококачественных профессиональных интерфейсов с помощью Tailwind CSS.",
            content: [
              "Tailwind CSS произвел революцию в том, как мы стилизуем веб-приложения. В отличие от традиционных библиотек компонентов, он предоставляет служебные классы, которые позволяют создавать полностью индивидуальный дизайн, не покидая HTML.",
              "Чтобы создать по-настоящему премиальный пользовательский интерфейс, вам нужно понимать, как использовать конфигурацию Tailwind. Использование настраиваемых цветовых палитр, тонкая настройка теней и использование эффектов размытия фона могут поднять ваш дизайн от «базового» до уровня «senior».",
              "В этой статье мы рассмотрим лучшие практики структурирования кода Tailwind, создания повторно используемых компонентов с помощью @apply и эффективного внедрения темного режима."
            ]
          },
          cleanCode: {
            title: "Принципы чистого кода",
            desc: "Как писать код, который легко читать, поддерживать и масштабировать для долгосрочных проектов.",
            content: [
              "Написание чистого кода — это не просто заставить его работать; это о том, чтобы сделать его читаемым для следующего разработчика (которым можете быть вы через шесть месяцев). Четкие соглашения об именовании и модульные функции — основа хорошей архитектуры программного обеспечения.",
              "Один из основных принципов — DRY (Don't Repeat Yourself). Если вы обнаружите, что снова и снова копируете и вставляете одну и ту же логику, пришло время извлечь ее в повторно используемую служебную функцию или пользовательский хук React.",
              "Кроме того, сохранение ваших компонентов небольшими и сосредоточенными на одной ответственности (Принцип единой ответственности) значительно упрощает тестирование и отладку. Всегда отдавайте предпочтение простоте перед хитростью."
            ]
          }
        }
      },
      contact: {
        title: "Contact",
        formTitle: "Send a Request",
        form: {
          nameLabel: "Your Name*",
          namePlaceholder: "Enter your name",
          emailLabel: "Your Email*",
          emailPlaceholder: "example@gmail.com",
          messageLabel: "Your Message*",
          messagePlaceholder: "Enter your message",
          submitBtn: "Send"
        },
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Enter a valid email",
          messageRequired: "Message cannot be empty"
        },
        alerts: {
          success: "Your message has been sent! You will receive a response soon.",
          error: "An error occurred: ",
          generalError: "An error occurred while sending the message. Please try again later."
        }
      },
      contacts: {
        gmail: "Gmail",
        github: "GitHub",
        telegram: "Telegram",
        phone: "Phone",
        emailTitle: "E-mail",
        phoneTitle: "Phone Number"
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        about: "Haqida",
        projects: "Loyihalar",
        blog: "Blog",
        contact: "Bog'lanish"
      },
      header: {
        name: "Umarov Asadbek",
        downloadCV: "CV Yuklash",
        download: "Yuklash",
        size: "Hajmi",
        resumeFilename: "Umarov-Asadbek-CV-UZ.pdf"
      },
      sidebar: {
        stats: {
          projects: "Loyihalar",
          clients: "Mijozlar",
          experience: "Yil tajriba"
        },
        info: {
          location: "Joylashuv",
          locationValue: "Toshkent, O‘zbekiston",
          direction: "Yo‘nalish",
          directionValue: "Frontend Developer",
          workingHours: "Ish vaqti",
          workingHoursValue: "24/7 Online",
          level: "Daraja",
          levelValue: "Strong Junior"
        },
        openForProjects: "Yangi loyihalar uchun ochiq"
      },
      home: {
        greeting: "Assalomu alaykum, Men",
        name: "Umarov Asadbek",
        description: "Veb dasturchi va dizayner sifatida, samarali va natijaga yo'naltirilgan yechimlar yaratishga intilaman. Veb-saytlar hamda veb-ilovalarni ishlab chiqish va boshqarish orqali, foydalanuvchi tajribasini mukammallashtirish va mahsulot muvaffaqiyatini ta'minlash mening asosiy maqsadimdir.",
        availability: "Ishga tayyor",
        namePrefix: "Men",
        subtitle: "Web dasturchi & Mobile developer",
        shortBio: "Zamonaviy va samarali veb-echimlar va mobile-echimlar yaratishga ixtisoslashganman. Foydalanuvchi tajribasini yaxshilash va sifatli mahsulotlar ishlab chiqish mening ustuvor vazifamdir.",
        ctaProjects: "Loyihalar",
        experienceLabel: "Tajriba",
        experienceValue: "1+ yil",
        projectsLabel: "Loyihalar",
        projectsValue: "4+ ta",
        stats: {
          projects: "Loyihalar",
          clients: "Mijozlar",
          experience: "Tajriba",
          workingHours: "Ish vaqti",
          expValue: "1yil"
        }
      },
      aboutme: {
        title: "Men haqimda",
        description: "Men Asadbek, Veb dasturchiman va zamonaviy texnologiyalar yordamida oddiy, samarali veb-loyihalar yarataman. Doim o'rganishga ochiqman va yangi bilimlarni amaliyotda qo'llashga intilaman.",
        contactBtn: "Bog'lanish",
        toolsTitle: "Asbob uskunalari",
        capabilitiesTitle: "Men nimalar qila olaman",
        capabilities: {
          seo: { title: "Seo", desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash" },
          design: { title: "Dizayn", desc: "Veb-saytlar va ilovalar uchun zamonaviy dizayn yaratish" },
          quality: { title: "Sifat", desc: "Veb-saytlar va ilovalar uchun yuqori sifatli kontent yaratish" },
          fast: { title: "Tezkor", desc: "Veb-saytlar va ilovalar uchun tezkor yechimlar taklif qilish" }
        },
        clientsTitle: "Mijozlar",
        clientLabel: "Milliy Mijoz"
      },
      experience: {
        title: "Tajriba",
        items: {
          edu: {
            title: "Mustaqil o'rganish & Amaliyot",
            company: "Shaxsiy loyihalar",
            date: "2023 - Hozirgacha",
            desc: "Zamonaviy veb-texnologiyalarni o'rganish va real muammolarni hal qilish uchun turli xil ilovalar yaratish."
          },
          softturtkul: {
            title: "Frontend Dasturchi",
            company: "Soft To'rtko'l",
            date: "2024 - Hozirgacha",
            desc: "'Darrov' yetkazib berish ilovasi kabi real loyihalarda ishlash, UI/UX va samaradorlikni oshirish."
          }
        }
      },
      project: {
        title: "Loyihalar",
        viewBtn: "Ko'rish",
        filters: {
          all: "Barcha",
          production: "Real loyihalar",
          personal: "Amalyot loyihalar"
        },
        telegram: {
          title: "Telegram kanal",
          desc: "Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz mumkin!",
          btn: "Ta'shrif buyurish"
        },
        items: {
          mannhome: {
            title: "Mann Home",
            tag: "Online Furniture Store",
            desc: "Mann Home – zamonaviy onlayn mebel do‘koni. Sayt orqali turli mebellarni ko‘rish, tanlash va xavfsiz xarid qilish mumkin. Foydalanuvchi uchun qulay interfeys va to‘liq ishlaydigan e-commerce funksiyalari mavjud."
          },
          darrov: {
            title: "Darrov",
            tag: "Delivery & Services App",
            desc: "Darrov — Telegram va web platformasida ishlaydigan xizmatlar ilovasi. Foydalanuvchilar ovqat yetkazib berish, texnik xizmatlar va boshqa service xizmatlarini osongina buyurtma qilishlari mumkin."
          },
          pubg: {
            title: "PUBG Tournament",
            tag: "Gaming / Platform",
            desc: "PUBG Tournament – 12 viloyat ishtirokchilarini qamrab olgan onlayn turnir sayti. Foydalanuvchilar turnir jadvali, natijalar va qatnashish imkoniyatlarini sayt orqali kuzatishlari mumkin."
          },
          autoquiz: {
            title: "AutoQuiz",
            tag: "Education Technology",
            desc: "AutoQuiz platforma — o'qituvchilarga testlar yaratish va boshqarish imkonini beruvchi innovatsion ta'lim vositasi"
          },
          vocabapp: {
            title: "VocabApp",
            tag: "EdTech • Mobile",
            desc: "VocabApp — xorijiy tillarni o'rganuvchilar uchun shaxsiy lug'at boyligini oshirishga mo'ljallangan mobil ilova. Foydalanuvchilar o'z so'zlarini tezkor kiritish (batch-entry), ularni kunlik tartibda ko'rib chiqish va aqlli, randomizatsiya qilingan testlar orqali xotirasini mustahkamlashlari mumkin."
          },
          sentences: {
            title: "Tences Bot",
            tag: "Telegram bot",
            desc: "Tences — ingliz tili zamonlari va noto'g'ri fe'llarni o'zbek tilida o'rganish uchun qulay Telegram bot. Zamonlar qoidasi, tuzilishi va misollarini interaktiv menyu orqali oson topish imkonini beradi."
          }
        }
      },
      blog: {
        title: "Blog",
        searchPlaceholder: "Maqolalarni qidirish...",
        readMore: "Batafsil",
        noResults: "Maqolalar topilmadi",
        posts: {
          reactQuery: {
            title: "Nima uchun React Query?",
            desc: "React ilovalarida ma'lumotlarni boshqarishning eng yaxshi usuli va nima uchun undan foydalanish kerak."
          },
          tailwindPremium: {
            title: "Tailwind bilan Premium UI",
            desc: "Tailwind CSS yordamida yuqori sifatli va professional interfeyslarni yaratish sirlari."
          },
          cleanCode: {
            title: "Clean Code prinsiplari",
            desc: "Uzoq muddatli loyihalar uchun oson o'qiladigan, saqlanadigan va kengaytiriladigan kod yozish usullari."
          }
        }
      },
      contact: {
        title: "Aloqa",
        formTitle: "So'rov yuborish",
        form: {
          nameLabel: "Ismingiz*",
          namePlaceholder: "Ismingizni kiriting",
          emailLabel: "Manzilingiz*",
          emailPlaceholder: "misol@gmail.com",
          messageLabel: "Xabaringiz*",
          messagePlaceholder: "Xabaringizni kiriting",
          submitBtn: "Yuborish"
        },
        errors: {
          nameRequired: "Ism kiritilishi shart",
          emailRequired: "Email kiritilishi shart",
          emailInvalid: "Yaroqli email kiriting",
          messageRequired: "Xabar bo'sh bo'lishi mumkin emas"
        },
        alerts: {
          success: "Xabaringiz yuborildi! Tez orada javob olasiz.",
          error: "Xatolik yuz berdi: ",
          generalError: "Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring."
        }
      },
      contacts: {
        gmail: "Gmail",
        github: "GitHub",
        telegram: "Telegram",
        phone: "Telefon",
        emailTitle: "E-pochta",
        phoneTitle: "Telefon raqam"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О себе",
        projects: "Проекты",
        blog: "Блог",
        contact: "Контакты"
      },
      header: {
        name: "Умаров Асадбек",
        downloadCV: "Скачать CV",
        download: "Скачать",
        size: "Размер",
        resumeFilename: "Umarov-Asadbek-CV-RU.pdf"
      },
      sidebar: {
        stats: {
          projects: "Проекты",
          clients: "Клиенты",
          experience: "Год опыта"
        },
        info: {
          location: "Местоположение",
          locationValue: "Ташкент, Узбекистан",
          direction: "Направление",
          directionValue: "Frontend Разработчик",
          workingHours: "Рабочее время",
          workingHoursValue: "24/7 Онлайн",
          level: "Уровень",
          levelValue: "Strong Junior"
        },
        openForProjects: "Открыт для новых проектов"
      },
      home: {
        greeting: "Ассалому алайкум, Я",
        name: "Умаров Асадбек",
        description: "Как веб-разработчик и дизайнер, я стремлюсь создавать эффективные и ориентированные на результат решения. Моя основная цель — улучшить пользовательский опыт и обеспечить успех продукта путем разработки и управления веб-сайтами и веб-приложениями.",
        availability: "Готов к работе",
        namePrefix: "Я",
        subtitle: "Веб-разработчик и Мобильный разработчик",
        shortBio: "Я специализируюсь на создании современных и эффективных веб- и мобильных решений. Мой приоритет — улучшение пользовательского опыта и разработка качественных продуктов.",
        ctaProjects: "Проекты",
        experienceLabel: "Опыт",
        experienceValue: "1+ год",
        projectsLabel: "Проекты",
        projectsValue: "4+ проекта",
        stats: {
          projects: "Проекты",
          clients: "Клиенты",
          experience: "Опыт",
          workingHours: "Рабочее время",
          expValue: "1 год"
        }
      },
      aboutme: {
        title: "Обо мне",
        description: "Я Асадбек, Я веб-разработчик и создаю простые, эффективные веб-проекты, используя современные технологии. Я всегда открыт к обучению и стремлюсь применять новые знания на практике.",
        contactBtn: "Связаться",
        toolsTitle: "Инструменты и технологии",
        capabilitiesTitle: "Что я умею",
        capabilities: {
          seo: { title: "SEO", desc: "Улучшение рейтинга сайта в результатах поисковых систем" },
          design: { title: "Дизайн", desc: "Создание современного дизайна для сайтов и приложений" },
          quality: { title: "Качество", desc: "Создание качественного контента для сайтов и приложений" },
          fast: { title: "Скорость", desc: "Предложение быстрых решений для сайтов и приложений" }
        },
        clientsTitle: "Клиенты",
        clientLabel: "Milliy Клиент"
      },
      experience: {
        title: "Опыт",
        items: {
          edu: {
            title: "Самообразование и практика",
            company: "Личные проекты",
            date: "2023 - Настоящее время",
            desc: "Изучение современных веб-технологий и создание различных приложений для решения реальных задач."
          },
          softturtkul: {
            title: "Frontend Разработчик",
            company: "Soft Turtkul",
            date: "2024 - Настоящее время",
            desc: "Работа над реальными проектами, такими как приложение для доставки 'Darrov', улучшение UI/UX и производительности."
          }
        }
      },
      project: {
        title: "Проекты",
        viewBtn: "Смотреть",
        filters: {
          all: "Все",
          production: "Реальные проекты",
          personal: "Учебные проекты"
        },
        telegram: {
          title: "Telegram канал",
          desc: "Вы также можете следить за всеми моими проектами в моем Telegram канале!",
          btn: "Посетить канал"
        },
        items: {
          mannhome: {
            title: "Mann Home",
            tag: "Интернет-магазин мебели",
            desc: "Mann Home – современный мебельный интернет-магазин. Через сайт можно просматривать, выбирать и безопасно покупать различную мебель. Имеет удобный интерфейс и полноценные функции электронной коммерции."
          },
          darrov: {
            title: "Darrov",
            tag: "Приложение доставки и услуг",
            desc: "Darrov — сервисное приложение, работающее на платформах Telegram и веб. Пользователи могут легко заказать доставку еды, технические услуги и другие виды сервиса."
          },
          pubg: {
            title: "PUBG Tournament",
            tag: "Игровая платформа",
            desc: "PUBG Tournament — сайт онлайн-турниров, охватывающий участников из 12 областей. Пользователи могут следить за расписанием турниров, результатами и возможностями участия через сайт."
          },
          autoquiz: {
            title: "AutoQuiz",
            tag: "Образовательные технологии",
            desc: "Платформа AutoQuiz — инновационный образовательный инструмент, позволяющий учителям создавать тесты и управлять ими."
          },
          vocabapp: {
            title: "VocabApp",
            tag: "EdTech • Мобильное",
            desc: "VocabApp — мобильное приложение, предназначенное для изучающих иностранные языки для пополнения личного словарного запаса. Пользователи могут быстро вводить свои слова (пакетный ввод), просматривать их ежедневно и укреплять память с помощью умных рандомизированных тестов."
          },
          sentences: {
            title: "Tences Bot",
            tag: "Telegram • Образование",
            desc: "Tences — Telegram-бот для изучения английских времён и неправильных глаголов на узбекском. Интерактивное меню помогает быстро найти правила, структуру и примеры."
          }
        }
      },
      blog: {
        title: "Блог",
        searchPlaceholder: "Поиск статей...",
        readMore: "Подробнее",
        noResults: "Статьи не найдены",
        posts: {
          reactQuery: {
            title: "Зачем использовать React Query?",
            desc: "Лучший способ управления данными в приложениях React и почему его стоит использовать."
          },
          tailwindPremium: {
            title: "Премиальный UI с Tailwind",
            desc: "Секреты создания высококачественных профессиональных интерфейсов с помощью Tailwind CSS."
          },
          cleanCode: {
            title: "Принципы чистого кода",
            desc: "Как писать код, который легко читать, поддерживать и масштабировать для долгосрочных проектов."
          }
        }
      },
      contact: {
        title: "Контакты",
        formTitle: "Отправить запрос",
        form: {
          nameLabel: "Ваше имя*",
          namePlaceholder: "Введите ваше имя",
          emailLabel: "Ваш адрес*",
          emailPlaceholder: "example@gmail.com",
          messageLabel: "Ваше сообщение*",
          messagePlaceholder: "Введите ваше сообщение",
          submitBtn: "Отправить"
        },
        errors: {
          nameRequired: "Имя обязательно для заполнения",
          emailRequired: "Email обязателен для заполнения",
          emailInvalid: "Введите корректный email",
          messageRequired: "Сообщение не может быть пустым"
        },
        alerts: {
          success: "Ваше сообщение отправлено! Вы скоро получите ответ.",
          error: "Произошла ошибка: ",
          generalError: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже."
        }
      },
      contacts: {
        gmail: "Gmail",
        github: "GitHub",
        telegram: "Telegram",
        phone: "Телефон",
        emailTitle: "Эл. почта",
        phoneTitle: "Номер телефона"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
