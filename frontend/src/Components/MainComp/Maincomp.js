import React, { useMemo, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Transaction from '../../ViewTransaction/Transaction';
import styled from 'styled-components';
import Income from '../Income/Income';
import Expenses from '../Expenses/Expenses';
import Login from '../Login/Login';
import Orb from '../Orb/Orb';
import SignUp from '../SignUp/SignUp';
import Navigation from '../Navigation/Navigation';
import { MainLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';

function Maincomp() {

    const [active, setActive] = useState(1)

  const {isSubmit} = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Login />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <Main>
       {orbMemo}
      
      {isSubmit ? 
      <MainLayout>
      <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main> 
      </MainLayout>
      : <SignUp/>}  
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default Maincomp;
