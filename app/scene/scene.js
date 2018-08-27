/**
 * Created by yangyang on 2018/8/27.
 */
import React, {Component} from 'react'
import {StyleSheet, AsyncStorage, Image, BackHandler, ToastAndroid} from 'react-native'
import {connect} from 'react-redux'
import {Actions, Scene, Modal, Router, Stack, Lightbox} from 'react-native-router-flux'
import Mine from '../router/mine'
import Discovery from '../router/discovery'
import Wallets, {ImportEosWallet} from '../router/wallet'
import Login from '../router/login'

const TabbarIcon = ({ title, focused }) => {
  let image;
  
  switch (title) {
    case '钱包':
      image = focused ? require('../asset/png/wallet_selected.png') : require('../asset/png/wallet_unselected.png');
      break;
  
    case '发现':
      image = focused ? require('../asset/png/discover_selected.png') : require('../asset/png/discover_unselected.png');
      break;
    
    case '我的':
      image = focused ? require('../asset/png/mine_selected.png') : require('../asset/png/mine_unselected.png');
      break;
  }
  
  return ( <Image style={styles.iconStyle} source={image} /> );
}

class Scenes extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.onBackAndroid);
  }
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid);
  }
  
  onBackAndroid = () => {
    if (Actions.state.index == 0) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        BackHandler.exitApp()
        return false
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
    Actions.pop()
    return true
  }
  
  render() {
    return (
      <Router backAndroidHandler={this.onBackAndroid} sceneStyle={styles.sceneStyle}>
        <Stack key="root" hideNavBar>
          <Modal>
            <Scene key="HOME" tabs tabBarPosition="bottom" hideNavBar headerMode="none">
              <Scene key="WALLET" title="钱包" icon={TabbarIcon} component={Wallets} initial={true}/>
              <Scene key="DISCOVERY" title="发现" icon={TabbarIcon} component={Discovery}/>
              <Scene key="MINE" title="我的" icon={TabbarIcon} component={Mine}/>
            </Scene>
            <Scene key="LOGIN" title="登陆" component={Login} />
          </Modal>
          <Scene key="IMPORT_EOS_WALLET" title="导入EOS钱包" hideNavBar={false} component={ImportEosWallet}/>
        </Stack>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 24,
    height: 24,
  },
  sceneStyle: {
    flex: 1,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);