import React, { Component } from "react";
import FormFormik from "../Form/FormFormik";
import ContactsList from "../ContactsList/ContactsList";
import ContactsFilterForm from "../ContactsFilter/ContactsFilterForm";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../../animations/slide.module.css";

class PhoneBook extends Component {
  state = {};

  componentDidMount() {
    this.setState({ didMount: true });
  }

  render() {
    const { didMount } = this.state;
    const { contacts, filteredContacts } = this.props;
    return (
      <>
        <CSSTransition
          in={didMount}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
        >
          <h2 className="title-phonebook">Phonebook</h2>
        </CSSTransition>
        <FormFormik contacts={contacts} addItem={this.props.asyncAddItem} />
        <h2>Contacts</h2>

        <CSSTransition
          in={contacts.length >= 2}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          <ContactsFilterForm handleFilter={this.props.filterContacts} />
        </CSSTransition>

        <ContactsList
          contactList={filteredContacts}
          deleteContact={this.props.asyncDeleteItem}
        />
      </>
    );
  }
}

export default PhoneBook;
