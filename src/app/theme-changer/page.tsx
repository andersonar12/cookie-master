// import { cookies } from "next/headers";
import ThemeChanger from "../../components/ThemeChanger";

export default function ThemeChangerPage() {
  // const cookieStore = cookies();
  // const cookiesAll = cookieStore.getAll();

  // console.log(cookiesAll);
  return (
    <div>
      <ThemeChanger></ThemeChanger>
    </div>
  );
}
