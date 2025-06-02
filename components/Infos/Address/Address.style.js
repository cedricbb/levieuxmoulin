import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

const styles = StyleSheet.create({
    addressContainer: {
        marginBottom: 20,
      },
      addressLabel: {
        fontFamily: 'poppinsBold',
        fontSize: 16,
        color: COLORS.secondary,
        marginBottom: 8,
      },
      addressText: {
        fontFamily: 'interRegular',
        fontSize: 15,
        lineHeight: 22,
        color: COLORS.davyGrey,
      },
    })

export default styles