import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  cabecalho: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 32,
    backgroundColor: '#082777',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  nomeFoto: {
    backgroundColor: '#082777',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCabecalho: {
    flexDirection: 'column',
  },
  textoCumprimento: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#CFD8DC',
  },
  textoUsuario: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
  },
});
