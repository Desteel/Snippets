import { action, computed, observable } from "mobx";
import { AppState, AppStateStatus } from "react-native";

export class ApplicationState {
  @observable public appState: AppStateStatus = AppState.currentState;

  constructor() {
    this.init();
  }

  @computed
  get isActive() {
    return !(this.appState === "inactive" || this.appState === "background");
  }

  @action
  private onChangeAppState = (nextAppState: AppStateStatus) => {
    this.appState = nextAppState;
  };

  public init = () => {
    AppState.addEventListener("change", this.onChangeAppState);
  };

  public destroy = () => {
    AppState.removeEventListener("change", this.onChangeAppState);
  };
}

const applicationStateGetter = new ApplicationState();

export default applicationStateGetter;
