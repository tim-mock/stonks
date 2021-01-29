import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { get_Account } from "../../API/Alpaca_API";
import { connect } from "react-redux";
import { getAccount } from "../../Actions";
class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const account = await get_Account();
    console.log("account", account);
    this.props.fetchAccount(account);
  }

  render() {
    return (
      <SafeAreaView>
        <Text> AccountContainer </Text>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  fetchAccount: getAccount,
};

export default connect(null, mapDispatchToProps)(AccountContainer);
