import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { GoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().than(() => {
      navigate("/");
      
    })
  }
  
  return (
    <div>
      <div className="divider">or</div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full">
          <FcGoogle size={24} />Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin