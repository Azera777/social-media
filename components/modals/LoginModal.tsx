import useLoginModal from "@/hooks/useLoginModal";
import { useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setMeial] = useState('');
    
    return ( 
        <div></div>
     );
}
 
export default LoginModal;