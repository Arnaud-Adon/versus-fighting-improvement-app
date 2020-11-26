import { connect } from "react-redux";
import { signupUser } from "../actions";
import { Signup } from "../components/Signup";

const mapDispatchToProps = {
  signupUser,
};

export default connect(null, mapDispatchToProps)(Signup);
