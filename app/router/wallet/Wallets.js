/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Wallets extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Wallets</Text>
          </View>
          <Button primary onPress={() => Actions.IMPORT_EOS_WALLET()}>
            <Text> 导入EOS钱包 </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});