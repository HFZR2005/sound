function Button ( {Text} ) {
    const playSound = () => {
        const audio = new Audio("/sounds/click_002.mp3");
      audio.play()
    };
  return (      
    <button
    type="button"
    className="inline-flex w-36 rounded-md justify-center gap-x-1.5 bg-secondary hover:bg-quaternary px-3 py-2 border-black border-2 focus:outline-none hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-secondary h-11"
    onClick={playSound}>
    {Text}
    </button>
)}

export default Button;