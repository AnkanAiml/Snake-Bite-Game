import React from 'react';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import GameOverModal from './components/GameOverModal';
import Instructions from './components/Instructions';
import { useGameLogic } from './hooks/useGameLogic';

const App: React.FC = () => {
  const {
    gridSize,
    snake,
    food,
    score,
    isGameOver,
    isRunning,
    isPaused,
    isFoodWarning,
    startGame,
    restartGame,
  } = useGameLogic();

  return (
    <div className="bg-gradient-to-br from-cyan-900 to-blue-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-mono antialiased">
      <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        <header className="flex justify-between items-center mb-4 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-300 tracking-wider">
            Snake Bite
          </h1>
          <Scoreboard score={score} />
        </header>

        <main className="relative">
          <GameBoard 
            gridSize={gridSize} 
            snake={snake} 
            food={food} 
            isFoodWarning={isFoodWarning}
          />
           {isPaused && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg z-20">
                <h2 className="text-5xl font-bold text-white animate-pulse">Paused</h2>
            </div>
           )}
          <GameOverModal
            isGameOver={isGameOver}
            score={score}
            onRestart={restartGame}
          />
          {!isRunning && !isGameOver && <Instructions onStart={startGame} />}
        </main>
      </div>
       <footer className="text-center mt-8 text-blue-300 text-sm">
        <p>Use Arrow Keys to move. Eat the glowing insects to grow.</p>
        <p>Press 'P' to Pause/Resume. Avoid the edges and your own tail!</p>
      </footer>
    </div>
  );
};

export default App;
