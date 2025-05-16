import { View } from 'react-native';

export default function Spacer({ size = 16, horizontal = false }) {
  return (
    <View style={horizontal ? { width: size } : { height: size }} />
  );
}
