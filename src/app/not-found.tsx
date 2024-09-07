
const notFound = () => {
  return (
     <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Page not found</p>
      <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">Go back home</a>
    </div>
  )
}

export default notFound 
