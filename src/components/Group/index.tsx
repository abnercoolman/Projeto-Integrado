import { Text, TouchableOpacity } from 'react-native';
import { ComponentProps } from 'react';
import { styles } from './styles';

type Props = ComponentProps<typeof TouchableOpacity> & {
  name: string;
  isActive: boolean;
};

export default function Group({ name, isActive, ...rest }: Props) {

  return (
    <TouchableOpacity
      {...rest}
      style={isActive ? styles.containerButtonOn : styles.containerButtonOff}>
      <Text style={isActive ? styles.textoButtonOn : styles.textoButtonOff}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
