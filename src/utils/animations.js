// Scroll/kirish animatsiyalari o‘chirilgan — variantlar darhol yakuniy holatda (Framer Motion bilan mos).

const none = { duration: 0 };

export const titleFade = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: none },
};

export const lineGrow = {
  hidden: { scaleX: 1, originX: 0 },
  visible: { scaleX: 1, transition: none },
};

export const containerStagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

export const cardFadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: none },
};

export const fadeInLeft = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0, transition: none },
};

export const fadeIn = (_delay = 0) => ({
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: none },
});

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: none },
};
