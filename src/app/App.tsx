import { Wrapper } from 'src/shared';
import { Header } from 'src/layout';

import { AppRouter } from './provider';

import './styles/index.css';

export const App = (): JSX.Element =>  {

  return (
    <Wrapper>
      <Header />
      <AppRouter />
    </Wrapper>
  )
}

