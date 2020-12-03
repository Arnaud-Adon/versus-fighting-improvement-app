import React from "react";
import { connect } from "react-redux";

const RequireAuthentification = (Component) => {
  useEffect(() => {
    if (isLogged) {
      goToImproveScreen();
    }
  });

  return <Component />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, undefined)(RequireAuthentification);
