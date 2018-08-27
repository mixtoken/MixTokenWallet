/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Mine extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Container>
        <Content>
          <Button primary onPress={() => Actions.LOGIN()}>
            <Text> 我要登陆 </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});