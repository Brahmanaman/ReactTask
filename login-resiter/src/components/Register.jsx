const Register = ({ onSwitch }) => {

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
            <form className="flex flex-col border border-slate-800 bg-slate-900/50 backdrop-blur-md rounded-2xl w-full max-w-md text-slate-200 p-8 shadow-2xl">
                <div className="mb-8">
                    <h1 className="text-center text-3xl font-bold text-white tracking-tight">Create Account</h1>
                    <p className="text-center text-slate-400 text-sm mt-2">Join us today</p>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="username" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                        <input
                            className="border border-slate-700 rounded-xl py-2.5 px-4 bg-slate-950/50 text-white placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            required
                            type="text"
                            name="username"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                        <input
                            className="border border-slate-700 rounded-xl py-2.5 px-4 bg-slate-950/50 text-white placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            required
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-slate-300 ml-1">Password</label>
                        <input
                            className="border border-slate-700 rounded-xl py-2.5 px-4 bg-slate-950/50 text-white placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            required
                            type="password"
                            name="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20"
                        >
                            Sign up
                        </button>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-4">
                        Already have an account? <strong className="cursor-pointer text-white hover:text-gray-300" onClick={onSwitch}>Sign in</strong>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
