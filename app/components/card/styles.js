import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

export default styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    borderRadius: defaultStyles.borderRadius,
    overflow: "hidden",
    borderColor: colors.lightBorder,
    borderWidth: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  details: {
    flex: 7,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
  image: {
    height: 110,
    width: 110,
    paddingVertical: 1,
  },
  leftInfo: {
    fontSize: 16,
    paddingRight: 20,
  },
  numberOfItems: {
    fontSize: 16,
    color: colors.darkGray,
  },
  numberOfItemsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
  },
  rightInfo: {
    right: 0,
    position: "absolute",
  },
  subTitle: {
    color: colors.lightGray,
    lineHeight: 13,
    paddingTop: 5,
    fontSize: 13,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.darkGray,
  },
  updateCounter: {
    fontSize: 18,
    paddingTop: 5,
    textAlign: "center",
    color: colors.lightGray,
  },
  updateCounterContainer: {
    backgroundColor: colors.appBackground,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.lightBorder,
    borderRadius: 4,
  },
});
