import React from "react";
import Logo from "../Logo/Logo";
import classes from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrops from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/reactAux/reactAux";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) attachedClasses = [classes.SideDrawer, classes.Open];

  return (
    <Aux>
      <BackDrops show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo //height="10%"
          />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  );
};

export default sideDrawer;
