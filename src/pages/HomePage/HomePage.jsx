import css from "./HomePage.module.css";
import img from "../../img/young-businesswoman-looking-book-con-isolated-white_231208-11332.jpg";
const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>About this application</h1>
      <p className={css.text}>
        It is a phonebook application. You can add contacts and delete them.
        Also your contacts can be used for register user. Nobody can't see your
        contacts.
      </p>
      <img src={img} className={css.img} alt='fireSpot' />
    </div>
  );
};

export default HomePage;
