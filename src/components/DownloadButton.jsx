import { useTranslation } from "react-i18next";

export default function DownloadButton() {
  const { t } = useTranslation();
  return (
    <a
      href="/Asadbek Umarov Resume.pdf"
      download={t('header.resumeFilename')}
      className="
        group relative w-[120px] h-[40px]
        bg-primary hover:bg-primary-hover
        rounded-md text-white cursor-pointer
        transition-all duration-300
        flex items-center justify-center
      "
      data-tooltip={t('header.download')}
    >
      {/* Tooltip */}
      <div
        className="
          absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible
          w-[90px] h-[35px] bg-surface text-main text-[10px]
          border border-border
          rounded-md flex items-center justify-center
          transition-all duration-500
          top-[60px] left-1/2 -translate-x-1/2
        "
      >
        {t('header.size')}: 44.4KB
      </div>

      {/* Tooltip triangle */}
      <div
        className="
          absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible
          w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent
          border-t-surface
          transition-all duration-500
          top-[45px] left-1/2 -translate-x-1/2
        "
      ></div>

      {/* Button text & icon */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{t('header.download')}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
        </svg>
      </div>
    </a>
  );
}
