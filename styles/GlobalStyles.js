import { Text, StyleSheet, View } from "react-native";

/* fonts */
export const FontFamily = {
  rudaBold: "Ruda-Bold",
  rudaRegular: "Ruda-Regular",
  rudaMedium: "Ruda-Medium",
  rudaSemiBold: "Ruda-SemiBold",
};
/* font sizes */
export const FontSize = {
  size_base: 16,
  size_xs: 12,
};
/* Colors */
export const Color = {
  colorWhite: "#fff",
  colorNavy: "#282da6",
  colorBlack: "#000",
  colorForestgreen: "#28a635",
  colorGainsboro: "#e0e0e0",
  colorGray: "#828282",
};
/* Paddings */
export const Padding = {
  p_5xl: 24,
  p_sm: 14,
  p_base: 16,
  p_xs: 12,
};
/* border radiuses */
export const Border = {
  br_5xs: 8,
};


const GlobalStyles = StyleSheet.create({
   OpeningContent:{
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    fontFamily:'Ruda_400Regular',

   },
   BaseText:{
    paddingLeft:20,
    fontFamily:'Ruda_400Regular',

   },
   
  textStyle: {
    fontFamily:'Ruda_400Regular',
   
  },
 
  });

  export default GlobalStyles;