function LoadingSpinner() {
    return (
      <div
        role="status"
        className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
      >
        <div className="relative flex">
          {/* Animated dots */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 mx-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  
  export default LoadingSpinner