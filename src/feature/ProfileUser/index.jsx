import React from "react";
import AvatarUser from "./Avatar";

function ProfileUser() {
  return (
    <div className="profile-user">
      <div className="head-profile">
        <AvatarUser />
        <div className="user-name">Homer Simpson Ibragimovich</div>
      </div>
      <div className="edit">
        <a href="#">Редактировать профиль</a>
      </div>
      <div className="info-user">
        <div className="date-of-birth">
          <div>Дата рождения:</div>
          <div> 20 апрель 1994 год</div>
        </div>
        <div className="city">
          <div>Город проживания:</div>
          <div>Грозный</div>
        </div>
        <div className="telephone">
          <div>Номер телефона:</div>
          <div>+7(964)060-80-55</div>
        </div>
        <div className="email">
          <div>Адрес e-mail:</div>
          <div>musovvir@mail.ru</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
