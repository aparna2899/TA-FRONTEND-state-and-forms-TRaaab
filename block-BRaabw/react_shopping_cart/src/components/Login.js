function Login() {
  return (
    <div className="container center login">
      <form>
        <h1> Log In</h1>
        <input type="text" placeholder="Username" className="form-control" />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
        <button type="submit" className="login-btn">
          Log in
        </button>
      </form>
      <div className="or">Or</div>
      <button className="google">Sign in using Google</button>
    </div>
  );
}

export default Login;
