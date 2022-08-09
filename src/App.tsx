import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  )
}

/**
 * Preferir a utilização do export ao inves do
 * export default porque com o default o componente
 * que importa esse componente pode utlizar qualque nomenclatura
 * com isso  fica mais dificil mapear, e outra a importação
 * automaitca do vscode fica melhro
 */
