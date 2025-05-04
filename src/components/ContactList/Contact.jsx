import { useDispatch } from "react-redux";
import css from "./contact.module.css";
import { deleteContact } from "../../redux/ContactSlice";
const Contact = ({ DataItem: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.container}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          className={css.deleteButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
