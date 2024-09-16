import supabase from "../../database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const funcionarioService = {
    async uparFotoFuncionario(file) {
        try {
            // Converter o Blob em um ArrayBuffer (necessário para o Supabase Storage)
            const arrayBuffer = await fetch(file.uri).then(res => res.arrayBuffer());

            const { data, error } = await supabase.storage
                .from("imagemFuncionarios")
                .upload("images/" + file.name, arrayBuffer, {
                    contentType: file.type, // Define o tipo de conteúdo correto
                });

            if (error) {
                throw new Error(`Erro ao fazer upload da imagem: ${error.message}`);
            }

            const imageUrl = supabase.storage
                .from("imagemFuncionarios")
                .getPublicUrl("images/" + file.name);

            return imageUrl.data.publicUrl;
        } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error);
            throw error;
        }
    },

    async cadastrarFuncionario(funcionarioData) {
        try {
            const { count, error: countError } = await supabase
                .from("funcionarios")
                .select("*", { count: "exact" }); // Conta o número exato de linhas

            if (countError) {
                throw new Error(`Erro ao contar funcionários: ${countError.message}`);
            }

            const novoId = count + 1;

            const funcionarioComId = { ...funcionarioData, id: novoId };

            const { data, error: insertError } = await supabase
                .from("funcionarios")
                .insert([funcionarioComId]);

            if (insertError) {
                throw new Error(`Erro ao cadastrar funcionário: ${insertError.message}`);
            }

            return data;
        } catch (error) {
            console.error("Erro ao cadastrar funcionário:", error);
            throw error;
        }
    },
};

export default funcionarioService;
