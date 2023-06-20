import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  StyleSheet,
} from "react-native";

import { SIZES, COLORS, FONTS, icons } from "../constants";

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Background Image */}
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />
    </TouchableOpacity>
  );
};

export default TrendingCard;
