
import { CoinGrid } from "src/entities";
import { Header } from "src/layout";
import { Wrapper } from "src/shared";


export const HomePage = (): JSX.Element => {
 
    return (
        <Wrapper>
            <Header />
            <CoinGrid favorites/>
            <CoinGrid/>
        </Wrapper>
    )
}

