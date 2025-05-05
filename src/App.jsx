import { useDispatch } from "react-redux";
import ContactFrom from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContactsData } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
