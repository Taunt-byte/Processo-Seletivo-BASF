import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information Section */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-sm md:text-base">Email: contact@contact.com</p>
            <p className="text-sm md:text-base">Phone: (123) 456-7890</p>
            <p className="text-sm md:text-base">Address: 123 Main Street, New York</p>
          </div>
          {/* Useful Links Section */}
          <div className="md:w-1/2 mt-4 md:mt-0"> {/* Responsive spacing */}
            <h2 className="text-xl font-bold mb-2">Useful Links</h2>
            <ul className="list-disc list-inside">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright Footer */}
        <div className="text-center mt-6">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Marvel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
