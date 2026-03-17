import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";

export default function Logo() {
  const { dark } = useTheme();

  return (
    <Link to="/">
      {dark? (
        <span><img src="/images/paydex.png" alt="paydex-light"  width={160}/></span>
      ):(
      
        <span><img src="/images/paydex-dark.png" alt="paydex dark" width={160} /></span>
      )}
    </Link>

  );
}
