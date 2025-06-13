import AuthForm from "../../components/AuthForm";
import Input from "../../components/ui/form/input";
import GreenButton from "../../components/ui/button/GreenButton";
import Button from "../../components/ui/button";

function ForgotPassword() {
  return (
    <>
      <AuthForm>
        <form>
          <Input
            autoComplete="email"
            type="text"
            name="email"
            placeholder="Email"
          />
          <Input
            autoComplete="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <GreenButton small type="submit">
            Kirim permintaan
          </GreenButton>
          <div className="separator">
            <div className="hr"></div>
          </div>
          <Button small type="button">
            &nbsp;Login with Google
          </Button>
          <Button small type="button">
            &nbsp;Login with Facebook
          </Button>
          <Button small type="button">
            &nbsp;Login with Apple
          </Button>
        </form>
      </AuthForm>
    </>
  );
}

export default ForgotPassword;
