import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { HeadManagerContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints'
import React from 'react'

const Home = () => {
  const loggedIn ={ firstName:"Viv", lastName:"C",email:"sample@email.com"}
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          
          />
        </header>
        RECENT TRANSACTIONS
      </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 123.98}, {currentBalance: 123.98}]}
/>

    </section>
  )
}

export default Home