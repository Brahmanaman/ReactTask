const Login = ({ onSwitch }) => {
    console.log(onSwitch)
    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
                <form className="flex flex-col border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-xl w-full max-w-md text-slate-200 p-8 shadow-2xl">
                    <div className="mb-8">
                        <h1 className="text-center text-3xl font-bold text-white tracking-tight">Welcome back</h1>
                        <p className="text-center text-slate-400 text-sm mt-2">Sign in to your account</p>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">
                                Email
                            </label>
                            <input
                                className="border border-slate-700 rounded-lg py-2.5 px-4 bg-slate-950/50 text-white placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                required
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-slate-400 ml-1">
                                Password
                            </label>
                            <input
                                className="border border-slate-700 rounded-lg py-2.5 px-4 bg-slate-950/50 text-white placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                required
                                type="password"
                                name="password"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex flex-col gap-3 mt-8">
                            <button
                                type="button"
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20"
                            >
                                Sign In
                            </button>

                            <div className="relative my-4">
                                <div className="relative flex justify-center text-xs"><span className="px-2 text-slate-500">Don't have an account? <strong className="cursor-pointer text-white hover:text-gray-300" onClick={onSwitch}>Sign up</strong></span></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;