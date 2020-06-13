import React from "react";
import ContactListItem from "../ContactsItem/ContactListItem";
import PropTypes from "prop-types"; // ES6
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./list.module.css";
import slideTransition from "../../animations/slide.module.css";
import {
  loaderSelector,
  errorSelector,
} from "../../redux/Selectors/contactsSelectors";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader.js";
import ErrorMsg from "../Errors/Error.js";

const ContactsList = ({ contactList, deleteContact }) => {
  const loader = useSelector((state) => loaderSelector(state));
  const error = useSelector((state) => errorSelector(state));
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {loader && <Loader />}
      {error && <ErrorMsg />}
      {contactList
        .map((contact) => (
          <CSSTransition
            key={contact.id}
            classNames={slideTransition}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <ContactListItem
              name={contact.name}
              number={contact.number}
              deleteContact={deleteContact}
              contact={contact}
              className={styles.item}
            />
          </CSSTransition>
        ))
        .reverse()}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactsList;
