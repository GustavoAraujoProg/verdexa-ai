import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import OnboardingOneScreen from './screens/OnboardingOneScreen';
import OnboardingTwoScreen from './screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './screens/OnboardingThreeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RecoverPasswordScreen from './screens/RecoverPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import CaptureImageScreen from './screens/CaptureImageScreen';
import ConfirmImageScreen from './screens/ConfirmImageScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import DiagnosisResultScreen from './screens/DiagnosisResultScreen';
import DiseaseDetailsScreen from './screens/DiseaseDetailsScreen';
import HistoryScreen from './screens/HistoryScreen';
import DiseaseLibraryScreen from './screens/DiseaseLibraryScreen';
import MyPlantsScreen from './screens/MyPlantsScreen';
import AddPlantScreen from './screens/AddPlantScreen';
import PlantTrackingScreen from './screens/PlantTrackingScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';

export type ScreenName = 'Splash' | 'Onboarding1' | 'Onboarding2' | 'Onboarding3' | 'Login' | 'Register' | 'Recover' | 'Home' | 'Capture' | 'ConfirmImage' | 'Processing' | 'DiagnosisResult' | 'DiseaseDetails' | 'History' | 'MyPlants' | 'Profile' | 'DiseaseLibrary' | 'AddPlant' | 'PlantTracking' | 'EditProfile' | 'Settings' | 'Notifications';
export type ScreenProps = { goTo: (screen: ScreenName) => void };

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('Profile');
  const goTo = (next: ScreenName) => setScreen(next);
  const props = { goTo };
  const renderScreen = () => {
    switch (screen) {
      case 'Splash': return <SplashScreen {...props} />;
      case 'Onboarding1': return <OnboardingOneScreen {...props} />;
      case 'Onboarding2': return <OnboardingTwoScreen {...props} />;
      case 'Onboarding3': return <OnboardingThreeScreen {...props} />;
      case 'Login': return <LoginScreen {...props} />;
      case 'Register': return <RegisterScreen {...props} />;
      case 'Recover': return <RecoverPasswordScreen {...props} />;
      case 'Home': return <HomeScreen {...props} />;
      case 'Capture': return <CaptureImageScreen {...props} />;

      case 'ConfirmImage': return <ConfirmImageScreen {...props} />;
      case 'Processing': return <ProcessingScreen {...props} />;
      case 'DiagnosisResult': return <DiagnosisResultScreen {...props} />;
      case 'DiseaseDetails': return <DiseaseDetailsScreen {...props} />;
      case 'History': return <HistoryScreen {...props} />;

      case 'DiseaseLibrary': return <DiseaseLibraryScreen {...props} />;
      case 'MyPlants': return <MyPlantsScreen {...props} />;
      case 'AddPlant': return <AddPlantScreen {...props} />;
      case 'PlantTracking': return <PlantTrackingScreen {...props} />;           {/* sem caminho */}
      case 'Profile': return <ProfileScreen {...props} />;
      case 'EditProfile': return <EditProfileScreen {...props} />;
      case 'Settings': return <SettingsScreen {...props} />;                     {/* sem caminho */}
      case 'Notifications': return <NotificationsScreen {...props} />;
    }
  };
  return <SafeAreaView style={styles.safe}><StatusBar barStyle="dark-content" backgroundColor="#F5F7EF" />{renderScreen()}</SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F5F7EF' } });
