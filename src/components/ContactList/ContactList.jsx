import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/ContactSlice.js";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const FilterSelector = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.listItem}>
        {FilterSelector.map((item) => (
          <li key={item.id}>
            <Contact DataItem={item} />
          </li>
        ))}
      </ul>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error 404...</h2>}
    </>
  );
};
export default ContactList;
