import PhoneBook from "./PhoneBook";
import { connect } from "react-redux";
import {
  asyncAddItem,
  asyncDeleteItem,
  filterContacts,
} from "../../redux/Actions/PhoneBookActions";
import {
  contactsSelector,
  filterSelector,
  errorSelector,
  loaderSelector,
} from "../../redux/Selectors/contactsSelectors.js";

const mapStateToProps = (state) => ({
  contacts: contactsSelector(state),
  filter: filterSelector(state),
  error: errorSelector(state),
  loader: loaderSelector(state),
});

const mapDispatchToProps = {
  asyncAddItem,
  asyncDeleteItem,
  filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
