import { Header } from "src/layout";
import { Logo, Wrapper } from "src/shared";
import { Navbar } from "src/widgets";


export const HomePage = (): JSX.Element => {
    return (
        <Wrapper>
            <Header>
                <Logo />
                <Navbar/>
            </Header>
        </Wrapper>
    )
}

