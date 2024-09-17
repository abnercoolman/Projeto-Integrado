import supabase from "../../database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleGoHome } from "./authService";

// Mock do Supabase
jest.mock("../../database/database", () => ({
    auth: {
        signInWithPassword: jest.fn(),
    },
}));

// Certifica que o mock do AsyncStorage seja carregado
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));

describe("handleGoHome", () => {
    let setItemSpy;

    beforeEach(() => {
        // Cria um spy na função setItem do AsyncStorage antes de cada teste
        setItemSpy = jest.spyOn(AsyncStorage, 'setItem');
    });

    afterEach(() => {
        // Restaura o comportamento original do AsyncStorage após cada teste
        setItemSpy.mockRestore();
    });

    it("autentica o usuário com sucesso", async () => {
        const email = "teste@email.com";
        const senha = "senha123";
        const setResultado = jest.fn();
        const setCarregando = jest.fn();
        const setAutenticado = jest.fn();
        const navigation = { navigate: jest.fn() };

        supabase.auth.signInWithPassword.mockResolvedValue({
            data: { user: { email } },
            error: null,
        });

        await handleGoHome(email, senha, setResultado, setCarregando, setAutenticado, navigation);

        expect(setCarregando).toHaveBeenCalledWith(true);
        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
            email,
            password: senha,
        });
        expect(setCarregando).toHaveBeenCalledWith(false);
        expect(setItemSpy).toHaveBeenCalledWith("email", email);
        expect(setResultado).toHaveBeenCalledWith("Usuário autenticado");
        expect(setAutenticado).toHaveBeenCalledWith(true);
        expect(navigation.navigate).toHaveBeenCalledWith("MainTabs", {
            screen: "Home",
            params: { username: email },
        });
    });

    it("lida com erro de autenticação", async () => {
        const email = "teste@email.com";
        const senha = "senha_errada";
        const setResultado = jest.fn();
        const setCarregando = jest.fn();
        const setAutenticado = jest.fn();
        const navigation = { navigate: jest.fn() };

        supabase.auth.signInWithPassword.mockResolvedValue({
            data: null,
            error: { message: "Senha incorreta" },
        });

        await handleGoHome(email, senha, setResultado, setCarregando, setAutenticado, navigation);

        expect(setCarregando).toHaveBeenCalledWith(true);
        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
            email,
            password: senha,
        });
        expect(setCarregando).toHaveBeenCalledWith(false);
        expect(setItemSpy).not.toHaveBeenCalled();
        expect(setResultado).toHaveBeenCalledWith("Usário não autenticado");
        expect(setAutenticado).toHaveBeenCalledWith(false);
        expect(navigation.navigate).not.toHaveBeenCalled();
    });
});