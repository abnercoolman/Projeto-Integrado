import { ComponentProps } from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

type Props = ComponentProps<typeof Image>;

export default function UserPhoto({ source, ...rest }: Props) {
  return <Image style={styles.container} source={source} />;
}
