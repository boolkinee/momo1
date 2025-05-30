import { useState, useEffect } from 'react'
import { MoonOutlined } from '@ant-design/icons';
function Darkmode() {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    // ใช้ useEffect เพื่อตรวจสอบสถานะ darkMode จาก localStorage เมื่อเริ่มต้น
    useEffect(() => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true'
      setDarkMode(savedDarkMode)
    }, [])
  
    // เมื่อ darkMode เปลี่ยนไป, จะเพิ่มหรือลบ class 'dark' ที่ <html> 
    useEffect(() => {
      const root = window.document.documentElement
      if (darkMode) {
        root.classList.add('dark')  // เพิ่ม class dark ที่ <html>
      } else {
        root.classList.remove('dark')  // ลบ class dark ออก
      }
  
      // บันทึกสถานะ darkMode ใน localStorage
      localStorage.setItem('darkMode', darkMode.toString())
    }, [darkMode])
  return (
    <button
        className="rounded "
        onClick={() => setDarkMode(!darkMode)} // สลับสถานะ darkMode
      >
        <MoonOutlined style={{fontSize: 20}}/>
      </button>
  )
}

export default Darkmode