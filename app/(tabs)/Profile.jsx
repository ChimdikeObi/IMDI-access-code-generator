import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#041E42" }}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
          onPress={() => {
            router.push('/screens/Settings')
          }}
            style={{ left: "93%" }}
          >
            <Ionicons
              name="settings-outline"
              size={26}
              style={{ color: "#fff" }}
            ></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <View style={styles.profilepic}>
            <MaterialIcons name="account-circle" size={300} color="#fff" />
            <TouchableOpacity onPress={() => {}}>
              <View style={[styles.plus, { backgroundColor: "#041E42" }]}>
                <FeatherIcon name="plus" size={30} style={{ color: "white" }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* PRIVACY SECTION */}

        <View style={{ paddingHorizontal: 24, backgroundColor: "#041E42" }}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <TouchableOpacity onPress={() => {}} style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: "#041E42" }]}>
              <FeatherIcon
                name="user-check"
                size={20}
                style={{ color: "#fff" }}
              />
            </View>
            <Text style={{ color: "#fff" }}>Update personal details</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>

        {/* ACCOUNT SECTION */}

        <View style={{ paddingHorizontal: 24, backgroundColor: "#041E42" }}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity onPress={() => {}} style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: "#041E42" }]}>
              <FeatherIcon name="user" size={20} style={{ color: "#fff" }} />
            </View>
            <Text style={{ color: "#fff" }}>Manage Accounts</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: "#041E42" }]}>
              <FeatherIcon name="lock" size={20} style={{ color: "#fff" }} />
            </View>
            <Text style={{ color: "#fff" }}>Change password</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>

        {/* LOGOUT SECTION */}

        <View style={{ paddingHorizontal: 24, backgroundColor: "#041E42" }}>
          <Text style={styles.sectionTitle}>Logout</Text>
          <TouchableOpacity
            onPress={() => {
              alert("Are you sure you want to Log out?");
            }}
            style={styles.row}
          >
            <View style={[styles.rowIcon, { backgroundColor: "#041E42" }]}>
              <FeatherIcon name="log-out" size={20} style={{ color: "#fff" }} />
            </View>
            <Text style={{ color: "#fff" }}>Logout</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#041E42" style="light" />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {

  },
  profile: {
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profilepic: {
    position: "relative",
  },
  plus: {
    position: "absolute",
    right: 45,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  /** Section */

  sectionTitle: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    borderRadius: 8,
    marginBottom: 15,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
    color: "#0c0c0c",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
