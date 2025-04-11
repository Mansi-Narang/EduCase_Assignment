function Account() {
    return (
        <div className="flex border-2 border-gray-300 flex-col min-h-screen bg-white max-w-sm mx-auto">
            <div className="p-4 border-b">
                <h1 className="text-lg font-medium text-gray-600">Account Settings</h1>
            </div>

            <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-start">
                    <div className="relative mr-3">
                        <img
                            src="/account.png"
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center">
                            <span className="text-white text-xs">+</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-800">Marry Doe</h2>
                        <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600 text-sm">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
                        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>

            <div className="flex-grow bg-white"></div>
        </div>
    );
}

export default Account;