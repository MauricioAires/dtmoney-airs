import { logoImg } from '../../assets'

/**
 * A linha de componente importados fica bem menor
 * e o sufixo S( Styles ) faz com que seja possivel diferencair
 * componentes de componentes styles-componenets
 */
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </S.Content>
    </S.Container>
  )
}
