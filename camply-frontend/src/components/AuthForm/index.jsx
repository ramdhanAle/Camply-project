import StyledAuthForm from "../ui/StyledAuthForm";
import { useLocation } from "react-router-dom";

const authPages = {
  '/login': {
    title: "Masuk",
    text: "Lorem ipsum dolor sit amet adipsicing elit.",

  },
  '/register': {
    title: "Daftar",
    text: "Lorem ipsum dolor sit amet adipsicing elit.",
  },
  '/forgot-password': {
    title: "Ubah kata sandi",
    text: "Lorem ipsum dolor sit amet adipsicing elit.",
  }
}

function AuthForm({ children }) {
  const location = useLocation();
  const currentPage = authPages[location.pathname];

  return (
    <>
      <StyledAuthForm>
        <div className='form-card'>
          <>
            <h1 className="font-sora">{currentPage.title}</h1>
            <p>{currentPage.text}</p>
            {children}
          </>
        </div>
      </StyledAuthForm>
    </>
  )
}

export default AuthForm;