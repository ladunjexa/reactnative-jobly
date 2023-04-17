import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    // DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    // DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    // DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    MRBold: require("../assets/fonts/Manrope-Bold.ttf"),
    MRMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    MRRegular: require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;

// expo-cli start -tunnel
