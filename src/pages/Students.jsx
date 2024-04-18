import { useState } from "react";
import { PiPlus } from "react-icons/pi";

const Students = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Data pengguna dummy
  const dummyUsers = [
    { name: "John Doe", email: "W5iFP@example.com", phone: "1234567890" },
    { name: "Jane Doe", email: "jane@example.com", phone: "9876543210" },
    { name: "Alice Smith", email: "alice@example.com", phone: "5555555555" },
    { name: "Bob Johnson", email: "bob@example.com", phone: "1231231234" },
    { name: "Emily Brown", email: "emily@example.com", phone: "9998887776" },
    { name: "Michael Scott", email: "michael@example.com", phone: "1234567890" },
    { name: "Pam Beesly", email: "pam@example.com", phone: "9876543210" },
    { name: "Dwight Schrute", email: "dwight@example.com", phone: "5555555555" },
    { name: "Jim Halpert", email: "jim@example.com", phone: "1231231234" },
    { name: "Angela Martin", email: "angela@example.com", phone: "9998887776" },
    { name: "Andy Bernard", email: "andy@example.com", phone: "1234567890" },
    { name: "Stanley Hudson", email: "stanley@example.com", phone: "9876543210" },
    { name: "Kevin Malone", email: "kevin@example.com", phone: "5555555555" },
    { name: "Meredith Palmer", email: "meredith@example.com", phone: "1231231234" },
    { name: "Phyllis Vance", email: "phyllis@example.com", phone: "9998887776" },
    { name: "Oscar Martinez", email: "oscar@example.com", phone: "1234567890" },
    { name: "Creed Bratton", email: "creed@example.com", phone: "9876543210" },
    { name: "Toby Flenderson", email: "toby@example.com", phone: "5555555555" },
    { name: "Ryan Howard", email: "ryan@example.com", phone: "1231231234" },
    { name: "Kelly Kapoor", email: "kelly@example.com", phone: "9998887776" },
  ];

  // Menghitung indeks awal dan akhir dari data untuk halaman saat ini
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = dummyUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Students List</h1>
          <p className="text-gray-400 mb-6">
            Dashboard / <span className="text-violet-500">Students</span>
          </p>
        </div>
        <button className="flex flex-row items-center gap-2 text-violet-500 border-2 border-violet-500 px-4 py-2 rounded-lg hover:bg-violet-500 hover:text-white">
          <PiPlus />
          <p>Add Student</p>
        </button>
      </div>
      {/* Tabel pengguna */}
      <div className="bg-white p-5 rounded-lg">
        <table className="table-fixed w-full rounded-lg">
          <thead>
            <tr>
              <th className="w-1/4 p-3 text-start">Name</th>
              <th className="w-1/4 p-3 text-start">Email</th>
              <th className="w-1/4 p-3 text-start">Phone</th>
              <th className="w-1/4 p-3 text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-violet-100" : "bg-white"}
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone}</td>
                <td className="flex flex-row p-3 gap-2">
                  <button className="text-white bg-violet-500 hover:bg-violet-600 py-1 px-2 rounded-lg transition-colors duration-300">
                    View
                  </button>
                  <button className="text-white bg-violet-500 hover:bg-violet-600 py-1 px-2 rounded-lg transition-colors duration-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from(
          { length: Math.ceil(dummyUsers.length / usersPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 rounded-lg focus:outline-none 
                  ${
                    currentPage === i + 1
                      ? "bg-violet-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black"
                  }
                  ${currentPage === i + 1 ? "shadow-md" : ""}`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Students;
