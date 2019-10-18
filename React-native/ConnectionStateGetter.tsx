import NetInfo, { NetInfoSubscription } from "@react-native-community/netinfo";
import { action, observable } from "mobx";

export class Connection {
  @observable public isConnected = false;

  public disableNetInfo: NetInfoSubscription;

  constructor() {
    NetInfo.fetch().then(state => {
      this.isConnected = state.isConnected;
    });

    this.disableNetInfo = this.subscribe();
  }

  @action
  private subscribe = () =>
    NetInfo.addEventListener(state => {
      this.isConnected = state.isConnected;
    });
}

const ConnectionStateGetter = new Connection();

export default ConnectionStateGetter;
