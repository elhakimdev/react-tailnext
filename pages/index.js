import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-row items-center min-h-screen">
      <div className="container mx-auto">
        <h1 className="self-center text-5xl font-bold text-gray-700">Welcome next app</h1>
        <h3 className="self-center text-xl font-bold text-gray-700">Front End made easy</h3>
      </div>
    </div>
  )
}
