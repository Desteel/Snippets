import { NativeModules, Platform } from "react-native";

const requestCameraPermissions = async (captureAudio?: boolean) => {
  const { RNCameraManager, RNCameraModule } = NativeModules;
  const CameraManager = RNCameraManager || RNCameraModule;

  let hasCameraPermissions = false;
  let hasRecordAudioPermissions = false;

  if (Platform.OS === "ios") {
    hasCameraPermissions = await CameraManager.checkVideoAuthorizationStatus();

    if (captureAudio) {
      hasRecordAudioPermissions = await CameraManager.checkRecordAudioAuthorizationStatus();
    }
  }

  return {
    hasCameraPermissions,
    hasRecordAudioPermissions
  };
};

export default requestCameraPermissions;
