import logo from './logo.svg';
import './App.css';
import UserProfile from "./UserProfile";

function App() {
  return (
      <>
        <UserProfile
            imgUrl={"https://example.com/user-photo.jpg"}
            imgAlt={"User Photo"}
            name={"Jane Doe"}
            email={"jane.doe@example.com"}
        />
      </>
  );
}

export default App;
