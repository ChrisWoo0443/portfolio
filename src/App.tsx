
import { WindowManagerProvider } from './context/WindowManagerContext';
import Desktop from './components/Desktop/Desktop';
import WindowManager from './components/WindowManager/WindowManager';
import Dock from './components/Dock/Dock';
import MenuBar from './components/MenuBar/MenuBar';
import apps from './data/apps';
import './App.css'

function App() {
  return (
    <WindowManagerProvider>
      <div 
        className="app"
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <MenuBar appName="Portfolio" />
        <Desktop apps={apps} />
        <WindowManager apps={apps} />
        <Dock apps={apps} />
      </div>
    </WindowManagerProvider>
  )
}

export default App
