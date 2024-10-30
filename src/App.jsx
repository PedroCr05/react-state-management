import { useState } from "react";
import "./App.css";

const App = () => {
  const [socialMediaAccount, setSocialMediaAccount] = useState({
    firstName: `Pedro`,
    lastName: `Cruz`,
    hasPets: false,
    age: 19,
  });
  console.log(socialMediaAccount.firstName);
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log("Our isDarkMode state value is:", isDarkMode);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>Hello world!</h1>
      <p>
        Hello, my name is {socialMediaAccount.firstName}{" "}
        {socialMediaAccount.lastName}, I am {socialMediaAccount.age} years old,
        and I have {socialMediaAccount.hasPets ? "pets" : "no pets"}.
      </p>
    </div>
  );
};

export default App;
