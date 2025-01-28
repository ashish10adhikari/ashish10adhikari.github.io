import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer className="bg-gray-500 text-white text-center p-5">
            <p>&copy; {currentYear} Ashish Adhikari. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Footer