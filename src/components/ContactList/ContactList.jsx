import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/ContactSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const itemContact = useSelector(selectContacts);
  const FilterContactNew = useSelector(selectNameFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const FilterSelector = useSelector(selectFilteredContacts);
  // const FilterContact = itemContact.filter((item) =>
  //   item.name.toLowerCase().includes(FilterContactNew.toLowerCase())
  // );
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
