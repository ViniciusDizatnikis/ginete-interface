import SideBarUser from "@/components/features/Home/SideBarUser/SideBarUser";
import style from "./styles.module.css";
import Feed from "@/components/features/Home/Feed/Feed";

const HomePage = () => {
  return (
    <>
      <div className={style.container}>
        <SideBarUser />
        <Feed />
      </div>
    </>
  );
};

export default HomePage;
