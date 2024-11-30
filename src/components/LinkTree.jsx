const links = [
  { id: 1, label: "SurabayaJS", url: "https://surabayajs.org" },
  { id: 2, label: "LinkedIn", url: "https://linkedin.com" },
  { id: 3, label: "Portfolio", url: "https://example.com" },
];

const LinkTree = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <img
          className="w-24 h-24 mx-auto rounded-full mb-4"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h1 className="text-white text-xl font-bold mb-2">John Doe</h1>
        <p className="text-gray-400 mb-4">Frontend Developer & Designer</p>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
