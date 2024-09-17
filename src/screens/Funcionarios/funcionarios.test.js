import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Funcionarios from './index';
import * as funcionariosScreenService from './funcionariosScreenService';
import supabase from '../../database/database';

// Mock do Supabase
jest.mock('../../database/database', () => ({
    from: jest.fn(() => ({
        select: jest.fn(() => ({
            data: [], // Dados de funcionários mockados (podem ser ajustados conforme necessário)
            error: null,
        })),
    })),
    channel: jest.fn(() => ({
        on: jest.fn(() => ({
            subscribe: jest.fn(),
        })),
    })),
    removeChannel: jest.fn(),
}));

// Mock das funções do serviço
jest.mock('./funcionariosScreenService', () => ({
    fetchFuncionarios: jest.fn(),
    filterFuncionarios: jest.fn((dados, dept) =>
        dept === 'Todos' ? dados : dados.filter(f => f.deptFuncionario === dept)
    ),
    subscribeToFuncionarioChanges: jest.fn(),
    unsubscribeFromFuncionarioChanges: jest.fn(),
}));

describe('Funcionarios', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renderiza a tela com os departamentos e lista de funcionários', async () => {
        // Mock dos dados retornados pelo serviço
        funcionariosScreenService.fetchFuncionarios.mockResolvedValue([
            { id: 1, nomeFuncionario: 'João', cargoFuncionario: 'Desenvolvedor', deptFuncionario: 'FrontEnd', urlFoto: '...' },
            { id: 2, nomeFuncionario: 'Maria', cargoFuncionario: 'Designer', deptFuncionario: 'Design', urlFoto: '...' },
        ]);

        const { getByText, getAllByText } = render(<Funcionarios route={{}} navigation={{ navigate: jest.fn(), goBack: jest.fn() }} />);

        // Verifica se os departamentos são renderizados
        await waitFor(() => {
            expect(getByText('Todos')).toBeTruthy();
            expect(getByText('Gerência')).toBeTruthy();
            expect(getByText('DevOps')).toBeTruthy();
            // ... outros departamentos
        });

        // Verifica se os funcionários são renderizados
        await waitFor(() => {
            expect(getAllByText('João')).toHaveLength(1);
            expect(getAllByText('Maria')).toHaveLength(1);
        });
    });

    it('filtra a lista de funcionários ao selecionar um departamento', async () => {
        // ... (mesmo mock de dados do teste anterior)

        const { getByText, queryAllByText, getAllByText } = render(<Funcionarios route={{}} navigation={{ navigate: jest.fn(), goBack: jest.fn() }} />);

        // Seleciona o departamento 'Design'
        fireEvent.press(getByText('Design'));

        // Aguarda a atualização da lista de funcionários
        await waitFor(() => {
            // Verifica se 'João' não está presente na lista (pode não existir após a filtragem)
            expect(queryAllByText('João')).toHaveLength(0);
            // Verifica se apenas 'Maria' está presente na lista
            expect(getAllByText('Maria')).toHaveLength(1);
        });
    });

    // Outros testes possíveis:
    // - Testa se a função handleOpenFuncionarioDetails é chamada corretamente ao clicar em um funcionário
    // - Testa se a função handleGoBack é chamada ao clicar no botão de voltar
    // - Testa se a inscrição no Supabase é feita e removida corretamente
    // - ...
});