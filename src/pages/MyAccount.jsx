import { getCurrentUSer } from "../App/Auth";

function MyAccount() {
  const user = getCurrentUSer(); 

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No account found. Please log in first.</p>
      </div>
    );
  }

  return (
    <div className="bg flex justify-center items-center h-screen">
      <div className="bg-white border-gray-800 shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">My Account</h2>
        <p><span className="font-semibold">Username:</span> {user.username}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
      </div>
    </div>
  );
}

export default MyAccount;
