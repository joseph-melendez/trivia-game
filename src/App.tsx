import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProgrammingGoals } from './components/ProgrammingGoals';
import { StartGame } from './components/StartGame';
import { Routes, Route } from 'react-router';
import { Play } from './components/Play';
import { GetFullPath } from './utils/GetFullPath';
import './App.css'

function App() {
  const queryClient = new QueryClient ({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: 1000,
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className='app-size'>
        <h1>Trivia Game</h1>
        <Routes>
          <Route path={GetFullPath('/about')} element={<ProgrammingGoals />} />
          <Route path={GetFullPath('/play/:rounds')} element={<Play />} />
          <Route path={GetFullPath('/')} element={<StartGame />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App