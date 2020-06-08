import PhoneBook from "./PhoneBook";
import { connect } from "react-redux";
import {
  asyncAddItem,
  asyncDeleteItem,
  filterContacts,
} from "../../redux/Actions/PhoneBookActions";

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {
  asyncAddItem,
  asyncDeleteItem,
  filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
