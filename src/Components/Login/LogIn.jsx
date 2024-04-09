import { Link } from "react-router-dom";

const LogIn = () => {
    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)
        

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <h2 className="font-bold text-4xl">Log In Now !!</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label" >
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p>New here ? <Link to='/register' className="texb">Please Register</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default LogIn;