import { View, StyleSheet, Text, Image } from "react-native";
import { Tabs, Redirect, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.bar}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        focused={focused}
      />
    </View>
  );
};

const Login = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            backgroundColor: "#041E42",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name="home-sharp"
                size={24}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name="account-circle"
                size={28}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({})
 