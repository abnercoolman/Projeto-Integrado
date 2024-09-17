import supabase from "../../database/database";

export async function fetchFuncionarios() {
    try {
        const { data: funcionarios, error } = await supabase
            .from("funcionarios")
            .select("*");

        if (error) {
            console.error("Erro ao buscar funcionários:", error);
            return []; // Retorna um array vazio em caso de erro
        } else {
            return funcionarios;
        }
    } catch (error) {
        console.error("Erro inesperado ao buscar funcionários:", error);
        return [];
    }
}

export function filterFuncionarios(dadosFuncionarios, deptFuncionarioSelected) {
    return deptFuncionarioSelected === "Todos"
        ? dadosFuncionarios
        : dadosFuncionarios.filter(
            (funcionario) => funcionario.deptFuncionario === deptFuncionarioSelected
        );
}

export function subscribeToFuncionarioChanges(callback) {
    const subscription = supabase
        .channel('funcionarios-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'funcionarios' }, (payload) => {
            console.log('Mudança na tabela funcionarios:', payload);
            callback(); // Chama a função de callback para atualizar os dados
        })
        .subscribe();

    return subscription;
}

export function unsubscribeFromFuncionarioChanges(subscription) {
    supabase.removeChannel(subscription);
}