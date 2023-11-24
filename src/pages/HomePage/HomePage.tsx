import { useEffect } from "react";
import { Header } from "src/layout";
import { Wrapper } from "src/shared";
import { instance } from "src/shared/api/typicode/base";


export const HomePage = (): JSX.Element => {

    useEffect(() => {
        instance.get('/data/blockchain/list').then(data => console.log("data: ", data))
    }, [])

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    )
}

