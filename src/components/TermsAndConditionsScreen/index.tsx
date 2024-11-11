// src/screens/TermsAndConditionsScreen/index.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Termos e Condições</Text>
      </View>

      {/* Conteúdo de Termos e Condições */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.text}>
          {`Termos e Condições de Uso do BinasJC

Bem-vindo ao BinasJC! Estes Termos e Condições de Uso descrevem as regras que regem a utilização de nossos serviços. Ao usar o aplicativo BinasJC, você concorda com estes termos. Caso não concorde, pedimos que não use nossos serviços.

1. Definições
- BinasJC: Aplicativo de gestão de bicicletas compartilhadas.
- Usuário: Pessoa que acessa e utiliza o BinasJC.
- Serviço: O uso do aplicativo para encontrar, alugar e devolver bicicletas.

2. Elegibilidade
Para usar o BinasJC, você deve ter pelo menos 18 anos ou a idade legal para celebrar contratos em sua jurisdição. Menores de idade devem ter o consentimento de um responsável.

3. Cadastro e Segurança
- O usuário deve fornecer informações verdadeiras e completas durante o cadastro.
- O usuário é responsável por manter suas informações atualizadas e proteger suas credenciais de acesso.
- É proibido compartilhar sua conta com terceiros.

4. Uso do Serviço
- Aluguel de Bicicletas: As bicicletas devem ser alugadas e devolvidas nas estações designadas.
- Responsabilidade: O usuário é responsável pelo cuidado e devolução da bicicleta em boas condições.
- Regras de Trânsito: O usuário deve seguir todas as leis de trânsito e sinalizações enquanto usa as bicicletas.

5. Pagamentos e Tarifas
- Taxas de Aluguel: O valor do aluguel será calculado com base no tempo de uso.
- Penalidades: Multas poderão ser aplicadas em caso de devolução fora das zonas permitidas ou por danos causados à bicicleta.

6. Pontos e Recompensas
- Acúmulo de Pontos: O usuário pode acumular pontos ao completar corridas. Os pontos podem ser trocados por recompensas oferecidas pelo BinasJC.
- Uso dos Pontos: Pontos não têm valor monetário e não podem ser transferidos ou convertidos em dinheiro.
- Expiração dos Pontos: Pontos acumulados podem expirar após um período específico de inatividade.

7. Propriedade Intelectual
Todo o conteúdo, incluindo texto, imagens, gráficos e software do BinasJC, é de propriedade exclusiva do BinasJC ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia.

8. Limitação de Responsabilidade
- O BinasJC não se responsabiliza por acidentes, danos ou lesões sofridos durante o uso do serviço.
- O BinasJC não garante que o serviço será ininterrupto, seguro ou livre de erros.

9. Privacidade
Ao usar o BinasJC, você concorda com nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais.

10. Modificações dos Termos
O BinasJC reserva-se o direito de alterar estes Termos a qualquer momento. O usuário será notificado de quaisquer mudanças, e o uso contínuo do serviço após as alterações indica aceitação dos novos termos.

11. Rescisão
O BinasJC pode suspender ou encerrar a conta do usuário em caso de violação destes Termos.

12. Lei Aplicável
Estes Termos são regidos pelas leis locais onde o serviço é operado. Em caso de disputa, o usuário concorda em se submeter à jurisdição dos tribunais competentes.

13. Contato
Se você tiver dúvidas sobre estes Termos, entre em contato com nosso suporte pelo e-mail suporte@binasjc.com.

Data de Vigência: [11-11-2024]`}
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionsScreen;
