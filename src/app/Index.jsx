import { useNavigate } from "react-router";

function Index() {
    const navigate = useNavigate();

    function handleClick(path) {
        if(path !== 'signin' || path !== 'signup') {
            navigate(path);
        } else {
            throw new Error("Path not allowed");
        }
    }

    return (
        <div className="flex flex-col h-screen bg-white p-4 max-w-sm mx-auto">
            {/* Empty space at top */}
            <div className="flex-grow"></div>

            {/* Content at bottom */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
                <p className="text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="mt-6 space-y-3">
                    <button onClick={() => handleClick("/signup")} className="w-full py-3 bg-purple-600 text-white font-medium rounded-md">
                        Create Account
                    </button>

                    <button onClick={() => handleClick("/signin")} className="w-full py-3 bg-purple-200 text-gray-700 font-medium rounded-md">
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index;