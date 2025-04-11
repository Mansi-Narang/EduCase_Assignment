import { useState } from "react";
import { useNavigate } from 'react-router';

function SignUp() {
    const [isAgency, setIsAgency] = useState(true);
    const navigate = useNavigate();

    const handleClick = async() => {
        navigate('/account');
    }

    return (
        <div className="flex flex-col min-h-screen bg-white p-4 max-w-sm mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Create your</h1>
                <h1 className="text-2xl font-bold text-gray-800">PopX account</h1>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="text-sm text-purple-500 font-medium">Full Name*</label>
                    <input
                        type="text"
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-purple-500 font-medium">Phone number*</label>
                    <input
                        type="tel"
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-purple-500 font-medium">Email address*</label>
                    <input
                        type="email"
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-purple-500 font-medium">Password*</label>
                    <input
                        type="password"
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-purple-500 font-medium">Company name</label>
                    <input
                        type="text"
                        placeholder="Marry Doe"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-700 mb-2">Are you an Agency?*</p>
                    <div className="flex space-x-6">
                        <label className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isAgency ? 'border-purple-600' : 'border-gray-300'}`}>
                                {isAgency && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                            </div>
                            <input
                                type="radio"
                                name="agency"
                                checked={isAgency}
                                onChange={() => setIsAgency(true)}
                                className="hidden"
                                required
                            />
                            <span className="ml-2 text-sm">Yes</span>
                        </label>

                        <label className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${!isAgency ? 'border-purple-600' : 'border-gray-300'}`}>
                                {!isAgency && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                            </div>
                            <input
                                type="radio"
                                name="agency"
                                checked={!isAgency}
                                onChange={() => setIsAgency(false)}
                                className="hidden"
                                required
                            />
                            <span className="ml-2 text-sm">No</span>
                        </label>
                    </div>
                </div>
            </form>

            <div className="mt-6">
                <button onClick={handleClick} className="w-full py-3 bg-purple-600 text-white font-medium rounded-md">
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default SignUp;
