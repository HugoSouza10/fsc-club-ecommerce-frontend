import { render } from '@testing-library/react'
import CustomInput from './custom-input.component'
import Colors from '../../theme/theme.colors'
describe('Custom Input 2', () => {
    //Se a propriedade hasError for verdadeira, 
    // o componente deve ser renderizado com um estilo de borda vermelha.
    it('should render with error if hasError2 is true', () => {
        const {getByPlaceholderText} = render(
            <CustomInput placeholder='Lorem ipsum' hasError = {true}/>
        )

        const input = getByPlaceholderText('Lorem ipsum');
        expect(input).toHaveStyle({border: `2px solid ${Colors.error}`})
    })
    it('should render without error if hasError2 is false', () => {
        const {getByPlaceholderText} = render(<CustomInput placeholder='Lorem ipsum' hasError = {false}/>)
        const input = getByPlaceholderText('Lorem ipsum');
        expect(input).toHaveStyle({border: 'none'})
    })
})