//Styled
import { PageContainer } from './styles'

//Header
import { Header } from '../../components/Header'

//Outlet
import { Outlet } from 'react-router-dom'

export function DefaultLayout(){
    return(
        <>
            <Header />
            <PageContainer>
                <Outlet />
            </PageContainer>
        </>
    )
}