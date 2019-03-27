import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="cart"
        style={{ right: 10, color: "white" }}
      />
    );
  }
}

export default withNavigation(CartButton);
