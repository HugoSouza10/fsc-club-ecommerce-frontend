import {render} from '@testing-library/react';
import CustomButton from './custom-button.component';
//Describe: Define o nome do teste, que é "Custom Button 2". 
// O segundo argumento é uma função de callback onde os testes serão escritos.
describe('Custom Button 2', () => {
    it('should render with correct children 2', () => {
        //Renderiza o componente CustomButton com o texto "lorem ipsum" como filho.
        const {getByText} = render(<CustomButton>lorem ipsum</CustomButton>);
        //Verifica se o texto "lorem ipsum" está presente no componente renderizado.
        getByText('lorem ipsum');
    })
})