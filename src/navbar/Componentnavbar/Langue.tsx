import { useState } from 'react';

type LanguageOption = {
    code: string;
    name: string;
    icon: string; // path to image
  };
  const languages: LanguageOption[] = [
    { code: 'en', name: 'English', icon: '/english.svg' },
    { code: 'en', name: 'English', icon: '/english.svg' },
    { code: 'en', name: 'English', icon: '/english.svg' },
    { code: 'en', name: 'English', icon: '/english.svg' },
    { code: 'en', name: 'English', icon: '/english.svg' },
    // เพิ่มภาษาอื่นได้ตามต้องการ
  ];
function Langue() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang: LanguageOption) => {
    console.log(`Selected language: ${lang.code}`);
    setIsOpen(false);
    // ใช้งานจริงอาจเปลี่ยน locale ที่นี่
  };
  return (
    <div className="relative inline-block text-left">
      {/* ปุ่มรูปภาพ */}
      <div
        onClick={toggleDropdown}
        className="border rounded-full w-6 h-6 overflow-hidden flex items-center justify-center cursor-pointer"
      >
        <img
          src="/english.svg"
          alt="Language"
          className="w-full h-full object-cover"
        />
      </div>

      {/* กล่อง dropdown */}
      {isOpen && (
        <ul className="absolute mt-6 right-0 w-36 p-2 bg-white border rounded shadow-lg z-10 text-sm text-black">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
            <div className='w-6 h-6'>
              <img src={lang.icon} alt={lang.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-medium">{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Langue;
