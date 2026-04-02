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
        description: "I am Asadbek, 19 years old. I am a web developer and I create simple, effective web projects using modern technologies. I am always open to learning and strive to apply new knowledge in practice.",
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
          }
        }
      },
      blog: {
        title: "Blog",
        searchPlaceholder: "Search articles...",
        readMore: "Read more",
        noResults: "No articles found",
        posts: {
          reactQuery: {
            title: "Why use React Query?",
            desc: "The best way to manage data in React applications and why you should use it."
          },
          tailwindPremium: {
            title: "Premium UI with Tailwind",
            desc: "Secrets to creating high-quality, professional user interfaces using Tailwind CSS."
          },
          cleanCode: {
            title: "Clean Code Principles",
            desc: "How to write code that is easy to read, maintain, and scale for long-term projects."
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
        description: "Men Asadbek, 19 yoshdaman. Veb dasturchiman va zamonaviy texnologiyalar yordamida oddiy, samarali veb-loyihalar yarataman. Doim o'rganishga ochiqman va yangi bilimlarni amaliyotda qo'llashga intilaman.",
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
        description: "Я Асадбек, мне 19 лет. Я веб-разработчик и создаю простые, эффективные веб-проекты, используя современные технологии. Я всегда открыт к обучению и стремлюсь применять новые знания на практике.",
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
