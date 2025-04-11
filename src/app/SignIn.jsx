function SignIn() {
    return (
        <div className="flex flex-col min-h-screen bg-white p-4 max-w-sm mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Signin to your</h1>
                <h1 className="text-2xl font-bold text-gray-800">PopX account</h1>
                <p className="text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="text-sm text-purple-500 font-medium">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label className="text-sm text-purple-500 font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mt-4">
                    <button type="submit" className="w-full py-3 bg-gray-300 text-white font-medium rounded-md">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;