import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/ContactSlice.js";
import { selectFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const itemContact = useSelector(selectContacts);
  const FilterContactNew = useSelector(selectFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const FilterContact = itemContact.filter((item) =>
    item.name.toLowerCase().includes(FilterContactNew.toLowerCase())
  );
  return (
    <>
      <ul className={css.listItem}>
        {FilterContact.map((item) => (
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
