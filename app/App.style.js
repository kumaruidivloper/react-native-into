import { StyleSheet } from "react-native";

export const styleObj = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  header: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically center the items
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15, // Add spacing between the image and the text
  },
  social: {},
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
