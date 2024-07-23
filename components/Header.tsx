import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
    label: string;
    showbackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showbackArrow }) => {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return ( 
        <div className="border-b-[1px] border-neutral-800 p-5">

        </div>
     );
}
 
export default Header;