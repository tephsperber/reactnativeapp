import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f6f0",
    padding: 20,
  },
  welcome: {
    fontSize: 13,
    color: "#91928d",
  },
  name: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    height: 80,
  },
  topText: {
    alignSelf: "flex-end",
  },

  image: { width: null, height: null, resizeMode: "contain" },
  input: {
    margin: 10,
    marginTop: 30,
    fontSize: 15,
    color: "#91928d",
    backgroundColor: "white",
    borderRadius: 20,
    height: 20,
    padding: 20,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "bold",
    width: 250,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleView: {
    borderRadius: 20,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "#f8f6f0",
    height: "auto",
    width: "auto",
  },
  item: {
    backgroundColor: "#ffff",
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft: 0,
    height: 120,
    width: "auto",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 15,
  },
  flowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  flowsTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  flowsSubtitle: {
    fontSize: 15,
    fontWeight: "none",
    color: "grey",
  },

  iconPlus: {
    color: "#d2f369",
  },
  flowsOptionTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  flowsOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flowsOption: {
    alignSelf: "flex-end",
  },
  line: {
    borderBottomColor: "#999b9e",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,

    height: null,
  },
  bottomImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",

    alignSelf: "flex-end",
  },
});
