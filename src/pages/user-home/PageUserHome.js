import React, { useState } from "react";
import AppTitle from "../../components/app-title/AppTitle";
import HomeFooter from "../../components/home-footer/HomeFooter";
import MainMenu from "../../components/main-menu/MainMenu";
import UserProfile from "../../components/user-profile/UserProfile";
function PageUserHome() {
  const [profile, setProfile] = useState({
    username: "John Doe",
    userId: "123456789",
  });
  return (
    <div className="flex flex-col h-screen">
      <AppTitle title={"X & O"} />
      <UserProfile
        left={false}
        edit={true}
        opponent={false}
        userName={profile && profile.username}
        userId={profile && profile.userId}
      />
      <section className="flex flex-1 justify-center items-center">
        <MainMenu />
      </section>
      <HomeFooter />
    </div>
  );
}

export default PageUserHome;