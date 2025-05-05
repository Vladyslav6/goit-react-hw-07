import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const itemContact = useSelector((state) => state.item.contacts.items);
  const FilterContactNew = useSelector((state) => state.filter.filter);
  const error = useSelector((state) => state.item.contacts.error);

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
      {error && <h2>Error 404...</h2>}
    </>
  );
};
export default ContactList;
