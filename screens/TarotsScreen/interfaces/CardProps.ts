import { ImageProps } from "react-native";
import Animated from "react-native-reanimated";

export interface CardProps extends Pick<ImageProps, "source"> {
  shuffleBack: Animated.SharedValue<boolean>;
  index: number;
}
